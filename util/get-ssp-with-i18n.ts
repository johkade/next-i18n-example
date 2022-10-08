import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLocaleFromAcceptLanguageHeader } from "./get-locale";

export const getServerSidePropsWithI18n: GetServerSideProps = async ({
  req,
}) => {
  const maybeAcceptLanguageHeader = req.headers["accept-language"];

  const locale = getLocaleFromAcceptLanguageHeader(maybeAcceptLanguageHeader);

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
