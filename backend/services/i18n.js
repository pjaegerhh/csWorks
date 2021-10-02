// see https://github.com/PhraseApp-Blog/react-native-i18n-demo
// see https://phrase.com/blog/posts/javascript-i18n-i18next-moment-js/
// see https://phrase.com/blog/posts/react-native-i18n-with-expo-and-i18next-part-1/
// see https://www.i18next.com/overview/getting-started
// see https://blog.logrocket.com/4-alternatives-to-moment-js-for-internationalizing-dates/


export const fallback = "en";

export const supportedLocales = {
    en: {
        name: "English",
        translationFileLoader: () => require('../lang/en.json'),
    },
    de: {
        name: "Deutsch",
        translationFileLoader: () => require('../lang/de.json'),
    },
};

export const defaultNamespace = "common";

export const namespaces = [
    "common",
    "lists",
    "ListScreen",
    "ListOfTodos",
    "AddTodoScreen",
    "DatePickerAndroid",
];
