#!/usr/bin/env python3
"""gen_page33_diagrams.py — 7 SVG diagrams for Page 33 (Right Triangle Projection Calculator).

Style matches Page 32 (leg-b-from-projection): 1200x630, dark #131313 bg,
gold #f1c97d strokes, green #4ade80 altitude, blue #7dd3fc, white labels.
Geometry: right triangle with A left, B right on baseline y=470, C above D
(the altitude foot), right angle at C enforced by h = sqrt(p_px * q_px).
No SVG arc (A) commands anywhere; only polygon/polyline/line/circle/rect/text.
Outputs: public/images/projection/*.svg
"""
import math
import os

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public", "images", "projection")
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
        f'  <text x="600" y="52" font-size="28" font-weight="700" fill="#ffffff" text-anchor="middle">{title}</text>\n'
    )


def caption(text):
    return (
        f'  <text x="600" y="600" font-size="22" fill="#a3a3a3" text-anchor="middle">{text}</text>\n'
        "</svg>\n"
    )


def tri(A, B, C, D, hl_legs=(), hl_proj=(), formula=None, formula_sub=None,
        values=None, title="", cap="", label_a=True, label_b=True,
        label_c=True, label_h=True, label_p=True, label_q=True,
        thick_legs=(), thick_proj=()):
    """Draw triangle ABC with altitude CD. A,B on baseline; C=(Dx, Cy)."""
    L = [header(title)]
    pts = f"{A[0]},{A[1]} {B[0]},{B[1]} {C[0]},{C[1]}"
    L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
    L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="8" stroke-linejoin="round"/>')
    # sides: normal width 8, highlighted (thick) width 13
    def side(P, Q, thick):
        w = 13 if thick else 8
        return (f'  <line x1="{P[0]}" y1="{P[1]}" x2="{Q[0]}" y2="{Q[1]}" '
                f'stroke="{GOLD}" stroke-width="{w}" stroke-linecap="round"/>\n')
    L.append(side(A, C, "a" in thick_legs))
    L.append(side(B, C, "b" in thick_legs))
    # hypotenuse split into p and q segments (thick where highlighted)
    def seg(P, Q, thick):
        w = 13 if thick else 8
        return (f'  <line x1="{P[0]}" y1="{P[1]}" x2="{Q[0]}" y2="{Q[1]}" '
                f'stroke="{GOLD}" stroke-width="{w}" stroke-linecap="round"/>\n')
    L.append(seg(A, D, "p" in thick_proj))
    L.append(seg(D, B, "q" in thick_proj))
    # altitude (dashed green)
    L.append(f'  <line x1="{C[0]}" y1="{C[1]}" x2="{D[0]}" y2="{D[1]}" stroke="{GREEN}" stroke-width="6" stroke-dasharray="10 8" stroke-linecap="round"/>')
    # right-angle marker at C: small square corner along CA and CB
    ux, uy = (A[0] - C[0]), (A[1] - C[1])
    vx, vy = (B[0] - C[0]), (B[1] - C[1])
    ul = math.hypot(ux, uy); vl = math.hypot(vx, vy)
    ux, uy = ux / ul * 22, uy / ul * 22
    vx, vy = vx / vl * 22, vy / vl * 22
    mx, my = C[0] + ux + vx, C[1] + uy + vy
    L.append(f'  <polyline points="{C[0]+ux:.1f},{C[1]+uy:.1f} {mx:.1f},{my:.1f} {C[0]+vx:.1f},{C[1]+vy:.1f}" fill="none" stroke="{WHITE}" stroke-width="3"/>')
    # right-angle marker at D
    L.append(f'  <polyline points="{D[0]-22},{D[1]} {D[0]-22},{D[1]-22} {D[0]},{D[1]-22}" fill="none" stroke="{WHITE}" stroke-width="3"/>')
    # vertex dots
    for P in (A, B, C):
        L.append(f'  <circle cx="{P[0]}" cy="{P[1]}" r="9" fill="{GOLD}"/>')
    L.append(f'  <circle cx="{D[0]}" cy="{D[1]}" r="7" fill="{GREEN}"/>')
    # vertex labels
    L.append(f'  <text x="{A[0]-28}" y="{A[1]+48}" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">A</text>')
    L.append(f'  <text x="{B[0]+28}" y="{B[1]+48}" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">B</text>')
    L.append(f'  <text x="{C[0]}" y="{C[1]-32}" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
    L.append(f'  <text x="{D[0]+28}" y="{D[1]+48}" font-size="20" font-weight="700" fill="{GREEN}" text-anchor="middle">D</text>')
    # segment + side labels
    mid_p = ((A[0] + D[0]) / 2, A[1] + 48)
    mid_q = ((D[0] + B[0]) / 2, A[1] + 48)
    mid_a = ((A[0] + C[0]) / 2 - 28, (A[1] + C[1]) / 2)
    mid_b = ((B[0] + C[0]) / 2 + 28, (B[1] + C[1]) / 2)
    mid_h = (C[0] - 36, (C[1] + D[1]) / 2)
    mid_c = ((D[0] + B[0]) / 2, A[1] - 22)
    if label_p:
        L.append(f'  <text x="{mid_p[0]:.0f}" y="{mid_p[1]:.0f}" font-size="28" font-weight="700" fill="{GOLD}" text-anchor="middle">p</text>')
    if label_q:
        L.append(f'  <text x="{mid_q[0]:.0f}" y="{mid_q[1]:.0f}" font-size="28" font-weight="700" fill="{GREEN}" text-anchor="middle">q</text>')
    if label_a:
        L.append(f'  <text x="{mid_a[0]:.0f}" y="{mid_a[1]:.0f}" font-size="28" font-weight="700" fill="{BLUE}" text-anchor="middle">a</text>')
    if label_b:
        L.append(f'  <text x="{mid_b[0]:.0f}" y="{mid_b[1]:.0f}" font-size="28" font-weight="700" fill="{GOLD}" text-anchor="middle">b</text>')
    if label_h:
        L.append(f'  <text x="{mid_h[0]:.0f}" y="{mid_h[1]:.0f}" font-size="30" font-weight="700" fill="{GREEN}" text-anchor="middle">h</text>')
    if label_c:
        L.append(f'  <text x="{mid_c[0]:.0f}" y="{mid_c[1]:.0f}" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">c</text>')
    # formula panel top-right (only when it does not cover the triangle apex)
    if formula:
        L.append(f'  <rect x="836" y="96" width="340" height="204" rx="12" fill="{PANEL}" stroke="{PANEL_EDGE}"/>')
        L.append(f'  <text x="1006" y="150" font-size="30" font-weight="700" fill="{GOLD}" text-anchor="middle">{formula}</text>')
        if formula_sub:
            L.append(f'  <text x="1006" y="192" font-size="19" font-weight="400" fill="{GREY}" text-anchor="middle">{formula_sub}</text>')
        if values:
            L.append(f'  <text x="1006" y="236" font-size="21" font-weight="700" fill="{WHITE}" text-anchor="middle">{values[0]}</text>')
            L.append(f'  <text x="1006" y="268" font-size="18" font-weight="400" fill="{GREY}" text-anchor="middle">{values[1]}</text>')
    L.append(caption(cap))
    return "".join(L)


def frame():
    """Standard 9-16-25 frame: A(220,470) B(980,470) D(494,470) C(494,105)."""
    return (220, 470), (980, 470), (494, 105), (494, 470)


def write(name, svg):
    path = os.path.join(OUT, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    print("wrote", path)


def main():
    A, B, C, D = frame()
    # 1. Complete projection diagram (no formula panel: apex area stays clear)
    write("projection-main-triangle.svg", tri(
        A, B, C, D, title="Complete Right Triangle Projection Diagram",
        cap="Altitude CD splits hypotenuse AB into p and q."))
    # 2. Projection p and leg a
    write("projection-p-leg-a.svg", tri(
        A, B, C, D, thick_legs=("a",), thick_proj=("p",),
        formula="p = a\u00b2 / c", formula_sub="highlighted: leg a and p",
        values=["a = AC, p = AD, c = AB", "a = 9, c = 15, p = 5.4"],
        title="Projection P and Leg A Relationship",
        cap="p = a squared over c: 81 over 15 is 5.4 cm."))
    # 3. Projection q and leg b
    write("projection-q-leg-b.svg", tri(
        A, B, C, D, thick_legs=("b",), thick_proj=("q",),
        formula="q = b\u00b2 / c", formula_sub="highlighted: leg b and q",
        values=["b = BC, q = DB, c = AB", "b = 12, c = 15, q = 9.6"],
        title="Projection Q and Leg B Relationship",
        cap="q = b squared over c: 144 over 15 is 9.6 cm."))
    # 4. Five calculator modes infographic
    rows = [
        ("01", "Hypotenuse Segment p", "Known: leg a, hypotenuse c", "p = a\u00b2 / c  \u2192  p"),
        ("02", "Hypotenuse Segment q", "Known: leg b, hypotenuse c", "q = b\u00b2 / c  \u2192  q"),
        ("03", "Leg a Squared Projection", "Known: hypotenuse c, projection p", "a = \u221a(c \u00d7 p)  \u2192  a"),
        ("04", "Leg b Squared Projection", "Known: hypotenuse c, projection q", "b = \u221a(c \u00d7 q)  \u2192  b"),
        ("05", "Projections Sum to c", "Known: projection p, projection q", "c = p + q  \u2192  c"),
    ]
    L = [header("Five Calculator Modes: Pick Your Known Values")]
    y = 100
    for num, name, known, formula in rows:
        L.append(f'  <rect x="90" y="{y}" width="1020" height="80" rx="12" fill="{PANEL}" stroke="{PANEL_EDGE}"/>')
        L.append(f'  <text x="130" y="{y+50}" font-size="26" font-weight="700" fill="{GOLD}">{num}</text>')
        L.append(f'  <text x="185" y="{y+50}" font-size="25" font-weight="700" fill="{WHITE}">{name}</text>')
        L.append(f'  <text x="600" y="{y+50}" font-size="21" font-weight="400" fill="{GREY}">{known}</text>')
        L.append(f'  <text x="1070" y="{y+50}" font-size="24" font-weight="700" fill="{GREEN}" text-anchor="end">{formula}</text>')
        y += 95
    L.append(caption("Pick the mode that matches your known values."))
    write("projection-five-modes.svg", "".join(L))
    # 5. Similar triangles proof: big triangle left, two small triangles right
    L = [header("Similar Triangles Prove the Projection Theorem")]
    # big triangle, scaled: A(90,430) B(560,430) D(280,430) h=sqrt(190*280)=230.6 -> C(280,199)
    A2, B2, D2, C2 = (90, 430), (560, 430), (280, 430), (280, 199)
    pts = f"{A2[0]},{A2[1]} {B2[0]},{B2[1]} {C2[0]},{C2[1]}"
    L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
    L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>')
    L.append(f'  <line x1="{C2[0]}" y1="{C2[1]}" x2="{D2[0]}" y2="{D2[1]}" stroke="{GREEN}" stroke-width="5" stroke-dasharray="10 8" stroke-linecap="round"/>')
    for P in (A2, B2, C2):
        L.append(f'  <circle cx="{P[0]}" cy="{P[1]}" r="8" fill="{GOLD}"/>')
    L.append(f'  <circle cx="{D2[0]}" cy="{D2[1]}" r="6" fill="{GREEN}"/>')
    L.append(f'  <text x="62" y="478" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">A</text>')
    L.append(f'  <text x="588" y="478" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">B</text>')
    L.append(f'  <text x="280" y="168" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
    L.append(f'  <text x="308" y="478" font-size="20" font-weight="700" fill="{GREEN}" text-anchor="middle">D</text>')
    L.append(f'  <text x="325" y="540" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">Triangle ABC</text>')
    # small triangle ACD: A(650,430) D(830,430) C(830,210), right angle at D
    for (P, Q, R, lab, form) in (
        ((650, 430), (830, 430), (830, 210), "Triangle ACD", "p / a = a / c"),
        ((900, 430), (1110, 430), (900, 210), "Triangle CBD", "q / b = b / c"),
    ):
        pts = f"{P[0]},{P[1]} {Q[0]},{Q[1]} {R[0]},{R[1]}"
        L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
        L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>')
        for V in (P, Q, R):
            L.append(f'  <circle cx="{V[0]}" cy="{V[1]}" r="8" fill="{GOLD}"/>')
        cx = (P[0] + Q[0] + R[0]) / 3
        L.append(f'  <text x="{cx:.0f}" y="478" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">{lab}</text>')
        L.append(f'  <text x="{cx:.0f}" y="540" font-size="24" font-weight="700" fill="{GREEN}" text-anchor="middle">{form}</text>')
    L.append(f'  <text x="740" y="180" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
    L.append(f'  <text x="622" y="478" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">A</text>')
    L.append(f'  <text x="858" y="478" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">D</text>')
    L.append(f'  <text x="900" y="180" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
    L.append(f'  <text x="1138" y="478" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">B</text>')
    L.append(f'  <text x="872" y="478" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">D</text>')
    L.append(caption("Matching sides of similar triangles stay proportional."))
    write("projection-similar-triangles.svg", "".join(L))
    # 6. Complete numerical example: p=9 q=16 c=25 a=15 b=20 h=12
    write("projection-numerical-example.svg", tri(
        A, B, C, D,
        formula="c=25, a=15, b=20", formula_sub="p = 9, q = 16, h = 12",
        values=["a\u00b2 = 225, b\u00b2 = 400", "15\u00b2 + 20\u00b2 = 25\u00b2"],
        title="Complete Numerical Example: p = 9, q = 16",
        cap="p = 9, q = 16, c = 25, a = 15, b = 20, h = 12."))
    # 7. Equal vs unequal projections, hypotenuse 10 in both
    L = [header("Equal vs. Unequal Projections (Hypotenuse 10)")]
    # left: p=q=5 -> A(80,430) B(580,430) D(330,430) C(330,180)
    for (A3, B3, D3, C3, lab, sub) in (
        ((80, 430), (580, 430), (330, 430), (330, 180), "p = 5, q = 5", "a = b = 7.071"),
        ((640, 430), (1140, 430), (740, 430), (740, 230), "p = 2, q = 8", "a = 4.472, b = 8.944"),
    ):
        pts = f"{A3[0]},{A3[1]} {B3[0]},{B3[1]} {C3[0]},{C3[1]}"
        L.append(f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>')
        L.append(f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>')
        L.append(f'  <line x1="{C3[0]}" y1="{C3[1]}" x2="{D3[0]}" y2="{D3[1]}" stroke="{GREEN}" stroke-width="5" stroke-dasharray="10 8" stroke-linecap="round"/>')
        for P in (A3, B3, C3):
            L.append(f'  <circle cx="{P[0]}" cy="{P[1]}" r="8" fill="{GOLD}"/>')
        L.append(f'  <circle cx="{D3[0]}" cy="{D3[1]}" r="6" fill="{GREEN}"/>')
        L.append(f'  <text x="{A3[0]-24}" y="{A3[1]+44}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">A</text>')
        L.append(f'  <text x="{B3[0]+24}" y="{B3[1]+44}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">B</text>')
        L.append(f'  <text x="{C3[0]}" y="{C3[1]-28}" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">C</text>')
        L.append(f'  <text x="{D3[0]+26}" y="{D3[1]+44}" font-size="20" font-weight="700" fill="{GREEN}" text-anchor="middle">D</text>')
        L.append(f'  <text x="{(A3[0]+D3[0])/2:.0f}" y="{A3[1]+44}" font-size="26" font-weight="700" fill="{GOLD}" text-anchor="middle">p</text>')
        L.append(f'  <text x="{(D3[0]+B3[0])/2:.0f}" y="{B3[1]+44}" font-size="26" font-weight="700" fill="{GREEN}" text-anchor="middle">q</text>')
        cx = (A3[0] + B3[0]) / 2
        L.append(f'  <text x="{cx:.0f}" y="520" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">{lab}</text>')
        L.append(f'  <text x="{cx:.0f}" y="556" font-size="22" font-weight="700" fill="{GOLD}" text-anchor="middle">{sub}</text>')
    L.append(caption("Same hypotenuse 10: equal p and q give equal legs."))
    write("projection-equal-vs-unequal.svg", "".join(L))


if __name__ == "__main__":
    main()
