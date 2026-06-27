import i18n from "i18next";
import i18n_http_backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const supportedLngs = {
  en: "English",
  cz: "Čeština",
  ua: "Українська"
};

let locale_load_path = '';

if (process.env.NODE_ENV === "development") {
  locale_load_path = '/locales/{{lng}}/translation.json'
} else if (process.env.NODE_ENV === "production") {
  locale_load_path = '/my_web_page/locales/{{lng}}/translation.json'
}

i18n
  .use(i18n_http_backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: window.localStorage.getItem("lang") || "en", // attempt to retrieve 'lang' key from 'localStorage': if it's unset or null, set 'en' as a default language

    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: locale_load_path
    }
  });

  export default i18n;