import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import ar from './ar.json';
import * as RNLocalize from 'react-native-localize';
i18n.use(initReactI18next).init({
  // lng: RNLocalize.getLocales()[0].languageTag,
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
