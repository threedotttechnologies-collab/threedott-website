export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] bg-black text-white flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Background massive glowing particle sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute inset-x-20 inset-y-20 bg-brand-purple/20 blur-[80px] rounded-full" />
        {/* Simulate Particles with a background image or css if needed. For now the glowing drop blob matches the vibe. */}
        <div className="w-full h-full object-cover opacity-60 mix-blend-screen" style={{ backgroundImage: "radial-gradient(circle at center, rgba(123, 92, 245, 0.4) 0%, transparent 60%)" }} />
      </div>

      {/* Massive subtle background watermark text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[12rem] lg:text-[18rem] font-black text-white/[0.03] uppercase tracking-widest leading-none">
          ThreeDott
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 relative z-10 flex flex-col pt-10 lg:pt-20">
        
        {/* Heading Container */}
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white/90 font-serif">
            Three <span className="italic">Steps</span>
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white pl-10 md:pl-32 lg:pl-48">
            <span className="font-bold italic">Infinite Digital</span> Possibilities
          </h2>
          <div className="text-right mt-6 pr-10">
            <p className="text-xl lg:text-3xl font-bold tracking-wider text-white flex items-center justify-end gap-3">
              <span className="text-brand-purple">·</span>Design 
              <span className="text-gray-600">·</span><span className="text-gray-500">Develop</span> 
              <span className="text-gray-700">·</span><span className="text-gray-600">Deploy</span>
            </p>
          </div>
        </div>

        {/* Bottom row: CTA and Stats */}
        <div className="mt-32 lg:mt-48 flex flex-col lg:flex-row items-end justify-between gap-10">
          
          {/* Left: Button */}
          <div className="w-full lg:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-brand-blue text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(79,139,255,0.4)]"
            >
              Start Your Project
            </a>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-8 lg:gap-16">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white">50+</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-tight mt-1">Projects<br/>Delivered</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white">100%</span>
              <span className="text-[10px] text-brand-blue uppercase tracking-widest leading-tight mt-1">Client<br/>Satisfaction</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white">24/7</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-tight mt-1">Support<br/>Available</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
