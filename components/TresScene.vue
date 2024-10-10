<script lang="ts" setup>
// import { objectScale } from '@tresjs/cientos/dist/core/misc/html/utils.js';
import { reactive, ref, watchEffect , shallowRef } from 'vue'
import { BlendFunction } from 'postprocessing';
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

// Posiciones de los cubos
const cubePositions = [
  new Vector3(3, 0, 3),
  new Vector3(-3, 0, 3),
  new Vector3(0, 0, -3)
]


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


// Handler para las interacciones del modelo y la escena
// Mostrar luces cuando el gato esté cerca
// Función para manejar el clic en los cubos

const handleCubeClick = (cubeIndex: number) => {
  if(isNearObject(cubePositions[cubeIndex], 3)){
    alert(`Cubo ${cubeIndex + 1} clickeado`)
  }
  // triggerCinematicCamera(cubeIndex) // Acción al clic
}

const smoothLookAt = (camera, target, factor = 0.1) => {
  const direction = new Vector3().subVectors(target, camera.position).normalize()
  camera.position.lerp(target, factor)
  camera.lookAt(target)
}

// Handle keyboard controls in client-side lifecycle
const moveCat = (direction: Vector3) => {
  if (canInteract.value) {
    catPos.value.add(direction)
    
    // Mueve la cámara suavemente hacia la nueva posición
    // const cameraOffset = new Vector3(0, 5, 10)
    // smoothLookAt(camRef.value, catPos.value.clone().add(cameraOffset))
  }
}

// const gatoRef = shallowRef(null)
const handleKeyDown = (event: KeyboardEvent) => {
  if (canInteract.value) {
    switch (event.key) {
      case 'w': moveCat(new Vector3(0, 0, -0.1)); break
      case 's': moveCat(new Vector3(0, 0, 0.13)); break
      case 'a': moveCat(new Vector3(-0.13, 0, 0)); break
      case 'd': moveCat(new Vector3(0.1, 0, 0)); break
    }
  }
}

const spherePos = new Vector3(5, 0.9, -15) // posición de la esfera
const isNearObject = (objectPos: Vector3, threshold: number) => {
  return catPos.value.distanceTo(objectPos) < threshold
}
// Manejar el clic en la esfera
// const handleSphereClick = () => {
//   if (isNearObject(spherePos, 4)) { // Si el gato está a menos de 2 unidades de la esfera
//     console.log('El gato está cerca de la esfera')
//     SpheretriggerCinematicCamera()
//   }
// }

var relo = new Clock;
    relo.start();
// Cambiar la cámara para una vista cinemática
const SpheretriggerCinematicCamera = () => {
  if (camRef.value && catPos.value) {
    var elapsed = relo.getElapsedTime();
    const radius = 150; // Radio de la espiral
    const heightFactor = 30; // Controla cuánto varía la altura
    const angleSpeed = 0.3; // Velocidad angular de la espiral

    // Calcula el ángulo en base al tiempo transcurrido
    const angle = elapsed * angleSpeed;

    // Calcula las coordenadas de la cámara usando trigonometría
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = heightFactor * Math.sin(angle); // Variación en el eje Y para dar el efecto de espiral

    // Actualiza la posición de la cámara con el desplazamiento circular
    camRef.value.position.set(x + catPos.value.x, y + catPos.value.y , z + catPos.value.z); // Desplazamiento de la cámara

    // La cámara siempre mira al gato
    camRef.value.lookAt(catPos.value);
    camRef.value.updateProjectionMatrix(); // Actualiza la matriz de proyección
  }  
  if (camRef.value) {
    // Mover la cámara hacia la esfera y cambiar FOV
    camRef.value.position.set(spherePos.x , spherePos.y - 2 , spherePos.z + 1) // posición frente a la esfera
    camRef.value.lookAt(spherePos) // que apunte hacia la esfera
    camRef.value.fov = 30 // cambiar el FOV para efecto cinemático
    camRef.value.updateProjectionMatrix() // actualizar la matriz de proyección de la cámara
  }
}
// End interacciones y cinematica inicial, solo se acerca la camara

// Main Loop?
const { onLoop } = useRenderLoop()
onLoop(({ elapsed }) => {
  // Actualizar posición de la cámara en cada loop
  if (camRef.value && catPos.value) {
    const cameraOffset = new Vector3(0, 5, 10) // Ajusta la distancia de la cámara aquí
    camRef.value.position.lerp(catPos.value.clone().add(cameraOffset), 0.1) // Usa lerp para movimiento suave
    camRef.value.lookAt(catPos.value) // Siempre mira hacia el gato
  }

  
  // triggerLightNearCube() // Verificar si el gato está cerca de algún cubo
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

    // camRef.value.position.x = ghost3.value.position.x
    // console.log("Valor camera: " + camRef.value.position.x)
    // console.log("Valor gatomodel: " + catPos.value.position)
    // camRef.value.lookAt(catPos.value.position);
 }
})



// On mounted y BeforeMounted , mandar llamar fisicas?
// Ensure keyboard events are registered on the client side
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
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

const bloomParams = reactive({
  luminanceThreshold: 0.3,
  luminanceSmoothing: 0.3,
  mipmapBlur: true,
  intensity: 0.5,
  blendFunction: BlendFunction.ADD,
})

</script>

<template>
  <TresCanvas window-size clear-color="#4f4f4f" shadows alpha >
    <OrbitControls  />
    <TresAmbientLight :intensity="2" color="#f1026a"/>
    <Suspense >
      <User :rotation="[2,1.3,4]" :position="catPos" />
    </Suspense>
   
    <TresMesh :position="[0, -2, 0]" >
      <TresBoxGeometry :args="[100, 0.8 , 100]" />
      <TresMeshStandardMaterial :color="0x99869d"/>
    </TresMesh>

    <TresGridHelper /> 
    <Stats />
  </TresCanvas>
</template>

<style>
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