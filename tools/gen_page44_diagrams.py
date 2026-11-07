#!/usr/bin/env python3
"""gen_page44_diagrams.py - 8 SVG diagrams for Page 44 (Pythagorean Triples Calculator).

Style matches the Page 43 generator: 1200x630, dark #131313 bg, gold #f1c97d strokes,
green #4ade80, blue #7dd3fc, white labels.
Geometry: 3-4-5 triangle, angle A = 36.87 deg, B = 53.13 deg, C = 90 deg.
a = 3 (shorter leg, opposite 36.87 deg), b = 4 (longer leg, opposite
53.13 deg), c = 5 (hypotenuse). Layout: C bottom-left, A bottom-right
(leg b horizontal), B top-left (leg a vertical).
Angles are asserted numerically (36.87/53.13/90 within 0.5 deg) and side
lengths proportional within 0.5 px. No SVG arc (A) commands anywhere;
angle arcs are polyline approximations. No captions inside the SVGs:
captions live in the guide JSON. Outputs: public/images/pythagorean-triples/*.svg
"""
import math
import os
import re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "images", "pythagorean-triples")
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


def build_abc(C, a, b, S):
    """Right triangle: C bottom-left, A bottom-right (leg b), B top-left (leg a)."""
    c = math.hypot(a, b)
    assert abs(c - round(c)) < 1e-9, "not an integer hypotenuse"
    A = (C[0] + b * S, C[1])
    B = (C[0], C[1] - a * S)
    g = {"C": C, "A": A, "B": B, "a": a, "b": b, "c": int(round(c)), "S": S}
    assert abs(dist(C, A) - b * S) < 0.5, "AC length"
    assert abs(dist(C, B) - a * S) < 0.5, "BC length"
    assert abs(dist(A, B) - c * S) < 0.5, "AB length"
    assert abs(dot((A[0] - C[0], A[1] - C[1]),
                   (B[0] - C[0], B[1] - C[1]))) < 0.5, "right angle at C"
    return g


def build_345(C, S):
    g = build_abc(C, 3, 4, S)
    assert abs(angle_at(g["A"], g["C"], g["B"]) - ANG_A) < 0.5, f"angle at A {angle_at(g['A'], g['C'], g['B'])}"
    assert abs(angle_at(g["B"], g["A"], g["C"]) - ANG_B) < 0.5, f"angle at B {angle_at(g['B'], g['A'], g['C'])}"
    assert abs(angle_at(g["C"], g["A"], g["B"]) - 90) < 0.5, "angle at C"
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


def polygon(L, pts, fill="#ffffff", fill_opacity="0.04", stroke=GOLD, width=7):
    p = " ".join(f"{P[0]:.1f},{P[1]:.1f}" for P in pts)
    if fill is not None:
        L.append(f'  <polygon points="{p}" fill="{fill}" fill-opacity="{fill_opacity}" stroke="none"/>')
    L.append(f'  <polygon points="{p}" fill="none" stroke="{stroke}" stroke-width="{width}" stroke-linejoin="round"/>')


def triangle(L, g, fill_opacity="0.04", width=7):
    polygon(L, [g["A"], g["B"], g["C"]], fill_opacity=fill_opacity, width=width)


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
    # At A: interior between AC (180 deg) and AB (180+36.87 deg, screen angle)
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


