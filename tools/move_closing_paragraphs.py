#!/usr/bin/env python3
"""Move the trailing closing paragraph of sec-examples and sec-applications
into closingParagraphs (rendered after the table, matching EN order).
String-aware surgical edit; verifies kind=="p" before moving.
Usage: move_closing_paragraphs.py <file>...
"""
import sys

def find_matching(text, start, open_ch, close_ch):
    """start at index of open_ch; return index of matching close_ch (string-aware)."""
    depth = 0
    in_str = False
    esc = False
    i = start
    while i < len(text):
        ch = text[i]
        if in_str:
            if esc:
                esc = False
            elif ch == '\\':
                esc = True
            elif ch == '"':
                in_str = False
        else:
            if ch == '"':
                in_str = True
            elif ch == open_ch:
                depth += 1
            elif ch == close_ch:
                depth -= 1
                if depth == 0:
                    return i
        i += 1
    raise ValueError('no match')

def split_top_level_array(text, arr_start, arr_end):
    """Yield (start, end) of top-level {...} items between [ and ]."""
    items = []
    i = arr_start + 1
    n = arr_end
    while i < n:
        # skip whitespace, commas
        while i < n and text[i] in ' \t\n\r,':
            i += 1
        if i >= n or text[i] != '{':
            break
        j = find_matching(text, i, '{', '}')
        items.append((i, j))
        i = j + 1
    return items

def get_text_raw(item_text):
    """Extract raw quoted value of "text" key (including quotes)."""
    k = item_text.find('"text"')
    assert k >= 0
    c = item_text.find(':', k)
    q1 = item_text.find('"', c)
    q2 = find_matching_quote(item_text, q1)
    return item_text[q1:q2+1]

def find_matching_quote(text, q1):
    i = q1 + 1
    while i < len(text):
        if text[i] == '\\':
            i += 2
            continue
        if text[i] == '"':
            return i
        i += 1
    raise ValueError('unterminated string')

def process_file(path):
    t = open(path, encoding='utf-8').read()
    changed = 0
    for sec in ['sec-examples', 'sec-applications']:
        key = f'"{sec}": {{'
        si = t.find(key)
        assert si >= 0, f'{sec} not found in {path}'
        brace_open = t.find('{', si)
        sec_end = find_matching(t, brace_open, '{', '}')
        # find blocks array
        bk = t.find('"blocks"', brace_open, sec_end)
        assert bk >= 0
        ab = t.find('[', bk)
        ae = find_matching(t, ab, '[', ']')
        items = split_top_level_array(t, ab, ae)
        assert items, 'no blocks'
        li, lj = items[-1]
        last_item = t[li:lj+1]
        assert '"kind"' in last_item and '"p"' in last_item.split('"text"')[0], \
            f'last block not p in {path} {sec}: {last_item[:80]}'
        text_raw = get_text_raw(last_item)
        # remove last item (+ preceding comma/whitespace)
        pre = t[ab:li]
        # find last comma before li within array
        new_pre = pre.rstrip()
        assert new_pre.endswith(','), 'expected comma before last item'
        new_pre = new_pre[:-1]
        t = t[:ab] + new_pre + t[lj+1:]
        # recompute section end (positions shifted)
        si = t.find(key)
        brace_open = t.find('{', si)
        sec_end = find_matching(t, brace_open, '{', '}')
        # find table object end
        tk = t.find('"table"', brace_open, sec_end)
        assert tk >= 0
        tob = t.find('{', tk)
        toe = find_matching(t, tob, '{', '}')
        indent = '        '
        insertion = f',\n{indent}"closingParagraphs": [{text_raw}]'
        t = t[:toe+1] + insertion + t[toe+1:]
        changed += 1
    open(path, 'w', encoding='utf-8').write(t)
    print(f'{path}: moved closing paragraphs in {changed} sections')

if __name__ == '__main__':
    for p in sys.argv[1:]:
        process_file(p)
