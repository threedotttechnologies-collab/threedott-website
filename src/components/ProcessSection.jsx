import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    id: "01",
    title: "Discover",
    desc: "Understanding your idea and requirements.",
  },
  {
    id: "02",
    title: "Design",
    desc: "Creating user-focused product experiences.",
  },
  {
    id: "03",
    title: "Develop",
    desc: "Building robust and scalable digital products.",
  },
]

function SplitWords({ text }) {
  return (
    <span className="inline-flex flex-wrap gap-x-[0.22em] gap-y-2">
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="process-word text-white/15 transition-colors duration-300"
        >
          {word}
        </span>
      ))}
    </span>
  )
}

export default function ProcessSection() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })

      gsap.from(".process-step", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-list",
          start: "top 75%",
        },
      })

      gsap.utils.toArray(".process-step").forEach((step) => {
        const words = step.querySelectorAll(".process-word")
        const number = step.querySelector(".process-number")
        const title = step.querySelector(".process-title")

        gsap.to(words, {
          color: "rgba(255,255,255,1)",
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: step,
            start: "top 65%",
            end: "bottom 45%",
            scrub: true,
          },
        })

        gsap.to(step, {
          opacity: 1,
          scrollTrigger: {
            trigger: step,
            start: "top 70%",
            end: "bottom 45%",
            scrub: true,
          },
        })

        gsap.to([number, title], {
          color: "#ffffff",
          scrollTrigger: {
            trigger: step,
            start: "top 70%",
            end: "bottom 45%",
            scrub: true,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/10 bg-black py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[360px] w-[360px] rounded-full bg-[#6d5cff]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div ref={headingRef} className="mb-16 text-center">
          <h2 className="font-['Poppins'] text-[36px] font-normal leading-none tracking-[0.04em] text-center text-white normal-case">
            Our Process
          </h2>
        </div>

        <div className="process-list flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              className="process-step border-t border-white/10 py-8 opacity-40 sm:py-10 lg:py-12"
              whileHover={{
                opacity: 1,
                x: 8,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 20,
              }}
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="process-number font-mono text-xs tracking-wider text-gray-500">
                  {step.id}
                </span>

                <h3 className="process-title text-xl font-bold tracking-tight text-white/50 md:text-2xl">
                  {step.title}
                </h3>
              </div>

              <p className="font-sans text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                <SplitWords text={step.desc} />
              </p>
            </motion.div>
          ))}

          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}