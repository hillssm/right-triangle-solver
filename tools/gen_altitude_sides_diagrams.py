#!/usr/bin/env python3
"""
gen_altitude_sides_diagrams.py
Generates 5 SVG diagrams for Page 28 of 45: Right Triangle Altitude From Sides Calculator.
Style matches the site design system and Page 27 generator: 1200x630 canvas, #131313 bg,
gold #f1c97d, green #4ade80, blue #7dd3fc, white/gray text, panel #1c1b1b w/ #2e2c2c stroke.
NO SVG arc (A) commands: right-angle markers use polylines only. Vertex dots + large
labels; triangle fills 60-70% of canvas; captions 70px+ below the diagram bottom edge,
each caption line <= ~60 chars. All geometry is COMPUTED (perpendicular projection,
h = ab/c), never eyeballed. Manrope/Inter/system-ui font. XML well-formed.
"""
import math
import os

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   "public", "images", "right-triangle-altitude-from-sides-calculator")
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
    """Caption lines (each <= ~60 chars), centered."""
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
    """Format coordinate: int when whole, else 1 decimal."""
    r = round(x, nd)
    if r == int(r):
        return str(int(r))
    return str(r)


def ra_marker(C, u1, u2, size=24):
    """Right-angle marker as polyline (no arc commands): C+s*u1, C+s*(u1+u2), C+s*u2."""
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


def diagram1():
    # Right triangle with altitude from the right angle; computed 3-4-5 geometry, s=150 px/unit.
    # a=AC=3, b=BC=4, c=AB=5, h=ab/c=2.4. Hypotenuse horizontal.
    s = 150.0
    A = (160.0, 470.0)
    B = (910.0, 470.0)
    a, b, c = 3.0, 4.0, 5.0
    AD = a * a / c            # 1.8 units
    h = a * b / c             # 2.4 units
    D = (A[0] + AD * s, A[1])
    C = (D[0], A[1] - h * s)
    # verify right angle at C and altitude length
    assert abs(dotp(sub(A, C), sub(B, C))) < 1e-6, "angle C not right"
    assert abs(norm(sub(C, D)) - h * s) < 1e-6, "CD != h"
    assert abs(norm(sub(A, C)) - a * s) < 1e-6 and abs(norm(sub(B, C)) - b * s) < 1e-6
    log(f"diagram1: D=({fnum(D[0])},{fnum(D[1])}), h={fnum(norm(sub(C,D)))}px "
        f"(2.4u x 150), AD={fnum(norm(sub(A,D)))}px (1.8u), DB={fnum(norm(sub(D,B)))}px (3.2u)")
    t = header("Altitude From the Sides: Main Diagram")
    t += triangle_outline(A, B, C)
    t += altitude_line(C, D)
    # right-angle markers (polyline only, ~24px)
    t += ra_marker(C, unit(sub(A, C)), unit(sub(B, C)), 24)
    t += ra_marker(D, (-1.0, 0.0), (0.0, -1.0), 24)
    # vertex dots + labels
    for P in (A, B, C):
        t += dot(*P)
    t += dot(*D, r=7, fill=GREEN)
    t += vlabel(A[0] - 20, A[1] + 30, "A") + vlabel(B[0] + 20, B[1] + 30, "B")
    t += vlabel(C[0], C[1] - 32, "C")
    t += vlabel(D[0] + 24, D[1] - 6, "D", size=20, fill=GREEN)
    # segment labels
    t += vlabel(267, 290, "a", size=30, fill=BLUE)
    t += vlabel(698, 290, "b", size=30, fill=BLUE)
    t += vlabel(535, 534, "c", size=26)
    t += vlabel(398, 290, "h", size=30, fill=GREEN)
    # formula panel (top-left)
    t += f'  <rect x="24" y="110" width="300" height="180" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>\n'
    t += vlabel(174, 166, "h = (a × b) / c", size=26, anchor="middle")
    t += f'  <text x="174" y="210" font-size="19" fill="{GRAY}" text-anchor="middle">two area formulas</text>\n'
    t += f'  <text x="174" y="244" font-size="19" fill="{GRAY}" text-anchor="middle">ab/2 = ch/2</text>\n'
    # legend panel (top-right)
    t += f'  <rect x="866" y="110" width="310" height="300" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>\n'
    rows = [("a = AC", "first leg", BLUE), ("b = BC", "second leg", BLUE),
            ("c = AB", "hypotenuse", WHITE), ("h = CD", "altitude, ⊥ AB", GREEN)]
    y = 158
    for big, small, col in rows:
        t += (f'  <text x="890" y="{y}" font-size="22" font-weight="700" fill="{col}" text-anchor="start">{big}</text>\n')
        t += (f'  <text x="890" y="{y + 26}" font-size="19" fill="{GRAY}" text-anchor="start">{small}</text>\n')
        y += 60
    t += footer(["Altitude CD drops from right angle C to hypotenuse AB;",
                 "h equals (a x b) / c"], 550)
    t += '</svg>\n'
    return t


