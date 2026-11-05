#!/usr/bin/env python3
"""
gen_page31_guide.py
Builds Page 31 (Right Triangle Leg A From Projection Calculator) guide files from
the EN + 18 locale JSON sources in the goal hidden_files/page31 directory.

Outputs:
  theme/components/LegAFromProjectionGuide.astro          (EN, hardcoded)
  theme/components/LegAFromProjectionGuideLocalized.astro (data-driven, static template)
  src/data/legAFromProjectionGuideTranslations.ts         (index)
  src/data/legAFromProjectionGuideTranslations.batch{1..6}.ts
  src/data/legAFromProjectionGuideTranslations.b{N}{cc}.ts (18 locale files)

The localized .astro is written from a fixed template string (LOCALIZED_TEMPLATE).
The EN .astro is generated from the EN JSON (static HTML + rich() calls).
"""
import json
import os
import re
import html

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = "/home/hatch/workspace/goals/right-triangle-solver-45-page-content-pipeline/hidden_files/page31"

LOCALES = ["hi", "es", "ru", "fr", "de", "it", "pt", "bn", "ja", "ko",
           "ms", "pl", "id", "ar", "bg", "tr", "sv", "zh"]

# batch -> [(locale, const_name)]
BATCHES = {
    1: [("hi", "LAP_B1_HI"), ("es", "LAP_B1_ES"), ("ru", "LAP_B1_RU")],
    2: [("de", "LAP_B2_DE"), ("fr", "LAP_B2_FR"), ("it", "LAP_B2_IT")],
    3: [("bn", "LAP_B3_BN"), ("ja", "LAP_B3_JA"), ("pt", "LAP_B3_PT")],
    4: [("ko", "LAP_B4_KO"), ("ms", "LAP_B4_MS"), ("pl", "LAP_B4_PL")],
    5: [("id", "LAP_B5_ID"), ("ar", "LAP_B5_AR"), ("bg", "LAP_B5_BG")],
    6: [("tr", "LAP_B6_TR"), ("sv", "LAP_B6_SV"), ("zh", "LAP_B6_ZH")],
}

SECTION_ORDER = [
    "sec-intro",
    "sec-calculate",
    "sec-what-leg-a",
    "sec-what-projection-p",
    "sec-formula",
    "sec-why-sqrt",
    "sec-how",
    "sec-step-example",
    "sec-diagram",
    "sec-proof",
    "sec-examples",
    "sec-other-projection",
    "sec-relationship",
    "sec-leg-b",
    "sec-pythagoras",
    "sec-verify",
    "sec-properties",
    "sec-mistakes",
    "sec-applications",
    "sec-practice",
]
TOC_ORDER = [
    "sec-intro",
    "sec-calculate",
    "sec-what-leg-a",
    "sec-what-projection-p",
    "sec-formula",
    "sec-why-sqrt",
    "sec-how",
    "sec-step-example",
    "sec-diagram",
    "sec-proof",
    "sec-examples",
    "sec-other-projection",
    "sec-relationship",
    "sec-leg-b",
    "sec-pythagoras",
    "sec-verify",
    "sec-properties",
    "sec-mistakes",
    "sec-applications",
    "sec-practice",
    "sec-related",
    "sec-faq",
]

RELATED_URLS = [
    "/right-triangle-projection-calculator/",
    "/right-triangle-projection-p-calculator/",
    "/right-triangle-projection-q-calculator/",
    "/right-triangle-leg-b-from-projection-calculator/",
    "/right-triangle-hypotenuse-from-projections-calculator/",
    "/right-triangle-altitude-from-projections-calculator/",
    "/right-triangle-side-calculator/",
]

MATH_RE = re.compile(r"\[\[\[.+?\]\]\]|\[\[.+?\]\]", re.DOTALL)


def ts_str(s):
    """Render a Python string as a TS double-quoted string literal."""
    out = json.dumps(s, ensure_ascii=False)
    out = out.replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")
    return out


