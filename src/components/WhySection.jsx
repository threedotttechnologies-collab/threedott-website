import { motion } from "framer-motion"
import PlanetBlob from "./PlanetBlob"
import Logo from "./Logo"

const reasons = [
  {
    id: "01",
    title: "End-to-End Digital Solutions",
  },
  {
    id: "02",
    title: "Modern Technology Stack",
  },
  {
    id: "03",
    title: "AI-Powered Development",
  },
  {
    id: "04",
    title: "Scalable Product Architecture",
  },
]

export default function WhySection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-20 text-white sm:py-24 lg:py-32">
      {/* BACKGROUND BEAM */}
      <motion.img
        src="/Group 45.png"
        alt="Beam"
        className="pointer-events-none absolute left-[-45%] top-[-15%] z-[1] w-[45rem] max-w-none opacity-35 mix-blend-screen sm:left-[-30%] sm:w-[58rem] lg:left-[-15%] lg:top-[-18%] lg:w-[70rem]"
        animate={{
          x: [-20, 20, -20],
          y: [-10, 10, -10],
          rotate: [-4, 2, -4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* PLANET BLOB BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center opacity-90">
        <PlanetBlob />
      </div>

      <div className="absolute inset-0 z-[3] bg-black/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center pt-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex h-[230px] w-[340px] flex-col items-center justify-center"
          >
            <div className="scale-[1.45] sm:scale-[1.6] lg:scale-[1.75]">
              <Logo />
            </div>

            <span className="mt-7 font-['Poppins'] text-[36px] font-normal leading-none tracking-[0.04em] text-white">
              Technology
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-3 text-center font-['Poppins'] text-[36px] font-normal leading-none tracking-[0.04em] text-white"
          >
            Why Choose ThreeDott
          </motion.h2>
        </div>

        {/* CARDS */}
        <div className="relative mt-24 flex justify-center">
          <div className="grid w-full max-w-[1340px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.018,
                  rotateX: 5,
                  rotateY: i % 2 === 0 ? -4 : 4,
                  transition: {
                    type: "spring",
                    stiffness: 230,
                    damping: 16,
                  },
                }}
                className="
                  group
                  relative
                  h-[155px]
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#9fbbff]/15
                  bg-[#071b48]/5
                  p-5
                  shadow-[0_0_28px_rgba(72,120,255,0.18)]
                  backdrop-blur-[1px]
                  transition-all
                  duration-500

                  before:pointer-events-none
                  before:absolute
                  before:inset-0
                  before:bg-[linear-gradient(180deg,rgba(40,88,180,0.32),rgba(6,18,48,0.42))]
                  before:opacity-100

                  after:pointer-events-none
                  after:absolute
                  after:inset-0
                  after:bg-[radial-gradient(circle_at_center,rgba(120,150,255,0.12),transparent_60%)]
                  after:opacity-100

                  hover:border-[#c9d8ff]
                  hover:bg-[#0b255e]/80
                  hover:shadow-[0_20px_70px_rgba(77,130,255,0.32)]

                  sm:h-[165px]
                  lg:h-[175px]
                "
                style={{
                  transformStyle: "preserve-3d",
                  transformPerspective: 1600,
                }}
              >
                {/* SHINE EFFECT */}
                <div className="absolute inset-0 overflow-hidden rounded-[18px]">
                  <div className="absolute left-[-130%] top-0 h-full w-[70%] rotate-[24deg] bg-gradient-to-r from-transparent via-white/16 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
                </div>

                {/* NUMBER */}
                <div className="relative z-10 flex h-8 w-12 items-center justify-center rounded-[4px] bg-[#2d67f6] font-['Poppins'] text-[16px] font-normal leading-none tracking-[0.04em] text-white shadow-[0_0_18px_rgba(45,103,246,0.45)]">
                  {r.id}
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-9 max-w-[250px] font-['Poppins'] text-[20px] font-normal leading-[1.35] tracking-[0.04em] text-white sm:text-[21px] lg:text-[22px]">
                  {r.title}
                </h3>

                {/* SOFT CARD EDGE */}
                <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-white/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}