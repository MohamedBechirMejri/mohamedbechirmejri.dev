import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full w-full items-center justify-center bg-green-100 text-center text-5xl font-bold text-green-900 transition-all lg:text-8xl">
        <h1>
          404 <br /> Under Construction
        </h1>
      </div>
    </>
  );
};

export default Custom404;
