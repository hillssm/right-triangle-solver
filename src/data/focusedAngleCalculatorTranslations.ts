import type { FocusedAngleCalculatorPage } from 'src/data/focusedAngleCalculatorPages';
import pageTranslationsSource from 'src/data/translations/focusedAnglePages.json';
import uiTranslationsSource from 'src/data/translations/focusedAngleUi.json';
import type { Locale } from 'theme/i18n/locales';

export type FocusedAngleCalculatorUi = {
  badge: string;
  highlightedRelationship: string;
  diagramKey: string;
  quickChecks: string;
  howToUse: string;
  whatResultMeans: string;
  whenToUse: string;
  commonMistakes: string;
  faqHeading: string;
  relatedAngleCalculators: string;
  openTool: string;
  svg: {
    opposite: string;
    adjacent: string;
    hypotenuse: string;
    rightAngle: string;
  };
  sideKey: Record<'a' | 'b' | 'c', { label: string; description: string }>;
  angleKey: Record<'A' | 'B', { label: string; description: string }>;
  messages: {
    positive: string;
    angleRange: string;
    hypotenuseKnownSide: string;
    invalidTriangle: string;
  };
  runtime: {
    calculationComplete: string;
    unableToCalculate: string;
    fixErrors: string;
    errorPrefix: string;
    stepLabels: {
      formula: string;
      substitution: string;
      answer: string;
      explanation: string;
      detail: string;
    };
  };
};

const EN_UI: FocusedAngleCalculatorUi = {
  badge: 'Angle Calculator',
  highlightedRelationship: 'Highlighted relationship',
  diagramKey: 'Diagram Key',
  quickChecks: 'Quick Checks',
  howToUse: 'How to Use This Calculator',
  whatResultMeans: 'What the Result Means',
  whenToUse: 'When to Use This Calculator',
  commonMistakes: 'Common Mistakes',
  faqHeading: 'Frequently Asked Questions',
  relatedAngleCalculators: 'Related Angle Calculators',
  openTool: 'Open Tool',
  svg: {
    opposite: 'opposite',
    adjacent: 'adjacent',
    hypotenuse: 'hypotenuse',
    rightAngle: '90°'
  },
  sideKey: {
    a: {
      label: 'a = opposite side',
      description: 'The side across from angle A.'
    },
    b: {
      label: 'b = adjacent side',
      description: 'The side next to angle A.'
    },
    c: {
      label: 'c = hypotenuse',
      description: 'The longest side, opposite the right angle.'
    }
  },
  angleKey: {
    A: {
      label: 'A = reference angle',
      description: 'The acute angle used by sine, cosine, and tangent on these pages.'
    },
    B: {
      label: 'B = other acute angle',
      description: 'The complementary acute angle in the same right triangle.'
    }
  },
  messages: {
    positive: 'Please enter positive values.',
    angleRange: 'Angle must be greater than 0° and less than 90°.',
    hypotenuseKnownSide: 'The hypotenuse c must be greater than the known side.',
    invalidTriangle: 'These values may not form a valid right triangle.'
  },
  runtime: {
    calculationComplete: 'Calculation complete.',
    unableToCalculate: 'Unable to calculate.',
    fixErrors: 'Please fix the errors in the fields above.',
    errorPrefix: 'Error',
    stepLabels: {
      formula: 'Formula',
      substitution: 'Substitution',
      answer: 'Answer',
      explanation: 'Explanation',
      detail: 'Detail'
    }
  }
};

const pageTranslations = pageTranslationsSource as Record<
  string,
  Record<string, FocusedAngleCalculatorPage>
>;

const uiTranslations = uiTranslationsSource as Record<string, FocusedAngleCalculatorUi>;

export function localizeFocusedAngleCalculatorPage(
  page: FocusedAngleCalculatorPage,
  locale: Locale
): FocusedAngleCalculatorPage {
  return pageTranslations[locale]?.[page.slug] ?? page;
}

export function getFocusedAngleCalculatorUi(locale: Locale): FocusedAngleCalculatorUi {
  return uiTranslations[locale] ?? EN_UI;
}

export function getFocusedAngleCalculatorRuntimeTranslations(
  page: FocusedAngleCalculatorPage,
  locale: Locale
) {
  const ui = getFocusedAngleCalculatorUi(locale);
  const calculationSteps: Record<string, { title: string; description: string }> = {};

  if (page.slug === 'right-triangle-angle-from-sine-calculator') {
    calculationSteps.angleAsin = {
      title: page.calculator.heading,
      description: page.formula.paragraphs[0]
    };
  }

  if (page.slug === 'right-triangle-angle-from-cosine-calculator') {
    calculationSteps.angleAcos = {
      title: page.calculator.heading,
      description: page.formula.paragraphs[0]
    };
  }

  if (page.slug === 'right-triangle-angle-from-tangent-calculator') {
    calculationSteps.angleAtan = {
      title: page.calculator.heading,
      description: page.formula.paragraphs[0]
    };
  }

  if (page.slug === 'right-triangle-missing-angle-calculator') {
    calculationSteps.angleBFromA = {
      title: page.calculator.heading,
      description: page.formula.paragraphs[0]
    };
    calculationSteps.angleAFromB = {
      title: page.calculator.heading,
      description: page.formula.paragraphs[0]
    };
  }

  return {
    ...ui.runtime,
    calculationSteps
  };
}
