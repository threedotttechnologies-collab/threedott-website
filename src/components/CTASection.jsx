export default function CTASection() {
  return (
    <section id="contact" className="bg-black py-20 lg:py-32 relative overflow-hidden border-t border-white/5 min-h-[60vh] flex items-center">
      
      {/* Background glow behind astronaut */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating Astronaut */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[5%] lg:right-[10%] w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] pointer-events-none z-0">
        <img 
          src="/astronaut.png" 
          alt="Floating Astronaut" 
          className="w-full h-auto object-contain animate-float drop-shadow-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 h-full">
          
          {/* Left Content */}
          <div className="max-w-xl relative w-full pt-10">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight">
              Let's Build Something<br />
              <span className="italic">That Matters</span>
            </h2>
            
            <div className="mt-16 flex items-center gap-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#4F8BFF] text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-blue-500 transition-all shadow-[0_4px_20px_rgba(79,139,255,0.4)]"
              >
                Start a Project
              </a>
              <a
                href="/work"
                className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-gray-300 transition-colors group"
              >
                Explore Our Work 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Text (Top Right Aligned) */}
          <div className="lg:w-1/3 xl:w-1/4 text-left lg:text-right pt-6 lg:pt-14 relative z-20 mix-blend-difference lg:mix-blend-normal">
             <p className="text-[11px] lg:text-xs text-gray-400 lg:text-gray-500 lg:max-w-[250px] ml-auto leading-relaxed md:uppercase tracking-wider font-medium">
               We've built systems for growth and for the greater impact. What will we build with you?
             </p>
          </div>

        </div>
      </div>
    </section>
  )
}
