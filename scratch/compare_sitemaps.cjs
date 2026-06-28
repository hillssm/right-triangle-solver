const fs = require('fs');

const s0 = fs.readFileSync('.vercel/output/static/sitemap-0.xml', 'utf8');
const s1 = fs.readFileSync('.vercel/output/static/sitemap.xml', 'utf8');

const urls0 = [...s0.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const urls1 = [...s1.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

const missing = urls0.filter(u => !urls1.includes(u));

console.log('Total in sitemap-0:', urls0.length);
console.log('Total in sitemap.xml:', urls1.length);
console.log('Missing count:', missing.length);
console.log('First 20 missing:');
console.log(missing.slice(0, 20).join('\n'));
