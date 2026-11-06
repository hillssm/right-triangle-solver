#!/usr/bin/env python3
"""gen_page36_diagrams.py — 6 SVG diagrams for Page 36 (Right Triangle Projection Q Calculator, q = b^2/c).

Style matches Page 33 (projection): 1200x630, dark #131313 bg,
gold #f1c97d strokes, green #4ade80 altitude, blue #7dd3fc, white labels.
Geometry: true 3-4-5 based triangle (a=6, b=8, c=10; h=4.8, p=3.6, q=6.4).
Right angle at C enforced by h = sqrt(p_px * q_px); right-angle markers
at C and at D (altitude foot). No SVG arc (A) commands anywhere;
only polygon/polyline/line/circle/rect/text. No captions inside the SVGs:
captions live in the guide JSON. Outputs: public/images/projection-q/*.svg
"""
import math
import os

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "images", "projection-q")
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


def frame(Ax, Bx, base_y, p, q):
    """A,B on baseline; D placed by p:q ratio; C above D with
    h = sqrt(p_px * q_px) so angle C is a true right angle."""
    total = Bx - Ax
    p_px = total * p / (p + q)
    q_px = total - p_px
    Dx = Ax + p_px
    h_px = math.sqrt(p_px * q_px)
    return (Ax, base_y), (Bx, base_y), (round(Dx), base_y - round(h_px)), (round(Dx), base_y)


def right_angle_at_C(L, A, B, C):
    ux, uy = (A[0] - C[0]), (A[1] - C[1])
    vx, vy = (B[0] - C[0]), (B[1] - C[1])
    ul = math.hypot(ux, uy)
    vl = math.hypot(vx, vy)
    ux, uy = ux / ul * 22, uy / ul * 22
    vx, vy = vx / vl * 22, vy / vl * 22
    mx, my = C[0] + ux + vx, C[1] + uy + vy
    L.append(f'  <polyline points="{C[0]+ux:.1f},{C[1]+uy:.1f} {mx:.1f},{my:.1f} {C[0]+vx:.1f},{C[1]+vy:.1f}" fill="none" stroke="{WHITE}" stroke-width="3"/>')


def right_angle_at_D(L, D, side=-1):
    """Right-angle marker at the altitude foot. side=-1 draws it toward A
    (left), side=+1 toward B (right); it must sit inside the triangle."""
    x = D[0] + side * 22
    L.append(f'  <polyline points="{x},{D[1]} {x},{D[1]-22} {D[0]},{D[1]-22}" fill="none" stroke="{WHITE}" stroke-width="3"/>')


