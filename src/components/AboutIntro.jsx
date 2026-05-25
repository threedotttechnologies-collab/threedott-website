export default function AboutIntro() {
  return (
    <section className="bg-black py-20 lg:py-32 text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Headline */}
        <div className="max-w-4xl mb-24">
          <p className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
             Introduction
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
            ThreeDot Technology operates at the intersection of <span className="text-gray-500">advanced engineering and intelligent systems.</span>
          </h2>
        </div>

        {/* Map & Text Row */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Map Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm aspect-[4/3] flex items-center justify-center">
               {/* 
                 A placeholder for the dotted map of Maharashtra. 
                 Using a generic dotted grid overlay to mimic the image.
               */}
               <div className="w-full h-full relative" style={{
                  backgroundImage: 'radial-gradient(circle at 10px 10px, rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)'
               }}>
                  {/* Glowing blue dot */}
                  <div className="absolute top-[40%] left-[30%] w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(79,139,255,0.8)]" />
               </div>
            </div>
          </div>

          {/* Right: Paragraph */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium">
              Founded by engineers and problem-solvers, we focus on building scalable software, AI systems, and geospatial platforms that drive real-world impact across industries.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}
