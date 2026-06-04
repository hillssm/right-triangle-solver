const fs = require('fs');

const createAstroPage = (slug) => {
  const code = `---
import { getFocusedMeasurementCalculatorPage } from 'src/data/focusedMeasurementCalculatorPages';
import FocusedMeasurementCalculatorPage from 'theme/templates/FocusedMeasurementCalculatorPage.astro';

const page = getFocusedMeasurementCalculatorPage('${slug}');

if (!page) {
  throw new Error('Missing page data for ${slug}');
}
---

<FocusedMeasurementCalculatorPage page={page} />
`;
  fs.writeFileSync(`src/pages/${slug}.astro`, code);
};

createAstroPage('right-triangle-area-from-hypotenuse-calculator');
createAstroPage('right-triangle-area-from-perimeter-calculator');
