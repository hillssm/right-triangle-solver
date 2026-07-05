const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src/data');
const filesToProcess = fs.readdirSync(dataDir).filter(f => f.endsWith('Pages.ts') || f === 'rightTriangleGroupedPages.ts');

const linkDefinitions = [
  { slug: 'pythagorean-theorem-calculator', keywords: ['Pythagorean theorem', 'Pythagoras theorem', 'Pythagorean equation'] },
  { slug: 'right-triangle-perimeter-calculator', keywords: ['perimeter formula', 'perimeter of a right triangle', 'perimeter'] },
  { slug: 'right-triangle-semiperimeter-calculator', keywords: ['semiperimeter', 'half the perimeter', 'half-perimeter'] },
  { slug: 'right-triangle-area-calculator', keywords: ['area of a right triangle', 'area formula', 'triangle area', 'area'] },
  { slug: 'right-triangle-altitude-calculator', keywords: ['altitude to the hypotenuse', 'altitude formula', 'altitude'] },
  { slug: 'right-triangle-inradius-calculator', keywords: ['inradius', 'inscribed circle radius'] },
  { slug: 'right-triangle-circumradius-calculator', keywords: ['circumradius', 'circumscribed circle radius'] },
  { slug: '45-45-90-triangle-calculator', keywords: ['45-45-90 triangle', '45-45-90', 'isosceles right triangle'] },
  { slug: '30-60-90-triangle-calculator', keywords: ['30-60-90 triangle', '30-60-90'] },
  { slug: 'sine-ratio-calculator', keywords: ['sine ratio', 'sine function'] },
  { slug: 'cosine-ratio-calculator', keywords: ['cosine ratio', 'cosine function'] },
  { slug: 'tangent-ratio-calculator', keywords: ['tangent ratio', 'tangent function'] },
  { slug: 'pythagorean-triples-calculator', keywords: ['Pythagorean triple', 'Pythagorean triples'] },
  { slug: 'similar-right-triangles-calculator', keywords: ['similar right triangles', 'similar triangles'] },
  { slug: 'right-triangle-trig-ratios-calculator', keywords: ['trigonometric ratios', 'trig ratios', 'SOH CAH TOA', 'SOHCAHTOA'] },
  { slug: 'right-triangle-angle-calculator', keywords: ['missing angle', 'calculate the angle'] },
  { slug: 'right-triangle-side-calculator', keywords: ['missing side', 'side lengths'] },
  { slug: 'right-triangle-measurements-calculator', keywords: ['right triangle measurements'] },
];

const allReplacements = [];
for (const def of linkDefinitions) {
  for (const kw of def.keywords) {
    allReplacements.push({ keyword: kw, slug: def.slug, len: kw.length });
  }
}
allReplacements.sort((a, b) => b.len - a.len);

function replaceText(text, currentSlug) {
  if (typeof text !== 'string') return text;
  
  let modifiedText = text;
  
  for (const { keyword, slug } of allReplacements) {
    if (slug === currentSlug) continue; // Don't link to the page we are already on
    
    const escapedKw = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${escapedKw})\\b`, 'i');
    
    // Check if keyword exists first to save computation
    if (!regex.test(modifiedText)) continue;

    const match = regex.exec(modifiedText);
    if (match) {
      // Avoid modifying text that is already inside an anchor tag
      const beforeMatch = modifiedText.substring(0, match.index);
      const openTags = (beforeMatch.match(/<a\b/gi) || []).length;
      const closeTags = (beforeMatch.match(/<\/a>/gi) || []).length;
      
      if (openTags === closeTags) {
        const replacement = `<a href="/${slug}/" class="text-primary hover:underline">${match[1]}</a>`;
        modifiedText = modifiedText.substring(0, match.index) + replacement + modifiedText.substring(match.index + match[1].length);
      }
    }
  }
  
  return modifiedText;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let currentSlug = null;
  
  let lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const slugMatch = lines[i].match(/slug:\s*'([^']+)'/);
    if (slugMatch) {
      currentSlug = slugMatch[1];
    }
    
    if (currentSlug) {
      const line = lines[i];
      if (
        line.includes('intro:') || 
        line.includes('answer:') || 
        line.includes('description:') ||
        (line.trim().startsWith("'") && line.trim().endsWith("',")) ||
        (line.trim().startsWith("'") && line.trim().endsWith("'"))
      ) {
        // Need to correctly parse the string content between the first ' and the last '
        const firstQuote = line.indexOf("'");
        const lastQuote = line.lastIndexOf("'");
        
        if (firstQuote !== -1 && lastQuote !== -1 && firstQuote !== lastQuote) {
          const originalString = line.substring(firstQuote + 1, lastQuote);
          if (originalString.length > 15) { // Skip tiny strings
            const newString = replaceText(originalString, currentSlug);
            if (newString !== originalString) {
              lines[i] = line.substring(0, firstQuote + 1) + newString + line.substring(lastQuote);
            }
          }
        }
      }
    }
  }
  
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log(`Processed ${path.basename(filePath)}`);
}

filesToProcess.forEach(f => {
  processFile(path.join(dataDir, f));
});

console.log('All files processed.');
