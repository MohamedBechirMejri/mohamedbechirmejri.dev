import { Text } from "@react-three/drei";

const Background = () => {
  return (
    <group>
      <Text
        font="/assets/fonts/bangers.ttf"
        position={[0.3, 0.5, 0]}
        rotation={[0.2, 0.5, 0]}
        castShadow
        maxWidth={2}
        fontSize={1.27}
        textAlign="center"
      >
        Mohamed Bechir Mejri
      </Text>
      <Text
        font="/assets/fonts/bangers.ttf"
        position={[0, -2.5, 0]}
        rotation={[0, 0, 0]}
        castShadow
        fontSize={0.7}
        textAlign="center"
      >
        Full Stack Dev
        <meshBasicMaterial color={"#1f1818"} toneMapped={false} />
      </Text>
    </group>
  );
};
export default Background;
