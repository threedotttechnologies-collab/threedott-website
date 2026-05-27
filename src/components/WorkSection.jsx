import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: "01",
    name: "CropGen Platform",
    image: "/mockup_1.png",
    tags: ["Web Design", "App Design", "AI Development"],
  },
  {
    id: "02",
    name: "GIS & Mapping Suite",
    image: "/mockup_2.png",
    tags: ["Web Design", "App Design", "AI Development"],
  },
  {
    id: "03",
    name: "Analytics Dashboard",
    image: "/mockup_3.png",
    tags: ["Web Design", "App Design", "AI Development"],
  },
  {
    id: "04",
    name: "AI Dev Pipeline",
    image: "/mockup4.png",
    tags: ["Web Design", "App Design", "AI Development"],
  },
  {
    id: "05",
    name: "Strategy Toolkit",
    image: "/mockup5.png",
    tags: ["Web Design", "App Design", "AI Development"],
  },
]

const tagIcons = {
  "Web Design": (
    <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
      <path d="M2 2h10v10H2z" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M5 2v10M9 2v10M2 5h10M2 9h10"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  ),

  "App Design": (
    <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
      <rect
        x="3"
        y="1"
        width="8"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="7" cy="11" r="0.8" fill="currentColor" />
    </svg>
  ),

  "AI Development": (
    <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 1v3M7 10v3M1 7h3M10 7h3M3 3l2 2M9 9l2 2M3 11l2-2M9 5l2-2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle
        cx="7"
        cy="7"
        r="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  ),
}

function MobileWorkCarousel() {
  const loopProjects = [...projects, ...projects]

  return (
    <div className="md:hidden">
      <style>{`
        @keyframes mobileWorkMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .mobile-marquee-wrap {
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          touch-action: pan-x;
        }

        .mobile-marquee-wrap::-webkit-scrollbar {
          display: none;
        }

        .mobile-marquee-track {
          width: max-content;
          display: flex;
          gap: 20px;
          padding: 0 20px 16px;
          animation: mobileWorkMarquee 28s linear infinite;
          will-change: transform;
        }

        .mobile-marquee-wrap:active .mobile-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mobile-marquee-wrap -mx-5">
        <div className="mobile-marquee-track">
          {loopProjects.map((project, index) => (
            <motion.article
              key={`${project.id}-${index}`}
              whileTap={{ scale: 0.97 }}
              className="relative h-[360px] w-[260px] shrink-0 overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
            >
              <img
                src={project.image}
                alt={project.name}
                draggable="false"
                className="h-full w-full object-cover select-none"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

              <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/80 backdrop-blur-md">
                  {project.id}
                </span>

                <span className="text-xl text-white/80">↗</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-[24px] font-semibold leading-tight text-white">
                  {project.name}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-medium text-white/85 backdrop-blur-md"
                    >
                      {tagIcons[tag]}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-[10px] tracking-[0.3em] text-white/30">
        SWIPE / AUTO SCROLL
      </p>
    </div>
  )
}

export default function WorkSection() {
  const [hovered, setHovered] = useState(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const activeProject = projects.find((p) => p.id === hovered)

  return (
    <section
      id="work"
      onMouseMove={(e) => {
        setMouse({
          x: e.clientX,
          y: e.clientY,
        })
      }}
      className="relative overflow-hidden border-t border-white/10 bg-black py-16 text-white sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute right-[-12%] top-[18%] h-[420px] w-[420px] rounded-full bg-[#6d5cff]/20 blur-[120px]" />

      <AnimatePresence>
        {activeProject && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -4,
              x: mouse.x + 30,
              y: mouse.y - 140,
            }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 20,
            }}
            className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-[240px] w-[360px] overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.7)] backdrop-blur-md md:block"
          >
            <motion.img
              src={activeProject.image}
              alt={activeProject.name}
              className="h-full w-full object-cover"
              animate={{
                scale: [1.05, 1.12, 1.05],
                x: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/40" />

            <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-[11px] font-medium tracking-[0.2em] text-white/85 backdrop-blur-md">
              {activeProject.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 pt-4 sm:mb-20 md:flex-row md:items-end md:justify-between lg:pt-10">
          <h2 className="text-[30px] font-semibold tracking-[0.14em] text-white sm:text-4xl lg:text-[48px]">
            Featured Work
          </h2>

          <p className="max-w-md text-[13px] leading-[1.8] tracking-[0.08em] text-gray-400 sm:text-[14px] md:text-right">
            Multi-disciplinary team of professionals to give cohesive works,
            under one modern ecosystem.
          </p>
        </div>

        <MobileWorkCarousel />

        <div className="hidden w-full md:block">
          <div className="border-t border-white/10">
            {projects.map((project) => {
              const active = hovered === project.id

              return (
                <motion.div
                  key={project.id}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.01 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                  className={`group relative grid cursor-pointer grid-cols-[70px_minmax(300px,1fr)_auto] items-center gap-7 border-b border-white/10 py-8 transition-all duration-300 ${active
                      ? "rounded-2xl bg-white/[0.055] px-5 shadow-[0_20px_60px_rgba(120,92,255,0.1)]"
                      : ""
                    }`}
                >
                  <span
                    className={`text-[15px] font-bold tracking-[0.18em] transition-colors ${active ? "text-white" : "text-gray-500"
                      }`}
                  >
                    {project.id}
                  </span>

                  <span
                    className={`min-w-0 text-[24px] font-semibold leading-tight transition-colors lg:text-[22px] ${active ? "text-white" : "text-gray-300"
                      }`}
                  >
                    {project.name}
                  </span>

                  <div className="flex flex-wrap justify-end gap-3 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-medium tracking-wide transition-all ${active
                            ? "border-white/20 bg-white/10 text-white"
                            : "border-white/10 bg-transparent text-gray-400"
                          }`}
                      >
                        {tagIcons[tag]}
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    animate={{
                      opacity: active ? 1 : 0,
                      scaleX: active ? 1 : 0,
                    }}
                    transition={{ duration: 0.35 }}
                    className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-[#a98cff] to-transparent"
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}