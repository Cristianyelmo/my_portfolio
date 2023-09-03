import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Earth = () => {
  const earth = useGLTF("./Icon-3D/mongo.glb");

  return (
    <mesh>
      <hemisphereLight intensity={9}  
    groundColor='black'/>
    <pointLight intensity={1} />
    <spotLight position={[-20,50,10]}
    angle={0.12}

    intensity={1}/>
    <primitive object={earth.scene} scale={5} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const monguDB = () => {
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
        
          autoRotate 
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

export default monguDB;