def diagram2():
    # Same 3-4-5 triangle twice (s=90 px/unit): left with base=a, height=b;
    # right with base=c, height=h. Equal-area indicator "=" between.
    s = 90.0
    # left panel: right angle at V0, horizontal leg a=3, vertical leg b=4
    V0 = (150.0, 490.0)
    V1 = (V0[0] + 3 * s, V0[1])          # a
    V2 = (V0[0], V0[1] - 4 * s)          # b
    # right panel: hypotenuse c=5 horizontal, altitude h=2.4 vertical
    A = (695.0, 480.0)
    B = (A[0] + 5 * s, A[1])             # c
    AD = 9.0 / 5.0 * s                   # a^2/c = 1.8u
    DB = 16.0 / 5.0 * s                  # b^2/c = 3.2u
    hpx = 12.0 / 5.0 * s                 # 2.4u
    D = (A[0] + AD, A[1])
    C = (D[0], A[1] - hpx)
    assert abs(AD + DB - 5 * s) < 1e-6
    assert abs(dotp(sub(A, C), sub(B, C))) < 1e-6, "right panel angle C not right"
    log(f"diagram2: right-panel D=({fnum(D[0])},{fnum(D[1])}), h={fnum(hpx)}px "
        f"(2.4u x 90), AD={fnum(AD)}px, DB={fnum(DB)}px")
    t = header("Two Base-Height Pairs, One Area")
    # left triangle
    t += triangle_outline(V0, V1, V2, width=7)
    t += ra_marker(V0, (1.0, 0.0), (0.0, -1.0), 24)
    for P in (V0, V1, V2):
        t += dot(*P, r=8)
    # right triangle
    t += triangle_outline(A, B, C, width=7)
    t += altitude_line(C, D)
    t += ra_marker(C, unit(sub(A, C)), unit(sub(B, C)), 24)
    t += ra_marker(D, (-1.0, 0.0), (0.0, -1.0), 24)
    for P in (A, B, C):
        t += dot(*P, r=8)
    t += dot(*D, r=7, fill=GREEN)
    # equal-area indicator
    t += vlabel(600, 330, "=", size=72, fill=GOLD)
    t += f'  <text x="600" y="368" font-size="20" fill="{GRAY}" text-anchor="middle">same area</text>\n'
    # panel titles
    t += f'  <text x="285" y="100" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">base = a, height = b</text>\n'
    t += f'  <text x="920" y="100" font-size="22" font-weight="700" fill="{WHITE}" text-anchor="middle">base = c, height = h</text>\n'
    # left side labels
    t += vlabel(285, 478, "a", size=26, fill=BLUE)
    t += vlabel(126, 310, "b", size=26, fill=BLUE)
    t += vlabel(306, 288, "c", size=24)
    t += vlabel(285, 524, "base = a", size=22, fill=GOLD)
    t += f'  <text x="285" y="552" font-size="22" fill="{GRAY}" text-anchor="middle">Area = ab/2</text>\n'
    # height label rotated on left leg
    t += (f'  <text x="108" y="310" font-size="22" fill="{GOLD}" text-anchor="middle" '
          f'transform="rotate(-90 108 310)">height = b</text>\n')
    # right side labels
    t += vlabel(920, 512, "base = c", size=22, fill=GOLD)
    t += f'  <text x="920" y="540" font-size="22" fill="{GRAY}" text-anchor="middle">Area = ch/2</text>\n'
    t += vlabel(826, 372, "h", size=26, fill=GREEN)
    t += (f'  <text x="800" y="372" font-size="20" fill="{GRAY}" text-anchor="middle" '
          f'transform="rotate(-90 800 372)">height = h</text>\n')
    t += vlabel(C[0] + 30, C[1] + 34, "C", size=20)
    t += footer(["Same triangle, two base-height pairs:",
                 "area equals ab/2 and ch/2"], 578)
    t += '</svg>\n'
    return t


