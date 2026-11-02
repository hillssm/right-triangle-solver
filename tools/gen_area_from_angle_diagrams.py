#!/usr/bin/env python3
"""Generate the 4 SVG diagrams for Page 18 (Right Triangle Area From Angle).
Dark palette: page #131313, panels #1c1b1b, gold #f1c97d, white labels.
Canvas 1200x630, content kept inside y 15..615. No inline CSS classes that
depend on site styles; standalone SVGs.
"""
import math, os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   '..', 'public', 'images', 'area-from-angle')
os.makedirs(OUT, exist_ok=True)

BG = '#131313'
PANEL = '#1c1b1b'
GOLD = '#f1c97d'
WHITE = '#ffffff'
GRAY = '#a3a3a3'
DIM = '#6b6b6b'
GREEN = '#4ade80'
FONT = 'Manrope, Inter, system-ui, sans-serif'


def header(title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" font-family="{FONT}">\n'
            f'  <rect x="0" y="0" width="1200" height="630" fill="{BG}"/>\n'
            f'  <text x="600" y="50" font-size="28" font-weight="700" fill="{WHITE}" text-anchor="middle">{title}</text>\n')


def footer():
    return '</svg>\n'


def angle_arc(cx, cy, r, start_deg, end_deg, color, width=4):
    # screen coords: y down; angles measured with 0 = +x, positive clockwise
    pts = []
    a0, a1 = math.radians(start_deg), math.radians(end_deg)
    steps = max(8, int(abs(end_deg - start_deg) / 3))
    for i in range(steps + 1):
        a = a0 + (a1 - a0) * i / steps
        pts.append(f'{cx + r * math.cos(a):.1f},{cy + r * math.sin(a):.1f}')
    return f'<polyline points="{" ".join(pts)}" fill="none" stroke="{color}" stroke-width="{width}"/>'


def right_marker(x, y, s, orient):
    # right-angle square at corner (x,y); orient: 'br' corner opening up-left etc.
    if orient == 'tl':  # corner at bottom-right of square: square extends left+up
        return f'<polyline points="{x-s},{y} {x-s},{y-s} {x},{y-s}" fill="none" stroke="{WHITE}" stroke-width="3"/>'
    if orient == 'tr':  # extends right+up
        return f'<polyline points="{x+s},{y} {x+s},{y-s} {x},{y-s}" fill="none" stroke="{WHITE}" stroke-width="3"/>'
    if orient == 'bl':  # extends left+down
        return f'<polyline points="{x-s},{y} {x-s},{y+s} {x},{y+s}" fill="none" stroke="{WHITE}" stroke-width="3"/>'
    # br: extends right+down
    return f'<polyline points="{x+s},{y} {x+s},{y+s} {x},{y+s}" fill="none" stroke="{WHITE}" stroke-width="3"/>'


def tri(ax, ay, bx, by, cx, cy, colors, widths, labels):
    # colors: dict side->color for 'a'(BC),'b'(CA),'c'(AB); widths likewise
    parts = [f'<polygon points="{ax},{ay} {bx},{by} {cx},{cy}" fill="{WHITE}" fill-opacity="0.05"/>']
    sides = {'a': (bx, by, cx, cy), 'b': (cx, cy, ax, ay), 'c': (ax, ay, bx, by)}
    for k, (x1, y1, x2, y2) in sides.items():
        parts.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{colors[k]}" stroke-width="{widths[k]}" stroke-linecap="round"/>')
    # vertex dots
    for (x, y, t) in labels['verts']:
        parts.append(f'<circle cx="{x}" cy="{y}" r="9" fill="{GOLD}"/>')
        parts.append(f'<text x="{x}" y="{y+9}" font-size="24" font-weight="700" fill="#131313" text-anchor="middle">{t}</text>')
    for (x, y, t, sz, col, anchor) in labels['sides']:
        parts.append(f'<text x="{x}" y="{y}" font-size="{sz}" font-weight="700" fill="{col}" text-anchor="{anchor}">{t}</text>')
    return '\n'.join(parts)


