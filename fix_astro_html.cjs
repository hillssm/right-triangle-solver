const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'theme', 'templates');
const filesToProcess = fs.readdirSync(templatesDir).filter(f => f.endsWith('.astro'));

const variablesToSetHtml = [
  'page.intro',
  'page.toolPurpose',
  'page.quickSummary.intro',
  'page.diagram.intro',
  'item.description',
  'note',
  'page.example.intro',
  'page.example.answer'
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  variablesToSetHtml.forEach(variable => {
    // We want to replace patterns like:
    // <p class="xxx">{variable}</p>
    // with:
    // <p class="xxx" set:html={formatRootBars(variable)} />
    
    // Pattern 1: <p>{variable}</p>
    let regex = new RegExp(`<p>\\s*\\{${variable.replace(/\./g, '\\.')}\\}\\s*</p>`, 'g');
    content = content.replace(regex, `<p set:html={formatRootBars(${variable})} />`);

    // Pattern 2: <p class="xxx">{variable}</p>
    regex = new RegExp(`<p ([^>]+)>\\s*\\{${variable.replace(/\./g, '\\.')}\\}\\s*</p>`, 'g');
    content = content.replace(regex, `<p $1 set:html={formatRootBars(${variable})} />`);
    
    // Pattern 3: <li class="xxx">{variable}</li> (specifically for {note})
    if (variable === 'note' || variable === 'step') {
      regex = new RegExp(`<li ([^>]+)>\\s*\\{${variable.replace(/\./g, '\\.')}\\}\\s*</li>`, 'g');
      content = content.replace(regex, `<li $1 set:html={formatRootBars(${variable})} />`);
      
      regex = new RegExp(`<li>\\s*\\{${variable.replace(/\./g, '\\.')}\\}\\s*</li>`, 'g');
      content = content.replace(regex, `<li set:html={formatRootBars(${variable})} />`);
    }

    // Pattern 4: <span class="xxx">{variable}</span>
    regex = new RegExp(`<span ([^>]+)>\\s*\\{${variable.replace(/\./g, '\\.')}\\}\\s*</span>`, 'g');
    content = content.replace(regex, `<span $1 set:html={formatRootBars(${variable})} />`);

    regex = new RegExp(`<span>\\s*\\{${variable.replace(/\./g, '\\.')}\\}\\s*</span>`, 'g');
    content = content.replace(regex, `<span set:html={formatRootBars(${variable})} />`);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

filesToProcess.forEach(f => {
  processFile(path.join(templatesDir, f));
});
console.log("Done updating templates.");
