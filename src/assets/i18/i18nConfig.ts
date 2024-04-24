import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const language = navigator.language.split("-")[0];

i18n.use(initReactI18next).init({
  resources: {
    [language]: {
      translation: {},
    },
    uk: {
      translation: {},
    },
    ru: {
      translation: {},
    },
    en: {
      translation: {},
    },
  },
  lng: language,
  fallbackLng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
