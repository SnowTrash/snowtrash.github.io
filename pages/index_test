<script lang="ts" setup>
// import { objectScale } from '@tresjs/cientos/dist/core/misc/html/utils.js';
import { reactive, ref, watchEffect , shallowRef } from 'vue'
// import { BlendFunction } from 'postprocessing';
import { PointerLockControls , OrbitControls , Sphere } from '@tresjs/cientos'
import { useControls, TresLeches } from '@tresjs/leches'
import '@tresjs/leches/styles'
import { Clock, Vector3 } from 'three'
// import { useRenderLoop , vDistanceTo, vAlwaysLookAt } from '@tresjs/core'

import { Stats } from '@tresjs/cientos'
const catPos = shallowRef(new Vector3(0, 0.5, 0)) // Initialize cat position
const camRef = shallowRef()

const handleCubeClick = (cubeIndex: number) => {
    alert(`Cubo ${cubeIndex + 1} clickeado`)
}
// const gatoRef = shallowRef(null)
const spherePos = new Vector3(5, 0.9, -15) // posición de la esfera

// Manejar el clic en la esfera
const handleSphereClick = () => {
    
  console.log('El gato está cerca de la esfera')
    // SpheretriggerCinematicCamera()
}
</script>

<template>
  <Auth />
  <TresScene />
</template>
