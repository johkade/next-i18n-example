import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getLocaleFromAcceptLanguageHeader } from "../util/get-locale";

type NextPageWithLocale = NextPage<{ locale: string }>;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const maybeAcceptLanguageHeader = req.headers["accept-language"];

  const locale = getLocaleFromAcceptLanguageHeader(maybeAcceptLanguageHeader);

  return { props: { locale } };
};

const Home: NextPageWithLocale = ({ locale }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>i18n w/o i18n-routes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>locale:</p>
        <p className={styles.title}>{locale}</p>
      </main>
    </div>
  );
};

export default Home;
