#!/usr/bin/env python3
"""
gen_altitude_projections_diagrams.py
Generates 4 SVG diagrams for Page 27 of 45: Right Triangle Altitude From Projections Calculator.
Style matches the site design system: 1200x630 canvas, #131313 bg, gold #f1c97d,
green #4ade80, blue #7dd3fc, white/gray text. NO SVG arc (A) commands: right-angle
markers use polylines only. Vertex dots + large labels; triangle fills 60-70% of canvas.
"""
import os

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   "public", "images", "altitude-from-projections")
os.makedirs(OUT, exist_ok=True)

GOLD = "#f1c97d"
GREEN = "#4ade80"
BLUE = "#7dd3fc"
WHITE = "#ffffff"
GRAY = "#a3a3a3"
PANEL = "#1c1b1b"
PANEL_STROKE = "#2e2c2c"

def header(title):
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" '
        'font-family="Manrope, Inter, system-ui, sans-serif">\n'
        '  <rect x="0" y="0" width="1200" height="630" fill="#131313"/>\n'
        f'  <text x="600" y="52" font-size="28" font-weight="700" fill="{WHITE}" text-anchor="middle">{title}</text>\n'
    )

def dot(x, y, r=9, fill=GOLD):
    return f'  <circle cx="{x}" cy="{y}" r="{r}" fill="{fill}"/>\n'

def vlabel(x, y, t, size=24, fill=WHITE, anchor="middle"):
    return (f'  <text x="{x}" y="{y}" font-size="{size}" font-weight="700" '
            f'fill="{fill}" text-anchor="{anchor}">{t}</text>\n')

def diagram1():
    # Main diagram: A=(184,520) B=(1016,520) C=(440,136) D=(440,520)
    # p=AD=256, q=DB=576, h=CD=384, c=832. Right angle at C verified by dot product.
    s = header("Altitude From Projections: Main Diagram")
    s += '  <polygon points="184,520 1016,520 440,136" fill="#ffffff" fill-opacity="0.04" stroke="none"/>\n'
    s += (f'  <polygon points="184,520 1016,520 440,136" fill="none" stroke="{GOLD}" '
          f'stroke-width="8" stroke-linejoin="round"/>\n')
    # altitude CD dashed
    s += (f'  <line x1="440" y1="136" x2="440" y2="520" stroke="{GREEN}" '
          f'stroke-width="6" stroke-dasharray="10 8" stroke-linecap="round"/>\n')
    # right-angle marker at C (unit vectors along CA and CB, size 26)
    s += (f'  <polyline points="425.6,157.6 447.2,172.1 461.6,150.4" fill="none" '
          f'stroke="{WHITE}" stroke-width="3"/>\n')
    # right-angle marker at D
    s += (f'  <polyline points="416,520 416,496 440,496" fill="none" '
          f'stroke="{WHITE}" stroke-width="3"/>\n')
    # vertex dots + labels
    s += dot(184, 520) + dot(1016, 520) + dot(440, 136) + dot(440, 520, r=7, fill=GREEN)
    s += vlabel(152, 552, "A") + vlabel(1048, 552, "B") + vlabel(440, 102, "C")
    s += vlabel(466, 516, "D", size=20, fill=GREEN)
    # segment labels
    s += vlabel(312, 562, "p", size=28, fill=GOLD)
    s += vlabel(728, 562, "q", size=28, fill=GOLD)
    s += vlabel(404, 328, "h", size=30, fill=GREEN)
    s += vlabel(282, 322, "a", size=28, fill=BLUE)
    s += vlabel(762, 322, "b", size=28, fill=BLUE)
    s += vlabel(880, 498, "c", size=24)
    # formula panel (top-left, balances legend)
    s += (f'  <rect x="24" y="96" width="280" height="180" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>\n')
    s += vlabel(164, 152, "h² = p × q", size=26, anchor="middle")
    s += vlabel(164, 196, "h = √(p × q)", size=26, fill=GOLD, anchor="middle")
    s += (f'  <text x="164" y="236" font-size="19" fill="{GRAY}" text-anchor="middle">geometric mean</text>\n')
    # legend panel (top-right)
    s += (f'  <rect x="876" y="96" width="300" height="270" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>\n')
    rows = [("p = AD", "first projection", GOLD), ("q = DB", "second projection", GOLD),
            ("h = CD", "altitude, √(p × q)", GREEN), ("c = p + q", "hypotenuse", WHITE)]
    y = 142
    for big, small, col in rows:
        s += (f'  <text x="900" y="{y}" font-size="22" font-weight="700" fill="{col}" text-anchor="start">{big}</text>\n')
        s += (f'  <text x="900" y="{y + 26}" font-size="19" fill="{GRAY}" text-anchor="start">{small}</text>\n')
        y += 60
    s += '</svg>\n'
    return s

