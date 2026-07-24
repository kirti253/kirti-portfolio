"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 320;
const MOBILE_PARTICLE_COUNT = 190;
const TABLET_PARTICLE_COUNT = 250;

type LayoutConfig = {
  cameraZ: number;
  fov: number;
  nodePosition: [number, number, number];
  nodeScale: number;
  particleCount: number;
  particleOpacity: number;
  particleSize: number;
  particleScale: number;
  pixelRatio: number;
  ribbonPosition: [number, number, number];
  ribbonScale: number;
};

function createParticlePositions() {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const colors = new Float32Array(PARTICLE_COUNT * 3);
  const palette = [
    new THREE.Color("#a855f7"),
    new THREE.Color("#22d3ee"),
    new THREE.Color("#34d399"),
    new THREE.Color("#f472b6"),
  ];

  for (let index = 0; index < PARTICLE_COUNT; index += 1) {
    const radius = 1.8 + Math.random() * 7.2;
    const angle = Math.random() * Math.PI * 2;
    const depth = Math.random() * 8 - 4;
    const wave = Math.sin(index * 0.23) * 0.9;

    positions[index * 3] = Math.cos(angle) * radius;
    positions[index * 3 + 1] = Math.sin(angle) * radius * 0.56 + wave;
    positions[index * 3 + 2] = depth;

    const color = palette[index % palette.length];
    colors[index * 3] = color.r;
    colors[index * 3 + 1] = color.g;
    colors[index * 3 + 2] = color.b;
  }

  return { colors, positions };
}

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    const pointer = new THREE.Vector2(0, 0);
    const targetPointer = new THREE.Vector2(0, 0);
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;
    let frameId = 0;

    camera.position.set(0, 0, 8.5);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = "three-background-canvas";
    container.appendChild(renderer.domElement);

    const visualGroup = new THREE.Group();
    scene.add(visualGroup);

    const { colors, positions } = createParticlePositions();
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      alphaMap: createDotTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.82,
      size: 0.065,
      transparent: true,
      vertexColors: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    visualGroup.add(particles);

    const ribbonGeometry = new THREE.TorusKnotGeometry(1.45, 0.035, 180, 12);
    const ribbonMaterial = new THREE.MeshBasicMaterial({
      color: "#a855f7",
      opacity: 0.19,
      transparent: true,
      wireframe: true,
    });
    const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    ribbon.rotation.set(0.55, 0.2, 0.1);
    visualGroup.add(ribbon);

    const nodeGeometry = new THREE.IcosahedronGeometry(1.55, 2);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: "#22d3ee",
      opacity: 0.13,
      transparent: true,
      wireframe: true,
    });
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
    visualGroup.add(node);

    const onPointerMove = (event: PointerEvent) => {
      targetPointer.x = (event.clientX / width - 0.5) * 2;
      targetPointer.y = (event.clientY / height - 0.5) * 2;
    };

    const getLayoutConfig = (): LayoutConfig => {
      const isMobile = width < 640;
      const isTablet = width >= 640 && width < 1024;
      const isShort = height < 720;

      if (isMobile) {
        return {
          cameraZ: 9.8,
          fov: isShort ? 68 : 64,
          nodePosition: [-1.45, -2.35, -2.6],
          nodeScale: 0.72,
          particleCount: MOBILE_PARTICLE_COUNT,
          particleOpacity: 0.62,
          particleSize: 0.082,
          particleScale: 0.78,
          pixelRatio: Math.min(window.devicePixelRatio, 1.45),
          ribbonPosition: [1.5, 2.35, -2.1],
          ribbonScale: 0.68,
        };
      }

      if (isTablet) {
        return {
          cameraZ: 8.9,
          fov: 59,
          nodePosition: [-2.45, -1.65, -2.3],
          nodeScale: 0.86,
          particleCount: TABLET_PARTICLE_COUNT,
          particleOpacity: 0.72,
          particleSize: 0.074,
          particleScale: 0.9,
          pixelRatio: Math.min(window.devicePixelRatio, 1.75),
          ribbonPosition: [2.55, 1.55, -1.8],
          ribbonScale: 0.84,
        };
      }

      return {
        cameraZ: 8,
        fov: isShort ? 59 : 55,
        nodePosition: [-3.6, -1.4, -2.2],
        nodeScale: 1,
        particleCount: PARTICLE_COUNT,
        particleOpacity: 0.82,
        particleSize: 0.065,
        particleScale: 1,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        ribbonPosition: [3.3, 1.2, -1.5],
        ribbonScale: 1,
      };
    };

    const applyResponsiveLayout = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      const layout = getLayoutConfig();

      camera.aspect = width / height;
      camera.fov = layout.fov;
      camera.position.z = layout.cameraZ;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(layout.pixelRatio);
      renderer.setSize(width, height, false);

      particleGeometry.setDrawRange(0, layout.particleCount);
      particleMaterial.opacity = layout.particleOpacity;
      particleMaterial.size = layout.particleSize;
      particles.scale.setScalar(layout.particleScale);

      ribbon.position.set(...layout.ribbonPosition);
      ribbon.scale.setScalar(layout.ribbonScale);
      node.position.set(...layout.nodePosition);
      node.scale.setScalar(layout.nodeScale);

      renderScene();
    };

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      pointer.lerp(targetPointer, 0.035);

      const time = performance.now() * 0.001;
      particles.rotation.y = time * 0.025 + pointer.x * 0.08;
      particles.rotation.x = Math.sin(time * 0.18) * 0.08 - pointer.y * 0.05;
      ribbon.rotation.x += 0.0022;
      ribbon.rotation.y += 0.003;
      node.rotation.x -= 0.0018;
      node.rotation.y += 0.0024;

      camera.position.x += (pointer.x * 0.45 - camera.position.x) * 0.025;
      camera.position.y += (-pointer.y * 0.32 - camera.position.y) * 0.025;
      camera.lookAt(scene.position);

      renderScene();
      frameId = window.requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(applyResponsiveLayout);
    resizeObserver.observe(container);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", applyResponsiveLayout);

    applyResponsiveLayout();

    if (prefersReducedMotion.matches) {
      renderScene();
    } else {
      animate();
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", applyResponsiveLayout);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleMaterial.alphaMap?.dispose();
      ribbonGeometry.dispose();
      ribbonMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="three-background"
      aria-hidden="true"
      data-testid="three-background"
    />
  );
}

function createDotTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;

  const context = canvas.getContext("2d");

  if (!context) {
    return null;
  }

  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.35, "rgba(255, 255, 255, 0.72)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);

  return new THREE.CanvasTexture(canvas);
}
