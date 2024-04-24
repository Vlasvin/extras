import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ukTranslation from "./locales/uk.json";
import ruTranslation from "./locales/ru.json";
import enTranslation from "./locales/en.json";

const resources = {
  uk: {
    translation: ukTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "uk",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
