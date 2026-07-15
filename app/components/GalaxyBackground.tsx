"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  arm: number;
  color: string;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateStars(
  width: number,
  height: number,
  count: number
): Star[] {
  const rand = seededRandom(42);
  const stars: Star[] = [];
  const cx = width / 2;
  const cy = height / 2;
  const arms = 3;
  const spread = Math.min(width, height) * 0.18;
  const maxRadius = Math.min(width, height) * 0.45;

  for (let i = 0; i < count; i++) {
    const armIndex = i % arms;
    const armAngle = (armIndex / arms) * Math.PI * 2;
    const t = rand();
    const radius = t * maxRadius;
    const angle =
      armAngle + radius * 0.008 + (rand() - 0.5) * 0.6;

    const x = cx + Math.cos(angle) * radius + (rand() - 0.5) * spread * t;
    const y = cy + Math.sin(angle) * radius + (rand() - 0.5) * spread * t;

    const distFromCenter = Math.sqrt(
      (x - cx) ** 2 + (y - cy) ** 2
    );
    const normDist = distFromCenter / maxRadius;

    const brightness = 0.3 + (1 - normDist) * 0.7;
    const size = 0.5 + (1 - normDist) * 2 + rand() * 1.2;

    let r: number, g: number, b: number;
    if (normDist < 0.2) {
      r = 255;
      g = 240 + rand() * 15;
      b = 200 + rand() * 55;
    } else if (normDist < 0.5) {
      r = 180 + rand() * 75;
      g = 160 + rand() * 60;
      b = 220 + rand() * 35;
    } else {
      r = 140 + rand() * 60;
      g = 150 + rand() * 40;
      b = 255;
    }

    stars.push({
      x,
      y,
      size,
      brightness,
      twinkleSpeed: 0.5 + rand() * 2,
      twinkleOffset: rand() * Math.PI * 2,
      arm: armIndex,
      color: `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`,
    });
  }

  // Add scattered background stars (not on arms)
  for (let i = 0; i < 150; i++) {
    const x = rand() * width;
    const y = rand() * height;
    const distFromCenter = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    const normDist = distFromCenter / maxRadius;
    stars.push({
      x,
      y,
      size: 0.3 + rand() * 1,
      brightness: 0.2 + rand() * 0.5,
      twinkleSpeed: 0.3 + rand() * 1.5,
      twinkleOffset: rand() * Math.PI * 2,
      arm: -1,
      color: `rgb(${200 + Math.round(rand() * 55)},${200 + Math.round(rand() * 55)},${220 + Math.round(rand() * 35)})`,
    });
  }

  return stars;
}

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animId: number;
    let rotation = 0;
    let startTime = performance.now();

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = window.innerWidth + "px";
      canvas!.style.height = window.innerHeight + "px";
      ctx!.scale(dpr, dpr);
    }

    resize();
    window.addEventListener("resize", resize);

    const width = () => window.innerWidth;
    const height = () => window.innerHeight;

    const stars = generateStars(width(), height(), 600);

    function drawFrame(time: number) {
      const w = width();
      const h = height();
      const elapsed = (time - startTime) / 1000;

      // Rotate stars slowly
      if (!prefersReducedMotion) {
        rotation = elapsed * 0.015; // very slow rotation
      }

      ctx!.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      // Draw galaxy core glow
      const coreRadius = Math.min(w, h) * 0.08;
      const coreGrad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, coreRadius);
      coreGrad.addColorStop(0, "rgba(255, 248, 220, 0.25)");
      coreGrad.addColorStop(0.3, "rgba(255, 220, 180, 0.12)");
      coreGrad.addColorStop(0.7, "rgba(180, 160, 255, 0.05)");
      coreGrad.addColorStop(1, "transparent");
      ctx!.fillStyle = coreGrad;
      ctx!.beginPath();
      ctx!.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      ctx!.fill();

      // Draw nebula dust
      const nebulaRadius = Math.min(w, h) * 0.25;
      for (let i = 0; i < 3; i++) {
        const nebAngle = rotation + (i / 3) * Math.PI * 2;
        const nx = cx + Math.cos(nebAngle) * nebulaRadius * 0.5;
        const ny = cy + Math.sin(nebAngle) * nebulaRadius * 0.5;
        const nebGrad = ctx!.createRadialGradient(nx, ny, 0, nx, ny, nebulaRadius * 0.4);
        nebGrad.addColorStop(0, "rgba(120, 80, 200, 0.04)");
        nebGrad.addColorStop(0.5, "rgba(80, 120, 220, 0.02)");
        nebGrad.addColorStop(1, "transparent");
        ctx!.fillStyle = nebGrad;
        ctx!.beginPath();
        ctx!.arc(nx, ny, nebulaRadius * 0.4, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Draw stars
      stars.forEach((star) => {
        // Rotate around center
        const dx = star.x - cx;
        const dy = star.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) + rotation * (dist < Math.min(w, h) * 0.15 ? 0.5 : 0.15);
        const sx = cx + Math.cos(angle) * dist;
        const sy = cy + Math.sin(angle) * dist;

        if (sx < -20 || sx > w + 20 || sy < -20 || sy > h + 20) return;

        const twinkle = prefersReducedMotion
          ? 1
          : 0.6 + 0.4 * Math.sin(time * 0.001 * star.twinkleSpeed + star.twinkleOffset);

        const alpha = star.brightness * twinkle;
        const size = star.size * twinkle;

        ctx!.globalAlpha = alpha;
        ctx!.fillStyle = star.color;
        ctx!.beginPath();
        ctx!.arc(sx, sy, size, 0, Math.PI * 2);
        ctx!.fill();

        // Glow for brighter stars
        if (star.size > 1.5) {
          ctx!.globalAlpha = alpha * 0.2;
          ctx!.beginPath();
          ctx!.arc(sx, sy, size * 3, 0, Math.PI * 2);
          ctx!.fill();
        }
      });

      ctx!.globalAlpha = 1;

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(drawFrame);
      }
    }

    animId = requestAnimationFrame(drawFrame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="galaxy-canvas"
      aria-hidden="true"
    />
  );
}
