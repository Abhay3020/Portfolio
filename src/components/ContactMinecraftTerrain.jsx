import React, { useRef, useEffect } from "react";

const COLS = 20;
const ROWS = 12;
const BLOCK_SIZE = 40;
const COLORS = ["#7ec850", "#b7e07e", "#6b8e23", "#a3a3a3", "#3b82f6", "#facc15"];

function getBlockColor(height) {
  if (height > 0.7) return COLORS[0]; // grass
  if (height > 0.4) return COLORS[1]; // lighter grass
  if (height > 0.2) return COLORS[2]; // dark grass
  if (height > -0.1) return COLORS[3]; // stone
  if (height > -0.4) return COLORS[4]; // water
  return COLORS[5]; // sand
}

function noise(x, y, t) {
  // Simple pseudo-noise using sine/cosine
  return (
    Math.sin(x * 0.5 + t * 0.7) +
    Math.cos(y * 0.5 - t * 0.5) +
    Math.sin((x + y) * 0.3 + t * 0.2)
  ) / 3;
}

const ContactMinecraftTerrain = () => {
  const canvasRef = useRef();
  const animationRef = useRef();
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = COLS * BLOCK_SIZE;
    let height = canvas.height = ROWS * BLOCK_SIZE;
    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          // Height is a function of position and time
          let h = noise(c, r, t);
          // Mouse ripple
          if (mouse.current.x !== null && mouse.current.y !== null) {
            const dx = mouse.current.x - (c * BLOCK_SIZE + BLOCK_SIZE / 2);
            const dy = mouse.current.y - (r * BLOCK_SIZE + BLOCK_SIZE / 2);
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              h += Math.cos(dist / 12 - t * 2) * 0.5;
            }
          }
          // Block color and height
          ctx.save();
          ctx.beginPath();
          ctx.rect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
          ctx.fillStyle = getBlockColor(h);
          ctx.shadowColor = "#222";
          ctx.shadowBlur = 8 + h * 8;
          ctx.fill();
          ctx.closePath();
          // 3D effect: draw a top highlight
          if (h > 0.2) {
            ctx.beginPath();
            ctx.moveTo(c * BLOCK_SIZE, r * BLOCK_SIZE);
            ctx.lineTo((c + 1) * BLOCK_SIZE, r * BLOCK_SIZE);
            ctx.lineTo((c + 1) * BLOCK_SIZE - 8, r * BLOCK_SIZE + 8);
            ctx.lineTo(c * BLOCK_SIZE + 8, r * BLOCK_SIZE + 8);
            ctx.closePath();
            ctx.fillStyle = "rgba(255,255,255,0.08)";
            ctx.fill();
          }
          ctx.restore();
        }
      }
    }

    function animate() {
      t += 0.03;
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    function handleMouse(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    function handleMouseOut() {
      mouse.current.x = null;
      mouse.current.y = null;
    }
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseout", handleMouseOut);

    function handleResize() {
      width = canvas.width = COLS * BLOCK_SIZE;
      height = canvas.height = ROWS * BLOCK_SIZE;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{
      position: "relative",
      width: "100vw",
      height: "100vh",
      background: "#18181b",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          background: "#18181b",
          boxShadow: "0 0 80px #3b82f6, 0 0 0 #fff",
          borderRadius: "18px"
        }}
        width={COLS * BLOCK_SIZE}
        height={ROWS * BLOCK_SIZE}
      />
      {/* Contact Card Overlay */}
      <div
        style={{
          position: "absolute",
          left: "7vw",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(20, 20, 20, 0.85)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
          borderRadius: "24px",
          padding: "48px 48px 40px 48px",
          maxWidth: "420px",
          minWidth: "320px",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          backdropFilter: "blur(12px)",
          border: "1.5px solid rgba(59,130,246,0.15)",
          color: "#fff",
        }}
      >
        <p style={{ color: "#b3b3b3", fontSize: "1.1rem", fontWeight: 500, marginBottom: 8, letterSpacing: "1.5px" }}>
          GET IN TOUCH
        </p>
        <h2 style={{ fontSize: "3.5rem", fontWeight: 900, margin: 0, letterSpacing: "-2px", lineHeight: 1.1, display: "flex", alignItems: "center" }}>
          Contact<span style={{ color: "#3b82f6", fontSize: "4rem", marginLeft: 4 }}>.</span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ color: "#b3b3b3", fontSize: "1rem", fontWeight: 600, marginTop: 10 }}>Name:</div>
          <div style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: 2 }}>Abhay Ambekar</div>
          <div style={{ color: "#b3b3b3", fontSize: "1rem", fontWeight: 600, marginTop: 10 }}>Phone No:</div>
          <div style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: 2 }}>+1 (602) 515-5268</div>
          <div style={{ color: "#b3b3b3", fontSize: "1rem", fontWeight: 600, marginTop: 10 }}>Get in touch on LinkedIn</div>
          <a
            href="https://www.linkedin.com/in/abhayambekar/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#3b82f6",
              fontSize: "1.1rem",
              fontWeight: 700,
              textDecoration: "none",
              marginTop: 4,
              marginBottom: 8,
              transition: "color 0.2s",
            }}
          >
            LinkedIn
          </a>
          <div style={{ color: "#b3b3b3", fontSize: "1rem", fontWeight: 600, marginTop: 10 }}>Send me an email</div>
          <a
            href="mailto:aambekar@email.com"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#3b82f6",
              fontSize: "1.1rem",
              fontWeight: 700,
              textDecoration: "none",
              marginTop: 4,
              marginBottom: 8,
              transition: "color 0.2s",
            }}
          >
            aambekar@email.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMinecraftTerrain; 