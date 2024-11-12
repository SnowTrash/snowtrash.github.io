import { Box, CameraControls, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { LegacyRef, useEffect, useRef } from 'react'
import { BoxGeometry, Mesh, MeshBasicMaterial , Vector3 } from 'three'

import { PerspectiveCamera as ThreePerspectiveCamera } from 'three';

import { Cube } from './components/Cube'
import { Plane } from './components/Plane'
import { Sphere } from './components/Sphere'

// Playrooom & 3D Lobby
import { Lobby } from './components/Lobby'
import { usePlayersList } from 'playroomkit'
import { Cat } from './components/Cat'

function Scene() {
  const { performance } = useControls('Monitoring', {
    performance: false,
  })

  const { animate } = useControls('Cube', {
    animate: true,
  })

  const cubeRef = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>(null)

  useFrame((_, delta) => {
    if (animate) {
      cubeRef.current!.rotation.y += delta / 3
    }
  })

  // players array
  const controls = useRef<CameraControls | null>(null);
  const players = usePlayersList(true);

  const viewport = useThree((state) => state.viewport);

  const cameraReference = useRef<ThreePerspectiveCamera| null>(null);


  const adjustCamera = () => {
    // console.log(viewport.getCurrentViewport(cameraReference.current, new Vector3(0,0,0)))
    // console.log(viewport.width);

    if(controls.current?.camera){
    const distFactor = 17 / viewport.getCurrentViewport(controls.current.camera, new Vector3(0,0,0)).width;
    
    controls.current.setLookAt(
    -7.8 * distFactor,
    3 * distFactor,
    12.5 * distFactor,
    0 , 0.15 , 0 , true);
    }
}

  useEffect(() => {
    const onResize = () => {
      adjustCamera();
    }
    window.addEventListener("resize",onResize);
    return () => window.removeEventListener("resize",onResize);
  },[]);

  const calculatePosition = (index: number) => {
    // <>
    // <primitive object={scene} scale={25} position={[2.5, 0, -1.2]}/>
    // </> Adaptar la posicion inicial del modelo para posicionarlo en 0.0

    const angle = (index / players.length) * Math.PI * 2; // Ángulo para cada jugador
    const radius = 7; // Radio del círculo
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    return new Vector3( x, 0, z); 
  }

  return (
    <>
      {performance && <Perf position='top-left' />}

    <PerspectiveCamera ref={cameraReference} position={[-7.8, 3, 12.5]} fov={55} near={0.1} far={200} />
      <CameraControls ref={controls} />
      <OrbitControls makeDefault />

      <directionalLight
        position={[-2, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <ambientLight intensity={0.2}/>

      {/* LOAD PLAYERS */}
      {players.map((player,index) => (
        
        <group key={player.id} position={calculatePosition(index)}>
          <Cat />
        </group>
      ))}

      {/* Loaded Scene */}
      <Lobby />

      <Cube ref={cubeRef} />
      <Sphere />
      {/* <Plane /> */}
    </>
  )
}

export { Scene }
