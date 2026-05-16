"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/lib/translations';
import type { TranslationValue } from '@/lib/translations/types';

type Language = 'en' | 'id';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  // Dynamic key-path lookup: the return shape depends on the path and
  // can be string, array, or nested object. Callers know which shape
  // they expect; strongly typing would require literal key-path inference.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('id');

  useEffect(() => {
    const savedLang = localStorage.getItem('orion-lang') as Language;
    if (savedLang) setLangState(savedLang);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('orion-lang', newLang);
  };

  // Helper to get nested translation keys like 'hero.title'.
  // See LanguageContextType.t for why the public signature uses `any`.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = (path: string): any => {
    const keys = path.split('.');
    let result: TranslationValue = translations[lang];

    for (const key of keys) {
      if (typeof result !== 'object' || result === null || Array.isArray(result)) {
        return path;
      }
      if (result[key] === undefined) return path;
      result = result[key];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

