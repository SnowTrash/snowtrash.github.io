import { usePlayerState, myPlayer } from "playroomkit";
import { Cat, phisycs_scales } from "./Cat";
import { PerspectiveCamera } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export const CatController = ({state, controls}) => {
    const me = myPlayer();
    const [catModel] = usePlayerState(state,"cat");
    const rb = useRef();

    
return <group>
    <RigidBody
     debug
     ref={rb.current}
     colliders={"hull"}
     key={catModel}
     scale={phisycs_scales[catModel]}
    >
    <Cat type={catModel} scale={phisycs_scales[catModel]} />
    {/* {me?.id === state.id && (
        <PerspectiveCamera makeDefault position={[0, 6, -9]} near={1} />
    )} */}
    </RigidBody>
    </group>;
};