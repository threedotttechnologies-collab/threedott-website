import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function SplitWords({ text, className = "" }) {
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.22em] gap-y-2 ${className}`}>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="intro-word text-white/20 transition-colors duration-300"
        >
          {word}
        </span>
      ))}
    </span>
  )
}

export default function AboutIntro() {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const headingRef = useRef(null)
  const mapRef = useRef(null)
  const paragraphRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(labelRef.current, {
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })

      gsap.from(headingRef.current, {
        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      })

      gsap.from(mapRef.current, {
        x: -60,
        opacity: 0,
        scale: 0.94,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
        },
      })

      gsap.from(paragraphRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
        },
      })

      gsap.utils.toArray(".intro-reveal").forEach((block) => {
        const words = block.querySelectorAll(".intro-word")

        gsap.to(words, {
          color: "rgba(255,255,255,1)",
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: block,
            start: "top 70%",
            end: "bottom 45%",
            scrub: true,
          },
        })
      })

      gsap.to(mapRef.current, {
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/5 bg-black py-20 text-white lg:py-32"
    >
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#315dff]/10 blur-[130px]" />

      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        {/* HEADLINE */}
        <div className="mb-24 max-w-[1120px]">
          <p
            ref={labelRef}
            className="mb-8 font-['Inter'] text-[13px] font-normal uppercase leading-none tracking-[0.14em] text-white/45"
          >
            Our Story
          </p>

          <h2
            ref={headingRef}
            className="intro-reveal font-['Inter'] text-[36px] font-medium leading-[1.1] tracking-[-0.7px] sm:text-[44px] md:text-[50px] lg:text-[56px] lg:leading-[61.6px] lg:tracking-[-1.12px]"
          >
            <SplitWords text="ThreeDot Technology operates at the intersection of advanced engineering and intelligent systems." />
          </h2>
        </div>

        {/* MAP + TEXT */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          {/* MAP */}
          <motion.div
            ref={mapRef}
            whileHover={{
              scale: 1.025,
              rotate: -1,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="/map.png"
              alt="Map"
              className="w-full max-w-[540px] object-contain opacity-90"
            />
          </motion.div>

          {/* PARAGRAPH */}
          <motion.div
            ref={paragraphRef}
            whileHover={{
              x: 8,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            className="flex justify-center lg:justify-start"
          >
            <p className="intro-reveal max-w-[600px] font-['Inter'] text-[24px] font-semibold leading-[1.12] tracking-normal sm:text-[27px] lg:text-[30px] lg:leading-[33.6px]">
              <SplitWords text="Founded by engineers and problem-solvers, we focus on building scalable software, AI systems, and geospatial platforms that drive real-world impact across industries." />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}