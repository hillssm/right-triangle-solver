#!/usr/bin/env python3
"""
gen_altitude_diagrams.py
Generates 6 SVG diagrams for Page 29 of 45: Right Triangle Altitude Calculator.
Style matches the site design system and the Page 28 generator: 1200x630 canvas,
#131313 bg, gold #f1c97d, green #4ade80, blue #7dd3fc, white/gray text,
panel #1c1b1b w/ #2e2c2c stroke. NO SVG arc (A) commands: right-angle markers
use polylines only. Vertex dots + large labels; triangle fills 60-70% of canvas;
captions 70px+ below the diagram bottom edge, each caption line <= ~60 chars.
All geometry is COMPUTED (perpendicular projection, h = ab/c, p = a^2/c),
never eyeballed. XML well-formed.
"""
import math
import os

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   "public", "images", "right-triangle-altitude-calculator")
os.makedirs(OUT, exist_ok=True)

GOLD = "#f1c97d"
GREEN = "#4ade80"
BLUE = "#7dd3fc"
WHITE = "#ffffff"
GRAY = "#a3a3a3"
PANEL = "#1c1b1b"
PANEL_STROKE = "#2e2c2c"

GEO_LOG = []


def log(msg):
    GEO_LOG.append(msg)


def header(title, subtitle=None):
    s = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" '
         'font-family="Manrope, Inter, system-ui, sans-serif">\n'
         '  <rect x="0" y="0" width="1200" height="630" fill="#131313"/>\n'
         f'  <text x="600" y="52" font-size="28" font-weight="700" fill="{WHITE}" text-anchor="middle">{title}</text>\n')
    if subtitle:
        s += (f'  <text x="600" y="86" font-size="20" fill="{GRAY}" text-anchor="middle">{subtitle}</text>\n')
    return s


def footer(lines, start_y):
    s = ""
    for i, t in enumerate(lines):
        s += (f'  <text x="600" y="{start_y + i * 30}" font-size="22" fill="{GRAY}" '
              f'text-anchor="middle">{t}</text>\n')
    return s


def dot(x, y, r=9, fill=GOLD):
    return f'  <circle cx="{x}" cy="{y}" r="{r}" fill="{fill}"/>\n'


def vlabel(x, y, t, size=24, fill=WHITE, anchor="middle", weight="700"):
    return (f'  <text x="{x}" y="{y}" font-size="{size}" font-weight="{weight}" '
            f'fill="{fill}" text-anchor="{anchor}">{t}</text>\n')


def sub(a, b):
    return (a[0] - b[0], a[1] - b[1])


def add(a, b):
    return (a[0] + b[0], a[1] + b[1])


def mul(a, k):
    return (a[0] * k, a[1] * k)


def norm(v):
    return math.hypot(v[0], v[1])


def unit(v):
    n = norm(v)
    return (v[0] / n, v[1] / n)


def dotp(a, b):
    return a[0] * b[0] + a[1] * b[1]


def foot(P, A, B):
    """Foot of the perpendicular from P onto line AB (true projection)."""
    AB = sub(B, A)
    t = dotp(sub(P, A), AB) / dotp(AB, AB)
    return add(A, mul(AB, t))


def fnum(x, nd=1):
    r = round(x, nd)
    if r == int(r):
        return str(int(r))
    return str(r)


def ra_marker(C, u1, u2, size=24):
    p1 = add(C, mul(u1, size))
    p2 = add(C, mul(add(u1, u2), size))
    p3 = add(C, mul(u2, size))
    pts = f"{fnum(p1[0])},{fnum(p1[1])} {fnum(p2[0])},{fnum(p2[1])} {fnum(p3[0])},{fnum(p3[1])}"
    return (f'  <polyline points="{pts}" fill="none" stroke="{WHITE}" stroke-width="3"/>\n')


def triangle_outline(A, B, C, width=8):
    pts = f"{fnum(A[0])},{fnum(A[1])} {fnum(B[0])},{fnum(B[1])} {fnum(C[0])},{fnum(C[1])}"
    return (
        f'  <polygon points="{pts}" fill="#ffffff" fill-opacity="0.04" stroke="none"/>\n'
        f'  <polygon points="{pts}" fill="none" stroke="{GOLD}" stroke-width="{width}" stroke-linejoin="round"/>\n'
    )


