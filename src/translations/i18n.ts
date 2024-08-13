import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import ar from './ar.json';
i18n.use(initReactI18next).init({
  // lng: RNLocalize.getLocales()[0].languageTag,
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    ar: ar,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