def diagram3():
    # 3-4-5 drawn to scale: right angle at C, AC=3 vertical (a), BC=4 horizontal (b),
    # s=140 px/unit. Altitude foot D computed by projection onto AB.
    s = 140.0
    C = (340.0, 100.0)
    A = (C[0], C[1] + 3 * s)     # a = AC = 3
    B = (C[0] + 4 * s, C[1])     # b = BC = 4
    D = foot(C, A, B)
    h = 12.0 / 5.0 * s           # 2.4u
    assert abs(dotp(sub(A, C), sub(B, C))) < 1e-6, "angle C not right"
    assert abs(norm(sub(C, D)) - h) < 1e-6, f"CD={norm(sub(C,D))} != h={h}"
    assert abs(norm(sub(A, B)) - 5 * s) < 1e-6
    assert abs(dotp(sub(C, D), sub(A, B))) < 1e-6, "CD not perpendicular to AB"
    log(f"diagram3: D=({fnum(D[0])},{fnum(D[1])}), CD={fnum(norm(sub(C,D)))}px "
        f"(2.4u x 140), AB={fnum(norm(sub(A,B)))}px (5u), angle C dot={dotp(sub(A,C),sub(B,C)):.2e}")
    t = header("3-4-5 Triangle: Altitude to Scale")
    t += triangle_outline(A, B, C)
    t += altitude_line(C, D)
    # right-angle marker at C: legs point down and right
    t += ra_marker(C, (0.0, 1.0), (1.0, 0.0), 24)
    # right-angle marker at D: along DA and toward C
    t += ra_marker(D, unit(sub(A, D)), unit(sub(C, D)), 24)
    for P in (A, B, C):
        t += dot(*P)
    t += dot(*D, r=7, fill=GREEN)
    # vertex labels
    t += vlabel(A[0], A[1] + 32, "A")
    t += vlabel(B[0] + 26, B[1] + 8, "B")
    t += vlabel(C[0] - 28, C[1] + 8, "C")
    t += vlabel(D[0] + 24, D[1] + 26, "D", size=20, fill=GREEN)
    # side labels
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
    t += footer(["A 3-4-5 triangle: altitude h equals (3 x 4) / 5 = 2.4."], 592)
    t += '</svg>\n'
    return t