def altitude_line(C, D, width=6, dashed=True):
    dash = ' stroke-dasharray="10 8"' if dashed else ""
    return (f'  <line x1="{fnum(C[0])}" y1="{fnum(C[1])}" x2="{fnum(D[0])}" y2="{fnum(D[1])}" '
            f'stroke="{GREEN}" stroke-width="{width}"{dash} stroke-linecap="round"/>\n')


def diagram_main():
    # 5-12-13 triangle, hypotenuse horizontal; s=55 px/unit.
    # a=AC=5, b=BC=12, c=AB=13, h=60/13, p=a^2/c=25/13, q=144/13.
    s = 55.0
    A = (240.0, 470.0)
    B = (240.0 + 13 * s, 470.0)
    p, q, h = 25.0 / 13.0, 144.0 / 13.0, 60.0 / 13.0
    D = (A[0] + p * s, A[1])
    C = (D[0], A[1] - h * s)
    assert abs(dotp(sub(A, C), sub(B, C))) < 1e-6, "angle C not right"
    assert abs(norm(sub(A, C)) - 5 * s) < 1e-3 and abs(norm(sub(B, C)) - 12 * s) < 1e-3
    assert abs(norm(sub(C, D)) - h * s) < 1e-6
    assert abs(norm(sub(A, D)) - p * s) < 1e-6 and abs(norm(sub(D, B)) - q * s) < 1e-6
    log(f"main: D=({fnum(D[0])},{fnum(D[1])}), h={fnum(norm(sub(C,D)))}px, "
        f"p={fnum(norm(sub(A,D)))}px, q={fnum(norm(sub(D,B)))}px, angleC dot={dotp(sub(A,C),sub(B,C)):.2e}")
    t = header("Right Triangle Altitude: Main Diagram")
    t += triangle_outline(A, B, C)
    t += altitude_line(C, D)
    t += ra_marker(C, unit(sub(A, C)), unit(sub(B, C)), 24)
    t += ra_marker(D, (-1.0, 0.0), (0.0, -1.0), 24)
    for P in (A, B, C):
        t += dot(*P)
    t += dot(*D, r=7, fill=GREEN)
    t += vlabel(A[0] - 20, A[1] + 32, "A") + vlabel(B[0] + 20, B[1] + 32, "B")
    t += vlabel(C[0], C[1] - 32, "C")
    t += vlabel(D[0] + 24, D[1] - 6, "D", size=20, fill=GREEN)
    t += vlabel(272, 330, "a", size=30, fill=BLUE)
    t += vlabel(668, 330, "b", size=30, fill=BLUE)
    t += vlabel(598, 536, "c", size=26)
    t += vlabel(D[0] - 34, (C[1] + D[1]) / 2, "h", size=30, fill=GREEN)
    t += vlabel((A[0] + D[0]) / 2, A[1] + 34, "p", size=26, fill=GOLD)
    t += vlabel((D[0] + B[0]) / 2, A[1] + 34, "q", size=26, fill=GOLD)
    # formula panel (top-left)
    t += f'  <rect x="24" y="110" width="300" height="230" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>\n'
    t += vlabel(174, 166, "h = (a × b) / c", size=26, anchor="middle")
    t += vlabel(174, 208, "h = √(p × q)", size=26, anchor="middle", fill=GREEN)
    t += f'  <text x="174" y="252" font-size="19" fill="{GRAY}" text-anchor="middle">same altitude,</text>\n'
    t += f'  <text x="174" y="282" font-size="19" fill="{GRAY}" text-anchor="middle">two formulas</text>\n'
    # legend panel (top-right)
    t += f'  <rect x="862" y="110" width="314" height="360" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>\n'
    rows = [("a = AC", "first leg", BLUE), ("b = BC", "second leg", BLUE),
            ("c = AB", "hypotenuse", WHITE), ("h = CD", "altitude, ⊥ AB", GREEN),
            ("p = AD", "projection of a", GOLD), ("q = DB", "projection of b", GOLD)]
    y = 156
    for big, small, col in rows:
        t += (f'  <text x="886" y="{y}" font-size="22" font-weight="700" fill="{col}" text-anchor="start">{big}</text>\n')
        t += (f'  <text x="886" y="{y + 25}" font-size="18" fill="{GRAY}" text-anchor="start">{small}</text>\n')
        y += 56
    t += footer(["Altitude CD drops from the right angle C perpendicular to hypotenuse AB,",
                 "dividing it into projections p and q."], 548)
    t += '</svg>\n'
    return t


