const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('Pages.ts')) {
      let text = fs.readFileSync(fullPath, 'utf8');
      
      text = text.replace(/h2: ['"]What This .*? Calculator Solves['"]/g, "h2: 'What This Tool Solves'");
      text = text.replace(/h2: ['"]What This .*? Calculator Does['"]/g, "h2: 'What This Tool Does'");
      text = text.replace(/h2: ['"]How to Use This .*? Calculator['"]/g, "h2: 'How to Use This Tool'");
      text = text.replace(/h2: ['"]How to Use the .*? Calculator['"]/g, "h2: 'How to Use This Tool'");
      text = text.replace(/h2: ['"]When to Use This .*? Calculator['"]/g, "h2: 'When to Use This Tool'");
      text = text.replace(/h2: ['"]Where This .*? Calculator Is Useful['"]/g, "h2: 'Where This Tool Is Useful'");

      fs.writeFileSync(fullPath, text, 'utf8');
    }
  }
}

processDir('src/data');
console.log('Fixed keyword stuffed headings');
