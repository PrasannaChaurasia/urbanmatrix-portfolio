"use client";

import { Suspense, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Grid } from "@react-three/drei";
import * as THREE from "three";

function TwistedTower({ wireframe }: { wireframe: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  const floors = 22;
  const floorH = 0.17;

  return (
    <group ref={groupRef}>
      {/* Base slab */}
      <mesh position={[0, -0.04, 0]}>
        <boxGeometry args={[4.2, 0.08, 4.2]} />
        <meshStandardMaterial color="#111111" metalness={0.4} roughness={0.6} wireframe={wireframe} />
      </mesh>

      {/* Twisted floors */}
      {Array.from({ length: floors }).map((_, i) => {
        const t = i / floors;
        const twist = t * Math.PI * 1.4;
        const w = 1.1 - t * 0.45;
        const d = 0.38 - t * 0.1;
        const isAccent = i % 4 === 0;
        return (
          <mesh key={i} position={[0, i * floorH, 0]} rotation={[0, twist, 0]}>
            <boxGeometry args={[w, floorH * 0.65, d]} />
            <meshStandardMaterial
              color={isAccent ? "#c8a96e" : "#1c1c1c"}
              metalness={isAccent ? 0.75 : 0.3}
              roughness={isAccent ? 0.15 : 0.65}
              wireframe={wireframe}
            />
          </mesh>
        );
      })}

      {/* Glass façade strips */}
      {Array.from({ length: floors - 1 }).map((_, i) => {
        const t = i / floors;
        const twist = t * Math.PI * 1.4;
        return (
          <mesh key={`g${i}`} position={[0, i * floorH + floorH * 0.3, 0]} rotation={[0, twist + 0.08, 0]}>
            <planeGeometry args={[1.04 - t * 0.43, floorH * 0.52]} />
            <meshStandardMaterial
              color="#8aafcc"
              metalness={0.9}
              roughness={0.05}
              transparent
              opacity={0.15}
              side={THREE.DoubleSide}
              wireframe={wireframe}
            />
          </mesh>
        );
      })}

      {/* Spire */}
      <mesh position={[0, floors * floorH + 0.25, 0]}>
        <coneGeometry args={[0.06, 0.75, 6]} />
        <meshStandardMaterial color="#c8a96e" metalness={0.9} roughness={0.05} wireframe={wireframe} />
      </mesh>

      {/* Primary orbital ring */}
      <mesh position={[0, floors * floorH * 0.5, 0]} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[1.9, 0.012, 6, 80]} />
        <meshStandardMaterial color="#c8a96e" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Secondary orbital ring */}
      <mesh position={[0, floors * floorH * 0.5, 0]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.3, 0.007, 6, 80]} />
        <meshStandardMaterial color="#c8a96e" metalness={0.9} roughness={0.1} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 90;

  const data = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 9,
        y: Math.random() * 5.5 - 0.5,
        z: (Math.random() - 0.5) * 9,
        speed: Math.random() * 0.18 + 0.04,
        offset: Math.random() * Math.PI * 2,
      })),
    []
  );

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    data.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(t * 0.25 + p.offset) * 0.3,
        p.y + Math.sin(t * p.speed + p.offset) * 0.4,
        p.z + Math.cos(t * 0.25 + p.offset) * 0.3
      );
      dummy.scale.setScalar(0.022);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 4, 4]} />
      <meshStandardMaterial color="#c8a96e" metalness={0.6} roughness={0.2} />
    </instancedMesh>
  );
}

function Scene({ wireframe }: { wireframe: boolean }) {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[6, 10, 4]} intensity={1.8} color="#e8d4a8" />
      <directionalLight position={[-4, 5, -4]} intensity={0.5} color="#4466aa" />
      <pointLight position={[0, 6, 0]} intensity={1.0} color="#c8a96e" distance={12} />
      <pointLight position={[3, 1, 3]} intensity={0.4} color="#c8a96e" distance={8} />

      <TwistedTower wireframe={wireframe} />
      <FloatingParticles />

      <Grid
        position={[0, -0.1, 0]}
        args={[12, 12]}
        cellSize={0.5}
        cellThickness={0.3}
        cellColor="#1a1a1a"
        sectionSize={2}
        sectionThickness={0.5}
        sectionColor="#c8a96e"
        fadeDistance={9}
        fadeStrength={1}
        infiniteGrid
      />

      <Environment preset="city" />
      <OrbitControls
        enablePan={false}
        minDistance={4}
        maxDistance={12}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate
        autoRotateSpeed={0.6}
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
            <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--accent)" }}>
              Interactive
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight">
              3D <span style={{ color: "var(--accent)" }}>Models</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              Drag to rotate · Scroll to zoom · Auto-rotating
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
            height: "65vh",
            minHeight: "450px",
            border: "1px solid var(--border)",
            background: "var(--bg-primary)",
          }}
        >
          <Canvas camera={{ position: [5, 3.5, 5], fov: 48 }} gl={{ antialias: true }}>
            <Suspense fallback={null}>
              <Scene wireframe={wireframe} />
            </Suspense>
          </Canvas>

          <div
            className="absolute top-4 left-4 text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", opacity: 0.5 }}
          >
            Twisted Tower — Parametric Demo
          </div>
          <div
            className="absolute bottom-4 right-4 text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", opacity: 0.5 }}
          >
            React Three Fiber · Three.js
          </div>
        </div>

        <p className="mt-6 text-sm text-center" style={{ color: "var(--text-secondary)" }}>
          Demo model. Drop your own{" "}
          <span style={{ color: "var(--accent)" }}>.glb / .gltf</span> files into{" "}
          <span style={{ color: "var(--accent)" }}>public/models/</span> to showcase real work.
        </p>
      </div>
    </section>
  );
}
