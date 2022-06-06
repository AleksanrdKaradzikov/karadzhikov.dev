module.exports = {
    locales: ["en", "ru"],
    defaultLocale: "ru",
    pages: {
        "*": ["common"],
        "/": ["home"],
        "/about": ["about"]
    },
    loadLocaleFrom: (lang, ns) =>
        // You can use a dynamic import, fetch, whatever. You should
        // return a Promise with the JSON file.
        import(`./public/locales/${lang}/${ns}.json`),
}