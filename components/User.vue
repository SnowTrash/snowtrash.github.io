<script lang="ts" setup>
// import { Color, MeshBasicMaterial } from 'three';

import { ref } from 'vue'
import { useAnimations, useGLTF } from '@tresjs/cientos'
const { scene: model , nodes , materials , animations } = await useGLTF('cat_run.glb')

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

// console.log("Data del context",{controls,renderer,camera})

const { actions } = useAnimations(animations, model)

const currentAction = ref(actions.ArmatureAction)

currentAction.value.play()

// gato2.material = MeshBasicMaterial

// Animación de luces mediante el loop
// const { onLoop } = useRenderLoop()

// onLoop(({elapsed})=>{
//   materials.RockLight.emissiveIntensity = 
//   Math.sin(elapsed) * 7 + 3
// } ) 

</script>
<template>
  <TresOrbitControls
  v-if="renderer"
  :args="[camera, renderer?.domElement]"
  />
  <!-- <primitive :object="nodes" /> -->
  <primitive :object="nodes.Armature" />
  <!-- <primitive :object="nodes.reference" :rotation="[1,-5,1]" /> -->
</template>