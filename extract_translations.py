import json
import re

logs = [
    r"C:\Users\Lenovo\.gemini\antigravity\brain\95c12bcb-40e1-4554-8d87-dd4459a5811a\.system_generated\logs\transcript.jsonl",
    r"C:\Users\Lenovo\.gemini\antigravity\brain\4af26ff7-e7f9-482d-b96e-60f70e52b213\.system_generated\logs\transcript.jsonl"
]

translations = {}
# structure:
# translations[locale][slug] = {
#     slug, url, h1, metaTitle, metaDescription, 
#     intro: [...], faqs: [{question, answer}]
# }

current_locale = None

for log_path in logs:
    with open(log_path, "r", encoding="utf-8") as f:
        for line in f:
            data = json.loads(line)
            if data.get("source") == "MODEL" and data.get("type") == "PLANNER_RESPONSE":
                content = data.get("content", "")
                
                # Check for language batch
                match = re.search(r'### \d+\. [^(]+\(([^)]+)\)', content)
                if match:
                    current_locale = match.group(1).strip()
                    if current_locale not in translations:
                        translations[current_locale] = {}

                if not current_locale:
                    continue

                # Parse the pages
                # The pages are separated by "#### Page"
                pages = re.split(r'#### Page \d+:', content)
                for page_block in pages[1:]:
                    lines = page_block.strip().split('\n')
                    
                    slug = ""
                    url = ""
                    h1 = ""
                    metaTitle = ""
                    metaDescription = ""
                    intro = []
                    faqs = []
                    
                    current_section = None
                    
                    for l in lines:
                        l = l.strip()
                        if not l: continue
                        
                        if "**URL:**" in l:
                            url = l.split("**URL:**")[1].strip().strip('`')
                            slug = url.strip('/').split('/')[-1]
                        elif "**Meta title:**" in l:
                            metaTitle = l.split("**Meta title:**")[1].strip()
                        elif "**Meta description:**" in l:
                            metaDescription = l.split("**Meta description:**")[1].strip()
                        elif "**H1:**" in l:
                            h1 = l.split("**H1:**")[1].strip()
                        elif l.startswith("**Intro:**"):
                            current_section = "intro"
                            intro_text = l.replace("**Intro:**", "").strip()
                            if intro_text:
                                intro.append(intro_text)
                        elif l.startswith("**FAQs:**"):
                            current_section = "faqs"
                        elif current_section == "intro":
                            if l.startswith("**"): 
                                current_section = None
                                continue
                            intro.append(l)
                        elif current_section == "faqs":
                            if l.startswith("Q:"):
                                faqs.append({"question": l[2:].strip(), "answer": ""})
                            elif l.startswith("A:"):
                                if faqs:
                                    faqs[-1]["answer"] = l[2:].strip()
                            elif l and faqs and not l.startswith("**"):
                                faqs[-1]["answer"] += " " + l
                    
                    if slug:
                        translations[current_locale][slug] = {
                            "slug": slug,
                            "url": url,
                            "h1": h1,
                            "metaTitle": metaTitle,
                            "metaDescription": metaDescription,
                            "intro": intro,
                            "faqs": faqs
                        }

# Write out to a ts file format
with open("test_extract.json", "w", encoding="utf-8") as out:
    json.dump(translations, out, indent=2, ensure_ascii=False)

print("Extracted translations for locales:", list(translations.keys()))