def diagram_sides_345():
    # 3-4-5 to scale: right angle at C, AC=3 vertical (a), BC=4 horizontal (b), s=140.
    s = 140.0
    C = (340.0, 100.0)
    A = (C[0], C[1] + 3 * s)
    B = (C[0] + 4 * s, C[1])
    D = foot(C, A, B)
    h = 12.0 / 5.0 * s
    assert abs(dotp(sub(A, C), sub(B, C))) < 1e-6, "angle C not right"
    assert abs(norm(sub(C, D)) - h) < 1e-6
    assert abs(dotp(sub(C, D), sub(A, B))) < 1e-6, "CD not perpendicular to AB"
    log(f"sides-345: D=({fnum(D[0])},{fnum(D[1])}), CD={fnum(norm(sub(C,D)))}px (2.4u x 140)")
    t = header("Altitude From Sides: 3-4-5 Triangle")
    t += triangle_outline(A, B, C)
    t += altitude_line(C, D)
    t += ra_marker(C, (0.0, 1.0), (1.0, 0.0), 24)
    t += ra_marker(D, unit(sub(A, D)), unit(sub(C, D)), 24)
    for P in (A, B, C):
        t += dot(*P)
    t += dot(*D, r=7, fill=GREEN)
    t += vlabel(A[0], A[1] + 32, "A")
    t += vlabel(B[0] + 26, B[1] + 8, "B")
    t += vlabel(C[0] - 28, C[1] + 8, "C")
    t += vlabel(D[0] + 24, D[1] + 26, "D", size=20, fill=GREEN)
    t += vlabel(306, 310, "a = 3", size=24, fill=BLUE)
    t += vlabel(620, 74, "b = 4", size=24, fill=BLUE)
    t += vlabel(648, 336, "c = 5", size=24)
    hmid = mul(add(C, D), 0.5)
    t += vlabel(hmid[0] - 30, hmid[1], "h = 2.4", size=24, fill=GREEN)
    # value panel (top-left)
    t += f'  <rect x="24" y="110" width="270" height="260" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>\n'
    rows = [("a = 3", "vertical leg", BLUE), ("b = 4", "horizontal leg", BLUE),
            ("c = 5", "hypotenuse", WHITE), ("h = (3 × 4) / 5", "= 2.4", GREEN)]
    y = 156
    for big, small, col in rows:
        t += (f'  <text x="48" y="{y}" font-size="22" font-weight="700" fill="{col}" text-anchor="start">{big}</text>\n')
        t += (f'  <text x="48" y="{y + 26}" font-size="19" fill="{GRAY}" text-anchor="start">{small}</text>\n')
        y += 60
    t += footer(["A 3-4-5 triangle: altitude h equals (3 x 4) / 5 = 2.4."], 590)
    t += '</svg>\n'
    return t


