#!/usr/bin/env python3
"""gen_page38_diagrams.py — 7 SVG diagrams for Page 38 (Right Triangle Inradius Calculator, r = (a+b-c)/2).

Style matches Page 35: 1200x630, dark #131313 bg, gold #f1c97d strokes,
green #4ade80, blue #7dd3fc, white labels.
Geometry: true 6-8-10 triangle (AC = a = 6, BC = b = 8, AB = c = 10),
right angle at C, legs on the axes. Incenter I = C + (r, -r) with
r = (a+b-c)/2 = 2 units. Tangency feet are the perpendicular projections
of I onto each side; the generator asserts each |I - foot| == r within
0.5 px, each radius perpendicular to its side, and the equal tangent
segments (from C: r = 2, from A: x = 4, from B: y = 6, x + y = c).
The circumcircle in diagram 7 is asserted to pass exactly through A, B
and C (center = hypotenuse midpoint, R = c/2 = 5 units).
No SVG arc (A) commands anywhere; only polygon/polyline/line/circle/
rect/text. Circles use <circle> elements. No captions inside the SVGs:
captions live in the guide JSON. Outputs: public/images/inradius/*.svg
"""
import math
import os
import re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "images", "inradius")
os.makedirs(OUT, exist_ok=True)

GOLD = "#f1c97d"
GREEN = "#4ade80"
BLUE = "#7dd3fc"
WHITE = "#ffffff"
GREY = "#a3a3a3"
PANEL = "#1c1b1b"
PANEL_EDGE = "#2e2c2c"

A_U, B_U, C_U = 6.0, 8.0, 10.0          # AC = a, BC = b, AB = c
R_U = (A_U + B_U - C_U) / 2             # inradius = 2
X_U = A_U - R_U                         # tangent length from A = 4
Y_U = B_U - R_U                         # tangent length from B = 6


def dist(P, Q):
    return math.hypot(P[0] - Q[0], P[1] - Q[1])


def dot(u, v):
    return u[0] * v[0] + u[1] * v[1]


def foot(P, Q1, Q2):
    """Perpendicular foot from P onto line Q1Q2."""
    vx, vy = Q2[0] - Q1[0], Q2[1] - Q1[1]
    t = ((P[0] - Q1[0]) * vx + (P[1] - Q1[1]) * vy) / (vx * vx + vy * vy)
    return (Q1[0] + t * vx, Q1[1] + t * vy)


def build_geometry(C, S):
    """Right triangle with legs on the axes: C bottom-left, A right, B up."""
    A = (C[0] + A_U * S, C[1])
    B = (C[0], C[1] - B_U * S)
    I = (C[0] + R_U * S, C[1] - R_U * S)
    r_px = R_U * S
    F_ac = (I[0], C[1])                # foot on AC (base)
    F_bc = (C[0], I[1])                # foot on BC (vertical leg)
    F_ab = foot(I, A, B)               # foot on hypotenuse
    O = ((A[0] + B[0]) / 2, (A[1] + B[1]) / 2)
    R_px = C_U * S / 2
    g = {"C": C, "A": A, "B": B, "I": I, "r": r_px,
         "F_ac": F_ac, "F_bc": F_bc, "F_ab": F_ab,
         "O": O, "R": R_px, "S": S}
    # --- numeric verification (all tolerances 0.5 px) ---
    assert abs(dist(C, A) - A_U * S) < 0.5, "AC length"
    assert abs(dist(C, B) - B_U * S) < 0.5, "BC length"
    assert abs(dist(A, B) - C_U * S) < 0.5, "AB length"
    assert abs(dot((A[0] - C[0], A[1] - C[1]),
                   (B[0] - C[0], B[1] - C[1]))) < 0.5, "right angle at C"
    for name, F in (("F_ac", F_ac), ("F_bc", F_bc), ("F_ab", F_ab)):
        assert abs(dist(I, F) - r_px) < 0.5, f"|I-{name}| != r"
    assert abs(dot((I[0] - F_ab[0], I[1] - F_ab[1]),
                   (B[0] - A[0], B[1] - A[1]))) < 0.5, "radius not perp to AB"
    assert abs(dist(C, F_ac) - r_px) < 0.5, "tangent from C on AC != r"
    assert abs(dist(C, F_bc) - r_px) < 0.5, "tangent from C on BC != r"
    assert abs(dist(A, F_ac) - X_U * S) < 0.5, "tangent from A on AC != x"
    assert abs(dist(A, F_ab) - X_U * S) < 0.5, "tangent from A on AB != x"
    assert abs(dist(B, F_bc) - Y_U * S) < 0.5, "tangent from B on BC != y"
    assert abs(dist(B, F_ab) - Y_U * S) < 0.5, "tangent from B on AB != y"
    assert abs(dist(O, A) - R_px) < 0.5, "OA != R"
    assert abs(dist(O, B) - R_px) < 0.5, "OB != R"
    assert abs(dist(O, C) - R_px) < 0.5, "OC != R"
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
    L.append(f'  <text x="{x}" y="{y}" font-size="{size}" font-weight="{weight}" fill="{color}" text-anchor="{anchor}">{s}</text>')


