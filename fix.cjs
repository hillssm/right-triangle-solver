const fs = require('fs');

const codeToAppend = `

export const EN_FOCUSED_TRIG_RATIO_UI = {
  home: 'Home',
  parentPageLabel: 'Right Triangle Trig Ratios Calculator',
  badge: 'Focused Calculator',
  formula: 'Formula',
  triangleDiagram: 'Triangle Diagram',
  howToUse: 'How to Use',
  stepByStepExample: 'Step-by-Step Example',
  whatResultMeans: 'What the Result Means',
  whenToUse: 'When to Use This Ratio',
  commonMistakes: 'Common Mistakes',
  faqHeading: 'Frequently Asked Questions',
  relatedCalculators: 'Related Trig Calculators',
  openTool: 'Open Tool',
  ratioHighlight: 'Ratio Highlight',
  numerator: 'Numerator',
  denominator: 'Denominator',
  sideKey: 'Side Key',
  usedIn: (ratio) => \`Used in \${ratio}\`,
  notUsedIn: (ratio) => \`Not used in \${ratio}\`,
  sideRoles: {
    a: {
      label: 'opposite side a',
      role: 'Opposite',
      description: 'height across from angle A',
      short: 'opp'
    },
    b: {
      label: 'adjacent side b',
      role: 'Adjacent',
      description: 'base next to angle A',
      short: 'adj'
    },
    c: {
      label: 'hypotenuse c',
      role: 'Hypotenuse',
      description: 'slanted side',
      short: 'hyp'
    }
  },
  runtime: {
    entered: 'Entered',
    computed: 'Computed',
    solvedFrom: 'Solved from',
    statusDefault: 'Enter two values to solve',
    solutionStepsDefault: 'Solution steps will appear here.',
    fixErrors: 'Please fix the errors above.',
    solveFirst: 'Please solve the triangle first.',
    copySuccess: 'Results copied to clipboard.',
    resultsTitle: 'Right Triangle Trig Ratio Results',
    formulaLabel: 'Formula',
    substitutionLabel: 'Substitution',
    answerLabel: 'Answer',
    explanationLabel: 'Explanation',
    detailLabel: 'Detail',
    sideA: 'Side a',
    sideB: 'Side b',
    hypotenuseC: 'Hypotenuse c',
    angleA: 'Angle A',
    angleB: 'Angle B',
    area: 'Area',
    perimeter: 'Perimeter',
    altitude: 'Altitude h',
    semiperimeter: 'Semiperimeter s',
    inradius: 'Inradius r',
    circumradius: 'Circumradius R',
    segmentP: 'Segment p',
    segmentQ: 'Segment q'
  }
};

export function getFocusedTrigRatioUi(locale) {
  // We can just return English for now
  return EN_FOCUSED_TRIG_RATIO_UI;
}

export function getFocusedTrigRatioRuntimeTranslations(page, locale) {
  const ui = getFocusedTrigRatioUi(locale);
  const calculationSteps = {};
  
  if (page.slug === 'sine-ratio-calculator') {
    calculationSteps.ratioSine = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  } else if (page.slug === 'cosine-ratio-calculator') {
    calculationSteps.ratioCosine = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  } else if (page.slug === 'tangent-ratio-calculator') {
    calculationSteps.ratioTangent = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  } else if (page.slug === 'cotangent-ratio-calculator') {
    calculationSteps.ratioCotangent = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  } else if (page.slug === 'secant-ratio-calculator') {
    calculationSteps.ratioSecant = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  } else if (page.slug === 'cosecant-ratio-calculator') {
    calculationSteps.ratioCosecant = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  }

  return { ...ui.runtime, calculationSteps };
}
`;

fs.appendFileSync('src/data/focusedTrigRatioCalculatorTranslations.ts', codeToAppend);
