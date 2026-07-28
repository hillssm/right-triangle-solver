import os, glob

# Fix input borders in global.css
css_path = 'src/styles/global.css'
with open(css_path, 'r', encoding='utf-8') as file:
    content = file.read()

# Replace border-outline with border-primary/50 (golden tint)
new_content = content.replace('border border-outline ', 'border border-primary/50 ')
new_content = new_content.replace('border border-outline/60 ', 'border border-primary/50 ')

if new_content != content:
    with open(css_path, 'w', encoding='utf-8') as file:
        file.write(new_content)
    print(f"Fixed input borders in {css_path}")


# Fix select borders in astro files
for f in glob.glob('theme/**/*.astro', recursive=True):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    new_content = content.replace('border-outline', 'border-primary/50')
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Fixed select border in {f}")
