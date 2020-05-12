import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Translations from "./translations";
import { Language } from "../resources/enums";

i18n.use(initReactI18next).init({
  resources: Translations,
  lng: Language.br,
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
