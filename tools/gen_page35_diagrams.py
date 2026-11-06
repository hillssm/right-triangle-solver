#!/usr/bin/env python3
"""gen_page35_diagrams.py — 6 SVG diagrams for Page 35 (Right Triangle Circumradius Calculator, R = c/2).

Style matches Page 34: 1200x630, dark #131313 bg, gold #f1c97d strokes,
green #4ade80, blue #7dd3fc, white labels.
Geometry: true 6-8-10 triangle (a=6, b=8, c=10). AB is the diameter of the
circumcircle: A=(350,340), B=(850,340), O=(600,340), R=250 px, C=(530,100).
Check: AC = sqrt(180^2+240^2) = 300 px = 6 units; BC = sqrt(320^2+240^2) =
400 px = 8 units; angle at C is a right angle (Thales). No SVG arc (A)
commands anywhere; only polygon/polyline/line/circle/rect/text. Circle
approximations use <circle> elements (not arc paths). No captions inside
the SVGs: captions live in the guide JSON. Outputs: public/images/circumradius/*.svg
"""
import math
import os

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "images", "circumradius")
os.makedirs(OUT, exist_ok=True)

GOLD = "#f1c97d"
GREEN = "#4ade80"
BLUE = "#7dd3fc"
WHITE = "#ffffff"
GREY = "#a3a3a3"
PANEL = "#1c1b1b"
PANEL_EDGE = "#2e2c2c"

# 6-8-10 geometry, 50 px per unit. R = 5 units = 250 px.
A = (350, 340)
B = (850, 340)
O = (600, 340)
C = (530, 100)
R = 250


def header(title):
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" '
        'font-family="Manrope, Inter, system-ui, sans-serif">\n'
        '  <rect x="0" y="0" width="1200" height="630" fill="#131313"/>\n'
        f'  <text x="600" y="48" font-size="28" font-weight="700" fill="#ffffff" text-anchor="middle">{title}</text>\n'
    )


def footer():
    return "</svg>\n"


def right_angle_at_C(L, A_, B_, C_):
    ux, uy = (A_[0] - C_[0]), (A_[1] - C_[1])
    vx, vy = (B_[0] - C_[0]), (B_[1] - C_[1])
    ul = math.hypot(ux, uy)
    vl = math.hypot(vx, vy)
    ux, uy = ux / ul * 22, uy / ul * 22
    vx, vy = vx / vl * 22, vy / vl * 22
    mx, my = C_[0] + ux + vx, C_[1] + uy + vy
    L.append(f'  <polyline points="{C_[0]+ux:.1f},{C_[1]+uy:.1f} {mx:.1f},{my:.1f} {C_[0]+vx:.1f},{C_[1]+vy:.1f}" fill="none" stroke="{WHITE}" stroke-width="3"/>')


def circumcircle(L, cx, cy, r, color=GOLD, width=4):
    L.append(f'  <circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{color}" stroke-width="{width}"/>')
    L.append(f'  <circle cx="{cx}" cy="{cy}" r="9" fill="{color}"/>')


def triangle(L, A_, B_, C_, fill_opacity="0.04", width=7):
    pts = f"{A_[0]},{A_[1]} {B_[0]},{B_[1]} {C_[0]},{C_[1]}"
    L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="{fill_opacity}" stroke="none"/>')
    L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="{width}" stroke-linejoin="round"/>')


def vertex_dots(L, pts, r=9):
    for P in pts:
        L.append(f'  <circle cx="{P[0]}" cy="{P[1]}" r="{r}" fill="{GOLD}"/>')


