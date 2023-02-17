import Head from "next/head";
import { FcSettings } from "react-icons/fc";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Mohamed Bechir Mejri</title>
        <meta name="description" content="MBM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid min-h-[100svh] place-items-center text-7xl font-bold">
        <span className="relative animate-pulse">
          Under construction{" "}
          <FcSettings className="absolute -top-full -right-8 animate-spin" />
        </span>
      </div>
    </>
  );
};

export default Home;
