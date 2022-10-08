import { i18n } from "next-i18next";

export const initI18n = () => {
  if (!i18n?.isInitialized) {
    i18n?.init();
  }
};
