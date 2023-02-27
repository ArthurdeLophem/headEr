import { Canvas } from '@react-three/fiber'
import { RGBELoader } from 'three-stdlib'
import { Effects } from './Effects';
import { Center, OrbitControls, ContactShadows } from '@react-three/drei'
import { Perf } from 'r3f-perf';
import Headset from './Headset';
import Lights from './Lights';
import { Suspense, useState } from 'react';
import CustomizePanel from './CustomizePanel';
import * as THREE from 'three'

export default function Viewport() {
    const [color, setColor] = useState("");
    const [activeEl, setActiveEl] = useState("hidden");
    const [title, setTitle] = useState("hover over a headphone part to start");

    const chooseTitle = (e) => {
        setTitle(e)
    }

    const chooseColor = (e) => {
        setColor(`rgb(${e.r}, ${e.g}, ${e.b})`)
    }

    const chooseActiveEl = (newActive) => {
        setActiveEl(newActive)
    }

    return <>
        <Canvas className='viewport' dpr={1} camera={{ position: [10, 20, 20], zoom: 6.5 }} gl={{ preserveDrawingBuffer: true }}>
            <Perf deepAnalyze={true} overClock={true} matrixUpdate={true} position={"top-left"} />
            <color attach="background" args={['#2c2c33']} />

            <Effects />
            <OrbitControls
                zoomSpeed={0.25}
                minZoom={2}
                maxZoom={250}
                enablePan={true}
                enableDamping={true}
                dampingFactor={0.1}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 3}
                autoRotate={true}
                autoRotateSpeed={1}
            />

            <Center>
                <mesh scale={6} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
                    <ringGeometry args={[0.95, 1.1, 4]} />
                    <meshStandardMaterial color="red" roughness={0} />
                </mesh>
            </Center>

            <Suspense>
                <Headset chooseTitle={chooseTitle} color={color} activeEl={activeEl} chooseColor={chooseColor} chooseActiveEl={chooseActiveEl} />
                <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} />
            </Suspense>
            <Lights />
        </Canvas>

        <h1 className="title">{title}</h1>
        <CustomizePanel color={color} activeEl={activeEl} chooseColor={chooseColor} chooseActiveEl={chooseActiveEl} />
    </>
}