import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

export default function AboutHero() {
  const sectionRef = useRef(null)
  const bubbleLayerRef = useRef(null)

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

      bubble.className =
        "pointer-events-none absolute rounded-full"

      bubble.style.left = `${x}px`
      bubble.style.top = `${y}px`

      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`

      bubble.style.background = `
        radial-gradient(
          circle at 35% 30%,
          rgba(255,255,255,0.9),
          rgba(78,135,255,0.58) 35%,
          rgba(68,85,255,0.2) 70%
        )
      `

      bubble.style.border =
        "1px solid rgba(140,175,255,0.45)"

      bubble.style.boxShadow = `
        0 0 22px rgba(75,134,255,0.85),
        0 0 42px rgba(90,92,255,0.45),
        inset 0 0 12px rgba(255,255,255,0.5)
      `

      bubble.style.transform = "translate(-50%, -50%)"

      /* IMPORTANT FOR ULTRA SMOOTH GPU RENDERING */
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

    return () => {
      section.removeEventListener("mousemove", createBubble)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black pb-20 pt-28 text-white"
    >
      {/* BUBBLE CURSOR LAYER */}
      <div
        ref={bubbleLayerRef}
        className="pointer-events-none absolute inset-0 z-[40]"
      />

      {/* BEAM BACKGROUND */}
      <motion.img
        src="/Group 45.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-[-18%]
          top-[-10%]
          z-[1]
          w-[72rem]
          max-w-none
          opacity-60
          mix-blend-screen
        "
        animate={{
          x: [-20, 25, -20],
          y: [-8, 16, -8],
          rotate: [-4, 2, -4],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* BLUE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-15%]
          top-[22%]
          z-[0]
          h-[650px]
          w-[760px]
          rounded-full
          bg-[#315dff]/25
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[40%]
          z-[0]
          h-[420px]
          w-[520px]
          rounded-full
          bg-[#6d3cff]/20
          blur-[130px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-7rem)]
          max-w-[1600px]
          items-center
          px-6
          lg:px-10
          -translate-y-10
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-8
            lg:grid-cols-[340px_1fr]
            lg:items-start
            -mt-8
          "
        >
          {/* LEFT SMALL TEXT */}
          <motion.p
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              max-w-[280px]
              font-['Inter']
              text-[14px]
              font-normal
              uppercase
              leading-[22.4px]
              tracking-[0.7px]
              text-white/75
              lg:pt-[8px]
            "
          >
            Technology builds systems.
            <br />
            ThreeDot builds impact.
          </motion.p>

          {/* MAIN HEADING */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "power3.out",
              }}
              className="
                max-w-[900px]
                font-['Inter']
                text-[36px]
                font-medium
                leading-[1.08]
                tracking-[-0.8px]
                text-white

                sm:text-[46px]

                md:text-[54px]

                lg:text-[58px]
                lg:leading-[62px]
                lg:tracking-[-1.1px]
              "
            >
              We are a technology-driven
              <br />
              company transforming
              <br />
              complex challenges into
              <br />
              scalable digital solutions.
            </motion.h1>

            {/* BUTTON */}
            <motion.a
              href="/#work"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              whileHover={{
                scale: 1.06,
                y: -3,
              }}
              whileTap={{ scale: 0.96 }}
              className="
                mt-14
                inline-flex
                h-[48px]
                min-w-[220px]
                items-center
                justify-center
                rounded-full
                bg-[#4F8BFF]
                px-8
                font-['Inter']
                text-[15px]
                font-normal
                text-white
                shadow-[0_0_28px_rgba(79,139,255,0.7)]
                transition
                hover:bg-[#3f7fff]
              "
            >
              Watch Our Story
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}