#!/usr/bin/env python3
"""Page 25 parity check: extract all [[[...]]]/[[...]] math segments from the EN
guide (PerimeterGuide.astro) and each locale batch file, normalize backslash
runs, and require the sorted multisets to be identical. Reports defects:
- missing/extra segments per locale
- }}} triple-closing-brace runs (EN has zero; any in a fragment is a bug)
- 4-backslash runs in .ts source (should be exactly 2 per LaTeX command)
"""
import re, sys, glob, os

BASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
EN = os.path.join(BASE, 'theme', 'components', 'PerimeterGuide.astro')

SEG = re.compile(r'\[\[\[.+?\]\]\]|\[\[.+?\]\]', re.S)

def segments(text):
    return SEG.findall(text)

def norm(seg):
    # collapse backslash runs to a single backslash for comparison
    return re.sub(r'\\+', '\\\\', seg)

def main():
    en_text = open(EN, encoding='utf-8').read()
    en_segs = sorted(norm(s) for s in segments(en_text))
    print(f'EN segments: {len(en_segs)}')
    ok = True
    files = sorted(glob.glob(os.path.join(BASE, 'src', 'data', 'perimeterGuideTranslations.b[1-6][a-z][a-z].ts')))
    print(f'locale files: {len(files)}')
    for f in files:
        t = open(f, encoding='utf-8').read()
        loc = os.path.basename(f)
        segs = sorted(norm(s) for s in segments(t))
        if segs != en_segs:
            ok = False
            only_en = [s for s in en_segs if s not in segs]
            only_loc = [s for s in segs if s not in en_segs]
            print(f'MISMATCH {loc}: en={len(en_segs)} loc={len(segs)} '
                  f'missing={len(only_en)} extra={len(only_loc)}')
            for s in only_en[:5]:
                print(f'   missing: {s[:90]}')
            for s in only_loc[:5]:
                print(f'   extra:   {s[:90]}')
        if '}}}' in t:
            # find which segments contain it
            bad = [s for s in segments(t) if '}}}' in s]
            print(f'  TRIPLE-BRACE defect in {loc}: {len(bad)} segment(s)')
            ok = False
        # 4+ backslash runs in source (should be exactly 2)
        if re.search(r'\\\\{4,}', t):
            print(f'  OVER-ESCAPED backslashes in {loc}')
            ok = False
    # EN itself must have no }}} runs
    if '}}}' in en_text:
        print('EN CONTAINS }}} — unexpected')
        ok = False
    print('PARITY OK' if ok else 'PARITY FAILED')
    sys.exit(0 if ok else 1)

if __name__ == '__main__':
    main()
