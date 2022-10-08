import "../styles/globals.css";
import type { AppProps } from "next/app";

import { appWithTranslation } from "next-i18next";
import { initI18n } from "../util/init-i18n";

initI18n();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
