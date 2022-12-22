import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import Head from "next/head";
import Box from "../components/Box";
import Plane from "../components/Plane";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mohamed Bechir Mejri</title>
        <meta name="description" content="MBM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {/* <Plane position={[0, 0, -1]} /> */}
          <Box />
          <Text color={"red"} material-toneMapped={false} position={[0, 0, 0]}>
            My Title
          </Text>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
};

export default Home;
