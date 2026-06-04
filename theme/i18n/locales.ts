export const SUPPORTED_LOCALES = [
  'en',
  'hi',
  'es',
  'ru',
  'fr',
  'de',
  'it',
  'pt',
  'bn',
  'ja',
  'ko',
  'ms',
  'pl',
  'id',
  'ar',
  'bg',
  'tr',
  'sv',
  'zh'
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  hi: 'Hindi',
  es: 'Spanish',
  ru: 'Russian',
  fr: 'French',
  de: 'German',
  it: 'Italian',
  pt: 'Portuguese',
  bn: 'Bengali',
  ja: 'Japanese',
  ko: 'Korean',
  ms: 'Malay',
  pl: 'Polish',
  id: 'Indonesian',
  ar: 'Arabic',
  bg: 'Bulgarian',
  tr: 'Turkish',
  sv: 'Swedish',
  zh: 'Chinese'
};

const RTL_LOCALES = new Set<Locale>(['ar']);

const OG_LOCALE_MAP: Record<Locale, string> = {
  en: 'en_US',
  hi: 'hi_IN',
  es: 'es_ES',
  ru: 'ru_RU',
  fr: 'fr_FR',
  de: 'de_DE',
  it: 'it_IT',
  pt: 'pt_PT',
  bn: 'bn_BD',
  ja: 'ja_JP',
  ko: 'ko_KR',
  ms: 'ms_MY',
  pl: 'pl_PL',
  id: 'id_ID',
  ar: 'ar_AR',
  bg: 'bg_BG',
  tr: 'tr_TR',
  sv: 'sv_SE',
  zh: 'zh_CN'
};

export function isLocale(value: string | undefined | null): value is Locale {
  return Boolean(value && SUPPORTED_LOCALES.includes(value as Locale));
}

export function getLocaleFromParams(rawLocale: string | undefined): Locale {
  if (isLocale(rawLocale)) {
    return rawLocale;
  }
  return DEFAULT_LOCALE;
}

export function getLocaleFromPath(pathname: string): Locale {
  const [first] = pathname.split('/').filter(Boolean);
  return getLocaleFromParams(first);
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return RTL_LOCALES.has(locale) ? 'rtl' : 'ltr';
}

export function getOgLocale(locale: Locale): string {
  return OG_LOCALE_MAP[locale] ?? OG_LOCALE_MAP[DEFAULT_LOCALE];
}

export function getLocaleStaticPaths() {
  return SUPPORTED_LOCALES.filter(l => l !== DEFAULT_LOCALE).map((locale) => ({ params: { locale } }));
}

export function stripLocalePrefix(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const parts = normalized.split('/').filter(Boolean);
  
  if (parts.length > 0 && isLocale(parts[0])) {
    const stripped = '/' + parts.slice(1).join('/');
    return stripped.endsWith('/') || stripped === '' ? stripped : `${stripped}/`;
  }
  
  return normalized.endsWith('/') || normalized === '' ? normalized : `${normalized}/`;
}

const EXCLUDED_FROM_LOCALIZATION = new Set([
  'blog',
  'sitemap'
]);

export function isEnglishOnlyPath(path: string): boolean {
  const stripped = stripLocalePrefix(path);
  const normalized = stripped.startsWith('/') ? stripped.slice(1) : stripped;
  const firstPart = normalized.split('/')[0];
  return EXCLUDED_FROM_LOCALIZATION.has(firstPart);
}

export function localizePath(locale: Locale, path: string): string {
  const stripped = stripLocalePrefix(path);
  const normalized = stripped.startsWith('/') ? stripped.slice(1) : stripped;
  
  // Check if this path should remain in English
  if (isEnglishOnlyPath(path)) {
    return normalized === '' ? '/' : `/${normalized.endsWith('/') ? normalized : `${normalized}/`}`;
  }

  if (locale === DEFAULT_LOCALE) {
    return normalized === '' ? '/' : `/${normalized.endsWith('/') ? normalized : `${normalized}/`}`;
  }

  const joined = `/${locale}/${normalized}`;
  return joined.endsWith('/') ? joined : `${joined}/`;
}

export function localizeNavHref(locale: Locale, href: string): string {
  if (href.startsWith('/#')) {
    const rootPath = localizePath(locale, '/');
    return `${rootPath}#${href.slice(2)}`;
  }

  return localizePath(locale, href);
}

