import { Box, CameraControls, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three'
import { Cube } from './components/Cube'
import { Plane } from './components/Plane'
import { Sphere } from './components/Sphere'

// Playrooom & 3D Lobby
import { Lobby } from './components/Lobby'
import { usePlayersList } from 'playroomkit'

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
  const controls = useRef();
  const players = usePlayersList(true);

  return (
    <>
      {performance && <Perf position='top-left' />}
      <CameraControls ref={controls.current} />
      <OrbitControls makeDefault />

      <directionalLight
        position={[-2, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <ambientLight intensity={0.2} />

      {players.map((player,index) => (
        <group key={player.id} position={[0,index * 2, 0]}>
          <Box>
            <meshBasicMaterial color={"red"}/>
          </Box>
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
