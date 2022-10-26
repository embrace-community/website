import "../styles/globals.css";
import type { AppProps } from "next/app";
import { chains, providers } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

const NEXT_PUBLIC_PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;

const modalConfig = {
  projectId: NEXT_PUBLIC_PROJECT_ID,
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
    autoConnect: true,
    chains: [chains.mainnet, chains.goerli],
    providers: [
      // providers.walletConnectProvider({ projectId: NEXT_PUBLIC_PROJECT_ID }),
      // providers.jsonRpcProvider({
      //   rpc: (chain) => ({
      //     http: `https://evm.cronos.org/`,
      //   }),
      // }),
      providers.alchemyProvider({ apiKey: "0yIqvW3tQ-mvKDs59KTADfAffOkAFFP4" }),
    ],
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3Modal config={modalConfig} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
