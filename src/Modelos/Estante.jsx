import React from "react";
import { useGLTF } from "@react-three/drei";

function Estante({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
}) {
  const { scene } = useGLTF("/modelos/estante.glb");
  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}

export default Estante;

