"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Grid } from "@react-three/drei";
import * as THREE from "three";

// Parametric-style architectural geometry
function ParametricStructure({ wireframe }: { wireframe: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const goldMat = new THREE.MeshStandardMaterial({
    color: "#c8a96e",
    metalness: 0.6,
    roughness: 0.3,
    wireframe,
  });

  const darkMat = new THREE.MeshStandardMaterial({
    color: "#2a2a2a",
    metalness: 0.3,
    roughness: 0.7,
    wireframe,
  });

  return (
    <group ref={groupRef}>
      {/* Central tower */}
      <mesh position={[0, 1, 0]} material={darkMat}>
        <boxGeometry args={[0.6, 2, 0.6]} />
      </mesh>

      {/* Cantilevered platforms */}
      {[0.2, 0.8, 1.4, 1.9].map((y, i) => (
        <mesh
          key={y}
          position={[0, y, 0]}
          rotation={[0, (i * Math.PI) / 4, 0]}
          material={i % 2 === 0 ? goldMat : darkMat}
        >
          <boxGeometry args={[1.8 - i * 0.3, 0.05, 0.4]} />
        </mesh>
      ))}

      {/* Surrounding columns */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const r = 1.2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * r, 0.6, Math.sin(angle) * r]}
            material={i % 2 === 0 ? darkMat : goldMat}
          >
            <cylinderGeometry args={[0.04, 0.04, 1.2, 8]} />
          </mesh>
        );
      })}

      {/* Top crown */}
      <mesh position={[0, 2.2, 0]} material={goldMat}>
        <coneGeometry args={[0.5, 0.6, 8]} />
      </mesh>

      {/* Base platform */}
      <mesh position={[0, -0.05, 0]} material={darkMat}>
        <boxGeometry args={[3.5, 0.1, 3.5]} />
      </mesh>
    </group>
  );
}

function Scene({ wireframe }: { wireframe: boolean }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 3]} intensity={1.5} color="#e2c898" />
      <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#6688aa" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#c8a96e" />

      <ParametricStructure wireframe={wireframe} />

      <Grid
        position={[0, -0.1, 0]}
        args={[10, 10]}
        cellSize={0.5}
        cellThickness={0.3}
        cellColor="#2a2a2a"
        sectionSize={2}
        sectionThickness={0.6}
        sectionColor="#c8a96e"
        fadeDistance={8}
        fadeStrength={1}
        infiniteGrid
      />

      <Environment preset="city" />
      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={10}
        maxPolarAngle={Math.PI / 2}
        autoRotate={false}
      />
    </>
  );
}

export default function ModelViewer() {
  const [wireframe, setWireframe] = useState(false);

  return (
    <section
      id="models"
      className="section-padding"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p
              className="text-xs tracking-[0.5em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Interactive
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">
              3D{" "}
              <span style={{ color: "var(--accent)" }}>Models</span>
            </h2>
            <p
              className="mt-3 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Drag to rotate · Scroll to zoom
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setWireframe(false)}
              className="px-4 py-2 text-xs tracking-widest uppercase border transition-all duration-200"
              style={{
                borderColor: !wireframe ? "var(--accent)" : "var(--border)",
                color: !wireframe ? "var(--accent)" : "var(--text-secondary)",
                background: !wireframe ? "rgba(200,169,110,0.08)" : "transparent",
              }}
            >
              Solid
            </button>
            <button
              onClick={() => setWireframe(true)}
              className="px-4 py-2 text-xs tracking-widest uppercase border transition-all duration-200"
              style={{
                borderColor: wireframe ? "var(--accent)" : "var(--border)",
                color: wireframe ? "var(--accent)" : "var(--text-secondary)",
                background: wireframe ? "rgba(200,169,110,0.08)" : "transparent",
              }}
            >
              Wireframe
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div
          className="w-full relative"
          style={{
            height: "60vh",
            minHeight: "400px",
            border: "1px solid var(--border)",
            background: "var(--bg-primary)",
          }}
        >
          <Canvas
            camera={{ position: [4, 3, 4], fov: 50 }}
            gl={{ antialias: true }}
          >
            <Suspense fallback={null}>
              <Scene wireframe={wireframe} />
            </Suspense>
          </Canvas>

          {/* Corner labels */}
          <div
            className="absolute top-4 left-4 text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", opacity: 0.5 }}
          >
            Parametric Pavilion — Demo
          </div>
          <div
            className="absolute bottom-4 right-4 text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", opacity: 0.5 }}
          >
            Three.js / React Three Fiber
          </div>
        </div>

        {/* Note */}
        <p
          className="mt-6 text-sm text-center"
          style={{ color: "var(--text-secondary)" }}
        >
          This is a demo model. Upload your own{" "}
          <span style={{ color: "var(--accent)" }}>.glb / .gltf</span> files to showcase your real work.
        </p>
      </div>
    </section>
  );
}
