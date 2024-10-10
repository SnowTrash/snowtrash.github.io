<script lang="ts">
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'

import RAPIER from '@dimforge/rapier3d-compat'

await RAPIER.init() // This line is only needed if using the compat version
const gravity = new RAPIER.Vector3(0.0, -9.81, 0.0)
const world = new RAPIER.World(gravity)
const dynamicBodies: [THREE.Object3D, RAPIER.RigidBody][] = []

const scene = new THREE.Scene()

const light1 = new THREE.SpotLight(undefined, Math.PI * 10)
light1.position.set(2.5, 5, 5)
light1.angle = Math.PI / 3
light1.penumbra = 0.5
light1.castShadow = true
light1.shadow.blurSamples = 10
light1.shadow.radius = 5
scene.add(light1)

const light2 = light1.clone()
light2.position.set(-2.5, 5, 5)
scene.add(light2)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 2, 5)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.VSMShadowMap
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.target.y = 1

// Cuboid Collider
const cubeMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial())
cubeMesh.castShadow = true
scene.add(cubeMesh)
// const cubeBody = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 5, 0).setCanSleep(false))
// const cubeShape = RAPIER.ColliderDesc.cuboid(0.5, 0.5, 0.5).setMass(1).setRestitution(1.1)
// world.createCollider(cubeShape, cubeBody)
// dynamicBodies.push([cubeMesh, cubeBody])

// // Ball Collider
// const sphereMesh = new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshNormalMaterial())
// sphereMesh.castShadow = true
// scene.add(sphereMesh)
// const sphereBody = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(-2, 5, 0).setCanSleep(false))
// const sphereShape = RAPIER.ColliderDesc.ball(1).setMass(1).setRestitution(1.1)
// world.createCollider(sphereShape, sphereBody)
// dynamicBodies.push([sphereMesh, sphereBody])

// // Cylinder Collider
// const cylinderMesh = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 16), new THREE.MeshNormalMaterial())
// cylinderMesh.castShadow = true
// scene.add(cylinderMesh)
// const cylinderBody = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 5, 0).setCanSleep(false))
// const cylinderShape = RAPIER.ColliderDesc.cylinder(1, 1).setMass(1).setRestitution(1.1)
// world.createCollider(cylinderShape, cylinderBody)
// dynamicBodies.push([cylinderMesh, cylinderBody])

// // ConvexHull Collider
// const icosahedronMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshNormalMaterial())
// icosahedronMesh.castShadow = true
// scene.add(icosahedronMesh)
// const icosahedronBody = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(2, 5, 0).setCanSleep(false))
// const points = new Float32Array(icosahedronMesh.geometry.attributes.position.array)
// const icosahedronShape = (RAPIER.ColliderDesc.convexHull(points) as RAPIER.ColliderDesc).setMass(1).setRestitution(1.1)
// world.createCollider(icosahedronShape, icosahedronBody)
// dynamicBodies.push([icosahedronMesh, icosahedronBody])

// // Trimesh Collider
// const torusKnotMesh = new THREE.Mesh(new THREE.TorusKnotGeometry(), new THREE.MeshNormalMaterial())
// torusKnotMesh.castShadow = true
// scene.add(torusKnotMesh)
// const torusKnotBody = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(4, 5, 0))
// const vertices = new Float32Array(torusKnotMesh.geometry.attributes.position.array)
// let indices = new Uint32Array((torusKnotMesh.geometry.index as THREE.BufferAttribute).array)
// const torusKnotShape = (RAPIER.ColliderDesc.trimesh(vertices, indices) as RAPIER.ColliderDesc)
//   .setMass(1)
//   .setRestitution(1.1)
// world.createCollider(torusKnotShape, torusKnotBody)
// dynamicBodies.push([torusKnotMesh, torusKnotBody])

const floorMesh = new THREE.Mesh(new THREE.BoxGeometry(100, 1, 100), new THREE.MeshPhongMaterial())
floorMesh.receiveShadow = true
floorMesh.position.y = -1
scene.add(floorMesh)
const floorBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, -1, 0))
const floorShape = RAPIER.ColliderDesc.cuboid(50, 0.5, 50)
world.createCollider(floorShape, floorBody)

// const raycaster = new THREE.Raycaster()
// const mouse = new THREE.Vector2()

// renderer.domElement.addEventListener('click', (e) => {
//   mouse.set(
//     (e.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     -(e.clientY / renderer.domElement.clientHeight) * 2 + 1
//   )

//   raycaster.setFromCamera(mouse, camera)

//   const intersects = raycaster.intersectObjects(
//     [cubeMesh, sphereMesh, cylinderMesh, icosahedronMesh, torusKnotMesh],
//     false
//   )

//   if (intersects.length) {
//     dynamicBodies.forEach((b) => {
//       b[0] === intersects[0].object && b[1].applyImpulse(new RAPIER.Vector3(0, 10, 0), true)
//     })
//   }
// })

const stats = new Stats()
document.body.appendChild(stats.dom)

const gui = new GUI()

const physicsFolder = gui.addFolder('Physics')
physicsFolder.add(world.gravity, 'x', -10.0, 10.0, 0.1)
physicsFolder.add(world.gravity, 'y', -10.0, 10.0, 0.1)
physicsFolder.add(world.gravity, 'z', -10.0, 10.0, 0.1)

const clock = new THREE.Clock()
let delta

function animate() {
  requestAnimationFrame(animate)

  delta = clock.getDelta()
  world.timestep = Math.min(delta, 0.1)
  world.step()

  for (let i = 0, n = dynamicBodies.length; i < n; i++) {
    dynamicBodies[i][0].position.copy(dynamicBodies[i][1].translation())
    dynamicBodies[i][0].quaternion.copy(dynamicBodies[i][1].rotation())
  }

  controls.update()

  renderer.render(scene, camera)

  stats.update()
}

animate()
</script>

<template>

</template>