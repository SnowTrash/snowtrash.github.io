import { usePlayerState, myPlayer, PlayerState } from "playroomkit";
import { Cat, phisycs_scales } from "./Cat";
import { PerspectiveCamera } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export const CatController = ({ state, controls }: { state: PlayerState; controls: any }) => {
    const me = myPlayer();
    const [catModel] = usePlayerState(state, "cat", "animated");
    const rb = useRef();
  
    const allowedTypes = ["animated", "mage", "toon", "normal"] as const;
  
    if (allowedTypes.includes(catModel as any)) {
      const validCatType = catModel as "animated" | "mage" | "toon" | "normal";
      return (
        <group>
          <RigidBody
            ref={rb.current}
            colliders={"hull"}
            key={catModel}
          >
            <Cat type={validCatType} scale={0.4} />
          </RigidBody>
        </group>
      );
    }
  
    // Fallback in case of invalid `catModel`
    return (
      <group>
        <RigidBody
          ref={rb.current}
          colliders={"hull"}
          key={"default-cat"}
        >
          <Cat type="normal" scale={0.4}/>
        </RigidBody>
      </group>
    );
  };  