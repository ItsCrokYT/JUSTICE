import { useLanguage } from "../context/LanguageContext";
import { translations } from "../constants/translations";

export const useI18nBridge = () => {
  const context = useLanguage();
  
  // 1. Intentamos obtener 't' del contexto
  // 2. Si falla, usamos las traducciones en español importadas directamente como respaldo final
  const safeT = context?.t || translations.es;

  return {
    lang: context?.language || 'es',
    toggleLang: context?.toggleLanguage || (() => console.warn('No provider')),
    
    // Accesores seguros (Nunca devolverán undefined)
    nav: safeT.nav || {},
    hero: safeT.hero || {},
    about: safeT.about || {},
    stats: safeT.stats || {},
    process: safeT.process || {},
    team: safeT.team || {},
    feedbacks: safeT.feedbacks || {},
    contact: safeT.contact || {},
    footer: safeT.footer || {},
    
    // Raw T por si acaso
    t: safeT
  };
};