import { OrbitControls, Environment, Lightformer } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Headset from './Headset';

export default function Model() {
    return <>
        <Perf />
        <OrbitControls makeDefault />;

        <Headset />

        {/* <Environment
            background
            preset="sunset"
            ground={{
                height: 7,
                radius: 28,
                scale: 100
            }}>

            <color args={['blue']} attach="background" />
            <Lightformer
                position-z={- 5}
                scale={10}
                color="red"
                intensity={10}
                form="ring"
            />
        </Environment> */}
    </>
}