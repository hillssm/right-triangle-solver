#!/usr/bin/env python3
"""gen_page41_diagrams.py — 8 SVG diagrams for Page 41 (Special Right Triangle Calculator).

Style matches Page 39: 1200x630, dark #131313 bg, gold #f1c97d strokes,
green #4ade80, blue #7dd3fc, white labels.
Geometry: triangle ABC, angle A = 45 deg, B = 45 deg, C = 90 deg.
BC = a (first leg, opposite 45 deg), AC = b = a (second leg, opposite
45 deg), AB = c = a*sqrt(2) (hypotenuse). Layout: C bottom-left,
A bottom-right (leg b horizontal), B top-left (leg a vertical).
Angles are asserted numerically (45/45/90 within 0.5 deg) and side
lengths within 0.5 px. No SVG arc (A) commands anywhere; angle arcs
are polyline approximations. No captions inside the SVGs: captions
live in the guide JSON. Outputs: public/images/forty-five-ninety/*.svg
"""
import math
import os
import re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "images", "special-right-triangle")
os.makedirs(OUT, exist_ok=True)

GOLD = "#f1c97d"
GREEN = "#4ade80"
BLUE = "#7dd3fc"
WHITE = "#ffffff"
GREY = "#a3a3a3"

SQ2 = math.sqrt(2)


def dist(P, Q):
    return math.hypot(P[0] - Q[0], P[1] - Q[1])


def dot(u, v):
    return u[0] * v[0] + u[1] * v[1]


def angle_at(P, Q, R):
    """Angle QPR in degrees (screen coords, y down — magnitude only)."""
    u = (Q[0] - P[0], Q[1] - P[1])
    v = (R[0] - P[0], R[1] - P[1])
    cosang = dot(u, v) / (math.hypot(*u) * math.hypot(*v))
    return math.degrees(math.acos(max(-1.0, min(1.0, cosang))))


def build_454590(C, a_units, S):
    """45-45-90 triangle: C bottom-left, A bottom-right, B top-left."""
    A = (C[0] + a_units * S, C[1])
    B = (C[0], C[1] - a_units * S)
    c_units = a_units * SQ2
    g = {"C": C, "A": A, "B": B, "a": a_units, "b": a_units, "c": c_units, "S": S}
    assert abs(dist(C, A) - a_units * S) < 0.5, "AC length"
    assert abs(dist(C, B) - a_units * S) < 0.5, "BC length"
    assert abs(dist(A, B) - c_units * S) < 0.5, "AB length"
    assert abs(dot((A[0] - C[0], A[1] - C[1]),
                   (B[0] - C[0], B[1] - C[1]))) < 0.5, "right angle at C"
    assert abs(angle_at(A, C, B) - 45) < 0.5, f"angle at A {angle_at(A, C, B)}"
    assert abs(angle_at(B, A, C) - 45) < 0.5, f"angle at B {angle_at(B, A, C)}"
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


