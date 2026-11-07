#!/usr/bin/env python3
"""gen_page42_diagrams.py - 8 SVG diagrams for Page 42 (3-4-5 Triangle Calculator).

Style matches the earlier 45-45-90 generator: 1200x630, dark #131313 bg, gold #f1c97d strokes,
green #4ade80, blue #7dd3fc, white labels.
Geometry: triangle ABC, angle A = 36.87 deg, B = 53.13 deg, C = 90 deg.
a = 3 (shorter leg, opposite 36.87 deg), b = 4 (longer leg, opposite
53.13 deg), c = 5 (hypotenuse). Layout: C bottom-left, A bottom-right
(leg b horizontal), B top-left (leg a vertical).
Angles are asserted numerically (36.87/53.13/90 within 0.5 deg) and side
lengths proportional 3:4:5 within 0.5 px. No SVG arc (A) commands
anywhere; angle arcs are polyline approximations. No captions inside the
SVGs: captions live in the guide JSON. Outputs: public/images/three-four-five/*.svg
"""
import math
import os
import re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "images", "three-four-five")
os.makedirs(OUT, exist_ok=True)

GOLD = "#f1c97d"
GREEN = "#4ade80"
BLUE = "#7dd3fc"
WHITE = "#ffffff"
GREY = "#a3a3a3"

ANG_A = 36.87
ANG_B = 53.13


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


def build_345(C, S):
    """3-4-5 triangle: C bottom-left, A bottom-right, B top-left."""
    A = (C[0] + 4 * S, C[1])
    B = (C[0], C[1] - 3 * S)
    g = {"C": C, "A": A, "B": B, "a": 3, "b": 4, "c": 5, "S": S}
    assert abs(dist(C, A) - 4 * S) < 0.5, "AC length"
    assert abs(dist(C, B) - 3 * S) < 0.5, "BC length"
    assert abs(dist(A, B) - 5 * S) < 0.5, "AB length"
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


def angle_labels_345(L, g, r=58, lab_r=92):
    """36.87 deg arc + label at A, 53.13 deg arc + label at B, square at C."""
    A, B, C = g["A"], g["B"], g["C"]
    # At A: interior between AC (180 deg) and AB (216.87 deg, screen angle)
    arc_polyline(L, A[0], A[1], r, 180, 180 + ANG_A)
    lx, ly = A[0] + lab_r * math.cos(math.radians(180 + ANG_A / 2)), A[1] + lab_r * math.sin(math.radians(180 + ANG_A / 2))
    text(L, lx, ly + 8, "36.87°", size=24, color=GOLD)
    # At B: interior between BA (36.87 deg) and BC (90 deg, screen angle)
    arc_polyline(L, B[0], B[1], r, ANG_A, 90)
    lx, ly = B[0] + lab_r * math.cos(math.radians((ANG_A + 90) / 2)), B[1] + lab_r * math.sin(math.radians((ANG_A + 90) / 2))
    text(L, lx, ly + 8, "53.13°", size=24, color=GOLD)
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

# --- Diagram 1: complete 3-4-5 triangle ----------------------------------
G1 = build_345((340, 505), 105)
L = [header("3-4-5 Triangle")]
triangle(L, G1)
vertex_dots(L, [G1["A"], G1["B"], G1["C"]])
vertex_labels(L, G1)
angle_labels_345(L, G1)
side_labels(L, G1, "a = 3", "b = 4", "c = 5")
text(L, 600, 585, "a : b : c = 3 : 4 : 5", size=28, color=GREEN)
L.append(footer())
write("three-four-five-main.svg", "".join(x + "\n" for x in L))

# --- Diagram 2: Pythagorean proof ----------------------------------------
G2 = build_345((380, 480), 80)
L = [header("Why 3-4-5 Is a Pythagorean Triple")]
formula_line(L, "3² + 4² = 5²      9 + 16 = 25")
triangle(L, G2)
vertex_dots(L, [G2["A"], G2["B"], G2["C"]])
vertex_labels(L, G2)
angle_labels_345(L, G2)
text(L, G2["C"][0] - 72, (G2["B"][1] + G2["C"][1]) / 2 + 9, "3² = 9", size=26, color=BLUE)
text(L, (G2["A"][0] + G2["C"][0]) / 2, G2["C"][1] + 52, "4² = 16", size=26, color=GOLD)
mx, my = (G2["A"][0] + G2["B"][0]) / 2, (G2["A"][1] + G2["B"][1]) / 2
text(L, mx + 52, my - 52, "5² = 25", size=26, color=WHITE)
text(L, 600, 585, "9 + 16 = 25, so the angle opposite 5 is 90°", size=28, color=GREEN)
L.append(footer())
write("three-four-five-pythagoras.svg", "".join(x + "\n" for x in L))

