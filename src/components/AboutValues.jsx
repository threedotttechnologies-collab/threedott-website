export default function AboutValues() {
  const cards = [
    {
      title: 'Engineering-First Approach',
      desc: 'We treat businesses like code bases. Efficient, robust, and built to scale.',
      isActive: true
    },
    {
      title: 'Advanced Technology',
      desc: 'From custom React apps to enterprise scale AI solutions.',
      isActive: false
    },
    {
      title: 'Real-World Impact',
      desc: 'Our solutions conquer problems through innovation and solid infrastructure.',
      isActive: false
    }
  ]

  return (
    <section className="bg-black py-20 lg:py-28 text-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-base sm:text-lg font-medium tracking-widest text-white">
            Things that matter.
          </h2>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div 
              key={i}
              className={`flex flex-col p-8 sm:p-10 rounded-2xl border transition-all duration-300 h-64 sm:h-72 ${
                card.isActive 
                  ? 'bg-gradient-to-br from-[#12182B] to-[#0A0D18] border-brand-blue/30 shadow-[0_10px_40px_rgba(79,139,255,0.1)]' 
                  : 'bg-black border-white/5 opacity-80 hover:opacity-100 hover:border-white/10'
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-auto tracking-tight leading-tight max-w-[200px]">
                {card.title}
              </h3>
              
              <p className={`text-[10px] sm:text-xs leading-relaxed tracking-wider mt-4 ${
                 card.isActive ? 'text-blue-100/70' : 'text-gray-500'
              }`}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
