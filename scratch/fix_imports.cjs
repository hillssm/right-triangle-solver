const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'theme', 'templates');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.astro'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('~/utils/formatList')) {
    content = content.replace(/~\/utils\/formatList/g, 'src/utils/formatList');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