def diagram2():
    # Similar-triangles proof: left = ACD (legs p=128 horiz, h=192 vert),
    # right = CBD (legs h=192 horiz, q=288 vert). h/p = q/h.
    s = header("Similar Triangles Prove the Formula")
    # left triangle
    s += (f'  <polygon points="172,480 300,480 300,288" fill="#ffffff" fill-opacity="0.04"/>\n')
    s += (f'  <line x1="172" y1="480" x2="300" y2="480" stroke="{BLUE}" stroke-width="7" stroke-linecap="round"/>\n')
    s += (f'  <line x1="300" y1="480" x2="300" y2="288" stroke="{GREEN}" stroke-width="7" stroke-linecap="round"/>\n')
    s += (f'  <line x1="172" y1="480" x2="300" y2="288" stroke="{GOLD}" stroke-width="6" stroke-linecap="round"/>\n')
    s += (f'  <polyline points="276,480 276,456 300,456" fill="none" stroke="{WHITE}" stroke-width="3"/>\n')
    # right triangle
    s += (f'  <polygon points="780,480 972,480 780,192" fill="#ffffff" fill-opacity="0.04"/>\n')
    s += (f'  <line x1="780" y1="480" x2="972" y2="480" stroke="{BLUE}" stroke-width="7" stroke-linecap="round"/>\n')
    s += (f'  <line x1="780" y1="480" x2="780" y2="192" stroke="{GREEN}" stroke-width="7" stroke-linecap="round"/>\n')
    s += (f'  <line x1="972" y1="480" x2="780" y2="192" stroke="{GOLD}" stroke-width="6" stroke-linecap="round"/>\n')
    s += (f'  <polyline points="756,480 756,456 780,456" fill="none" stroke="{WHITE}" stroke-width="3"/>\n')
    # vertex dots + labels
    for x, y in [(172, 480), (300, 480), (300, 288), (780, 192), (780, 480), (972, 480)]:
        s += dot(x, y, r=8)
    s += vlabel(140, 510, "A", size=22) + vlabel(300, 514, "D", size=22)
    s += vlabel(300, 262, "C", size=22) + vlabel(780, 166, "C", size=22)
    s += vlabel(780, 514, "D", size=22) + vlabel(1006, 510, "B", size=22)
    # side labels (corresponding sides share colors)
    s += vlabel(236, 514, "p", size=26, fill=BLUE)
    s += vlabel(266, 384, "h", size=26, fill=GREEN)
    s += vlabel(876, 514, "h", size=26, fill=BLUE)
    s += vlabel(746, 336, "q", size=26, fill=GREEN)
    # triangle titles
    s += (f'  <text x="236" y="246" font-size="22" fill="{GRAY}" text-anchor="middle">triangle ACD</text>\n')
    s += (f'  <text x="876" y="150" font-size="22" fill="{GRAY}" text-anchor="middle">triangle CBD</text>\n')
    # proportion statement
    s += vlabel(600, 578, "h / p = q / h   →   h² = p × q", size=30)
    s += '</svg>\n'
    return s

