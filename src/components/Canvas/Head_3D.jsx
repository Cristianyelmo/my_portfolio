import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Earth = () => {
  const earth = useGLTF("./Icon-3D/3D_face.glb");

  return (
    <mesh>
      <hemisphereLight intensity={3}  
    groundColor='black'/>
    <pointLight intensity={1} />
    <spotLight position={[-20,50,10]}
    angle={0.12}

    intensity={1}/>
    <primitive object={earth.scene} scale={4.1} position-y={-2.1} rotation-y={0} />
    </mesh>
  );
};

const Head_3D = () => {
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
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2.5} 
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Head_3D;