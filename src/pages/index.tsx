/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Head from "next/head";
import { Laptop } from "../components/Laptop";
import { Suspense } from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mohamed Bechir Mejri</title>
        <meta name="description" content="MBM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100svh] w-[100svw]">
        <Canvas>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
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

          <Suspense fallback={null}>
            <group
              rotation={[0, 0, 0]}
              position={[0, 2, 0]}
              scale={[14, 14, 14]}
            >
              <Laptop />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows
            position={[0, -4.5, 0]}
            scale={20}
            blur={2}
            far={4.5}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>
    </>
  );
};

export default Home;
