const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.astro')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, '../theme/templates')).concat(walk(path.join(__dirname, '../src/pages')));
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find all <h1 ...> ... </h1>
  // Then the next <p ...> tag
  
  // This regex matches </h1> followed by optional whitespace and then <p class="
  // We'll replace it by adding 'truncate ' to the class string.
  
  let newContent = content.replace(/(<\/h1>\s*<p\s+class=")([^"]*)(")/g, (match, p1, p2, p3) => {
    if (!p2.includes('truncate')) {
      return `${p1}truncate ${p2}${p3}`;
    }
    return match;
  });

  // For HomePage.astro it has a second p tag right after the first. Let's handle it manually or globally
  if (file.includes('HomePage.astro')) {
    newContent = newContent.replace(/(<p class=")(mx-auto mt-3 max-w-xs text-xs tracking-\[0\.01em\] text-on-surface-variant sm:hidden)(")/, (match, p1, p2, p3) => {
      if (!p2.includes('truncate')) {
        return `${p1}truncate ${p2}${p3}`;
      }
      return match;
    });
  }

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    changedCount++;
    console.log('Updated', file);
  }
});

console.log(`Added truncate to ${changedCount} files.`);
