import json
import time
import re
import os
from deep_translator import GoogleTranslator
import sys

google_lang_map = {
    'zh': 'zh-CN'
}

def extract_tags(text):
    if not isinstance(text, str):
        return text, []
    tags = []
    def replacer(match):
        tags.append(match.group(0))
        return f"[[{len(tags)-1}]]"
    placeholder_text = re.sub(r'<[^>]+>', replacer, text)
    return placeholder_text, tags

def restore_tags(text, tags):
    if not isinstance(text, str) or not tags:
        return text
    translated = text
    for i, tag in enumerate(tags):
        pattern = r'\[\s*\[\s*' + str(i) + r'\s*\]\s*\]'
        translated = re.sub(pattern, tag, translated)
    return translated

def extract_all_strings(obj, paths=None, current_path=""):
    if paths is None:
        paths = []
    if isinstance(obj, str):
        paths.append((current_path, obj))
    elif isinstance(obj, list):
        for i, item in enumerate(obj):
            extract_all_strings(item, paths, f"{current_path}[{i}]")
    elif isinstance(obj, dict):
        for k, v in obj.items():
            separator = "." if current_path else ""
            extract_all_strings(v, paths, f"{current_path}{separator}{k}")
    return paths

def set_nested_value(obj, path, value):
    parts = re.findall(r'([^[\].]+)(?:\[(\d+)\])?', path)
    current = obj
    for i, (key, list_idx) in enumerate(parts):
        if i == len(parts) - 1:
            if list_idx:
                current[key][int(list_idx)] = value
            else:
                current[key] = value
        else:
            if list_idx:
                current = current[key][int(list_idx)]
            else:
                current = current[key]

def main():
    if len(sys.argv) < 2:
        print("Provide a language code")
        sys.exit(1)
        
    lang = sys.argv[1]
    
    with open('scratch/english_pages.json', 'r', encoding='utf-8') as f:
        english_data = json.load(f)
        
    output_path = f'scratch/trans_{lang}.json'
    if os.path.exists(output_path):
        print(f"{lang} already exists. Skipping.")
        sys.exit(0)
        
    print(f"Translating to {lang}...", flush=True)
    lang_translations = {}
    target_lang = google_lang_map.get(lang, lang)
    translator = GoogleTranslator(source='en', target=target_lang)
    
    for slug, page_data in english_data.items():
        translated_page_data = json.loads(json.dumps(page_data))
        paths_and_strings = extract_all_strings(page_data)
        paths = [p[0] for p in paths_and_strings]
        strings = [p[1] for p in paths_and_strings]
        
        processed_strings = []
        tags_list = []
        for s in strings:
            p_text, tags = extract_tags(s)
            processed_strings.append(p_text)
            tags_list.append(tags)
            
        translated_strings = []
        chunk_size = 50
        for i in range(0, len(processed_strings), chunk_size):
            chunk = processed_strings[i:i+chunk_size]
            try:
                res = translator.translate_batch(chunk)
                translated_strings.extend(res)
            except Exception as e:
                time.sleep(2)
                try:
                    res = translator.translate_batch(chunk)
                    translated_strings.extend(res)
                except:
                    translated_strings.extend(chunk)
            time.sleep(1)
            
        for path, translated_str, tags in zip(paths, translated_strings, tags_list):
            if translated_str:
                final_str = restore_tags(translated_str, tags)
            else:
                final_str = "TRANSLATION_ERROR"
            set_nested_value(translated_page_data, path, final_str)
            
        lang_translations[slug] = translated_page_data
        
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(lang_translations, f, indent=2, ensure_ascii=False)
    print(f"Finished {lang}", flush=True)

if __name__ == "__main__":
    main()
