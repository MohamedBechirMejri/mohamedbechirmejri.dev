import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  PresentationControls,
  Tetrahedron,
} from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";
import { Laptop } from "../components/Laptop";
import { Suspense } from "react";
import { useControls } from "leva";

const Scene = () => {
  return (
    <Canvas className="bg-black">
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <spotLight
        position={[-10, -10, -10]}
        angle={0.15}
        penumbra={1}
        castShadow
      />
      <spotLight position={[0, 10, -2]} angle={0.15} penumbra={1} castShadow />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Suspense fallback={null}>
          <group rotation={[0, 0, 0]} position={[0, 1, 0]} scale={[14, 14, 14]}>
            {/* <Laptop /> */}
          </group>
          <Environment preset="city" />
        </Suspense>
      </PresentationControls>

      <Tetrahedron
        args={[1, 0]}
        position={[8, -4, -3]}
        rotation={[1.8, 1.05, 1.02]}
        receiveShadow
      >
        <meshBasicMaterial color={[1.6, 1.5, 4.7]} toneMapped={false} />
      </Tetrahedron>

      {/* <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} /> */}

      {/* <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer> */}
    </Canvas>
  );
};

export default Scene;
