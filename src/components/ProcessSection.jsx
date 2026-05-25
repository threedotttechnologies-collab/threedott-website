export default function ProcessSection() {
  const steps = [
    { id: '01', title: 'Discover', desc: 'Understanding your idea and requirements.' },
    { id: '02', title: 'Design', desc: 'Creating user-focused product experiences.' },
    { id: '03', title: 'Develop', desc: 'Building robust and scalable digital products.' }
  ]

  return (
    <section className="bg-black py-20 lg:py-32 text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Our Process
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => {
            const isActive = i === 0;
            return (
              <div 
                key={step.id} 
                className={`py-8 lg:py-12 border-t border-white/10 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100 cursor-pointer'}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono text-gray-500 tracking-wider">
                    {step.id}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white font-sans opacity-90">
                  {step.desc}
                </p>
              </div>
            )
          })}
          <div className="border-t border-white/10 w-full" />
        </div>
      </div>
    </section>
  )
}
