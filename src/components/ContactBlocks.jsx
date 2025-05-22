import React, { useRef, useEffect } from "react";

const COLS = 16;
const ROWS = 24;
const BLOCK_SIZE = 32;
const COLORS = [
  "#3b82f6", "#22d3ee", "#a3e635", "#facc15", "#f472b6", "#f87171", "#a78bfa"
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function createBlock() {
  return {
    x: Math.floor(Math.random() * COLS),
    y: 0,
    color: randomColor(),
    speed: Math.random() * 0.5 + 0.7,
  };
}

const ContactBlocks = () => {
  const canvasRef = useRef();
  const animationRef = useRef();
  const blocksRef = useRef([]);
  const gridRef = useRef(Array.from({ length: ROWS }, () => Array(COLS).fill(null)));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = COLS * BLOCK_SIZE;
    let height = canvas.height = ROWS * BLOCK_SIZE;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw stacked grid
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (gridRef.current[r][c]) {
            ctx.fillStyle = gridRef.current[r][c];
            ctx.fillRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            ctx.strokeStyle = "#222";
            ctx.lineWidth = 2;
            ctx.strokeRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
          }
        }
      }
      // Draw falling blocks
      for (let b of blocksRef.current) {
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x * BLOCK_SIZE, b.y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.strokeRect(b.x * BLOCK_SIZE, b.y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      }
    }

    function update() {
      // Add new block occasionally
      if (Math.random() < 0.12) {
        blocksRef.current.push(createBlock());
      }
      // Move blocks
      for (let i = blocksRef.current.length - 1; i >= 0; i--) {
        let b = blocksRef.current[i];
        b.y += b.speed;
        let gridY = Math.floor(b.y);
        if (
          gridY >= ROWS - 1 ||
          (gridY + 1 < ROWS && gridRef.current[gridY + 1][b.x])
        ) {
          // Place block in grid
          gridRef.current[gridY][b.x] = b.color;
          blocksRef.current.splice(i, 1);
        }
      }
      // Clear full rows
      for (let r = ROWS - 1; r >= 0; r--) {
        if (gridRef.current[r].every(cell => cell)) {
          gridRef.current.splice(r, 1);
          gridRef.current.unshift(Array(COLS).fill(null));
        }
      }
    }

    function animate() {
      update();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      width = canvas.width = COLS * BLOCK_SIZE;
      height = canvas.height = ROWS * BLOCK_SIZE;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
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

export default ContactBlocks; 