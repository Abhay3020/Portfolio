import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const COLS = 18;
const ROWS = 10;
const BLOCK_SIZE = 48;
const COLORS = [
  "#3b82f6", "#22d3ee", "#a3e635", "#facc15", "#f472b6", "#f87171", "#a78bfa"
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

const ContactGSAPBlocks = () => {
  const [grid, setGrid] = useState([]);
  const containerRef = useRef();
  const blockRefs = useRef([]);

  // Initialize grid on mount
  useEffect(() => {
    const newGrid = Array.from({ length: ROWS }, (_, r) =>
      Array.from({ length: COLS }, (_, c) => ({
        color: randomColor(),
        ref: React.createRef(),
      }))
    );
    setGrid(newGrid);
    blockRefs.current = newGrid.flat().map(cell => cell.ref);
  }, []);

  // Set initial GSAP state after render
  useEffect(() => {
    if (blockRefs.current.length > 0) {
      gsap.set(
        blockRefs.current.map(ref => ref.current).filter(Boolean),
        { y: 0 }
      );
    }
  }, [grid]);

  // Ripple animation
  const triggerRipple = (x, y) => {
    const rect = containerRef.current.getBoundingClientRect();
    const gridX = Math.floor((x - rect.left) / BLOCK_SIZE);
    const gridY = Math.floor((y - rect.top) / BLOCK_SIZE);
    grid.forEach((row, r) => {
      row.forEach((cell, c) => {
        const dist = Math.sqrt((c - gridX) ** 2 + (r - gridY) ** 2);
        if (cell.ref.current) {
          gsap.to(cell.ref.current, {
            y: -32,
            backgroundColor: randomColor(),
            boxShadow: `0 0 24px ${randomColor()}`,
            duration: 0.3,
            delay: dist * 0.04,
            yoyo: true,
            repeat: 1,
            ease: "power2.out",
            clearProps: "boxShadow,backgroundColor"
          });
        }
      });
    });
  };

  // Mouse events
  useEffect(() => {
    const handleMove = e => {
      triggerRipple(e.clientX, e.clientY);
    };
    const handleClick = e => {
      triggerRipple(e.clientX, e.clientY);
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMove);
      container.addEventListener("click", handleClick);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMove);
        container.removeEventListener("click", handleClick);
      }
    };
    // eslint-disable-next-line
  }, [grid]);

  return (
    <div style={{
      position: "relative",
      width: "100vw",
      height: "100vh",
      background: "#18181b",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: COLS * BLOCK_SIZE,
          height: ROWS * BLOCK_SIZE,
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, ${BLOCK_SIZE}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${BLOCK_SIZE}px)`,
          gap: 2,
          zIndex: 1,
          cursor: "pointer",
        }}
      >
        {grid.flat().map((cell, i) => (
          <div
            key={i}
            ref={cell.ref}
            style={{
              width: BLOCK_SIZE,
              height: BLOCK_SIZE,
              background: cell.color,
              borderRadius: 8,
              boxShadow: `0 0 8px ${cell.color}`,
              transition: "background 0.2s, box-shadow 0.2s",
            }}
          />
        ))}
      </div>
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

export default ContactGSAPBlocks; 