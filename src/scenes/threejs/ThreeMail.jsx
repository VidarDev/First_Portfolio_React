import { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Mail } from '../../components/Models/Mail'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

const ThreeJs = () => {
    return (
        <>
            {/* <Perf position="top-left" /> */}

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.05}
                minPolarAngle={Math.PI / 2.05}
                maxPolarAngle={Math.PI - Math.PI / 2.05}
            />

            <PerspectiveCamera
                makeDefault
                position={[0, 0, 7]}
                fov={60}
                zoom={4}
            />

            <Mail position={[0, 0, 0]} rotation={[0, 0, 0]} />

            <ambientLight intensity={0.3} />
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
        camera.position.lerp(vec.set(mouse.x, mouse.y, 7), 0.5)
        camera.lookAt(0, 0, 0)
    })
}

const ThreeMail = () => {
    return (
        <>
            <Suspense fallback={null}>
                <Canvas shadows>
                    <ThreeJs />
                    <Rig />
                </Canvas>
            </Suspense>
        </>
    )
}
export default ThreeMail
