import { Text } from "@react-three/drei";
import { useControls } from "leva";

const Background = () => {
  const { r, g, b } = useControls({
    r: { value: 0.5, min: 0, max: 1 },
    g: { value: 0.5, min: 0, max: 1 },
    b: { value: 0.5, min: 0, max: 1 },
  });

  return (
    <group>
      <Text
        font="/assets/fonts/bangers.ttf"
        position={[-8, 2, -5.8]}
        rotation={[0.42, 0.48, 0.12]}
        castShadow
        maxWidth={2}
        fontSize={2}
      >
        Mohamed Bechir Mejri
      </Text>
      <Text
        font="/assets/fonts/bangers.ttf"
        position={[5.6, 0, -2.4]}
        rotation={[1.26, -1.38, 1]}
        castShadow
      >
        Full Stack Dev
        <meshBasicMaterial color={[r, g, b]} toneMapped={false} />
      </Text>
    </group>
  );
};
export default Background;
