import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const services = [
  {
    id: "01",
    title: "UI / UX Design",
    description:
      "End-to-end product design—from research and user flows to modern interfaces and developer-ready design systems.",
    services: [
      "User Research & Strategy",
      "UX Flows & Wireframes",
      "UI Design Systems",
      "Prototyping & Interaction Design",
    ],
    tools: ["figma", "Xd", "Ai", "blender"],
  },
  {
    id: "02",
    title: "Web Development",
    description:
      "High-performance websites and applications built with modern frontend and backend technologies.",
    services: ["Landing Pages", "Custom Web Apps", "CMS Integrations", "Performance & SEO"],
    tools: ["React", "Next", "Node"],
  },
  {
    id: "03",
    title: "App Development",
    description:
      "Scalable mobile applications designed for reliability, growth, and great user experience.",
    services: ["iOS Apps", "Android Apps", "Flutter Apps", "Backend APIs"],
    tools: ["Flutter", "Swift", "Kotlin"],
  },
  {
    id: "04",
    title: "AI Development",
    description:
      "Custom AI workflows, intelligent automation, LLM integrations, and data-driven products.",
    services: ["AI Chatbots", "LLM Apps", "Automation", "Data Pipelines"],
    tools: ["Python", "OpenAI", "ML"],
  },
]

function ParticleBlob() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 260 }, () => {
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * 49

        return {
          left: `${50 + Math.cos(angle) * radius}%`,
          top: `${50 + Math.sin(angle) * radius * 0.78}%`,
          size: `${Math.random() * 3.2 + 1.4}px`,
          opacity: Math.random() * 0.75 + 0.25,
          delay: `${Math.random() * 3}s`,
          duration: `${Math.random() * 4 + 3}s`,
        }
      })
    )
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto h-[190px] w-[190px] shrink-0 sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:mx-0 lg:h-[390px] lg:w-[390px]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7182ff]/70 blur-[34px] sm:blur-[42px]" />
        <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5969ff]/25 blur-[26px] sm:blur-[32px]" />

        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#93a0ff] shadow-[0_0_10px_rgba(130,145,255,0.95)]"
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

