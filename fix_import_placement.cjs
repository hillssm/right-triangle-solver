const fs = require('fs');

['FocusedRadiusCalculatorPage.astro', 'FocusedSpecialTriangleCalculatorPage.astro'].forEach(f => {
  let p = 'theme/templates/' + f;
  let c = fs.readFileSync(p, 'utf8');
  if (c.startsWith('import { formatRootBars }')) {
    // Note: Astro files usually have \r\n or \n. We replace the literal string safely.
    c = c.replace("import { formatRootBars } from 'src/utils/formatList';\n---", "---\nimport { formatRootBars } from 'src/utils/formatList';");
    c = c.replace("import { formatRootBars } from 'src/utils/formatList';\r\n---", "---\r\nimport { formatRootBars } from 'src/utils/formatList';");
    fs.writeFileSync(p, c);
    console.log('Fixed ' + f);
  }
});
