// this is just for show and so next-i18next doesn't complain
module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-US", "en-GB", "de-DE", "nl-NL", "fr-FR", "pt-PT", "pt-BR"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-US",

    // this prevents the automatic redirect to an internationalized route like /hello/de
    // which we want to avoid
    localeDetection: false,
  },
};
