import commonSource from 'src/config/i18n/common.json';
import contentSource from 'src/config/i18n/content.json';
import faqSource from 'src/config/i18n/faq.json';
import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';

type Dictionary = Record<string, unknown>;

type FaqItem = {
  question: string;
  answer: string;
  display?: boolean;
  category?: string;
};

const commonData = commonSource as Record<string, Dictionary>;
const contentData = contentSource as Record<string, Dictionary>;
const faqData = faqSource as Record<string, FaqItem[]>;

function mergeDeep(base: Dictionary, override: Dictionary): Dictionary {
  const output: Dictionary = { ...base };

  for (const [key, value] of Object.entries(override)) {
    const existing = output[key];

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      output[key] = mergeDeep(
        (existing as Dictionary) ?? {},
        value as Dictionary
      );
      continue;
    }

    output[key] = value;
  }

  return output;
}

function mergeFaq(localeFaq: FaqItem[] | undefined): FaqItem[] {
  const fallback = faqData[DEFAULT_LOCALE] ?? [];

  if (!localeFaq) {
    return fallback;
  }

  const merged = fallback.map((item, index) => ({
    ...item,
    ...(localeFaq[index] ?? {})
  }));

  if (localeFaq.length > merged.length) {
    merged.push(...localeFaq.slice(merged.length));
  }

  return merged;
}

export type TranslationBundle = {
  content: Dictionary;
  common: Dictionary;
  faq: FaqItem[];
};

export function getTranslations(locale: Locale): TranslationBundle {
  const content = mergeDeep(
    contentData[DEFAULT_LOCALE] ?? {},
    contentData[locale] ?? {}
  );
  const common = mergeDeep(
    commonData[DEFAULT_LOCALE] ?? {},
    commonData[locale] ?? {}
  );
  const faq = mergeFaq(faqData[locale]);

  return { content, common, faq };
}

export function pick<T>(
  source: Record<string, unknown>,
  key: string,
  fallback: T
): T {
  const value = source[key];
  return (value as T) ?? fallback;
}

export type { FaqItem };
