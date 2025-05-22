import React, { useRef, useEffect } from "react";

const PARTICLE_COUNT = 48;
const LINE_DISTANCE = 90;
const PARTICLE_RADIUS = 2.5;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createParticles(width, height) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: randomBetween(-0.4, 0.4),
    vy: randomBetween(-0.4, 0.4)
  }));
}

const ContactParticles = ({ style }) => {
  const canvasRef = useRef();
  const mouse = useRef({ x: null, y: null });
  const sizeRef = useRef({ width: 400, height: 400 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    function setSize() {
      sizeRef.current = {
        width: parent.offsetWidth,
        height: parent.offsetHeight
      };
      canvas.width = sizeRef.current.width;
      canvas.height = sizeRef.current.height;
      particlesRef.current = createParticles(canvas.width, canvas.height);
    }
    setSize();
    const ctx = canvas.getContext("2d");

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw lines
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.save();
            ctx.globalAlpha = 0.45 + 0.35 * (1 - dist / LINE_DISTANCE);
            ctx.strokeStyle = "#60a5fa";
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw mouse lines
      if (mouse.current.x !== null && mouse.current.y !== null) {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const a = particlesRef.current[i];
          const dx = a.x - mouse.current.x;
          const dy = a.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE * 1.1) {
            ctx.save();
            ctx.globalAlpha = 0.55 + 0.35 * (1 - dist / (LINE_DISTANCE * 1.1));
            ctx.strokeStyle = "#3b82f6";
            ctx.lineWidth = 2.4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particlesRef.current[i];
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#60a5fa";
        ctx.shadowBlur = 8;
        ctx.globalAlpha = 0.85;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
    }

    function animate() {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      draw();
      requestAnimationFrame(animate);
    }
    animate();

    function handleMouse(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }
    function handleMouseOut() {
      mouse.current.x = null;
      mouse.current.y = null;
    }
    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleMouseOut);
    window.addEventListener("resize", setSize);
    return () => {
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleMouseOut);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        background: "transparent",
        pointerEvents: "auto",
        ...style
      }}
    />
  );
};

export default ContactParticles; 