const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/config/i18n/formulas.json', 'utf8'));
const enFormulas = Object.keys(data.en);
const locales = Object.keys(data);

let missingCount = 0;

locales.forEach(locale => {
    enFormulas.forEach(slug => {
        if (!data[locale][slug]) {
            console.log(`Missing [${locale}]: ${slug}`);
            missingCount++;
        } else {
            const keys = ['title', 'description', 'variables', 'notes'];
            keys.forEach(key => {
                if (data[locale][slug][key] === undefined || data[locale][slug][key] === null) {
                    console.log(`Missing key [${locale}][${slug}][${key}]`);
                    missingCount++;
                }
            });
        }
    });

    // Check if locale has extra formulas not in en
    const localeFormulas = Object.keys(data[locale]);
    localeFormulas.forEach(slug => {
        if (!data.en[slug]) {
            console.log(`Extra formula in [${locale}]: ${slug}`);
        }
    });
});

console.log(`Total missing entries: ${missingCount}`);
