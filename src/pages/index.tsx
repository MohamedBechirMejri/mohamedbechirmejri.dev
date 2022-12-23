import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mohamed Bechir Mejri</title>
        <meta name="description" content="MBM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-green-100 p-8 font-[Montserrat] text-green-900 selection:bg-green-900 selection:text-green-100">
        <Hero />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
