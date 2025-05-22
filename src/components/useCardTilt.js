import { useRef, useEffect } from "react";

export default function useCardTilt() {
  const ref = useRef();

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    function handleMouseMove(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      const tiltX = deltaY * 10;
      const tiltY = -deltaX * 10;
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
      card.style.boxShadow = `${-deltaX*12}px ${deltaY*12}px 32px rgba(0,0,0,0.22)`;
    }

    function handleMouseLeave() {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)";
      card.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)";
    }

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mouseenter", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("mouseenter", handleMouseLeave);
    };
  }, []);

  return ref;
} 