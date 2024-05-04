<script lang="ts" setup>
import { Color, MeshBasicMaterial } from 'three';
import { materialEmissive } from 'three/examples/jsm/nodes/Nodes.js';

const { scene: model , nodes , materials } = await useGLTF('nuxt-stones.glb')

const  texturaBakedPiedras  = await useTexture(['/RockBaked.png'])
// rotamos el mapa uv(.png) por su eje Y para que corresponda a las caras
texturaBakedPiedras.flipY = false
const materialBakedPiedras = new MeshBasicMaterial({
  map:texturaBakedPiedras
})
// se crea el material con el png

nodes.Stone.material = materialBakedPiedras
// mapa de profundidad
nodes.StoneCarved.material = materialBakedPiedras

// modelos secundarios
const texturaBakedPiedritas = await useTexture(['/LittleRocksBaked.png'])
texturaBakedPiedritas.flipY = false
const materialBakedPieditas = new MeshBasicMaterial({
  map:texturaBakedPiedritas
})
// Accedemos a las piedras pequeñas y las mostramos en la escena
const littleStones = Object.values(nodes).filter(node => node.name.includes('Stone00'))

// Aplicamos la textura

littleStones.forEach((stone) => {
  stone.material = materialBakedPieditas
})

materials.RockLight.emissive = new Color(204,0,204)
materials.RockLight.emissiveIntensity = 4

// console.log(littleStones)
// inspeccionamos la escena .glb o los objetos(grupo) importados
console.log({nodes, materials,})

// Animación de luces mediante el loop
const { onLoop } = useRenderLoop()

onLoop(({elapsed})=>{
  materials.RockLight.emissiveIntensity = 
  Math.sin(elapsed) * 7 + 3
} ) 

</script>
<template>
  <primitive :object="nodes.StoneCarved" />
  <primitive :object="nodes.Stone" />
  <!-- Creamos un arreglo para agregar los nodos(piedritas) -->
  <primitive v-for="stone in littleStones" :object="stone" />
  <!-- creamos un primitive para el logo y los Orbs -->
  <primitive :object="nodes.Logo" />
  <primitive :object="nodes.Orbs" />
</template>