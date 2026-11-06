#!/usr/bin/env python3
"""gen_page37_diagrams.py — 7 SVG diagrams for Page 37 (Right Triangle Radius
Calculator: inradius r = (a+b-c)/2 and circumradius R = c/2).

Style matches Page 36: 1200x630, dark #131313 bg, gold #f1c97d strokes,
green #4ade80 incircle, blue #7dd3fc circumcircle, white labels.
Geometry: true 6-8-10 triangle (a=6, b=8, c=10, r=2, R=5, area 24, s=12).
Right angle at C with A above C and B to the right of C, so AC is leg a
(vertical), BC is leg b (horizontal), AB is hypotenuse c.
Incenter I is at (Cx + r*S, Cy - r*S); circumcenter O is the midpoint of AB
and R*S is the circumradius in pixels, so the circumcircle passes exactly
through A, B, and C. No SVG arc (A) commands anywhere; only
polygon/polyline/line/circle/rect/text. No captions inside the SVGs:
captions live in the guide JSON. Outputs: public/images/radius/*.svg
"""
import math
import os

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "images", "radius")
os.makedirs(OUT, exist_ok=True)

GOLD = "#f1c97d"
GREEN = "#4ade80"
BLUE = "#7dd3fc"
WHITE = "#ffffff"
GREY = "#a3a3a3"
PANEL = "#1c1b1b"
PANEL_EDGE = "#2e2c2c"


def header(title):
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" '
        'font-family="Manrope, Inter, system-ui, sans-serif">\n'
        '  <rect x="0" y="0" width="1200" height="630" fill="#131313"/>\n'
        f'  <text x="600" y="58" font-size="28" font-weight="700" fill="#ffffff" text-anchor="middle">{title}</text>\n'
    )


def footer():
    return "</svg>\n"


def frame(Cx, Cy, S):
    """Return A, B, C, I, O, r_px, R_px for the 6-8-10 triangle.

    C is the right-angle corner, A is above C (leg a = 6), B is right of C
    (leg b = 8). S is pixels per unit.
    """
    A = (Cx, Cy - 6 * S)
    B = (Cx + 8 * S, Cy)
    C = (Cx, Cy)
    r_px = 2 * S
    R_px = 5 * S
    I = (Cx + r_px, Cy - r_px)
    O = ((A[0] + B[0]) / 2, (A[1] + B[1]) / 2)
    return A, B, C, I, O, r_px, R_px


def right_angle_at_C(L, C):
    x, y = C
    L.append(f'  <polyline points="{x+24},{y} {x+24},{y-24} {x},{y-24}" fill="none" stroke="{WHITE}" stroke-width="3"/>')


def tri(L, A, B, C):
    pts = f"{A[0]},{A[1]} {B[0]},{B[1]} {C[0]},{C[1]}"
    L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
    L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="8" stroke-linejoin="round"/>')
    for P in (A, B, C):
        L.append(f'  <circle cx="{P[0]}" cy="{P[1]}" r="9" fill="{GOLD}"/>')


def vertex_labels(L, A, B, C):
    L.append(f'  <text x="{A[0]}" y="{A[1]-24}" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">A</text>')
    L.append(f'  <text x="{B[0]+32}" y="{B[1]+8}" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">B</text>')
    L.append(f'  <text x="{C[0]-34}" y="{C[1]+8}" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')


def side_labels(L, A, B, C):
    mid_a = ((A[0] + C[0]) / 2 - 32, (A[1] + C[1]) / 2)
    mid_b = ((B[0] + C[0]) / 2, C[1] + 44)
    mx, my = (A[0] + B[0]) / 2, (A[1] + B[1]) / 2
    # outward normal of AB (away from C) is (0.8, -0.6) for the 6-8-10 shape
    mid_c = (mx + 36, my - 26)
    L.append(f'  <text x="{mid_a[0]:.0f}" y="{mid_a[1]:.0f}" font-size="28" font-weight="700" fill="{BLUE}" text-anchor="middle">a</text>')
    L.append(f'  <text x="{mid_b[0]:.0f}" y="{mid_b[1]:.0f}" font-size="28" font-weight="700" fill="{GOLD}" text-anchor="middle">b</text>')
    L.append(f'  <text x="{mid_c[0]:.0f}" y="{mid_c[1]:.0f}" font-size="28" font-weight="700" fill="{WHITE}" text-anchor="middle">c</text>')