def ts_value(v, indent):
    pad = "  " * indent
    if isinstance(v, dict):
        if not v:
            return "{}"
        parts = ["{"]
        for k, val in v.items():
            parts.append(f"{pad}  {ts_str(k)}: {ts_value(val, indent + 1)},")
        parts.append(pad + "}")
        return "\n".join(parts)
    if isinstance(v, list):
        if not v:
            return "[]"
        parts = ["["]
        for item in v:
            parts.append(f"{pad}  {ts_value(item, indent + 1)},")
        parts.append(pad + "]")
        return "\n".join(parts)
    if isinstance(v, str):
        return ts_str(v)
    raise TypeError(f"unsupported: {type(v)}")


def js_single_quoted(s):
    """Render a string as a JS single-quoted literal (for .astro rich('...'))."""
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n") + "'"


ANCHOR_RE = re.compile(r'<a href="[^"]*">.*?</a>')


def prose_html(text):
    """Escape prose HTML but keep author-controlled <a href> links raw.

    Internal guide links are authored as literal <a href="/...">...</a> in the
    JSON source (and render raw in the localized components via set:html),
    so the EN generator must not escape them either.
    """
    out = []
    pos = 0
    for m in ANCHOR_RE.finditer(text):
        out.append(html.escape(text[pos:m.start()], quote=False))
        out.append(m.group(0))
        pos = m.end()
    out.append(html.escape(text[pos:], quote=False))
    return "".join(out)


def mixed_html(text):
    """Split text on [[...]]/[[[...]]] segments; prose -> escaped HTML, math -> rich() span."""
    out = []
    pos = 0
    for m in MATH_RE.finditer(text):
        if m.start() > pos:
            out.append(prose_html(text[pos:m.start()]))
        out.append(f"<span set:html={{rich({js_single_quoted(m.group(0))})}} />")
        pos = m.end()
    if pos < len(text):
        out.append(prose_html(text[pos:]))
    return "".join(out)


def attr_escape(s):
    return html.escape(s, quote=True)


RICH_FN = """const rich = (s: string): string => {
  if (!s || typeof s !== 'string') return '';
  let out = s;
  out = out.replace(
    /\\[\\[\\[(.+?)\\]\\]\\]/g,
    (_, l) =>
      `<div dir="ltr" class="katex-block">${katex.renderToString(l, { throwOnError: false, displayMode: true })}</div>`
  );
  // Keep a trailing period glued to inline math (prevents orphaned "." on mobile wraps)
  out = out.replace(
    /\\[\\[((?:(?!\\[\\[|\\]\\]).)+?)\\]\\]\\./g,
    (_, l) =>
      `<span dir="ltr" class="math-nowrap"><span class="math-textbook">${katex.renderToString(l, { throwOnError: false, displayMode: false })}</span>.</span>`
  );
  out = out.replace(
    /\\[\\[(.+?)\\]\\]/g,
    (_, l) =>
      `<span dir="ltr" class="math-textbook">${katex.renderToString(l, { throwOnError: false, displayMode: false })}</span>`
  );
  return out;
};"""


def build_en_astro(en):
    L = []
    L.append("---")
    L.append("/**")
    L.append(" * LegAFromProjectionGuide.astro - Educational guide for the Right Triangle")
    L.append(" * Altitude Calculator page.")
    L.append(" * Page 31 of 45. Written strictly from the page-31-leg-a-from-projection.txt master prompt. EN-only.")
    L.append(" * Generated by tools/gen_page31_guide.py from the EN JSON source; do not hand-edit.")
    L.append(" */")
    L.append("import katex from 'katex';")
    L.append("import Faq from 'theme/components/Faq.astro';")
    L.append("")
    L.append(RICH_FN)
    L.append("")
    L.append("const imgSrc = (name: string): string => `/images/leg-a-from-projection/${name}`;")
    L.append("---")
    L.append("")
    # TOC
    L.append("<!-- Section Navigation -->")
    L.append('<nav class="surface-card p-5 mb-10 mx-auto mt-12 w-full max-w-4xl" aria-label="Guide contents">')
    L.append(f'  <h2 class="text-on-surface !mt-0 text-xl">{html.escape(en["tocHeading"], quote=False)}</h2>')
    L.append('  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">')
    for sid in TOC_ORDER:
        label = en["tocItems"][sid]
        L.append(f'    <a href="#{sid}" class="no-underline px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-colors text-primary underline">{mixed_html(label)}</a>')
    L.append("  </div>")
    L.append("</nav>")
    L.append("")
    # content sections, then related, then faq
    ordered = list(SECTION_ORDER)
    for n, sid in enumerate(ordered, 1):
        L.extend(render_section_en(n, sid, en["sections"][sid]))
    L.extend(render_related_en(en))
    L.extend(render_faq_en(en))
    # page 30 has no sec-conclusion; related + faq render above
    return "\n".join(L) + "\n"


