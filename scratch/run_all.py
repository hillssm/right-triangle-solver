import subprocess
import sys
import time

locales = ['hi', 'es', 'ru', 'fr', 'de', 'it', 'pt', 'bn', 'ja', 'ko', 'ms', 'pl', 'id', 'ar', 'bg', 'tr', 'sv', 'zh']

processes = []
for lang in locales:
    print(f"Starting translation for {lang}...")
    p = subprocess.Popen([sys.executable, "scratch/translate_pages.py", lang])
    processes.append((lang, p))
    # Slight delay to avoid hammering the API instantly
    time.sleep(1)

for lang, p in processes:
    p.wait()
    print(f"{lang} finished with code {p.returncode}")

print("All translations finished.")
