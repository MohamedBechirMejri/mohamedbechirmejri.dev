import Head from "next/head";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("../components/Scene"), {
  ssr: false,
  loading: () => (
    <h1 className="fixed flex h-[100svh] w-[100svw] animate-pulse items-center justify-center text-8xl font-bold">
      Loading...
    </h1>
  ),
});

const MobileScene = dynamic(() => import("../components/MobileScene"), {
  ssr: false,
  loading: () => (
    <h1 className="fixed flex h-[100svh] w-[100svw] animate-pulse items-center justify-center text-3xl font-bold">
      Loading...
    </h1>
  ),
});

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Mohamed Bechir Mejri</title>
        <meta name="description" content="Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100svh] w-[100svw]">
        {isMobile ? <MobileScene /> : <Scene />}
        <Footer />
      </div>
    </>
  );
};

export default Home;
