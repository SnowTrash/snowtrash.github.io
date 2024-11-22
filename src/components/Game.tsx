import { useState, useEffect } from "react";
import { Gltf, Environment, Lightformer, OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Joystick, onPlayerJoin, PlayerState } from "playroomkit"; // Verifica la importación de PlayerState.

import { CatController } from "./CatController";

// Define el tipo para cada jugador.
type Player = {
  state: PlayerState;
  controls: Joystick;
};

export const Game = () => {
  // Declara el estado con el tipo definido.
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    onPlayerJoin((state) => {
      const controls = new Joystick(state, {
        type: "angular",
        buttons: [{ id: "Respawn", label: "Spawn" }],
      });
      const newPlayer = { state, controls };
      setPlayers((players) => [...players, newPlayer]); // No más error aquí.
      
      state.onQuit(() => {
        setPlayers((players) => players.filter((p) => p.state.id !== state.id));
      });
    });
  }, []);

  return (
    <group>
      <Physics debug>
        {players.map(({ state, controls }) => (
          <CatController key={state.id} state={state} controls={controls} />
        ))}
        <RigidBody type="fixed" colliders="trimesh" rotation-y={Math.PI} position={[0, -46, 0]}>
          <Gltf src="models/FPSclocktower.glb" position={[0, 0, 30]} scale={2} />
        </RigidBody>
      </Physics>

      {/* Luces */}
      <ambientLight intensity={0.4} />
      <Environment>
        <Lightformer
          position={[5, 5, 5]}
          form="rect"
          intensity={1}
          color="white"
          scale={100}
          target={[0, 0, 0]}
        />
      </Environment>
      <pointLight position={[0, 5, 0]} intensity={2.5} distance={10} />
      <pointLight position={[5, 5, 0]} intensity={10.5} distance={10} color="pink" />
      <pointLight position={[-5, 5, 0]} intensity={10.5} distance={15} color="blue" />
      <directionalLight position={[10, 10, 10]} intensity={0.4} />
    </group>
  );
};