def panel(L, lines, x=830, y=96, w=336, h=204):
    L.append(f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{PANEL}" stroke="{PANEL_EDGE}"/>')
    cy = y + 54
    for i, (text, size, color, weight) in enumerate(lines):
        L.append(f'  <text x="{x + w // 2}" y="{cy + i * 42}" font-size="{size}" font-weight="{weight}" fill="{color}" text-anchor="middle">{text}</text>')


def incircle(L, I, r_px, show_radius_to_hyp=True, A=None, B=None):
    L.append(f'  <circle cx="{I[0]}" cy="{I[1]}" r="{r_px}" fill="none" stroke="{GREEN}" stroke-width="6"/>')
    L.append(f'  <circle cx="{I[0]}" cy="{I[1]}" r="8" fill="{GREEN}"/>')
    L.append(f'  <text x="{I[0]+30}" y="{I[1]-18}" font-size="24" font-weight="700" fill="{GREEN}" text-anchor="middle">I</text>')
    if show_radius_to_hyp and A is not None and B is not None:
        # foot of perpendicular from I onto AB: t = 0.4 for the 6-8-10 shape
        vx, vy = B[0] - A[0], B[1] - A[1]
        t = ((I[0] - A[0]) * vx + (I[1] - A[1]) * vy) / (vx * vx + vy * vy)
        fx, fy = A[0] + t * vx, A[1] + t * vy
        L.append(f'  <line x1="{I[0]}" y1="{I[1]}" x2="{fx:.0f}" y2="{fy:.0f}" stroke="{GREEN}" stroke-width="4" stroke-dasharray="8 6" stroke-linecap="round"/>')
        L.append(f'  <circle cx="{fx:.0f}" cy="{fy:.0f}" r="6" fill="{GREEN}"/>')
        L.append(f'  <text x="{(I[0]+fx)/2+34:.0f}" y="{(I[1]+fy)/2:.0f}" font-size="26" font-weight="700" fill="{GREEN}" text-anchor="middle">r</text>')


def circumcircle(L, O, R_px, C=None):
    L.append(f'  <circle cx="{O[0]:.0f}" cy="{O[1]:.0f}" r="{R_px}" fill="none" stroke="{BLUE}" stroke-width="6"/>')
    L.append(f'  <circle cx="{O[0]:.0f}" cy="{O[1]:.0f}" r="8" fill="{BLUE}"/>')
    L.append(f'  <text x="{O[0]+30:.0f}" y="{O[1]-20:.0f}" font-size="24" font-weight="700" fill="{BLUE}" text-anchor="middle">O</text>')
    if C is not None:
        # radius O to right-angle vertex C (dashed blue)
        L.append(f'  <line x1="{O[0]:.0f}" y1="{O[1]:.0f}" x2="{C[0]}" y2="{C[1]}" stroke="{BLUE}" stroke-width="4" stroke-dasharray="8 6" stroke-linecap="round"/>')
        L.append(f'  <text x="{(O[0]+C[0])/2-40:.0f}" y="{(O[1]+C[1])/2:.0f}" font-size="26" font-weight="700" fill="{BLUE}" text-anchor="middle">R</text>')


def write(name, svg):
    path = os.path.join(OUT, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    print("wrote", path)


def main():
    # 1. Incircle: S=55, C=(320,500); I=(430,390), r=110px
    A, B, C, I, O, r_px, R_px = frame(320, 500, 55)
    L = [header("Right Triangle With an Incircle")]
    tri(L, A, B, C)
    incircle(L, I, r_px, A=A, B=B)
    right_angle_at_C(L, C)
    vertex_labels(L, A, B, C)
    side_labels(L, A, B, C)
    panel(L, [
        ("r = (a + b - c) / 2", 26, GOLD, "700"),
        ("a = 6, b = 8, c = 10", 20, GREY, "400"),
        ("r = 2 cm", 26, WHITE, "700"),
        ("touches all 3 sides", 19, GREY, "400"),
    ])
    L.append(footer())
    write("radius-incircle.svg", "".join(L))

    # 2. Circumcircle: S=45, C=(380,470); O=(560,335), R=225px
    A, B, C, I, O, r_px, R_px = frame(380, 470, 45)
    L = [header("Right Triangle With a Circumcircle")]
    tri(L, A, B, C)
    circumcircle(L, O, R_px, C=C)
    right_angle_at_C(L, C)
    vertex_labels(L, A, B, C)
    side_labels(L, A, B, C)
    panel(L, [
        ("R = c / 2", 30, GOLD, "700"),
        ("c = 10 cm", 20, GREY, "400"),
        ("R = 5 cm", 26, WHITE, "700"),
        ("through all 3 vertices", 19, GREY, "400"),
    ])
    L.append(footer())
    write("radius-circumcircle.svg", "".join(L))

    # 3. Vs: S=42, C=(400,480); O=(568,354) R=210, I=(484,396) r=84
    A, B, C, I, O, r_px, R_px = frame(400, 480, 42)
    L = [header("Inradius vs Circumradius: 6-8-10 Triangle")]
    tri(L, A, B, C)
    circumcircle(L, O, R_px)
    incircle(L, I, r_px, show_radius_to_hyp=False)
    L.append(f'  <text x="{(I[0]+O[0])/2:.0f}" y="{I[1]+44:.0f}" font-size="24" font-weight="700" fill="{GREEN}" text-anchor="middle">r = 2</text>')
    right_angle_at_C(L, C)
    vertex_labels(L, A, B, C)
    side_labels(L, A, B, C)
    panel(L, [
        ("r = 2 cm", 28, GREEN, "700"),
        ("R = 5 cm", 28, BLUE, "700"),
        ("incircle inside", 19, GREY, "400"),
        ("circumcircle outside", 19, GREY, "400"),
    ])
    L.append(footer())
    write("radius-vs.svg", "".join(L))

    # 4. Inradius formula: same geometry as Diagram 1
    A, B, C, I, O, r_px, R_px = frame(320, 500, 55)
    L = [header("Inradius Formula: r = (a + b - c) / 2")]
    tri(L, A, B, C)
    incircle(L, I, r_px, A=A, B=B)
    right_angle_at_C(L, C)
    vertex_labels(L, A, B, C)
    side_labels(L, A, B, C)
    panel(L, [
        ("r = (a + b - c) / 2", 26, GOLD, "700"),
        ("a = 6, b = 8, c = 10", 20, GREY, "400"),
        ("r = (6 + 8 - 10) / 2", 22, WHITE, "700"),
        ("r = 2 cm", 24, WHITE, "700"),
    ])
    L.append(footer())
    write("radius-inradius-formula.svg", "".join(L))

    # 5. Circumradius formula: same geometry as Diagram 2
    A, B, C, I, O, r_px, R_px = frame(380, 470, 45)
    L = [header("Circumradius Formula: R = c / 2")]
    tri(L, A, B, C)
    circumcircle(L, O, R_px, C=C)
    right_angle_at_C(L, C)
    vertex_labels(L, A, B, C)
    side_labels(L, A, B, C)
    panel(L, [
        ("R = c / 2", 30, GOLD, "700"),
        ("c = 10 cm", 20, GREY, "400"),
        ("R = 10 / 2 = 5 cm", 24, WHITE, "700"),
        ("hypotenuse is diameter", 19, GREY, "400"),
    ])
    L.append(f'  <text x="600" y="596" font-size="20" font-weight="400" fill="{GREY}" text-anchor="middle">AB is the diameter of the circumcircle</text>')
    L.append(footer())
    write("radius-circumradius-formula.svg", "".join(L))

    # 6. Centers: S=50, C=(350,490); O=(550,340) R=250, I=(450,390) r=100
    A, B, C, I, O, r_px, R_px = frame(350, 490, 50)
    L = [header("Incenter I vs Circumcenter O")]
    tri(L, A, B, C)
    circumcircle(L, O, R_px)
    incircle(L, I, r_px, show_radius_to_hyp=False)
    # angle bisector of C through I, extended to the hypotenuse
    L.append(f'  <line x1="{C[0]}" y1="{C[1]}" x2="521" y2="319" stroke="{GREEN}" stroke-width="4" stroke-dasharray="8 6" stroke-linecap="round"/>')
    # perpendicular bisector of AB through O (direction (-0.6, 0.8))
    L.append(f'  <line x1="{O[0]-72:.0f}" y1="{O[1]+96:.0f}" x2="{O[0]+72:.0f}" y2="{O[1]-96:.0f}" stroke="{BLUE}" stroke-width="4" stroke-dasharray="8 6" stroke-linecap="round"/>')
    right_angle_at_C(L, C)
    vertex_labels(L, A, B, C)
    side_labels(L, A, B, C)
    panel(L, [
        ("I: angle bisectors", 24, GREEN, "700"),
        ("inside the triangle", 19, GREY, "400"),
        ("O: perp. bisectors", 24, BLUE, "700"),
        ("midpoint of hypotenuse", 19, GREY, "400"),
    ])
    L.append(footer())
    write("radius-centers.svg", "".join(L))

    # 7. Complete example: S=45 geometry as Diagram 2, both circles + values strip
    A, B, C, I, O, r_px, R_px = frame(380, 470, 45)
    L = [header("Complete Example: 6-8-10 Triangle")]
    tri(L, A, B, C)
    circumcircle(L, O, R_px)
    incircle(L, I, r_px, show_radius_to_hyp=False)
    right_angle_at_C(L, C)
    vertex_labels(L, A, B, C)
    side_labels(L, A, B, C)
    L.append(f'  <text x="600" y="596" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">a = 6, b = 8, c = 10, r = 2, R = 5, Area = 24, s = 12</text>')
    L.append(footer())
    write("radius-complete-example.svg", "".join(L))


if __name__ == "__main__":
    main()
