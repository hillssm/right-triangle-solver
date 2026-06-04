import type { FocusedSideCalculatorPage } from 'src/data/focusedSideCalculatorPages';
import pageTranslationsSource from 'src/data/translations/focusedSideAnglePages.json';
import uiTranslationsSource from 'src/data/translations/focusedSideAngleUi.json';
import type { Locale } from 'theme/i18n/locales';

export const FOCUSED_SIDE_ANGLE_PAGE_SLUGS = [
  'right-triangle-side-from-sine-calculator',
  'right-triangle-side-from-cosine-calculator',
  'right-triangle-side-from-tangent-calculator',
  'right-triangle-adjacent-side-from-tangent-calculator'
] as const;

type FocusedSideAngleCalculatorSlug = (typeof FOCUSED_SIDE_ANGLE_PAGE_SLUGS)[number];

type FocusedSideAngleCalculatorUi = {
  messages: {
    positive: string;
    angleRange: string;
    hypotenuseKnownSide: string;
  };
  runtime: {
    calculationSteps: Record<string, { title: string; description: string }>;
  };
};

const EN_UI: FocusedSideAngleCalculatorUi = {
  messages: {
    positive: 'Please enter positive values.',
    angleRange: 'Angle A must be greater than 0° and less than 90°.',
    hypotenuseKnownSide: 'The hypotenuse c must be greater than the known side.'
  },
  runtime: {
    calculationSteps: {
      legFromHcSin: {
        title: 'Find opposite side a',
        description: 'Multiply hypotenuse c by sin(A) to get the side across from angle A.'
      },
      legFromHcCos: {
        title: 'Find adjacent side b',
        description: 'Multiply hypotenuse c by cos(A) to get the side next to angle A.'
      },
      legFromLegTan: {
        title: 'Find opposite side a',
        description: 'Multiply adjacent side b by tan(A) to get the side across from angle A.'
      },
      legFromLegTanDiv: {
        title: 'Find adjacent side b',
        description: 'Divide opposite side a by tan(A) to get the side next to angle A.'
      }
    }
  }
};

const sideAngleSlugSet = new Set<string>(FOCUSED_SIDE_ANGLE_PAGE_SLUGS);

const pageTranslations = pageTranslationsSource as Record<
  string,
  Record<FocusedSideAngleCalculatorSlug, FocusedSideCalculatorPage>
>;

const uiTranslations = uiTranslationsSource as Record<string, FocusedSideAngleCalculatorUi>;

export function isFocusedSideAngleCalculatorSlug(
  slug: string
): slug is FocusedSideAngleCalculatorSlug {
  return sideAngleSlugSet.has(slug);
}

export function localizeFocusedSideAngleCalculatorPage(
  page: FocusedSideCalculatorPage,
  locale: Locale
): FocusedSideCalculatorPage | undefined {
  if (!isFocusedSideAngleCalculatorSlug(page.slug)) {
    return undefined;
  }

  return pageTranslations[locale]?.[page.slug] ?? page;
}

export function getFocusedSideAngleCalculatorMessages(locale: Locale) {
  return uiTranslations[locale]?.messages ?? EN_UI.messages;
}

export function getFocusedSideAngleCalculatorRuntimeTranslations(
  page: FocusedSideCalculatorPage,
  locale: Locale
) {
  if (!isFocusedSideAngleCalculatorSlug(page.slug)) {
    return {};
  }

  return uiTranslations[locale]?.runtime ?? EN_UI.runtime;
}
