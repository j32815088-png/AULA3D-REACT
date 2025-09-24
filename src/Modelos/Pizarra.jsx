import React from 'react'
import { useGLTF } from '@react-three/drei'
import { clone } from 'three/examples/jsm/utils/SkeletonUtils'

function Pizarra({ position = [0, 0, 0], rotation = [0,0, 0], scale = [1, 1, 1] }) {

  const { scene } = useGLTF('/modelos/pizarra.glb')
  const clonedScene = clone(scene);

  clonedScene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });
  return (<primitive
    object={clonedScene}
    position={position}
    rotation={rotation}
    scale={scale}
  />);
}

useGLTF.preload('/modelos/pizarra  .glb')

function Giropizarra({ velocidad,color }) {
    const referencia = useRef()

    useFrame((estado, delta) => {
        if (referencia.current) {
            referencia.current.rotation.x += delta * velocidad
            referencia.current.rotation.y += delta * velocidad
        }
    })

    return (
        <mesh ref={referencia} position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}


export default Pizarra;



