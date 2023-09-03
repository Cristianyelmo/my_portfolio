import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useTexture } from '@react-three/drei';
import CanvasLoader from "./Loader";


import {  useLoader } from '@react-three/fiber';

import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Earth = () => {

  const { nodes, materials } = useGLTF("./Icon-3D/figma.glb");
  const texture = useTexture('./Perfil.png');
  if (materials && materials.figma) {
    materials.figma.map = texture/* Aquí asigna la textura */;
  }
 
  return (
    <mesh>
      <hemisphereLight intensity={9}  
    groundColor='black'/>
    <pointLight intensity={1} />
    <spotLight position={[-20,50,10]}
    angle={0.12}

    intensity={1}/>
    <primitive object={nodes.figma} scale={5} position-y={0} rotation-y={4}  />


    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
        
      }} 
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        
          autoRotate={false} 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} 
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;