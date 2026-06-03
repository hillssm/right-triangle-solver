import json

data = json.load(open('test_extract.json', encoding='utf-8'))

ts_content = """// Generated localized copy for focused trig ratio calculator pages.
// Partial translations fallback to English in the getter.

export const FOCUSED_TRIG_RATIO_CALCULATOR_TRANSLATIONS = {
"""

for loc, pages in data.items():
    ts_content += f'  "{loc}": {{\n'
    for slug, page in pages.items():
        if not slug: continue
        ts_content += f'    "{slug}": {{\n'
        ts_content += f'      slug: "{slug}",\n'
        
        url = page.get("url", "")
        if url:
            ts_content += f'      url: "{url}",\n'
            
        h1 = page.get("h1", "")
        if h1:
            h1_escaped = h1.replace('"', '\\"')
            ts_content += f'      h1: "{h1_escaped}",\n'
            
        metaTitle = page.get("metaTitle", "")
        if metaTitle:
            metaTitle_escaped = metaTitle.replace('"', '\\"')
            ts_content += f'      metaTitle: "{metaTitle_escaped}",\n'
            
        metaDescription = page.get("metaDescription", "")
        if metaDescription:
            metaDescription_escaped = metaDescription.replace('"', '\\"')
            ts_content += f'      metaDescription: "{metaDescription_escaped}",\n'
            
        intro = page.get("intro", [])
        if intro:
            ts_content += '      intro: [\n'
            for p in intro:
                p_escaped = p.replace('"', '\\"')
                ts_content += f'        "{p_escaped}",\n'
            ts_content += '      ],\n'
            
        faqs = page.get("faqs", [])
        if faqs:
            ts_content += '      faqs: [\n'
            for faq in faqs:
                q = faq.get("question", "").replace('"', '\\"')
                a = faq.get("answer", "").replace('"', '\\"')
                ts_content += '        {\n'
                ts_content += f'          question: "{q}",\n'
                ts_content += f'          answer: "{a}"\n'
                ts_content += '        },\n'
            ts_content += '      ]\n'
            
        ts_content += '    },\n'
    ts_content += '  },\n'

ts_content += "};\n"

with open(r'C:\Users\Lenovo\OneDrive\Documents\GitHub\right triangle solver\src\data\focusedTrigRatioCalculatorTranslations.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Generated focusedTrigRatioCalculatorTranslations.ts")
