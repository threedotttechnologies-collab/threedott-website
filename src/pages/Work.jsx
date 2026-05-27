import { useState, useMemo, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import {
  featuredProjects,
  gridProjects,
  allFilters,
} from "../constants/workData"
import CTASection from "../components/CTASection"

gsap.registerPlugin(ScrollTrigger)

function ParticleCircle() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 320 }, () => {
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * 48

        return {
          left: `${50 + Math.cos(angle) * radius}%`,
          top: `${50 + Math.sin(angle) * radius * 0.78}%`,
          size: `${Math.random() * 3.4 + 1.2}px`,
          opacity: Math.random() * 0.75 + 0.25,
          delay: `${Math.random() * 3}s`,
          duration: `${Math.random() * 4 + 3}s`,
        }
      })
    )
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="relative h-[360px] w-[360px] sm:h-[460px] sm:w-[460px] lg:h-[560px] lg:w-[560px]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7182ff]/70 blur-[48px]" />
        <div className="absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5969ff]/25 blur-[38px]" />
        <div className="absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7f8cff]/10" />

        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#9aa6ff] shadow-[0_0_12px_rgba(130,145,255,0.95)]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animation: `floatParticle ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All")

  const heroRef = useRef(null)
  const circleRef = useRef(null)
  const bubbleLayerRef = useRef(null)
  const featuredRefs = useRef([])
  const gridRefs = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(circleRef.current, {
        yPercent: 22,
        scale: 0.9,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      featuredRefs.current.forEach((card, index) => {
        if (!card) return

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 55,
            scale: 0.94,
            rotateX: 8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
            delay: index * 0.06,
          }
        )
      })

      gridRefs.current.forEach((card, index) => {
        if (!card) return

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 35,
            scale: 0.92,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.58,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
            },
            delay: (index % 3) * 0.08,
          }
        )
      })

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [activeFilter])

  useEffect(() => {
    const hero = heroRef.current
    const layer = bubbleLayerRef.current
    if (!hero || !layer) return

    let lastTime = 0

    const createBubble = (e) => {
      const now = Date.now()
      if (now - lastTime < 28) return
      lastTime = now

      const rect = hero.getBoundingClientRect()
      const size = Math.random() * 18 + 8

      const bubble = document.createElement("span")
      bubble.className = "pointer-events-none absolute rounded-full"
      bubble.style.left = `${e.clientX - rect.left}px`
      bubble.style.top = `${e.clientY - rect.top}px`
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`
      bubble.style.background =
        "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(105,132,255,0.65) 35%, rgba(73,80,255,0.18) 72%)"
      bubble.style.border = "1px solid rgba(150,175,255,0.45)"
      bubble.style.boxShadow =
        "0 0 24px rgba(90,130,255,0.9), 0 0 48px rgba(105,90,255,0.45)"
      bubble.style.transform = "translate(-50%, -50%)"
      bubble.style.willChange = "transform, opacity"

      layer.appendChild(bubble)

      gsap.to(bubble, {
        x: (Math.random() - 0.5) * 70,
        y: -55 - Math.random() * 45,
        scale: 0,
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
        force3D: true,
        onComplete: () => bubble.remove(),
      })
    }

    hero.addEventListener("mousemove", createBubble)
    return () => hero.removeEventListener("mousemove", createBubble)
  }, [])

  const filteredFeatured = useMemo(() => {
    if (activeFilter === "All") return featuredProjects
    return featuredProjects.filter((p) => p.tags.includes(activeFilter))
  }, [activeFilter])

  const filteredGrid = useMemo(() => {
    if (activeFilter === "All") return gridProjects
    return gridProjects.filter((p) => p.tags.includes(activeFilter))
  }, [activeFilter])

  return (
    <div className="relative min-h-screen overflow-hidden bg-black pb-24 pt-24 text-white">
      <style>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(8px, -10px, 0) scale(1.25);
          }
        }
      `}</style>

      <section
        ref={heroRef}
        className="relative mb-16 flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        <div
          ref={bubbleLayerRef}
          className="pointer-events-none absolute inset-0 z-[50]"
        />

        <motion.img
          src="/Group 45.png"
          alt=""
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="
            pointer-events-none
            absolute
            h-full
            z-0
            w-[2200px]
            max-w-none
            -translate-x-1/2
            -translate-y-1/2
            opacity-60
            mix-blend-screen
          "
        />

        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_35%,rgba(0,0,0,0.82)_100%)]" />

        <div
          ref={circleRef}
          className="pointer-events-none absolute left-1/2 top-[44%] z-[2] -translate-x-1/2 -translate-y-1/2 opacity-95"
        >
          <ParticleCircle />
        </div>

        <div className="absolute inset-0 z-[3] bg-black/30" />
        <div className="absolute inset-x-0 bottom-0 z-[4] h-48 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.16,
              },
            },
          }}
          className="relative z-10 mx-auto flex max-w-[920px] flex-col items-center"
        >
          <motion.h1
            variants={fadeUp}
            className="
              font-['Inter']
              font-medium
              text-[52px]
              leading-[100%]
              tracking-[-1.28px]
              text-center
              text-white
              sm:text-[64px]
              lg:text-[72px]
            "
          >
            Our Work
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-[780px] font-['Inter'] text-[18px] font-normal leading-[1.45] text-white/90 sm:text-[20px] md:text-[22px] lg:text-[25px]"
          >
            We build scalable technology solutions across AI, GIS, software, and
            intelligent systems.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {allFilters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-6 py-2.5 font-['Inter'] text-[14px] font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-white bg-white text-black shadow-[0_0_35px_rgba(255,255,255,0.25)]"
                    : "border-white/10 bg-[#1e1e1e]/80 text-white/45 hover:border-white/25 hover:text-white"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <div className="relative z-10 mx-auto max-w-[1120px] px-6">
        <div className="flex flex-col gap-10">
          {filteredFeatured.map((project, index) => (
            <Link
              key={project.id}
              ref={(el) => (featuredRefs.current[index] = el)}
              to={project.link || "#"}
              className="group block overflow-hidden rounded-[22px] border border-white/10 bg-[#050505] shadow-[0_25px_90px_rgba(0,0,0,0.75)] transition-all duration-500 hover:border-white/25 hover:shadow-[0_35px_110px_rgba(88,92,255,0.18)]"
            >
              <div className="grid min-h-[380px] lg:grid-cols-2">
                <div
                  className={`relative h-[290px] overflow-hidden lg:h-auto ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-[#6674ff]/20 opacity-70" />
                </div>

                <div
                  className={`relative flex flex-col justify-center overflow-hidden bg-[#050505] p-10 lg:p-14 ${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="absolute right-[-80px] top-[-80px] h-[180px] w-[180px] rounded-full bg-[#6674ff]/20 blur-[60px] transition duration-700 group-hover:bg-[#6674ff]/35" />

                  <div className="relative z-10 mb-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="relative z-10 font-['Inter'] text-[30px] font-medium leading-[1.08] tracking-[-0.8px] text-white lg:text-[40px]">
                    {project.title}
                  </h2>

                  <p className="relative z-10 mt-5 max-w-[430px] font-['Inter'] text-[14px] leading-[1.7] text-white/35">
                    {project.description}
                  </p>

                  <div className="relative z-10 mt-12 flex items-center gap-4 font-['Inter'] text-[13px] text-white">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 transition group-hover:border-white/35 group-hover:bg-white group-hover:text-black">
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                    <span>View Case Study</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredGrid.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mb-10 mt-24"
          >
            <h3 className="font-['Inter'] text-[26px] font-semibold tracking-[-0.4px] text-white">
              All Projects
            </h3>
          </motion.div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredGrid.map((project, index) => (
            <Link
              key={project.id}
              ref={(el) => (gridRefs.current[index] = el)}
              to={project.link || "#"}
              className="group relative overflow-hidden rounded-[18px] border border-white/15 bg-[#050505] transition-all duration-500 hover:-translate-y-3 hover:border-white/30 hover:shadow-[0_28px_80px_rgba(93,102,255,0.18)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#6573ff]/25 blur-[50px]" />
              </div>

              <div className="h-[260px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="relative z-10 p-7">
                <div className="mb-5 flex gap-2">
                  {project.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="font-['Inter'] text-[20px] font-medium text-white">
                  {project.title}
                </h4>

                <p className="mt-3 font-['Inter'] text-[13px] leading-[1.7] text-white/35">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  )
}