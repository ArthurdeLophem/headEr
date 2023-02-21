import { Canvas } from '@react-three/fiber'
import { Effects } from './Effects';
import Model from './Model';

export default function ProductListing() {
    return <>
        <Canvas className="viewport"
            flat
            shadows
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [- 4, 3, 6]
            }}>
            <ambientLight />
            <Effects />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <color args={['#000000']} attach="background" />
        </Canvas>
    </>
}