const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'theme', 'templates');
const filesToProcess = fs.readdirSync(templatesDir).filter(f => f.endsWith('.astro'));

filesToProcess.forEach(f => {
  const p = path.join(templatesDir, f);
  let c = fs.readFileSync(p, 'utf8');
  
  // If we are using formatRootBars in the file but not importing it...
  if (c.includes('formatRootBars') && !c.includes('formatRootBars } from \'src/utils/formatList\'')) {
    if (c.includes('import { formatListItem } from \'src/utils/formatList\';')) {
      c = c.replace('import { formatListItem } from \'src/utils/formatList\';', 'import { formatListItem, formatRootBars } from \'src/utils/formatList\';');
      fs.writeFileSync(p, c);
      console.log('Fixed imports in ' + f);
    } else {
      // Just add the import at the top
      c = 'import { formatRootBars } from \'src/utils/formatList\';\n' + c;
      fs.writeFileSync(p, c);
      console.log('Added missing import in ' + f);
    }
  }
});