def diagram_projections():
    # p=9, q=16, h=12, c=25 -> 15-20-25 triangle, s=26 px/unit.
    s = 26.0
    A = (275.0, 480.0)
    B = (275.0 + 25 * s, 480.0)
    p, q, h = 9.0, 16.0, 12.0
    D = (A[0] + p * s, A[1])
    C = (D[0], A[1] - h * s)
    assert abs(dotp(sub(A, C), sub(B, C))) < 1e-6, "angle C not right"
    assert abs(norm(sub(A, C)) - 15 * s) < 1e-3 and abs(norm(sub(B, C)) - 20 * s) < 1e-3
    assert abs(norm(sub(C, D)) - h * s) < 1e-6
    assert abs(h * h - p * q) < 1e-9, "altitude theorem broken"
    log(f"projections: D=({fnum(D[0])},{fnum(D[1])}), h={fnum(h*s)}px, p={fnum(p*s)}px, "
        f"q={fnum(q*s)}px, legs={fnum(norm(sub(A,C)))}x{fnum(norm(sub(B,C)))}px")
    t = header("Altitude From Projections: p = 9, q = 16")
    t += triangle_outline(A, B, C)
    t += altitude_line(C, D)
    t += ra_marker(C, unit(sub(A, C)), unit(sub(B, C)), 24)
    t += ra_marker(D, (-1.0, 0.0), (0.0, -1.0), 24)
    for P in (A, B, C):
        t += dot(*P)
    t += dot(*D, r=7, fill=GREEN)
    t += vlabel(A[0] - 20, A[1] + 32, "A") + vlabel(B[0] + 20, B[1] + 32, "B")
    t += vlabel(C[0], C[1] - 32, "C")
    t += vlabel(D[0] + 24, D[1] - 6, "D", size=20, fill=GREEN)
    t += vlabel((A[0] + D[0]) / 2, A[1] + 34, "p = 9", size=26, fill=GOLD)
    t += vlabel((D[0] + B[0]) / 2, A[1] + 34, "q = 16", size=26, fill=GOLD)
    hmid = mul(add(C, D), 0.5)
    t += vlabel(hmid[0] - 36, hmid[1], "h = 12", size=26, fill=GREEN)
    t += vlabel(390, 300, "a = 15", size=22, fill=BLUE)
    t += vlabel(700, 300, "b = 20", size=22, fill=BLUE)
    # value panel (top-left)
    t += f'  <rect x="24" y="110" width="280" height="230" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>\n'
    t += vlabel(164, 166, "h² = p × q", size=26, anchor="middle")
    t += vlabel(164, 210, "h² = 9 × 16 = 144", size=22, anchor="middle")
    t += vlabel(164, 252, "h = √144 = 12", size=22, fill=GREEN, anchor="middle")
    t += footer(["The altitude is the geometric mean of the projections:",
                 "sqrt(9 x 16) = 12."], 560)
    t += '</svg>\n'
    return t


def diagram_similar_triangles():
    # Original ABC (3-4-5, s=80) beside smaller ACD (1.8,2.4,3) and CBD (2.4,3.2,4).
    s = 80.0
    A = (90.0, 470.0)
    B = (490.0, 470.0)
    AD = 9.0 / 5.0 * s
    hpx = 12.0 / 5.0 * s
    D = (A[0] + AD, A[1])
    C = (D[0], A[1] - hpx)
    assert abs(dotp(sub(A, C), sub(B, C))) < 1e-6
    assert abs(norm(sub(C, D)) - hpx) < 1e-6
    # panel 2: ACD, right angle at D2
    A2 = (600.0, 470.0)
    D2 = (600.0 + 1.8 * s, 470.0)
    C2 = (600.0, 470.0 - 2.4 * s)
    # panel 3: CBD, right angle at D3
    D3 = (830.0, 470.0)
    C3 = (830.0, 470.0 - 2.4 * s)
    B3 = (830.0 + 3.2 * s, 470.0)
    log(f"similar: ABC D=({fnum(D[0])},{fnum(D[1])}); ACD legs {fnum(1.8*s)}x{fnum(2.4*s)}; "
        f"CBD legs {fnum(2.4*s)}x{fnum(3.2*s)}")
    t = header("Similar Triangles Proof", "the altitude splits ABC into two triangles similar to it")
    # panel 1: original
    t += triangle_outline(A, B, C, width=7)
    t += altitude_line(C, D)
    t += ra_marker(C, unit(sub(A, C)), unit(sub(B, C)), 20)
    t += ra_marker(D, (-1.0, 0.0), (0.0, -1.0), 20)
    for P in (A, B, C):
        t += dot(*P, r=8)
    t += dot(*D, r=6, fill=GREEN)
    # panel 2: ACD
    t += triangle_outline(A2, D2, C2, width=7)
    t += ra_marker(D2, (-1.0, 0.0), (0.0, -1.0), 20)
    for P in (A2, D2, C2):
        t += dot(*P, r=8)
    # panel 3: CBD
    t += triangle_outline(C3, D3, B3, width=7)
    t += ra_marker(D3, (-1.0, 0.0), (0.0, -1.0), 20)
    for P in (C3, D3, B3):
        t += dot(*P, r=8)
    # panel titles
    t += vlabel(290, 530, "Δ ABC", size=24)
    t += vlabel(680, 530, "Δ ACD", size=24, fill=BLUE)
    t += vlabel(980, 530, "Δ CBD", size=24, fill=BLUE)
    # side labels panel 1
    t += vlabel(158, 340, "a", size=22, fill=BLUE)
    t += vlabel(412, 340, "b", size=22, fill=BLUE)
    t += vlabel(290, 502, "c", size=22)
    t += vlabel(D[0] - 28, (C[1] + D[1]) / 2, "h", size=24, fill=GREEN)
    # side labels panel 2
    t += vlabel((A2[0] + D2[0]) / 2, A2[1] + 30, "p", size=22, fill=GOLD)
    t += vlabel(A2[0] - 26, (C2[1] + D2[1]) / 2, "h", size=22, fill=GREEN)
    t += vlabel(690, 340, "a", size=22, fill=BLUE)
    # side labels panel 3
    t += vlabel((D3[0] + B3[0]) / 2, D3[1] + 30, "q", size=22, fill=GOLD)
    t += vlabel(B3[0] + 26, (C3[1] + B3[1]) / 2, "h", size=22, fill=GREEN)
    t += vlabel(946, 340, "b", size=22, fill=BLUE)
    # similarity proportion panel (top center)
    t += f'  <rect x="470" y="110" width="260" height="120" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>\n'
    t += vlabel(600, 158, "p / h = h / q", size=26, anchor="middle", fill=GOLD)
    t += vlabel(600, 198, "Δ ACD ~ Δ CBD", size=20, anchor="middle")
    t += footer(["Triangles ACD and CBD are similar: p/h = h/q,",
                 "so h squared equals p times q."], 566)
    t += '</svg>\n'
    return t


