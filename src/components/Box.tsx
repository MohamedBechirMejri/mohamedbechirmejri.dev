import { motion } from "framer-motion-3d";

const Box = (props: any) => {
  return (
    <motion.mesh {...props}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial
        roughness={0}
        transmission={1}
        thickness={0.5}
      />
    </motion.mesh>
  );
};

export default Box;
