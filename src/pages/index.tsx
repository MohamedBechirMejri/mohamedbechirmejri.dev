import Head from "next/head";
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
        <div className="flex h-screen w-full items-center justify-center p-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-7xl font-bold transition-all sm:text-8xl">
              Mohamed Bechir <br /> Mejri
            </h1>
            <p className="text-3xl">full-stack web developer</p>
          </div>
        </div>
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
