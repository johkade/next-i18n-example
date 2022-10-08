import resolveAcceptLanguage from "resolve-accept-language";

/**
 * parses the accept-language header and tries to get a locale from it.
 * If the locale is not supported, it returns the default one.
 */
export const getLocaleFromAcceptLanguageHeader = (
  acceptLanguage: string | undefined
) => {
  /** the first item is the default locale */
  const supported = ["en-US", "de-DE", "fr-FR", "nl-NL", "pt-PT", "pt-BR"];

  if (!acceptLanguage) return supported[0];

  const resolved = resolveAcceptLanguage(
    acceptLanguage,
    supported,
    supported[0]
  );

  return resolved;
};
