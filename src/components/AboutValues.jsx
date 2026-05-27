import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

const cards = [
  {
    title: "Engineering-First Approach",
    desc: "We design systems that are scalable, efficient, and built for performance.",
    active: true,
  },
  {
    title: "Advanced Technology",
    desc: "From AI to GIS platforms, we build intelligent digital infrastructure.",
    active: false,
  },
  {
    title: "Real-World Impact",
    desc: "Our solutions solve practical challenges across agriculture, mining, and enterprise sectors.",
    active: false,
  },
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

export default function AboutValues() {
  const sectionRef = useRef(null)
  const bubbleLayerRef = useRef(null)

  useBubbleEffect(sectionRef, bubbleLayerRef)

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-20 text-white lg:py-28"
    >
      <div ref={bubbleLayerRef} className="pointer-events-none absolute inset-0 z-[40]" />

      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-[#315dff]/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-['Inter'] text-[26px] font-semibold leading-none tracking-[-0.02em] text-white sm:text-[30px]">
            Things that matter.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`group relative flex h-[300px] flex-col justify-end overflow-hidden rounded-[18px] border p-8 transition-all duration-500 sm:h-[320px] sm:p-9 ${card.active
                  ? "border-[#9dbaff]/60 bg-[#071b45]/80 shadow-[0_0_35px_rgba(80,130,255,0.16)]"
                  : "border-white/20 bg-black/40 hover:border-[#9dbaff]/55 hover:bg-[#071b45]/35"
                }`}
              whileHover={{
                y: -12,
                scale: 1.018,
                rotateX: 4,
                rotateY: i === 0 ? -4 : i === 2 ? 4 : 0,
              }}
              transition={{ type: "spring", stiffness: 230, damping: 18 }}
              style={{
                transformStyle: "preserve-3d",
                transformPerspective: 1600,
              }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_top_left,rgba(90,130,255,0.16),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="pointer-events-none absolute inset-0 rounded-[18px]">
                <div className="absolute left-0 top-0 h-[34%] w-px bg-gradient-to-b from-[#a9c0ff] to-transparent opacity-90" />
                <div className="absolute left-0 top-0 h-px w-[34%] bg-gradient-to-r from-[#a9c0ff] to-transparent opacity-90" />
                <div className="absolute bottom-0 right-0 h-[34%] w-px bg-gradient-to-t from-[#a9c0ff] to-transparent opacity-70" />
                <div className="absolute bottom-0 right-0 h-px w-[34%] bg-gradient-to-l from-[#a9c0ff] to-transparent opacity-70" />
              </div>

              <div className="absolute inset-0 overflow-hidden rounded-[18px]">
                <div className="absolute left-[-120%] top-0 h-full w-[70%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/12 to-transparent transition-all duration-1000 group-hover:left-[135%]" />
              </div>

              <div className="relative z-10">
                <h3 className="max-w-[260px] font-['Inter'] text-[26px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[30px]">
                  {card.title}
                </h3>

                <p
                  className={`mt-6 max-w-[330px] font-['Inter'] text-[14px] font-normal leading-[1.55] ${card.active ? "text-white/60" : "text-white/45"
                    }`}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}