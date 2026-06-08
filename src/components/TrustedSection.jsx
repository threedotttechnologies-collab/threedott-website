const logos = [
  { src: "/logos/logo1.jpg", alt: "SatAgro" },
  { src: "/logos/logo2.png", alt: "Rouge International" },
  { src: "/logos/logo3.png", alt: "CropGen" },
]

export default function TrustedSection() {
  return (
    <section className="bg-black py-20 lg:py-32 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-xl md:text-2xl font-bold tracking-widest text-white uppercase">
          Trusted by industry
        </h2>
        <p className="text-xs text-gray-500 mt-2 tracking-wider">
          Powering innoavation for the go getters.
        </p>

        <div className="mt-20 relative h-64 flex justify-center items-end pb-10">
          {/* Arc glow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-[100%] border-b shadow-[0_30px_60px_rgba(123,92,245,0.4)] border-[#B09EFF] pointer-events-none opacity-80" />
          
          <div className="flex gap-6 md:gap-12 lg:gap-20 items-end pb-6 z-10">
            {logos.map((logo, i) => {
              const middle = Math.floor(logos.length / 2)
              const distance = Math.abs(middle - i)
              const translateY = distance * distance * 12

              return (
                <div
                  key={logo.alt}
                  className="flex h-16 w-28 items-center justify-center rounded-xl bg-white/5 px-4 py-3 opacity-80 transition hover:bg-white/10 hover:opacity-100 md:h-20 md:w-36"
                  style={{ transform: `translateY(-${translateY}px)` }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
