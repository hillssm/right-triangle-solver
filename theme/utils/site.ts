import navigationConfig from 'src/config/navigation.json';
import siteConfig from 'src/config/site.json';
import { localizeNavHref, type Locale } from 'theme/i18n/locales';

export type SiteConfig = {
  brandName: string;
  legalName: string;
  baseUrl: string;
  description: string;
  author: string;
  metaImage: string;
  metaImageWidth: number;
  metaImageHeight: number;
  metaImageAlt: string;
  logo: string;
  contactEmail: string;
  webmasterVerification: {
    google?: string;
    bing?: string;
    yandex?: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    pinterest?: string;
    instagram?: string;
    youtube?: string;
    bluesky?: string;
  };
  contact: {
    formEndpoint: string;
    formAccessKey?: string;
  };
  aiPolicy: string;
};

type NavItem = {
  labelKey: string;
  href: string;
};

type NavigationConfig = {
  header: NavItem[];
  footer: NavItem[];
};

export const site = siteConfig as SiteConfig;
export const navigation = navigationConfig as NavigationConfig;

export function toAbsoluteUrl(pathname: string): string {
  return new URL(pathname, site.baseUrl).toString();
}

export function getLocalizedNavItems(
  locale: Locale,
  section: keyof NavigationConfig,
  navLabels: Record<string, string>
) {
  return navigation[section].map((item) => ({
    label: navLabels[item.labelKey] ?? item.labelKey,
    href: localizeNavHref(locale, item.href),
    labelKey: item.labelKey
  }));
}

export function getEnabledSocialLinks() {
  const entries = Object.entries(site.social).filter(([, value]) => Boolean(value));
  return entries.map(([name, href]) => ({ name, href: href as string }));
}
