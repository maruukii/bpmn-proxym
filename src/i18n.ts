import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import Fr from "./locales/fr_FR/index";
import En from "./locales/en_US/index";

// the translations
const resources = {
  "fr-FR": {
    translation: Fr,
  },
  "en-US": {
    translation: En,
  },
};

const language = localStorage.getItem("I18N_LANGUAGE");
if (!language||(language!="en-US" && language!="fr-FR")) {
  localStorage.setItem("I18N_LANGUAGE", "en-US");
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("I18N_LANGUAGE") || "en-US",
    fallbackLng: "fr-FR",


    interpolation: {
      escapeValue: false,
    },
    pluralSeparator: "_",

  });

export default i18n;
