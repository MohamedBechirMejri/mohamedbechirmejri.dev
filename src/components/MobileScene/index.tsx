import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { Suspense } from "react";
import Background from "./Background";

const MobileScene = () => {
  return (
    <Canvas className="bg-gradient-to-br from-[#764BA2] to-[#E2D1C3]">
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
          <group
            rotation={[0, 0, 0]}
            position={[0, 1, 0]}
            scale={[14, 14, 14]}
          ></group>
          <Environment preset="city" />
        </Suspense>

        <Background />
      </PresentationControls>

      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
};

export default MobileScene;