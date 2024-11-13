import { useGLTF } from "@react-three/drei"
import { useEffect } from "react";
import { Mesh } from "three";

export const Lobby = () => {
  // Adding scene 
  const { scene } = useGLTF("models/MarketScene.glb")

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {  // Verificación de tipo
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return(
    <>
    <primitive object={scene} scale={25} position={[2.5, 0, -1.2]}/>
    </>
  )
}

useGLTF.preload("models/Lobby_clocktower.glb")