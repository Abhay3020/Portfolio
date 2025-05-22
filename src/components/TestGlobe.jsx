import React from "react";
import { Canvas } from "@react-three/fiber";

const TestGlobe = () => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <Canvas>
      <ambientLight />
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  </div>
);

export default TestGlobe; 