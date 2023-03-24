import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/Avatar.gltf");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.crown.play();
    actions.crown.setDuration(10);
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Crown"
          position={[-0.15, 0.35, -0.17]}
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Crown" }}
        >
          <group name="Crown_Division" userData={{ name: "Crown_Division" }}>
            <group
              name="Empty"
              position={[0.16, -0.17, 4.81]}
              rotation={[-0.1, 0.1, 0]}
              scale={0.89}
              userData={{ name: "Empty" }}
            >
              <group name="Halo_1" userData={{ name: "Halo_1" }}>
                <mesh
                  name="nimbus001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.nimbus001_0.geometry}
                  material={materials.Crown}
                  scale={[0.49, 0.49, 1]}
                  userData={{ name: "nimbus.001_0" }}
                />
              </group>
              <group name="Halo_2" userData={{ name: "Halo_2" }}>
                <mesh
                  name="nimbus002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.nimbus002_0.geometry}
                  material={materials.Crown}
                  scale={[0.49, 0.49, 1]}
                  userData={{ name: "nimbus.002_0" }}
                />
              </group>
              <group name="Halo_3" userData={{ name: "Halo_3" }}>
                <mesh
                  name="nimbus003_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.nimbus003_0.geometry}
                  material={materials.Crown}
                  scale={[0.49, 0.49, 0.84]}
                  userData={{ name: "nimbus.003_0" }}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="Avatar_Joints"
          castShadow
          receiveShadow
          geometry={nodes.Avatar_Joints.geometry}
          material={materials.Alpha_Joints_MAT}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
          userData={{ name: "Avatar_Joints" }}
        />
        <mesh
          name="Avatar_Surface"
          castShadow
          receiveShadow
          geometry={nodes.Avatar_Surface.geometry}
          material={materials.Alpha_Body_MAT}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.03}
          userData={{ name: "Avatar_Surface" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/Avatar.gltf");
