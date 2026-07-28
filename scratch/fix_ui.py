import os, glob

# Fix truncate on <p> tags
for f in glob.glob('theme/**/*.astro', recursive=True):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    new_content = content.replace('<p class="truncate ', '<p class="')
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Fixed truncate in {f}")

# Fix input borders
css_path = 'src/styles/global.css'
with open(css_path, 'r', encoding='utf-8') as file:
    content = file.read()

new_content = content.replace('border border-outline-variant/55', 'border border-outline/60')

if new_content != content:
    with open(css_path, 'w', encoding='utf-8') as file:
        file.write(new_content)
    print(f"Fixed input borders in {css_path}")
