import {
    Environment,
    Lightformer,
    ContactShadows,
} from '@react-three/drei'

export default function Lights() {

    return (
        <group>
            <hemisphereLight intensity={0.5} />
            {/** Soft shadows */}
            <Environment resolution={512}>
                {/* Ceiling */}
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
                {/* Key */}
                <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            </Environment>
            <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} />
        </group >


    )
}