def equal_ticks(L, P, Q, color=GREEN, n=1):
    """Congruence tick marks across the midpoint of segment PQ."""
    mx, my = (P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2
    dx, dy = Q[0] - P[0], Q[1] - P[1]
    ln = math.hypot(dx, dy)
    ux, uy = dx / ln, dy / ln
    px, py = -uy, ux  # perpendicular
    half = 12
    offs = [0] if n == 1 else [-7, 7]
    for o in offs:
        cx, cy = mx + ux * o, my + uy * o
        L.append(f'  <line x1="{cx - px * half:.1f}" y1="{cy - py * half:.1f}" x2="{cx + px * half:.1f}" y2="{cy + py * half:.1f}" stroke="{color}" stroke-width="4" stroke-linecap="round"/>')


def angle_labels_454590(L, g, r=58, lab_r=92):
    """45 deg arc + label at A, 45 deg arc + label at B, square at C."""
    A, B, C = g["A"], g["B"], g["C"]
    # At A: interior between AC (180 deg) and AB (225 deg, screen angle)
    arc_polyline(L, A[0], A[1], r, 180, 225)
    lx, ly = A[0] + lab_r * math.cos(math.radians(202.5)), A[1] + lab_r * math.sin(math.radians(202.5))
    text(L, lx, ly + 8, "45°", size=24, color=GOLD)
    # At B: interior between BA (45 deg) and BC (90 deg, screen angle)
    arc_polyline(L, B[0], B[1], r, 45, 90)
    lx, ly = B[0] + lab_r * math.cos(math.radians(67.5)), B[1] + lab_r * math.sin(math.radians(67.5))
    text(L, lx, ly + 8, "45°", size=24, color=GOLD)
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

SQ3 = math.sqrt(3)


def build_3060(C, a_units, S):
    """30-60-90 triangle: C bottom-left, A bottom-right, B top-left.
    BC = short leg a (vertical), AC = long leg b = a*sqrt(3) (horizontal),
    AB = hypotenuse c = 2a. Angle at A = 30 deg, at B = 60 deg, at C = 90 deg."""
    b_units = a_units * SQ3
    A = (C[0] + b_units * S, C[1])
    B = (C[0], C[1] - a_units * S)
    g = {"C": C, "A": A, "B": B, "a": a_units, "b": b_units, "c": 2 * a_units, "S": S}
    assert abs(dist(C, A) - b_units * S) < 0.5, "AC length"
    assert abs(dist(C, B) - a_units * S) < 0.5, "BC length"
    assert abs(dist(A, B) - 2 * a_units * S) < 0.5, "AB length"
    assert abs(dot((A[0] - C[0], A[1] - C[1]),
                   (B[0] - C[0], B[1] - C[1]))) < 0.5, "right angle at C"
    assert abs(angle_at(A, C, B) - 30) < 0.5, f"angle at A {angle_at(A, C, B)}"
    assert abs(angle_at(B, A, C) - 60) < 0.5, f"angle at B {angle_at(B, A, C)}"
    assert abs(angle_at(C, A, B) - 90) < 0.5, "angle at C"
    return g


def angle_labels_3060(L, g, r=58, lab_r=92):
    """30 deg arc + label at A, 60 deg arc + label at B, square at C."""
    A, B, C = g["A"], g["B"], g["C"]
    # At A: interior between AC (180 deg) and AB (210 deg, screen angle)
    arc_polyline(L, A[0], A[1], r, 180, 210)
    lx, ly = A[0] + lab_r * math.cos(math.radians(195)), A[1] + lab_r * math.sin(math.radians(195))
    text(L, lx, ly + 8, "30°", size=24, color=GOLD)
    # At B: interior between BA (30 deg) and BC (90 deg, screen angle)
    arc_polyline(L, B[0], B[1], r, 30, 90)
    lx, ly = B[0] + lab_r * math.cos(math.radians(60)), B[1] + lab_r * math.sin(math.radians(60))
    text(L, lx, ly + 8, "60°", size=24, color=GOLD)
    # Right-angle square at C: along AC (+x), into triangle (-y)
    ra_marker(L, C, (1, 0), (0, -1), 20)
    text(L, C[0] + 52, C[1] - 34, "90°", size=24, color=GOLD)


def side_labels_3060(L, g, a_text, b_text, c_text, a_color=BLUE, b_color=GOLD, c_color=WHITE):
    A, B, C = g["A"], g["B"], g["C"]
    text(L, C[0] - 58, (B[1] + C[1]) / 2 + 9, a_text, size=28, color=a_color)
    text(L, (A[0] + C[0]) / 2, C[1] + 52, b_text, size=28, color=b_color)
    mx, my = (A[0] + B[0]) / 2, (A[1] + B[1]) / 2
    text(L, mx + 40, my - 62, c_text, size=28, color=c_color)


# --- Diagram 1: both special right triangle types ------------------------
L = [header("Both Special Right Triangles")]
text(L, 260, 128, "45-45-90", size=28, color=GOLD)
text(L, 890, 128, "30-60-90", size=28, color=GOLD)
G1a = build_454590((150, 470), 4, 55)
triangle(L, G1a)
vertex_dots(L, [G1a["A"], G1a["B"], G1a["C"]])
arc_polyline(L, G1a["A"][0], G1a["A"][1], 44, 180, 225)
arc_polyline(L, G1a["B"][0], G1a["B"][1], 44, 45, 90)
ra_marker(L, G1a["C"], (1, 0), (0, -1), 18)
text(L, G1a["A"][0] - 78, G1a["A"][1] - 58, "45°", size=22, color=GOLD)
text(L, G1a["B"][0] + 27, G1a["B"][1] + 65, "45°", size=22, color=GOLD)
text(L, (G1a["A"][0] + G1a["C"][0]) / 2, G1a["C"][1] + 44, "a", size=24, color=GOLD)
text(L, G1a["C"][0] - 40, (G1a["B"][1] + G1a["C"][1]) / 2 + 8, "a", size=24, color=BLUE)
text(L, 300, 330, "a√2", size=24, color=WHITE)
text(L, 260, 545, "1 : 1 : √2", size=28, color=GREEN)
G1b = build_3060((700, 470), 4, 55)
triangle(L, G1b)
vertex_dots(L, [G1b["A"], G1b["B"], G1b["C"]])
arc_polyline(L, G1b["A"][0], G1b["A"][1], 44, 180, 210)
arc_polyline(L, G1b["B"][0], G1b["B"][1], 44, 30, 90)
ra_marker(L, G1b["C"], (1, 0), (0, -1), 18)
text(L, G1b["A"][0] - 68, G1b["A"][1] - 18, "30°", size=22, color=GOLD)
text(L, G1b["B"][0] + 66, G1b["B"][1] + 58, "60°", size=22, color=GOLD)
text(L, (G1b["A"][0] + G1b["C"][0]) / 2, G1b["C"][1] + 44, "a√3", size=24, color=GOLD)
text(L, G1b["C"][0] - 40, (G1b["B"][1] + G1b["C"][1]) / 2 + 8, "a", size=24, color=BLUE)
text(L, 940, 330, "2a", size=24, color=WHITE)
text(L, 890, 545, "1 : √3 : 2", size=28, color=GREEN)
L.append(footer())
write("special-both-types.svg", "".join(x + "\n" for x in L))

# --- Diagram 2: 45-45-90 triangle geometry -------------------------------
G2 = build_454590((380, 470), 5, 62)
L = [header("45-45-90 Triangle Geometry")]
triangle(L, G2)
vertex_dots(L, [G2["A"], G2["B"], G2["C"]])
vertex_labels(L, G2)
angle_labels_454590(L, G2)
equal_ticks(L, G2["C"], G2["B"])
equal_ticks(L, G2["C"], G2["A"])
side_labels(L, G2, "a", "b = a", "c = a√2")
text(L, 600, 585, "a : b : c = 1 : 1 : √2", size=28, color=GREEN)
L.append(footer())
write("special-454590-geometry.svg", "".join(x + "\n" for x in L))

# --- Diagram 3: 45-45-90 Pythagorean derivation --------------------------
G3 = build_454590((380, 480), 5, 58)
L = [header("Why √2 Appears")]
formula_line(L, "a² + a² = c²   →   c = a√2")
triangle(L, G3)
vertex_dots(L, [G3["A"], G3["B"], G3["C"]])
vertex_labels(L, G3)
angle_labels_454590(L, G3)
equal_ticks(L, G3["C"], G3["B"])
equal_ticks(L, G3["C"], G3["A"])
side_labels(L, G3, "a", "a", "c")
text(L, 600, 585, "2a² = c², so c = a√2", size=28, color=GREEN)
L.append(footer())
write("special-454590-derivation.svg", "".join(x + "\n" for x in L))

# --- Diagram 4: square diagonal ------------------------------------------
# Square corners: TL (400,150), TR (800,150), BR (800,550), BL (400,550).
# Diagonal from BL to TR splits it into two congruent 45-45-90 triangles.
SQ = [(400.0, 150.0), (800.0, 150.0), (800.0, 550.0), (400.0, 550.0)]
TL, TR, BR, BL = SQ
assert abs(dist(TL, TR) - 400) < 0.5
assert abs(dist(TR, BR) - 400) < 0.5
assert abs(angle_at(BL, TL, BR) - 90) < 0.5
assert abs(angle_at(BL, TR, BR) - 45) < 0.5, "diagonal splits 90 deg into 45 deg"
assert abs(angle_at(TR, BL, TL) - 45) < 0.5
L = [header("A Square Diagonal Makes Two 45-45-90 Triangles")]
sq_pts = " ".join(f"{x:.1f},{y:.1f}" for x, y in SQ)
L.append(f'  <polygon points="{sq_pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
L.append(f'  <polygon points="{sq_pts}" fill="none" stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>')
line(L, BL, TR, GREEN, 6)
vertex_dots(L, [TL, TR, BR, BL])
text(L, TL[0] - 30, TL[1] + 8, "P", size=26, anchor="end")
text(L, TR[0] + 30, TR[1] + 8, "Q", size=26, anchor="start")
text(L, BR[0] + 30, BR[1] + 8, "R", size=26, anchor="start")
text(L, BL[0] - 30, BL[1] + 8, "S", size=26, anchor="end")
text(L, 372, 350, "a = 8 cm", size=26, color=BLUE, anchor="end")
text(L, 600, 592, "a = 8 cm", size=26, color=BLUE)
text(L, 640, 330, "d = 8√2 ≈ 11.314 cm", size=26, color=GREEN, anchor="start")
arc_polyline(L, BL[0], BL[1], 56, 270, 315, color=GREEN)
text(L, BL[0] + 37, BL[1] - 89, "45°", size=24, color=GREEN)
arc_polyline(L, TR[0], TR[1], 56, 135, 180, color=GREEN)
text(L, TR[0] - 89, TR[1] + 45, "45°", size=24, color=GREEN)
L.append(footer())
write("special-square-diagonal.svg", "".join(x + "\n" for x in L))

# --- Diagram 5: 30-60-90 triangle geometry -------------------------------
G5 = build_3060((380, 470), 5, 62)
L = [header("30-60-90 Triangle Geometry")]
formula_line(L, "b = a√3      c = 2a")
triangle(L, G5)
vertex_dots(L, [G5["A"], G5["B"], G5["C"]])
vertex_labels(L, G5)
angle_labels_3060(L, G5)
side_labels_3060(L, G5, "a = 5 cm", "b = 5√3 ≈ 8.660 cm", "c = 10 cm")
text(L, 600, 585, "a : b : c = 1 : √3 : 2", size=28, color=GREEN)
L.append(footer())
write("special-306090-geometry.svg", "".join(x + "\n" for x in L))

# --- Diagram 6: equilateral triangle derivation --------------------------
# Equilateral triangle, side 2a = 400: BL (400,500), BR (800,500), T (600,153.6).
# Altitude T -> M (600,500) splits it into two congruent 30-60-90 triangles.
BL6 = (400.0, 500.0)
BR6 = (800.0, 500.0)
T6 = (600.0, 500.0 - 400.0 * SQ3 / 2)
M6 = (600.0, 500.0)
assert abs(dist(T6, BL6) - 400) < 0.5
assert abs(dist(T6, BR6) - 400) < 0.5
assert abs(dist(BL6, BR6) - 400) < 0.5
assert abs(angle_at(BL6, T6, BR6) - 60) < 0.5
assert abs(angle_at(T6, M6, BL6) - 30) < 0.5, "altitude splits apex angle into 30 deg"
assert abs(angle_at(M6, T6, BL6) - 90) < 0.5, "altitude meets base at 90 deg"
assert abs(dist(M6, BL6) - 200) < 0.5, "half-base is a"
assert abs(dist(T6, M6) - 200 * SQ3) < 0.5, "altitude is a*sqrt(3)"
L = [header("An Equilateral Triangle Splits in Two")]
tri_pts = f"{BL6[0]:.1f},{BL6[1]:.1f} {BR6[0]:.1f},{BR6[1]:.1f} {T6[0]:.1f},{T6[1]:.1f}"
L.append(f'  <polygon points="{tri_pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
L.append(f'  <polygon points="{tri_pts}" fill="none" stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>')
line(L, T6, M6, GREEN, 6)
vertex_dots(L, [BL6, BR6, T6, M6])
text(L, BL6[0] - 30, BL6[1] + 8, "P", size=26, anchor="end")
text(L, BR6[0] + 30, BR6[1] + 8, "Q", size=26, anchor="start")
text(L, M6[0], M6[1] + 42, "M", size=26)
text(L, 500, 545, "a", size=26, color=BLUE)
text(L, 700, 545, "a", size=26, color=BLUE)
text(L, 460, 336, "2a", size=26, color=WHITE, anchor="end")
text(L, 740, 336, "2a", size=26, color=WHITE, anchor="start")
text(L, 628, 330, "b = a√3", size=26, color=GREEN, anchor="start")
# 60 deg arc at P (between base 0 deg and left edge 300 deg screen)
arc_polyline(L, BL6[0], BL6[1], 56, 300, 360, color=GOLD)
text(L, BL6[0] + 78, BL6[1] - 46, "60°", size=24, color=GOLD)
# 30 deg arc at T, left half (between altitude 90 deg and left edge 120 deg)
arc_polyline(L, T6[0], T6[1], 56, 90, 120, color=GOLD)
text(L, T6[0] - 62, T6[1] + 84, "30°", size=24, color=GOLD)
# Right-angle square at M
ra_marker(L, M6, (-1, 0), (0, -1), 20)
L.append(footer())
write("special-equilateral-derivation.svg", "".join(x + "\n" for x in L))

# --- Diagram 7: side ratio comparison (bars) ----------------------------
L = [header("The Two Side Ratios, Compared")]
text(L, 300, 140, "45-45-90", size=28, color=GOLD)
text(L, 900, 140, "30-60-90", size=28, color=GOLD)
UNIT7 = 130
BAR_H7 = 54
rows7 = [
    ("Leg a", 1.0, BLUE, "a"),
    ("Leg b", 1.0, GOLD, "a"),
    ("Hypotenuse", SQ2, GREEN, "a√2"),
]
for i, (label, mult, color, val) in enumerate(rows7):
    y = 180 + i * 110
    text(L, 190, y + 38, label, size=26, color=WHITE, anchor="end")
    w = UNIT7 * mult
    L.append(f'  <rect x="200" y="{y}" width="{w:.1f}" height="{BAR_H7}" rx="10" fill="{color}" fill-opacity="0.85"/>')
    text(L, 200 + w + 24, y + 38, val, size=28, color=color, anchor="start")
rows7b = [
    ("Short leg", 1.0, BLUE, "a"),
    ("Long leg", SQ3, GOLD, "a√3"),
    ("Hypotenuse", 2.0, GREEN, "2a"),
]
for i, (label, mult, color, val) in enumerate(rows7b):
    y = 180 + i * 110
    text(L, 790, y + 38, label, size=26, color=WHITE, anchor="end")
    w = UNIT7 * mult
    L.append(f'  <rect x="800" y="{y}" width="{w:.1f}" height="{BAR_H7}" rx="10" fill="{color}" fill-opacity="0.85"/>')
    text(L, 800 + w + 24, y + 38, val, size=28, color=color, anchor="start")
text(L, 300, 560, "1 : 1 : √2", size=30, color=GREEN)
text(L, 900, 560, "1 : √3 : 2", size=30, color=GREEN)
L.append(footer())
write("special-ratio-comparison.svg", "".join(x + "\n" for x in L))

# --- Diagram 8: four calculator modes (flow) ----------------------------
L = [header("Four Calculator Modes")]
MODES = [
    ("45-45-90", "Leg a", "c = a√2", "Hypotenuse c"),
    ("45-45-90", "Hypotenuse c", "a = c / √2", "Leg a"),
    ("30-60-90", "Short leg a", "b = a√3", "Long leg b"),
    ("30-60-90", "Short leg a", "c = 2a", "Hypotenuse c"),
]
BOX_H = 64
for i, (typ, inp, formula, res) in enumerate(MODES):
    y = 140 + i * 112
    yc = y + BOX_H // 2
    # input box
    L.append(f'  <rect x="60" y="{y}" width="300" height="{BOX_H}" rx="12" fill="#ffffff" fill-opacity="0.05" stroke="{BLUE}" stroke-width="3"/>')
    text(L, 210, y + 26, typ, size=20, color=GREY)
    text(L, 210, y + 52, inp, size=26, color=WHITE)
    # arrow 1
    line(L, (368, yc), (404, yc), GOLD, 4)
    L.append(f'  <polygon points="404,{yc} 390,{yc - 8} 390,{yc + 8}" fill="{GOLD}"/>')
    # formula
    text(L, 560, yc + 10, formula, size=30, color=GOLD)
    # arrow 2
    line(L, (716, yc), (752, yc), GOLD, 4)
    L.append(f'  <polygon points="752,{yc} 738,{yc - 8} 738,{yc + 8}" fill="{GOLD}"/>')
    # result box
    L.append(f'  <rect x="760" y="{y}" width="380" height="{BOX_H}" rx="12" fill="#ffffff" fill-opacity="0.05" stroke="{GREEN}" stroke-width="3"/>')
    text(L, 950, yc + 10, res, size=26, color=WHITE)
L.append(footer())
write("special-four-modes.svg", "".join(x + "\n" for x in L))

print("all 8 diagrams written")
