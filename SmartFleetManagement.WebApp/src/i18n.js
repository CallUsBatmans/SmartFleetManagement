import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations, defaultLocale } from './internationalization';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: defaultLocale,
    debug: true,
    nsSeparator: '::',
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: translations.english.resources,
      ro: translations.romanian.resources,
    }
  });

export default i18n;
