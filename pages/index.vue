<script lang="ts" setup>
// import { objectScale } from '@tresjs/cientos/dist/core/misc/html/utils.js';
import { reactive, ref, watchEffect } from 'vue'
import { BlendFunction } from 'postprocessing';
import { PointerLockControls , KeyboardControls  } from '@tresjs/cientos';
import { shallowRef } from 'vue'

import { useControls, TresLeches } from '@tresjs/leches'
import '@tresjs/leches/styles'
import { Vector3 } from 'three'

import { useRenderLoop } from '@tresjs/core'

const catRef = ref()
const skullRef = shallowRef()
const camRef = ref()

const ghost1 = shallowRef(null)
const ghost2 = shallowRef(null)
const ghost3 = shallowRef(null)

const gatoRef = shallowRef(null)


const { onLoop } = useRenderLoop()

onLoop(({ elapsed }) => {
  const ghost1Angle = elapsed * 0.5
  const ghost2Angle = -elapsed * 0.32
  const ghost3Angle = -elapsed * 0.18

  const gatoRefAngle = -elapsed * -0.6

  if (ghost1.value && ghost2.value && ghost3.value) {
    ghost1.value.position.x = Math.cos(ghost1Angle) * 4
    ghost1.value.position.z = Math.sin(ghost1Angle) * 4
    ghost1.value.position.y = Math.sin(elapsed * 3)
    ghost2.value.position.x = Math.cos(ghost2Angle) * 5
    ghost2.value.position.z = Math.sin(ghost2Angle) * 5
    ghost2.value.position.y = Math.sin(elapsed * 4) + Math.sin(elapsed * 2.5)
    ghost3.value.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsed * 0.32))
    ghost3.value.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsed * 0.5))
    ghost3.value.position.y = Math.sin(elapsed * 4) + Math.sin(elapsed * 2.5)

    
    // camRef.value.position.x = Math.cos(gatoRefAngle) * 5
    // camRef.value.position.z = Math.sin(gatoRefAngle) * 5
    // camRef.value.position.y = Math.sin(elapsed * 4) + Math.sin(elapsed * 2.5)
  
    // console.log("Valor camera: " + catRef.value.position.x)
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
  console.log("Vector de rotacion: " + rotation.value.value)
  // console.log("Skullref valor: " + skullRef.value)
  // console.log("Valor camera: " + camRef.value.position)
  // console.log(rotation.value.value.x)
  
})

</script>

<template>
  <TresLeches />
  <TresCanvas window-size clear-color="#4f4f4f" shadows alpha >
    <TresPerspectiveCamera :position="[0, 1, 5]" :look-at="[0, 0, 0]" ref="camRef" />
    <!-- <PointerLockControls /> -->
    
    <OrbitControls  />
    <!-- <Suspense>
      <Stones />
    </Suspense> -->

    <TresAmbientLight :intensity="2" color="#f1026a"/>
    
    <Suspense >
      <Cat :position="[0, 5, -30]" :scale="[0.3,0.3,0.3]" :rotation="[4, 0, 0]" ref="skullRef" />
    </Suspense>
    
    <KeyboardControls  >
    <Suspense >
      <User ref="catRef"/>
    </Suspense>
    </KeyboardControls>

    <!-- Suelo/techo -->
    <TresMesh :position="[0, -2, 0]" >
      <TresBoxGeometry :args="[100, 0.8 , 100]" />
      <TresMeshStandardMaterial :color="0x99869d"/>
    </TresMesh>

    <TresPointLight
    ref="ghost1"
    :args="['#ff00ff', 3, 3]"
    cast-shadow
  />
  <TresPointLight
    ref="ghost2"
    :args="['#00ffff', 3, 3]"
    cast-shadow
  />
  <TresPointLight
    ref="ghost3"
    :args="['#ff7800', 3, 3]"
    cast-shadow
  />
  
    <!-- <TresGridHelper />  -->
  </TresCanvas>
</template>