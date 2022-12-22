import { useTexture } from "@react-three/drei";

const Plane = (props: any) => {
  const texture = useTexture("/texture.jpg");

  return (
    <mesh {...props}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default Plane;
