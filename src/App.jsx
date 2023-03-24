import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ThreeJsScene } from './ThreeJsScene'

export function App() {
    return (
        <Suspense fallback={null}>
            <Canvas shadows>
                <ThreeJsScene />
            </Canvas>
        </Suspense>
    )
}

export default App
