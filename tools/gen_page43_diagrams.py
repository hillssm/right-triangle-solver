#!/usr/bin/env python3
"""gen_page43_diagrams.py - 8 SVG diagrams for Page 43 (5-12-13 Triangle Calculator).

Style matches the Page 42 generator: 1200x630, dark #131313 bg, gold #f1c97d strokes,
green #4ade80, blue #7dd3fc, white labels.
Geometry: triangle ABC, angle A = 22.62 deg, B = 67.38 deg, C = 90 deg.
a = 5 (shorter leg, opposite 22.62 deg), b = 12 (longer leg, opposite
67.38 deg), c = 13 (hypotenuse). Layout: C bottom-left, A bottom-right
(leg b horizontal), B top-left (leg a vertical).
Angles are asserted numerically (22.62/67.38/90 within 0.5 deg) and side
lengths proportional 5:12:13 within 0.5 px. No SVG arc (A) commands
anywhere; angle arcs are polyline approximations. No captions inside the
SVGs: captions live in the guide JSON. Outputs: public/images/five-twelve-thirteen/*.svg
"""
import math
import os
import re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "images", "five-twelve-thirteen")
os.makedirs(OUT, exist_ok=True)

GOLD = "#f1c97d"
GREEN = "#4ade80"
BLUE = "#7dd3fc"
WHITE = "#ffffff"
GREY = "#a3a3a3"

ANG_A = 22.62
ANG_B = 67.38


def dist(P, Q):
    return math.hypot(P[0] - Q[0], P[1] - Q[1])


def dot(u, v):
    return u[0] * v[0] + u[1] * v[1]


def angle_at(P, Q, R):
    """Angle QPR in degrees (screen coords, y down; magnitude only)."""
    u = (Q[0] - P[0], Q[1] - P[1])
    v = (R[0] - P[0], R[1] - P[1])
    cosang = dot(u, v) / (math.hypot(*u) * math.hypot(*v))
    return math.degrees(math.acos(max(-1.0, min(1.0, cosang))))


def build_51213(C, S):
    """5-12-13 triangle: C bottom-left, A bottom-right, B top-left."""
    A = (C[0] + 12 * S, C[1])
    B = (C[0], C[1] - 5 * S)
    g = {"C": C, "A": A, "B": B, "a": 5, "b": 12, "c": 13, "S": S}
    assert abs(dist(C, A) - 12 * S) < 0.5, "AC length"
    assert abs(dist(C, B) - 5 * S) < 0.5, "BC length"
    assert abs(dist(A, B) - 13 * S) < 0.5, "AB length"
    assert abs(dot((A[0] - C[0], A[1] - C[1]),
                   (B[0] - C[0], B[1] - C[1]))) < 0.5, "right angle at C"
    assert abs(angle_at(A, C, B) - ANG_A) < 0.5, f"angle at A {angle_at(A, C, B)}"
    assert abs(angle_at(B, A, C) - ANG_B) < 0.5, f"angle at B {angle_at(B, A, C)}"
    assert abs(angle_at(C, A, B) - 90) < 0.5, "angle at C"
    return g


# ---------------------------------------------------------------- helpers

def header(title):
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" '
        'font-family="Manrope, Inter, system-ui, sans-serif">\n'
        '  <rect x="0" y="0" width="1200" height="630" fill="#131313"/>\n'
        f'  <text x="600" y="58" font-size="28" font-weight="700" fill="#ffffff" text-anchor="middle">{title}</text>\n'
    )


def footer():
    return "</svg>\n"


def text(L, x, y, s, size=26, weight=700, color=WHITE, anchor="middle"):
    L.append(f'  <text x="{x:.1f}" y="{y:.1f}" font-size="{size}" font-weight="{weight}" fill="{color}" text-anchor="{anchor}">{s}</text>')


def triangle(L, g, fill_opacity="0.04", width=7):
    A, B, C = g["A"], g["B"], g["C"]
    pts = f"{A[0]:.1f},{A[1]:.1f} {B[0]:.1f},{B[1]:.1f} {C[0]:.1f},{C[1]:.1f}"
    L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="{fill_opacity}" stroke="none"/>')
    L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="{width}" stroke-linejoin="round"/>')


def vertex_dots(L, pts, color=GOLD, r=9):
    for P in pts:
        L.append(f'  <circle cx="{P[0]:.1f}" cy="{P[1]:.1f}" r="{r}" fill="{color}"/>')


