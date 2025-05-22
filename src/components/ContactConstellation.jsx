import React, { useRef, useEffect } from "react";

const PARTICLE_COUNT = 70;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createParticles(width, height) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    vx: randomBetween(-0.7, 0.7),
    vy: randomBetween(-0.7, 0.7),
    radius: randomBetween(2, 4),
  }));
}

const ContactConstellation = () => {
  const canvasRef = useRef();
  const animationRef = useRef();
  const particlesRef = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    particlesRef.current = createParticles(width, height);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw particles
      for (let p of particlesRef.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#3b82f6";
        ctx.shadowColor = "#2563eb";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.closePath();
      }
      // Draw lines between close particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(59,130,246,0.15)";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    function update() {
      for (let p of particlesRef.current) {
        // Mouse attraction
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            p.vx += dx / dist * 0.03;
            p.vy += dy / dist * 0.03;
          }
        }
        p.x += p.vx;
        p.y += p.vy;
        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        // Limit speed
        p.vx = Math.max(-1, Math.min(1, p.vx));
        p.vy = Math.max(-1, Math.min(1, p.vy));
      }
    }

    function animate() {
      update();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    // Mouse move
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

    // Handle resize
    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particlesRef.current = createParticles(width, height);
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
    <div style={{ position: "relative", width: "100vw", height: "100vh", background: "#000" }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100vw", height: "100vh" }} />
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

export default ContactConstellation; 