def tri(A, B, C, D, hl_legs=(), hl_proj=(), formula=None, formula_sub=None,
        values=None, title=""):
    """Draw triangle ABC with altitude CD. A,B on baseline; C=(Dx, Cy)."""
    L = [header(title)]
    pts = f"{A[0]},{A[1]} {B[0]},{B[1]} {C[0]},{C[1]}"
    L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
    L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="8" stroke-linejoin="round"/>')

    def side(P, Q, thick):
        w = 13 if thick else 8
        return (f'  <line x1="{P[0]}" y1="{P[1]}" x2="{Q[0]}" y2="{Q[1]}" '
                f'stroke="{GOLD}" stroke-width="{w}" stroke-linecap="round"/>\n')

    L.append(side(A, C, "a" in hl_legs))
    L.append(side(B, C, "b" in hl_legs))
    L.append(side(A, D, "p" in hl_proj))
    L.append(side(D, B, "q" in hl_proj))
    # altitude (dashed green)
    L.append(f'  <line x1="{C[0]}" y1="{C[1]}" x2="{D[0]}" y2="{D[1]}" stroke="{GREEN}" stroke-width="6" stroke-dasharray="10 8" stroke-linecap="round"/>')
    right_angle_at_C(L, A, B, C)
    right_angle_at_D(L, D)
    # vertex dots
    for P in (A, B, C):
        L.append(f'  <circle cx="{P[0]}" cy="{P[1]}" r="9" fill="{GOLD}"/>')
    L.append(f'  <circle cx="{D[0]}" cy="{D[1]}" r="7" fill="{GREEN}"/>')
    # vertex labels
    L.append(f'  <text x="{A[0]-28}" y="{A[1]+48}" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">A</text>')
    L.append(f'  <text x="{B[0]+28}" y="{A[1]+48}" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">B</text>')
    L.append(f'  <text x="{C[0]}" y="{C[1]-32}" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
    L.append(f'  <text x="{D[0]+28}" y="{A[1]+48}" font-size="20" font-weight="700" fill="{GREEN}" text-anchor="middle">D</text>')
    # segment + side labels
    mid_p = ((A[0] + D[0]) / 2, A[1] + 48)
    mid_q = ((D[0] + B[0]) / 2, A[1] + 48)
    mid_a = ((A[0] + C[0]) / 2 - 28, (A[1] + C[1]) / 2)
    mid_b = ((B[0] + C[0]) / 2 + 28, (B[1] + C[1]) / 2)
    mid_h = (C[0] - 36, (C[1] + D[1]) / 2)
    mid_c = ((D[0] + B[0]) / 2, A[1] - 22)
    L.append(f'  <text x="{mid_p[0]:.0f}" y="{mid_p[1]:.0f}" font-size="28" font-weight="700" fill="{GOLD}" text-anchor="middle">p</text>')
    L.append(f'  <text x="{mid_q[0]:.0f}" y="{mid_q[1]:.0f}" font-size="28" font-weight="700" fill="{GREEN}" text-anchor="middle">q</text>')
    L.append(f'  <text x="{mid_a[0]:.0f}" y="{mid_a[1]:.0f}" font-size="28" font-weight="700" fill="{BLUE}" text-anchor="middle">a</text>')
    L.append(f'  <text x="{mid_b[0]:.0f}" y="{mid_b[1]:.0f}" font-size="28" font-weight="700" fill="{GOLD}" text-anchor="middle">b</text>')
    L.append(f'  <text x="{mid_h[0]:.0f}" y="{mid_h[1]:.0f}" font-size="30" font-weight="700" fill="{GREEN}" text-anchor="middle">h</text>')
    L.append(f'  <text x="{mid_c[0]:.0f}" y="{mid_c[1]:.0f}" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">c</text>')
    # formula panel top-right (clear of the triangle: BC reaches x=830 only below y=300)
    if formula:
        L.append(f'  <rect x="830" y="96" width="336" height="204" rx="12" fill="{PANEL}" stroke="{PANEL_EDGE}"/>')
        L.append(f'  <text x="998" y="150" font-size="30" font-weight="700" fill="{GOLD}" text-anchor="middle">{formula}</text>')
        if formula_sub:
            L.append(f'  <text x="998" y="192" font-size="19" font-weight="400" fill="{GREY}" text-anchor="middle">{formula_sub}</text>')
        if values:
            L.append(f'  <text x="998" y="236" font-size="21" font-weight="700" fill="{WHITE}" text-anchor="middle">{values[0]}</text>')
            L.append(f'  <text x="998" y="268" font-size="18" font-weight="400" fill="{GREY}" text-anchor="middle">{values[1]}</text>')
    L.append(footer())
    return "".join(L)


def small_tri(L, A, B, C, D, label, formula, numeric=None):
    """One triangle with altitude CD, vertex/segment labels, and a caption
    block underneath (label, formula, optional numeric check)."""
    pts = f"{A[0]},{A[1]} {B[0]},{B[1]} {C[0]},{C[1]}"
    L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
    L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>')
    L.append(f'  <line x1="{C[0]}" y1="{C[1]}" x2="{D[0]}" y2="{D[1]}" stroke="{GREEN}" stroke-width="5" stroke-dasharray="10 8" stroke-linecap="round"/>')
    right_angle_at_C(L, A, B, C)
    right_angle_at_D(L, D)
    for P in (A, B, C):
        L.append(f'  <circle cx="{P[0]}" cy="{P[1]}" r="8" fill="{GOLD}"/>')
    L.append(f'  <circle cx="{D[0]}" cy="{D[1]}" r="6" fill="{GREEN}"/>')
    L.append(f'  <text x="{A[0]-24}" y="{A[1]+48}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">A</text>')
    L.append(f'  <text x="{B[0]+16}" y="{B[1]+48}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">B</text>')
    L.append(f'  <text x="{C[0]}" y="{C[1]-28}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
    L.append(f'  <text x="{D[0]+26}" y="{D[1]+48}" font-size="20" font-weight="700" fill="{GREEN}" text-anchor="middle">D</text>')
    L.append(f'  <text x="{(A[0]+D[0])/2:.0f}" y="{A[1]+48}" font-size="26" font-weight="700" fill="{GOLD}" text-anchor="middle">p</text>')
    L.append(f'  <text x="{(D[0]+B[0])/2:.0f}" y="{B[1]+48}" font-size="26" font-weight="700" fill="{GREEN}" text-anchor="middle">q</text>')
    cx = (A[0] + B[0]) / 2
    L.append(f'  <text x="{cx:.0f}" y="{A[1]+86}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">{label}</text>')
    L.append(f'  <text x="{cx:.0f}" y="{A[1]+120}" font-size="24" font-weight="700" fill="{GOLD}" text-anchor="middle">{formula}</text>')
    if numeric:
        L.append(f'  <text x="{cx:.0f}" y="{A[1]+152}" font-size="20" font-weight="400" fill="{GREY}" text-anchor="middle">{numeric}</text>')


def right_tri(L, A, D, C, leg_label, leg_color, hyp_label, hyp_color,
              label, formula, numeric=None, far_label="A", foot_label="D",
              marker_side=-1):
    """One altitude-split right triangle: A-D horizontal leg, D-C vertical
    leg, A-C hypotenuse. Right angle at D only (no altitude inside).
    Caption block underneath: label, formula, optional numeric check.
    far_label names the far baseline vertex (A for ACD, B for CBD)."""
    pts = f"{A[0]},{A[1]} {D[0]},{D[1]} {C[0]},{C[1]}"
    L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
    L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>')
    right_angle_at_D(L, D, side=marker_side)
    for P in (A, D, C):
        L.append(f'  <circle cx="{P[0]}" cy="{P[1]}" r="8" fill="{GOLD}"/>')
    L.append(f'  <text x="{A[0]-24}" y="{A[1]+48}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">{far_label}</text>')
    L.append(f'  <text x="{D[0]+26}" y="{D[1]+48}" font-size="20" font-weight="700" fill="{GREEN}" text-anchor="middle">{foot_label}</text>')
    L.append(f'  <text x="{C[0]}" y="{C[1]-28}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
    L.append(f'  <text x="{(A[0]+D[0])/2:.0f}" y="{A[1]+48}" font-size="26" font-weight="700" fill="{leg_color}" text-anchor="middle">{leg_label}</text>')
    L.append(f'  <text x="{D[0]-34}" y="{(C[1]+D[1])/2:.0f}" font-size="26" font-weight="700" fill="{GREEN}" text-anchor="middle">h</text>')
    L.append(f'  <text x="{(A[0]+C[0])/2-30:.0f}" y="{(A[1]+C[1])/2:.0f}" font-size="26" font-weight="700" fill="{hyp_color}" text-anchor="middle">{hyp_label}</text>')
    cx = (A[0] + D[0]) / 2
    L.append(f'  <text x="{cx:.0f}" y="{A[1]+86}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">{label}</text>')
    L.append(f'  <text x="{cx:.0f}" y="{A[1]+120}" font-size="24" font-weight="700" fill="{GOLD}" text-anchor="middle">{formula}</text>')
    if numeric:
        L.append(f'  <text x="{cx:.0f}" y="{A[1]+152}" font-size="20" font-weight="400" fill="{GREY}" text-anchor="middle">{numeric}</text>')


def write(name, svg):
    path = os.path.join(OUT, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    print("wrote", path)


def main():
    # 3-4-5 frame: a=6, b=8, c=10, p=3.6, q=6.4, h=4.8
    A, B, C, D = frame(220, 980, 510, 3.6, 6.4)

    # 1. Complete triangle: leg b and projection q highlighted in gold (thick)
    write("projection-q-main-triangle.svg", tri(
        A, B, C, D, hl_legs=("b",), hl_proj=("q",),
        title="Complete Triangle: Projection q of Leg b"))

    # 2. Formula illustration: q = b squared over c
    write("projection-q-formula.svg", tri(
        A, B, C, D, hl_legs=("b",), hl_proj=("q",),
        formula="q = b\u00b2 / c", formula_sub="leg b = 8, hypotenuse c = 10",
        values=["q = 64 / 10 = 6.4", "b\u00b2 = 64, c = 10"],
        title="Formula: q = b Squared Over c"))

    # 3. Worked example: b=8, c=10, q=6.4, a=6, p=3.6, h=4.8
    write("projection-q-example-b8-c10.svg", tri(
        A, B, C, D, hl_legs=("b",), hl_proj=("q",),
        formula="q = 6.4", formula_sub="b = 8, c = 10",
        values=["a = 6, p = 3.6, h = 4.8", "6\u00b2 + 8\u00b2 = 10\u00b2"],
        title="Worked Example: b = 8, c = 10"))

    # 4. q paired with leg b vs p paired with leg a (two triangles side by side)
    L = [header("q Pairs with Leg b, p Pairs with Leg a")]
    A1, B1, C1, D1 = frame(64, 564, 480, 3.6, 6.4)
    A2, B2, C2, D2 = frame(640, 1140, 480, 3.6, 6.4)
    for (Av, Bv, Cv, Dv, formula, numeric, hl_leg, hl_pr) in (
        (A1, B1, C1, D1, "q = b\u00b2 / c", "b = 8 gives q = 6.4", "b", "q"),
        (A2, B2, C2, D2, "p = a\u00b2 / c", "a = 6 gives p = 3.6", "a", "p"),
    ):
        pts = f"{Av[0]},{Av[1]} {Bv[0]},{Bv[1]} {Cv[0]},{Cv[1]}"
        L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
        L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>')

        def side(P, Q, thick):
            w = 13 if thick else 7
            return (f'  <line x1="{P[0]}" y1="{P[1]}" x2="{Q[0]}" y2="{Q[1]}" '
                    f'stroke="{GOLD}" stroke-width="{w}" stroke-linecap="round"/>\n')

        L.append(side(Av, Cv, hl_leg == "a"))
        L.append(side(Bv, Cv, hl_leg == "b"))
        L.append(side(Av, Dv, hl_pr == "p"))
        L.append(side(Dv, Bv, hl_pr == "q"))
        L.append(f'  <line x1="{Cv[0]}" y1="{Cv[1]}" x2="{Dv[0]}" y2="{Dv[1]}" stroke="{GREEN}" stroke-width="5" stroke-dasharray="10 8" stroke-linecap="round"/>')
        right_angle_at_C(L, Av, Bv, Cv)
        right_angle_at_D(L, Dv)
        for P in (Av, Bv, Cv):
            L.append(f'  <circle cx="{P[0]}" cy="{P[1]}" r="8" fill="{GOLD}"/>')
        L.append(f'  <circle cx="{Dv[0]}" cy="{Dv[1]}" r="6" fill="{GREEN}"/>')
        L.append(f'  <text x="{Av[0]-24}" y="{Av[1]+48}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">A</text>')
        L.append(f'  <text x="{Bv[0]+16}" y="{Bv[1]+48}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">B</text>')
        L.append(f'  <text x="{Cv[0]}" y="{Cv[1]-28}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
        L.append(f'  <text x="{Dv[0]+26}" y="{Dv[1]+48}" font-size="20" font-weight="700" fill="{GREEN}" text-anchor="middle">D</text>')
        L.append(f'  <text x="{(Av[0]+Dv[0])/2:.0f}" y="{Av[1]+48}" font-size="26" font-weight="700" fill="{GOLD}" text-anchor="middle">p</text>')
        L.append(f'  <text x="{(Dv[0]+Bv[0])/2:.0f}" y="{Bv[1]+48}" font-size="26" font-weight="700" fill="{GREEN}" text-anchor="middle">q</text>')
        cx = (Av[0] + Bv[0]) / 2
        L.append(f'  <text x="{cx:.0f}" y="{Av[1]+86}" font-size="26" font-weight="700" fill="{GOLD}" text-anchor="middle">{formula}</text>')
        L.append(f'  <text x="{cx:.0f}" y="{Av[1]+120}" font-size="22" font-weight="400" fill="{GREY}" text-anchor="middle">{numeric}</text>')
    L.append(footer())
    write("projection-q-vs-p.svg", "".join(L))

    # 5. Similar-triangles proof: original plus the two smaller altitude triangles
    # CBD (q / b = b / c) is the key one for q; ACD (p / a = a / c) kept as is.
    L = [header("Similar Triangles Prove q = b Squared Over c")]
    Ab, Bb, Cb, Db = frame(90, 560, 440, 3.6, 6.4)
    small_tri(L, Ab, Bb, Cb, Db, "Triangle ABC", "q = b\u00b2 / c",
              numeric="a = 6, b = 8, c = 10")
    # small triangle ACD: legs p=3.6 and h=4.8 in 3:4 ratio (135 x 180 px)
    right_tri(L, (640, 440), (775, 440), (775, 260), "p", GOLD, "a", BLUE,
              "Triangle ACD", "p / a = a / c", numeric="3.6/6 = 6/10 = 0.6")
    # small triangle CBD: legs q=6.4 and h=4.8 in 4:3 ratio (240 x 180 px)
    right_tri(L, (1100, 440), (860, 440), (860, 260), "q", GREEN, "b", GOLD,
              "Triangle CBD", "q / b = b / c", numeric="6.4/8 = 8/10 = 0.8",
              far_label="B", marker_side=+1)
    L.append(footer())
    write("projection-q-similar-triangles.svg", "".join(L))

    # 6. Equal vs unequal projections, hypotenuse 10 in both
    L = [header("Equal vs Unequal Projections, Hypotenuse 10")]
    small_tri(L, *frame(80, 580, 470, 5, 5),
              "p = 5, q = 5", "a = b = 7.07, h = 5")
    small_tri(L, *frame(640, 1140, 470, 3.6, 6.4),
              "p = 3.6, q = 6.4", "a = 6, b = 8, h = 4.8")
    L.append(footer())
    write("projection-q-equal-vs-unequal.svg", "".join(L))


if __name__ == "__main__":
    main()
