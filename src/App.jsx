import { useEffect, useRef } from "react";
import ParticleCanvas from "./components/ParticleCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingDock from "./components/FloatingDock";

export default function App() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Custom cursor
    const moveCursor = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", moveCursor);

    // Lagging ring
    let animId;
    const lagRing = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.13;
      ring.current.y += (pos.current.y - ring.current.y) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      animId = requestAnimationFrame(lagRing);
    };
    lagRing();

    // Scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    reveals.forEach(r => obs.observe(r));

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animId);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />

      {/* Particle bg */}
      <ParticleCanvas />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FloatingDock/>
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
