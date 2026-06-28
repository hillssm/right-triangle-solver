const fs = require('fs');
const pages = fs.readdirSync('src/pages')
  .filter(f => f.endsWith('.astro') && !['404.astro', 'index.astro', 'sitemap.astro', 'about-us.astro', 'contact-us.astro', 'library.astro', 'practice.astro', 'privacy.astro', 'terms.astro'].includes(f) && !f.startsWith('['))
  .map(f => '/' + f.replace('.astro', '') + '/');
console.log(pages.join('\n'));