def radius_line(L, P, Q, color=BLUE, width=5, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    L.append(f'  <line x1="{P[0]}" y1="{P[1]}" x2="{Q[0]}" y2="{Q[1]}" stroke="{color}" stroke-width="{width}" stroke-linecap="round"{d}/>')


def panel(L, x, y, w, h, lines):
    """Info panel: lines = [(text, size, weight, color, dy_offset)] with y as first baseline."""
    L.append(f'  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{PANEL}" stroke="{PANEL_EDGE}"/>')
    cy = y
    for (text, size, weight, color, gap) in lines:
        cy += gap
        L.append(f'  <text x="{x + w // 2}" y="{cy}" font-size="{size}" font-weight="{weight}" fill="{color}" text-anchor="middle">{text}</text>')


def vertex_labels(L):
    L.append(f'  <text x="{A[0]-30}" y="{A[1]+52}" font-size="26" font-weight="700" fill="{WHITE}" text-anchor="middle">A</text>')
    L.append(f'  <text x="{B[0]+30}" y="{B[1]+52}" font-size="26" font-weight="700" fill="{WHITE}" text-anchor="middle">B</text>')
    L.append(f'  <text x="{C[0]+44}" y="{C[1]+8}" font-size="26" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
    L.append(f'  <text x="{O[0]}" y="{O[1]+52}" font-size="26" font-weight="700" fill="{BLUE}" text-anchor="middle">O</text>')


def side_labels(L):
    # a (AC) left of the slanted side, b (BC) right, c (AB) below baseline center
    L.append(f'  <text x="400" y="200" font-size="28" font-weight="700" fill="{BLUE}" text-anchor="middle">a = 6</text>')
    L.append(f'  <text x="742" y="200" font-size="28" font-weight="700" fill="{GOLD}" text-anchor="middle">b = 8</text>')
    L.append(f'  <text x="600" y="392" font-size="28" font-weight="700" fill="{WHITE}" text-anchor="middle">c = 10</text>')


def write(name, svg):
    path = os.path.join(OUT, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    print("wrote", path)


def base(with_radii=True):
    L = [header("Complete Triangle Inside Its Circumcircle")]
    circumcircle(L, O[0], O[1], R)
    triangle(L, A, B, C)
    if with_radii:
        radius_line(L, O, A)
        radius_line(L, O, B)
        radius_line(L, O, C, color=GREEN)
    right_angle_at_C(L, A, B, C)
    vertex_dots(L, (A, B, C))
    vertex_labels(L)
    side_labels(L)
    return L


def main():
    # 1. Complete circumcircle: triangle ABC, center O, OA = OB = OC = R
    L = base()
    L.append(f'  <text x="470" y="300" font-size="24" font-weight="700" fill="{BLUE}" text-anchor="middle">R</text>')
    L.append(f'  <text x="742" y="300" font-size="24" font-weight="700" fill="{BLUE}" text-anchor="middle">R</text>')
    L.append(f'  <text x="588" y="216" font-size="24" font-weight="700" fill="{GREEN}" text-anchor="middle">R</text>')
    panel(L, 884, 110, 282, 190, [
        ("AO = BO = CO = R", 26, 700, GOLD, 52),
        ("R = c / 2", 26, 700, WHITE, 48),
        ("R = 10 / 2 = 5", 22, 400, GREY, 44),
    ])
    L.append(footer())
    write("circumradius-main-circumcircle.svg", "".join(L))

    # 2. Hypotenuse as diameter: AB thick, AO and OB marked as radii
    L = [header("Hypotenuse AB Is the Diameter of the Circumcircle")]
    circumcircle(L, O[0], O[1], R)
    triangle(L, A, B, C)
    L.append(f'  <line x1="{A[0]}" y1="{A[1]}" x2="{B[0]}" y2="{B[1]}" stroke="{GOLD}" stroke-width="13" stroke-linecap="round"/>')
    radius_line(L, O, A, color=BLUE, width=6)
    radius_line(L, O, B, color=BLUE, width=6)
    right_angle_at_C(L, A, B, C)
    vertex_dots(L, (A, B, C))
    vertex_labels(L)
    L.append(f'  <text x="470" y="308" font-size="26" font-weight="700" fill="{BLUE}" text-anchor="middle">AO = R</text>')
    L.append(f'  <text x="730" y="308" font-size="26" font-weight="700" fill="{BLUE}" text-anchor="middle">OB = R</text>')
    L.append(f'  <text x="600" y="392" font-size="28" font-weight="700" fill="{WHITE}" text-anchor="middle">AB = c = 2R</text>')
    panel(L, 884, 110, 282, 190, [
        ("c = 2R", 28, 700, GOLD, 54),
        ("R = c / 2", 28, 700, WHITE, 50),
        ("diameter = hypotenuse", 20, 400, GREY, 44),
    ])
    L.append(footer())
    write("circumradius-hypotenuse-diameter.svg", "".join(L))

    # 3. Worked example c = 10 cm, R = 5 cm
    L = [header("Worked Example: c = 10 cm, R = 5 cm")]
    circumcircle(L, O[0], O[1], R)
    triangle(L, A, B, C)
    radius_line(L, O, A)
    radius_line(L, O, B)
    radius_line(L, O, C, color=GREEN)
    right_angle_at_C(L, A, B, C)
    vertex_dots(L, (A, B, C))
    vertex_labels(L)
    L.append(f'  <text x="600" y="392" font-size="28" font-weight="700" fill="{WHITE}" text-anchor="middle">c = 10 cm</text>')
    L.append(f'  <text x="470" y="300" font-size="26" font-weight="700" fill="{BLUE}" text-anchor="middle">R = 5 cm</text>')
    panel(L, 884, 110, 282, 216, [
        ("R = c / 2", 28, 700, GOLD, 54),
        ("R = 10 / 2", 26, 700, WHITE, 48),
        ("R = 5 cm", 28, 700, WHITE, 50),
        ("check: 2 x 5 = 10", 20, 400, GREY, 42),
    ])
    L.append(footer())
    write("circumradius-example-c10.svg", "".join(L))

    # 4. Circumcenter: midpoint of hypotenuse, perpendicular bisector, equal radii
    L = [header("Circumcenter O: Midpoint of the Hypotenuse")]
    circumcircle(L, O[0], O[1], R)
    triangle(L, A, B, C)
    # perpendicular bisector of AB (vertical dashed line through O)
    L.append(f'  <line x1="600" y1="96" x2="600" y2="584" stroke="{GREEN}" stroke-width="4" stroke-dasharray="12 9" stroke-linecap="round"/>')
    radius_line(L, O, A, color=BLUE)
    radius_line(L, O, B, color=BLUE)
    radius_line(L, O, C, color=GREEN)
    right_angle_at_C(L, A, B, C)
    vertex_dots(L, (A, B, C))
    vertex_labels(L)
    L.append(f'  <text x="470" y="300" font-size="24" font-weight="700" fill="{BLUE}" text-anchor="middle">OA = R</text>')
    L.append(f'  <text x="742" y="300" font-size="24" font-weight="700" fill="{BLUE}" text-anchor="middle">OB = R</text>')
    L.append(f'  <text x="588" y="216" font-size="24" font-weight="700" fill="{GREEN}" text-anchor="middle">OC = R</text>')
    L.append(f'  <text x="628" y="130" font-size="22" font-weight="700" fill="{GREEN}" text-anchor="start">perpendicular bisector</text>')
    panel(L, 884, 420, 282, 130, [
        ("O is the midpoint of AB", 22, 700, GOLD, 48),
        ("OA = OB = OC", 22, 400, GREY, 40),
    ])
    L.append(footer())
    write("circumradius-circumcenter.svg", "".join(L))

    # 5. Circumcircle vs incircle, 6-8-10 triangle, two panels
    L = [header("Circumcircle vs Incircle: the 6-8-10 Triangle")]
    # Left panel: circumcircle, R = 130 px (26 px/unit)
    O1 = (300, 330)
    A1 = (170, 330)
    B1 = (430, 330)
    C1 = (264, 205)
    circumcircle(L, O1[0], O1[1], 130, width=4)
    triangle(L, A1, B1, C1, width=6)
    radius_line(L, O1, A1, width=4)
    radius_line(L, O1, C1, color=GREEN, width=4)
    right_angle_at_C(L, A1, B1, C1)
    vertex_dots(L, (A1, B1, C1), r=8)
    L.append(f'  <text x="146" y="382" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">A</text>')
    L.append(f'  <text x="454" y="382" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">B</text>')
    L.append(f'  <text x="300" y="382" font-size="22" font-weight="700" fill="{BLUE}" text-anchor="middle">O</text>')
    L.append(f'  <text x="228" y="198" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
    L.append(f'  <text x="300" y="520" font-size="26" font-weight="700" fill="{GOLD}" text-anchor="middle">Circumcircle: R = 5</text>')
    L.append(f'  <text x="300" y="556" font-size="20" font-weight="400" fill="{GREY}" text-anchor="middle">circle through the vertices</text>')
    # Right panel: incircle. Right angle at C2=(700,430); A2 above, B2 right.
    # scale 26 px/unit: legs 6 -> 156, 8 -> 208; inradius r = 2 -> 52 px.
    C2 = (700, 430)
    A2 = (700, 274)
    B2 = (908, 430)
    I2 = (752, 378)
    triangle(L, A2, B2, C2, width=6)
    L.append(f'  <circle cx="{I2[0]}" cy="{I2[1]}" r="52" fill="none" stroke="{GREEN}" stroke-width="4"/>')
    L.append(f'  <circle cx="{I2[0]}" cy="{I2[1]}" r="8" fill="{GREEN}"/>')
    radius_line(L, I2, (752, 430), color=GREEN, width=4)
    # right-angle marker at C2
    L.append(f'  <polyline points="722,430 722,408 700,408" fill="none" stroke="{WHITE}" stroke-width="3"/>')
    vertex_dots(L, (A2, B2, C2), r=8)
    L.append(f'  <text x="676" y="268" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">A</text>')
    L.append(f'  <text x="932" y="436" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">B</text>')
    L.append(f'  <text x="676" y="436" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
    L.append(f'  <text x="782" y="372" font-size="22" font-weight="700" fill="{GREEN}" text-anchor="middle">I</text>')
    L.append(f'  <text x="800" y="428" font-size="22" font-weight="700" fill="{GREEN}" text-anchor="middle">r = 2</text>')
    L.append(f'  <text x="804" y="520" font-size="26" font-weight="700" fill="{GREEN}" text-anchor="middle">Incircle: r = 2</text>')
    L.append(f'  <text x="804" y="556" font-size="20" font-weight="400" fill="{GREY}" text-anchor="middle">circle touching the sides</text>')
    L.append(footer())
    write("circumradius-vs-incircle.svg", "".join(L))

    # 6. Thales' theorem: diameter AB, C on the circle, angle C = 90°rees
    L = [header("Thales Theorem: Angle in a Semicircle Is 90 Degrees")]
    circumcircle(L, O[0], O[1], R)
    triangle(L, A, B, C)
    radius_line(L, O, C, color=GREEN)
    right_angle_at_C(L, A, B, C)
    vertex_dots(L, (A, B, C))
    vertex_labels(L)
    L.append(f'  <text x="600" y="392" font-size="28" font-weight="700" fill="{WHITE}" text-anchor="middle">AB = diameter = c</text>')
    L.append(f'  <text x="560" y="150" font-size="26" font-weight="700" fill="{GOLD}" text-anchor="middle">angle ACB = 90°</text>')
    panel(L, 884, 110, 282, 190, [
        ("AB is a diameter", 24, 700, GOLD, 52),
        ("C is on the circle", 22, 400, WHITE, 46),
        ("so angle C = 90°", 22, 400, GREY, 44),
    ])
    L.append(footer())
    write("circumradius-thales-theorem.svg", "".join(L))


if __name__ == "__main__":
    main()
