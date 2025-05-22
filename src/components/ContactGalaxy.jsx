import React, { useRef, useEffect } from "react";

const STAR_COUNT = 400;
const ARMS = 4;
const GALAXY_RADIUS = 320;
const SHOOTING_STAR_FREQ = 0.012;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createStars(width, height) {
  const CENTER_X = width / 2;
  const CENTER_Y = height / 2;
  const stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    const arm = i % ARMS;
    const angle = (arm / ARMS) * Math.PI * 2 + randomBetween(-0.2, 0.2);
    const radius = Math.pow(Math.random(), 1.7) * GALAXY_RADIUS;
    const theta = angle + radius * 0.045 + randomBetween(-0.1, 0.1);
    stars.push({
      baseRadius: radius,
      baseTheta: theta,
      color: `hsl(${randomBetween(180, 260)}, 100%, ${randomBetween(70, 100)}%)`,
      size: randomBetween(1.2, 2.7),
      speed: randomBetween(0.0007, 0.0015),
      offset: randomBetween(0, Math.PI * 2),
      centerX: CENTER_X,
      centerY: CENTER_Y,
    });
  }
  return stars;
}

const ContactGalaxy = () => {
  const canvasRef = useRef();
  const animationRef = useRef();
  const starsRef = useRef([]);
  const shootingStarsRef = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const sizeRef = useRef({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    function setupStars() {
      starsRef.current = createStars(sizeRef.current.width, sizeRef.current.height);
    }
    setupStars();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = sizeRef.current.width;
    let height = canvas.height = sizeRef.current.height;
    let t = 0;
    const CENTER_X = width / 2;
    const CENTER_Y = height / 2;
    mouse.current.x = CENTER_X;
    mouse.current.y = CENTER_Y;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw spiral stars
      for (let s of starsRef.current) {
        // Spiral motion
        const spiral = 0.18 * s.baseRadius;
        const theta = s.baseTheta + t * s.speed + spiral;
        // Mouse gravity
        const mx = (mouse.current.x ?? CENTER_X) - CENTER_X;
        const my = (mouse.current.y ?? CENTER_Y) - CENTER_Y;
        const pull = 1 + (mx * Math.cos(theta) + my * Math.sin(theta)) / 1200;
        const r = s.baseRadius * pull;
        const x = CENTER_X + Math.cos(theta) * r;
        const y = CENTER_Y + Math.sin(theta) * r;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 12;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
      // Draw shooting stars
      for (let ss of shootingStarsRef.current) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.vx * 18, ss.y - ss.vy * 18);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2.2;
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 16;
        ctx.globalAlpha = ss.alpha;
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
    }

    function update() {
      t += 0.7;
      // Shooting stars
      if (Math.random() < SHOOTING_STAR_FREQ) {
        const angle = randomBetween(-Math.PI / 4, Math.PI / 4);
        shootingStarsRef.current.push({
          x: randomBetween(width * 0.2, width * 0.8),
          y: randomBetween(0, height * 0.3),
          vx: Math.cos(angle) * randomBetween(7, 12),
          vy: Math.sin(angle) * randomBetween(7, 12),
          alpha: 1,
        });
      }
      for (let ss of shootingStarsRef.current) {
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.alpha -= 0.025;
      }
      shootingStarsRef.current = shootingStarsRef.current.filter(ss => ss.alpha > 0 && ss.x > 0 && ss.x < width && ss.y > 0 && ss.y < height);
    }

    function animate() {
      update();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    function handleMouse(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }
    function handleMouseOut() {
      mouse.current.x = width / 2;
      mouse.current.y = height / 2;
    }
    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseout", handleMouseOut);

    function handleResize() {
      sizeRef.current = { width: window.innerWidth, height: window.innerHeight };
      width = canvas.width = sizeRef.current.width;
      height = canvas.height = sizeRef.current.height;
      setupStars();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "#18181b",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          background: "#18181b"
        }}
        width={sizeRef.current.width}
        height={sizeRef.current.height}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          textAlign: "center",
          width: "100%",
          maxWidth: 600,
          margin: "0 auto",
          padding: "0 24px",
          textShadow: "0 2px 24px #000, 0 0 8px #3b82f6",
          backdropFilter: "blur(0.5px)",
        }}
      >
        <p style={{ color: "#b3b3b3", fontSize: "1.1rem", fontWeight: 500, marginBottom: 8, letterSpacing: "1.5px" }}>
          GET IN TOUCH
        </p>
        <h2 style={{ fontSize: "3.5rem", fontWeight: 900, margin: 0, letterSpacing: "-2px", lineHeight: 1.1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          Contact<span style={{ color: "#3b82f6", fontSize: "4rem", marginLeft: 4 }}>.</span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center", marginTop: 24 }}>
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
    </section>
  );
};

export default ContactGalaxy; 