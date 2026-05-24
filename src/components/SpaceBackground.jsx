import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* deterministic pseudo-random — pure so React 19 strict mode is happy */
const rand = (i, salt = 0) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

/* shared pointer + scroll signal — written by listeners, read in the render loop */
function usePointerScroll() {
  const ref = useRef({ mx: 0, my: 0, sy: 0 });
  useEffect(() => {
    const setMouse = (cx, cy) => {
      ref.current.mx = (cx / window.innerWidth) * 2 - 1;
      ref.current.my = -((cy / window.innerHeight) * 2 - 1);
    };
    const onMove = (e) => setMouse(e.clientX, e.clientY);
    const onTouch = (e) => {
      if (e.touches && e.touches[0]) setMouse(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      ref.current.sy = Math.min(1, Math.max(0, window.scrollY / max));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return ref;
}

/* a soft circular sprite texture, generated once, reused everywhere */
function useSoftDisc() {
  return useMemo(() => {
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d");
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.35, "rgba(255,255,255,0.65)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);
}

function StarLayer({ count, radius, size, color, opacity, depthFactor, parallax }) {
  const ref = useRef();
  const disc = useSoftDisc();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const salt = radius;
    for (let i = 0; i < count; i++) {
      const r = radius * (0.55 + rand(i, salt) * 0.45);
      const theta = rand(i, salt + 1) * Math.PI * 2;
      const phi = Math.acos(2 * rand(i, salt + 2) - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count, radius]);

  const tint = useMemo(() => new THREE.Color(color), [color]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    /* gentle drift so the field never feels frozen */
    ref.current.rotation.y = t * 0.005 * depthFactor;
    ref.current.rotation.x = Math.sin(t * 0.04) * 0.02 * depthFactor;
    /* subtle parallax offset — nearer layers shift more */
    ref.current.position.x = -state.camera.position.x * parallax;
    ref.current.position.y = -state.camera.position.y * parallax;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        map={disc}
        color={tint}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Nebula({ disc }) {
  const group = useRef();
  const sprite = useSoftDisc();
  const tex = disc ?? sprite;

  const clouds = useMemo(
    () => [
      { pos: [-90, 30, -260], scale: 380, color: "#5b6fd9", opacity: 0.4 },
      { pos: [120, -40, -300], scale: 440, color: "#c8a96a", opacity: 0.28 },
      { pos: [40, 90, -220], scale: 320, color: "#7a4fd8", opacity: 0.35 },
      { pos: [-60, -80, -340], scale: 480, color: "#2b4a8c", opacity: 0.32 },
      { pos: [0, 0, -160], scale: 260, color: "#3a5fd0", opacity: 0.22 },
    ],
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.z = t * 0.01;
  });

  return (
    <group ref={group}>
      {clouds.map((c, i) => (
        <sprite key={i} position={c.pos} scale={[c.scale, c.scale, 1]}>
          <spriteMaterial
            map={tex}
            color={c.color}
            transparent
            opacity={c.opacity}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </sprite>
      ))}
    </group>
  );
}

function Planet({ position, radius, color, emissive, rotationSpeed }) {
  const ref = useRef();
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += rotationSpeed * dt;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[radius, 48, 48]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.45}
        roughness={0.85}
        metalness={0.05}
      />
    </mesh>
  );
}

function GlowOrb({ position, radius, color, opacity }) {
  const disc = useSoftDisc();
  return (
    <sprite position={position} scale={[radius, radius, 1]}>
      <spriteMaterial
        map={disc}
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </sprite>
  );
}

function DustParticles({ count }) {
  const ref = useRef();
  const disc = useSoftDisc();

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rand(i, 11) - 0.5) * 140;
      positions[i * 3 + 1] = (rand(i, 22) - 0.5) * 90;
      positions[i * 3 + 2] = -rand(i, 33) * 200;
      speeds[i] = 0.4 + rand(i, 44) * 1.2;
    }
    return { positions, speeds };
  }, [count]);

  /* keep a tick counter so respawn offsets vary without Math.random in render */
  const recycle = useRef(0);

  useFrame((state, dt) => {
    if (!ref.current) return;
    const arr = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 2] += speeds[i] * dt * 4;
      if (arr[i * 3 + 2] > state.camera.position.z + 10) {
        const k = recycle.current++;
        arr[i * 3] = (rand(i + k, 55) - 0.5) * 140;
        arr[i * 3 + 1] = (rand(i + k, 66) - 0.5) * 90;
        arr[i * 3 + 2] = state.camera.position.z - 200;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.7}
        map={disc}
        color="#cfd6e6"
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function CameraRig({ pointer, strength }) {
  const { camera } = useThree();
  const smooth = useRef({ x: 0, y: 0, z: 0, rx: 0, ry: 0 });
  /* travel distance per full-page scroll — feels like drifting forward */
  const travel = 90;

  useFrame(() => {
    const { mx, my, sy } = pointer.current;
    const tx = mx * 6 * strength;
    const ty = my * 4 * strength;
    const tz = -sy * travel;
    const trx = -my * 0.08 * strength;
    const try_ = mx * 0.1 * strength;

    const k = 0.06;
    smooth.current.x += (tx - smooth.current.x) * k;
    smooth.current.y += (ty - smooth.current.y) * k;
    smooth.current.z += (tz - smooth.current.z) * k;
    smooth.current.rx += (trx - smooth.current.rx) * k;
    smooth.current.ry += (try_ - smooth.current.ry) * k;

    camera.position.set(smooth.current.x, smooth.current.y, smooth.current.z);
    camera.rotation.set(smooth.current.rx, smooth.current.ry, 0);
  });

  return null;
}

function Scene({ tier, pointer }) {
  /* counts scale by performance tier */
  const layers = useMemo(() => {
    const base =
      tier === "low"
        ? { near: 220, mid: 380, far: 600 }
        : tier === "mid"
        ? { near: 380, mid: 700, far: 1100 }
        : { near: 600, mid: 1100, far: 1800 };
    return base;
  }, [tier]);

  const dust = tier === "low" ? 0 : tier === "mid" ? 60 : 120;

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[40, 30, -40]} intensity={1.2} color="#c8a96a" />
      <pointLight position={[-80, -20, -120]} intensity={0.8} color="#6a82d8" />

      <CameraRig pointer={pointer} strength={tier === "low" ? 0.6 : 1} />

      <Nebula />

      <StarLayer
        count={layers.far}
        radius={400}
        size={1.4}
        color="#cfd6e6"
        opacity={0.9}
        depthFactor={0.4}
        parallax={0.02}
      />
      <StarLayer
        count={layers.mid}
        radius={220}
        size={2.2}
        color="#ffffff"
        opacity={1}
        depthFactor={0.8}
        parallax={0.05}
      />
      <StarLayer
        count={layers.near}
        radius={120}
        size={3.4}
        color="#ffe9c2"
        opacity={1}
        depthFactor={1.4}
        parallax={0.1}
      />

      {tier !== "low" && <DustParticles count={dust} />}

      <Planet
        position={[-55, -18, -190]}
        radius={14}
        color="#3a4566"
        emissive="#1a2244"
        rotationSpeed={0.05}
      />
      <Planet
        position={[70, 28, -250]}
        radius={20}
        color="#5a4631"
        emissive="#2a1a0a"
        rotationSpeed={0.03}
      />
      <GlowOrb position={[80, 40, -180]} radius={60} color="#c8a96a" opacity={0.18} />
      <GlowOrb position={[-90, -40, -220]} radius={75} color="#5b6fd9" opacity={0.16} />
    </>
  );
}

/* lightweight feature detection — caps work on weaker devices */
function detectTier() {
  if (typeof window === "undefined") return "high";
  const w = window.innerWidth;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4;
  if (w < 640 || (coarse && cores <= 4) || mem <= 2) return "low";
  if (w < 1100 || cores <= 6 || mem <= 4) return "mid";
  return "high";
}

export default function SpaceBackground() {
  const pointer = usePointerScroll();
  const [tier] = useState(detectTier);
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  if (reduced) return null;

  const dprCap = tier === "low" ? 1 : tier === "mid" ? 1.5 : 2;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "radial-gradient(ellipse at top, #0a0d18 0%, #02030a 70%)",
      }}
    >
      <Canvas
        style={{ width: "100%", height: "100%", display: "block" }}
        dpr={[1, dprCap]}
        gl={{ antialias: tier === "high", alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 0], fov: 70, near: 0.1, far: 2000 }}
        frameloop="always"
      >
        <Scene tier={tier} pointer={pointer} />
      </Canvas>
    </div>
  );
}
