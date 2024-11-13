import { Clone, useGLTF } from "@react-three/drei"
import { useEffect } from "react";
import { degToRad } from "three/src/math/MathUtils"
import { Mesh } from "three";

import { myPlayer, usePlayersList } from "playroomkit";
const me = myPlayer();

export const CAT_MODELS =[
    "mage",
    "toon",
    "animated",
    "normal"
];

const cat_scales = {
    "toon": 0.007,
    "mage": 0.6,
    "animated": 0.17,
    "normal": 0.08
};

// El gato mago tiene un material en los ojos para aplicar un Post Processing   
export const Cat = ({
    type = CAT_MODELS[0],
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
        <group {...props}>
            <Clone object={scene} rotation-y={degToRad(0)} scale={Number(cat_scales[type])}/>
        </group>
    )
}

CAT_MODELS.forEach((model) => {
    useGLTF.preload(`/models/cats/${model}_cat.glb`);
});