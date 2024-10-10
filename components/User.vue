<script lang="ts" setup>
// import { Color, MeshBasicMaterial } from 'three';
import { ref } from 'vue'
import { useAnimations, useGLTF } from '@tresjs/cientos'

const { scene: model , nodes , materials , animations } = await useGLTF('Soldier.glb')

import { useTresContext, extend } from '@tresjs/core'

const { camera, renderer , controls} = useTresContext()

import { OrbitControls } from 'three/addons/controls/OrbitControls'
extend({ OrbitControls })

// Este es el modelo del gato que corre

// const littleStones = Object.values(nodes).filter(node => node.name.includes('Object_'))
// const gato2 = Object.values(nodes).filter(node => node.name.includes('domestic_cat_(Felis_catus)_43703objcleanermaterialmergergl'))

// console.log({"Nodos del Craneo del gato":littleStones})
// inspeccionamos la escena .glb o los objetos(grupo) importados

console.log("Data del Modelo3D",{nodes, materials, model ,animations})
console.log("Data del context",{controls,renderer,camera})


// MODEL WITH ANIMATIONS
import { CharacterControls } from '~/utils/characterControls';
import { AnimationAction } from 'three';

var characterControls: CharacterControls

const { actions , mixer} = useAnimations(animations, model)

const currentAction = ref(actions.Run)

// currentAction.value.play()

// gato2.material = MeshBasicMaterial

// Animación de luces mediante el loop
// const { onLoop } = useRenderLoop()

// onLoop(({elapsed})=>{
//   materials.RockLight.emissiveIntensity = 
//   Math.sin(elapsed) * 7 + 3
// } ) 

import { Vector3 } from 'three'
const catPos = shallowRef(new Vector3(0, 0.5, 0)) // Initialize cat position

import { KeyDisplay } from '../utils/index';

const keyDisplayQueue = new KeyDisplay();
const handleKeyDown = (event: KeyboardEvent) => {
    keyDisplayQueue.down(event.key)
    switch (event.key) {
      case 'w': moveCat(new Vector3(0, 0, -0.1)); break
      case 's': moveCat(new Vector3(0, 0, 0.13)); break
      case 'a': moveCat(new Vector3(-0.13, 0, 0)); break
      case 'd': moveCat(new Vector3(0.1, 0, 0)); break
      case 'x': currentAction.value.play(); break
    }
    // if (event.shiftKey && characterControls) {
    //     characterControls.switchRunToggle()
    // }
}
const handleKeyUp = (event: KeyboardEvent) => {
    keyDisplayQueue.up(event.key);
    // switch (event.key) {
    //   case 'w': moveCat(new Vector3(0, 0, -0.1)); break
    //   case 's': moveCat(new Vector3(0, 0, 0.13)); break
    //   case 'a': moveCat(new Vector3(-0.13, 0, 0)); break
    //   case 'd': moveCat(new Vector3(0.1, 0, 0)); break
    // }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('keyup', handleKeyUp)
})

// Handle keyboard controls in client-side lifecycle
const moveCat = (direction: Vector3) => {
    catPos.value.add(direction)
    // Mueve la cámara suavemente hacia la nueva posición
    // const cameraOffset = new Vector3(0, 5, 10)
    // smoothLookAt(camRef.value, catPos.value.clone().add(cameraOffset))
}

</script>
<template>
  <TresOrbitControls
  v-if="renderer"
  :args="[camera, renderer?.domElement]"
  />
  <primitive :object="model" />
  
  <!-- cat -->
  <!-- <primitive :object="nodes.Armature" /> -->

  <!-- <primitive :object="nodes.reference" :rotation="[1,-5,1]" /> -->
</template>