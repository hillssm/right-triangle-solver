#!/usr/bin/env python3
"""Generate the 4 SVG diagrams for Page 26 (Right Triangle Semiperimeter Calculator).
Dark palette: page #131313, panels #1c1b1b, gold #f1c97d, white labels,
green #4ade80 (leg a), blue #7dd3fc (leg b).
Canvas 1200x630, content kept inside bounds. No SVG arc (A) commands:
angle arcs and circles use polyline approximations. Standalone SVGs.
"""
import math, os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   '..', 'public', 'images', 'semiperimeter')
os.makedirs(OUT, exist_ok=True)

BG = '#131313'
PANEL = '#1c1b1b'
PANEL_STROKE = '#2e2c2c'
GOLD = '#f1c97d'
WHITE = '#ffffff'
GRAY = '#a3a3a3'
GREEN = '#4ade80'
BLUE = '#7dd3fc'
FONT = 'Manrope, Inter, system-ui, sans-serif'


def header(title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" font-family="{FONT}">\n'
            f'  <rect x="0" y="0" width="1200" height="630" fill="{BG}"/>\n'
            f'  <text x="600" y="52" font-size="28" font-weight="700" fill="{WHITE}" text-anchor="middle">{title}</text>\n')


def footer():
    return '</svg>\n'


def text(x, y, s, size=22, fill=WHITE, weight=400, anchor='start'):
    return (f'<text x="{x}" y="{y}" font-size="{size}" font-weight="{weight}" '
            f'fill="{fill}" text-anchor="{anchor}">{s}</text>')


def angle_arc(cx, cy, r, start_deg, end_deg, color=WHITE, width=4):
    pts = []
    a0, a1 = math.radians(start_deg), math.radians(end_deg)
    steps = max(8, int(abs(end_deg - start_deg) / 3))
    for i in range(steps + 1):
        a = a0 + (a1 - a0) * i / steps
        pts.append(f'{cx + r * math.cos(a):.1f},{cy + r * math.sin(a):.1f}')
    return f'<polyline points="{" ".join(pts)}" fill="none" stroke="{color}" stroke-width="{width}"/>'


def circle_poly(cx, cy, r, color, width=5, n=72):
    pts = []
    for i in range(n + 1):
        a = 2 * math.pi * i / n
        pts.append(f'{cx + r * math.cos(a):.1f},{cy + r * math.sin(a):.1f}')
    return f'<polyline points="{" ".join(pts)}" fill="none" stroke="{color}" stroke-width="{width}"/>'


def right_marker(x, y, s):
    # right angle at bottom-right corner (C), opening to top-left
    return f'<polyline points="{x-s},{y} {x-s},{y-s} {x},{y-s}" fill="none" stroke="{WHITE}" stroke-width="3"/>'


def tri_sides(ax, ay, bx, by, cx, cy, widths):
    # a: B->C (vertical), b: C->A (horizontal), c: A->B (hypotenuse)
    return (
        f'<line x1="{bx}" y1="{by}" x2="{cx}" y2="{cy}" stroke="{GREEN}" stroke-width="{widths[0]}" stroke-linecap="round"/>\n'
        f'<line x1="{cx}" y1="{cy}" x2="{ax}" y2="{ay}" stroke="{BLUE}" stroke-width="{widths[1]}" stroke-linecap="round"/>\n'
        f'<line x1="{ax}" y1="{ay}" x2="{bx}" y2="{by}" stroke="{GOLD}" stroke-width="{widths[2]}" stroke-linecap="round"/>'
    )


def vertex(x, y, label):
    return (
        f'<circle cx="{x}" cy="{y}" r="9" fill="{GOLD}"/>\n'
        f'<text x="{x}" y="{y+9}" font-size="24" font-weight="700" fill="#131313" text-anchor="middle">{label}</text>'
    )


