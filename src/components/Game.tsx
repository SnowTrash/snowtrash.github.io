import { Gltf , Environment , Lightformer, OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { useState, useEffect } from "react";
import { Joystick , onPlayerJoin } from 'playroomkit';

import { CatController } from "./CatController";

export const Game = () => {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    onPlayerJoin((state) => {
      const controls = new Joystick(state, {
        type: "angular",
        buttons: [{ id: "Respawn", label: "Spawn" }],
      });
      const newPlayer = { state, controls };
      setPlayers((players) => [...players, newPlayer]);
      state.onQuit(() => {
        setPlayers((players) => players.filter((p) => p.state.id !== state.id));
      });
    });
  }, []);


    return <group>
<Physics debug>
    {players.map(({state, controls}) => (
      <CatController key={state} state={state} controls={controls} />
    ))}
    <RigidBody type="fixed" colliders="trimesh" rotation-y={Math.PI} position={[0,-46,0]} >
    <Gltf src="models/FPSclocktower.glb" position={[0,0,30]} scale={2}/>
    </RigidBody>
</Physics>

    {/* Luces */}
    <ambientLight intensity={0.4} />
      <Environment>
        <Lightformer
          position={[5, 5, 5]}
          form="rect" // circle | ring | rect (optional, default = rect)
          intensity={1} // power level (optional = 1)
          color="white" // (optional = white)
          scale={100} // Scale it any way you prefer (optional = [1, 1])
          target={[0, 0, 0]} // Target position (optional = undefined)
        />
      </Environment>
      <pointLight position={[0, 5, 0]} intensity={2.5} distance={10} />
      <pointLight
        position={[5, 5, 0]}
        intensity={10.5}
        distance={10}
        color="pink"
      />
      <pointLight
        position={[-5, 5, 0]}
        intensity={10.5}
        distance={15}
        color="blue"
      />
      <directionalLight position={[10, 10, 10]} intensity={0.4} />
    </group>;
}