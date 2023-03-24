import { Suspense, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Noise, EffectComposer } from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import { Avatar } from "./components/Avatar";


function ThreeJsScene() {

    // const [hovered, setHovered] = useState(false);
    
    return (
        <>
            <Perf position="top-left" />

            <EffectComposer>
                <Noise premultiply/>
            </EffectComposer>

            <Environment files={
                [
                    "./assets/environment.webp",
                    "./assets/environment.webp",
                    "./assets/environment.webp",
                    "./assets/environment.webp",
                    "./assets/environment.webp",
                    "./assets/environment.webp",
                ]}
            />
            <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.01} minAzimuthAngle={-Math.PI / 100} maxAzimuthAngle={Math.PI / 100} minPolarAngle={Math.PI / 2.05} maxPolarAngle={Math.PI - Math.PI / 2.05}/>

            <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={60} zoom={4} />
            
            <Avatar position={[0 , -4.25 , 0]} rotation={[-0.25, 0, 0]} />
            
            {/* <Icosahedron onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}> <meshBasicMaterial color={hovered ? "yellow" : "blue"} /> </Icosahedron> */}
        
            <pointLight
                intensity={0.5}
                decay={2}
                color="#9f0003"
                position={[3.27, 5.9, 8.34]}
                rotation={[-0.25, 0.38, 1.04]}
            />
            <pointLight
                intensity={1}
                decay={2}
                position={[0.04, 7.68, 8.36]}
                rotation={[-0.25, 0.38, 1.04]}
            />
        </>
    );
};

export function App() {
    return (
        <Suspense fallback={null}>
            <Canvas shadows>
                <ThreeJsScene />
            </Canvas>
        </Suspense>
    );
};

export default App;