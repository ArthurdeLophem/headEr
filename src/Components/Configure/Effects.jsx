//packages
import { EffectComposer, SSR, Bloom, LUT } from '@react-three/postprocessing'
import { useLoader } from '@react-three/fiber'
import { LUTCubeLoader } from 'postprocessing'

export const Effects = (...props) => {
    const texture = useLoader(LUTCubeLoader, '/assets/models/cube.cube')

    return (
        <EffectComposer depthBuffer={true} disableNormalPass={false} stencilBuffer={true} autoClear={true} resolutionScale={1} multisampling={8}>
            <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0} intensity={0.5} />
            <LUT lut={texture} />
        </EffectComposer>
    )
}