def diagram4():
    # Two triangles sharing the SAME hypotenuse c=10 (440 px): left 45-45-90
    # (legs 5*sqrt2, h=5), right 6-8-10 (h=4.8). Foot D computed by projection.
    s = 44.0
    # left: A=(120,450), B=(560,450), C above midpoint
    A1 = (120.0, 450.0)
    B1 = (560.0, 450.0)
    D1 = ((A1[0] + B1[0]) / 2.0, A1[1])
    C1 = (D1[0], A1[1] - 5 * s)          # h = 5
    leg1 = 5 * math.sqrt(2)
    assert abs(norm(sub(A1, C1)) - leg1 * s) < 1e-6
    assert abs(norm(sub(C1, D1)) - 5 * s) < 1e-6
    # right: 6-8-10, a=AC=6, b=BC=8
    A2 = (660.0, 450.0)
    B2 = (1100.0, 450.0)
    h2 = 6.0 * 8.0 / 10.0 * s           # 4.8u
    # foot divides hypotenuse: AD = a^2/c = 3.6u
    D2 = (A2[0] + 3.6 * s, A2[1])
    C2 = (D2[0], A2[1] - h2)
    assert abs(dotp(sub(A2, C2), sub(B2, C2))) < 1e-6, "right panel angle C not right"
    assert abs(norm(sub(A2, C2)) - 6 * s) < 1e-6 and abs(norm(sub(B2, C2)) - 8 * s) < 1e-6
    assert abs(norm(sub(C2, D2)) - h2) < 1e-6
    assert abs(dotp(sub(C2, D2), sub(A2, B2))) < 1e-6, "C2D2 not perpendicular"
    log(f"diagram4: left C=({fnum(C1[0])},{fnum(C1[1])}) h={fnum(norm(sub(C1,D1)))}px (5u x 44), "
        f"legs={fnum(norm(sub(A1,C1)))}px (5√2≈7.07u); right D=({fnum(D2[0])},{fnum(D2[1])}), "
        f"h={fnum(norm(sub(C2,D2)))}px (4.8u x 44), AD={fnum(norm(sub(A2,D2)))}px (3.6u)")
    t = header("Equal vs Unequal Legs, Same Hypotenuse", "both hypotenuses drawn at c = 10 (440 px)")
    # left triangle
    t += triangle_outline(A1, B1, C1, width=7)
    t += altitude_line(C1, D1)
    t += ra_marker(C1, unit(sub(A1, C1)), unit(sub(B1, C1)), 24)
    t += ra_marker(D1, (-1.0, 0.0), (0.0, -1.0), 24)
    for P in (A1, B1, C1):
        t += dot(*P, r=8)
    t += dot(*D1, r=7, fill=GREEN)
    # right triangle
    t += triangle_outline(A2, B2, C2, width=7)
    t += altitude_line(C2, D2)
    t += ra_marker(C2, unit(sub(A2, C2)), unit(sub(B2, C2)), 24)
    t += ra_marker(D2, (-1.0, 0.0), (0.0, -1.0), 24)
    for P in (A2, B2, C2):
        t += dot(*P, r=8)
    t += dot(*D2, r=7, fill=GREEN)
    # vertex labels
    t += vlabel(A1[0] - 20, A1[1] + 30, "A", size=22) + vlabel(B1[0] + 20, B1[1] + 30, "B", size=22)
    t += vlabel(C1[0], C1[1] - 28, "C", size=22)
    t += vlabel(A2[0] - 20, A2[1] + 30, "A", size=22) + vlabel(B2[0] + 20, B2[1] + 30, "B", size=22)
    t += vlabel(C2[0], C2[1] - 28, "C", size=22)
    t += vlabel(D2[0] + 26, D2[1] - 6, "D", size=18, fill=GREEN)
    # altitude labels
    t += vlabel(304, 340, "h = 5", size=26, fill=GREEN)
    t += vlabel(780, 344, "h = 4.8", size=26, fill=GREEN)
    # leg labels (left: 5√2 each)
    t += vlabel(204, 322, "5√2 ≈ 7.07", size=20, fill=GRAY)
    t += vlabel(476, 322, "5√2 ≈ 7.07", size=20, fill=GRAY)
    # leg labels (right: 6 and 8)
    t += vlabel(708, 330, "6", size=24)
    t += vlabel(984, 330, "8", size=24)
    # panel titles
    t += vlabel(340, 524, "45-45-90: tallest altitude", size=22)
    t += vlabel(880, 524, "6-8-10: shorter altitude", size=22)
    t += footer(["Same hypotenuse 10: equal legs",
                 "give the tallest altitude, 5."], 566)
    t += '</svg>\n'
    return t


