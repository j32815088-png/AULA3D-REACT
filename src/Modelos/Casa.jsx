import React from "react";
import { useGLTF } from "@react-three/drei";



function Casa(){
  const position = [0.7, 0, 5],
        rotation = [0, 0, 0],
        scale = [1, 1, 1];

  const { scene } = useGLTF("/modelos/casa.glb");
  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}

export default Casa;
