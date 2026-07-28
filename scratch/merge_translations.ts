import * as fs from 'fs';
import * as path from 'path';

const locales = ['hi', 'es', 'ru', 'fr', 'de', 'it', 'pt', 'bn', 'ja', 'ko', 'ms', 'pl', 'id', 'ar', 'bg', 'tr', 'sv', 'zh'];

async function main() {
    const outputData: Record<string, any> = {};

    for (const lang of locales) {
        const jsonPath = path.join(__dirname, `trans_${lang}.json`);
        if (fs.existsSync(jsonPath)) {
            const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            outputData[lang] = data;
        } else {
            console.warn(`Warning: Missing ${jsonPath}`);
        }
    }

    const tsContent = `// Automatically generated from translations
import { CalculatorPageSchema } from "./focusedTrigRatioCalculatorPages";

export const focusedTrigRatioCalculatorTranslations: Record<string, Record<string, CalculatorPageSchema>> = ${JSON.stringify(outputData, null, 2)};
`;

    const outPath = path.join(__dirname, '../src/data/focusedTrigRatioCalculatorTranslations.ts');
    fs.writeFileSync(outPath, tsContent, 'utf8');
    console.log(`Successfully generated translations file at ${outPath}`);
}

main().catch(console.error);
