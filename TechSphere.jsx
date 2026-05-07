"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

function Sphere() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.003;
    mesh.current.rotation.y += 0.003;
  });

  return (
    <Float speed={2} rotationIntensity={2}>
      <mesh ref={mesh}>
        <sphereGeometry args={[2, 100, 100]} />
        <MeshDistortMaterial
          color="#00ffff"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

export default function TechSphere() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere />
    </Canvas>
  );
}
