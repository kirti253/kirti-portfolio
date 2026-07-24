"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 320;

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
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    const pointer = new THREE.Vector2(0, 0);
    const targetPointer = new THREE.Vector2(0, 0);
    let frameId = 0;

    camera.position.set(0, 0, 8);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.className = "three-background-canvas";
    container.appendChild(renderer.domElement);

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
    scene.add(particles);

    const ribbonGeometry = new THREE.TorusKnotGeometry(1.45, 0.035, 180, 12);
    const ribbonMaterial = new THREE.MeshBasicMaterial({
      color: "#a855f7",
      opacity: 0.19,
      transparent: true,
      wireframe: true,
    });
    const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    ribbon.position.set(3.3, 1.2, -1.5);
    ribbon.rotation.set(0.55, 0.2, 0.1);
    scene.add(ribbon);

    const nodeGeometry = new THREE.IcosahedronGeometry(1.55, 2);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: "#22d3ee",
      opacity: 0.13,
      transparent: true,
      wireframe: true,
    });
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
    node.position.set(-3.6, -1.4, -2.2);
    scene.add(node);

    const onPointerMove = (event: PointerEvent) => {
      targetPointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      targetPointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
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

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);

    if (prefersReducedMotion.matches) {
      renderScene();
    } else {
      animate();
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
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