def diagram_area_comparison():
    # 3-4-5 twice, s=85: left base=a,height=b; right base=c,height=h.
    s = 85.0
    V0 = (150.0, 490.0)
    V1 = (V0[0] + 3 * s, V0[1])
    V2 = (V0[0], V0[1] - 4 * s)
    A = (700.0, 480.0)
    B = (A[0] + 5 * s, A[1])
    AD = 9.0 / 5.0 * s
    hpx = 12.0 / 5.0 * s
    D = (A[0] + AD, A[1])
    C = (D[0], A[1] - hpx)
    assert abs(dotp(sub(A, C), sub(B, C))) < 1e-6
    log(f"area: right-panel h={fnum(hpx)}px, AD={fnum(AD)}px")
    t = header("Two Base-Height Pairs, One Area")
    t += triangle_outline(V0, V1, V2, width=7)
    t += ra_marker(V0, (1.0, 0.0), (0.0, -1.0), 24)
    for P in (V0, V1, V2):
        t += dot(*P, r=8)
    t += triangle_outline(A, B, C, width=7)
    t += altitude_line(C, D)
    t += ra_marker(C, unit(sub(A, C)), unit(sub(B, C)), 24)
    t += ra_marker(D, (-1.0, 0.0), (0.0, -1.0), 24)
    for P in (A, B, C):
        t += dot(*P, r=8)
    t += dot(*D, r=7, fill=GREEN)
    t += vlabel(600, 330, "=", size=72, fill=GOLD)
    t += f'  <text x="600" y="368" font-size="20" fill="{GRAY}" text-anchor="middle">same area</text>\n'
    t += f'  <text x="285" y="100" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">base = a, height = b</text>\n'
    t += f'  <text x="912" y="100" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">base = c, height = h</text>\n'
    t += vlabel(278, 478, "a", size=26, fill=BLUE)
    t += vlabel(126, 320, "b", size=26, fill=BLUE)
    t += vlabel(300, 300, "c", size=24)
    t += vlabel(278, 524, "base = a", size=22, fill=GOLD)
    t += f'  <text x="278" y="552" font-size="22" fill="{GRAY}" text-anchor="middle">Area = ab/2</text>\n'
    t += vlabel(912, 512, "base = c", size=22, fill=GOLD)
    t += f'  <text x="912" y="540" font-size="22" fill="{GRAY}" text-anchor="middle">Area = ch/2</text>\n'
    t += vlabel(D[0] - 32, (C[1] + D[1]) / 2, "h", size=26, fill=GREEN)
    t += vlabel(C[0] + 30, C[1] + 30, "C", size=20)
    t += footer(["Same triangle, two base-height pairs:",
                 "area equals ab/2 and ch/2"], 578)
    t += '</svg>\n'
    return t


