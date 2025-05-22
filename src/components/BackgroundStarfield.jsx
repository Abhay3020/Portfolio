import React, { useRef, useEffect } from "react";

const STAR_COUNT = 120;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createStars(width, height) {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: randomBetween(0.5, 1.2),
    twinkle: Math.random() * Math.PI * 2,
    speed: randomBetween(0.01, 0.04),
  }));
}

const BackgroundStarfield = ({ style }) => {
  const canvasRef = useRef();
  const starsRef = useRef([]);
  const sizeRef = useRef({ width: 400, height: 400 });

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
      starsRef.current = createStars(canvas.width, canvas.height);
    }
    setSize();
    const ctx = canvas.getContext("2d");
    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let s of starsRef.current) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r + Math.sin(t * s.speed + s.twinkle) * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.globalAlpha = 0.7 + Math.sin(t * s.speed + s.twinkle) * 0.2;
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
    }
    function animate() {
      t += 0.5;
      draw();
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener("resize", setSize);
    return () => {
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
        background: "#000",
        pointerEvents: "none",
        ...style
      }}
    />
  );
};

export default BackgroundStarfield; 