import { i18n } from "next-i18next";

export const externalTFunction = (key: string) => {
  if (i18n === null) return "i18n is null";

  if (!i18n?.isInitialized) {
    i18n?.init();
    console.log("initialized i18n");
  } else {
    console.log("i18n already initialized");
  }

  return i18n?.t(key) ?? "not translated";
};
