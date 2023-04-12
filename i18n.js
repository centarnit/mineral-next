import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLandingPageTranslations from "./utils/translations/en/landing_page.json";
import enHeader from "./utils/translations/en/header.json";
import enReference from "./utils/translations/en/reference.json";
import enQuarry from "./utils/translations/en/quarry.json";
import enAbout from "./utils/translations/en/about.json";
import enContact from "./utils/translations/en/contact.json";
import enFooter from "./utils/translations/en/footer.json";

import slLandingPageTranslations from "./utils/translations/sl/landing_page.json";
import slHeader from "./utils/translations/sl/header.json";
import slReference from "./utils/translations/sl/reference.json";
import slQuarry from "./utils/translations/sl/quarry.json";
import slAbout from "./utils/translations/sl/about.json";
import slContact from "./utils/translations/sl/contact.json";
import slFooter from "./utils/translations/sl/footer.json";

const resources = {
    en: {
        landing_page: enLandingPageTranslations,
        header: enHeader,
        reference: enReference,
        quarry: enQuarry,
        about: enAbout,
        contact: enContact,
        footer: enFooter,
    },
    sl: {
        landing_page: slLandingPageTranslations,
        header: slHeader,
        reference: slReference,
        quarry: slQuarry,
        about: slAbout,
        contact: slContact,
        footer: slFooter,
    },
};

let language = "sl"; // Default to Slovenian

if (typeof window !== "undefined") {
    language = window.sessionStorage.getItem("language") || "sl";
}

i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: "sl",
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});

if (typeof window !== "undefined") {
    i18n.on("languageChanged", (lng) => {
        window.sessionStorage.setItem("language", lng);
    });
}

export default i18n;
