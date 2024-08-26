<script lang="ts" setup>
// import { objectScale } from '@tresjs/cientos/dist/core/misc/html/utils.js';
import { reactive, ref, watchEffect } from 'vue'
import { BlendFunction } from 'postprocessing';
import { PointerLockControls , KeyboardControls  } from '@tresjs/cientos';

import { useControls, TresLeches } from '@tresjs/leches'
import '@tresjs/leches/styles'

import { Vector3 } from 'three'

const sphereRef = ref()
const catRef = ref()
const skullRef = ref()

const cameraRef = ref()

const { onLoop } = useRenderLoop()

onLoop(({ elapsed }) => {
  if (sphereRef.value) {
    sphereRef.value.position.y = Math.sin(elapsed)
  }

})


const { awiwi, slider, rotation , gatito} = useControls({
  awiwi: true,
  slider: {
    value: 0.5,
    min: 0,
    max: 1,
    step: 0.01,
  },
  rotation: {
    value: new Vector3(5, 5, 5),
  },
  gatito: {
    value: new Vector3(1, 2, 3),
  },
})

watchEffect(() => {
  console.log(rotation.value.value)
  console.log(skullRef.value)
  // console.log(rotation.value.value.x)
})

</script>

<template>
  <TresLeches />
  <TresCanvas window-size clear-color="#4f4f4f" shadows alpha >
    <TresPerspectiveCamera :position="[0, 2, 4]" :look-at="[0, 0, 0]" :rotation="[0,0,0]" ref="cameraRef" />
    <!-- <PointerLockControls /> -->
    <OrbitControls  />
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
      <Cat :position="[0, -4, -30]" :scale="[0.3,0.3,0.3]" :rotation="[rotation.value.x, rotation.value.y, rotation.value.z]" ref="skullRef" />
    </Suspense>
    
    <KeyboardControls >
    <Suspense>
      <User ref="catRef" :rotation="[gatito.value.x,gatito.value.y,gatito.value.z]"/>
    </Suspense>
    </KeyboardControls>

    <TresGridHelper /> 
  </TresCanvas>
</template>