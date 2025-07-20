export const locales = ['en', 'ar', 'ku'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeConfig = {
  en: {
    name: 'English',
    dir: 'ltr',
    flag: '🇺🇸',
  },
  ar: {
    name: 'العربية',
    dir: 'rtl',
    flag: '🇸🇦',
  },
  ku: {
    name: 'کوردی',
    dir: 'rtl',
    flag: '🟨🟦',
  },
} as const;