# ---------------------------------------------------------------- Diagram 1: anatomy
def diagram1():
    s = [header('Anatomy of a Right Triangle: Three Sides, One Semiperimeter')]
    # A bottom-left, C bottom-right (right angle), B top; 3-4-5 scaled by 140
    ax, ay = 320, 560
    cx, cy = 880, 560
    bx, by = 880, 140
    s.append(f'<polygon points="{ax},{ay} {bx},{by} {cx},{cy}" fill="none" stroke="{GOLD}" stroke-width="14" stroke-linejoin="round" opacity="0.28"/>')
    s.append(f'<polygon points="{ax},{ay} {bx},{by} {cx},{cy}" fill="{WHITE}" fill-opacity="0.05"/>')
    s.append(tri_sides(ax, ay, bx, by, cx, cy, (8, 8, 9)))
    s.append(vertex(ax - 28, ay + 2, 'A'))
    s.append(vertex(cx + 30, cy + 2, 'C'))
    s.append(vertex(bx + 4, by - 30, 'B'))
    s.append(text(bx + 36, (by + cy) / 2 + 9, 'a', 30, GREEN, 700))
    s.append(text((ax + cx) / 2, cy + 48, 'b', 30, BLUE, 700, 'middle'))
    s.append(text((ax + bx) / 2 - 44, (ay + by) / 2 - 10, 'c', 30, GOLD, 700, 'middle'))
    s.append(right_marker(cx, cy, 28))
    s.append(angle_arc(ax, ay, 56, -36.87, 0))
    s.append(angle_arc(bx, by, 56, 90, 143.13))
    s.append(text(ax + 84, ay - 24, 'A (acute)'))
    s.append(text(bx - 208, by + 70, 'B (acute)'))
    s.append(text(cx - 120, cy - 40, 'C = 90 deg'))
    # legend panels
    s.append(f'<rect x="20" y="120" width="250" height="200" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>')
    s.append(text(40, 162, 'a: leg', 22, GREEN, 700))
    s.append(text(40, 196, 'one side of the', 19, GRAY))
    s.append(text(40, 222, 'right angle', 19, GRAY))
    s.append(text(40, 262, 'b: leg', 22, BLUE, 700))
    s.append(text(40, 296, 'other side of the', 19, GRAY))
    s.append(f'<rect x="930" y="120" width="250" height="200" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>')
    s.append(text(950, 162, 'c: hypotenuse', 22, GOLD, 700))
    s.append(text(950, 196, 'longest side,', 19, GRAY))
    s.append(text(950, 222, 'opposite C', 19, GRAY))
    s.append(text(950, 262, 's = (a+b+c)/2', 22, WHITE, 700))
    s.append(text(950, 296, 'half the perimeter', 19, GRAY))
    s.append(footer())
    return '\n'.join(s)


