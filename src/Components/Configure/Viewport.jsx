import { Canvas } from '@react-three/fiber'
import { Effects } from './Effects';
import { Center, OrbitControls, ContactShadows, PerformanceMonitor } from '@react-three/drei'
import { Perf } from 'r3f-perf';
import { Suspense, useState } from 'react';
import { useHeadphoneStore } from './HFStore';
import CustomizePanel from './CustomizePanel';
import Headset from './Headset';
import Lights from './Lights';

export default function Viewport() {
    const [dpr, setDpr] = useState(1);
    let active

    // zustandStore
    const hfStore = useHeadphoneStore();

    if (hfStore.ActiveEl !== "hidden") {
        active = false
    } else {
        active = true
    }

    return <>
        <Canvas className='viewport' dpr={dpr} camera={{ position: [10, 20, 20], zoom: 6.5 }} gl={{ preserveDrawingBuffer: true }}>
            <PerformanceMonitor flipflops={1} onIncline={() => setDpr(1.5)} onDecline={() => setDpr(0.7)} />
            <Perf deepAnalyze={true} minimal={true} overClock={true} matrixUpdate={true} position={"top-left"} />
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
                autoRotate={active}
                autoRotateSpeed={1}
                makeDefault
            />

            <Center>
                <mesh scale={6} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
                    <ringGeometry args={[0.95, 1.1, 4]} />
                    <meshStandardMaterial color="red" roughness={0} />
                </mesh>
            </Center>

            <Suspense>
                <Headset />
                <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} />
            </Suspense>
            <Lights />
        </Canvas>

        <h1 className="title">{hfStore.Title}</h1>
        <CustomizePanel />
    </>
}