def triangle(L, g, fill_opacity="0.04", width=7):
    A, B, C = g["A"], g["B"], g["C"]
    pts = f"{A[0]},{A[1]} {B[0]},{B[1]} {C[0]},{C[1]}"
    L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="{fill_opacity}" stroke="none"/>')
    L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="{width}" stroke-linejoin="round"/>')


def vertex_dots(L, pts, color=GOLD, r=9):
    for P in pts:
        L.append(f'  <circle cx="{P[0]}" cy="{P[1]}" r="{r}" fill="{color}"/>')


def line(L, P, Q, color, width, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    L.append(f'  <line x1="{P[0]:.1f}" y1="{P[1]:.1f}" x2="{Q[0]:.1f}" y2="{Q[1]:.1f}" stroke="{color}" stroke-width="{width}" stroke-linecap="round"{d}/>')


def circle(L, cx, cy, r, color, width=4, fill="none"):
    L.append(f'  <circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r:.1f}" fill="{fill}" stroke="{color}" stroke-width="{width}"/>')


def panel(L, x, y, w, h, lines):
    """Info panel: lines = [(text, size, weight, color, gap)] with y as first baseline."""
    L.append(f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{PANEL}" stroke="{PANEL_EDGE}"/>')
    cy = y
    for (t, size, weight, color, gap) in lines:
        cy += gap
        text(L, x + w // 2, cy, t, size=size, weight=weight, color=color)


def ra_marker(L, P, u, v, s=18, color=WHITE, width=3):
    """Small square at P, sides along unit vectors u (along side) and v (into triangle)."""
    p1 = (P[0] + u[0] * s, P[1] + u[1] * s)
    p2 = (p1[0] + v[0] * s, p1[1] + v[1] * s)
    p3 = (P[0] + v[0] * s, P[1] + v[1] * s)
    L.append(f'  <polyline points="{p1[0]:.1f},{p1[1]:.1f} {p2[0]:.1f},{p2[1]:.1f} {p3[0]:.1f},{p3[1]:.1f}" fill="none" stroke="{color}" stroke-width="{width}"/>')


def arc_polyline(L, cx, cy, r, a0, a1, n=12, color=GOLD, width=3):
    pts = []
    for i in range(n + 1):
        t = math.radians(a0 + (a1 - a0) * i / n)
        pts.append(f"{cx + r * math.cos(t):.1f},{cy + r * math.sin(t):.1f}")
    L.append(f'  <polyline points="{" ".join(pts)}" fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round"/>')


def tick(L, mid, side_u, normal_u, count, color=GOLD, width=4, half=9, gap=7):
    """`count` short ticks across a side at mid (equal-length segment marks)."""
    for i in range(count):
        off = (i - (count - 1) / 2) * gap
        cx = mid[0] + side_u[0] * off
        cy = mid[1] + side_u[1] * off
        line(L, (cx - normal_u[0] * half, cy - normal_u[1] * half),
             (cx + normal_u[0] * half, cy + normal_u[1] * half), color, width)


def ra_markers_at_feet(L, g, size=18):
    """Right-angle squares where each radius meets its side, plus at C."""
    C, I = g["C"], g["I"]
    # at C: along AC (+x), into triangle (-y)
    ra_marker(L, C, (1, 0), (0, -1), size)
    # on AC: along (-x), into triangle (-y)
    ra_marker(L, g["F_ac"], (-1, 0), (0, -1), size, color=GREEN)
    # on BC: along (+y), into triangle (+x)
    ra_marker(L, g["F_bc"], (0, 1), (1, 0), size, color=GREEN)
    # on AB: AB direction (-0.6,-0.8), inward normal (-0.8,0.6)
    ra_marker(L, g["F_ab"], (-0.6, -0.8), (-0.8, 0.6), size, color=GREEN)


def incircle(L, g, width=4):
    I = g["I"]
    circle(L, I[0], I[1], g["r"], GREEN, width)
    L.append(f'  <circle cx="{I[0]:.1f}" cy="{I[1]:.1f}" r="9" fill="{GREEN}"/>')


def radii_to_legs(L, g, color=GREEN, width=3, dash="9 7"):
    line(L, g["I"], g["F_ac"], color, width, dash)
    line(L, g["I"], g["F_bc"], color, width, dash)


def vertex_labels(L, g, i_label=None, i_pos=None):
    A, B, C = g["A"], g["B"], g["C"]
    text(L, A[0] + 26, A[1] + 8, "A", size=26, anchor="start")
    text(L, B[0] - 30, B[1] + 8, "B", size=26)
    text(L, C[0] - 30, C[1] + 8, "C", size=26)
    if i_label and i_pos:
        text(L, i_pos[0], i_pos[1], i_label, size=26, color=GREEN)


def side_labels(L, g, a_text="a = 6", b_text="b = 8", c_text="c = 10",
                a_pos=None, b_pos=None, c_pos=None):
    A, B, C = g["A"], g["B"], g["C"]
    if a_pos is None:
        a_pos = ((A[0] + C[0]) / 2, C[1] + 48)
    if b_pos is None:
        b_pos = (C[0] - 50, (B[1] + C[1]) / 2)
    if c_pos is None:
        mx, my = (A[0] + B[0]) / 2, (A[1] + B[1]) / 2
        c_pos = (mx + 58, my - 43)  # outward normal (0.8,-0.6) * 72
    text(L, a_pos[0], a_pos[1], a_text, size=28, color=BLUE)
    text(L, b_pos[0], b_pos[1], b_text, size=28, color=GOLD)
    text(L, c_pos[0], c_pos[1], c_text, size=28)


def hyp_radius(L, g, label="r", label_offset=28, width=6, side=-1):
    """Highlighted solid radius from I to the hypotenuse foot, with label."""
    I, F = g["I"], g["F_ab"]
    line(L, I, F, GREEN, width)
    mx, my = (I[0] + F[0]) / 2, (I[1] + F[1]) / 2
    # offset perpendicular to the radius (along the hypotenuse); side -1
    # is up-left, side +1 is down-right (used where the O-C median runs
    # close on the up-left side, diagram 7)
    text(L, mx + side * 0.6 * label_offset, my + side * 0.8 * label_offset,
         label, size=26, color=GREEN)


def write(name, svg):
    assert "<path" not in svg, f"path element in {name}"
    assert re.search(r'\bd="[^"]*\sA[\s,]', svg) is None, f"arc command in {name}"
    path = os.path.join(OUT, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    print("wrote", path)


# ---------------------------------------------------------------- diagrams

# CENTERED layout, S = 55: triangle 330 wide, 440 tall (70% of canvas height)
GC = build_geometry((435, 540), 55)
# LEFT layout, S = 55 (room for a right-hand panel)
GL = build_geometry((360, 540), 55)
# SMALL layout, S = 48, for diagram 7 (circumcircle must clear the title)
G7 = build_geometry((430, 530), 48)


def main():
    # 1. Main incircle: triangle ABC, incenter I, incircle, one highlighted radius
    L = [header("Right Triangle With an Incircle")]
    triangle(L, GC)
    incircle(L, GC)
    radii_to_legs(L, GC)
    hyp_radius(L, GC)
    ra_markers_at_feet(L, GC)
    vertex_dots(L, (GC["A"], GC["B"], GC["C"]))
    vertex_labels(L, GC, "I", (GC["I"][0] - 33, GC["I"][1] - 12))
    side_labels(L, GC)
    L.append(footer())
    write("inradius-main-incircle.svg", "".join(L))

    # 2. Three points of tangency: three perpendicular radii, equal tangent segments
    g = GL
    L = [header("Three Points of Tangency")]
    triangle(L, g)
    incircle(L, g)
    for F in (g["F_ac"], g["F_bc"], g["F_ab"]):
        line(L, g["I"], F, GREEN, 5)
        L.append(f'  <circle cx="{F[0]:.1f}" cy="{F[1]:.1f}" r="8" fill="{GREEN}"/>')
    ra_markers_at_feet(L, g)
    # tick marks: 1 tick = r segments, 2 ticks = x segments, 3 ticks = y segments
    tick(L, ((g["C"][0] + g["F_ac"][0]) / 2, (g["C"][1] + g["F_ac"][1]) / 2),
         (1, 0), (0, 1), 1)
    tick(L, ((g["F_ac"][0] + g["A"][0]) / 2, (g["F_ac"][1] + g["A"][1]) / 2),
         (1, 0), (0, 1), 2)
    tick(L, ((g["C"][0] + g["F_bc"][0]) / 2, (g["C"][1] + g["F_bc"][1]) / 2),
         (0, 1), (1, 0), 1)
    tick(L, ((g["F_bc"][0] + g["B"][0]) / 2, (g["F_bc"][1] + g["B"][1]) / 2),
         (0, 1), (1, 0), 3)
    tick(L, ((g["A"][0] + g["F_ab"][0]) / 2, (g["A"][1] + g["F_ab"][1]) / 2),
         (-0.6, -0.8), (0.8, -0.6), 2)
    tick(L, ((g["F_ab"][0] + g["B"][0]) / 2, (g["F_ab"][1] + g["B"][1]) / 2),
         (-0.6, -0.8), (0.8, -0.6), 3)
    vertex_dots(L, (g["A"], g["B"], g["C"]))
    vertex_labels(L, g, "I", (g["I"][0] - 25, g["I"][1] - 18))
    # tangency point labels
    text(L, g["F_bc"][0] - 30, g["F_bc"][1] + 8, "T1", size=22, color=GREEN)
    text(L, g["F_ac"][0] + 30, g["F_ac"][1] - 28, "T2", size=22, color=GREEN)
    text(L, g["F_ab"][0] + 29, g["F_ab"][1] - 22, "T3", size=22, color=GREEN)
    # side labels: b and c as usual; base shows the two tangent lengths r and x
    text(L, g["C"][0] - 50, (g["B"][1] + g["C"][1]) / 2, "b = 8", size=28, color=GOLD)
    mx, my = (g["A"][0] + g["B"][0]) / 2, (g["A"][1] + g["B"][1]) / 2
    text(L, mx + 58, my - 43, "c = 10", size=28)
    text(L, (g["C"][0] + g["F_ac"][0]) / 2, g["C"][1] + 48, "r", size=26, color=GREEN)
    text(L, (g["F_ac"][0] + g["A"][0]) / 2, g["C"][1] + 48, "x", size=26, color=BLUE)
    text(L, g["C"][0] - 30, (g["C"][1] + g["F_bc"][1]) / 2, "r", size=26, color=GREEN)
    text(L, g["C"][0] - 30, (g["F_bc"][1] + g["B"][1]) / 2, "y", size=26, color=BLUE)
    panel(L, 800, 140, 340, 290, [
        ("Equal tangent segments", 24, 700, GOLD, 50),
        ("1 tick: r = 2", 22, 400, WHITE, 44),
        ("2 ticks: x = 4", 22, 400, WHITE, 42),
        ("3 ticks: y = 6", 22, 400, WHITE, 42),
        ("x + y = 4 + 6 = 10", 22, 700, GOLD, 48),
    ])
    L.append(footer())
    write("inradius-tangency-points.svg", "".join(L))

    # 3. Angle bisectors: all three meet at I, equal perpendicular distances
    g = GC
    L = [header("Incenter and Angle Bisectors")]
    triangle(L, g)
    incircle(L, g, width=3)
    for V in (g["A"], g["B"], g["C"]):
        line(L, V, g["I"], GOLD, 4, "12 8")
    radii_to_legs(L, g, width=3, dash="7 6")
    line(L, g["I"], g["F_ab"], GREEN, 3, "7 6")
    ra_markers_at_feet(L, g)
    # angle arcs at the three vertices (polyline approximations, no arc commands)
    arc_polyline(L, g["C"][0], g["C"][1], 36, 0, -90)
    arc_polyline(L, g["A"][0], g["A"][1], 36, 180, 233.13)
    arc_polyline(L, g["B"][0], g["B"][1], 36, 53.13, 90)
    vertex_dots(L, (g["A"], g["B"], g["C"]))
    vertex_labels(L, g, "I", (g["I"][0] - 33, g["I"][1] - 12))
    side_labels(L, g)
    # r labels at the three perpendicular distances
    text(L, g["I"][0] + 23, g["I"][1] + 60, "r", size=22, color=GREEN)
    text(L, g["I"][0] - 55, g["I"][1] - 22, "r", size=22, color=GREEN)
    text(L, (g["I"][0] + g["F_ab"][0]) / 2 - 14.4,
         (g["I"][1] + g["F_ab"][1]) / 2 - 19.2, "r", size=22, color=GREEN)
    L.append(footer())
    write("inradius-angle-bisectors.svg", "".join(L))

    # 4. Formula illustration: r = (a + b - c) / 2 with labeled triangle
    g = GL
    L = [header("Inradius Formula: r = (a + b - c) / 2")]
    triangle(L, g)
    incircle(L, g)
    radii_to_legs(L, g)
    hyp_radius(L, g)
    ra_markers_at_feet(L, g)
    vertex_dots(L, (g["A"], g["B"], g["C"]))
    vertex_labels(L, g, "I", (g["I"][0] - 25, g["I"][1] - 18))
    side_labels(L, g)
    panel(L, 800, 140, 340, 300, [
        ("r = (a + b - c) / 2", 28, 700, GOLD, 56),
        ("a = 6, b = 8, c = 10", 22, 400, WHITE, 48),
        ("r = (6 + 8 - 10) / 2", 24, 700, WHITE, 52),
        ("r = 2", 30, 700, GOLD, 56),
    ])
    L.append(footer())
    write("inradius-formula.svg", "".join(L))

    # 5. Area and semiperimeter: three small triangles sharing I, A = r x s
    g = GC
    L = [header("Area and Semiperimeter: A = r Times s")]
    A, B, C, I = g["A"], g["B"], g["C"], g["I"]
    for pts, fill in (
            ((C, A, I), "#f1c97d"),
            ((C, B, I), "#7dd3fc"),
            ((A, B, I), "#4ade80")):
        p = f"{pts[0][0]},{pts[0][1]} {pts[1][0]},{pts[1][1]} {pts[2][0]},{pts[2][1]}"
        L.append(f'  <polygon points="{p}" fill="{fill}" fill-opacity="0.12" stroke="none"/>')
    triangle(L, g, fill_opacity="0")
    for V in (A, B, C):
        line(L, I, V, GOLD, 4)
    radii_to_legs(L, g, width=3, dash="7 6")
    line(L, I, g["F_ab"], GREEN, 3, "7 6")
    ra_markers_at_feet(L, g)
    vertex_dots(L, (A, B, C))
    vertex_labels(L, g, "I", (I[0] - 33, I[1] - 12))
    side_labels(L, g)
    # area of each small triangle: (1/2) x side x r
    text(L, 590, 515, "6", size=30, color=GOLD)
    text(L, 470, 360, "8", size=30, color=BLUE)
    text(L, 582, 357, "10", size=30, color=GREEN)
    # r labels at the three perpendicular distances
    text(L, I[0] + 23, I[1] + 60, "r", size=22, color=GREEN)
    text(L, I[0] - 55, I[1] - 22, "r", size=22, color=GREEN)
    text(L, (I[0] + g["F_ab"][0]) / 2 - 14.4,
         (I[1] + g["F_ab"][1]) / 2 - 19.2, "r", size=22, color=GREEN)
    panel(L, 880, 90, 290, 170, [
        ("A = 6 + 8 + 10", 24, 700, WHITE, 52),
        ("A = 24", 26, 700, GOLD, 48),
        ("r x s = 2 x 12 = 24", 24, 400, GREY, 44),
    ])
    L.append(footer())
    write("inradius-area-semiperimeter.svg", "".join(L))

    # 6. Worked example 6-8-10 with units
    g = GL
    L = [header("Worked Example: a = 6, b = 8, c = 10")]
    triangle(L, g)
    incircle(L, g)
    radii_to_legs(L, g)
    line(L, g["I"], g["F_ab"], GREEN, 6)  # highlighted radius (label added below with units)
    ra_markers_at_feet(L, g)
    vertex_dots(L, (g["A"], g["B"], g["C"]))
    vertex_labels(L, g, "I", (g["I"][0] - 25, g["I"][1] - 18))
    side_labels(L, g, a_text="a = 6 cm", b_text="b = 8 cm", c_text="c = 10 cm",
                b_pos=(g["C"][0] - 75, (g["B"][1] + g["C"][1]) / 2))
    # r label beside the vertical dashed radius (same r on every side)
    text(L, 470, 380, "r = 2 cm", size=24, color=GREEN)
    panel(L, 800, 120, 340, 330, [
        ("a = 6 cm, b = 8 cm", 24, 700, WHITE, 52),
        ("c = 10 cm", 24, 400, WHITE, 46),
        ("r = (6 + 8 - 10) / 2", 24, 700, GOLD, 52),
        ("r = 4 / 2 = 2 cm", 28, 700, GOLD, 56),
    ])
    L.append(footer())
    write("inradius-example-6-8-10.svg", "".join(L))

    # 7. Incircle vs circumcircle on the same triangle
    g = G7
    L = [header("Incircle vs Circumcircle: One Triangle, Two Circles")]
    A, B, C, I, O = g["A"], g["B"], g["C"], g["I"], g["O"]
    circle(L, O[0], O[1], g["R"], GOLD, 4)
    triangle(L, g)
    incircle(L, g)
    radii_to_legs(L, g)
    hyp_radius(L, g, width=5, side=1, label_offset=36)
    ra_markers_at_feet(L, g, size=16)
    line(L, O, A, BLUE, 5)
    line(L, O, C, BLUE, 5)
    vertex_dots(L, (A, B, C))
    L.append(f'  <circle cx="{O[0]:.1f}" cy="{O[1]:.1f}" r="9" fill="{BLUE}"/>')
    # vertex labels (placed clear of the circumcircle stroke)
    text(L, A[0] + 25, A[1] + 26, "A", size=26, anchor="start")
    text(L, B[0] - 30, B[1] + 8, "B", size=26)
    text(L, C[0] - 35, C[1] + 15, "C", size=26)
    text(L, I[0] - 16, I[1] + 44, "I", size=26, color=GREEN)
    text(L, O[0] + 32, O[1] + 8, "O", size=26, color=BLUE, anchor="start")
    # side labels: b on the left, c outside the hypotenuse (a is in the panel)
    text(L, C[0] - 48, (B[1] + C[1]) / 2, "b = 8", size=26, color=GOLD)
    mx, my = (A[0] + B[0]) / 2, (A[1] + B[1]) / 2
    text(L, mx + 42, my - 31, "c = 10", size=26)
    # R labels on the two circumradii
    text(L, 665, 420, "R", size=24, color=BLUE)
    text(L, 483, 420, "R", size=24, color=BLUE)
    panel(L, 850, 420, 300, 150, [
        ("a = 6, b = 8, c = 10", 22, 400, WHITE, 44),
        ("Incircle: r = 2", 24, 700, GREEN, 42),
        ("Circumcircle: R = 5", 24, 700, GOLD, 42),
    ])
    L.append(footer())
    write("inradius-vs-circumcircle.svg", "".join(L))


if __name__ == "__main__":
    for name, g in (("CENTERED (S=55)", GC), ("LEFT (S=55)", GL),
                    ("SMALL (S=48)", G7)):
        print(f"{name}: A={g['A']} B={g['B']} C={g['C']} I={g['I']} "
              f"r={g['r']:.1f}px R={g['R']:.1f}px")
        print(f"  |I-F_ac|={dist(g['I'], g['F_ac']):.2f} "
              f"|I-F_bc|={dist(g['I'], g['F_bc']):.2f} "
              f"|I-F_ab|={dist(g['I'], g['F_ab']):.2f} (r={g['r']:.1f})")
        print(f"  tangents: C->F_ac={dist(g['C'], g['F_ac']):.1f} "
              f"A->F_ac={dist(g['A'], g['F_ac']):.1f} "
              f"A->F_ab={dist(g['A'], g['F_ab']):.1f} "
              f"B->F_bc={dist(g['B'], g['F_bc']):.1f} "
              f"B->F_ab={dist(g['B'], g['F_ab']):.1f}")
        print(f"  circum: OA={dist(g['O'], g['A']):.2f} "
              f"OB={dist(g['O'], g['B']):.2f} OC={dist(g['O'], g['C']):.2f} "
              f"(R={g['R']:.1f})")
    main()
    print("All geometry assertions passed.")