# --- Diagram 3: three scaled triangles ------------------------------------
L = [header("Three Scaled Triangles, One Shape")]
G3a = build_345((80, 520), 40)
triangle(L, G3a)
vertex_dots(L, [G3a["A"], G3a["B"], G3a["C"]])
ra_marker(L, G3a["C"], (1, 0), (0, -1), 16)
text(L, 160, 565, "3-4-5", size=28, color=GREEN)
text(L, 160, 150, "k = 1", size=24, color=GREY)
G3b = build_345((330, 520), 55)
triangle(L, G3b)
vertex_dots(L, [G3b["A"], G3b["B"], G3b["C"]])
ra_marker(L, G3b["C"], (1, 0), (0, -1), 16)
text(L, 440, 565, "6-8-10", size=28, color=GREEN)
text(L, 440, 150, "k = 2", size=24, color=GREY)
G3c = build_345((640, 520), 70)
triangle(L, G3c)
vertex_dots(L, [G3c["A"], G3c["B"], G3c["C"]])
ra_marker(L, G3c["C"], (1, 0), (0, -1), 16)
text(L, 780, 565, "9-12-15", size=28, color=GREEN)
text(L, 780, 150, "k = 3", size=24, color=GREY)
text(L, 600, 108, "Same proportions, same angles", size=28, color=GOLD)
L.append(footer())
write("three-four-five-scaled.svg", "".join(x + "\n" for x in L))

# --- Diagram 4: scale factor k = 2 ----------------------------------------
G4 = build_345((350, 500), 100)
L = [header("Scale Factor  k = 2")]
formula_line(L, "a = 3k      b = 4k      c = 5k")
triangle(L, G4)
vertex_dots(L, [G4["A"], G4["B"], G4["C"]])
vertex_labels(L, G4)
angle_labels_345(L, G4)
side_labels(L, G4, "a = 6", "b = 8", "c = 10")
text(L, 600, 585, "k = 2 gives 6, 8, 10", size=28, color=GREEN)
L.append(footer())
write("three-four-five-scale-factor.svg", "".join(x + "\n" for x in L))

# --- Diagram 5: area -------------------------------------------------------
G5 = build_345((350, 500), 100)
L = [header("Area of a Scaled 3-4-5 Triangle")]
formula_line(L, "A = ab / 2      A = 6k²")
triangle(L, G5)
vertex_dots(L, [G5["A"], G5["B"], G5["C"]])
vertex_labels(L, G5)
ra_marker(L, G5["C"], (1, 0), (0, -1), 20)
text(L, G5["C"][0] - 96, (G5["B"][1] + G5["C"][1]) / 2 + 9, "height = 4k", size=26, color=BLUE)
text(L, (G5["A"][0] + G5["C"][0]) / 2, G5["C"][1] + 52, "base = 3k", size=26, color=GOLD)
text(L, 600, 585, "k = 2 gives A = 24 square units", size=28, color=GREEN)
L.append(footer())
write("three-four-five-area.svg", "".join(x + "\n" for x in L))

# --- Diagram 6: perimeter --------------------------------------------------
G6 = build_345((350, 500), 100)
L = [header("Perimeter of a Scaled 3-4-5 Triangle")]
formula_line(L, "P = 3k + 4k + 5k = 12k")
triangle(L, G6)
vertex_dots(L, [G6["A"], G6["B"], G6["C"]])
vertex_labels(L, G6)
ra_marker(L, G6["C"], (1, 0), (0, -1), 20)
side_labels(L, G6, "a = 3k", "b = 4k", "c = 5k")
text(L, 600, 585, "k = 2 gives P = 24 units", size=28, color=GREEN)
L.append(footer())
write("three-four-five-perimeter.svg", "".join(x + "\n" for x in L))