function ToolBadge({ label }) {
  const base =
    "grid h-7 w-7 place-items-center rounded-lg bg-white/95 shadow-[0_0_18px_rgba(255,255,255,0.18)] sm:h-8 sm:w-8"

  const textBase =
    "grid h-7 w-7 place-items-center rounded-lg bg-white text-[11px] font-black text-[#3b1774] sm:h-8 sm:w-8 sm:text-[12px]"

  if (label === "React") {
    return (
      <span className={base}>
        <svg viewBox="0 0 100 100" className="h-6 w-6 text-[#61DAFB]" fill="none">
          <circle cx="50" cy="50" r="7" fill="currentColor" />
          <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="5" />
          <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="5" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="5" transform="rotate(120 50 50)" />
        </svg>
      </span>
    )
  }

  if (label === "Next") {
    return (
      <span className={base}>
        <svg viewBox="0 0 100 100" className="h-6 w-6 text-black">
          <circle cx="50" cy="50" r="42" fill="currentColor" />
          <path d="M32 70V30h8l28 40h-8L40 42v28z" fill="white" />
        </svg>
      </span>
    )
  }

  if (label === "Node") {
    return (
      <span className={base}>
        <svg viewBox="0 0 100 100" className="h-6 w-6">
          <path d="M50 6 88 28v44L50 94 12 72V28z" fill="#68A063" />
          <text x="50" y="58" textAnchor="middle" fontSize="28" fontWeight="800" fill="white">
            N
          </text>
        </svg>
      </span>
    )
  }

  if (label === "Flutter") {
    return (
      <span className={base}>
        <svg viewBox="0 0 100 100" className="h-6 w-6">
          <path d="M56 8 18 46l13 13L82 8z" fill="#54C5F8" />
          <path d="M31 59 18 72l20 20h26z" fill="#01579B" />
          <path d="M57 34 31 59l13 13 38-38z" fill="#29B6F6" />
        </svg>
      </span>
    )
  }

  if (label === "Swift") {
    return (
      <span className={base}>
        <svg viewBox="0 0 100 100" className="h-6 w-6">
          <rect width="100" height="100" rx="22" fill="#F05138" />
          <path d="M72 67c-10 6-24 4-35-4-8-6-15-14-19-22 7 6 16 12 25 15-8-8-15-17-20-27 12 11 25 21 39 29 4-12-4-25-9-31 13 8 21 22 19 40z" fill="white" />
        </svg>
      </span>
    )
  }

  if (label === "Kotlin") {
    return (
      <span className={base}>
        <svg viewBox="0 0 100 100" className="h-6 w-6">
          <defs>
            <linearGradient id="kotlinGrad" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#7F52FF" />
              <stop offset="0.5" stopColor="#C711E1" />
              <stop offset="1" stopColor="#FF8B00" />
            </linearGradient>
          </defs>
          <path d="M12 12h76L50 50l38 38H12z" fill="url(#kotlinGrad)" />
        </svg>
      </span>
    )
  }

  if (label === "Python") {
    return (
      <span className={base}>
        <svg viewBox="0 0 100 100" className="h-6 w-6">
          <path d="M50 8c-20 0-22 9-22 9v15h25v7H19s-11 0-11 22 10 22 10 22h14V67s0-10 10-10h25s9 0 9-9V17s-2-9-26-9z" fill="#3776AB" />
          <path d="M50 92c20 0 22-9 22-9V68H47v-7h34s11 0 11-22-10-22-10-22H68v16s0 10-10 10H33s-9 0-9 9v31s2 9 26 9z" fill="#FFD43B" />
        </svg>
      </span>
    )
  }

  if (label === "OpenAI") {
    return (
      <span className={base}>
        <svg viewBox="0 0 100 100" className="h-6 w-6 text-black" fill="none">
          <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="8" />
          <path d="M50 18v64M18 50h64M28 28l44 44M72 28 28 72" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </span>
    )
  }

  if (label === "figma") {
    return (
      <span className={base}>
        <svg viewBox="0 0 38 56" className="h-6 w-5">
          <circle cx="14" cy="10" r="9" fill="#F24E1E" />
          <circle cx="24" cy="10" r="9" fill="#FF7262" />
          <circle cx="14" cy="28" r="9" fill="#A259FF" />
          <circle cx="24" cy="28" r="9" fill="#1ABCFE" />
          <circle cx="14" cy="46" r="9" fill="#0ACF83" />
        </svg>
      </span>
    )
  }

  if (label === "blender") {
    return (
      <span className={base}>
        <svg viewBox="0 0 100 100" className="h-6 w-6">
          <path d="M19 58c0-17 17-31 38-31 17 0 31 10 31 24S74 78 54 78 19 70 19 58z" fill="#EA7600" />
          <circle cx="57" cy="53" r="13" fill="#fff" />
          <circle cx="57" cy="53" r="7" fill="#265787" />
          <path d="M37 28 20 18M46 26 36 10" stroke="#EA7600" strokeWidth="9" strokeLinecap="round" />
        </svg>
      </span>
    )
  }

  if (label === "Ai") return <span className={textBase}>Ai</span>
  if (label === "Xd") return <span className={textBase}>Xd</span>
  if (label === "ML") return <span className={textBase}>ML</span>

  return <span className={textBase}>{label.slice(0, 2)}</span>
}

function DotPattern() {
  return (
    <div className="absolute bottom-0 right-0 grid grid-cols-8 gap-[6px] p-4 opacity-70 sm:gap-[7px]">
      {Array.from({ length: 64 }).map((_, i) => {
        const row = Math.floor(i / 8)
        const col = i % 8
        const strength = (row + col) / 14

        return (
          <span
            key={i}
            className="block rounded-full bg-white"
            style={{
              width: `${2 + strength * 5}px`,
              height: `${2 + strength * 5}px`,
              opacity: 0.12 + strength * 0.8,
            }}
          />
        )
      })}
    </div>
  )
}

