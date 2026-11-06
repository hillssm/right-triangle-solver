#!/usr/bin/env python3
"""gen_page39_diagrams.py — 8 SVG diagrams for Page 39 (30-60-90 Triangle Calculator).

Style matches Page 38: 1200x630, dark #131313 bg, gold #f1c97d strokes,
green #4ade80, blue #7dd3fc, white labels.
Geometry: triangle ABC, angle A = 30 deg, B = 60 deg, C = 90 deg.
BC = a (short leg, opposite 30 deg), AC = b = a*sqrt(3) (long leg,
opposite 60 deg), AB = c = 2a (hypotenuse). Layout: C bottom-left,
A bottom-right (long leg horizontal), B top-left (short leg vertical).
Angles are asserted numerically (30/60/90 within 0.5 deg) and side
lengths within 0.5 px. No SVG arc (A) commands anywhere; angle arcs
are polyline approximations. No captions inside the SVGs: captions
live in the guide JSON. Outputs: public/images/thirty-sixty-ninety/*.svg
"""
import math
import os
import re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "images", "thirty-sixty-ninety")
os.makedirs(OUT, exist_ok=True)

GOLD = "#f1c97d"
GREEN = "#4ade80"
BLUE = "#7dd3fc"
WHITE = "#ffffff"
GREY = "#a3a3a3"
PANEL = "#1c1b1b"
PANEL_EDGE = "#2e2c2c"

SQ3 = math.sqrt(3)


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


def build_3060(C, a_units, S):
    """30-60-90 triangle: C bottom-left, A bottom-right, B top-left."""
    b_units = a_units * SQ3
    c_units = 2 * a_units
    A = (C[0] + b_units * S, C[1])
    B = (C[0], C[1] - a_units * S)
    g = {"C": C, "A": A, "B": B, "a": a_units, "b": b_units, "c": c_units, "S": S}
    assert abs(dist(C, A) - b_units * S) < 0.5, "AC length"
    assert abs(dist(C, B) - a_units * S) < 0.5, "BC length"
    assert abs(dist(A, B) - c_units * S) < 0.5, "AB length"
    assert abs(dot((A[0] - C[0], A[1] - C[1]),
                   (B[0] - C[0], B[1] - C[1]))) < 0.5, "right angle at C"
    assert abs(angle_at(A, C, B) - 30) < 0.5, f"angle at A {angle_at(A, C, B)}"
    assert abs(angle_at(B, A, C) - 60) < 0.5, f"angle at B {angle_at(B, A, C)}"
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


def vertex_labels(L, g):
    A, B, C = g["A"], g["B"], g["C"]
    text(L, A[0] + 30, A[1] + 8, "A", size=26, anchor="start")
    text(L, B[0], B[1] - 26, "B", size=26)
    text(L, C[0] - 30, C[1] + 8, "C", size=26)


def side_labels(L, g, a_text, b_text, c_text, a_color=BLUE, b_color=GOLD, c_color=WHITE):
    A, B, C = g["A"], g["B"], g["C"]
    text(L, C[0] - 52, (B[1] + C[1]) / 2 + 9, a_text, size=28, color=a_color)
    text(L, (A[0] + C[0]) / 2, C[1] + 52, b_text, size=28, color=b_color)
    mx, my = (A[0] + B[0]) / 2, (A[1] + B[1]) / 2
    text(L, mx + 36, my - 62, c_text, size=28, color=c_color)


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

# --- Diagram 1: complete 30-60-90 triangle -------------------------------
G1 = build_3060((331, 470), 5, 62)
L = [header("30-60-90 Triangle")]
triangle(L, G1)
vertex_dots(L, [G1["A"], G1["B"], G1["C"]])
vertex_labels(L, G1)
angle_labels_3060(L, G1)
side_labels(L, G1, "a", "a√3", "c = 2a")
L.append(footer())
write("thirty-60-90-main.svg", "".join(x + "\n" for x in L))