# ---------------------------------------------------------------- Diagram 2: calculation steps
def diagram2():
    s = [header('How to Calculate the Semiperimeter: Step by Step')]
    # left panel with 3-4-5 triangle, scale 85
    s.append(f'<rect x="20" y="90" width="540" height="470" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>')
    sc = 85
    ax, ay = 100, 500          # A bottom-left
    cx, cy = 100 + 4 * sc, 500 # C bottom-right (right angle)
    bx, by = 100 + 4 * sc, 500 - 3 * sc  # B top
    s.append(f'<polygon points="{ax},{ay} {bx},{by} {cx},{cy}" fill="{WHITE}" fill-opacity="0.05"/>')
    s.append(tri_sides(ax, ay, bx, by, cx, cy, (8, 8, 9)))
    s.append(vertex(ax - 26, ay + 2, 'A'))
    s.append(vertex(cx + 28, cy + 2, 'C'))
    s.append(vertex(bx + 2, by - 28, 'B'))
    s.append(text(bx + 34, (by + cy) / 2 + 9, 'a = 3', 26, GREEN, 700))
    s.append(text((ax + cx) / 2, cy + 46, 'b = 4', 26, BLUE, 700, 'middle'))
    s.append(text((ax + bx) / 2 - 96, (ay + by) / 2, 'c = 5', 26, GOLD, 700, 'middle'))
    s.append(right_marker(cx, cy, 24))
    # right panel with steps
    s.append(f'<rect x="600" y="90" width="580" height="470" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>')
    steps = [
        ('1', 'Add the three side lengths', 'P = 3 + 4 + 5 = 12', 130),
        ('2', 'Divide the total by two', 's = 12 / 2', 270),
        ('3', 'The semiperimeter', 's = 6 units', 410),
    ]
    for num, title, formula, y in steps:
        box = GOLD if num == '3' else PANEL_STROKE
        s.append(f'<rect x="640" y="{y}" width="500" height="110" rx="12" fill="{BG}" stroke="{box}" stroke-width="2"/>')
        s.append(f'<circle cx="690" cy="{y+55}" r="22" fill="{GOLD}"/>')
        s.append(text(690, y + 64, num, 24, '#131313', 700, 'middle'))
        s.append(text(728, y + 48, title, 22, GRAY))
        s.append(text(728, y + 84, formula, 30, WHITE, 700))
    s.append(footer())
    return '\n'.join(s)


# ---------------------------------------------------------------- Diagram 3: incircle
def diagram3():
    s = [header('Semiperimeter and the Incircle of a Right Triangle')]
    sc = 100
    ox, oy = 170, 510
    # C right angle at origin; b along x (4 units), a along y (3 units)
    cxp, cyp = ox, oy
    bxp, byp = ox + 4 * sc, oy
    axp, ayp = ox, oy - 3 * sc
    # incenter (1,1), r = 1 unit
    ix, iy = ox + sc, oy - sc
    r = sc
    # tangency points
    t_b = (ix, oy)                      # on leg b
    t_a = (ox, iy)                      # on leg a
    t_c = (ox + 1.6 * sc, oy - 1.8 * sc)  # on hypotenuse (foot of perpendicular)
    s.append(f'<polygon points="{axp},{ayp} {bxp},{byp} {cxp},{cyp}" fill="{WHITE}" fill-opacity="0.05"/>')
    s.append(tri_sides(axp, ayp, bxp, byp, cxp, cyp, (7, 7, 8)))
    s.append(circle_poly(ix, iy, r, WHITE, 5))
    s.append(f'<circle cx="{ix}" cy="{iy}" r="8" fill="{GOLD}"/>')
    s.append(text(ix + 16, iy - 12, 'center', 20, GOLD, 700))
    # inradius line from center to hypotenuse touchpoint
    s.append(f'<line x1="{ix}" y1="{iy}" x2="{t_c[0]:.1f}" y2="{t_c[1]:.1f}" stroke="{GREEN}" stroke-width="5" stroke-linecap="round"/>')
    s.append(text(t_c[0] + 14, t_c[1] - 6, 'r = 1', 24, GREEN, 700))
    # tangency dots
    for (tx, ty) in (t_b, t_a, t_c):
        s.append(f'<circle cx="{tx:.1f}" cy="{ty:.1f}" r="7" fill="{BLUE}"/>')
    s.append(vertex(axp - 4, ayp - 30, 'A'))
    s.append(vertex(bxp + 30, byp + 2, 'B'))
    s.append(vertex(cxp - 28, cyp + 2, 'C'))
    s.append(text(axp - 44, (ayp + cyp) / 2 + 8, 'a = 3', 26, GREEN, 700))
    s.append(text((cxp + bxp) / 2, cyp + 46, 'b = 4', 26, BLUE, 700, 'middle'))
    s.append(text((axp + bxp) / 2 - 92, (ayp + byp) / 2 - 6, 'c = 5', 26, GOLD, 700, 'middle'))
    s.append(right_marker(cxp, cyp, 24))
    # formula card
    s.append(f'<rect x="660" y="120" width="520" height="400" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>')
    s.append(text(700, 180, 'For the 3-4-5 triangle:', 24, WHITE, 700))
    s.append(text(700, 232, 's = (3 + 4 + 5) / 2 = 6', 26, GOLD, 700))
    s.append(text(700, 284, 'K = (3 x 4) / 2 = 6', 26, WHITE, 700))
    s.append(text(700, 336, 'r = K / s = 6 / 6 = 1', 26, GREEN, 700))
    s.append(text(700, 388, 'K = r x s', 26, WHITE, 700))
    s.append(text(700, 440, 'The incircle touches all three sides.', 20, GRAY))
    s.append(text(700, 470, 'Its radius is the inradius r.', 20, GRAY))
    s.append(footer())
    return '\n'.join(s)


