import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './src/locales/en/translation.json';
import arTranslations from './src/locales/ar/translation.json';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Function to change language and update document direction
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem('language', lng);
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
};

// Set initial direction based on saved language preference
document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = savedLanguage;

export default i18n;

