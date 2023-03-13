import Head from "next/head";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";

const Scene = dynamic(() => import("../components/Scene"), {
  ssr: false,
  loading: () => (
    <h1 className="fixed flex h-[100svh] w-[100svw] animate-pulse items-center justify-center text-8xl font-bold">
      Loading...
    </h1>
  ),
});

const Home = () => {
  return (
    <>
      <Head>
        <title>Mohamed Bechir Mejri</title>
        <meta name="description" content="MBM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100svh] w-[100svw]">
        {/* <Scene /> */}
        <h1 className="fixed flex h-[100svh] w-[100svw] items-center justify-center bg-gradient-to-br from-[#764BA2] to-[#E2D1C3] text-3xl font-bold xl:text-8xl">
          In Development...
        </h1>
        <Footer />
      </div>
    </>
  );
};

export default Home;
