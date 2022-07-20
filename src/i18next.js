import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en.json";
import jp from "./languages/jp.json";
import ch from "./languages/ch.json";

i18next.use(initReactI18next).init({
    resources : {
        en: {
            translation: en
        },
        jp: {
            translation: jp
        },
        ch: {
            translation: ch
        },
    },
    lng : localStorage.getItem("lng") || "en",
});

export default i18next;