def render_section_en(n, sid, s):
    L = []
    L.append(f"<!-- Section {n}: {sid} -->")
    L.append(f'<section id="{sid}" class="mx-auto mt-12 w-full max-w-4xl section-shell prose-shell scroll-mt-24">')
    L.append(f"  <h2>{mixed_html(s['h2'])}</h2>")
    for block in s.get("blocks", []):
        kind = block["kind"]
        if kind == "p":
            L.append(f"  <p>{mixed_html(block['text'])}</p>")
        elif kind == "h3":
            L.append(f"  <h3>{mixed_html(block['text'])}</h3>")
        elif kind == "steps":
            L.append("  <ol>")
            for item in block["steps"]:
                L.append(f"    <li>{mixed_html(item)}</li>")
            L.append("  </ol>")
        elif kind == "list":
            L.append("  <ul>")
            for item in block["items"]:
                L.append(f"    <li>{mixed_html(item)}</li>")
            L.append("  </ul>")
        else:
            raise ValueError(f"unknown block kind {kind}")
    tbl = s.get("table")
    if tbl:
        L.append('  <div class="not-prose overflow-x-auto my-6">')
        L.append('    <table class="w-full text-sm my-6 border-collapse">')
        L.append("      <thead>")
        ths = "".join(f'<th class="border-gray-600 px-4 py-2">{mixed_html(h)}</th>' for h in tbl["headers"])
        L.append(f"        <tr>{ths}</tr>")
        L.append("      </thead>")
        L.append("      <tbody>")
        for row in tbl["rows"]:
            tds = "".join(f'<td class="border-gray-600 px-4 py-2">{mixed_html(c)}</td>' for c in row)
            L.append(f"        <tr>{tds}</tr>")
        L.append("      </tbody>")
        L.append("    </table>")
        L.append("  </div>")
    img = s.get("image")
    if img:
        L.append('  <figure class="not-prose my-6">')
        L.append(f'    <img src={{imgSrc({js_single_quoted(img["src"])})}} alt="{attr_escape(img["alt"])}" class="mx-auto h-auto w-full max-w-xl my-8" loading="lazy" />')
        L.append(f'    <figcaption class="mt-2 text-center text-sm text-on-surface-variant">{mixed_html(img["caption"])}</figcaption>')
        L.append("  </figure>")
    L.append("</section>")
    L.append("")
    return L


def render_related_en(en):
    L = []
    L.append("<!-- Related Calculators -->")
    L.append('<section id="sec-related" class="mx-auto mt-12 w-full max-w-4xl section-shell scroll-mt-24">')
    L.append(f'  <h2 class="font-headline text-2xl font-bold text-on-surface">{mixed_html(en["relatedHeading"])}</h2>')
    if en.get("relatedIntro"):
        L.append(f'  <p class="mt-2 max-w-2xl text-sm text-on-surface-variant">{mixed_html(en["relatedIntro"])}</p>')
    L.append('  <ul class="mt-5 grid gap-x-12 sm:grid-cols-2">')
    for i, label in enumerate(en["relatedItems"]):
        num = str(i + 1).zfill(2)
        url = RELATED_URLS[i]
        L.append('    <li class="border-b border-primary/10">')
        L.append(f'      <a href="{url}" class="group flex items-baseline gap-4 py-3.5">')
        L.append(f'        <span class="font-headline text-sm text-primary/70 transition-colors group-hover:text-primary">{num}</span>')
        L.append(f'        <span class="text-[15px] leading-snug text-on-surface transition-colors group-hover:text-primary">{mixed_html(label)}</span>')
        L.append("      </a>")
        L.append("    </li>")
    L.append("  </ul>")
    L.append("</section>")
    L.append("")
    return L


