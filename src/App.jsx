import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Environment } from '@react-three/drei'



import { BoxHelper, GridHelper } from 'three';
import Pupitre from './Modelos/Pupitre'
import Pizarra from './Modelos/Pizarra'
import Escritorio from './Modelos/Escritorio'
import SillaPlastico from './Modelos/SillaPlastico'
import Computador from './Modelos/Computador'
import Servidor from './Modelos/Servidor'
import Mesap from './Modelos/Mezap'
import Basurero from './Modelos/Basurero'


import Casa from './Modelos/Casa'
import Basurero2 from './Modelos/Basurero2'
import MesaPlastico from './Modelos/MesaPlastico'
import Focos from './Modelos/Focos'
import ApoyoDeIm from './Modelos/ApoyoDeIm'
import Impresora3D from './Modelos/Impresora3D'
import Partes from './Modelos/Partes'
import Curtains from './Modelos/Curtains'

import ControlMovil from './ControlMovil'
import Estante from './Modelos/Estante';
import MesaCo from './Modelos/MesaCo';
import ComputerParts from './Modelos/CompueterParts';
import Laptop from './Modelos/Laptop';
import Laptop1 from './Modelos/Laptop1';
import Laptop2 from './Modelos/Laptop2';
import Madera from './Modelos/Madera';