# ---------------------------------------------------------------- Diagram 4: Heron's formula
def diagram4():
    s = [header("Heron's Formula Using the Semiperimeter")]
    # left panel with 3-4-5 triangle, scale 80
    s.append(f'<rect x="20" y="90" width="480" height="470" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>')
    sc = 80
    ax, ay = 80, 510
    cx, cy = 80 + 4 * sc, 510
    bx, by = 80 + 4 * sc, 510 - 3 * sc
    s.append(f'<polygon points="{ax},{ay} {bx},{by} {cx},{cy}" fill="{WHITE}" fill-opacity="0.05"/>')
    s.append(tri_sides(ax, ay, bx, by, cx, cy, (8, 8, 9)))
    s.append(vertex(ax - 26, ay + 2, 'A'))
    s.append(vertex(cx + 28, cy + 2, 'C'))
    s.append(vertex(bx + 2, by - 28, 'B'))
    s.append(text(bx + 34, (by + cy) / 2 + 9, 'a = 3', 26, GREEN, 700))
    s.append(text((ax + cx) / 2, cy + 46, 'b = 4', 26, BLUE, 700, 'middle'))
    s.append(text((ax + bx) / 2 - 100, (ay + by) / 2, 'c = 5', 26, GOLD, 700, 'middle'))
    s.append(right_marker(cx, cy, 24))
    # right panel: 5 steps
    s.append(f'<rect x="540" y="90" width="640" height="470" rx="12" fill="{PANEL}" stroke="{PANEL_STROKE}"/>')
    rows = [
        ('1', 'Identify the three sides', 'a = 3, b = 4, c = 5'),
        ('2', 'Calculate the semiperimeter', 's = (3 + 4 + 5) / 2 = 6'),
        ('3', "Apply Heron's formula", 'K = sqrt(6(6-3)(6-4)(6-5))'),
        ('4', 'Simplify to the area', 'K = sqrt(36) = 6 square units'),
        ('5', 'Verify with K = ab/2', 'K = (3 x 4) / 2 = 6'),
    ]
    y = 108
    for num, title, formula in rows:
        s.append(f'<rect x="570" y="{y}" width="580" height="82" rx="10" fill="{BG}" stroke="{PANEL_STROKE}" stroke-width="2"/>')
        s.append(f'<circle cx="612" cy="{y+41}" r="19" fill="{GOLD}"/>')
        s.append(text(612, y + 49, num, 22, '#131313', 700, 'middle'))
        s.append(text(646, y + 34, title, 20, GRAY))
        s.append(text(646, y + 64, formula, 25, WHITE, 700))
        y += 92
    s.append(footer())
    return '\n'.join(s)


def main():
    diagrams = [
        ('semiperimeter-anatomy.svg', diagram1),
        ('semiperimeter-steps.svg', diagram2),
        ('semiperimeter-incircle.svg', diagram3),
        ('semiperimeter-heron.svg', diagram4),
    ]
    for name, fn in diagrams:
        path = os.path.join(OUT, name)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(fn())
        print('wrote', path)


if __name__ == '__main__':
    main()
