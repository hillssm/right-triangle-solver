#!/usr/bin/env python3
"""Generate the 4 SVG diagrams for Page 25 (Right Triangle Perimeter Calculator).
Dark palette: page #131313, panels #1c1b1b, gold #f1c97d, white labels.
Canvas 1200x630, content kept inside y 15..615. No SVG arc (A) commands:
angle arcs use polyline approximations. Standalone SVGs.
"""
import math, os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   '..', 'public', 'images', 'perimeter')
os.makedirs(OUT, exist_ok=True)

BG = '#131313'
PANEL = '#1c1b1b'
GOLD = '#f1c97d'
WHITE = '#ffffff'
GRAY = '#a3a3a3'
DIM = '#6b6b6b'
GREEN = '#4ade80'
BLUE = '#7dd3fc'
FONT = 'Manrope, Inter, system-ui, sans-serif'


def header(title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" font-family="{FONT}">\n'
            f'  <rect x="0" y="0" width="1200" height="630" fill="{BG}"/>\n'
            f'  <text x="600" y="50" font-size="28" font-weight="700" fill="{WHITE}" text-anchor="middle">{title}</text>\n')


def footer():
    return '</svg>\n'


def angle_arc(cx, cy, r, start_deg, end_deg, color, width=4):
    pts = []
    a0, a1 = math.radians(start_deg), math.radians(end_deg)
    steps = max(8, int(abs(end_deg - start_deg) / 3))
    for i in range(steps + 1):
        a = a0 + (a1 - a0) * i / steps
        pts.append(f'{cx + r * math.cos(a):.1f},{cy + r * math.sin(a):.1f}')
    return f'<polyline points="{" ".join(pts)}" fill="none" stroke="{color}" stroke-width="{width}"/>'


def right_marker(x, y, s, orient):
    if orient == 'tl':
        return f'<polyline points="{x-s},{y} {x-s},{y-s} {x},{y-s}" fill="none" stroke="{WHITE}" stroke-width="3"/>'
    if orient == 'tr':
        return f'<polyline points="{x+s},{y} {x+s},{y-s} {x},{y-s}" fill="none" stroke="{WHITE}" stroke-width="3"/>'
    if orient == 'bl':
        return f'<polyline points="{x-s},{y} {x-s},{y+s} {x},{y+s}" fill="none" stroke="{WHITE}" stroke-width="3"/>'
    return f'<polyline points="{x+s},{y} {x+s},{y+s} {x},{y+s}" fill="none" stroke="{WHITE}" stroke-width="3"/>'


def tri(ax, ay, bx, by, cx, cy, colors, widths, labels, fill_opacity='0.05'):
    parts = [f'<polygon points="{ax},{ay} {bx},{by} {cx},{cy}" fill="{WHITE}" fill-opacity="{fill_opacity}"/>']
    sides = {'a': (bx, by, cx, cy), 'b': (cx, cy, ax, ay), 'c': (ax, ay, bx, by)}
    for k, (x1, y1, x2, y2) in sides.items():
        parts.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{colors[k]}" stroke-width="{widths[k]}" stroke-linecap="round"/>')
    for (x, y, t) in labels['verts']:
        parts.append(f'<circle cx="{x}" cy="{y}" r="9" fill="{GOLD}"/>')
        parts.append(f'<text x="{x}" y="{y+9}" font-size="24" font-weight="700" fill="#131313" text-anchor="middle">{t}</text>')
    for (x, y, t, sz, col, anchor) in labels['sides']:
        parts.append(f'<text x="{x}" y="{y}" font-size="{sz}" font-weight="700" fill="{col}" text-anchor="{anchor}">{t}</text>')
    return '\n'.join(parts)


def boundary_trace(ax, ay, bx, by, cx, cy, color=GOLD, width=14, opacity='0.28'):
    return (f'<polygon points="{ax},{ay} {bx},{by} {cx},{cy}" fill="none" stroke="{color}" '
            f'stroke-width="{width}" stroke-linejoin="round" opacity="{opacity}"/>')


