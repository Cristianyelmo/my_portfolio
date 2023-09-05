import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const controlsRef = useRef();
  const scrollActiveRef = useRef(true); // Referencia para controlar si los controles están activos o no durante el scroll

  useEffect(() => {
    // Configurar la escena, la cámara y el renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    document.body.appendChild(renderer.domElement);

    // Configurar un objeto que se puede mover
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Posicionar la cámara
    camera.position.z = 5;
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;

    // Función de animación
    const animate = () => {
      if (scrollActiveRef.current) { // Verificar si los controles están activos durante el scroll
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        renderer.render(scene, camera);
      } else {
        // Los controles están desactivados durante el scroll
      }
    };

    animate();

    // Manejar eventos de scroll para habilitar/deshabilitar los controles
    const handleScroll = () => {
      scrollActiveRef.current = !scrollActiveRef.current; // Alternar entre activo e inactivo
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza
    return () => {
      // Detener el renderizador
      rendererRef.current.dispose();

      // Limpiar el controlador OrbitControls
      controlsRef.current.dispose();

      // Eliminar el evento de scroll
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default ThreeScene;
En este ejemplo, hemos agregado un evento de scroll que alterna la variable scrollActiveRef entre true y false. Cuando scrollActiveRef es true, los controles de la cámara están activos y el objeto 3D se puede mover. Cuando es false, los controles están desactivados durante el scroll, lo que permite hacer scroll hacia arriba sin que el objeto se mueva. Esto debería permitirte lograr el comportamiento deseado en tu aplicación React.js con Three.js.





