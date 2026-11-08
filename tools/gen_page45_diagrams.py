#!/usr/bin/env python3
"""gen_page45_diagrams.py - 8 SVG diagrams for Page 45 (Similar Right Triangles).

Style matches the Page 44 generator: 1200x630, dark #131313 bg, gold #f1c97d strokes,
green #4ade80, blue #7dd3fc, white labels.
Geometry: 3-4-5 triangle (angles 36.87/53.13/90) and 30-60-90 triangle
(legs 1 and sqrt(3), hypotenuse 2). Layout: C bottom-left, A bottom-right
(leg b horizontal), B top-left (leg a vertical).
Angles are asserted numerically and side lengths proportional within 0.5 px.
No SVG arc (A) commands anywhere; angle arcs are polyline approximations.
No captions inside the SVGs: captions live in the guide JSON.
Outputs: public/images/similar-right-triangles/*.svg
"""
import math
import os
import re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "images", "similar-right-triangles")
os.makedirs(OUT, exist_ok=True)

GOLD = "#f1c97d"
GREEN = "#4ade80"
BLUE = "#7dd3fc"
WHITE = "#ffffff"
GREY = "#a3a3a3"


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


def build_right(C, a, b, S):
    """Right triangle: C bottom-left, A bottom-right (leg b), B top-left (leg a)."""
    c = math.hypot(a, b)
    A = (C[0] + b * S, C[1])
    B = (C[0], C[1] - a * S)
    g = {"C": C, "A": A, "B": B, "a": a, "b": b, "c": c, "S": S}
    assert abs(dist(C, A) - b * S) < 0.5, "AC length"
    assert abs(dist(C, B) - a * S) < 0.5, "BC length"
    assert abs(dist(A, B) - c * S) < 0.5, "AB length"
    assert abs(dot((A[0] - C[0], A[1] - C[1]),
                   (B[0] - C[0], B[1] - C[1]))) < 0.5, "right angle at C"
    assert abs(angle_at(g["C"], g["A"], g["B"]) - 90) < 0.5, "angle at C"
    return g


def build_345(C, S):
    g = build_right(C, 3, 4, S)
    assert abs(g["c"] - 5) < 1e-9, "not a 3-4-5 hypotenuse"
    assert abs(angle_at(g["A"], g["C"], g["B"]) - 36.87) < 0.5, "angle at A"
    assert abs(angle_at(g["B"], g["A"], g["C"]) - 53.13) < 0.5, "angle at B"
    return g


def build_306090(C, S):
    """30-60-90: leg a=1 opposite 30 deg at A, leg b=sqrt(3) opposite 60 deg at B."""
    g = build_right(C, 1, math.sqrt(3), S)
    assert abs(g["c"] - 2) < 1e-9, "not a 30-60-90 hypotenuse"
    assert abs(angle_at(g["A"], g["C"], g["B"]) - 30) < 0.5, "angle at A"
    assert abs(angle_at(g["B"], g["A"], g["C"]) - 60) < 0.5, "angle at B"
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


def triangle(L, g, fill_opacity="0.04", width=7, stroke=GOLD):
    polygon(L, [g["A"], g["B"], g["C"]], fill_opacity=fill_opacity, width=width, stroke=stroke)


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


def angle_labels(L, g, ang_a, ang_b, r=58, lab_r=92):
    """Arc + label at A (ang_a), arc + label at B (ang_b), square at C."""
    A, B, C = g["A"], g["B"], g["C"]
    arc_polyline(L, A[0], A[1], r, 180, 180 + ang_a)
    lx, ly = A[0] + lab_r * math.cos(math.radians(180 + ang_a / 2)), A[1] + lab_r * math.sin(math.radians(180 + ang_a / 2))
    text(L, lx, ly + 8, f"{ang_a:g}°", size=24, color=GOLD)
    arc_polyline(L, B[0], B[1], r, ang_a, 90)
    lx, ly = B[0] + lab_r * math.cos(math.radians((ang_a + 90) / 2)), B[1] + lab_r * math.sin(math.radians((ang_a + 90) / 2))
    text(L, lx, ly + 8, f"{ang_b:g}°", size=24, color=GOLD)
    ra_marker(L, C, (1, 0), (0, -1), 20)
    text(L, C[0] + 52, C[1] - 34, "90°", size=24, color=GOLD)


