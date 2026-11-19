"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "id" | "en";
type FontSize = "normal" | "large" | "xlarge";

interface PreferencesContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  highContrast: boolean;
  setHighContrast: (contrast: boolean) => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [highContrast, setHighContrast] = useState<boolean>(false);

  // Sinkronisasi atribut lang dan skala ukuran huruf pada elemen <html>
  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;

    if (fontSize === "normal") {
      root.style.fontSize = "16px";
    } else if (fontSize === "large") {
      root.style.fontSize = "18px";
    } else if (fontSize === "xlarge") {
      root.style.fontSize = "20px";
    }
  }, [language, fontSize]);

  return (
    <PreferencesContext.Provider
      value={{
        language,
        setLanguage,
        fontSize,
        setFontSize,
        highContrast,
        setHighContrast,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences harus digunakan di dalam PreferencesProvider");
  }
  return context;
}