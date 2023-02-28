/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/assets/models/HeadsetOpti.glb --transform
*/
import { useGLTF, Image } from '@react-three/drei'
import * as THREE from 'three'

export default function Headset(props) {
  const { nodes, materials } = useGLTF('/assets/models/Headset.glb')
  const colorCustomizables = [
    { name: "metalics", color: "" },
    { name: "cushions", color: "" },
    { name: "headrest", color: "" },
    { name: "headband", color: "" },
    { name: "drivers", color: "" },
    { name: "sockets", color: "" },
    { name: "pattern", color: "" },
    { name: "fixers", color: "" },
    { name: "rgb", color: "" },
  ];

  if (props.activeEl !== "hidden") {
    const targetEl = colorCustomizables.find((el) => el.name == props.activeEl)
    let newColor = new THREE.Color(props.color)
    targetEl.color = newColor.convertLinearToSRGB()
  }

  const handleIncome = (e) => {
    const targetEl = colorCustomizables.find((el) => el.name === e.object.material.name)
    if (targetEl) {
      targetEl.color = { r: Math.trunc(e.object.material.color.r * 255), g: Math.trunc(e.object.material.color.g * 255), b: Math.trunc(e.object.material.color.b * 255) }
      props.chooseActiveEl(targetEl.name)
      props.chooseColor(targetEl.color)
    } else {
      props.chooseActiveEl("hidden")
    }
    e.stopPropagation()
  }

  const handleHover = (e) => {
    if (colorCustomizables.find((el) => el.name === e.object.material.name)) {
      props.chooseTitle(`customize your ${e.object.material.name}`)
    }
  }

  const handleOut = () => {
    if (props.activeEl === "hidden")
      props.chooseTitle(`hover over a headphone part to start`)
    else
      props.chooseTitle(`customize your ${props.activeEl}`)
  }

  const handleMissed = () => {
    props.chooseActiveEl("hidden")
    props.chooseTitle(`hover over a headphone part to start`)
  }

  return (
    <group>
      {props.companyPic !== null && (
        <group>
          <Image url={props.companyPic} scale={0.5} transparent opacity={1} rotation={[0.23, 1.07, -1.73]} position={[1.54, 0.95, 1.39]} />
          <Image url={props.companyPic} scale={0.5} transparent opacity={1} rotation={[-0.11, 5.23, 1.41]} position={[-1.40, 0.95, 1.33]} />
        </group>
      )}

      <group  {...props} dispose={null}
        onPointerOver={handleHover} onPointerOut={handleOut}
        onClick={handleIncome}
        onPointerMissed={handleMissed}
        position={[0, 1, 0]} rotation={[-1.5, 0, 0]} >

        {/* drivers */}
        <group>

          <mesh castShadow receiveShadow geometry={nodes.Circle.geometry} material={materials.drivers} material-color={colorCustomizables[4].color} position={[0.94, -1.08, 0]} rotation={[0, 0, 1.08]} />
          <mesh geometry={nodes.Circle005.geometry} material={materials.rgb} material-color={colorCustomizables[8].color} position={[0.93, -1.03, 0]} rotation={[0, 0, 1.08]} />
          <mesh geometry={nodes.Plane002.geometry} material={materials.pattern} position={[1.29, -1.27, 0]} rotation={[0, 0, 1.08]} />

          {/* cushions */}
          <mesh geometry={nodes.Circle008.geometry} material={materials.cushions} material-color={colorCustomizables[1].color} position={[0.94, -1.08, 0]} rotation={[0, 0, 1.08]} />
          <group position={[0.6, -1.53, -0.69]} rotation={[-Math.PI / 2, -1.08, 0]}>
            <mesh geometry={nodes.Circle011.geometry} material={materials.accent_black} />
            <mesh geometry={nodes.Circle011_1.geometry} material={materials.accent_red} />
          </group>

          {/* microphone */}
          {props.mic && (
            <group>
              <mesh geometry={nodes.Plane.geometry} material={materials.micplastic} position={[0.81, -1.55, 0.8]} rotation={[Math.PI / 2, 0, 0]} />
              <mesh geometry={nodes.BezierCurve004.geometry} material={materials.microphone2} position={[0.81, -1.57, 0.85]} />
              <group position={[-0.12, -1.89, 1.44]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh geometry={nodes.Circle014.geometry} material={materials.micplastic} />
                <mesh geometry={nodes.Circle014_1.geometry} material={materials.rgb} material-color={colorCustomizables[8].color} />
              </group>
            </group>)}
        </group>

        {/* headpart */}
        <group>
          {/* headbands */}
          <mesh geometry={nodes.BezierCurve.geometry} material={materials.headband} material-color={colorCustomizables[3].color} position={[0.09, 0, 0.17]} />

          {/* headrest */}
          <mesh geometry={nodes.Circle006.geometry} material={materials.fixers} material-color={colorCustomizables[7].color} position={[1.92, 0.09, -0.01]} />
          <mesh geometry={nodes.Circle007.geometry} material={materials.headrest} material-color={colorCustomizables[2].color} position={[1.74, 0.11, -0.01]} rotation={[0, 0, 0.58]} />
          <mesh geometry={nodes.BezierCurve001.geometry} material={materials.metalics} material-color={colorCustomizables[0].color} position={[1.92, 0.1, -0.01]} />
          <group position={[1.56, 0.39, -0.01]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.BezierCurve002_1.geometry} material={materials.headrest} material-color={colorCustomizables[2].color} />
            <mesh geometry={nodes.BezierCurve002_2.geometry} material={materials.headrest} material-color={colorCustomizables[2].color} />
          </group>

          {/* backPlate Sockets */}
          <mesh geometry={nodes.Circle004.geometry} material={materials.sockets} material-color={colorCustomizables[5].color} position={[0.94, -1.08, 0]} rotation={[0, 0, 1.08]} />

          {/* bolts */}
          <group>
            <mesh geometry={nodes.Bolt.geometry} material={materials.metalics} material-color={colorCustomizables[0].color} position={[1.79, -0.28, -0.1]} rotation={[0, 0, 1.31]} />
            <mesh geometry={nodes.Bolt001.geometry} material={materials.metalics} material-color={colorCustomizables[0].color} position={[1.8, -0.23, 0.1]} rotation={[0, 0, 1.31]} />
            <mesh geometry={nodes.Bolt002.geometry} material={materials.metalics} material-color={colorCustomizables[0].color} position={[1.84, 0.01, 0.1]} rotation={[0, 0, 1.53]} />
            <mesh geometry={nodes.Bolt003.geometry} material={materials.metalics} material-color={colorCustomizables[0].color} position={[1.84, 0.01, -0.1]} rotation={[0, 0, 1.53]} />
            <mesh geometry={nodes.Bolt004.geometry} material={materials.metalics} material-color={colorCustomizables[0].color} position={[1.57, 0.27, 0.07]} rotation={[0, 0, 2.13]} />
            <mesh geometry={nodes.Bolt005.geometry} material={materials.metalics} material-color={colorCustomizables[0].color} position={[1.57, 0.27, -0.09]} rotation={[0, 0, 2.13]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/Headset.glb')