function App() {



  {/* adicionamos iluminacion */ }
  const [intensidadLuz, setIntensidadLuz] = useState(0.5);

   const [movimientoActivo, setMovimientoActivo] = useState(false);

     // Función para pedir permiso en iOS, opcional en Android
  const activarMovimiento = () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission()
        .then((state) => {
          if (state === "granted") setMovimientoActivo(true);
          else alert("Permiso de sensor no otorgado");
        })
        .catch(console.error);
    } else {
      setMovimientoActivo(true); // Android / escritorio
    }
  };




  return (<>
    <div style={{
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 1,
      background: 'white',
      padding: '10',
      borderRadius: '8'
    }}>


      {/* luz */}
      <label style={{ marginTop: 10 }}>Intensidad de luz: {intensidadLuz.toFixed(2)}</label>
      <input
        type="range"
        min="0"
        max="2"
        step="0.01"
        value={intensidadLuz}
        onChange={(e) => setIntensidadLuz(parseFloat(e.target.value))}
        style={{ width: '100%' }}
      />


    </div>
          
          
          
          
          
          <button
        onClick={() =>
          (movimientoActivo  ? setMovimientoActivo(false) : activarMovimiento())}
        style={{
          position: "absolute",
          top: 100,
          left: 20,
          zIndex: 1,
          padding: "8px 12px",
          borderRadius: 5,
          background: movimientoActivo ? "red" : "green",
          color: "white",
          border: "none",
        }}
      >
        {movimientoActivo ? "Desactivar movimiento" : "Activar movimiento"}
      </button>



     <Canvas
        shadows
        camera={{ position: [3, 3, 3], fov: 50 }}
        style={{ width: '100vw', height: '100vh', background: '#222' }}
      >
        {/* Luces */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={intensidadLuz}
          color="white"
          castShadow
        />
        <directionalLight position={[5, 4, -5]} intensity={0.4} color="white" />
        <hemisphereLight intensity={0.3} />


        <primitive object={new GridHelper(20, 20)} />
      {/* Computadora 
      <Mesa position={[2, 0, 0]} />
      <Computadora position={[0, 1.25, 0]} scale={[0.5, 0.5, 0.5]} />*/}
        {/* Casa */}
        <Casa position={[4, 0,0]} />
      
      {/* puprite */}


      <Pupitre position={[2, 0, -1]} />
      <Pupitre position={[4, 0, -1]} />
      <Pupitre position={[2, 0, 2]} />
      <Pupitre position={[4, 0, 2]} />
      <Pupitre position={[2, 0, 0.5]} />
     
     


      <Pupitre position={[-2, 0, -1]} />
      <Pupitre position={[0, 0, -1]} />
      <Pupitre position={[-2, 0, 2]} />
      <Pupitre position={[0, 0, 2]} />
      <Pupitre position={[-2, 0, 0.5]} />
      <Pupitre position={[0, 0, 0.5]} />


      <Pupitre position={[8, 0, 0]} />
      <Pupitre position={[8, 0, 2]} />
      <Pupitre position={[8, 0, 1]} />
      <Pupitre position={[8, 0.7, 0]} />
      <Pupitre position={[8, 0.7, 2]} />
      <Pupitre position={[8, 0.7, 1]} />

      <Pupitre position={[7, 0, 0]} />
      <Pupitre position={[7, 0, 2]} />
      <Pupitre position={[7, 0, 1]} />
      <Pupitre position={[7, 0.7, 0]} />
      <Pupitre position={[7, 0.7, 2]} />
      <Pupitre position={[7, 0.7, 1]} />


      <Pupitre position={[8, 0, -2]} rotation={[0, 2, 0]}/>
      <Pupitre position={[7, 0, -3]} rotation={[0, 9, 0]}/>
      <Pupitre position={[8, 0, -3]} rotation={[0, 7, 0]}/>

      
    




      {/* pizarra   */}

      <Pizarra position={[-6.06, 1, 0]} scale={[2, 2, 1]} rotation={[0, Math.PI / 2, 0]}/>

      {/* escritorio   */}
      <Escritorio position={[3.5, 0, -5]} />
      <Escritorio position={[2, 0, -5]} />
      <Escritorio position={[0.5, 0, -5]} />
      <Escritorio position={[-1, 0, -5]} />
      <Escritorio position={[-2.5, 0, -5]} />


      <Escritorio position={[2.5, 0, 5]} rotation={[0, Math.PI, 0]} />
      <Escritorio position={[1, 0, 5]} rotation={[0, Math.PI, 0]} />
      <Escritorio position={[-0.5, 0, 5]} rotation={[0, Math.PI, 0]} />
      <Escritorio position={[-2, 0, 5]} rotation={[0, Math.PI, 0]} />
      {/* sillaplastico */}
      <SillaPlastico position={[3.5, 0.33, -4]}scale={[0.15, 0.15, 0.15]}rotation={[0, Math.PI / 2, 0]}  /> 
      <SillaPlastico position={[2, 0.33, -4]}scale={[0.15, 0.15, 0.15]}rotation={[0, Math.PI / 2, 0]}  /> 
      <SillaPlastico position={[0.5, 0.33, -4]}scale={[0.15, 0.15, 0.15]}rotation={[0, Math.PI / 2, 0]}  /> 
      <SillaPlastico position={[-1, 0.33, -4]}scale={[0.15, 0.15, 0.15]}rotation={[0, Math.PI / 2, 0]}  /> 
       <SillaPlastico position={[-2.5, 0.33, -4]}scale={[0.15, 0.15, 0.15]}rotation={[0, Math.PI / 2, 0]}  /> 


    
      <SillaPlastico position={[2.5, 0.33, 4]}scale={[0.15, 0.15, 0.15]}rotation={[0, -Math.PI / 2, 0]} />
      <SillaPlastico position={[1, 0.33, 4]}scale={[0.15, 0.15, 0.15]}rotation={[0, -Math.PI / 2, 0]} />
      <SillaPlastico position={[-0.5, 0.33, 4]}scale={[0.15, 0.15, 0.15]}rotation={[0, -Math.PI / 2, 0]} />
      <SillaPlastico position={[-2, 0.33, 4]}scale={[0.15, 0.15, 0.15]}rotation={[0, -Math.PI / 2, 0]} />

      <SillaPlastico position={[-5.1, 0.33, 4.8]}scale={[0.15, 0.15, 0.15]}rotation={[0, Math.PI / 2, 0]} />
         {/* Computador */}
     
      <Computador position={[2.4, 0.22, 4.9]} scale={[0.10, 0.10, 0.10]}rotation={[0, Math.PI / 2, 0]}/>
      <Computador position={[0.9, 0.22, 4.9]} scale={[0.10, 0.10, 0.10]}rotation={[0, Math.PI / 2, 0]}/>
      <Computador position={[-0.6, 0.22, 4.9]} scale={[0.10, 0.10, 0.10]}rotation={[0, Math.PI / 2, 0]}/>
      <Computador position={[-2.1, 0.22, 4.9]} scale={[0.10, 0.10, 0.10]}rotation={[0, Math.PI / 2, 0]}/>

      <Computador position={[3.6, 0.22, -4.9]} scale={[0.10, 0.10, 0.10]}rotation={[0, -Math.PI / 2, 0]}/>
      <Computador position={[2.1, 0.22, -4.9]} scale={[0.10, 0.10, 0.10]}rotation={[0, -Math.PI / 2, 0]}/>
      <Computador position={[0.6, 0.22, -4.9]} scale={[0.10, 0.10, 0.10]}rotation={[0, -Math.PI / 2, 0]}/>
      <Computador position={[-0.9, 0.22, -4.9]} scale={[0.10, 0.10, 0.10]}rotation={[0, -Math.PI / 2, 0]}/>
      <Computador position={[-2.4, 0.22, -4.9]} scale={[0.10, 0.10, 0.10]}rotation={[0, -Math.PI / 2, 0]}/>


      {/* servidor */}

      
      <Servidor position={[2, 0.14, 4.8]}  scale={[0.10, 0.10, 0.10]}rotation={[0, Math.PI / 2, 0]} />
      <Servidor position={[0.5, 0.14, 4.8]}  scale={[0.10, 0.10, 0.10]}rotation={[0, Math.PI / 2, 0]} />
      <Servidor position={[-1, 0.14, 4.8]}  scale={[0.10, 0.10, 0.10]}rotation={[0, Math.PI / 2, 0]} />
      <Servidor position={[-2.5, 0.14, 4.8]}  scale={[0.10, 0.10, 0.10]}rotation={[0, Math.PI / 2, 0]} />

      <Servidor position={[4, 0.14, -4.8]}  scale={[0.10, 0.10, 0.10]}rotation={[0, -Math.PI / 2, 0]} />
      <Servidor position={[2.5, 0.14, -4.8]}  scale={[0.10, 0.10, 0.10]}rotation={[0, -Math.PI / 2, 0]} />
      <Servidor position={[1, 0.14, -4.8]}  scale={[0.10, 0.10, 0.10]}rotation={[0, -Math.PI / 2, 0]} />
      <Servidor position={[-0.5, 0.14, -4.8]}  scale={[0.10, 0.10, 0.10]}rotation={[0, -Math.PI / 2, 0]} />
      <Servidor position={[-2, 0.14, -4.8]}  scale={[0.10, 0.10, 0.10]}rotation={[0, -Math.PI / 2, 0]} />
         {/* mesap */}
      <Mesap position={[-5, 0, 4]} />


         {/* basureros */}
         
      <Basurero position={[3.3, 0.1, 4]} scale={[0.03, 0.03, 0.03]} rotation={[0, Math.PI, 0]}/>
      <Basurero2 position={[4, 0.13, 4]} scale={[0.4, 0.4, 0.4]}/>

         {/* mueble */}
      
      {/* mesa plastico */}
       <MesaPlastico position={[6,0, -2]}  scale={[0.4, 0.4, 0.4]}/>
      <MesaPlastico position={[6,1.35, -2]}  scale={[0.4, 0.4, 0.4]} rotation={[0, 0 , Math.PI]}/>

      
      {/* focos  */}
         <Focos position={[-4, 5, 6]} rotation={[ 0, -Math.PI / 2, 0]}/>
      {/* apoyo de impresora 3d */}
         <ApoyoDeIm position={[5, 0, -5]} scale={[1.2, 1.2, 1.2]} />

         {/* impresora3d  */}
          <Impresora3D position={[5.4, 0.9, -4.7]} scale={[0.6, 0.6,0.6]} rotation={[ 0, -Math.PI / 2, 0]}/>
         {/* partes  */}
          <Partes position={[5.4, 0.4, -4.7]} scale={[0.01, 0.01,0.01]} />
          {/* curtains  */}
          <Curtains position={[-4.8, 1.5, 6.1]}  scale={[0.4, 0.4,0.4]}/>
          <Curtains position={[-1.7, 1.5, 6.1]}  scale={[0.4, 0.4,0.4]}/>
          <Curtains position={[1.2, 1.5, 6.1]}  scale={[0.4, 0.4,0.4]}/>
             {/* estante  */}
          <Estante position={[7, 0, -5]} scale={[1.7, 1.7,1.7]} />
                     {/* mesaco  */}
          <MesaCo position={[-5.6, 0, -3]} scale={[1.4, 1.4,1.4]} rotation={[ 0, -Math.PI / 2, 0]}/>
          <MesaCo position={[-5.6, 0, -3.7]} scale={[1.4, 1.4,1.4]} rotation={[ 0, -Math.PI / 2, 0]}/>
        
               {/* partes de computadora  */}
          <ComputerParts position={[-6.7, 0.65, -4.5]} scale={[0.02, 0.02,0.02]} />
                     {/* Laptops  */}
          <Laptop position={[-2.4, 0.7, 1.4]}  scale={[0.063, 0.063,0.063]}/>
          <Laptop1 position={[-3.4, 0.13, -0.5]}  scale={[1, 1,1]} rotation={[ 0, Math.PI / 2, 0]} />
          <Laptop2 position={[-2.4, 0.7, 0]}  scale={[0.1, 0.1,0.1]} rotation={[ 0, 2, 0]} />

                               {/* escritorio de madera  */}
          <Madera position={[-4, -0.1, -5]} />
        






        {/* Controles de cámara */}
        {movimientoActivo ? (
          <ControlMovil activo={movimientoActivo} />
        ) : (
          <OrbitControls enableDamping={true} enablePan={true} />
        )}
        {/*<OrbitControls />*/}
       <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="greige" />

        </mesh>


    </Canvas>
  </>
  )
}

export default App
