"use client";

import { useEffect, useRef } from "react";

const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- CONFIGURATION ---
    const trailLength = 20;
    const trailColor = "138, 43, 226"; // Single Purple Color

    const points: { x: number; y: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add point
      points.unshift({ x: mouse.x, y: mouse.y });
      if (points.length > trailLength) points.pop();

      // Draw
      ctx.beginPath();
      if (points.length > 0) {
        ctx.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length; i++) {
          const point = points[i];
          const xc = (points[i].x + points[i - 1].x) / 2;
          const yc = (points[i].y + points[i - 1].y) / 2;
          
          ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
          
          // Reverted to simple single color with fading opacity
          ctx.lineWidth = (trailLength - i) * 0.5;
          ctx.strokeStyle = `rgba(${trailColor}, ${1 - i / trailLength})`;
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(xc, yc);
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default MouseTrail;