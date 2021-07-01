import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en_US from './utils/locales/en_US.json';
import zh_CN from './utils/locales/zh_CN.json';

let lang = 'zh_CN';
// let lang = localStorage.getItem("language");
// if (!lang) {
//     lang = 'zh_CN';
//     localStorage.setItem("language", 'zh_CN');
// }
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en_US: {
                translation: en_US,
            },
            zh_CN: {
                translation: zh_CN,
            },
        },
        fallbackLng: lang,
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
