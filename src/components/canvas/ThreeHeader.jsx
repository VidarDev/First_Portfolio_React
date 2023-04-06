import { Suspense } from 'react'
import {
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Avatar } from '../models/Avatar'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
// import { EffectComposer, Glitch } from '@react-three/postprocessing'

const ThreeJs = () => {
    return (
        <>
            {/* <Perf position="top-left" /> */}

            {/* <EffectComposer>
                <Glitch
                    delay={[1.5, 2.5]}
                    duration={[0.1, 0.3]}
                    strength={[0.1, 0.15]}
                />
            </EffectComposer> */}

            <Environment
                files={[
                    './assets/environment.webp',
                    './assets/environment.webp',
                    './assets/environment.webp',
                    './assets/environment.webp',
                    './assets/environment.webp',
                    './assets/environment.webp',
                ]}
            />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.01}
                minPolarAngle={Math.PI / 2.05}
                maxPolarAngle={Math.PI - Math.PI / 2.05}
            />

            <PerspectiveCamera
                makeDefault
                position={[0, 0, 7]}
                fov={60}
                zoom={3.25}
            />

            <Avatar position={[0, -4.5, 0]} rotation={[0, 0, 0]} />

            {/* <Icosahedron onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}> <meshBasicMaterial color={hovered ? "yellow" : "blue"} /> </Icosahedron> */}

            <pointLight
                intensity={0.5}
                decay={2}
                color="#007e7e"
                position={[3.27, 5.9, 8.34]}
                rotation={[-0.25, 0.38, 1.04]}
            />
            <pointLight
                intensity={0.8}
                decay={2}
                position={[0.04, 7.68, 8.36]}
                rotation={[-0.25, 0.38, 1.04]}
            />
        </>
    )
}

function Rig() {
    const { camera, mouse } = useThree()
    const vec = new Vector3()

    return useFrame(() => {
        camera.position.lerp(vec.set(mouse.x, mouse.y, 7), 0.1)
        camera.lookAt(0, 0, 0)
    })
}

const ThreeHeader = () => {
    return (
        <>
            <Suspense fallback={null}>
                <Canvas shadows className="canvas">
                    <ThreeJs />
                    <Rig />
                </Canvas>
            </Suspense>
        </>
    )
}
export default ThreeHeader
