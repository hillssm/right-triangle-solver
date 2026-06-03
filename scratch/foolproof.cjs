const fs = require('fs');
const code = fs.readFileSync('src/data/focusedMeasurementCalculatorPages.ts', 'utf8');

const idx = code.indexOf('export const FOCUSED_MEASUREMENT_CALCULATOR_PAGE_SLUGS = FOCUSED_MEASUREMENT_CALCULATOR_PAGES.map(');
if (idx === -1) {
    console.log("Could not find export");
    process.exit(1);
}

const before = code.substring(0, idx);
const after = code.substring(idx);

const lastBracket = before.lastIndexOf(']');
if (lastBracket === -1) {
    console.log("Could not find bracket");
    process.exit(1);
}

const beforeBracket = before.substring(0, lastBracket);
const afterBracket = before.substring(lastBracket);

const script = fs.readFileSync('scratch/splice_fix.cjs', 'utf8');
const pagesStrMatch = script.match(/const pages = (\[.*?\n\]);/s);

if (pagesStrMatch) {
  const pages = eval(pagesStrMatch[1]);
  let str = pages.map(p => JSON.stringify(p, null, 2)).join(',\n  ');
  str = str.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
  
  const finalCode = beforeBracket.trimEnd() + ',\n  ' + str + '\n' + afterBracket + after;
  fs.writeFileSync('src/data/focusedMeasurementCalculatorPages.ts', finalCode);
  console.log("SUCCESS!");
} else {
  console.log("Could not extract array");
}
