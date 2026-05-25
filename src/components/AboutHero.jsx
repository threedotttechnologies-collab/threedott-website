export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] bg-black text-white flex flex-col justify-center overflow-hidden pt-28 pb-20">
      
      {/* Background glow resembling image */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none">
        <div className="absolute -top-[100px] -left-[10%] w-[500px] h-[500px] bg-brand-blue/30 blur-[130px] rounded-full" />
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-[#B09EFF]/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans tracking-tight leading-tight text-white/95">
          We are a technology-driven company transforming complex challenges into scalable digital solutions.
        </h1>
        
        <div className="mt-12">
          <a
            href="/#work"
            className="inline-flex items-center justify-center bg-brand-blue/90 border border-blue-400/30 text-white font-medium text-xs tracking-wider px-8 py-2.5 rounded-full hover:bg-brand-blue transition-all duration-300 shadow-[0_4px_20px_rgba(79,139,255,0.4)]"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  )
}
