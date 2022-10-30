import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";
import Icons from '../components/icons';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-embracebg">
      <Head>
        <title>Embrace Community</title>
        <meta name="description" content="Embrace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Nav></Nav>
        <div className="w-full flex flex-col justify-center items-center h-96 mb-20 mt-12 px-7">
          <Icons.Logo fill="#8B5CF6" />
          <p className="mt-5 font-normal text-lg text-center">sovereign decentralised communities</p>
        </div>

        <div className="w-full flex flex-col justify-center items-center pt-28 pb-32 px-16 bg-white text-2xl text-center font-semibold">
          <div className=" max-w-md">
            <p className="mt-5 text-embracedark">Web3 communities rely upon tools that are scattered across a variety of platforms.</p>
            <p className="mt-5 text-violet-500">But they are not necessary aligned with the values of Web3. </p>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-left pt-28 pb-32 px-20 text-left font-semibold extrastyles-subtlebg">
          <div className=" max-w-md">
            <Icons.Monotype />
            <p className="mt-5 text-embracedark text-2xl"><span className="text-violet-500">embrace.community</span> enables the creation of decentralised Spaces to support the growth of communities in the Web3 era.</p>
            <p className="mt-5 text-embracedark font-normal text-xl">Spaces are a blank canvas ready to be shaped. They can be public, private or anonymous. </p>
          </div>
        </div>


      </main>
      <footer className="w-full bg-embracedark pt-14 pb-24 flex flex-row justify-center items-left">
        <Icons.Logo fill="white" width="140px" />
      </footer>
    </div>
  );
};

export default Home;
