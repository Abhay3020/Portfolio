import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

function Bands() {
  const group = useRef();
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.25;
    }
  });
  return (
    <group ref={group}>
      {[...Array(7)].map((_, i) => (
        <mesh key={i}>
          <torusGeometry args={[2.1 + i * 0.13, 0.07 + i * 0.01, 16, 100]} />
          <meshStandardMaterial
            color={"#b3cfff"}
            transparent
            opacity={0.22 + 0.08 * Math.sin(i)}
            roughness={0.4}
            metalness={0.7}
            emissive="#3b82f6"
            emissiveIntensity={0.12}
          />
        </mesh>
      ))}
    </group>
  );
}

function Globe() {
  const earthMap = useTexture("https://raw.githubusercontent.com/abhay-venkatesh/earth-textures/main/earthmap4k.jpg");
  const bumpMap = useTexture("https://raw.githubusercontent.com/abhay-venkatesh/earth-textures/main/earthbump4k.jpg");
  const specMap = useTexture("https://raw.githubusercontent.com/abhay-venkatesh/earth-textures/main/earthspec4k.jpg");
  return (
    <mesh castShadow receiveShadow>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        map={earthMap}
        bumpMap={bumpMap}
        bumpScale={0.12}
        specularMap={specMap}
        specular={new THREE.Color("#333")}
        shininess={18}
      />
    </mesh>
  );
}

const ContactGlobe = () => (
  <div style={{ width: 420, height: 420, minWidth: 260, minHeight: 260, maxWidth: "48vw", maxHeight: "48vw" }}>
    <Canvas camera={{ position: [0, 0, 7], fov: 40 }} shadows>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <Suspense fallback={null}>
        <Globe />
        <Bands />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  </div>
);

export default ContactGlobe; 