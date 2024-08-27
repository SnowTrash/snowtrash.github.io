<script lang="ts" setup>
import { Color, MeshBasicMaterial } from 'three';

const { scene: model , nodes , materials } = await useGLTF('skull-cat.glb')

import { Sampler  } from '@tresjs/cientos';
// Accedemos a las piedras pequeñas y las mostramos en la escena
const littleStones = Object.values(nodes).filter(node => node.name.includes('Object_'))

const gato2 = Object.values(nodes).filter(node => node.name.includes('domestic_cat_(Felis_catus)_43703objcleanermaterialmergergl'))

console.log({"Nodos del Craneo del gato":littleStones})
// inspeccionamos la escena .glb o los objetos(grupo) importados
console.log({nodes, materials,})


// gato2.material = MeshBasicMaterial

// Animación de luces mediante el loop
// const { onLoop } = useRenderLoop()

// onLoop(({elapsed})=>{
//   materials.RockLight.emissiveIntensity = 
//   Math.sin(elapsed) * 7 + 3
// } ) 

</script>
<template>
<!-- <Sampler :count="50" > -->
<primitive :object="nodes.Sketchfab_model" />

<!-- <TresInstancedMesh :args="[null!, null!, 1000]">
  <TresBoxGeometry :args="[0.1, 0.1, 0.1]" />
  <TresMeshNormalMaterial />
</TresInstancedMesh>
</Sampler> -->
</template>