def vertex_labels(L, g, names=("A", "B", "C")):
    A, B, C = g["A"], g["B"], g["C"]
    text(L, A[0] + 30, A[1] + 8, names[0], size=26, anchor="start")
    text(L, B[0], B[1] - 26, names[1], size=26)
    text(L, C[0] - 30, C[1] + 8, names[2], size=26)


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

# --- Diagram 1: two similar right triangles, 3-4-5 and 6-8-10 (k = 2) -------
G1a = build_345((180, 480), 45)
G1b = build_345((700, 480), 45)
L = [header("Two Similar Right Triangles: 3-4-5 and 6-8-10")]
formula_line(L, "k = 6 ÷ 3 = 8 ÷ 4 = 10 ÷ 5 = 2")
triangle(L, G1a)
vertex_dots(L, [G1a["A"], G1a["B"], G1a["C"]])
vertex_labels(L, G1a)
ra_marker(L, G1a["C"], (1, 0), (0, -1), 16)
side_labels(L, G1a, "a = 3", "b = 4", "c = 5")
text(L, 270, 568, "Original: 3-4-5", size=26, color=GREEN)
triangle(L, G1b, stroke=BLUE)
vertex_dots(L, [G1b["A"], G1b["B"], G1b["C"]], color=BLUE)
vertex_labels(L, G1b)
ra_marker(L, G1b["C"], (1, 0), (0, -1), 16)
side_labels(L, G1b, "a′ = 6", "b′ = 8", "c′ = 10", a_color=BLUE, b_color=GOLD, c_color=WHITE)
text(L, 880, 568, "Similar: 6-8-10", size=26, color=GREEN)
text(L, 530, 400, "× 2", size=40, color=GOLD)
text(L, 600, 600, "Every side doubles, so the shape stays the same", size=26, color=GREEN)
L.append(footer())
write("similar-triangles-two.svg", "".join(x + "\n" for x in L))

# --- Diagram 2: corresponding side identification, ABC and DEF ---------------
G2a = build_345((200, 500), 55)
G2b = build_345((720, 500), 55)
L = [header("Corresponding Sides: ABC and DEF")]
formula_line(L, "AB ↔ DE      BC ↔ EF      AC ↔ DF")
# Left triangle ABC: BC blue, AC gold, AB green
triangle(L, G2a, fill_opacity="0.0", width=7, stroke=WHITE)
line(L, G2a["B"], G2a["C"], BLUE, 8)
line(L, G2a["A"], G2a["C"], GOLD, 8)
line(L, G2a["A"], G2a["B"], GREEN, 8)
vertex_dots(L, [G2a["A"], G2a["B"], G2a["C"]])
vertex_labels(L, G2a)
ra_marker(L, G2a["C"], (1, 0), (0, -1), 16)
text(L, 310, 552, "Triangle ABC", size=26, color=WHITE)
# Right triangle DEF: F right angle, D bottom-right, E top-left
# EF blue (like BC), DF gold (like AC), DE green (like AB)
triangle(L, G2b, fill_opacity="0.0", width=7, stroke=WHITE)
line(L, G2b["B"], G2b["C"], BLUE, 8)
line(L, G2b["A"], G2b["C"], GOLD, 8)
line(L, G2b["A"], G2b["B"], GREEN, 8)
vertex_dots(L, [G2b["A"], G2b["B"], G2b["C"]], color=BLUE)
vertex_labels(L, G2b, names=("D", "E", "F"))
ra_marker(L, G2b["C"], (1, 0), (0, -1), 16)
text(L, 830, 552, "Triangle DEF", size=26, color=WHITE)
# Equal acute-angle markers at A and D
arc_polyline(L, G2a["A"][0], G2a["A"][1], 52, 180, 180 + 36.87)
arc_polyline(L, G2b["A"][0], G2b["A"][1], 52, 180, 180 + 36.87)
text(L, 600, 585, "Matching colors mark matching sides", size=26, color=GREEN)
L.append(footer())
write("similar-triangles-corresponding.svg", "".join(x + "\n" for x in L))

