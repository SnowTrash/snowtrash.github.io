import { useAnimations, useGLTF } from '@tresjs/cientos'

// const { actions , mixer} = useAnimations(animations, model)
// const currentAction = ref(actions.Run)

// currentAction.value.play()

export class CharacterControls {
    toggleRun: boolean = true
    currentAction: string =""

    public switchRunToggle() {
        this.toggleRun = !this.toggleRun
    }

}