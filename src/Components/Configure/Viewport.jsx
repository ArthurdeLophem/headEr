import { Canvas } from '@react-three/fiber'
import { Effects } from './Effects';
import { Center, OrbitControls, ContactShadows } from '@react-three/drei'
import { Perf } from 'r3f-perf';
import Headset from './Headset';
import Lights from './Lights';
import { Suspense, useState } from 'react';
import CustomizePanel from './CustomizePanel';

export default function Viewport() {

    //props
    const [color, setColor] = useState("");
    const [activeEl, setActiveEl] = useState("hidden");
    const [title, setTitle] = useState("hover over a headphone part to start");
    const [companyPic, setCompanyPic] = useState(null);
    const [mic, setMic] = useState(false);

    //props handling
    const chooseTitle = (e) => {
        setTitle(e)
    }
    const chooseColor = (e) => {
        setColor(`rgb(${e.r}, ${e.g}, ${e.b})`)
    }
    const chooseActiveEl = (newActive) => {
        setActiveEl(newActive)
    }
    const chooseCompanyPic = (newPicture) => {
        setCompanyPic(newPicture)
    }
    const chooseMicState = (newMic) => {
        setMic(newMic)
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
                makeDefault
            />

            <Center>
                <mesh scale={6} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
                    <ringGeometry args={[0.95, 1.1, 4]} />
                    <meshStandardMaterial color="red" roughness={0} />
                </mesh>
            </Center>

            <Suspense>
                <Headset companyPic={companyPic} chooseTitle={chooseTitle} color={color} activeEl={activeEl} mic={mic} chooseMicState={chooseMicState} chooseColor={chooseColor} chooseActiveEl={chooseActiveEl} chooseCompanyPic={chooseCompanyPic} />
                <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} />
            </Suspense>
            <Lights />
        </Canvas>

        <h1 className="title">{title}</h1>
        <CustomizePanel companyPic={companyPic} color={color} activeEl={activeEl} chooseColor={chooseColor} mic={mic} chooseMicState={chooseMicState} chooseActiveEl={chooseActiveEl} chooseCompanyPic={chooseCompanyPic} />
    </>
}