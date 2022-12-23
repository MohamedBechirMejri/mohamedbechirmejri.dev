import Head from "next/head";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mohamed Bechir Mejri</title>
        <meta name="description" content="MBM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-green-100 font-[Montserrat] text-green-900 selection:bg-green-900 selection:text-green-100 p-8">
        <div className="flex h-screen w-full items-center justify-center p-8">
          <h1 className="text-8xl font-bold">
            Mohamed Bechir <br /> Mejri
          </h1>
        </div>
        <Projects />
      </div>
    </>
  );
};

export default Home;
