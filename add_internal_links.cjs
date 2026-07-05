const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src/data');
const filesToProcess = fs.readdirSync(dataDir).filter(f => f.endsWith('Pages.ts') || f === 'rightTriangleGroupedPages.ts');

// 1. Extract all slugs and h1 titles to build dynamic keywords
let allSlugs = new Set();
let slugToKeywords = {};

filesToProcess.forEach(f => {
  const content = fs.readFileSync(path.join(dataDir, f), 'utf8');
  const regex = /slug:\s*'([^']+)'/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const slug = match[1];
    allSlugs.add(slug);
    
    // Generate base keyword from slug
    let kw = slug.replace('right-triangle-', '').replace('-calculator', '').replace(/-/g, ' ');
    if (!slugToKeywords[slug]) {
      slugToKeywords[slug] = new Set();
    }
    slugToKeywords[slug].add(kw);
    
    // Add variations
    if (slug === 'pythagorean-theorem-calculator') {
      slugToKeywords[slug].add('Pythagorean theorem');
      slugToKeywords[slug].add('Pythagoras theorem');
    }
    if (slug === 'right-triangle-area-calculator') slugToKeywords[slug].add('area');
    if (slug === 'right-triangle-perimeter-calculator') slugToKeywords[slug].add('perimeter');
    if (slug === 'right-triangle-semiperimeter-calculator') slugToKeywords[slug].add('semiperimeter');
    if (slug === 'right-triangle-altitude-calculator') slugToKeywords[slug].add('altitude');
    if (slug === 'right-triangle-inradius-calculator') slugToKeywords[slug].add('inradius');
    if (slug === 'right-triangle-circumradius-calculator') slugToKeywords[slug].add('circumradius');
  }
});

// Compile all replacements
const allReplacements = [];
for (const [slug, keywords] of Object.entries(slugToKeywords)) {
  for (const kw of keywords) {
    if (kw.length > 3) { // Avoid linking very short words
      allReplacements.push({ keyword: kw, slug: slug, len: kw.length });
    }
  }
}
// Sort by length descending to match longest phrases first
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
      // Target any string properties that are likely text blocks
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

console.log(`All files processed. Generated keywords for ${allSlugs.size} slugs.`);
