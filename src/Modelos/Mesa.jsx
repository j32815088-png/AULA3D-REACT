import React from 'react'
import { useGLTF } from '@react-three/drei'

function Mesa({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }) {
  const { scene } = useGLTF('./modelos/mesa.glb')
  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  )
}

useGLTF.preload('./modelos/mesa.glb')

export default Mesa
