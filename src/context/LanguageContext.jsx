import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../constants/translations';

// 1. CREAMOS UN VALOR POR DEFECTO (KIT DE EMERGENCIA)
const defaultContext = {
  language: 'es',
  toggleLanguage: () => console.warn("Provider missing"),
  t: translations.es
};

// 2. EXPORTAMOS EL CONTEXTO (Importante)
export const LanguageContext = createContext(defaultContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    try {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith('tr')) {
        setLanguage('tr');
      } else if (browserLang.startsWith('en')) {
        setLanguage('en');
      } else {
        setLanguage('es');
      }
    } catch (e) {
      console.warn("Language detection failed, defaulting to ES");
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      if (prev === 'es') return 'en';
      if (prev === 'en') return 'tr';
      return 'es';
    });
  };

  const t = translations[language] || translations.es;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    return defaultContext;
  }
  return context;
};