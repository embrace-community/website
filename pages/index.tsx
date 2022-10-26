import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton, useAccount, AccountButton } from "@web3modal/react";
import ClientOnlyWrapper from "../components/ClientOnlyWrapper";

const Home: NextPage = () => {
  const { connected, address } = useAccount();

  return (
    <div className={styles.container}>
      <Head>
        <title>Embrace Community</title>
        <meta name="description" content="Embrace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Embrace!
        {connected ? (
          <>
            <h1>{address ? address : "none"} </h1>
          </>
        ) : (
          <ConnectButton />
        )}
      </main>

      <footer className={styles.footer}>.</footer>
    </div>
  );
};

export default Home;
