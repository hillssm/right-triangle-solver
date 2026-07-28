import os, glob

for f in glob.glob('theme/**/*.astro', recursive=True):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    new_content = content.replace('border-outline/30', 'border-outline/60')
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Fixed select border in {f}")