def box(L, x, y, w, h, stroke=GOLD, fill="#1c1b1b"):
    L.append(f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{fill}" stroke="{stroke}" stroke-width="3"/>')


def arrow_down(L, x, y0, y1, color=GOLD):
    L.append(f'  <line x1="{x}" y1="{y0}" x2="{x}" y2="{y1 - 10}" stroke="{color}" stroke-width="3" stroke-linecap="round"/>')
    L.append(f'  <polyline points="{x - 8},{y1 - 12} {x},{y1} {x + 8},{y1 - 12}" fill="none" stroke="{color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>')


def arrow_to(L, P, Q, color=GOLD):
    """Straight arrow from P to Q (shortened at the head)."""
    dx, dy = Q[0] - P[0], Q[1] - P[1]
    n = math.hypot(dx, dy)
    ux, uy = dx / n, dy / n
    ex, ey = Q[0] - 12 * ux, Q[1] - 12 * uy
    L.append(f'  <line x1="{P[0]:.1f}" y1="{P[1]:.1f}" x2="{ex:.1f}" y2="{ey:.1f}" stroke="{color}" stroke-width="3" stroke-linecap="round"/>')
    # arrowhead: two short lines at +/- 150 deg from the direction
    for ang in (150, -150):
        t = math.radians(math.degrees(math.atan2(uy, ux)) + ang)
        hx, hy = Q[0] + 14 * math.cos(t), Q[1] + 14 * math.sin(t)
        L.append(f'  <line x1="{Q[0]:.1f}" y1="{Q[1]:.1f}" x2="{hx:.1f}" y2="{hy:.1f}" stroke="{color}" stroke-width="3" stroke-linecap="round"/>')


def write(name, svg):
    assert "<path" not in svg, f"path element in {name}"
    assert re.search(r'\bd="[^"]*\sA[\s,]', svg) is None, f"arc command in {name}"
    path = os.path.join(OUT, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    print("wrote", path)


# ---------------------------------------------------------------- diagrams

# --- Diagram 1: basic 3-4-5 triangle --------------------------------------
G1 = build_345((210, 500), 65)
L = [header("Pythagorean Triple  3-4-5")]
formula_line(L, "a² + b² = c²      3² + 4² = 5²")
triangle(L, G1)
vertex_dots(L, [G1["A"], G1["B"], G1["C"]])
vertex_labels(L, G1)
angle_labels_345(L, G1)
side_labels(L, G1, "a = 3", "b = 4", "c = 5")
text(L, 600, 585, "9 + 16 = 25, so the angle opposite 5 is 90°", size=28, color=GREEN)
L.append(footer())
write("pythagorean-triples-theorem.svg", "".join(x + "\n" for x in L))

# --- Diagram 2: square area proof -----------------------------------------
# Triangle: C=(340,410), A=(500,410), B=(340,290), S=40. Squares on each side.
C2, A2, B2 = (340, 410), (500, 410), (340, 290)
G2 = build_345(C2, 40)
L = [header("Squares on 3, 4, and 5")]
formula_line(L, "3² + 4² = 5²      9 + 16 = 25")
# Square on leg a (BC, vertical): extends left from BC
sq_a = [C2, B2, (220, 290), (220, 410)]
polygon(L, sq_a, fill="#7dd3fc", fill_opacity="0.10", stroke=BLUE, width=4)
text(L, 270, 358, "9", size=30, color=BLUE)
text(L, 270, 392, "3²", size=24, color=BLUE)
# Square on leg b (AC, horizontal): extends down from AC
sq_b = [C2, A2, (500, 570), (340, 570)]
polygon(L, sq_b, fill="#f1c97d", fill_opacity="0.10", stroke=GOLD, width=4)
text(L, 420, 500, "16", size=30, color=GOLD)
# Square on hypotenuse AB: outward normal (0.6, -0.8) * 200
n = (0.6, -0.8)
sq_c = [A2, B2, (B2[0] + 200 * n[0], B2[1] + 200 * n[1]), (A2[0] + 200 * n[0], A2[1] + 200 * n[1])]
polygon(L, sq_c, fill="#4ade80", fill_opacity="0.10", stroke=GREEN, width=4)
text(L, 490, 230, "25", size=30, color=GREEN)
text(L, 490, 264, "5²", size=24, color=GREEN)
triangle(L, G2)
vertex_dots(L, [G2["A"], G2["B"], G2["C"]])
vertex_labels(L, G2)
ra_marker(L, C2, (1, 0), (0, -1), 20)
text(L, 600, 612, "The two smaller squares add to the largest: 9 + 16 = 25", size=28, color=GREEN)
L.append(footer())
write("pythagorean-triples-squares.svg", "".join(x + "\n" for x in L))

# --- Diagram 3: checking flow ----------------------------------------------
L = [header("Checking a Triple: 7, 24, 25")]
box(L, 450, 88, 300, 60)
text(L, 600, 126, "Input: 7, 24, 25", size=30, color=WHITE)
arrow_down(L, 600, 148, 196)
box(L, 330, 196, 540, 60)
text(L, 600, 234, "Square the legs: 49 and 576", size=28, color=BLUE)
arrow_down(L, 600, 256, 304)
box(L, 330, 304, 540, 60)
text(L, 600, 342, "Add: 49 + 576 = 625", size=28, color=GOLD)
arrow_down(L, 600, 364, 412)
box(L, 330, 412, 540, 60)
text(L, 600, 450, "Square the hypotenuse: 25² = 625", size=28, color=WHITE)
arrow_down(L, 600, 472, 520)
box(L, 390, 520, 420, 60, stroke=GREEN)
text(L, 600, 558, "625 = 625: valid triple", size=28, color=GREEN)
L.append(footer())
write("pythagorean-triples-check-flow.svg", "".join(x + "\n" for x in L))

# --- Diagram 4: Euclid's formula flowchart ----------------------------------
L = [header("Euclid's Formula: m = 3, n = 2")]
box(L, 450, 88, 300, 60)
text(L, 600, 126, "m = 3,  n = 2", size=30, color=WHITE)
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
for cx in (195, 600, 1005):
    L.append(f'  <line x1="{cx}" y1="340" x2="{cx}" y2="392" stroke="{GOLD}" stroke-width="3" stroke-linecap="round"/>')
L.append(f'  <line x1="195" y1="392" x2="1005" y2="392" stroke="{GOLD}" stroke-width="3" stroke-linecap="round"/>')
arrow_down(L, 600, 392, 450)
box(L, 450, 450, 300, 60, stroke=GREEN)
text(L, 600, 488, "5 : 12 : 13", size=32, color=GREEN)
text(L, 600, 585, "m = 3, n = 2 gives 5, 12, 13", size=28, color=GREEN)
L.append(footer())
write("pythagorean-triples-euclid-flow.svg", "".join(x + "\n" for x in L))

# --- Diagram 5: primitive vs non-primitive ----------------------------------
L = [header("Primitive vs Non-Primitive")]
G5a = build_345((90, 520), 40)
triangle(L, G5a)
vertex_dots(L, [G5a["A"], G5a["B"], G5a["C"]])
ra_marker(L, G5a["C"], (1, 0), (0, -1), 16)
text(L, 170, 565, "3-4-5", size=28, color=GREEN)
text(L, 170, 150, "gcd = 1", size=24, color=GREY)
text(L, 170, 185, "primitive", size=24, color=GREEN)
G5b = build_abc((560, 520), 6, 8, 40)
triangle(L, G5b)
vertex_dots(L, [G5b["A"], G5b["B"], G5b["C"]])
ra_marker(L, G5b["C"], (1, 0), (0, -1), 16)
text(L, 720, 565, "6-8-10", size=28, color=GREEN)
text(L, 720, 150, "gcd = 2", size=24, color=GREY)
text(L, 720, 185, "not primitive", size=24, color=GOLD)
text(L, 445, 400, "× 2", size=40, color=GOLD)
text(L, 600, 108, "The second triangle is twice the first in every side", size=28, color=GOLD)
L.append(footer())
write("pythagorean-triples-primitive-vs-scaled.svg", "".join(x + "\n" for x in L))

# --- Diagram 6: scaling 3-4-5 -----------------------------------------------
L = [header("Scaling 3-4-5 by 2, 3, and 4")]
box(L, 60, 270, 220, 90, stroke=GREEN)
text(L, 170, 326, "3 : 4 : 5", size=30, color=GREEN)
rows = [
    (2, "6-8-10", 140),
    (3, "9-12-15", 280),
    (4, "12-16-20", 420),
]
for k, label, y in rows:
    box(L, 700, y, 360, 90)
    text(L, 880, y + 56, label, size=30, color=WHITE)
    arrow_to(L, (280, 315), (700, y + 45))
    mx, my = (280 + 700) / 2, (315 + y + 45) / 2
    text(L, mx, my - 14, f"× {k}", size=30, color=GOLD)
text(L, 600, 108, "Multiply every side by the same whole number k", size=28, color=GOLD)
text(L, 600, 585, "Every scaled set is still a Pythagorean triple", size=28, color=GREEN)
L.append(footer())
write("pythagorean-triples-scaling.svg", "".join(x + "\n" for x in L))

# --- Diagram 7: comparing three triples -------------------------------------
L = [header("Three Different Primitive Triples")]
G7a = build_345((60, 520), 45)
triangle(L, G7a)
vertex_dots(L, [G7a["A"], G7a["B"], G7a["C"]])
ra_marker(L, G7a["C"], (1, 0), (0, -1), 16)
text(L, 150, 565, "3-4-5", size=28, color=GREEN)
G7b = build_abc((330, 520), 5, 12, 20)
triangle(L, G7b)
vertex_dots(L, [G7b["A"], G7b["B"], G7b["C"]])
ra_marker(L, G7b["C"], (1, 0), (0, -1), 16)
text(L, 450, 565, "5-12-13", size=28, color=GREEN)
G7c = build_abc((660, 520), 8, 15, 16)
triangle(L, G7c)
vertex_dots(L, [G7c["A"], G7c["B"], G7c["C"]])
ra_marker(L, G7c["C"], (1, 0), (0, -1), 16)
text(L, 780, 565, "8-15-17", size=28, color=GREEN)
text(L, 600, 108, "Same theorem, different shapes and angles", size=28, color=GOLD)
L.append(footer())
write("pythagorean-triples-compare.svg", "".join(x + "\n" for x in L))

# --- Diagram 8: generation conditions ----------------------------------------
L = [header("When Does Euclid's Formula Give a Primitive Triple?")]
# Left column: valid primitive parameters
box(L, 60, 130, 480, 70)
text(L, 300, 174, "m = 3,  n = 2", size=30, color=WHITE)
arrow_down(L, 300, 200, 250)
box(L, 60, 250, 480, 90)
text(L, 300, 288, "Coprime, opposite parity", size=26, color=BLUE)
text(L, 300, 322, "gcd(3, 2) = 1; one even, one odd", size=24, color=WHITE)
arrow_down(L, 300, 340, 390)
box(L, 60, 390, 480, 70, stroke=GREEN)
text(L, 300, 434, "5-12-13: primitive", size=28, color=GREEN)
# Right column: non-primitive parameters
box(L, 660, 130, 480, 70)
text(L, 900, 174, "m = 3,  n = 1", size=30, color=WHITE)
arrow_down(L, 900, 200, 250)
box(L, 660, 250, 480, 90)
text(L, 900, 288, "Coprime, both odd", size=26, color=GOLD)
text(L, 900, 322, "gcd(3, 1) = 1; parity condition fails", size=24, color=WHITE)
arrow_down(L, 900, 340, 390)
box(L, 660, 390, 480, 70, stroke=GOLD)
text(L, 900, 434, "6-8-10: not primitive", size=28, color=GOLD)
text(L, 600, 108, "Both conditions must hold at the same time", size=28, color=GOLD)
text(L, 600, 560, "Opposite parity matters as much as coprimality", size=28, color=GREEN)
L.append(footer())
write("pythagorean-triples-conditions.svg", "".join(x + "\n" for x in L))

print("all 8 diagrams written")
