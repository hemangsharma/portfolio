// src/components/ThreeScene.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// A rotating cube using a reference to update rotation on each frame.
const RotatingBox = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#f0f" wireframe />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox />
    </Canvas>
  );
};

export default ThreeScene;