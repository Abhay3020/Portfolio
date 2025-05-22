import React, { useRef, useEffect } from "react";

const STAR_COUNT = 300;
const NEBULA_COUNT = 3;
const STAR_COLORS = ["#fff", "#b3cfff", "#3b82f6", "#a78bfa", "#f472b6"];
const NEBULA_COLORS = [
  "rgba(59,130,246,0.10)",
  "rgba(167,139,250,0.10)",
  "rgba(244,114,182,0.08)"
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createStars(width, height) {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: randomBetween(0.7, 2.2),
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    speed: randomBetween(0.02, 0.08),
    twinkle: Math.random() * Math.PI * 2,
    parallax: randomBetween(0.2, 1.2),
  }));
}

function createNebula(width, height) {
  return Array.from({ length: NEBULA_COUNT }, () => ({
    x: randomBetween(width * 0.2, width * 0.8),
    y: randomBetween(height * 0.2, height * 0.8),
    r: randomBetween(180, 340),
    color: NEBULA_COLORS[Math.floor(Math.random() * NEBULA_COLORS.length)],
    dx: randomBetween(-0.04, 0.04),
    dy: randomBetween(-0.04, 0.04),
  }));
}

const BackgroundGalaxy = () => {
  const canvasRef = useRef();
  const starsRef = useRef([]);
  const nebulaRef = useRef([]);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const sizeRef = useRef({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    function setup() {
      starsRef.current = createStars(sizeRef.current.width, sizeRef.current.height);
      nebulaRef.current = createNebula(sizeRef.current.width, sizeRef.current.height);
    }
    setup();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = sizeRef.current.width;
    let height = canvas.height = sizeRef.current.height;
    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw nebula clouds
      for (let n of nebulaRef.current) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(
          n.x + (mouse.current.x - 0.5) * 60,
          n.y + (mouse.current.y - 0.5) * 60,
          n.r,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 1;
        ctx.filter = "blur(16px)";
        ctx.fill();
        ctx.filter = "none";
        ctx.restore();
      }
      // Draw stars
      for (let s of starsRef.current) {
        const px = s.x + (mouse.current.x - 0.5) * 60 * s.parallax;
        const py = s.y + (mouse.current.y - 0.5) * 60 * s.parallax;
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, s.r + Math.sin(t * s.speed + s.twinkle) * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = 0.7 + Math.sin(t * s.speed + s.twinkle) * 0.2;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
    }

    function update() {
      t += 0.7;
      // Animate nebula
      for (let n of nebulaRef.current) {
        n.x += n.dx;
        n.y += n.dy;
        if (n.x < 0 || n.x > width) n.dx *= -1;
        if (n.y < 0 || n.y > height) n.dy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    function handleMouse(e) {
      mouse.current.x = e.clientX / width;
      mouse.current.y = e.clientY / height;
    }
    function handleMouseOut() {
      mouse.current.x = 0.5;
      mouse.current.y = 0.5;
    }
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseout", handleMouseOut);

    function handleResize() {
      sizeRef.current = { width: window.innerWidth, height: window.innerHeight };
      width = canvas.width = sizeRef.current.width;
      height = canvas.height = sizeRef.current.height;
      setup();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        background: "#18181b",
        pointerEvents: "none"
      }}
      width={sizeRef.current.width}
      height={sizeRef.current.height}
    />
  );
};

export default BackgroundGalaxy; 