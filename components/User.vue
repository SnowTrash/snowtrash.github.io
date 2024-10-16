<script lang="ts" setup>
import { Clock } from 'three';
import { ref } from 'vue'
import { useAnimations, useGLTF } from '@tresjs/cientos'
const { scene: model , nodes , materials , animations } = await useGLTF('Soldier.glb')

import { useTresContext, extend } from '@tresjs/core'
const { camera, renderer , controls} = useTresContext()

import { OrbitControls } from 'three/addons/controls/OrbitControls'
extend({ OrbitControls })

const orbitsRef = shallowRef();

console.log("Data del Modelo3D",{nodes, materials, model ,animations})
console.log("Data del context",{controls,renderer,camera})

// MODEL WITH ANIMATIONS
const { actions , mixer} = useAnimations(animations, model)
const currentAction = ref(actions.Walk)
// currentAction.value.play()

// gato2.material = MeshBasicMaterial

// Animación de updateCamera() mediante el loop
const clock = new Clock();
const { onLoop } = useRenderLoop()

onLoop(({})=>{
  let mixerUpdateDelta = clock.getDelta();
  if (characterControls) {
        characterControls.update(mixerUpdateDelta,keysPressed);
  }
  // characterControls?.updateCamera()
})

import { Vector3 } from 'three'
const catPos = shallowRef(new Vector3(0, 0.5, 0)) // Initialize cat position
// Import custom control class
import { CharacterControls } from '../utils/characterControls'; // Assuming you create a file to handle it
let characterControls: CharacterControls | null = null;

// CONTROL KEYS
import { KeyDisplay } from '../utils/index';
const keysPressed = {  }
const keyDisplayQueue = new KeyDisplay();
const handleKeyDown = (event: KeyboardEvent) => {
  keyDisplayQueue.down(event.key)
  if (event.shiftKey && characterControls) {
        characterControls.switchRunToggle();
  } else {
    (keysPressed as any)[event.key.toLowerCase()] = true;
  }
}
const handleKeyUp = (event: KeyboardEvent) => {
    keyDisplayQueue.up(event.key);
    (keysPressed as any)[event.key.toLowerCase()] = false;
}
onMounted(() => {
  characterControls = new CharacterControls(model, mixer ,actions, orbitsRef.value ,camera.value, 'Idle'); // Pass camera, model & animations y la posicion del gato
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('keyup', handleKeyUp)
})

</script>
<template>
  <TresOrbitControls
  v-if="renderer"
  :args="[camera, renderer?.domElement]"
  :minDistance="5"
  :maxDistance="15"
  :enablePan="false"
  :maxPolarAngle="Math.PI / 2 - 0.05"
  :enableDamping="true"
  ref="orbitsRef"
  />
  <primitive :object="model" />
</template>