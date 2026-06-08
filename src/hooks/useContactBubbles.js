import { useEffect } from "react";

const MAX_BUBBLES = 10;
const THROTTLE_MS = 48;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isCoarsePointer() {
  return window.matchMedia("(pointer: coarse)").matches;
}

export function useContactBubbles(pageRef, bubbleLayerRef, formRef) {
  useEffect(() => {
    const page = pageRef.current;
    const layer = bubbleLayerRef.current;
    const form = formRef.current;

    if (!page || !layer || prefersReducedMotion() || isCoarsePointer()) {
      return undefined;
    }

    let lastTime = 0;
    let gsapModule = null;

    const createBubble = (e) => {
      if (form?.contains(e.target)) return;

      const now = Date.now();
      if (now - lastTime < THROTTLE_MS) return;
      if (layer.childElementCount >= MAX_BUBBLES) return;

      lastTime = now;

      const rect = page.getBoundingClientRect();
      const size = Math.random() * 12 + 8;

      const bubble = document.createElement("span");
      bubble.className = "pointer-events-none absolute rounded-full";
      bubble.style.left = `${e.clientX - rect.left}px`;
      bubble.style.top = `${e.clientY - rect.top}px`;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.background =
        "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(105,132,255,0.62) 35%, rgba(73,80,255,0.16) 72%)";
      bubble.style.border = "1px solid rgba(150,175,255,0.38)";
      bubble.style.boxShadow =
        "0 0 22px rgba(90,130,255,0.75), 0 0 42px rgba(105,90,255,0.35)";
      bubble.style.transform = "translate(-50%, -50%)";
      bubble.style.willChange = "transform, opacity";

      layer.appendChild(bubble);

      const animate = () => {
        if (!gsapModule) return bubble.remove();
        gsapModule.to(bubble, {
          x: (Math.random() - 0.5) * 70,
          y: -55 - Math.random() * 45,
          scale: 0,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
          force3D: true,
          onComplete: () => bubble.remove(),
        });
      };

      if (gsapModule) {
        animate();
      } else {
        import("gsap").then((mod) => {
          gsapModule = mod.default;
          animate();
        });
      }
    };

    page.addEventListener("mousemove", createBubble, { passive: true });
    return () => page.removeEventListener("mousemove", createBubble);
  }, [pageRef, bubbleLayerRef, formRef]);
}
