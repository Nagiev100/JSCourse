import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector, {
    DetectorOptions,
} from "i18next-browser-languagedetector";

const DETECTION_OPTIONS: DetectorOptions = {
    order: ["localStorage"],
    caches: ["localStorage"],
    lookupLocalStorage: "lang",
};

i18next
    .use(initReactI18next)
    .use(HttpApi)
    .use(LanguageDetector)
    .init({
        detection: DETECTION_OPTIONS,
        supportedLngs: ["en", "ru"],
        interpolation: {
            escapeValue: false,
        },
        debug: process.env.NODE_ENV === "development",
    });

export default i18next;
