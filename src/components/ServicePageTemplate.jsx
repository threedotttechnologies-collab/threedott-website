import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger)

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ServicePageTemplate({ data }) {
  const [activeFeature, setActiveFeature] = useState(0)

  const pageRef = useRef(null)
  const bubbleLayerRef = useRef(null)
  const heroRef = useRef(null)
  const featureRefs = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data?.id])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        )
      }

      featureRefs.current.forEach((item, index) => {
        if (!item) return

        gsap.fromTo(
          item,
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
            },
            delay: index * 0.04,
          }
        )
      })

      ScrollTrigger.refresh()
    }, pageRef)

    return () => ctx.revert()
  }, [data?.id])

  useEffect(() => {
    const page = pageRef.current
    const layer = bubbleLayerRef.current
    if (!page || !layer) return

    let lastTime = 0

    const createBubble = (e) => {
      const now = Date.now()
      if (now - lastTime < 28) return
      lastTime = now

      const rect = page.getBoundingClientRect()
      const size = Math.random() * 15 + 7

      const bubble = document.createElement("span")
      bubble.className = "pointer-events-none absolute rounded-full"
      bubble.style.left = `${e.clientX - rect.left}px`
      bubble.style.top = `${e.clientY - rect.top}px`
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`
      bubble.style.background =
        "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(105,132,255,0.62) 35%, rgba(73,80,255,0.16) 72%)"
      bubble.style.border = "1px solid rgba(150,175,255,0.38)"
      bubble.style.boxShadow =
        "0 0 22px rgba(90,130,255,0.75), 0 0 42px rgba(105,90,255,0.35)"
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

    page.addEventListener("mousemove", createBubble)
    return () => page.removeEventListener("mousemove", createBubble)
  }, [])

  if (!data) return null

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-black pb-20 pt-24 text-white sm:pt-28 lg:pb-24 lg:pt-32"
      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
    >
      <style>{`
        .service-title span {
          font-style: italic;
          font-weight: 700;
        }
      `}</style>

      <div
        ref={bubbleLayerRef}
        className="pointer-events-none absolute inset-0 z-[40]"
      />

      <div className="pointer-events-none absolute right-[-180px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#4F8BFF]/10 blur-[130px] sm:h-[520px] sm:w-[520px] lg:h-[600px] lg:w-[600px]" />
      <div className="pointer-events-none absolute bottom-[-260px] left-[-240px] h-[520px] w-[520px] rounded-full bg-[#4F8BFF]/5 blur-[140px] lg:h-[800px] lg:w-[800px]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.14 },
            },
          }}
          className="mb-24 grid min-h-[400px] grid-cols-1 gap-14 lg:mb-32 lg:grid-cols-[1fr_560px] lg:items-start lg:gap-24"
        >
          <div className="flex flex-col items-start lg:-translate-y-6">
            <motion.h1
              variants={fadeUp}
              className="service-title max-w-[760px] text-[39px] font-semibold uppercase leading-[41px] tracking-[0px] text-white sm:text-[52px] sm:leading-[54px] lg:text-[66px] lg:leading-[66px]"
            >
              {data.title}
            </motion.h1>

            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="mt-8 inline-flex h-[34px] items-center justify-center rounded-full bg-[#4F8BFF] px-6 text-[13px] font-normal text-white shadow-[0_0_18px_rgba(79,139,255,0.65)] transition-all duration-300 hover:scale-105 hover:bg-blue-600"
              >
                {data.buttonText || "Read more"}
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex w-full justify-start lg:justify-end lg:pt-36"
          >
            <p className="max-w-[520px] text-[16px] font-normal leading-[26px] tracking-[0.4px] text-white/90 sm:text-[19px] sm:leading-[28px] lg:text-[20px] lg:leading-[29px] lg:tracking-[0.5px]">
              {data.description}
            </p>
          </motion.div>
        </motion.div>

        <div className="mt-12 flex w-full flex-col sm:mt-14 lg:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex w-full flex-nowrap items-center justify-between gap-8 overflow-x-auto border-b border-white/20 pb-4 scrollbar-hide sm:mb-10"
          >
            {String(data.overlines || "")
              .split("·")
              .map((item, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap text-[15px] font-extralight uppercase leading-[24px] tracking-[0.4px] text-white/55 sm:text-[20px] sm:leading-[28px] lg:text-[24px] lg:leading-[30px] lg:tracking-[0.6px]"
                >
                  {item.trim()}
                </span>
              ))}
          </motion.div>

          <div className="flex flex-col">
            {(data.features || []).map((feature, idx) => {
              const isActive = activeFeature === idx

              return (
                <motion.div
                  key={idx}
                  ref={(el) => (featureRefs.current[idx] = el)}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`group flex cursor-pointer items-center justify-between border-b border-white/10 transition-all duration-300 ${isActive ? "py-7 sm:py-9" : "py-6 sm:py-7"
                    }`}
                  onMouseEnter={() => setActiveFeature(idx)}
                  onClick={() => setActiveFeature(idx)}
                >
                  <h3
                    className={`flex items-center gap-4 text-[26px] font-bold uppercase leading-[30px] tracking-[0px] transition-colors duration-300 sm:text-[37px] sm:leading-[39px] lg:text-[52px] lg:leading-[52px] ${isActive
                        ? "text-white"
                        : "text-gray-700 group-hover:text-gray-400"
                      }`}
                  >
                    <span className="text-[14px] font-normal sm:text-[16px]">
                      °
                    </span>
                    {feature}
                  </h3>

                  <div
                    className={`transition-all duration-500 ${isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                      }`}
                  >
                    <ChevronRight className="h-5 w-5 text-[#4F8BFF] sm:h-6 sm:w-6" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}