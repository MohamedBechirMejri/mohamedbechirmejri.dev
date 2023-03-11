import { Tetrahedron, Circle } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import { AudioLoader, AudioListener, Audio, AudioAnalyser } from "three";

const AudioVisualizer = ({
  audioUrl = "/assets/mp3/bittersweet.mp3",
}: {
  audioUrl: string;
}) => {
  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const ref4 = useRef<any>();

  const listener = new AudioListener();
  const sound = new Audio(listener);

  // Load the audio file
  const audioLoader = new AudioLoader();
  audioLoader.load(audioUrl, (buffer) => {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.5);
    sound.play();
  });

  const analyser = new AudioAnalyser(sound, 1024);

  useFrame(() => {
    // const frequencyData = analyser.getFrequencyData();
    const averageFrequency = analyser.getAverageFrequency();
    ref1.current.scale.set(
      -0.5 + averageFrequency / 100,
      -0.5 + averageFrequency / 100,
      -0.5 + averageFrequency / 100
    );
    ref2.current.scale.set(
      -0.5 + averageFrequency / 100,
      -0.5 + averageFrequency / 100,
      -0.5 + averageFrequency / 100
    );
    ref3.current.scale.set(
      -0.5 + averageFrequency / 100,
      -0.5 + averageFrequency / 100,
      -0.5 + averageFrequency / 100
    );
    ref4.current.scale.set(
      -0.5 + averageFrequency / 100,
      -0.5 + averageFrequency / 100,
      -0.5 + averageFrequency / 100
    );
  });

  //   const { cpx, cpy, cpz } = useControls({
  //     cpx: { value: 0, min: -10, max: 10, step: 0.1 },
  //     cpy: { value: 0, min: -10, max: 10, step: 0.1 },
  //     cpz: { value: 0, min: -10, max: 10, step: 0.1 },
  //   });

  return (
    <group>
      {/* <Tetrahedron
        args={[1, 0]}
        position={[8, -4, -3]}
        rotation={[1.8, 1.05, 1.02]}
        receiveShadow
      >
        <meshBasicMaterial color={[1.6, 1.5, 4.7]} toneMapped={false} />
      </Tetrahedron> */}
      <Circle position={[-5, 2.4, 0]} ref={ref1}>
        <meshBasicMaterial color={[1.6, 1.5, 4.7]} toneMapped={false} />
      </Circle>
      <Circle position={[5, 2.4, 0]} ref={ref2}>
        <meshBasicMaterial color={[1.6, 1.5, 4.7]} toneMapped={false} />
      </Circle>
      <Circle position={[-5, -2.4, 0]} ref={ref3}>
        <meshBasicMaterial color={[1.6, 1.5, 4.7]} toneMapped={false} />
      </Circle>
      <Circle position={[5, -2.4, 0]} ref={ref4}>
        <meshBasicMaterial color={[1.6, 1.5, 4.7]} toneMapped={false} />
      </Circle>
    </group>
  );
};

export default AudioVisualizer;