# --- Diagram 3: AA similarity rule, 30-60-90 ---------------------------------
G3a = build_306090((250, 520), 130)
G3b = build_306090((750, 520), 130)
L = [header("AA Similarity: 30-60-90 and 30-60-90")]
formula_line(L, "30° + 60° + 90° = 180° in both triangles")
triangle(L, G3a)
vertex_dots(L, [G3a["A"], G3a["B"], G3a["C"]])
vertex_labels(L, G3a)
angle_labels(L, G3a, 30, 60)
triangle(L, G3b, stroke=BLUE)
vertex_dots(L, [G3b["A"], G3b["B"], G3b["C"]], color=BLUE)
vertex_labels(L, G3b)
angle_labels(L, G3b, 30, 60)
text(L, 600, 585, "One matching acute angle is enough: the third must match", size=26, color=GREEN)
L.append(footer())
write("similar-triangles-aa.svg", "".join(x + "\n" for x in L))

# --- Diagram 4: finding the scale factor, 6 -> 18, k = 3 --------------------
# Original 6-8-10 (3-4-5 scaled by 2) and similar 18-24-30 (scaled by 6)
G4a = build_right((150, 500), 6, 8, 20)
G4b = build_right((650, 500), 18, 24, 18)
L = [header("Finding the Scale Factor: 6 to 18")]
formula_line(L, "k = 18 ÷ 6 = 3")
triangle(L, G4a)
vertex_dots(L, [G4a["A"], G4a["B"], G4a["C"]])
vertex_labels(L, G4a)
ra_marker(L, G4a["C"], (1, 0), (0, -1), 16)
side_labels(L, G4a, "a = 6", "b = 8", "c = 10")
text(L, 230, 585, "Original", size=26, color=GREEN)
triangle(L, G4b, stroke=BLUE)
vertex_dots(L, [G4b["A"], G4b["B"], G4b["C"]], color=BLUE)
vertex_labels(L, G4b)
ra_marker(L, G4b["C"], (1, 0), (0, -1), 16)
side_labels(L, G4b, "a′ = 18", "b′ = 24", "c′ = 30")
text(L, 866, 585, "Similar", size=26, color=GREEN)
arrow_to(L, (360, 400), (620, 400))
text(L, 490, 372, "× 3", size=36, color=GOLD)
L.append(footer())
write("similar-triangles-scale-factor.svg", "".join(x + "\n" for x in L))

# --- Diagram 5: finding a missing similar side, 8 x 2.5 = 20 ----------------
L = [header("Finding a Missing Similar Side")]
formula_line(L, "Similar Side = Original Side × k")
box(L, 60, 250, 340, 90)
text(L, 230, 286, "Original side", size=26, color=GREY)
text(L, 230, 322, "= 8", size=30, color=WHITE)
arrow_to(L, (400, 295), (560, 295))
text(L, 480, 262, "× 2.5", size=30, color=GOLD)
box(L, 560, 250, 340, 90, stroke=GREEN)
text(L, 730, 286, "Similar side", size=26, color=GREY)
text(L, 730, 322, "= 20", size=30, color=GREEN)
box(L, 400, 430, 400, 70, stroke=GREEN)
text(L, 600, 474, "8 × 2.5 = 20", size=30, color=GREEN)
text(L, 600, 585, "Multiply by k to move from the original to the similar side", size=26, color=GREEN)
L.append(footer())
write("similar-triangles-missing-side.svg", "".join(x + "\n" for x in L))

