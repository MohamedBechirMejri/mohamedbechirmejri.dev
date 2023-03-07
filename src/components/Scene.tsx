import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";
import { Laptop } from "../components/Laptop";
import { Suspense } from "react";

const Scene = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <spotLight
        position={[-10, -10, -10]}
        angle={0.15}
        penumbra={1}
        castShadow
      />
      <spotLight position={[0, 10, -2]} angle={0.15} penumbra={1} castShadow />

      <Suspense fallback={null}>
        <group rotation={[0, 0, 0]} position={[0, 1, 0]} scale={[14, 14, 14]}>
          <Laptop />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  );
};

export default Scene;
