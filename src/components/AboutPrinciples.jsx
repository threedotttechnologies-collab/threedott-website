import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

const principles = [
  { id: "01", title: "Technology should simplify complexity not add to it." },
  { id: "02", title: "AI should enhance human decision-making." },
  { id: "03", title: "Innovation must deliver measurable results." },
  { id: "04", title: "Speed matters — but quality matters more." },
]

function useBubbleEffect(sectionRef, bubbleLayerRef) {
  useEffect(() => {
    const section = sectionRef.current
    const layer = bubbleLayerRef.current
    if (!section || !layer) return

    let lastTime = 0

    const createBubble = (e) => {
      const now = Date.now()
      if (now - lastTime < 16) return
      lastTime = now

      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const size = Math.random() * 16 + 9

      const bubble = document.createElement("span")
      bubble.className = "pointer-events-none absolute rounded-full"
      bubble.style.left = `${x}px`
      bubble.style.top = `${y}px`
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`
      bubble.style.background =
        "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9), rgba(78,135,255,0.58) 35%, rgba(68,85,255,0.2) 70%)"
      bubble.style.border = "1px solid rgba(140,175,255,0.45)"
      bubble.style.boxShadow =
        "0 0 22px rgba(75,134,255,0.85), 0 0 42px rgba(90,92,255,0.45), inset 0 0 12px rgba(255,255,255,0.5)"
      bubble.style.transform = "translate(-50%, -50%)"
      bubble.style.willChange = "transform, opacity"

      layer.appendChild(bubble)

      gsap.to(bubble, {
        x: (Math.random() - 0.5) * 90,
        y: -75 - Math.random() * 55,
        scale: 0,
        opacity: 0,
        duration: 1.6,
        ease: "expo.out",
        force3D: true,
        onComplete: () => bubble.remove(),
      })
    }

    section.addEventListener("mousemove", createBubble)
    return () => section.removeEventListener("mousemove", createBubble)
  }, [sectionRef, bubbleLayerRef])
}

export default function AboutPrinciples() {
  const sectionRef = useRef(null)
  const bubbleLayerRef = useRef(null)

  useBubbleEffect(sectionRef, bubbleLayerRef)

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-20 text-white lg:py-28"
    >
      <div ref={bubbleLayerRef} className="pointer-events-none absolute inset-0 z-[40]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="mb-24 flex flex-col items-center gap-5 text-center">
          <h2 className="font-['Poppins'] text-[30px] font-medium leading-[42px] text-white sm:text-[34px] lg:text-[36px] lg:leading-[48px]">
            How We Think
          </h2>

          <p className="max-w-[520px] font-['Inter'] text-[18px] italic font-normal leading-[1.2] text-white/60 sm:text-[22px] lg:text-[24px]">
            We don&apos;t just build products — we build
            <br />
            systems that scale.
          </p>
        </div>

        <p className="mb-10 font-['Inter'] text-[12px] uppercase tracking-[0.08em] text-white/40 lg:text-[13px]">
          Core Beliefs
        </p>

        <div className="border-t border-white/10">
          {principles.map((principle) => (
            <motion.div
              key={principle.id}
              className="group grid cursor-default grid-cols-[42px_1fr] items-start gap-5 border-b border-white/10 py-8 sm:grid-cols-[52px_1fr] sm:gap-7 lg:grid-cols-[60px_1fr] lg:gap-8 lg:py-10"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <span className="pt-2 font-['Inter'] text-[12px] text-white/40 transition-colors duration-300 group-hover:text-[#7da2ff] lg:text-[14px]">
                {principle.id}
              </span>

              <h3 className="font-['Inter'] text-[22px] font-medium leading-[1.2] tracking-[-0.3px] text-white/95 sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.4px]">
                {principle.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}