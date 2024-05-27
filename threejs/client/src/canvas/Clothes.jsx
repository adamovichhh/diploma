import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Clothes = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF(snap.currentItem);

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));
  const stateString = JSON.stringify(snap);

  return( 
    <group key={stateString}>
        <mesh
            scale={[snap.size,snap.size,snap.size]}
            rotation={[snap.rotation,snap.rotation,snap.rotation]}
            castShadow
            geometry={nodes.T_Shirt_male.geometry}
            material={materials.lambert1}
            material-roughness={1}
            dispose={null}
        >
            {snap.isFullTexture && (
              <Decal
                position={[snap.texture_position.x, snap.texture_position.y, snap.texture_position.z]}
                rotation={[snap.rotation,snap.rotation,snap.rotation]}
                scale={snap.texture_size}
                map={fullTexture}
              />
            )}

            {snap.isLogoTexture && (
              <Decal 
                position={[snap.logo_position.x,snap.logo_position.y,snap.logo_position.z]}
                rotation={[snap.rotation,snap.rotation,snap.rotation]}
                scale={snap.logo_size}
                map={logoTexture}
                mapAnisotropy={16}
                depthTest={true}
                depthWrite={false}
              />
              
            )} 
        </mesh>
    </group>
  )
};

export default Clothes;
