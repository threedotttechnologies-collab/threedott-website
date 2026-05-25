import Logo from './Logo'

const reasons = [
  { id: '01', title: 'End-to-End Digital Solutions' },
  { id: '02', title: 'Modern Technology Stack' },
  { id: '03', title: 'AI-Powered Development' },
  { id: '04', title: 'Scalable Product Architecture' },
]

export default function WhySection() {
  return (
    <section className="bg-black py-20 lg:py-32 relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* Extra glow depth on top of global bg */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-brand-blue/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Header content centered */}
        <div className="text-center mb-16 flex flex-col items-center justify-center gap-4 pt-10">
          <div className="flex flex-col items-center justify-center">
             <Logo />
             <span className="text-[10px] text-gray-400 tracking-widest uppercase mt-2">Technology</span>
          </div>
          <h2 className="text-xl md:text-2xl font-light text-white tracking-widest mt-2 uppercase">
            Why Choose ThreeDott
          </h2>
        </div>

        {/* Reason cards row */}
        <div className="flex justify-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-4 max-w-5xl mx-auto">
            {reasons.map((r) => (
              <div
                key={r.id}
                className="lg:w-48 xl:w-56 bg-gradient-to-b from-[#151D3B] to-[#0D1226] border border-blue-400/20 rounded-xl p-5 hover:border-blue-400/50 transition-all duration-300 shadow-[0_0_15px_rgba(79,139,255,0.15)] flex flex-col"
              >
                <div className="bg-[#2a45ff]/20 text-[#6ea0ff] text-[10px] sm:text-xs font-bold w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded mb-3 sm:mb-4">
                  {r.id}
                </div>
                <h3 className="text-sm sm:text-[15px] font-medium text-white/90 leading-snug">
                  {r.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
