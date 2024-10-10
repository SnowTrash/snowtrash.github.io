<script lang="ts">

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
</template>