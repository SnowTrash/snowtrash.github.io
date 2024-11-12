import { useGLTF } from "@react-three/drei"
import { useEffect } from "react";

export const Lobby = () => {
  // Adding scene 
  const { scene } = useGLTF("models/MarketScene.glb")
  useEffect(() => {
    scene.traverse((child) => {
      if(child.isObject3D){
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return(
    <>
    <primitive object={scene} scale={25} />
    </>
  )
}

useGLTF.preload("models/MarketScene.glb")