function ServiceCard({ service, active, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{
        rotateX: 14,
        rotateY: -12,
        y: -14,
        scale: 1.04,
        transition: {
          type: "spring",
          stiffness: 220,
          damping: 15,
        },
      }}
      className={`
        group relative h-[285px] w-[220px] shrink-0 overflow-hidden rounded-[18px] p-4
        transition-all duration-500 will-change-transform hover:border-[#c8b5ff]
        sm:h-[330px] sm:w-[255px] sm:p-6
        md:h-[360px] md:w-[280px]
        lg:h-[420px] lg:w-[320px] lg:p-7
        ${
          active
            ? "border-2 border-[#a98cff] bg-[#3d1674] text-white shadow-[0_20px_60px_rgba(139,92,246,0.28)]"
            : "border border-white/15 bg-black text-white hover:shadow-[0_25px_60px_rgba(123,92,255,0.35)]"
        }
      `}
      style={{
        transformStyle: "preserve-3d",
        transformPerspective: 2000,
      }}
    >
      <motion.div className="absolute inset-0 rounded-[18px] pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: "-120%", opacity: 0 }}
          whileHover={{
            x: "220%",
            opacity: [0, 0.9, 0],
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute top-[-20%] left-0 h-[140%] w-[60px] rotate-[25deg] bg-gradient-to-r from-transparent via-white/45 to-transparent blur-[6px] sm:w-[70px]"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 rounded-[18px] opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[18px] border border-white/35" />
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-white/70 via-purple-200/40 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-200/60 via-white/20 to-transparent" />
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      </div>

      <div className="relative z-10 flex items-start justify-between">
        <h3
          className={
            active
              ? "text-[16px] font-semibold sm:text-[18px] lg:text-[22px]"
              : "text-[18px] font-semibold sm:text-[20px] lg:text-[24px]"
          }
        >
          {active ? service.title : service.id}
        </h3>

        <span className="text-[22px] leading-none sm:text-[24px] lg:text-[30px]">↗</span>
      </div>

      {active ? (
        <>
          <p className="relative z-10 mt-[35px] max-w-[220px] text-[11px] leading-[1.3] text-white/90 sm:mt-[50px] sm:text-[12px] md:text-[13px] lg:mt-[70px]">
            {service.description}
          </p>

          <div className="absolute bottom-4 left-4 right-4 z-10 grid grid-cols-2 gap-3 sm:bottom-5 sm:left-6 sm:right-6 sm:gap-5 lg:bottom-6 lg:left-7 lg:right-7">
            <div>
              <h4 className="mb-1.5 text-[12px] font-semibold tracking-wide sm:mb-2 sm:text-[13px] lg:text-[15px]">
                Services
              </h4>

              <ul className="space-y-1 text-[9px] leading-[1.25] text-white/95 sm:text-[10px] md:text-[11px] lg:text-[12px]">
                {service.services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-1.5 text-[12px] font-semibold tracking-wide sm:mb-2 sm:text-[13px] lg:text-[15px]">
                Tools
              </h4>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {service.tools.map((tool) => (
                  <ToolBadge key={tool} label={tool} />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="absolute bottom-7 left-5 z-10 max-w-[145px] text-[17px] font-semibold leading-[1.15] sm:bottom-8 sm:left-6 sm:text-[20px] lg:bottom-10 lg:left-8 lg:text-[24px]">
            {service.title}
          </h3>

          <DotPattern />
        </>
      )}
    </motion.article>
  )
}

export default function ServicesSection() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return

    const cards = Array.from(el.querySelectorAll("[data-card]"))
    let closestIndex = 0
    let closestDistance = Infinity

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - el.scrollLeft)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-12 text-white sm:py-16 lg:py-10"
    >
      <style>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(7px, -8px, 0) scale(1.2);
          }
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .card-perspective {
          perspective: 1200px;
        }
      `}</style>

      <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="grid gap-4 text-center lg:grid-cols-[390px_1fr_360px] lg:items-start lg:text-left"
        >
          <div />

          <h2 className="text-center text-[26px] font-normal tracking-[0.14em] sm:text-[32px] lg:text-[36px]">
            Our Services
          </h2>

          <p className="mx-auto max-w-[340px] text-center text-[12px] leading-[1.45] tracking-[0.05em] text-white/80 sm:max-w-[390px] sm:text-[14px] lg:mx-0 lg:max-w-[360px] lg:text-left lg:text-[15px]">
            We provide end-to-end digital solutions from design and development
            to deployment, helping businesses build powerful, scalable, and
            intelligent products.
          </p>
        </motion.div>

        <div className="mt-8 flex min-h-[390px] flex-col gap-8 lg:mt-12 lg:min-h-[520px] lg:flex-row lg:items-center">
          <ParticleBlob />

          <div className="min-w-0 flex-1 lg:pl-14 xl:pl-24">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="
                hide-scrollbar
                card-perspective
                flex
                min-h-[350px]
                snap-x
                snap-mandatory
                items-center
                gap-4
                overflow-x-auto
                scroll-smooth
                pb-10
                pt-8
                px-[calc((100vw-220px)/2)]
                sm:min-h-[410px]
                sm:gap-5
                sm:px-4
                md:min-h-[440px]
                md:gap-6
                lg:min-h-[520px]
                lg:max-w-[860px]
                lg:gap-7
                lg:px-2
                xl:max-w-[920px]
              "
              style={{ scrollPaddingLeft: "16px" }}
            >
              {services.map((service, index) => (
                <div key={service.id} data-card className="snap-center sm:snap-start">
                  <ServiceCard
                    service={service}
                    active={index === activeIndex}
                    index={index}
                  />
                </div>
              ))}
            </div>

            <p className="mt-1 text-center text-[10px] tracking-[0.2em] text-white/35 sm:hidden">
              SWIPE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}