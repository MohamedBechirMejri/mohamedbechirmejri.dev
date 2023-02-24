/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Head from "next/head";
import { Laptop } from "../components/Laptop";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mohamed Bechir Mejri</title>
        <meta name="description" content="MBM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100svh] w-[100svw]">
        <Canvas className="bg-black bg-opacity-60">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <spotLight
            position={[-10, -10, -10]}
            angle={0.15}
            penumbra={1}
            castShadow
          />
          <spotLight
            position={[0, 10, -2]}
            angle={0.15}
            penumbra={1}
            castShadow
          />

          <Laptop />

          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
};

export default Home;
