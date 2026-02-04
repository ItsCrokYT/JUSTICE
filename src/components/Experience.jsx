import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Gltf, Environment, Float } from '@react-three/drei';
import { easing } from 'maath';
import * as THREE from 'three';

// TUS POSICIONES DE CÁMARA EXACTAS
const CAMERA_POSITIONS = {
  start: {
    position: [0.8, 0.8, 0.95],
    target: [-0, 0.12, 0],
  },
  middle: {
    position: [-1.8, 0.5, 1.0],
    target: [1, 0, -1.2],
  },
  end: {
    position: [1, 1, 2.8],
    target: [0, 0.1, .00],
  },
};

const StatueModel = ({ innerRef }) => {
  return (
    <Gltf
      ref={innerRef}
      // CORRECCIÓN DEFINITIVA: Ruta relativa simple.
      // "./" busca en la carpeta raíz del despliegue, sin importar si es /JUSTICE/ o localhost
      src="./models/statue/source/statue.glb"
      scale={1}
      position={[0, -1.5, 0]}
      receiveShadow
      castShadow
    />
  );
};

const BalanceModel = () => {
  return (
    <Gltf 
      // CORRECCIÓN DEFINITIVA
      src="./models/statue/source/balanza.glb"
      scale={3} 
      position={[0, 0, 0]} 
      receiveShadow
      castShadow
    />
  );
};

const StatueFallback = () => (
  <mesh position={[0, 0, 0]}>
    <boxGeometry args={[1, 2, 1]} />
    <meshStandardMaterial color="blue" wireframe />
  </mesh>
);

const BalanceFallback = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="gold" wireframe />
  </mesh>
);

const Experience = ({ totalPages = 16, heroPages = 3 }) => {
  const scroll = useScroll();
  const targetLookAt = useRef(new THREE.Vector3(...CAMERA_POSITIONS.start.target));
  const statueGroupRef = useRef();
  const scalesRef = useRef();

  useFrame((state, delta) => {
    // --- 1. SINCRONIZACIÓN DINÁMICA ---
    const heroRatio = heroPages / totalPages; 
    const heroAnimation = scroll.range(0, heroRatio);
    
    let desiredPosition = new THREE.Vector3();
    let desiredTarget = new THREE.Vector3();

    if (heroAnimation < 0.5) {
      const t = heroAnimation * 2;
      desiredPosition.lerpVectors(new THREE.Vector3(...CAMERA_POSITIONS.start.position), new THREE.Vector3(...CAMERA_POSITIONS.middle.position), t);
      desiredTarget.lerpVectors(new THREE.Vector3(...CAMERA_POSITIONS.start.target), new THREE.Vector3(...CAMERA_POSITIONS.middle.target), t);
    } else {
      const t = (heroAnimation - 0.5) * 2;
      desiredPosition.lerpVectors(new THREE.Vector3(...CAMERA_POSITIONS.middle.position), new THREE.Vector3(...CAMERA_POSITIONS.end.position), t);
      desiredTarget.lerpVectors(new THREE.Vector3(...CAMERA_POSITIONS.middle.target), new THREE.Vector3(...CAMERA_POSITIONS.end.target), t);
    }

    // --- 2. TRANSICIONES ---
    const exitPoint = heroRatio + 0.01;

    if (statueGroupRef.current) {
      if (scroll.offset > exitPoint) {
        const exitProgress = (scroll.offset - exitPoint) * 20;
        statueGroupRef.current.position.y = -exitProgress; 
        statueGroupRef.current.rotation.y = exitProgress * 0.5;
      } else {
        statueGroupRef.current.position.y = 0;
        statueGroupRef.current.rotation.y = 0;
      }
    }

    if (scalesRef.current) {
      const showBalance = scroll.offset > (heroRatio + 0.1); 
      const targetY = showBalance ? 0.5 : 8; 
      easing.damp(scalesRef.current.position, 'y', targetY, 0.5, delta);
      scalesRef.current.rotation.y += delta * 0.1;
    }

    easing.damp3(state.camera.position, desiredPosition, 0.4, delta);
    easing.damp3(targetLookAt.current, desiredTarget, 0.4, delta);
    state.camera.lookAt(targetLookAt.current);
  });

  return (
    <>
      <ambientLight intensity={0.5} color="#ffffff" />
      <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={2} castShadow color="#ffffff" />
      <pointLight position={[-5, 5, -5]} intensity={1} color="#4c4cff" />

      {/* GRUPO 1: ESTATUA */}
      <group ref={statueGroupRef}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
          <Suspense fallback={<StatueFallback />}>
             <StatueModel />
          </Suspense>
        </Float>
      </group>

      {/* GRUPO 2: BALANZA */}
      <group ref={scalesRef} position={[0, 6, 0]} rotation={[0, -0.5, 0]}> 
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Suspense fallback={<BalanceFallback />}>
            <BalanceModel />
          </Suspense>
        </Float>
      </group>

      <Environment preset="city" />
    </>
  );
};

export default Experience;