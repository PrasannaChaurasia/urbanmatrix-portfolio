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
      <mesh position={[0, -0.04, 0]}>
        <boxGeometry args={[4.2, 0.08, 4.2]} />
        <meshStandardMaterial color="#111111" metalness={0.4} roughness={0.6} wireframe={wireframe} />
      </mesh>

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

      <mesh position={[0, floors * floorH + 0.25, 0]}>
        <coneGeometry args={[0.06, 0.75, 6]} />
        <meshStandardMaterial color="#c8a96e" metalness={0.9} roughness={0.05} wireframe={wireframe} />
      </mesh>

      <mesh position={[0, floors * floorH * 0.5, 0]} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[1.9, 0.012, 6, 80]} />
        <meshStandardMaterial color="#c8a96e" metalness={0.9} roughness={0.1} />
      </mesh>

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

const MODEL_SPECS = [
  { label: "Type",       value: "Parametric Tower" },
  { label: "Floors",     value: "22 Levels" },
  { label: "Twist",      value: "252° Total Rotation" },
  { label: "Geometry",   value: "Computational Design" },
  { label: "Renderer",   value: "React Three Fiber" },
  { label: "Engine",     value: "Three.js r165" },
];

const CONTROLS = [
  { key: "Drag",         desc: "Orbit / Rotate view" },
  { key: "Scroll",       desc: "Zoom in / out" },
  { key: "Auto",         desc: "Auto-rotating (slow)" },
];

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
        {/* Split layout: 60% canvas / 40% info */}
        <div className="flex flex-col xl:flex-row gap-0" style={{ border: "1px solid var(--border)" }}>

          {/* Left — 3D canvas (60%) */}
          <div className="flex-1 min-h-[500px] xl:min-h-[620px] relative" style={{ background: "var(--bg-primary)", willChange: "transform" }}>
            <Canvas key={wireframe ? "wire" : "solid"} camera={{ position: [5, 3.5, 5], fov: 48 }} gl={{ antialias: true }}>
              <Suspense fallback={null}>
                <Scene wireframe={wireframe} />
              </Suspense>
            </Canvas>

            {/* Overlay labels */}
            <div className="absolute top-5 left-5">
              <p className="text-xs tracking-[0.35em] uppercase font-mono" style={{ color: "rgba(200,169,110,0.6)" }}>
                Twisted Tower — Model 01
              </p>
            </div>
            <div className="absolute bottom-5 right-5 text-right">
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(200,169,110,0.35)" }}>
                React Three Fiber · Three.js
              </p>
            </div>

            {/* View mode badge */}
            <div
              className="absolute top-5 right-5 text-xs px-2.5 py-1 tracking-widest uppercase"
              style={{
                background: "rgba(8,8,8,0.75)",
                border: "1px solid rgba(200,169,110,0.2)",
                color: "var(--accent)",
                backdropFilter: "blur(8px)",
              }}
            >
              {wireframe ? "Wireframe" : "Solid"}
            </div>
          </div>

          {/* Right — info panel (40%) */}
          <div
            className="xl:w-[38%] flex-shrink-0 flex flex-col"
            style={{ borderLeft: "1px solid var(--border)", background: "var(--bg-card)" }}
          >
            {/* Model title */}
            <div className="px-8 py-7" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="text-xs tracking-[0.5em] uppercase mb-2" style={{ color: "var(--accent)" }}>
                Parametric Architecture
              </p>
              <h3 className="text-2xl font-extralight" style={{ color: "var(--text-primary)" }}>
                Twisted Tower
              </h3>
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Computationally generated twisting high-rise with gold accent floors, orbital rings, and parametric glass façade — created entirely in Three.js.
              </p>
            </div>

            {/* Specifications */}
            <div className="px-8 py-6" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--text-secondary)" }}>
                Specifications
              </p>
              <dl className="space-y-3">
                {MODEL_SPECS.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-baseline">
                    <dt className="text-xs tracking-wider uppercase" style={{ color: "var(--text-secondary)" }}>{spec.label}</dt>
                    <dd className="text-xs font-mono" style={{ color: "var(--accent)" }}>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Controls guide */}
            <div className="px-8 py-6" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--text-secondary)" }}>
                Controls
              </p>
              <div className="space-y-2.5">
                {CONTROLS.map((c) => (
                  <div key={c.key} className="flex items-center gap-3">
                    <span
                      className="text-xs px-2 py-0.5 font-mono flex-shrink-0"
                      style={{ background: "rgba(200,169,110,0.1)", color: "var(--accent)", border: "1px solid rgba(200,169,110,0.2)" }}
                    >
                      {c.key}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{c.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* View toggle buttons */}
            <div className="px-8 py-6" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--text-secondary)" }}>
                Display Mode
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setWireframe(false)}
                  className="flex-1 py-2.5 text-xs tracking-widest uppercase border transition-all duration-200"
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
                  className="flex-1 py-2.5 text-xs tracking-widest uppercase border transition-all duration-200"
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

            {/* Footer note */}
            <div className="px-8 py-5 mt-auto">
              <p className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Demo model built with Three.js. Drop{" "}
                <span style={{ color: "var(--accent)" }}>.glb / .gltf</span> files into{" "}
                <span style={{ color: "var(--accent)" }}>public/models/</span> to load real project models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
