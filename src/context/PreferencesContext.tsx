'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, siteContent, SiteData } from '@/data/siteContent';

export type FontSizeScale = 'normal' | 'large' | 'xlarge';

interface PreferencesContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  fontSize: FontSizeScale;
  setFontSize: (size: FontSizeScale) => void;
  content: SiteData;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('id');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<FontSizeScale>('normal');

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.lang = lang;

    if (fontSize === 'large') {
      htmlElement.style.fontSize = '112.5%'; // 18px base
    } else if (fontSize === 'xlarge') {
      htmlElement.style.fontSize = '125%'; // 20px base
    } else {
      htmlElement.style.fontSize = '100%'; // 16px base
    }
  }, [lang, fontSize]);

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const value: PreferencesContextType = {
    lang,
    setLang,
    highContrast,
    toggleHighContrast,
    fontSize,
    setFontSize,
    content: siteContent[lang],
  };

  return (
    <PreferencesContext.Provider value={value}>
      <div
        className={
          highContrast
            ? 'min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black'
            : 'min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-700 selection:text-white'
        }
      >
        {children}
      </div>
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences harus digunakan di dalam PreferencesProvider');
  }
  return context;
}
