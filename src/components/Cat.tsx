import { Clone, useGLTF } from "@react-three/drei"
import { useEffect } from "react";
import { degToRad } from "three/src/math/MathUtils"
import { Mesh , Vector3 } from "three";

import { myPlayer, usePlayersList } from "playroomkit";
const me = myPlayer();

me?.setState("cat","mage")
export const CAT_MODELS =[
    "mage",
    "toon",
    "animated",
    "normal"
];

export const cat_scales = {
    "mage": 0.6,
    "toon": 0.007,
    "animated": 0.17,
    "normal": 0.08
};

// El gato mago tiene un material en los ojos para aplicar un Post Processing   
export const Cat = ({
    type = CAT_MODELS[0] as keyof typeof cat_scales,
    // scale = new Vector3(1,1,1),
    ...props
 
}) =>{
    const { scene } = useGLTF(`/models/cats/${type}_cat.glb`)
    
    useEffect(() => {
        scene.traverse((child) =>{
                // console.log(child.material);
                if (child instanceof Mesh) {  // Verificación de tipo
                    if (child.material.name === "Cat_Eyes") {
                        child.material.emissive = child.material.color;
                        child.material.emissiveIntensity = 8;
                        child.material.toneMapped = false;
                    }
                }
        });
    },[scene])

    return(
        <group {...props}  >
            <Clone object={scene} rotation-y={degToRad(0)} />
        </group>
    )
}

CAT_MODELS.forEach((model) => {
    useGLTF.preload(`/models/cats/${model}_cat.glb`);
});