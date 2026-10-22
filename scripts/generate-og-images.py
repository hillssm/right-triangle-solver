#!/usr/bin/env python3
"""Generate per-post Open Graph PNGs (1200x630) from blog hero SVGs.

For every src/blog/*.mdx, reads the frontmatter `image` (an SVG under
public/), renders it at width 1200, fits it onto a 1200x630 canvas in the
site's dark navy (#0f172a), and writes public/images/og/<slug>.png.

Blog pages reference /images/og/<slug>.png when it exists and fall back
to the site-wide default og image otherwise, so run this once per new
post (it regenerates all posts; existing PNGs are overwritten).

Usage: python3 scripts/generate-og-images.py
Requires: cairosvg, Pillow.
"""
import io
import os
import re
import sys

import cairosvg
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG_DIR = os.path.join(ROOT, "src", "blog")
PUBLIC_DIR = os.path.join(ROOT, "public")
OUT_DIR = os.path.join(PUBLIC_DIR, "images", "og")
W, H = 1200, 630
BG = (15, 23, 42)  # #0f172a, matches the hero SVGs' background end-stop


def main() -> int:
    os.makedirs(OUT_DIR, exist_ok=True)
    made, skipped = 0, 0
    for name in sorted(os.listdir(BLOG_DIR)):
        if not name.endswith(".mdx"):
            continue
        slug = name[:-4]
        text = open(os.path.join(BLOG_DIR, name), encoding="utf-8").read()
        m = re.search(r'^image:\s*"([^"]+)"', text, re.M)
        if not m:
            print(f"SKIP {slug}: no image in frontmatter")
            skipped += 1
            continue
        svg_path = os.path.join(PUBLIC_DIR, m.group(1).lstrip("/"))
        if not os.path.exists(svg_path):
            print(f"SKIP {slug}: hero not found at {m.group(1)}")
            skipped += 1
            continue
        png_bytes = cairosvg.svg2png(url=svg_path, output_width=W)
        img = Image.open(io.BytesIO(png_bytes)).convert("RGB")
        if img.width != W:
            img = img.resize((W, round(img.height * W / img.width)))
        canvas = Image.new("RGB", (W, H), BG)
        if img.height >= H:
            top = (img.height - H) // 2
            img = img.crop((0, top, W, top + H))
            canvas.paste(img, (0, 0))
        else:
            canvas.paste(img, (0, (H - img.height) // 2))
        out = os.path.join(OUT_DIR, f"{slug}.png")
        canvas.save(out, optimize=True)
        print(f"OK   {slug}: {canvas.size} -> images/og/{slug}.png")
        made += 1
    print(f"Done: {made} generated, {skipped} skipped")
    return 0 if made else 1


if __name__ == "__main__":
    sys.exit(main())