# --- Diagram 2: derivation from an equilateral triangle ------------------
# Equilateral side 400 px: base (400,480)-(800,480), apex (600, 480-346.4)
EQ_SIDE = 400.0
EQ_H = EQ_SIDE * SQ3 / 2
P = (600.0, 480 - EQ_H)          # top vertex
Q = (400.0, 480.0)               # bottom-left
R = (800.0, 480.0)               # bottom-right
D = (600.0, 480.0)               # altitude foot (base midpoint)
assert abs(dist(Q, R) - EQ_SIDE) < 0.5
assert abs(dist(P, Q) - EQ_SIDE) < 0.5
assert abs(dist(P, R) - EQ_SIDE) < 0.5
assert abs(dist(P, D) - EQ_H) < 0.5
assert abs(dist(Q, D) - EQ_SIDE / 2) < 0.5
assert abs(angle_at(P, Q, R) - 60) < 0.5
L = [header("From an Equilateral Triangle")]
pts = f"{P[0]:.1f},{P[1]:.1f} {Q[0]:.1f},{Q[1]:.1f} {R[0]:.1f},{R[1]:.1f}"
L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>')
# Altitude (dashed green) + right-angle square at D
line(L, P, D, GREEN, 4, "10 8")
ra_marker(L, D, (-1, 0), (0, -1), 20, color=GREEN)
vertex_dots(L, [P, Q, R, D], r=9)
text(L, P[0], P[1] - 26, "P", size=26)
text(L, Q[0] - 28, Q[1] + 8, "Q", size=26)
text(L, R[0] + 28, R[1] + 8, "R", size=26)
text(L, D[0] + 30, D[1] + 8, "D", size=26, color=GREEN, anchor="start")
# Side labels: 2a on each side, a on each half-base, a√3 on altitude
text(L, 470, 290, "2a", size=28, color=BLUE)
text(L, 730, 290, "2a", size=28, color=BLUE)
text(L, 500, 522, "a", size=28, color=BLUE)
text(L, 700, 522, "a", size=28, color=BLUE)
text(L, 632, 310, "a√3", size=28, color=GREEN, anchor="start")
# Angles: 30 deg at apex halves, 60 deg at base corners, 90 deg at D
arc_polyline(L, P[0], P[1], 52, 90 - 30, 90, color=GREEN)
arc_polyline(L, P[0], P[1], 52, 90, 90 + 30, color=GREEN)
text(L, P[0] - 62, P[1] + 92, "30°", size=22, color=GREEN)
text(L, P[0] + 62, P[1] + 92, "30°", size=22, color=GREEN)
text(L, Q[0] + 78, Q[1] - 22, "60°", size=22, color=GOLD)
text(L, R[0] - 78, R[1] - 22, "60°", size=22, color=GOLD)
text(L, D[0] - 52, D[1] - 34, "90°", size=22, color=GREEN)
text(L, 600, 585, "One altitude makes two 30-60-90 triangles", size=24, color=GREY)
L.append(footer())
write("thirty-60-90-equilateral.svg", "".join(x + "\n" for x in L))

# --- Diagram 3: the fixed ratio (bars) -----------------------------------
L = [header("The Fixed Ratio  1 : √3 : 2")]
rows = [
    ("Short leg", 1.0, BLUE, "a"),
    ("Long leg", SQ3, GOLD, "a√3"),
    ("Hypotenuse", 2.0, GREEN, "2a"),
]
UNIT = 190
BAR_X = 400
BAR_H = 54
for i, (label, mult, color, val) in enumerate(rows):
    y = 175 + i * 135
    text(L, 370, y + 38, label, size=26, color=WHITE, anchor="end")
    w = UNIT * mult
    L.append(f'  <rect x="{BAR_X}" y="{y}" width="{w:.1f}" height="{BAR_H}" rx="10" fill="{color}" fill-opacity="0.85"/>')
    text(L, BAR_X + w + 24, y + 38, val, size=28, color=color, anchor="start")
text(L, 600, 585, "a : a√3 : 2a", size=32, color=GOLD)
L.append(footer())
write("thirty-60-90-ratio.svg", "".join(x + "\n" for x in L))

