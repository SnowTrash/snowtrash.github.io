import { Billboard, CameraControls, OrbitControls, PerspectiveCamera , Text , Image} from '@react-three/drei'
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
import { myPlayer, usePlayersList } from 'playroomkit'
import { Cat } from './components/Cat'

// player highligt
import { degToRad } from "three/src/math/MathUtils";

// Name editing state
import { atom , useAtom  } from "jotai";
import { NameEditingAtom } from './components/UI';


function Scene() {
  const { performance } = useControls('Monitoring', {
    performance: false,
  })

  const { animate } = useControls('Cube', {
    animate: true,
  })

  const cubeRef = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>(null)

  // useFrame((_, delta) => {
  //   if (animate) {
  //     cubeRef.current!.rotation.y += delta / 3
  //   }
  // })

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
    return new Vector3( x, -3, z); 
  }

  const me = myPlayer();


  
  const [_nameEditing, setNameEditing] = useAtom(NameEditingAtom);

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
          {/* Texto con la opcion de editable  */}
            <Billboard position-y={2.9} position-x={0.5}>
              <Text fontSize={0.34} anchorX={"right"}>
                {player.getState("name") || player.getState("profile").name}
                <meshBasicMaterial color="white" />
              </Text>
              <Text
                fontSize={0.34}
                anchorX={"right"}
                position-x={0.02}
                position-y={-0.02}
                position-z={-0.01}
              >
                {player.getState("name") || player.getState("profile").name}
                <meshBasicMaterial color="black" transparent opacity={0.8} />
              </Text>

              {player.id === me?.id && (
                <>
                <Image
                    onClick={() => setNameEditing(true)}
                    position-x={0.2}
                    scale={0.3}
                    url="images/edit.png"
                    transparent
                  />
                  <Image
                    position-x={0.2 + 0.02}
                    position-y={-0.02}
                    position-z={-0.01}
                    scale={0.3}
                    url="images/edit.png"
                    transparent
                    color="black"
                  />
                </>
              )}
            </Billboard>

          {/*Modelo del jugador con la base*/}
          <Cat type={player.getState("cat")}/>
          {player.id === me?.id && (<>
                <pointLight
                  position-x={1}
                  position-y={2}
                  intensity={2}
                  distance={3}
                />
                <group rotation-x={degToRad(-90)} position-y={0.01}>
                  <mesh receiveShadow>
                    <circleGeometry args={[2.2, 64]} />
                    <meshStandardMaterial
                      color="pink"
                      toneMapped={false}
                      emissive={"pink"}
                      emissiveIntensity={1.2}
                    />
                  </mesh>
                </group>
                <mesh position-y={0.1} receiveShadow>
                  <cylinderGeometry args={[2, 2, 0.2, 64]} />
                  <meshStandardMaterial color="#8572af" />
                </mesh>
              </>
          )}
        </group>
      ))}

      {/* Loaded Scene */}
      <Lobby />


{/* ACTIVAR PARA LOS CONTROLES DEL DEBUG */}
      {/* <Cube ref={cubeRef} /> */}
      {/* <Sphere /> */}

      {/* <Plane /> */}
    </>
  )
}

export { Scene }