# ---------------------------------------------------------------- Diagram 1: anatomy
def diagram1():
    s = [header('Anatomy of a Right Triangle: Three Sides, One Perimeter')]
    # 3-4-5 scaled by 140: a=420, b=560, c=700
    ax, ay = 320, 560   # A bottom-left
    cx, cy = 880, 560   # C bottom-right (right angle)
    bx, by = 880, 140   # B top
    colors = {'a': GREEN, 'b': BLUE, 'c': GOLD}
    widths = {'a': 8, 'b': 8, 'c': 9}
    labels = {
        'verts': [(ax - 28, ay + 2, 'A'), (cx + 30, cy + 2, 'C'), (bx + 4, by - 30, 'B')],
        'sides': [
            (bx + 36, (by + cy) / 2 + 9, 'a', 30, GREEN, 'start'),
            ((ax + cx) / 2, cy + 48, 'b', 30, BLUE, 'middle'),
            ((ax + bx) / 2 - 44, (ay + by) / 2 - 10, 'c', 30, GOLD, 'middle'),
        ],
    }
    s.append(boundary_trace(ax, ay, bx, by, cx, cy))
    s.append(tri(ax, ay, bx, by, cx, cy, colors, widths, labels))
    s.append(right_marker(cx, cy, 28, 'tl'))
    s.append(angle_arc(ax, ay, 56, -36.87, 0, WHITE))
    s.append(angle_arc(bx, by, 56, 90, 143.13, WHITE))
    s.append(f'<text x="{ax + 84}" y="{ay - 24}" font-size="22" fill="{WHITE}">A (acute)</text>')
    s.append(f'<text x="{bx - 208}" y="{by + 70}" font-size="22" fill="{WHITE}">B (acute)</text>')
    s.append(f'<text x="{cx - 120}" y="{cy - 40}" font-size="22" fill="{WHITE}">C = 90 deg</text>')
    # legend panels
    s.append(f'<rect x="20" y="120" width="250" height="200" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    s.append(f'<text x="40" y="162" font-size="22" font-weight="700" fill="{GREEN}">a: leg</text>')
    s.append(f'<text x="40" y="196" font-size="19" fill="{GRAY}">one side of the</text>')
    s.append(f'<text x="40" y="222" font-size="19" fill="{GRAY}">right angle</text>')
    s.append(f'<text x="40" y="262" font-size="22" font-weight="700" fill="{BLUE}">b: leg</text>')
    s.append(f'<text x="40" y="296" font-size="19" fill="{GRAY}">other side of the</text>')
    s.append(f'<text x="40" y="322" font-size="19" fill="{GRAY}">right angle</text>')
    s.append(f'<rect x="930" y="120" width="250" height="200" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    s.append(f'<text x="950" y="162" font-size="22" font-weight="700" fill="{GOLD}">c: hypotenuse</text>')
    s.append(f'<text x="950" y="196" font-size="19" fill="{GRAY}">longest side,</text>')
    s.append(f'<text x="950" y="222" font-size="19" fill="{GRAY}">opposite C</text>')
    s.append(f'<text x="950" y="262" font-size="22" font-weight="700" fill="{WHITE}">P = a + b + c</text>')
    s.append(f'<text x="950" y="296" font-size="19" fill="{GRAY}">all three edges</text>')
    s.append(footer())
    return '\n'.join(s)


# ---------------------------------------------------------------- Diagram 2: missing hypotenuse
def diagram2():
    s = [header('Find the Missing Hypotenuse Before Calculating the Perimeter')]
    # left panel: triangle a=6, b=8, c unknown; 6-8-10 scaled by 44: a=264 b=352
    s.append(f'<rect x="20" y="64" width="540" height="548" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    ax, ay = 80, 540
    cx, cy = 432, 540
    bx, by = 432, 276
    s.append(f'<polygon points="{ax},{ay} {bx},{by} {cx},{cy}" fill="{WHITE}" fill-opacity="0.05"/>')
    s.append(f'<line x1="{ax}" y1="{ay}" x2="{cx}" y2="{cy}" stroke="{GREEN}" stroke-width="8" stroke-linecap="round"/>')
    s.append(f'<line x1="{cx}" y1="{cy}" x2="{bx}" y2="{by}" stroke="{BLUE}" stroke-width="8" stroke-linecap="round"/>')
    s.append(f'<line x1="{ax}" y1="{ay}" x2="{bx}" y2="{by}" stroke="{GOLD}" stroke-width="8" stroke-linecap="round" stroke-dasharray="16 10"/>')
    for (x, y, t) in [(ax - 26, ay + 2, 'A'), (cx + 28, cy + 2, 'C'), (bx + 4, by - 28, 'B')]:
        s.append(f'<circle cx="{x}" cy="{y}" r="9" fill="{GOLD}"/>')
        s.append(f'<text x="{x}" y="{y+9}" font-size="24" font-weight="700" fill="#131313" text-anchor="middle">{t}</text>')
    s.append(f'<text x="{(ax+cx)/2}" y="{cy+44}" font-size="26" font-weight="700" fill="{GREEN}" text-anchor="middle">a = 6</text>')
    s.append(f'<text x="{bx+34}" y="{(by+cy)/2+9}" font-size="26" font-weight="700" fill="{BLUE}" text-anchor="start">b = 8</text>')
    s.append(f'<text x="{(ax+bx)/2-60}" y="{(ay+by)/2-14}" font-size="26" font-weight="700" fill="{GOLD}" text-anchor="middle">c = ?</text>')
    s.append(right_marker(cx, cy, 24, 'tl'))
    s.append(f'<text x="290" y="120" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">Step 1: find c</text>')
    # right panel: calculation steps
    s.append(f'<rect x="600" y="64" width="580" height="548" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
    s.append(f'<text x="890" y="120" font-size="24" font-weight="700" fill="{WHITE}" text-anchor="middle">Step 2: add the sides</text>')
    s.append(f'<text x="890" y="200" font-size="26" fill="{WHITE}" text-anchor="middle">c = sqrt(a^2 + b^2)</text>')
    s.append(f'<text x="890" y="260" font-size="26" fill="{WHITE}" text-anchor="middle">c = sqrt(6^2 + 8^2)</text>')
    s.append(f'<text x="890" y="320" font-size="26" fill="{WHITE}" text-anchor="middle">c = sqrt(36 + 64) = 10</text>')
    s.append(f'<text x="890" y="400" font-size="26" fill="{WHITE}" text-anchor="middle">P = 6 + 8 + 10</text>')
    s.append(f'<text x="890" y="480" font-size="52" font-weight="700" fill="{GOLD}" text-anchor="middle">P = 24</text>')
    s.append(f'<text x="890" y="540" font-size="20" fill="{GRAY}" text-anchor="middle">the missing side comes first,</text>')
    s.append(f'<text x="890" y="570" font-size="20" fill="{GRAY}" text-anchor="middle">then the perimeter follows</text>')
    s.append(footer())
    return '\n'.join(s)


# ---------------------------------------------------------------- Diagram 3: perimeter vs area
def diagram3():
    s = [header('Perimeter vs. Area: Outside Boundary vs. Inside Surface')]
    # 3-4-5 scaled by 92: a=276, b=368, c=460
    panels = [
        (20, 64, 'PERIMETER: the walk around', True, False, 'P = 3 + 4 + 5 = 12', 'distance around the edge'),
        (620, 64, 'AREA: the ground inside', False, True, 'K = 3 x 4 / 2 = 6', 'surface inside the boundary'),
    ]
    for (px, py, title, hl_boundary, shade, formula, sub) in panels:
        s.append(f'<rect x="{px}" y="{py}" width="560" height="548" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
        s.append(f'<text x="{px+280}" y="{py+44}" font-size="23" font-weight="700" fill="{GOLD}" text-anchor="middle">{title}</text>')
        ax, ay = px + 96, py + 470
        cx, cy = px + 464, py + 470
        bx, by = px + 464, py + 194
        if shade:
            s.append(f'<polygon points="{ax},{ay} {bx},{by} {cx},{cy}" fill="{GOLD}" fill-opacity="0.22"/>')
        else:
            s.append(f'<polygon points="{ax},{ay} {bx},{by} {cx},{cy}" fill="{WHITE}" fill-opacity="0.05"/>')
        if hl_boundary:
            s.append(boundary_trace(ax, ay, bx, by, cx, cy))
        s.append(f'<line x1="{ax}" y1="{ay}" x2="{cx}" y2="{cy}" stroke="{GREEN}" stroke-width="7" stroke-linecap="round"/>')
        s.append(f'<line x1="{cx}" y1="{cy}" x2="{bx}" y2="{by}" stroke="{BLUE}" stroke-width="7" stroke-linecap="round"/>')
        s.append(f'<line x1="{ax}" y1="{ay}" x2="{bx}" y2="{by}" stroke="{GOLD}" stroke-width="7" stroke-linecap="round"/>')
        for (x, y, t) in [(ax - 24, ay + 2, 'A'), (cx + 26, cy + 2, 'C'), (bx + 2, by - 26, 'B')]:
            s.append(f'<circle cx="{x}" cy="{y}" r="8" fill="{GOLD}"/>')
            s.append(f'<text x="{x}" y="{y+8}" font-size="22" font-weight="700" fill="#131313" text-anchor="middle">{t}</text>')
        s.append(f'<text x="{(ax+cx)/2}" y="{cy+40}" font-size="23" font-weight="700" fill="{GREEN}" text-anchor="middle">b = 4</text>')
        s.append(f'<text x="{bx+30}" y="{(by+cy)/2+8}" font-size="23" font-weight="700" fill="{BLUE}" text-anchor="start">a = 3</text>')
        s.append(f'<text x="{(ax+bx)/2-52}" y="{(ay+by)/2-10}" font-size="23" font-weight="700" fill="{GOLD}" text-anchor="middle">c = 5</text>')
        s.append(right_marker(cx, cy, 22, 'tl'))
        s.append(f'<text x="{px+280}" y="{py+500}" font-size="30" font-weight="700" fill="{WHITE}" text-anchor="middle">{formula}</text>')
        s.append(f'<text x="{px+280}" y="{py+532}" font-size="19" fill="{GRAY}" text-anchor="middle">{sub}</text>')
    s.append(footer())
    return '\n'.join(s)


# ---------------------------------------------------------------- Diagram 4: practical four-panel
def diagram4():
    s = [header('Four Real-World Right Triangle Perimeter Calculations')]
    panels = [
        # px, py, title, a, b, c, P, unit, scale
        (20, 68, 'Triangular window frame', 3, 4, 5, 12, 'm', 34),
        (620, 68, 'Roof edge trim', 6, 8, 10, 24, 'ft', 20),
        (20, 336, 'Garden border', 7, 24, 25, 56, 'm', 7.2),
        (620, 336, 'Steel support bracket', 8, 15, 17, 40, 'cm', 12),
    ]
    for (px, py, title, sa, sb, sc, P, unit, k) in panels:
        w, h = 560, 230
        s.append(f'<rect x="{px}" y="{py}" width="{w}" height="{h}" rx="12" fill="{PANEL}" stroke="#2e2c2c"/>')
        s.append(f'<text x="{px+24}" y="{py+36}" font-size="22" font-weight="700" fill="{WHITE}">{title}</text>')
        base_y = py + 200
        A_x = px + 40
        b_px, a_px = sb * k, sa * k
        C_x, B_x = A_x + b_px, A_x + b_px
        B_y = base_y - a_px
        s.append(boundary_trace(A_x, base_y, B_x, B_y, C_x, base_y, width=10, opacity='0.22'))
        s.append(f'<polygon points="{A_x},{base_y} {B_x},{B_y} {C_x},{base_y}" fill="{WHITE}" fill-opacity="0.05"/>')
        s.append(f'<line x1="{A_x}" y1="{base_y}" x2="{C_x}" y2="{base_y}" stroke="{BLUE}" stroke-width="5" stroke-linecap="round"/>')
        s.append(f'<line x1="{C_x}" y1="{base_y}" x2="{B_x}" y2="{B_y}" stroke="{GREEN}" stroke-width="5" stroke-linecap="round"/>')
        s.append(f'<line x1="{A_x}" y1="{base_y}" x2="{B_x}" y2="{B_y}" stroke="{GOLD}" stroke-width="6" stroke-linecap="round"/>')
        s.append(right_marker(C_x, base_y, 15, 'tl'))
        for (x, y) in [(A_x, base_y), (C_x, base_y), (B_x, B_y)]:
            s.append(f'<circle cx="{x}" cy="{y}" r="6" fill="{GOLD}"/>')
        tx = px + 272
        s.append(f'<text x="{tx}" y="{py+72}" font-size="19" fill="{WHITE}" text-anchor="start">a = {sa} {unit}</text>')
        s.append(f'<text x="{tx}" y="{py+102}" font-size="19" fill="{WHITE}" text-anchor="start">b = {sb} {unit}</text>')
        s.append(f'<text x="{tx}" y="{py+132}" font-size="19" fill="{WHITE}" text-anchor="start">c = {sc} {unit}</text>')
        s.append(f'<text x="{tx}" y="{py+176}" font-size="21" font-weight="700" fill="{GOLD}" text-anchor="start">P = {sa} + {sb} + {sc} = {P} {unit}</text>')
    s.append(footer())
    return '\n'.join(s)


if __name__ == '__main__':
    diagrams = {
        'perimeter-anatomy.svg': diagram1(),
        'missing-hypotenuse.svg': diagram2(),
        'perimeter-vs-area.svg': diagram3(),
        'practical-four-panel.svg': diagram4(),
    }
    for name, svg in diagrams.items():
        path = os.path.join(OUT, name)
        with open(path, 'w') as f:
            f.write(svg)
        print('wrote', path, len(svg), 'bytes')
