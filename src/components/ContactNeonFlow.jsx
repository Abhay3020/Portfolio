import React, { useRef, useEffect } from "react";

const LINE_COUNT = 120;
const FIELD_SCALE = 0.012;
const SPEED = 1.2;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createLines(width, height) {
  return Array.from({ length: LINE_COUNT }, () => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    angle: randomBetween(0, Math.PI * 2),
    color: `hsl(${randomBetween(180, 260)}, 100%, 60%)`,
    length: randomBetween(40, 90),
    speed: randomBetween(0.7, 1.7),
  }));
}

function flowField(x, y, t) {
  // Perlin-like field using sine/cosine
  return (
    Math.sin(x * FIELD_SCALE + t * 0.2) +
    Math.cos(y * FIELD_SCALE - t * 0.3)
  ) * Math.PI;
}

const ContactNeonFlow = () => {
  const canvasRef = useRef();
  const animationRef = useRef();
  const linesRef = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    linesRef.current = createLines(width, height);
    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let l of linesRef.current) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        // Neon gradient
        const grad = ctx.createLinearGradient(l.x, l.y, l.x + Math.cos(l.angle) * l.length, l.y + Math.sin(l.angle) * l.length);
        grad.addColorStop(0, l.color);
        grad.addColorStop(1, "#fff");
        ctx.strokeStyle = grad;
        ctx.shadowColor = l.color;
        ctx.shadowBlur = 16;
        ctx.lineWidth = 2.2;
        ctx.lineTo(l.x + Math.cos(l.angle) * l.length, l.y + Math.sin(l.angle) * l.length);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
    }

    function update() {
      t += 0.012 * SPEED;
      for (let l of linesRef.current) {
        // Flow field direction
        let angle = flowField(l.x, l.y, t);
        // Mouse interaction: lines near mouse swirl more
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - l.x;
          const dy = mouse.current.y - l.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            angle += Math.atan2(dy, dx) * 0.7;
          }
        }
        l.angle = angle;
        l.x += Math.cos(l.angle) * l.speed * SPEED;
        l.y += Math.sin(l.angle) * l.speed * SPEED;
        // Wrap around edges
        if (l.x < 0) l.x = width;
        if (l.x > width) l.x = 0;
        if (l.y < 0) l.y = height;
        if (l.y > height) l.y = 0;
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
      linesRef.current = createLines(width, height);
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

export default ContactNeonFlow; 