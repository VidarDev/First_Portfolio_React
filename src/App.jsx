import React, { Suspense, useEffect } from 'react'
import Loader from './components/Loader'
import { Canvas } from '@react-three/fiber'
import ThreeJsScene from './ThreeJsScene'
import Nav from './components/Nav'
import Vide from './components/Vide'

const App = () => {
    return (
        <>
            <Loader />
            <Nav />
            <Suspense fallback={null}>
                <Canvas shadows>
                    <ThreeJsScene />
                </Canvas>
            </Suspense>
            <Vide />
        </>
    )
}

export default App
