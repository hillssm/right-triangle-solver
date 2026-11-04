#!/usr/bin/env python3
"""Mechanical KaTeX brace repair for Page 25 locale files.
Fixes the two defect classes reproduced from the EN source:
 1. inline [[...}}]] (extra } before ]]) -> [[...}]]
 2. display [[[\\boxed{...}}]]] with one extra } -> balanced
Then validates brace balance on every segment. Usage: fix_page25_braces.py <file>...
"""
import re, sys

def depth_of(inner_escaped):
    inner = inner_escaped.replace('\\\\', '\\')
    d = 0; mn = 0
    for ch in inner:
        if ch == '{': d += 1
        elif ch == '}': d -= 1; mn = min(mn, d)
    return d, mn

def fix_display(m):
    full = m.group(0)
    inner = full[3:-3]
    d, mn = depth_of(inner)
    if d == -1 and mn == -1:
        idx = inner.rfind('}')
        inner = inner[:idx] + inner[idx+1:]
        d2, _ = depth_of(inner)
        assert d2 == 0, f'still bad: {inner[:80]}'
        return '[[[' + inner + ']]]'
    return full

def main():
    for p in sys.argv[1:]:
        t = open(p, encoding='utf-8').read()
        t, n1 = re.subn(r'\}\}\]\](?!\])', '}]]', t)
        t, n2 = re.subn(r'\[\[\[.+?\]\]\]', fix_display, t, flags=re.S)
        open(p, 'w', encoding='utf-8').write(t)
        SEG = re.compile(r'\[\[\[.+?\]\]\]|\[\[.+?\]\]', re.S)
        bad = 0
        for m in SEG.finditer(t):
            seg = m.group(0)
            inner = seg[3:-3] if seg.startswith('[[[') else seg[2:-2]
            d, mn = depth_of(inner)
            if d != 0 or mn < 0:
                bad += 1
                print(f'{p}: STILL BAD: {seg[:100]}')
        print(f'{p}: inline fixes={n1}, balanced-ok={bad==0}')

if __name__ == '__main__':
    main()
