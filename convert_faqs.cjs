const fs = require('fs');
let mdx = fs.readFileSync('src/blog/pythagorean-theorem-formula.mdx', 'utf-8');

const faqMatch = mdx.match(/## 10\. Frequently Asked Questions([\s\S]*?)(?=##|$)/);
if (faqMatch) {
  const faqText = faqMatch[1];
  const qnaRegex = /\*\*\d+\.\s+(.*?)\*\*\s+([\s\S]*?)(?=\n\*\*\d+\.|$)/g;
  
  let faqItems = [];
  let match;
  while ((match = qnaRegex.exec(faqText)) !== null) {
    faqItems.push({
      question: match[1].trim(),
      answer: match[2].trim()
    });
  }
  
  const faqArrayStr = JSON.stringify(faqItems, null, 2);
  const faqComponent = `## 10. Frequently Asked Questions\n\n<Faq heading="Pythagorean Theorem FAQs" description="We have compiled the top questions people ask about the Pythagorean theorem." items={${faqArrayStr}} />\n\n`;

  mdx = mdx.replace(faqMatch[0], faqComponent);
  
  if (!mdx.includes("import Faq from")) {
    mdx = mdx.replace(/---\s*\n\s*/, "---\n\nimport Faq from 'theme/components/Faq.astro';\n\n");
  }
  
  fs.writeFileSync('src/blog/pythagorean-theorem-formula.mdx', mdx);
  console.log('FAQs successfully converted to Faq component!');
} else {
  console.log('FAQ section not found.');
}
