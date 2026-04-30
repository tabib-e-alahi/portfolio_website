"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Orb {
  x: number;
  y: number;
  r: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width  = window.innerWidth;
    let height = window.innerHeight;
    canvas.width  = width;
    canvas.height = height;

    /* ── Orbs — new accent palette ── */
    const orbs: Orb[] = [
      { x: width * 0.12, y: height * 0.25, r: 420, color: "rgba(108, 99, 255," },   // accent purple
      { x: width * 0.85, y: height * 0.65, r: 320, color: "rgba(78, 205, 196,"  },   // accent-cold teal
      { x: width * 0.5,  y: height * 0.85, r: 260, color: "rgba(255, 107, 107," },   // accent-warm red
      { x: width * 0.7,  y: height * 0.1,  r: 220, color: "rgba(108, 99, 255,"  },   // accent purple
    ];

    /* Animate orbs with GSAP */
    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        x: orb.x + (Math.random() - 0.5) * 260,
        y: orb.y + (Math.random() - 0.5) * 200,
        duration: 9 + i * 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    /* ── Particles ── */
    const PARTICLE_COUNT = 60;
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:       Math.random() * width,
      y:       Math.random() * height,
      vx:      (Math.random() - 0.5) * 0.3,
      vy:      (Math.random() - 0.5) * 0.3,
      size:    Math.random() * 1.5 + 0.4,
      opacity: Math.random() * 0.3 + 0.06,
    }));

    /* ── Draw loop ── */
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      /* orbs */
      orbs.forEach((orb) => {
        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        g.addColorStop(0, orb.color + " 0.12)");
        g.addColorStop(1, orb.color + " 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      /* particles — accent purple tint */
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${p.opacity})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    /* resize */
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width  = width;
      canvas.height = height;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
