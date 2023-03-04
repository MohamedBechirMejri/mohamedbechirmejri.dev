/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: kirigami318 (https://sketchfab.com/kirigami318)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/asus-rog-zephyrus-duo-16-479cb2e29c7a443380775be38ddddbd9
Title: Asus ROG Zephyrus Duo 16
*/

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { LoopOnce, MathUtils } from "three";

import Screen1 from "./Screen1";
import { useFrame } from "@react-three/fiber";
import Screen2 from "./Screen2";

export function Laptop(props: any) {
  const group = useRef();
  // @ts-ignore
  const { nodes, materials, animations } = useGLTF(
    "/assets/3d/asus_rog_zephyrus_duo_16/scene.gltf"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["Animation"]) {
      const animation = actions["Animation"];
      animation.loop = LoopOnce;
      animation.clampWhenFinished = true;
      animation.play();
    }
  }, [actions]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // @ts-ignore
    group.current!.rotation.x = MathUtils.lerp(
      // @ts-ignore
      group.current!.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    // @ts-ignore
    group.current!.rotation.y = MathUtils.lerp(
      // @ts-ignore
      group.current!.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    // @ts-ignore
    group.current!.rotation.z = MathUtils.lerp(
      // @ts-ignore
      group.current!.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
    // @ts-ignore
    group.current!.position.y = MathUtils.lerp(
      // @ts-ignore
      group.current!.position.y,
      (-2 + Math.sin(t / 2)) / 20,
      0.1
    );
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Plane015_7001_4"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_13"
                  geometry={nodes.Object_13.geometry}
                  material={materials.body_metal}
                />
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials.body_panel}
                />
                <mesh
                  name="Object_15"
                  geometry={nodes.Object_15.geometry}
                  material={materials.panel_2}
                >
                  <Html
                    className="h-[2.2rem] w-[7.5rem]"
                    rotation-x={-1.53}
                    position={[0, 0.03, 0.025]}
                    transform
                    occlude="blending"
                  >
                    <div
                      className="h-full"
                      onPointerDown={(e) => e.stopPropagation()}
                    >
                      <Screen2 />
                    </div>
                  </Html>
                </mesh>
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials.logo_rough}
                />
              </group>
              <group
                name="Plane020_5"
                position={[0, -0.16, -0.07]}
                rotation={[1.36, 0, 0]}
                scale={0.12}
              >
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials.body_metal}
                />
              </group>
              <group
                name="922_6"
                position={[0, -0.11, -0.11]}
                rotation={[1.61, 0, 0]}
                scale={0.04}
              >
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials.monitor}
                />
                <mesh
                  name="Object_21"
                  geometry={nodes.Object_21.geometry}
                  material={materials.metal_logo}
                />
                <mesh
                  name="Object_22"
                  geometry={nodes.Object_22.geometry}
                  material={materials.displauy}
                >
                  <Html
                    className="h-[13.8rem] w-[22.1rem]"
                    rotation-x={0}
                    position={[0, 3.63, -0.15]}
                    transform
                    occlude="blending"
                    castShadow
                    receiveShadow
                  >
                    <div
                      className="h-full"
                      onPointerDown={(e) => e.stopPropagation()}
                    >
                      <Screen1 />
                    </div>
                  </Html>
                </mesh>
                <mesh
                  name="Object_23"
                  geometry={nodes.Object_23.geometry}
                  material={materials.material_12}
                />
                <mesh
                  name="Object_24"
                  geometry={nodes.Object_24.geometry}
                  material={materials.material_12}
                />
                <mesh
                  name="Object_25"
                  geometry={nodes.Object_25.geometry}
                  material={materials.line}
                />
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials.cam_mat}
                />
                <mesh
                  name="Object_27"
                  geometry={nodes.Object_27.geometry}
                  material={materials.kosong}
                />
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials.camg}
                />
                <mesh
                  name="Object_29"
                  geometry={nodes.Object_29.geometry}
                  material={materials.kaca_mga}
                />
              </group>
              <group
                name="Plane018_0"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.keycap}
                />
              </group>
              <group
                name="Plane021_1"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.kosong}
                />
              </group>
              <group name="numpad_2" position={[0, -0.11, -0.05]} scale={0.12}>
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.numpad}
                />
                <mesh
                  name="Object_9"
                  geometry={nodes.Object_9.geometry}
                  material={materials.text}
                />
              </group>
              <group
                name="key_name001_3"
                position={[0, -0.0955, -0.135]}
                rotation={[-0.05, 0, 0]}
                scale={0.12}
              >
                <mesh
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Circle_7" position={[0, -0.11, -0.05]} scale={0.12}>
                <mesh
                  name="Object_31"
                  geometry={nodes.Object_31.geometry}
                  material={materials.logo_rough}
                />
              </group>
              <group name="Cube_8" position={[0, -0.11, -0.05]} scale={0.12}>
                <mesh
                  name="Object_33"
                  geometry={nodes.Object_33.geometry}
                  material={materials.heatsink}
                />
              </group>
              <group name="Cube007_9" position={[0, -0.11, -0.05]} scale={0.12}>
                <mesh
                  name="Object_35"
                  geometry={nodes.Object_35.geometry}
                  material={materials.material_18}
                />
                <mesh
                  name="Object_36"
                  geometry={nodes.Object_36.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Plane_10" position={[0, -0.11, -0.05]} scale={0.12}>
                <mesh
                  name="Object_38"
                  geometry={nodes.Object_38.geometry}
                  material={materials.body_metal}
                />
                <mesh
                  name="Object_39"
                  geometry={nodes.Object_39.geometry}
                  material={materials.body_panel}
                />
                <mesh
                  name="Object_40"
                  geometry={nodes.Object_40.geometry}
                  material={materials.rgb_inside}
                />
                <mesh
                  name="Object_41"
                  geometry={nodes.Object_41.geometry}
                  material={materials.kosong}
                />
                <mesh
                  name="Object_42"
                  geometry={nodes.Object_42.geometry}
                  material={materials.metal_bar}
                />
              </group>
              <group
                name="Plane003_11"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_44"
                  geometry={nodes.Object_44.geometry}
                  material={materials.body_metal}
                />
                <mesh
                  name="Object_45"
                  geometry={nodes.Object_45.geometry}
                  material={materials.kosong}
                />
              </group>
              <group
                name="Plane007_12"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_47"
                  geometry={nodes.Object_47.geometry}
                  material={materials.body_metal}
                />
                <mesh
                  name="Object_48"
                  geometry={nodes.Object_48.geometry}
                  material={materials.kaki}
                />
              </group>
              <group
                name="Plane008_13"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_50"
                  geometry={nodes.Object_50.geometry}
                  material={materials.body_metal}
                />
              </group>
              <group
                name="Plane009_14"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_52"
                  geometry={nodes.Object_52.geometry}
                  material={materials.logo_rough}
                />
              </group>
              <group
                name="Plane010_15"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_54"
                  geometry={nodes.Object_54.geometry}
                  material={materials.body_metal}
                />
                <mesh
                  name="Object_55"
                  geometry={nodes.Object_55.geometry}
                  material={materials.kosong}
                />
              </group>
              <group
                name="Plane014_16"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_57"
                  geometry={nodes.Object_57.geometry}
                  material={materials.kosong}
                />
              </group>
              <group
                name="Plane023_17"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_59"
                  geometry={nodes.Object_59.geometry}
                  material={materials.body_metal}
                />
              </group>
              <group
                name="Plane024_18"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_61"
                  geometry={nodes.Object_61.geometry}
                  material={materials.body_metal}
                />
              </group>
              <group
                name="Plane025_19"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_63"
                  geometry={nodes.Object_63.geometry}
                  material={materials.kaca_mga}
                />
              </group>
              <group
                name="Plane026_20"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_65"
                  geometry={nodes.Object_65.geometry}
                  material={materials.rgb_semi}
                />
              </group>
              <group
                name="Plane028_21"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_67"
                  geometry={nodes.Object_67.geometry}
                  material={materials.colokan}
                />
                <mesh
                  name="Object_68"
                  geometry={nodes.Object_68.geometry}
                  material={materials.kosong}
                />
              </group>
              <group
                name="Plane030_22"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_70"
                  geometry={nodes.Object_70.geometry}
                  material={materials.body_metal}
                />
              </group>
              <group
                name="Plane031_23"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_72"
                  geometry={nodes.Object_72.geometry}
                  material={materials.heatsink}
                />
                <mesh
                  name="Object_73"
                  geometry={nodes.Object_73.geometry}
                  material={materials.kosong}
                />
              </group>
              <group name="Text_24" position={[0, -0.11, -0.05]} scale={0.12}>
                <mesh
                  name="Object_75"
                  geometry={nodes.Object_75.geometry}
                  material={materials.logo_rough}
                />
              </group>
              <group
                name="Text001_25"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_77"
                  geometry={nodes.Object_77.geometry}
                  material={materials.text}
                />
              </group>
              <group
                name="Text002_26"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_79"
                  geometry={nodes.Object_79.geometry}
                  material={materials.text}
                />
              </group>
              <group
                name="Text003_27"
                position={[0, -0.11, -0.05]}
                scale={0.12}
              >
                <mesh
                  name="Object_81"
                  geometry={nodes.Object_81.geometry}
                  material={materials.text}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/3d/asus_rog_zephyrus_duo_16/scene.gltf");
