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
      if (file.endsWith('.json') || file.endsWith('.ts') || file.endsWith('.astro')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, '../src'));
let changedCount = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('–')) {
    const newContent = content.replace(/–/g, '-');
    fs.writeFileSync(file, newContent, 'utf8');
    changedCount++;
  }
});

console.log(`Replaced "–" (en-dash) with "-" in ${changedCount} files.`);
