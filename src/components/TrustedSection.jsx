import { motion } from "framer-motion";

const logos = [
  { src: "/logos/agrova.jpeg", alt: "agrova" },
  { src: "/logos/ano.jpeg", alt: "ano" },
  { src: "/logos/biodrops.jpeg", alt: "Biodrops" },
  { src: "/logos/cropydeals.jpeg", alt: "cropydeals" },
  { src: "/logos/invasio.jpeg", alt: "invasio" },
  { src: "/logos/nexus.jpeg", alt: "nexus" },
  { src: "/logos/logo1.jpg", alt: "SatAgro" },
  { src: "/logos/logo2.png", alt: "Rouge International" },
  { src: "/logos/logo3.png", alt: "CropGen" },
];

export default function TrustedSection() {
  const platformWidth = 850;
  const platformHeight = 190;

  const radiusX = platformWidth / 2;
  const radiusY = platformHeight / 2;

  const duration = 20;

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,92,245,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#B09EFF]">
            Our Partners
          </p>

          <h2 className="text-3xl font-semibold uppercase tracking-widest text-white md:text-5xl">
            Trusted by industry
          </h2>

          <p className="mt-4 text-sm tracking-wide text-gray-400 md:text-base">
            Powering innovation for the go getters.
          </p>
        </div>

        <div className="relative mx-auto mt-20 h-[420px] max-w-[1000px] overflow-hidden">
          <div className="absolute bottom-16 left-1/2 h-[190px] w-[850px] -translate-x-1/2 rounded-[100%] border-b border-[#B09EFF]/80 shadow-[0_35px_100px_rgba(123,92,245,0.5)] opacity-90" />

          <div className="absolute bottom-10 left-1/2 h-28 w-[620px] -translate-x-1/2 rounded-full bg-[#7B5CF5]/25 blur-3xl" />

          <div className="absolute bottom-[160px] left-1/2 h-0 w-0">
            {logos.map((logo, index) => {
              const startAngle = 200 + (360 / logos.length) * index;

              const angles = [
                startAngle,
                startAngle - 45,
                startAngle - 90,
                startAngle - 135,
                startAngle - 180,
                startAngle - 225,
                startAngle - 270,
                startAngle - 315,
                startAngle - 360,
              ];

              return (
                <motion.div
                  key={logo.alt}
                  className="absolute left-0 top-0"
                  animate={{
                    x: angles.map(
                      angle => radiusX * Math.cos((angle * Math.PI) / 180)
                    ),
                    y: angles.map(
                      angle => radiusY * Math.sin((angle * Math.PI) / 180)
                    ),
                    scale: [0.75, 0.85, 1, 1.08, 1, 0.85, 0.75, 0.65, 0.75],
                    opacity: [0.45, 0.65, 0.9, 1, 0.9, 0.65, 0.45, 0.3, 0.45],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="flex h-16 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-white/95 p-3 shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-md md:h-20 md:w-36 md:p-4">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </section>
  );
}