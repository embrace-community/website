import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Test from "../components/test";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Embrace Community</title>
        <meta name="description" content="Embrace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>Embrace!</main>
      <Test></Test>
      <footer className={styles.footer}>.</footer>
    </div>
  );
};

export default Home;
