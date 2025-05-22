import React, { useRef, useEffect } from "react";

const NUM_FIREFLIES = 80;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createFireflies(width, height) {
  return Array.from({ length: NUM_FIREFLIES }, () => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    angle: randomBetween(0, Math.PI * 2),
    speed: randomBetween(0.3, 1.2),
    radius: randomBetween(2, 4),
    glow: randomBetween(10, 30),
    color: `hsl(${randomBetween(180, 260)}, 100%, 70%)`,
  }));
}

const ContactFireflies = () => {
  const canvasRef = useRef();
  const animationRef = useRef();
  const firefliesRef = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    firefliesRef.current = createFireflies(width, height);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let f of firefliesRef.current) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.shadowColor = f.color;
        ctx.shadowBlur = f.glow;
        ctx.fillStyle = f.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
    }

    function update() {
      for (let f of firefliesRef.current) {
        // Mouse interaction: attract or repel
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - f.x;
          const dy = mouse.current.y - f.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            // Repel
            f.x -= dx / dist * 0.7;
            f.y -= dy / dist * 0.7;
          } else if (dist < 300) {
            // Attract
            f.x += dx / dist * 0.05;
            f.y += dy / dist * 0.05;
          }
        }
        // Organic movement
        f.angle += randomBetween(-0.1, 0.1);
        f.x += Math.cos(f.angle) * f.speed;
        f.y += Math.sin(f.angle) * f.speed;
        // Wrap around edges
        if (f.x < 0) f.x = width;
        if (f.x > width) f.x = 0;
        if (f.y < 0) f.y = height;
        if (f.y > height) f.y = 0;
      }
    }

    function animate() {
      update();
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
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      firefliesRef.current = createFireflies(width, height);
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

export default ContactFireflies; 