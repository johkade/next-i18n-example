import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getServerSidePropsWithI18n } from "../util/get-ssp-with-i18n";
import { NextPageWithI18n } from "../util/types";
import { externalTFunction } from "../util/external-t-function";

export const getServerSideProps = getServerSidePropsWithI18n;

const Home: NextPageWithI18n = ({ locale }) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      <Head>
        <title>i18n w/o i18n-routes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>locale: {locale}</p>
        <br />
        <p>{externalTFunction("hello")}</p>

        <p>{t("hello")}</p>

        <Link href={"/some-other-page"}>{t("toSomeOtherPage")}</Link>
      </main>
    </div>
  );
};

export default Home;
