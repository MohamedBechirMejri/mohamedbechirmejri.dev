/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
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
          {/* <mesh geometry={nodes["92.2_6"].geometry}>
            <Html
              className="bg-white"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              occlude
            >
              <div
                className="wrapper"
                onPointerDown={(e) => e.stopPropagation()}
              >
                <h1>test</h1>
              </div>
            </Html>
          </mesh> */}
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
};

export default Home;
