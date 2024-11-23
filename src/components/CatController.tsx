import { usePlayerState, myPlayer, PlayerState } from "playroomkit";
import { Cat, phisycs_scales } from "./Cat";
import { PerspectiveCamera } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { cat_scales } from "./Cat";
import { Vector3 } from "three";
import { useControls } from "leva";

export const CatController = ({ state, controls }: { state: PlayerState; controls: any }) => {
    const me = myPlayer();
    const [catModel] = usePlayerState(state, "cat","mage");
    const rb = useRef();

    const allowedTypes = ["animated", "mage", "toon", "normal"] as const;
  
      if (allowedTypes.includes(catModel as any)) {
      const validCatType = catModel as "animated" | "mage" | "toon" | "normal";
      if(validCatType){ let escala  = useRef(cat_scales[validCatType]);
  
      // let auxvec = useRef(new Vector3(escala.current,escala.current,escala.current));
      console.log(phisycs_scales[validCatType]);

      const { rotationSpeed , carSpeed} = useControls({
        carSpeed:{
          value:3,
          min:0,
          max:10,
          step:0.01,
        },
        rotationSpeed:{
          value:3,
          min:0,
          max:10,
          step:0.01,
        },
      });

      return (
        <group>
          <RigidBody
            ref={rb.current}  // Corregir la referencia aquí
            colliders="hull"
            key={catModel}
            scale={phisycs_scales[validCatType]}  // Usa escala específica para física
          >
            <group >  
              <Cat type={validCatType} />
              {me?.id === state.id && (
                <PerspectiveCamera makeDefault position={[0, 4, -14]} near={1} />
              )}
            </group>
          </RigidBody>
        </group>
      );
      }
    }
  };  
    // Fallback in case of invalid `catModel`
    // return (
  
    //   <group>
    //     <RigidBody
    //       ref={rb.current}
    //       colliders={"hull"}
    //       key={"default-cat"}
    //       scale={auxvec}
    //     >
    //       <Cat type="normal" scale={auxvec}/>
    //     </RigidBody>
    //   </group>
    // );
