<script lang="ts" setup>
// import { objectScale } from '@tresjs/cientos/dist/core/misc/html/utils.js';
import { BlendFunction } from 'postprocessing';
const sphereRef = ref()

const { onLoop } = useRenderLoop()

onLoop(({ elapsed }) => {
  if (sphereRef.value) {
    sphereRef.value.position.y = Math.sin(elapsed)
  }
})

// Parametros de luz de postprocessing
const bloomParams = reactive({
  luminanceThreshold: 0.2,
  luminanceSmoothing: 0.3,
  mipmapBlur: true,
  intensity: 0.8,
  blendFunction: BlendFunction.ADD,
})
</script>

<template>
  <TresCanvas window-size clear-color="#4f4f4f">
    <TresPerspectiveCamera :position="[-5.3, 8.3, 10.6]" :look-at="[0, 0, 0]" />
    <OrbitControls />
    <!-- <Suspense>
      <Stones />
    </Suspense> -->
    <!--<TresMesh ref="sphereRef">
       <TresSphereGeometry />
      <TresMeshNormalMaterial />
    </TresMesh> -->

    <TresDirectionalLight
    color="#f1026a"
    :position="[3, 3, 3]"
    :intensity="1"
    />
    
    <Suspense >
      <Cat :position="[10, 0, 3]"/>
    </Suspense>

    <Suspense>
      <User />
    </Suspense>
    

    <TresGridHelper /> 
   <EffectComposer>
      <Bloom v-bind="bloomParams" />
    </EffectComposer>
  </TresCanvas>
</template>