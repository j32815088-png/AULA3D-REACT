import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function GiroCubo({ velocidad,color }) {
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

export default GiroCubo