def line(L, P, Q, color, width, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    L.append(f'  <line x1="{P[0]:.1f}" y1="{P[1]:.1f}" x2="{Q[0]:.1f}" y2="{Q[1]:.1f}" stroke="{color}" stroke-width="{width}" stroke-linecap="round"{d}/>')


def ra_marker(L, P, u, v, s=20, color=WHITE, width=3):
    """Small square at P, sides along unit vectors u and v."""
    p1 = (P[0] + u[0] * s, P[1] + u[1] * s)
    p2 = (p1[0] + v[0] * s, p1[1] + v[1] * s)
    p3 = (P[0] + v[0] * s, P[1] + v[1] * s)
    L.append(f'  <polyline points="{p1[0]:.1f},{p1[1]:.1f} {p2[0]:.1f},{p2[1]:.1f} {p3[0]:.1f},{p3[1]:.1f}" fill="none" stroke="{color}" stroke-width="{width}"/>')


def arc_polyline(L, cx, cy, r, a0, a1, n=14, color=GOLD, width=3):
    """Angle arc from screen-angle a0 to a1 (degrees, y down)."""
    pts = []
    for i in range(n + 1):
        t = math.radians(a0 + (a1 - a0) * i / n)
        pts.append(f"{cx + r * math.cos(t):.1f},{cy + r * math.sin(t):.1f}")
    L.append(f'  <polyline points="{" ".join(pts)}" fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round"/>')


def angle_labels_51213(L, g, r=58, lab_r=92):
    """22.62 deg arc + label at A, 67.38 deg arc + label at B, square at C."""
    A, B, C = g["A"], g["B"], g["C"]
    # At A: interior between AC (180 deg) and AB (216.87 deg, screen angle)
    arc_polyline(L, A[0], A[1], r, 180, 180 + ANG_A)
    lx, ly = A[0] + lab_r * math.cos(math.radians(180 + ANG_A / 2)), A[1] + lab_r * math.sin(math.radians(180 + ANG_A / 2))
    text(L, lx, ly + 8, "22.62°", size=24, color=GOLD)
    # At B: interior between BA (22.62 deg) and BC (90 deg, screen angle)
    arc_polyline(L, B[0], B[1], r, ANG_A, 90)
    lx, ly = B[0] + lab_r * math.cos(math.radians((ANG_A + 90) / 2)), B[1] + lab_r * math.sin(math.radians((ANG_A + 90) / 2))
    text(L, lx, ly + 8, "67.38°", size=24, color=GOLD)
    # Right-angle square at C: along AC (+x), into triangle (-y)
    ra_marker(L, C, (1, 0), (0, -1), 20)
    text(L, C[0] + 52, C[1] - 34, "90°", size=24, color=GOLD)


def vertex_labels(L, g):
    A, B, C = g["A"], g["B"], g["C"]
    text(L, A[0] + 30, A[1] + 8, "A", size=26, anchor="start")
    text(L, B[0], B[1] - 26, "B", size=26)
    text(L, C[0] - 30, C[1] + 8, "C", size=26)


def side_labels(L, g, a_text, b_text, c_text, a_color=BLUE, b_color=GOLD, c_color=WHITE):
    A, B, C = g["A"], g["B"], g["C"]
    text(L, C[0] - 58, (B[1] + C[1]) / 2 + 9, a_text, size=28, color=a_color)
    text(L, (A[0] + C[0]) / 2, C[1] + 52, b_text, size=28, color=b_color)
    mx, my = (A[0] + B[0]) / 2, (A[1] + B[1]) / 2
    text(L, mx + 40, my - 62, c_text, size=28, color=c_color)


def formula_line(L, s, y=108, size=30, color=GOLD):
    text(L, 600, y, s, size=size, color=color)


def write(name, svg):
    assert "<path" not in svg, f"path element in {name}"
    assert re.search(r'\bd="[^"]*\sA[\s,]', svg) is None, f"arc command in {name}"
    path = os.path.join(OUT, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    print("wrote", path)


# ---------------------------------------------------------------- diagrams

# --- Diagram 1: complete 5-12-13 triangle --------------------------------
G1 = build_51213((210, 500), 65)
L = [header("5-12-13 Triangle")]
triangle(L, G1)
vertex_dots(L, [G1["A"], G1["B"], G1["C"]])
vertex_labels(L, G1)
angle_labels_51213(L, G1)
side_labels(L, G1, "a = 5", "b = 12", "c = 13")
text(L, 600, 585, "a : b : c = 5 : 12 : 13", size=28, color=GREEN)
L.append(footer())
write("five-twelve-thirteen-main.svg", "".join(x + "\n" for x in L))

# --- Diagram 2: Pythagorean proof ----------------------------------------
G2 = build_51213((250, 480), 52)
L = [header("Why 5-12-13 Is a Pythagorean Triple")]
formula_line(L, "5² + 12² = 13²      25 + 144 = 169")
triangle(L, G2)
vertex_dots(L, [G2["A"], G2["B"], G2["C"]])
vertex_labels(L, G2)
angle_labels_51213(L, G2)
text(L, G2["C"][0] - 72, (G2["B"][1] + G2["C"][1]) / 2 + 9, "5² = 25", size=26, color=BLUE)
text(L, (G2["A"][0] + G2["C"][0]) / 2, G2["C"][1] + 52, "12² = 144", size=26, color=GOLD)
mx, my = (G2["A"][0] + G2["B"][0]) / 2, (G2["A"][1] + G2["B"][1]) / 2
text(L, mx + 52, my - 52, "13² = 169", size=26, color=WHITE)
text(L, 600, 585, "25 + 144 = 169, so the angle opposite 13 is 90°", size=28, color=GREEN)
L.append(footer())
write("five-twelve-thirteen-pythagoras.svg", "".join(x + "\n" for x in L))

# --- Diagram 3: three scaled triangles ------------------------------------
L = [header("Three Scaled Triangles, One Shape")]
G3a = build_51213((40, 520), 20)
triangle(L, G3a)
vertex_dots(L, [G3a["A"], G3a["B"], G3a["C"]])
ra_marker(L, G3a["C"], (1, 0), (0, -1), 16)
text(L, 160, 565, "5-12-13", size=28, color=GREEN)
text(L, 160, 150, "k = 1", size=24, color=GREY)
G3b = build_51213((330, 520), 27)
triangle(L, G3b)
vertex_dots(L, [G3b["A"], G3b["B"], G3b["C"]])
ra_marker(L, G3b["C"], (1, 0), (0, -1), 16)
text(L, 492, 565, "10-24-26", size=28, color=GREEN)
text(L, 492, 150, "k = 2", size=24, color=GREY)
G3c = build_51213((700, 520), 34)
triangle(L, G3c)
vertex_dots(L, [G3c["A"], G3c["B"], G3c["C"]])
ra_marker(L, G3c["C"], (1, 0), (0, -1), 16)
text(L, 904, 565, "15-36-39", size=28, color=GREEN)
text(L, 904, 150, "k = 3", size=24, color=GREY)
text(L, 600, 108, "Same proportions, same angles", size=28, color=GOLD)
L.append(footer())
write("five-twelve-thirteen-scaled.svg", "".join(x + "\n" for x in L))

# --- Diagram 4: scale factor k = 2 ----------------------------------------
G4 = build_51213((230, 505), 60)
L = [header("Scale Factor  k = 2")]
formula_line(L, "a = 5k      b = 12k      c = 13k")
triangle(L, G4)
vertex_dots(L, [G4["A"], G4["B"], G4["C"]])
vertex_labels(L, G4)
angle_labels_51213(L, G4)
side_labels(L, G4, "a = 10", "b = 24", "c = 26")
text(L, 600, 585, "k = 2 gives 10, 24, 26", size=28, color=GREEN)
L.append(footer())
write("five-twelve-thirteen-scale-factor.svg", "".join(x + "\n" for x in L))

# --- Diagram 5: area -------------------------------------------------------
G5 = build_51213((230, 505), 60)
L = [header("Area of a Scaled 5-12-13 Triangle")]
formula_line(L, "A = ab / 2      A = 30k²")
triangle(L, G5)
vertex_dots(L, [G5["A"], G5["B"], G5["C"]])
vertex_labels(L, G5)
ra_marker(L, G5["C"], (1, 0), (0, -1), 20)
text(L, G5["C"][0] - 96, (G5["B"][1] + G5["C"][1]) / 2 + 9, "height = 12k", size=26, color=BLUE)
text(L, (G5["A"][0] + G5["C"][0]) / 2, G5["C"][1] + 52, "base = 5k", size=26, color=GOLD)
text(L, 600, 585, "k = 2 gives A = 120 square units", size=28, color=GREEN)
L.append(footer())
write("five-twelve-thirteen-area.svg", "".join(x + "\n" for x in L))

# --- Diagram 6: perimeter --------------------------------------------------
G6 = build_51213((230, 505), 60)
L = [header("Perimeter of a Scaled 5-12-13 Triangle")]
formula_line(L, "P = 5k + 12k + 13k = 30k")
triangle(L, G6)
vertex_dots(L, [G6["A"], G6["B"], G6["C"]])
vertex_labels(L, G6)
ra_marker(L, G6["C"], (1, 0), (0, -1), 20)
side_labels(L, G6, "a = 5k", "b = 12k", "c = 13k")
text(L, 600, 585, "k = 2 gives P = 60 units", size=28, color=GREEN)
L.append(footer())
write("five-twelve-thirteen-perimeter.svg", "".join(x + "\n" for x in L))

# --- Diagram 7: angle relationship -----------------------------------------
G7 = build_51213((230, 505), 60)
L = [header("Angles of a 5-12-13 Triangle")]
formula_line(L, "The two acute angles add to 90°")
triangle(L, G7)
vertex_dots(L, [G7["A"], G7["B"], G7["C"]])
vertex_labels(L, G7)
angle_labels_51213(L, G7)
side_labels(L, G7, "a = 5", "b = 12", "c = 13")
text(L, 600, 585, "22.62° + 67.38° = 90°", size=28, color=GREEN)
L.append(footer())
write("five-twelve-thirteen-angles.svg", "".join(x + "\n" for x in L))

# --- Diagram 8: Euclid's formula flow --------------------------------------
def box(L, x, y, w, h, stroke=GOLD, fill="#1c1b1b"):
    L.append(f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{fill}" stroke="{stroke}" stroke-width="3"/>')


def arrow_down(L, x, y0, y1, color=GOLD):
    L.append(f'  <line x1="{x}" y1="{y0}" x2="{x}" y2="{y1 - 10}" stroke="{color}" stroke-width="3" stroke-linecap="round"/>')
    L.append(f'  <polyline points="{x - 8},{y1 - 12} {x},{y1} {x + 8},{y1 - 12}" fill="none" stroke="{color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>')


L = [header("Euclid's Formula: m = 3, n = 2")]
box(L, 450, 88, 300, 60)
text(L, 600, 126, "m = 3,  n = 2", size=30, color=WHITE)
# arrows from the m,n box to the three formula boxes
for cx in (195, 600, 1005):
    L.append(f'  <line x1="600" y1="148" x2="600" y2="180" stroke="{GOLD}" stroke-width="3" stroke-linecap="round"/>')
    break
L.append(f'  <line x1="195" y1="180" x2="1005" y2="180" stroke="{GOLD}" stroke-width="3" stroke-linecap="round"/>')
arrow_down(L, 195, 180, 250)
arrow_down(L, 600, 148, 250)
arrow_down(L, 1005, 180, 250)
box(L, 30, 250, 330, 90)
text(L, 195, 286, "a = m² − n²", size=28, color=BLUE)
text(L, 195, 322, "= 9 − 4 = 5", size=28, color=WHITE)
box(L, 435, 250, 330, 90)
text(L, 600, 286, "b = 2mn", size=28, color=GOLD)
text(L, 600, 322, "= 2(3)(2) = 12", size=28, color=WHITE)
box(L, 840, 250, 330, 90)
text(L, 1005, 286, "c = m² + n²", size=28, color=GREEN)
text(L, 1005, 322, "= 9 + 4 = 13", size=28, color=WHITE)
# merge arrows down to the result box
for cx in (195, 600, 1005):
    L.append(f'  <line x1="{cx}" y1="340" x2="{cx}" y2="392" stroke="{GOLD}" stroke-width="3" stroke-linecap="round"/>')
L.append(f'  <line x1="195" y1="392" x2="1005" y2="392" stroke="{GOLD}" stroke-width="3" stroke-linecap="round"/>')
arrow_down(L, 600, 392, 450)
box(L, 450, 450, 300, 60, stroke=GREEN)
text(L, 600, 488, "5 : 12 : 13", size=32, color=GREEN)
text(L, 600, 585, "m = 3, n = 2 gives 5, 12, 13", size=28, color=GREEN)
L.append(footer())
write("five-twelve-thirteen-euclid.svg", "".join(x + "\n" for x in L))

print("all 8 diagrams written")
