import { Canvas } from '@react-three/fiber'
import { RGBELoader } from 'three-stdlib'
import { Effects } from './Effects';
import { Center, OrbitControls, } from '@react-three/drei'
import { Perf } from 'r3f-perf';
import Headset from './Headset';
import Lights from './Lights';
import { Suspense, useState } from 'react';
import CustomizePanel from './CustomizePanel';

export default function Viewport() {
    const [color, setColor] = useState(null);
    const [activeEl, setActiveEl] = useState("hidden");

    const chooseColor = (newColor) => {
        setColor(newColor)
        console.log(color)
    }

    const chooseActiveEl = (newActive) => {
        setActiveEl(newActive)
        console.log(activeEl)
    }

    return <>
        <Canvas className='viewport' camera={{ position: [10, 20, 20], zoom: 6.5 }} gl={{ preserveDrawingBuffer: true }}>
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
                <Headset chooseColor={chooseColor} chooseActiveEl={chooseActiveEl} />
            </Suspense>
            <Lights />
        </Canvas>

        <CustomizePanel activeEl={activeEl} chooseColor={chooseColor} chooseActiveEl={chooseActiveEl} />
    </>
}