# --- Diagram 4: find the long leg (a = 5) --------------------------------
G4 = build_3060((331, 480), 5, 62)
L = [header("Find the Long Leg")]
formula_line(L, "b = a√3")
triangle(L, G4)
vertex_dots(L, [G4["A"], G4["B"], G4["C"]])
vertex_labels(L, G4)
angle_labels_3060(L, G4)
side_labels(L, G4, "a = 5 cm", "b = 5√3 ≈ 8.660 cm", "c = 10 cm")
L.append(footer())
write("thirty-60-90-long-leg.svg", "".join(x + "\n" for x in L))

# --- Diagram 5: find the hypotenuse (a = 5) ------------------------------
G5 = build_3060((331, 480), 5, 62)
L = [header("Find the Hypotenuse")]
formula_line(L, "c = 2a")
triangle(L, G5)
vertex_dots(L, [G5["A"], G5["B"], G5["C"]])
vertex_labels(L, G5)
angle_labels_3060(L, G5)
side_labels(L, G5, "a = 5 cm", "b = 5√3 cm", "c = 2 × 5 = 10 cm")
L.append(footer())
write("thirty-60-90-hypotenuse.svg", "".join(x + "\n" for x in L))

# --- Diagram 6: area (a = 6) ----------------------------------------------
G6 = build_3060((350, 470), 6, 48)
L = [header("Area of a 30-60-90 Triangle")]
formula_line(L, "A = a²√3 / 2")
triangle(L, G6)
vertex_dots(L, [G6["A"], G6["B"], G6["C"]])
vertex_labels(L, G6)
angle_labels_3060(L, G6)
side_labels(L, G6, "a = 6 cm", "b = 6√3 cm", "c = 12 cm")
text(L, 600, 585, "A = 18√3 ≈ 31.177 cm²", size=28, color=GREEN)
L.append(footer())
write("thirty-60-90-area.svg", "".join(x + "\n" for x in L))

# --- Diagram 7: perimeter (a = 5) -----------------------------------------
G7 = build_3060((331, 480), 5, 62)
L = [header("Perimeter of a 30-60-90 Triangle")]
formula_line(L, "P = a(3 + √3)")
triangle(L, G7)
vertex_dots(L, [G7["A"], G7["B"], G7["C"]])
vertex_labels(L, G7)
angle_labels_3060(L, G7)
side_labels(L, G7, "a = 5 cm", "b = 5√3 ≈ 8.660 cm", "c = 10 cm")
text(L, 600, 585, "P = 5(3 + √3) ≈ 23.660 cm", size=28, color=GREEN)
L.append(footer())
write("thirty-60-90-perimeter.svg", "".join(x + "\n" for x in L))

# --- Diagram 8: seven calculator modes ------------------------------------
L = [header("Seven Calculator Modes")]
modes = [
    ("Known a", "Long leg", "b = a√3"),
    ("Known a", "Hypotenuse", "c = 2a"),
    ("Known c", "Short leg", "a = c / 2"),
    ("Known b", "Short leg", "a = b / √3"),
    ("Known c", "Long leg", "b = c√3 / 2"),
    ("Known a", "Area", "A = a²√3 / 2"),
    ("Known a", "Perimeter", "P = a(3 + √3)"),
]
L.append('  <rect x="150" y="100" width="900" height="470" rx="14" fill="#1c1b1b" stroke="#2e2c2c"/>')
for i, (known, result, formula) in enumerate(modes):
    y = 158 + i * 62
    if i:
        L.append(f'  <line x1="180" y1="{y - 31}" x2="1020" y2="{y - 31}" stroke="#2e2c2c" stroke-width="1"/>')
    text(L, 200, y, known, size=26, color=BLUE, anchor="start")
    text(L, 470, y, "→", size=28, color=GOLD)
    text(L, 520, y, result, size=26, color=WHITE, anchor="start")
    text(L, 1010, y, formula, size=26, color=GOLD, anchor="end")
L.append(footer())
write("thirty-60-90-modes.svg", "".join(x + "\n" for x in L))

print("all 8 diagrams written")
