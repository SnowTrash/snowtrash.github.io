<script lang="ts" setup>
// import { objectScale } from '@tresjs/cientos/dist/core/misc/html/utils.js';
import { BlendFunction } from 'postprocessing';
import { PointerLockControls , KeyboardControls  } from '@tresjs/cientos';
const sphereRef = ref()
const catRef = ref()

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
  <TresCanvas window-size clear-color="#4f4f4f" shadows alpha >
    <TresPerspectiveCamera :position="[-2, 1.4, 0]" :look-at="[0, 0, 0]" />
    <!-- <PointerLockControls /> -->
    <!-- <OrbitControls  /> -->
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
      <Cat :position="[25, 1.6, 0]" :scale="[0.3,0.3,0.3]" :rotation="[1,-1,-5]" />
    </Suspense>
    
    <KeyboardControls >
    <Suspense>
      <User ref="catRef"/>
    </Suspense>
    </KeyboardControls>

    <TresGridHelper /> 
    <EffectComposer>
      <Bloom v-bind="bloomParams" />
    </EffectComposer>
  </TresCanvas>
</template>