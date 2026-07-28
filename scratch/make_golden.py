import os, glob

# Fix global.css
css_path = 'src/styles/global.css'
with open(css_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('border border-outline/60 bg-surface-container-low', 'border border-primary/50 bg-surface-container-low')

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Fixed {css_path}")

# Fix astro files
for f in glob.glob('theme/**/*.astro', recursive=True):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content.replace('border border-outline/60 bg-surface-container', 'border border-primary/50 bg-surface-container')
    new_content = new_content.replace('bg-surface-container border border-outline/60', 'bg-surface-container border border-primary/50')

    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Fixed {f}")
