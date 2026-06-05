export type SeoHeadingIntent =
  | 'formula'
  | 'diagram'
  | 'howTo'
  | 'examples'
  | 'result'
  | 'sideRatio'
  | 'useCases'
  | 'commonMistakes'
  | 'whyFormulaWorks'
  | 'calculatorMode'
  | 'related'
  | 'faqs';

export type SeoHeadingPage = {
  h1?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
};

const SMALL_WORDS = new Set([
  'a',
  'an',
  'and',
  'as',
  'at',
  'by',
  'for',
  'from',
  'in',
  'of',
  'on',
  'or',
  'the',
  'to',
  'with'
]);

const GENERIC_HEADING_INTENTS: Record<string, SeoHeadingIntent> = {
  formula: 'formula',
  'triangle diagram': 'diagram',
  'formula diagram': 'diagram',
  'how to use this calculator': 'howTo',
  'step-by-step example': 'examples',
  'step-by-step examples': 'examples',
  example: 'examples',
  examples: 'examples',
  'what the result means': 'result',
  'side ratio': 'sideRatio',
  'when to use this calculator': 'useCases',
  'common mistakes': 'commonMistakes',
  'why this formula works': 'whyFormulaWorks',
  'calculator mode': 'calculatorMode',
  'calculator modes available': 'calculatorMode',
  'related calculators': 'related',
  faqs: 'faqs'
};

const normalize = (value: string) => value.trim().replace(/\s+/g, ' ');

const toTitleCase = (value: string) => {
  const text = normalize(value);

  if (/[A-Z]/.test(text.slice(1))) {
    return text;
  }

  return text
    .split(' ')
    .map((word, index) => {
      if (!word || /[=+/()]/.test(word)) return word;
      const lower = word.toLowerCase();
      if (index > 0 && SMALL_WORDS.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
};

const stripCalculator = (value: string) =>
  normalize(value).replace(/\s+calculator$/i, '');

const findSecondaryKeyword = (
  page: SeoHeadingPage,
  predicate?: (keyword: string) => boolean
) => {
  const secondaryKeywords = page.secondaryKeywords || [];
  return predicate
    ? secondaryKeywords.find((keyword) => predicate(keyword.toLowerCase()))
    : secondaryKeywords[0];
};

const keywordFromPage = (page: SeoHeadingPage, predicate?: (keyword: string) => boolean) => {
  const matchingKeyword = findSecondaryKeyword(page, predicate);

  return normalize(matchingKeyword || page.primaryKeyword || page.h1 || 'Right Triangle Calculator');
};

const subjectFromPage = (page: SeoHeadingPage) =>
  stripCalculator(page.h1 || page.primaryKeyword || keywordFromPage(page));

const pageCalculatorName = (page: SeoHeadingPage) =>
  normalize(page.h1 || page.primaryKeyword || keywordFromPage(page));

const suffixIfMissing = (value: string, suffix: string) => {
  const text = toTitleCase(value);
  return text.toLowerCase().includes(suffix.toLowerCase()) ? text : `${text} ${suffix}`;
};

export const seoSectionHeading = (
  page: SeoHeadingPage,
  intent: SeoHeadingIntent,
  fallback?: string
) => {
  const subject = toTitleCase(subjectFromPage(page));
  const calculatorName = toTitleCase(pageCalculatorName(page));

  switch (intent) {
    case 'formula':
      return suffixIfMissing(
        findSecondaryKeyword(page, (keyword) => keyword.includes('formula')) || subject,
        'Formula'
      );
    case 'diagram':
      return suffixIfMissing(subject, subject.toLowerCase().includes('triangle') ? 'Diagram' : 'Triangle Diagram');
    case 'howTo':
      return `How to Use the ${calculatorName}`;
    case 'examples':
      return `${calculatorName} Step-by-Step Examples`;
    case 'result':
      return `${calculatorName} Results Explained`;
    case 'sideRatio':
      return findSecondaryKeyword(page, (keyword) => keyword.includes('ratio'))
        ? toTitleCase(findSecondaryKeyword(page, (keyword) => keyword.includes('ratio'))!)
        : suffixIfMissing(subject, 'Side Ratio');
    case 'useCases':
      return `When to Use the ${calculatorName}`;
    case 'commonMistakes':
      return `${subject} Common Mistakes`;
    case 'whyFormulaWorks':
      return `${subject} Formula Explanation`;
    case 'calculatorMode':
      return `${calculatorName} Modes`;
    case 'related':
      return `Related ${subject} Calculators`;
    case 'faqs':
      return `${calculatorName} FAQs`;
    default:
      return fallback || calculatorName;
  }
};

export const replaceGenericSeoHeading = (
  heading: string | undefined,
  page: SeoHeadingPage,
  intent?: SeoHeadingIntent
) => {
  if (intent) return seoSectionHeading(page, intent, heading);
  if (!heading) return heading;

  const mappedIntent = GENERIC_HEADING_INTENTS[normalize(heading).toLowerCase()];
  return mappedIntent ? seoSectionHeading(page, mappedIntent, heading) : heading;
};
