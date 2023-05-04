import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./locale/uz.json";
import en from "./locale/en.json";

i18n.use(initReactI18next).init({
  lng: "uz",
  fallbackLng: "uz",
  resources: {
    uz,
    en,
  },
});

export default i18n;