def diagram_equal_vs_unequal():
    # Two triangles, same hypotenuse c=10 (440 px), s=44.
    # Left: 45-45-90, h=5. Right: p=2, q=8, h=4 (legs 2√5, 4√5).
    s = 44.0
    A1 = (120.0, 450.0)
    B1 = (560.0, 450.0)
    D1 = ((A1[0] + B1[0]) / 2.0, A1[1])
    C1 = (D1[0], A1[1] - 5 * s)
    A2 = (660.0, 450.0)
    B2 = (1100.0, 450.0)
    h2 = 4.0 * s
    D2 = (A2[0] + 2.0 * s, A2[1])
    C2 = (D2[0], A2[1] - h2)
    leg2a, leg2b = 2 * math.sqrt(5), 4 * math.sqrt(5)
    assert abs(norm(sub(A1, C1)) - 5 * math.sqrt(2) * s) < 1e-6
    assert abs(norm(sub(C1, D1)) - 5 * s) < 1e-6
    assert abs(dotp(sub(A2, C2), sub(B2, C2))) < 1e-6, "right panel angle C not right"
    assert abs(norm(sub(A2, C2)) - leg2a * s) < 1e-3 and abs(norm(sub(B2, C2)) - leg2b * s) < 1e-3
    assert abs(norm(sub(C2, D2)) - h2) < 1e-6
    log(f"equal-vs-unequal: left h={fnum(norm(sub(C1,D1)))}px (5u x 44); right h={fnum(norm(sub(C2,D2)))}px "
        f"(4u x 44), legs={fnum(norm(sub(A2,C2)))}x{fnum(norm(sub(B2,C2)))}px")
    t = header("Equal vs Unequal Projections", "both hypotenuses drawn at c = 10 (440 px)")
    t += triangle_outline(A1, B1, C1, width=7)
    t += altitude_line(C1, D1)
    t += ra_marker(C1, unit(sub(A1, C1)), unit(sub(B1, C1)), 24)
    t += ra_marker(D1, (-1.0, 0.0), (0.0, -1.0), 24)
    for P in (A1, B1, C1):
        t += dot(*P, r=8)
    t += dot(*D1, r=7, fill=GREEN)
    t += triangle_outline(A2, B2, C2, width=7)
    t += altitude_line(C2, D2)
    t += ra_marker(C2, unit(sub(A2, C2)), unit(sub(B2, C2)), 24)
    t += ra_marker(D2, (-1.0, 0.0), (0.0, -1.0), 24)
    for P in (A2, B2, C2):
        t += dot(*P, r=8)
    t += dot(*D2, r=7, fill=GREEN)
    t += vlabel(A1[0] - 20, A1[1] + 30, "A", size=22) + vlabel(B1[0] + 20, B1[1] + 30, "B", size=22)
    t += vlabel(C1[0], C1[1] - 28, "C", size=22)
    t += vlabel(A2[0] - 20, A2[1] + 30, "A", size=22) + vlabel(B2[0] + 20, B2[1] + 30, "B", size=22)
    t += vlabel(C2[0], C2[1] - 28, "C", size=22)
    t += vlabel(D2[0] + 26, D2[1] - 6, "D", size=18, fill=GREEN)
    t += vlabel(304, 340, "h = 5", size=26, fill=GREEN)
    t += vlabel(784, 350, "h = 4", size=26, fill=GREEN)
    t += vlabel(340, 500, "p = 5,  q = 5", size=22, fill=GOLD)
    t += vlabel(880, 500, "p = 2,  q = 8", size=22, fill=GOLD)
    t += vlabel(340, 524, "45-45-90: tallest altitude", size=20)
    t += vlabel(880, 524, "unequal: shorter altitude", size=20)
    t += footer(["Same hypotenuse 10: equal projections",
                 "give the tallest altitude, 5."], 566)
    t += '</svg>\n'
    return t


def main():
    files = {
        "altitude-main.svg": diagram_main(),
        "altitude-sides-345.svg": diagram_sides_345(),
        "altitude-projections.svg": diagram_projections(),
        "altitude-similar-triangles.svg": diagram_similar_triangles(),
        "altitude-area-comparison.svg": diagram_area_comparison(),
        "altitude-equal-vs-unequal.svg": diagram_equal_vs_unequal(),
    }
    for name, content in files.items():
        path = os.path.join(OUT, name)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("wrote", path)
    print("\n--- geometry verification log ---")
    for line in GEO_LOG:
        print(line)


if __name__ == "__main__":
    main()
