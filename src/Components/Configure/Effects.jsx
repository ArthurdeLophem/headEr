import { useLoader } from '@react-three/fiber'
import { EffectComposer, SSR, Bloom, LUT } from '@react-three/postprocessing'
import { LUTCubeLoader } from 'postprocessing'
import { useHeadphoneStore } from './HFStore'

export const Effects = (...props) => {
    const texture = useLoader(LUTCubeLoader, '/assets/models/cube.cube')
    const hfStore = useHeadphoneStore();
    console.log(hfStore.ActiveGeo)

    return (
        <EffectComposer disableNormalPass>
            {/* <SSR {...props} /> */}
            <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0} intensity={0.5} />
            <LUT lut={texture} />
        </EffectComposer>
    )
}