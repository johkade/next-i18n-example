import { useTranslation } from "next-i18next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getServerSidePropsWithI18n } from "../util/get-ssp-with-i18n";
import { NextPageWithI18n } from "../util/types";

export const getServerSideProps = getServerSidePropsWithI18n;

const SomeOtherPage: NextPageWithI18n = ({ locale }) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      <Head>
        <title>some other page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>{t("someOtherPage")}</h2>
        <p>locale: {locale}</p>
        <br />
        <p>{t("hello")}</p>
      </main>
    </div>
  );
};

export default SomeOtherPage;