# ---------------------------------------------------------------- Diagram 1
def diagram1():
    s = [header('Right Triangle Anatomy and Both Area Modes')]
    # panel frames
    s.append(f'<rect x="20" y="64" width="560" height="548" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    s.append(f'<rect x="620" y="64" width="560" height="548" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    s.append(f'<text x="300" y="104" font-size="24" font-weight="700" fill="{GOLD}" text-anchor="middle">Mode 1: angle A</text>')
    s.append(f'<text x="900" y="104" font-size="24" font-weight="700" fill="{GOLD}" text-anchor="middle">Mode 2: angle B</text>')

    for ox, mode in ((0, 1), (600, 2)):
        ax, ay = 120 + ox, 470   # A bottom-left
        cx, cy = 480 + ox, 470   # C bottom-right (right angle)
        bx, by = 480 + ox, 200   # B top
        if mode == 1:
            colors = {'a': DIM, 'b': GOLD, 'c': GOLD}
        else:
            colors = {'a': GOLD, 'b': DIM, 'c': GOLD}
        widths = {'a': 7, 'b': 7, 'c': 8}
        labels = {
            'verts': [(ax - 26, ay + 2, 'A'), (cx + 28, cy + 2, 'C'), (bx + 4, by - 28, 'B')],
            'sides': [
                (bx + 34, (by + cy) / 2 + 8, 'a = 3', 26, colors['a'], 'start'),
                ((ax + cx) / 2, cy + 44, 'b = 4', 26, colors['b'], 'middle'),
                ((ax + bx) / 2 - 26, (ay + by) / 2 - 6, 'c = 5', 26, GOLD, 'middle'),
            ],
        }
        s.append(tri(ax, ay, bx, by, cx, cy, colors, widths, labels))
        s.append(right_marker(cx, cy, 26, 'tl'))
        # angle A arc at bottom-left: from -36.87deg to 0deg
        s.append(angle_arc(ax, ay, 52, -36.87, 0, GOLD if mode == 1 else DIM))
        # angle B arc at top vertex: from 90deg to 143.13deg (screen coords)
        s.append(angle_arc(bx, by, 52, 90, 143.13, GOLD if mode == 2 else DIM))
        s.append(f'<text x="{ax + 78}" y="{ay - 22}" font-size="22" fill="{GOLD if mode == 1 else WHITE}" text-anchor="start">A = 36.87 deg</text>')
        s.append(f'<text x="{bx - 190}" y="{by + 66}" font-size="22" fill="{GOLD if mode == 2 else WHITE}" text-anchor="start">B = 53.13 deg</text>')
        if mode == 1:
            s.append(f'<text x="300" y="560" font-size="26" font-weight="700" fill="{WHITE}" text-anchor="middle">K = bc sin(A) / 2</text>')
            s.append(f'<text x="300" y="592" font-size="20" fill="{GRAY}" text-anchor="middle">b and c include angle A</text>')
        else:
            s.append(f'<text x="900" y="560" font-size="26" font-weight="700" fill="{WHITE}" text-anchor="middle">K = ac sin(B) / 2</text>')
            s.append(f'<text x="900" y="592" font-size="20" fill="{GRAY}" text-anchor="middle">a and c include angle B</text>')
    s.append(footer())
    return '\n'.join(s)


# ---------------------------------------------------------------- Diagram 2
def diagram2():
    s = [header('How Sine Creates the Perpendicular Height')]
    # Part A panel
    s.append(f'<rect x="20" y="64" width="373" height="548" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    s.append(f'<rect x="413" y="64" width="374" height="548" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    s.append(f'<rect x="807" y="64" width="373" height="548" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    s.append(f'<text x="206" y="104" font-size="22" font-weight="700" fill="{GOLD}" text-anchor="middle">Part A: height from sine</text>')
    s.append(f'<text x="600" y="104" font-size="22" font-weight="700" fill="{GOLD}" text-anchor="middle">Part B: base times height</text>')
    s.append(f'<text x="993" y="104" font-size="22" font-weight="700" fill="{GOLD}" text-anchor="middle">Part C: direct formula</text>')

    # Part A triangle: 3-4-5 scaled by 67
    ax, ay = 60, 470
    cx, cy = 328, 470
    bx, by = 328, 268
    colors = {'a': GREEN, 'b': GRAY, 'c': GOLD}
    widths = {'a': 7, 'b': 7, 'c': 8}
    labels = {
        'verts': [(ax - 22, ay + 2, 'A'), (cx + 24, cy + 2, 'C'), (bx + 2, by - 24, 'B')],
        'sides': [
            (bx + 28, (by + cy) / 2 + 8, 'a = 3', 24, GREEN, 'start'),
            ((ax + cx) / 2, cy + 40, 'b = 4', 24, GRAY, 'middle'),
            ((ax + bx) / 2 - 34, (ay + by) / 2 - 4, 'c = 5', 24, GOLD, 'middle'),
        ],
    }
    s.append(tri(ax, ay, bx, by, cx, cy, colors, widths, labels))
    s.append(right_marker(cx, cy, 22, 'tl'))
    s.append(angle_arc(ax, ay, 44, -36.87, 0, WHITE))
    s.append(f'<text x="{ax + 66}" y="{ay - 18}" font-size="20" fill="{WHITE}">A = 36.87 deg</text>')
    s.append(f'<text x="206" y="540" font-size="22" font-weight="700" fill="{GREEN}" text-anchor="middle">a = c sin(A) = 5 x 0.6 = 3</text>')
    s.append(f'<text x="206" y="572" font-size="19" fill="{GRAY}" text-anchor="middle">sine turns the hypotenuse</text>')
    s.append(f'<text x="206" y="596" font-size="19" fill="{GRAY}" text-anchor="middle">into the perpendicular height</text>')

    # Part B: K = ba/2
    s.append(f'<text x="600" y="220" font-size="30" font-weight="700" fill="{WHITE}" text-anchor="middle">K = b a / 2</text>')
    s.append(f'<text x="600" y="300" font-size="28" fill="{WHITE}" text-anchor="middle">K = 4 x 3 / 2</text>')
    s.append(f'<text x="600" y="380" font-size="44" font-weight="700" fill="{GOLD}" text-anchor="middle">K = 6</text>')
    s.append(f'<text x="600" y="440" font-size="20" fill="{GRAY}" text-anchor="middle">familiar legs formula</text>')

    # Part C: K = bc sin(A)/2
    s.append(f'<text x="993" y="220" font-size="30" font-weight="700" fill="{WHITE}" text-anchor="middle">K = bc sin(A) / 2</text>')
    s.append(f'<text x="993" y="300" font-size="28" fill="{WHITE}" text-anchor="middle">K = 4 x 5 x 0.6 / 2</text>')
    s.append(f'<text x="993" y="380" font-size="44" font-weight="700" fill="{GOLD}" text-anchor="middle">K = 6</text>')
    s.append(f'<text x="993" y="440" font-size="20" fill="{GRAY}" text-anchor="middle">both calculations agree</text>')

    # connector arrows between panels
    for x in (400, 794):
        s.append(f'<text x="{x}" y="360" font-size="34" font-weight="700" fill="{GOLD}" text-anchor="middle">=</text>')
    s.append(footer())
    return '\n'.join(s)


# ---------------------------------------------------------------- Diagram 3
def diagram3():
    s = [header('Four Practical Right Triangle Area Calculations')]
    panels = [
        (20, 68, 'Roof gable', 'b = 4 m', 'c = 5 m', 'A = 36.87 deg', 'K = bc sin(A) / 2', '= 6 m2', 3, 4, 5, 50),
        (620, 68, 'Glass window', 'a = 0.6 m', 'c = 1 m', 'B = 53.13 deg', 'K = ac sin(B) / 2', '= 0.24 m2', 0.6, 0.8, 1, 180),
        (20, 336, 'Field survey', 'a = 7 m', 'c = 25 m', 'B = 73.74 deg', 'K = ac sin(B) / 2', '= 84 m2', 7, 24, 25, 9),
        (620, 336, 'Triangular sail', 'b = 12 ft', 'c = 13 ft', 'A = 22.62 deg', 'K = bc sin(A) / 2', '= 30 ft2', 5, 12, 13, 14),
    ]
    for (px, py, title, l1, l2, l3, f1, f2, sa, sb, sc, k) in panels:
        w, h = 560, 230
        s.append(f'<rect x="{px}" y="{py}" width="{w}" height="{h}" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
        s.append(f'<text x="{px + 24}" y="{py + 34}" font-size="23" font-weight="700" fill="{WHITE}">{title}</text>')
        # triangle: A bottom-left, C bottom-right (right angle), B top; base y fixed
        base_y = py + 196
        A_x = px + 44
        b_px = sb * k
        a_px = sa * k
        C_x = A_x + b_px
        B_x = C_x
        B_y = base_y - a_px
        s.append(f'<polygon points="{A_x},{base_y} {B_x},{B_y} {C_x},{base_y}" fill="{WHITE}" fill-opacity="0.05"/>')
        s.append(f'<line x1="{A_x}" y1="{base_y}" x2="{C_x}" y2="{base_y}" stroke="{GRAY}" stroke-width="5" stroke-linecap="round"/>')
        s.append(f'<line x1="{C_x}" y1="{base_y}" x2="{B_x}" y2="{B_y}" stroke="{GRAY}" stroke-width="5" stroke-linecap="round"/>')
        s.append(f'<line x1="{A_x}" y1="{base_y}" x2="{B_x}" y2="{B_y}" stroke="{GOLD}" stroke-width="6" stroke-linecap="round"/>')
        s.append(right_marker(C_x, base_y, 16, 'tl'))
        s.append(f'<circle cx="{A_x}" cy="{base_y}" r="7" fill="{GOLD}"/>')
        s.append(f'<circle cx="{C_x}" cy="{base_y}" r="7" fill="{GOLD}"/>')
        s.append(f'<circle cx="{B_x}" cy="{B_y}" r="7" fill="{GOLD}"/>')
        tx = px + 296
        s.append(f'<text x="{tx}" y="{py + 66}" font-size="20" fill="{WHITE}" text-anchor="start">{l1}</text>')
        s.append(f'<text x="{tx}" y="{py + 96}" font-size="20" fill="{WHITE}" text-anchor="start">{l2}</text>')
        s.append(f'<text x="{tx}" y="{py + 126}" font-size="20" fill="{WHITE}" text-anchor="start">{l3}</text>')
        s.append(f'<text x="{tx}" y="{py + 168}" font-size="21" font-weight="700" fill="{GOLD}" text-anchor="start">{f1}</text>')
        s.append(f'<text x="{tx}" y="{py + 196}" font-size="21" font-weight="700" fill="{GOLD}" text-anchor="start">{f2}</text>')
    s.append(footer())
    return '\n'.join(s)


# ---------------------------------------------------------------- Diagram 4
def diagram4():
    s = [header('Mode 1 vs. Mode 2: Same Triangle, Same Area')]
    # central triangle 3-4-5 scaled by 85: a=255 b=340 c=425
    ax, ay = 430, 400
    cx, cy = 770, 400
    bx, by = 770, 145
    colors = {'a': GRAY, 'b': GRAY, 'c': GOLD}
    widths = {'a': 7, 'b': 7, 'c': 8}
    labels = {
        'verts': [(ax - 26, ay + 2, 'A'), (cx + 28, cy + 2, 'C'), (bx + 4, by - 28, 'B')],
        'sides': [
            (bx + 32, (by + cy) / 2 + 8, 'a = 3', 24, GRAY, 'start'),
            ((ax + cx) / 2, cy + 42, 'b = 4', 24, GRAY, 'middle'),
            ((ax + bx) / 2 - 40, (ay + by) / 2 - 8, 'c = 5', 24, GOLD, 'middle'),
        ],
    }
    s.append(tri(ax, ay, bx, by, cx, cy, colors, widths, labels))
    s.append(right_marker(cx, cy, 24, 'tl'))
    s.append(angle_arc(ax, ay, 48, -36.87, 0, GOLD))
    s.append(angle_arc(bx, by, 48, 90, 143.13, GOLD))
    s.append(f'<text x="{ax + 72}" y="{ay - 20}" font-size="20" fill="{WHITE}">A = 36.87 deg</text>')
    s.append(f'<text x="{bx - 176}" y="{by + 62}" font-size="20" fill="{WHITE}">B = 53.13 deg</text>')

    # left calc panel
    s.append(f'<rect x="30" y="150" width="360" height="280" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    s.append(f'<text x="210" y="196" font-size="24" font-weight="700" fill="{GOLD}" text-anchor="middle">Mode 1</text>')
    s.append(f'<text x="210" y="248" font-size="22" fill="{WHITE}" text-anchor="middle">K = bc sin(A) / 2</text>')
    s.append(f'<text x="210" y="300" font-size="22" fill="{WHITE}" text-anchor="middle">K = 4 x 5 x 0.6 / 2</text>')
    s.append(f'<text x="210" y="380" font-size="46" font-weight="700" fill="{GOLD}" text-anchor="middle">K = 6</text>')
    # right calc panel
    s.append(f'<rect x="810" y="150" width="360" height="280" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    s.append(f'<text x="990" y="196" font-size="24" font-weight="700" fill="{GOLD}" text-anchor="middle">Mode 2</text>')
    s.append(f'<text x="990" y="248" font-size="22" fill="{WHITE}" text-anchor="middle">K = ac sin(B) / 2</text>')
    s.append(f'<text x="990" y="300" font-size="22" fill="{WHITE}" text-anchor="middle">K = 3 x 5 x 0.8 / 2</text>')
    s.append(f'<text x="990" y="380" font-size="46" font-weight="700" fill="{GOLD}" text-anchor="middle">K = 6</text>')
    # bottom verification strip
    s.append(f'<rect x="30" y="462" width="1140" height="140" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    s.append(f'<text x="600" y="516" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">Verification with the legs formula</text>')
    s.append(f'<text x="600" y="568" font-size="30" font-weight="700" fill="{GREEN}" text-anchor="middle">K = ab / 2 = 3 x 4 / 2 = 6</text>')
    s.append(footer())
    return '\n'.join(s)


if __name__ == '__main__':
    diagrams = {
        'angle-anatomy-modes.svg': diagram1(),
        'sine-height.svg': diagram2(),
        'practical-four-panel.svg': diagram3(),
        'mode1-vs-mode2.svg': diagram4(),
    }
    for name, svg in diagrams.items():
        path = os.path.join(OUT, name)
        with open(path, 'w') as f:
            f.write(svg)
        print('wrote', path, len(svg), 'bytes')
