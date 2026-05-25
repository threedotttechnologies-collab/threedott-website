export default function AboutPrinciples() {
  const principles = [
    { id: '01', title: 'Technology should simplify complexity not add to it.' },
    { id: '02', title: 'AI should enhance human decision-making.' },
    { id: '03', title: 'Innovation must deliver measurable results.' },
    { id: '04', title: 'Speed matters — but quality matters more.' },
  ]

  return (
    <section className="bg-black py-20 lg:py-28 text-white relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center gap-2">
          <h2 className="text-sm font-semibold tracking-widest text-white">
            How We Think
          </h2>
          <p className="text-[10px] text-gray-500 max-w-xs tracking-widest uppercase">
            We don't just build products — we build systems that scale.
          </p>
        </div>

        {/* Principles List */}
        <div className="flex flex-col border-t border-white/5 pt-10">
          {principles.map((principle) => (
            <div 
              key={principle.id}
              className="flex items-center gap-8 py-8 lg:py-10 border-b border-white/5 opacity-80 hover:opacity-100 transition-opacity cursor-default"
            >
              <span className="text-xs font-mono text-gray-600 shrink-0">
                {principle.id}
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-white/95">
                {principle.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
