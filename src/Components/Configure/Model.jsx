import { OrbitControls, Environment, Lightformer } from '@react-three/drei';
import { Perf } from 'r3f-perf';

export default function Model() {
    return <>
        <Perf />
        <OrbitControls makeDefault />;

        <mesh position-x={- 2} castShadow >
            <sphereGeometry />
            <meshStandardMaterial color="white" />
        </mesh>

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