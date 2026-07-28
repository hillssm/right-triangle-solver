import fs from 'fs';
import { FOCUSED_TRIG_RATIO_CALCULATOR_PAGES } from '../src/data/focusedTrigRatioCalculatorPages';

const englishData: Record<string, any> = {};

for (const page of FOCUSED_TRIG_RATIO_CALCULATOR_PAGES) {
    englishData[page.slug] = {
        slug: page.slug,
        h1: page.h1,
        headerSummary: page.headerSummary,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        calculator_heading: page.calculator.heading,
        calculator_outputLabel: page.calculator.outputLabel,
        calculator_fields: page.calculator.fields.map(f => f.label),
        introHeading: page.introHeading,
        intro: page.intro,
        calculatorNote: page.calculatorNote,
        formula_display: page.formula.display,
        formula_paragraphs: page.formula.paragraphs,
        diagramExplanation: page.diagramExplanation,
        howToSteps: page.howToSteps,
        example_intro: page.example.intro,
        example_steps: page.example.steps,
        example_conclusion: page.example.conclusion,
        whatResultMeans: page.whatResultMeans,
        whenToUse_intro: page.whenToUse.intro,
        whenToUse_items: page.whenToUse.items,
        commonMistakes_intro: page.commonMistakes.intro,
        commonMistakes_items: page.commonMistakes.items,
        relatedLinks: page.relatedLinks.map(l => l.label),
        faqs: page.faqs.map(f => ({ question: f.question, answer: f.answer }))
    };
}

fs.writeFileSync('./scratch/english_pages.json', JSON.stringify(englishData, null, 2));
console.log('Extracted to scratch/english_pages.json');