def render_faq_en(en):
    L = []
    L.append("<!-- FAQs -->")
    L.append('<section id="sec-faq" class="mx-auto mt-12 w-full max-w-4xl section-shell prose-shell scroll-mt-24">')
    L.append("  <Faq")
    L.append(f"    heading={js_single_quoted(en['faqHeading'])}")
    L.append("    items={[")
    for f in en["faqs"]:
        L.append("      {")
        L.append(f"        question: {js_single_quoted(f['question'])},")
        L.append(f"        answer: rich({js_single_quoted(f['answer'])})")
        L.append("      },")
    L.append("    ]}")
    L.append("  />")
    L.append("</section>")
    L.append("")
    return L


LOCALIZED_TEMPLATE = """---
/**
 * LegAFromProjectionGuideLocalized.astro - Data-driven localized guide for the
 * Right Triangle Leg A From Projection Calculator page (Page 31 of 45).
 * Renders translated content from LEG_A_FROM_PROJECTION_GUIDE_TRANSLATIONS for 18 locales.
 * English uses the hardcoded LegAFromProjectionGuide.astro; this is for non-English locales.
 * Generated by tools/gen_page31_guide.py; do not hand-edit.
 */
import katex from 'katex';
import Faq from 'theme/components/Faq.astro';

interface Props {
  guide: any;
  locale: string;
}

const { guide: G, locale } = Astro.props;

const rich = (s: string): string => {
  if (!s || typeof s !== 'string') return '';
  let out = s;
  out = out.replace(
    /\\[\\[\\[(.+?)\\]\\]\\]/g,
    (_, l) =>
      `<div dir="ltr" class="katex-block">${katex.renderToString(l, { throwOnError: false, displayMode: true })}</div>`
  );
  // Keep a trailing period glued to inline math (prevents orphaned "." on mobile wraps)
  out = out.replace(
    /\\[\\[((?:(?!\\[\\[|\\]\\]).)+?)\\]\\]\\./g,
    (_, l) =>
      `<span dir="ltr" class="math-nowrap"><span class="math-textbook">${katex.renderToString(l, { throwOnError: false, displayMode: false })}</span>.</span>`
  );
  out = out.replace(
    /\\[\\[(.+?)\\]\\]/g,
    (_, l) =>
      `<span dir="ltr" class="math-textbook">${katex.renderToString(l, { throwOnError: false, displayMode: false })}</span>`
  );
  // Localize internal links for non-English locales
  if (locale !== 'en') {
    out = out.split('href="/').join(`href="/${locale}/`);
  }
  return out;
};

const imgSrc = (name: string): string => `/images/leg-a-from-projection/${name}`;

// Section IDs in order (20 content sections)
const sectionOrder = [
__SECTION_ORDER__
];

// TOC items in order (22 items: 20 sections + related + faq)
const tocOrder = [
__TOC_ORDER__
];

// Fallback label for a TOC entry
const tocLabel = (id: string): string => {
  if (G.tocItems && G.tocItems[id]) return G.tocItems[id];
  if (G.sections && G.sections[id] && G.sections[id].h2) return G.sections[id].h2;
  return id;
};

// Related calculator URLs in order
const relatedUrls = [
__RELATED_URLS__
];
---

<!-- Section Navigation -->
<nav class="surface-card p-5 mb-10 mx-auto mt-12 w-full max-w-4xl" aria-label="Guide contents">
  <h2 class="text-on-surface !mt-0 text-xl">{G.tocHeading || 'Section Navigation'}</h2>
  {G.tocItems && (
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
    {tocOrder.map((id) => (
      <a class="no-underline px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-colors text-primary underline" href={`#${id}`} set:html={rich(tocLabel(id))} />
    ))}
  </div>
  )}
</nav>

<!-- Content Sections -->
{G && sectionOrder.map((sectionId) => {
  const s = G.sections[sectionId];
  if (!s) return null;
  const img = s.image;
  return (
    <section id={sectionId} class="mx-auto mt-12 w-full max-w-4xl section-shell prose-shell scroll-mt-24">
      <h2 set:html={rich(s.h2)} />
      {s.blocks && s.blocks.map((block: any) => {
        if (block.kind === 'h3') {
          return <h3 set:html={rich(block.text)} />;
        } else if (block.kind === 'steps' && block.steps) {
          return (
            <ol>
              {block.steps.map((item: string) => <li set:html={rich(item)} />)}
            </ol>
          );
        } else if (block.kind === 'list' && block.items) {
          return (
            <ul>
              {block.items.map((item: string) => <li set:html={rich(item)} />)}
            </ul>
          );
        } else {
          return <p set:html={rich(block.text)} />;
        }
      })}
      {s.table && s.table.headers && s.table.rows && (
        <div class="not-prose overflow-x-auto my-6">
          <table class="w-full text-sm my-6 border-collapse">
            <thead>
              <tr>
                {s.table.headers.map((h: string) => <th class="border-gray-600 px-4 py-2" set:html={rich(h)} />)}
              </tr>
            </thead>
            <tbody>
              {s.table.rows.map((row: string[]) => (
                <tr>
                  {row.map((cell: string) => (
                    <td class="border-gray-600 px-4 py-2" set:html={rich(cell)} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {img && img.src && (
        <figure class="not-prose my-6">
          <img src={imgSrc(img.src)} alt={img.alt} class="mx-auto h-auto w-full max-w-xl my-8" loading="lazy" />
          {img.caption && <figcaption class="mt-2 text-center text-sm text-on-surface-variant" set:html={rich(img.caption)} />}
        </figure>
      )}
    </section>
  );
})}

<!-- Related Calculators -->
<section id="sec-related" class="mx-auto mt-12 w-full max-w-4xl section-shell scroll-mt-24">
  <h2 class="font-headline text-2xl font-bold text-on-surface">{G.relatedHeading || 'Related Calculators'}</h2>
  {G.relatedIntro && <p class="mt-2 max-w-2xl text-sm text-on-surface-variant" set:html={rich(G.relatedIntro)} />}
  {G.relatedItems && (
  <ul class="mt-5 grid gap-x-12 sm:grid-cols-2">
    {G.relatedItems.map((label: string, i: number) => {
      const num = String(i + 1).padStart(2, '0');
      const url = locale === 'en' ? relatedUrls[i] : `/${locale}${relatedUrls[i]}`;
      return (
        <li class="border-b border-primary/10">
          <a href={url} class="group flex items-baseline gap-4 py-3.5">
            <span class="font-headline text-sm text-primary/70 transition-colors group-hover:text-primary">{num}</span>
            <span class="text-[15px] leading-snug text-on-surface transition-colors group-hover:text-primary" set:html={rich(label)} />
          </a>
        </li>
      );
    })}
  </ul>
  )}
</section>

<!-- FAQs -->
{G.faqs && (
<section id="sec-faq" class="mx-auto mt-12 w-full max-w-4xl section-shell prose-shell scroll-mt-24">
  <Faq
    heading={G.faqHeading || 'FAQs'}
    items={G.faqs.map((f: any) => ({
      question: f.question || f.q,
      answer: rich(f.answer || f.a)
    }))}
  />
</section>
)}
"""


