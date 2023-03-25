import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import ThreeJsScene from './ThreeJsScene'
import Nav from './components/Nav'
import Vide from './components/Vide'
import Preloader from './components/Preloader'

const App = () => {
    return (
        <>
            <Preloader />
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
