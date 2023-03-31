import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mail(props) {
    const { nodes, materials } = useGLTF('./assets/models/mail.gltf')
    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="Mail"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mail.geometry}
                    material={materials['Color - Red']}
                    userData={{ name: 'Mail' }}
                />
            </group>
        </group>
    )
}

useGLTF.preload('./assets/models/mail.gltf')
