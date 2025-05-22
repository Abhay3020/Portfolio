import React, { useRef, useEffect } from "react";

const BUBBLE_COUNT = 50;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createBubbles(width, height) {
  return Array.from({ length: BUBBLE_COUNT }, () => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    vx: randomBetween(-0.5, 0.5),
    vy: randomBetween(-0.5, 0.5),
    radius: randomBetween(12, 28),
    baseRadius: 0,
    color: `rgba(59,130,246,${randomBetween(0.15, 0.35)})`,
  }));
}

const ContactBubbles = () => {
  const canvasRef = useRef();
  const animationRef = useRef();
  const bubblesRef = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    bubblesRef.current = createBubbles(width, height);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let b of bubblesRef.current) {
        // Bubble grows if mouse is near
        let grow = 0;
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - b.x;
          const dy = mouse.current.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) grow = (100 - dist) * 0.15;
        }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius + grow, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.shadowColor = "#3b82f6";
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.closePath();
      }
    }

    function update() {
      for (let b of bubblesRef.current) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < b.radius || b.x > width - b.radius) b.vx *= -1;
        if (b.y < b.radius || b.y > height - b.radius) b.vy *= -1;
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
      bubblesRef.current = createBubbles(width, height);
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

export default ContactBubbles; 