# --- Diagram 6: finding an original side, 15 / 3 = 5 (reverse direction) -----
L = [header("Finding an Original Side")]
formula_line(L, "Original Side = Similar Side ÷ k")
box(L, 800, 250, 340, 90)
text(L, 970, 286, "Similar side", size=26, color=GREY)
text(L, 970, 322, "= 15", size=30, color=WHITE)
arrow_to(L, (800, 295), (640, 295))
text(L, 720, 262, "÷ 3", size=30, color=GOLD)
box(L, 300, 250, 340, 90, stroke=GREEN)
text(L, 470, 286, "Original side", size=26, color=GREY)
text(L, 470, 322, "= 5", size=30, color=GREEN)
box(L, 400, 430, 400, 70, stroke=GREEN)
text(L, 600, 474, "15 ÷ 3 = 5", size=30, color=GREEN)
text(L, 600, 585, "Divide by k to reverse a scaling and recover the original", size=26, color=GREEN)
L.append(footer())
write("similar-triangles-original-side.svg", "".join(x + "\n" for x in L))

# --- Diagram 7: enlargement and reduction, k = 0.5, 1, 2 ---------------------
G7a = build_345((120, 520), 25)
G7b = build_345((380, 520), 50)
G7c = build_345((700, 520), 100)
L = [header("Enlargement and Reduction")]
formula_line(L, "Same angles, same proportions, different sizes")
triangle(L, G7a)
vertex_dots(L, [G7a["A"], G7a["B"], G7a["C"]])
ra_marker(L, G7a["C"], (1, 0), (0, -1), 14)
text(L, 170, 568, "k = 0.5", size=26, color=BLUE)
text(L, 170, 150, "half size", size=24, color=GREY)
triangle(L, G7b)
vertex_dots(L, [G7b["A"], G7b["B"], G7b["C"]])
ra_marker(L, G7b["C"], (1, 0), (0, -1), 16)
text(L, 480, 568, "k = 1", size=26, color=WHITE)
text(L, 480, 150, "same size", size=24, color=GREY)
triangle(L, G7c, stroke=GREEN)
vertex_dots(L, [G7c["A"], G7c["B"], G7c["C"]], color=GREEN)
ra_marker(L, G7c["C"], (1, 0), (0, -1), 16)
text(L, 900, 568, "k = 2", size=26, color=GREEN)
text(L, 900, 150, "twice as large", size=24, color=GREY)
text(L, 600, 600, "Scaling changes size only, never the angles", size=26, color=GREEN)
L.append(footer())
write("similar-triangles-enlarge-reduce.svg", "".join(x + "\n" for x in L))

# --- Diagram 8: perimeter and area scaling, 3-4-5 -> 6-8-10 ------------------
G8a = build_345((140, 440), 45)
G8b = build_345((640, 440), 45)
L = [header("Perimeter and Area Scaling: 3-4-5 to 6-8-10")]
formula_line(L, "k = 2: sides double, perimeter doubles, area × 4")
triangle(L, G8a)
vertex_dots(L, [G8a["A"], G8a["B"], G8a["C"]])
vertex_labels(L, G8a)
ra_marker(L, G8a["C"], (1, 0), (0, -1), 16)
side_labels(L, G8a, "a = 3", "b = 4", "c = 5")
text(L, 230, 530, "P = 3 + 4 + 5 = 12", size=26, color=GOLD)
text(L, 230, 562, "A = (3 × 4) ÷ 2 = 6", size=26, color=BLUE)
triangle(L, G8b, stroke=BLUE)
vertex_dots(L, [G8b["A"], G8b["B"], G8b["C"]], color=BLUE)
vertex_labels(L, G8b)
ra_marker(L, G8b["C"], (1, 0), (0, -1), 16)
side_labels(L, G8b, "a′ = 6", "b′ = 8", "c′ = 10")
text(L, 820, 530, "P = 6 + 8 + 10 = 24", size=26, color=GOLD)
text(L, 820, 562, "A = (6 × 8) ÷ 2 = 24", size=26, color=BLUE)
text(L, 480, 380, "× 2", size=40, color=GOLD)
text(L, 600, 600, "Area grows by k² = 4, not by 2", size=26, color=GREEN)
L.append(footer())
write("similar-triangles-perimeter-area.svg", "".join(x + "\n" for x in L))

print("all 8 diagrams written")
