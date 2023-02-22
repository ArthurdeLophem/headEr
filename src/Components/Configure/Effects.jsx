import { useLoader } from '@react-three/fiber'
import { EffectComposer, SSR, Bloom, LUT } from '@react-three/postprocessing'
import { LUTCubeLoader } from 'postprocessing'

export const Effects = (...props) => {
    const texture = useLoader(LUTCubeLoader, '/assets/models/cube.cube')
    return (
        <EffectComposer disableNormalPass>
            <SSR {...props} />
            <Bloom luminanceThreshold={0.211} mipmapBlur luminanceSmoothing={0} intensity={1.25} />
            <LUT lut={texture} />
        </EffectComposer>
    )
}