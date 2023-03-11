import { Text } from "@react-three/drei";

const Background = () => {
  return (
    <group>
      <Text
        font="/assets/fonts/bangers.ttf"
        position={[-8.5, 0.5, -5.8]}
        rotation={[0.42, 0.48, 0.12]}
        castShadow
        maxWidth={2}
        fontSize={2}
      >
        Mohamed Bechir Mejri
      </Text>
      <Text
        font="/assets/fonts/bangers.ttf"
        position={[6, 0, -2.4]}
        rotation={[1.26, -1.38, 1]}
        castShadow
        maxWidth={2}
        fontSize={2}
        textAlign="center"
      >
        Full Stack Dev
        <meshBasicMaterial color={"#1f1818"} toneMapped={false} />
      </Text>
    </group>
  );
};
export default Background;
