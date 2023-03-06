//packages
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

//components
import { useHeadphoneStore } from './HFStore'

const HullMaterial = shaderMaterial(
  {
    color: new THREE.Color('#ff005b'),
    size: 1.8
  },
  `uniform float size;
    void main() {
    vec3 transformed = position + normal * size/100.;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.);
  }`,
  `uniform vec3 color;
  void main() {
    gl_FragColor = vec4(color, 1.);
  }`); extend({ HullMaterial })

export const Outliner = () => {
  const hfStore = useHeadphoneStore();

  return (
    <mesh geometry={hfStore.ActiveGeo}
      scale={1.01}
      position={[hfStore.ActiveGeo.position.x + 0.01, hfStore.ActiveGeo.position.y, hfStore.ActiveGeo.position.z]} rotation={[hfStore.ActiveGeo.rotation.x, hfStore.ActiveGeo.rotation.y, hfStore.ActiveGeo.rotation.z]}
    >
      <hullMaterial depthWrite={false} color="red" side={THREE.BackSide} />
    </mesh>
  )
} 