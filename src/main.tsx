import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'
import { Scene } from './Scene'
import './styles/main.css'
import { onPlayerJoin, insertCoin, isHost, myPlayer } from "playroomkit";
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { UI } from './components/UI'


function Main() {
  return (
    <div className='main'>
      
      <Leva
        collapsed={false}
        oneLineLabels={false}
        flat={true}
        theme={{
          sizes: {
            titleBarHeight: '28px',
          },
          fontSizes: {
            root: '10px',
          },
        }}
      />

<UI />  

      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputColorSpace: SRGBColorSpace,
        }}
        camera={{
          fov: 55,
          near: 0.1,
          far: 200,
          position: [-7.8, 3, 12.5],
        }}
        shadows
      >
        <Scene />

        <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={4} />
      </EffectComposer>
      </Canvas>
    </div>
  )
}


insertCoin({
  skipLobby: true,
}).then(() => 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
);