# --- Diagram 7: construction 3-4-5 method ---------------------------------
# Corner C=(300,480); 3 ft along +x at 90 px/ft -> P=(570,480);
# 4 ft along -y at 90 px/ft -> Q=(300,120); diagonal P-Q = 450 px = 5 ft.
C7 = (300.0, 480.0)
P7 = (570.0, 480.0)
Q7 = (300.0, 120.0)
assert abs(dist(C7, P7) - 270) < 0.5
assert abs(dist(C7, Q7) - 360) < 0.5
assert abs(dist(P7, Q7) - 450) < 0.5
assert abs(angle_at(C7, P7, Q7) - 90) < 0.5
L = [header("The 3-4-5 Method for a Square Corner")]
pts = f"{C7[0]:.1f},{C7[1]:.1f} {P7[0]:.1f},{P7[1]:.1f} {Q7[0]:.1f},{Q7[1]:.1f}"
L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>')
vertex_dots(L, [C7, P7, Q7])
text(L, C7[0] - 34, C7[1] + 8, "Corner", size=24, anchor="end")
text(L, P7[0] + 30, P7[1] + 8, "3 ft mark", size=24, anchor="start")
text(L, Q7[0], Q7[1] - 26, "4 ft mark", size=24)
ra_marker(L, C7, (1, 0), (0, -1), 20)
text(L, C7[0] + 52, C7[1] - 34, "90°", size=24, color=GOLD)
text(L, (C7[0] + P7[0]) / 2, C7[1] + 52, "3 feet", size=28, color=GOLD)
text(L, C7[0] - 78, (C7[1] + Q7[1]) / 2 + 9, "4 feet", size=28, color=BLUE)
mx, my = (P7[0] + Q7[0]) / 2, (P7[1] + Q7[1]) / 2
text(L, mx + 96, my - 8, "5 feet", size=28, color=WHITE)
text(L, 850, 300, "3² + 4² = 5²", size=30, color=GREEN)
text(L, 850, 350, "9 + 16 = 25", size=30, color=GREEN)
text(L, 600, 585, "A 5 foot diagonal means the corner is square", size=28, color=GREEN)
L.append(footer())
write("three-four-five-construction.svg", "".join(x + "\n" for x in L))

# --- Diagram 8: comparing Pythagorean triples ----------------------------
def build_51213(C, S):
    """5-12-13 triangle: C bottom-left, A bottom-right, B top-left."""
    A = (C[0] + 12 * S, C[1])
    B = (C[0], C[1] - 5 * S)
    g = {"C": C, "A": A, "B": B, "a": 5, "b": 12, "c": 13, "S": S}
    assert abs(dist(C, A) - 12 * S) < 0.5
    assert abs(dist(C, B) - 5 * S) < 0.5
    assert abs(dist(A, B) - 13 * S) < 0.5
    assert abs(angle_at(C, A, B) - 90) < 0.5
    return g


L = [header("Comparing Pythagorean Triples")]
G8a = build_345((90, 500), 40)
triangle(L, G8a)
vertex_dots(L, [G8a["A"], G8a["B"], G8a["C"]])
ra_marker(L, G8a["C"], (1, 0), (0, -1), 16)
text(L, 170, 545, "3-4-5", size=28, color=GREEN)
text(L, 170, 580, "original", size=22, color=GREY)
G8b = build_345((330, 500), 55)
triangle(L, G8b)
vertex_dots(L, [G8b["A"], G8b["B"], G8b["C"]])
ra_marker(L, G8b["C"], (1, 0), (0, -1), 16)
text(L, 440, 545, "6-8-10", size=28, color=GREEN)
text(L, 440, 580, "scaled 3-4-5", size=22, color=GREY)
G8c = build_51213((640, 500), 30)
triangle(L, G8c)
vertex_dots(L, [G8c["A"], G8c["B"], G8c["C"]])
ra_marker(L, G8c["C"], (1, 0), (0, -1), 16)
text(L, 820, 545, "5-12-13", size=28, color=BLUE)
text(L, 820, 580, "different triple", size=22, color=GREY)
text(L, 600, 108, "6-8-10 is a scaled 3-4-5; 5-12-13 is a different triple", size=28, color=GOLD)
L.append(footer())
write("three-four-five-triples.svg", "".join(x + "\n" for x in L))

print("all 8 diagrams written")