def build_localized_astro():
    sec = ",\n".join(f"  '{s}'" for s in SECTION_ORDER)
    toc = ",\n".join(f"  '{s}'" for s in TOC_ORDER)
    rel = ",\n".join(f"  '{u}'" for u in RELATED_URLS)
    return (LOCALIZED_TEMPLATE
            .replace("__SECTION_ORDER__", sec)
            .replace("__TOC_ORDER__", toc)
            .replace("__RELATED_URLS__", rel))


def build_locale_ts(locale, const_name, data):
    lines = [
        f"// legAFromProjectionGuideTranslations.b{locale}.ts: Right Triangle Leg A From Projection",
        f"// Guide (Page 31 of 45) translation.",
        f"export const {const_name} = {{",
        f"  {ts_str(locale)}: {ts_value(data, 2)},",
        "};",
        "",
    ]
    return "\n".join(lines)


def main():
    en = json.load(open(os.path.join(SRC, "en-guide.json"), encoding="utf-8"))
    # sanity on EN structure
    assert set(en["sections"].keys()) == set(SECTION_ORDER), "EN section mismatch"
    assert len(en["faqs"]) == 12, "EN faq count"

    comp_dir = os.path.join(REPO, "theme", "components")
    data_dir = os.path.join(REPO, "src", "data")

    # 1. EN guide
    en_path = os.path.join(comp_dir, "LegAFromProjectionGuide.astro")
    with open(en_path, "w", encoding="utf-8") as f:
        f.write(build_en_astro(en))
    print("wrote", en_path)

    # 2. Localized guide
    loc_path = os.path.join(comp_dir, "LegAFromProjectionGuideLocalized.astro")
    with open(loc_path, "w", encoding="utf-8") as f:
        f.write(build_localized_astro())
    print("wrote", loc_path)

    # 3. Locale files + batches + index
    batch_consts = {}
    for bnum, members in BATCHES.items():
        imports = []
        spreads = []
        for locale, const in members:
            data = json.load(open(os.path.join(SRC, f"{locale}.json"), encoding="utf-8"))
            assert set(data["sections"].keys()) == set(SECTION_ORDER), f"{locale} section mismatch"
            assert len(data["faqs"]) == 12, f"{locale} faq count"
            fname = f"legAFromProjectionGuideTranslations.b{bnum}{locale}.ts"
            with open(os.path.join(data_dir, fname), "w", encoding="utf-8") as f:
                f.write(build_locale_ts(locale, const, data))
            print("wrote", fname)
            imports.append(f"import {{ {const} }} from './legAFromProjectionGuideTranslations.b{bnum}{locale}';")
            spreads.append(f"  ...{const},")
        batch_const = f"LEG_A_FROM_PROJECTION_TRANSLATIONS_BATCH{bnum}"
        batch_consts[bnum] = batch_const
        bpath = os.path.join(data_dir, f"legAFromProjectionGuideTranslations.batch{bnum}.ts")
        with open(bpath, "w", encoding="utf-8") as f:
            f.write("/**\n")
            f.write(f" * legAFromProjectionGuideTranslations.batch{bnum}.ts\n")
            f.write(" * Right Triangle Leg A From Projection Guide (Page 31 of 45) translations.\n")
            f.write(" */\n\n")
            f.write("\n".join(imports) + "\n\n")
            f.write(f"export const {batch_const} = {{\n")
            f.write("\n".join(spreads) + "\n")
            f.write("};\n")
        print("wrote", bpath)

    idx = os.path.join(data_dir, "legAFromProjectionGuideTranslations.ts")
    with open(idx, "w", encoding="utf-8") as f:
        f.write("/**\n")
        f.write(" * legAFromProjectionGuideTranslations.ts\n")
        f.write(" * Complete translations of the Right Triangle Leg A From Projection Calculator guide\n")
        f.write(" * (LegAFromProjectionGuide.astro) - Page 31 of 45. All 18 locales.\n")
        f.write(" */\n\n")
        for bnum in sorted(batch_consts):
            f.write(f"import {{ {batch_consts[bnum]} }} from './legAFromProjectionGuideTranslations.batch{bnum}';\n")
        f.write("\nexport const LEG_A_FROM_PROJECTION_GUIDE_TRANSLATIONS = {\n")
        for bnum in sorted(batch_consts):
            f.write(f"  ...{batch_consts[bnum]},\n")
        f.write("};\n")
    print("wrote", idx)


if __name__ == "__main__":
    main()