def diagram5():
    # 3-4-5 with altitude: projections p=AD=1.8u, q=DB=3.2u, s=140.
    # Two smaller similar triangles labeled Δ ACD and Δ CBD.
    s = 140.0
    A = (250.0, 490.0)
    B = (950.0, 490.0)
    AD = 9.0 / 5.0 * s
    hpx = 12.0 / 5.0 * s
    D = (A[0] + AD, A[1])
    C = (D[0], A[1] - hpx)
    p, q = AD, 16.0 / 5.0 * s
    assert abs(dotp(sub(A, C), sub(B, C))) < 1e-6, "angle C not right"
    assert abs(dotp(sub(C, D), sub(A, B))) < 1e-6, "CD not perpendicular to AB"
    assert abs(norm(sub(C, D)) - hpx) < 1e-6
    # similarity check: angle at A shared -> tan checks
    assert abs(p / hpx - hpx / q) < 1e-9, "similarity ratio broken"
    log(f"diagram5: D=({fnum(D[0])},{fnum(D[1])}), h={fnum(hpx)}px (2.4u x 140), "
        f"p={fnum(p)}px (1.8u), q={fnum(q)}px (3.2u), p/h={p/hpx:.4f}=h/q={hpx/q:.4f}")
    t = header("Projections p and q, Similar Halves")
    t += triangle_outline(A, B, C)
    t += altitude_line(C, D)
    t += ra_marker(C, unit(sub(A, C)), unit(sub(B, C)), 24)
    t += ra_marker(D, (-1.0, 0.0), (0.0, -1.0), 24)
    for P in (A, B, C):
        t += dot(*P)
    t += dot(*D, r=7, fill=GREEN)
    # vertex labels
    t += vlabel(A[0] - 20, A[1] + 30, "A") + vlabel(B[0] + 20, B[1] + 30, "B")
    t += vlabel(C[0], C[1] - 32, "C")
    t += vlabel(D[0] + 24, D[1] - 6, "D", size=20, fill=GREEN)
    # projection labels
    t += vlabel((A[0] + D[0]) / 2, A[1] + 32, "p", size=28, fill=GOLD)
    t += vlabel((D[0] + B[0]) / 2, A[1] + 32, "q", size=28, fill=GOLD)
    # side labels
    t += vlabel(348, 300, "a = 3", size=24, fill=BLUE)
    t += vlabel(754, 300, "b = 4", size=24, fill=BLUE)
    hmid = mul(add(C, D), 0.5)
    t += vlabel(hmid[0] - 30, hmid[1], "h", size=30, fill=GREEN)
    # similar-triangle interior labels at centroids
    t += f'  <text x="418" y="388" font-size="20" font-weight="700" fill="{GRAY}" text-anchor="middle">Δ ACD</text>\n'
    t += f'  <text x="651" y="388" font-size="20" font-weight="700" fill="{GRAY}" text-anchor="middle">Δ CBD</text>\n'
    # legend panel (top-left)
    t += f'  <rect x="24" y="110" width="280" height="230" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>\n'
    t += vlabel(164, 166, "h² = p × q", size=26, anchor="middle")
    t += vlabel(164, 210, "p = AD,  q = DB", size=22, fill=GOLD, anchor="middle")
    t += f'  <text x="164" y="252" font-size="19" fill="{GRAY}" text-anchor="middle">Δ ACD ~ Δ CBD</text>\n'
    t += f'  <text x="164" y="282" font-size="19" fill="{GRAY}" text-anchor="middle">(similar triangles)</text>\n'
    t += footer(["The altitude splits the hypotenuse into p and q;",
                 "h² = p × q"], 560)
    t += '</svg>\n'
    return t


def main():
    files = {
        "altitude-main.svg": diagram1(),
        "altitude-two-base-height.svg": diagram2(),
        "altitude-345.svg": diagram3(),
        "altitude-equal-vs-unequal.svg": diagram4(),
        "altitude-projections-similar.svg": diagram5(),
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