def diagram3():
    # Equal vs unequal projections, same hypotenuse c=832 scaled 0.5 -> 416
    s = header("Equal vs Unequal Projections")
    # left: p=q=208, h=208
    s += (f'  <polygon points="120,500 536,500 328,396" fill="#ffffff" fill-opacity="0.04" '
          f'stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>\n')
    s += (f'  <line x1="328" y1="396" x2="328" y2="500" stroke="{GREEN}" stroke-width="6" '
          f'stroke-dasharray="10 8" stroke-linecap="round"/>\n')
    s += (f'  <polyline points="304,500 304,476 328,476" fill="none" stroke="{WHITE}" stroke-width="3"/>\n')
    # right: p=83, q=333, h=166.25
    s += (f'  <polygon points="664,500 1080,500 705.5,416.9" fill="#ffffff" fill-opacity="0.04" '
          f'stroke="{GOLD}" stroke-width="7" stroke-linejoin="round"/>\n')
    s += (f'  <line x1="705.5" y1="416.9" x2="705.5" y2="500" stroke="{GREEN}" stroke-width="6" '
          f'stroke-dasharray="10 8" stroke-linecap="round"/>\n')
    s += (f'  <polyline points="681.5,500 681.5,476 705.5,476" fill="none" stroke="{WHITE}" stroke-width="3"/>\n')
    # vertex dots
    for x, y in [(120, 500), (536, 500), (328, 396), (328, 500),
                 (664, 500), (1080, 500), (705.5, 416.9), (705.5, 500)]:
        s += dot(x, y, r=8)
    s += vlabel(94, 528, "A", size=22) + vlabel(562, 528, "B", size=22)
    s += vlabel(328, 370, "C", size=22) + vlabel(354, 494, "D", size=18, fill=GREEN)
    s += vlabel(638, 528, "A", size=22) + vlabel(1106, 528, "B", size=22)
    s += vlabel(705.5, 392, "C", size=22) + vlabel(731, 494, "D", size=18, fill=GREEN)
    # h labels
    s += vlabel(294, 448, "h = 208", size=24, fill=GREEN)
    s += vlabel(668, 460, "h ≈ 166", size=24, fill=GREEN)
    # p / q labels
    s += vlabel(328, 536, "p = q", size=24, fill=GOLD)
    s += vlabel(684, 536, "p = 83", size=22, fill=GOLD)
    s += vlabel(893, 536, "q = 333", size=22, fill=GOLD)
    # panel titles
    s += vlabel(328, 584, "Equal projections: tallest altitude", size=22)
    s += vlabel(872, 584, "Unequal projections: shorter altitude", size=22)
    s += '</svg>\n'
    return s

def diagram4():
    # Geometric mean vs arithmetic mean for p=4, q=9
    s = header("Geometric Mean vs Arithmetic Mean (p = 4, q = 9)")
    # rectangle 4x9 (scale 36)
    s += (f'  <rect x="100" y="140" width="144" height="324" fill="#ffffff" fill-opacity="0.05" '
          f'stroke="{GOLD}" stroke-width="6"/>\n')
    s += vlabel(172, 306, "4 × 9", size=28)
    s += (f'  <text x="172" y="502" font-size="22" fill="{GRAY}" text-anchor="middle">Area = 36</text>\n')
    s += vlabel(312, 318, "=", size=40)
    # square 6x6
    s += (f'  <rect x="380" y="248" width="216" height="216" fill="#ffffff" fill-opacity="0.05" '
          f'stroke="{GREEN}" stroke-width="6"/>\n')
    s += vlabel(488, 360, "6 × 6", size=28)
    s += (f'  <text x="488" y="502" font-size="22" fill="{GRAY}" text-anchor="middle">Area = 36</text>\n')
    # number line 4..9 at y=560, x 700..1140
    s += (f'  <line x1="700" y1="560" x2="1140" y2="560" stroke="{WHITE}" stroke-width="4" stroke-linecap="round"/>\n')
    for v in range(4, 10):
        x = 700 + (v - 4) * 88
        s += (f'  <line x1="{x}" y1="552" x2="{x}" y2="568" stroke="{WHITE}" stroke-width="3"/>\n')
        s += (f'  <text x="{x}" y="592" font-size="20" fill="{GRAY}" text-anchor="middle">{v}</text>\n')
    x65 = 700 + 2.5 * 88
    s += (f'  <line x1="{x65}" y1="554" x2="{x65}" y2="566" stroke="{GRAY}" stroke-width="2"/>\n')
    # geometric mean marker
    x6 = 700 + 2 * 88
    s += f'  <circle cx="{x6}" cy="560" r="9" fill="{GOLD}"/>\n'
    s += (f'  <text x="830" y="528" font-size="22" font-weight="700" fill="{GOLD}" text-anchor="end">'
          f'6 = geometric mean = h</text>\n')
    # arithmetic mean marker
    s += f'  <circle cx="{x65}" cy="560" r="9" fill="{GRAY}"/>\n'
    s += (f'  <text x="1150" y="528" font-size="22" font-weight="700" fill="{GRAY}" text-anchor="end">'
          f'6.5 = arithmetic mean</text>\n')
    s += (f'  <line x1="1046" y1="536" x2="{x65 + 4}" y2="552" stroke="{GRAY}" stroke-width="2"/>\n')
    s += '</svg>\n'
    return s

def main():
    files = {
        "altitude-main.svg": diagram1(),
        "altitude-proof.svg": diagram2(),
        "altitude-equal-vs-unequal.svg": diagram3(),
        "altitude-geometric-mean.svg": diagram4(),
    }
    for name, content in files.items():
        path = os.path.join(OUT, name)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("wrote", path)

if __name__ == "__main__":
    main()
