# Lista de acciones realizadas

#### Ejemplo de Nuxt Stones por alvaro Saruvio TresJs []
#### Importando modelos [] 
#### y animando al personaje (controles & animacion)


+++++++++++++++++++++++++++++++OCTUBRE 2024 OCTUBRE 2024 OCTUBRE 2024 OCTUBRE 2024++++++++++++++++++++++++++++++++++++++ 
0.3 - Actualmente solo se iniciaba sesion, necesito activar o desactivar cosas en la escena dependiendo el login
      KeyboardControls y Cameracontrols basicos.
      Deteccion basica y manual de colliders e iniciando la construccion de animacion/transicion de camara para la interaccion con ojetos.

0.3.9 --- Este video implementa el Third Person Controller directo en threeJs
https://www.youtube.com/watch?v=C3s0UHpwlf8
https://github.com/tamani-coding/threejs-character-controls-example

----------- Fisicas
---- Estos son ejemplos con threejs & rapier
https://github.com/viridia/demo-rapier-three

Rapier spheres & floor
https://www.youtube.com/watch?v=4Ly4_-KRNiQ

Estamos intentando implementar los controles de este tutorial mediante 
modificaciones y adaptaciones para vue 3 y nuxt.
-- WASM things 
https://stackoverflow.com/questions/73409247/nuxt3-how-to-use-vite-plugin-wasm

- Detectar el dispositivo del que se visualiza 
https://nuxt.com/modules/device

+++++++++++++++++++++++++++++++OCTUBRE 2024 OCTUBRE 2024 OCTUBRE 2024 OCTUBRE 2024++++++++++++++++++++++++++++++++++++++


++++++++++++++++++++++++++Noviembre 2024 Noviembre 2024 Noviembre 2024 Noviembre 2024++++++++++++++++++++++++++++++++


----------------------------- Modificaciones actuales
ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO
ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO ACTUALIZANDO

Actualmente detecta el dispositivo y lo muestra en un LOG , la integracion de los 
controles esta a mitad de camino con Rapier.

Se integrarán los controles y el terreno procedural con unas cuantas figuras.

0.4 - Controles 3rd prson
https://www.youtube.com/watch?v=voGmsOuB3Rk
https://github.com/tamani-coding/threejs-rapier3d-character-terrain-movement

-------------------------------------------------

0.4 - Implementar unos controles dinamicos DESPUES
3D- visionary
https://www.youtube.com/watch?v=ipW-DUyPYlk
https://github.com/visionary-3d/advanced-character-controller/tree/main

2.- INTEGRAR VUEFIRE - FIREBASE

#### Integrando Vuefire??? apenas integré el popup
   [VueFire](https://vuefire.vuejs.org/)
   [How to Use Firebase Auth with Nuxt 3 🔥 (2024)](https://www.youtube.com/watch?v=pvLlZfVkeWM)
   https://vuefire.vuejs.org/nuxt/getting-started.html


Auth Firebase
Building a Secure Nuxt 3 SaaS App: User Authentication, Password Reset, and Firebase Integration
https://www.youtube.com/watch?v=fkb-L-_8Ng0
https://github.com/BayBreezy/nuxt-saas-pets-manager-firebase


3.- INTEGRAR SOCKET.IO

Build Full Stack Realtime Chat App using Nuxt 3, Nuxt UI, typescript & Socket.io ( 2024 )
https://www.youtube.com/watch?v=R-1EoDMfSnI
https://github.com/hafizjavaid/Nuxt3-Socket-Chatapp

----------------------------- COMO DEBERIA INTEGRAR RAPIER EN EL SERVIDOR
Use-cannon and Socket.io ? ----> github.com › pmndrs › use-cannon › discussions › 74

Rather than send events (key presses) across the network and calculating the results in each client, you should run cannon-es on the server. Send the events to the server, let it calculate the results, then distribute those results back to the client.


-----------------------------
-----------------------------
----------------------------- Modificaciones actuales

++++++++++++++++++++++++++Noviembre 2024 Noviembre 2024 Noviembre 2024 Noviembre 2024++++++++++++++++++++++++++++++++

#### Integrar Pinia?
   [Nuxt 3 + Pinia Tutorial](https://www.youtube.com/watch?v=kqs9oegfZGU)

0.5 -  ademas necesito implementar Pinia para guardar datos en tiempo real? para guardar la posicion anterior de la
   camara? que datos? datos de los ejercicios?

Datos de vida , maná y cosas así, casteando y el hechizo o algo así


## TENSOR Library
https://pusher.com/tutorials/emotion-recognition-tensorflow/


Analizar: ---------------------
Que es SPA y como usarlo   
los conceptos más novedosos de este genial framework, 
desde un repaso de la Option API (usada en VueJS 2) 
para luego usar la Composition API. 

Veremos los Componentes, Composables y Ciclos de vida de Vue 
para crear los elementos de tu interfaz, 

mientras que con VueRouter y Pinia 
aprenderás a navegar entre las vistas 
de tu página y guardar el estado para
fácil comunicación entre componentes.