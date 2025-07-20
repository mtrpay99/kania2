'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, defaultLocale, localeConfig } from '../i18n/config';
import { translations } from '../i18n/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // Load saved locale from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['en', 'ar', 'ku'].includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    // Save locale to localStorage
    localStorage.setItem('locale', locale);
    
    // Update document direction
    document.documentElement.dir = localeConfig[locale].dir;
    document.documentElement.lang = locale;
  }, [locale]);

  const getNestedTranslation = (obj: Record<string, unknown>, path: string): string => {
    return path.split('.').reduce((current: unknown, key: string): unknown => {
      if (current && typeof current === 'object' && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj) as string || path;
  };

  const t = (key: string): string => {
    return getNestedTranslation(translations[locale] as Record<string, unknown>, key);
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        locale, 
        setLocale, 
        t, 
        dir: localeConfig[locale].dir 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}