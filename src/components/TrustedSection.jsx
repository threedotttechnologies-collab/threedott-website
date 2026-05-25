export default function TrustedSection() {
  const logos = ['LOGO', 'LOGO', 'LOGO', 'LOGO', 'LOGO', 'LOGO', 'LOGO']

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
          
          <div className="flex gap-4 md:gap-10 lg:gap-16 items-end pb-6 z-10">
            {logos.map((logo, i) => {
              const middle = Math.floor(logos.length / 2);
              const distance = Math.abs(middle - i);
              const translateY = distance * distance * 8; // Arch effect

              return (
                <div 
                  key={i}
                  className="text-white/30 font-black text-2xl md:text-4xl tracking-widest hover:text-white transition-colors cursor-default"
                  style={{ transform: `translateY(-${translateY}px)` }}
                >
                  {logo}
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
