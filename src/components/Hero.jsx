import { motion } from "framer-motion"
import PlanetBlob from "./PlanetBlob"

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-black text-white pt-24 sm:pt-28 lg:pt-8"
    >
      {/* IMAGE BEAM */}
      <motion.img
        src="/Group 45.png"
        alt="Beam"
        className="absolute left-[-55%] top-[-10%] z-[1] w-[42rem] max-w-none pointer-events-none select-none opacity-50 mix-blend-screen sm:left-[-35%] sm:w-[55rem] md:left-[-28%] md:top-[-15%] md:w-[65rem] lg:left-[-18%] lg:top-[-18%] lg:w-[70rem] lg:opacity-70"
        animate={{
          x: [-20, 30, -20],
          y: [-10, 20, -10],
          rotate: [-6, 2, -6],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="astronaut-shadow-beam" />

      {/* BIG BACK TEXT */}
      <div className="absolute left-1/2 top-[9%] z-0 -translate-x-1/2 pointer-events-none select-none sm:top-[10%] lg:left-[5%] lg:translate-x-0">
        <h1 className="font-['Inter'] text-[52px] font-medium leading-none tracking-[0.04em] text-white/[0.045] uppercase sm:text-[90px] md:text-[125px] lg:text-[200px]">
          THREEDOTT
        </h1>
      </div>

      {/* ASTRONAUT */}
      <motion.img
        src="/Group.png"
        alt="Astronaut"
        className="absolute right-[-24%] top-[8%] z-20 w-[78vw] max-w-[360px] object-contain pointer-events-none sm:right-[-8%] sm:top-[6%] sm:w-[52vw] sm:max-w-[460px] md:right-[-2%] md:w-[46vw] md:max-w-[560px] lg:right-[2%] lg:top-[5%] lg:w-[36vw] lg:max-w-[690px]"
        animate={{
          y: [0, -18, 0],
          x: [0, 10, 0],
          rotate: [0, 2.5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <PlanetBlob />

      <div className="relative z-30 mx-auto max-w-[1540px] px-5 pt-[30vh] sm:px-8 sm:pt-[32vh] md:px-10 md:pt-[30vh] lg:px-14 lg:pt-[28vh]">
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-['Poppins'] text-[34px] leading-[1.05] tracking-[0.04em] sm:ml-[6%] sm:text-[44px] md:text-[50px] lg:ml-[10%] lg:text-[56px]"
          >
            <span className="font-light">Three</span>{" "}
            <span className="font-semibold italic">Steps</span>
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-6 max-w-[760px] font-['Poppins'] text-[38px] leading-[1.05] tracking-[0.04em] sm:mt-8 sm:text-[48px] md:text-[54px] lg:ml-auto lg:mt-10 lg:max-w-none lg:pr-[5%] lg:text-right lg:text-[56px]"
          >
            <span className="font-semibold italic">Infinite</span>{" "}
            <span className="font-semibold italic">Digital</span>{" "}
            <span className="font-light">Possibilities</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-7 flex justify-start sm:mt-9 lg:justify-end lg:pr-[4%]"
          >
            <p className="flex flex-wrap items-center gap-y-3 text-[26px] font-bold italic tracking-wide sm:text-[34px] md:text-[42px] lg:text-[clamp(1.55rem,2.5vw,3.1rem)]">
              <span className="transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.75)] cursor-default">
                Design
              </span>

              <span className="mx-3 text-white/15 sm:mx-5">•</span>

              <span className="text-white/15 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_18px_rgba(120,140,255,0.9)] cursor-default">
                Develop
              </span>

              <span className="mx-3 text-white/15 sm:mx-5">•</span>

              <span className="text-white/15 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_18px_rgba(180,180,255,0.9)] cursor-default">
                Deploy
              </span>
            </p>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-10 sm:mt-[7vh] lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="max-w-[560px] text-[12px] leading-[1.9] tracking-[0.03em] text-white/60 sm:text-[13px]">
              We design, develop, and deploy modern websites, apps, and business
              platforms. Powered by AI intelligence to help businesses grow faster.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-[#4B86FF] px-7 py-3 text-[13px] font-medium text-white shadow-[0_0_35px_rgba(75,134,255,0.55)] transition duration-300 hover:scale-105 hover:bg-[#3f78ee] sm:px-8"
            >
              Start Your Project
            </a>
          </div>

          <div className="grid w-full grid-cols-3 gap-3 pb-10 sm:gap-7 lg:w-auto lg:flex lg:items-end lg:gap-10 lg:pb-1">
            <Stat number="50" suffix="+" text="Projects Delivered" />
            <Stat number="100" suffix="%" text="Client Satisfaction" />
            <Stat number="24" suffix="/7" text="Support Available" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ number, suffix, text }) {
  return (
    <div className="flex min-h-[84px] flex-col items-start justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-4 backdrop-blur-sm sm:min-h-0 sm:flex-row sm:items-center sm:gap-3 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0">
      <h3 className="text-[24px] font-bold leading-none tracking-tight text-white sm:text-[30px] lg:text-[34px]">
        {number}
        <span className="text-[#7C3CFF]">{suffix}</span>
      </h3>

      <p className="mt-2 text-[9px] font-medium uppercase leading-[1.35] tracking-[0.06em] text-white/60 sm:mt-0 sm:text-[11px] sm:normal-case sm:tracking-[0.04em] sm:text-white/70">
        {text}
      </p>
    </div>
  )
}