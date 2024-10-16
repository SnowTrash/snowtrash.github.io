<script lang="ts" setup>
// import { objectScale } from '@tresjs/cientos/dist/core/misc/html/utils.js';
import { reactive, ref, watchEffect , shallowRef } from 'vue'
// import { BlendFunction } from 'postprocessing';
import { PointerLockControls , KeyboardControls , Sphere , OrbitControls } from '@tresjs/cientos'
import { useControls, TresLeches } from '@tresjs/leches'
import '@tresjs/leches/styles'
import { Clock, Vector3 } from 'three'

import { useRenderLoop , vDistanceTo, vAlwaysLookAt } from '@tresjs/core'

import { Stats } from '@tresjs/cientos'
const catPos = shallowRef(new Vector3(0, 0.5, 0)) // Initialize cat position

const skullRef = shallowRef()
const camRef = shallowRef()

const ghost1 = shallowRef(null)
const ghost2 = shallowRef(null)
const ghost3 = shallowRef(null)

// Tres leches
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

// watchEffect(() => {
//   // console.log("Vector de rotacion: " + rotation.value.value)
//   // console.log("Skullref valor: " + skullRef.value)
//   // console.log("Valor camera: " + camRef.value.position)
//   // console.log(rotation.value.value.x)
// })

// Main Loop
const { onLoop } = useRenderLoop()
onLoop(({ elapsed }) => {

  const ghost1Angle = elapsed * 0.5
  const ghost2Angle = -elapsed * 0.32
  const ghost3Angle = -elapsed * 0.18
  // const gatoRefAngle = -elapsed * -0.6
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
 }
})

//  Inicio de sesion
import { signInWithPopup , GoogleAuthProvider  } from 'firebase/auth'
// import { } from 'firebase/auth/web-extension';
// Estados de autenticación
const isAuthenticated = ref(false)
const isGuest = ref(false)
const canInteract = ref(false)
const showOverlay = ref(true) // Mostrar capa opaca
// Autenticación con Google
const auth = useFirebaseAuth()
function loginWithGoogle() {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then(() => {
      isAuthenticated.value = true
      canInteract.value = true
      showOverlay.value = false
    })
    .catch((error) => {
      console.error('Error en el inicio de sesión con Google', error)
    })
}
// Ingresar como invitado
const enterAsGuest = () => {
  isGuest.value = true
  isAuthenticated.value = true
  canInteract.value = true
  showOverlay.value = false
}
// End inicio de sesion


// Posiciones de los cubos
const cubePositions = [
  new Vector3(3, 0, 3),
  new Vector3(-3, 0, 3),
  new Vector3(0, 0, -3)
]

// Fisicas
import * as THREE from 'three'
import RAPIER from '@dimforge/rapier3d-compat'

await RAPIER.init() // This line is only needed if using the compat version
const gravity = new RAPIER.Vector3(0.0, -9.81, 0.0)
const world = new RAPIER.World(gravity)
const dynamicBodies: [THREE.Object3D, RAPIER.RigidBody][] = []

const floorBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, -1, 0))
const floorShape = RAPIER.ColliderDesc.cuboid(50, 0.5, 50)
world.createCollider(floorShape, floorBody)

console.log("Data del Rapier:  ",world)
const cubeRef = shallowRef()

const cubeBody = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 5, 0).setCanSleep(false))
const cubeShape = RAPIER.ColliderDesc.cuboid(10, 10, 1).setMass(2).setRestitution(1.1)
world.createCollider(cubeShape, cubeBody)
dynamicBodies.push([cubeRef.value, cubeBody])
// Fin fisicas

</script>

<template>
  <div v-if="!isAuthenticated && !isGuest" class="login-container">
    <button @click="loginWithGoogle">Iniciar sesión con Google</button>
    <button @click="enterAsGuest">Entrar como invitado</button>
  </div>
  <!-- Capa semi-transparente -->
  <div v-if="showOverlay" class="overlay">
    <p>Debes iniciar sesión o entrar como invitado para interactuar con la escena.</p>
  </div>
<!-- Este debería ser un componente junto al modal, que pueda contener los distintos botones de Auth o registrarse -->

<!-- Escena 3D -->
  <TresLeches />
  <TresCanvas window-size clear-color="#4f4f4f" shadows alpha >
  <TresPerspectiveCamera :args="[45, 1, 0.1, 1000]" :position="[0,10,9]" />
  <Stats />
  <TresGridHelper /> 

    <!-- Ghosts -->
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
  <!-- Suelo/techo -->
  <TresMesh :position="[0, -2, 0]" >
    <TresBoxGeometry :args="[100, 0.8 , 100]" />
    <TresMeshStandardMaterial :color="0xa8def0"/>
  </TresMesh>

    <TresAmbientLight :intensity="0.5" color="#f1026a"/>

    <TresDirectionalLight
    cast-shadow
    :position="[0, 2, 0]"
    :intensity="1"
  />
  
    <!-- Modelo del craneo -->
    <!-- <Suspense >
      <Cat :position="[0, 5, -30]" :scale="[0.3,0.3,0.3]" :rotation="[4, 0, 0]" :ref="skullRef" />
    </Suspense> -->

    <TresMesh :ref="cubeRef" :position="[10, 5, 0]" >
      <TresBoxGeometry :args="[7, 10, 1.5]"/> <!-- Hacer los cubos más grandes -->
      <TresMeshStandardMaterial color="red" /> <!-- Aplicar transparencia -->
    </TresMesh>

    <KeyboardControls v-if="canInteract">
    <Suspense >
      <User :position="catPos" />
    <!-- :rotation="[gatito.value.x,gatito.value.y,gatito.value.z]" -->
    </Suspense>
    </KeyboardControls>
  </TresCanvas>
</template>

<style>
.login-container {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  font-size: 1.5rem;
}
</style>