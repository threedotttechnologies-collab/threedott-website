import { useRef, useEffect, useState } from 'react'

const services = [
  {
    id: '01',
    title: 'UI / UX Design',
    description:
      'End-to-end product design—from research and user flows to modern interfaces and developer-ready design systems.',
    services: ['User Research & Strategy', 'UX Flows & Wireframes', 'UI Design Systems', 'Prototyping & Interaction Design'],
    tools: ['Figma', 'Xd', 'Ai', 'Blender'],
    accent: 'purple',
  },
  {
    id: '02',
    title: 'Web Development',
    description:
      'High-performance websites and applications built with modern frontend and backend technologies.',
    services: ['Landing Pages & Marketing Sites', 'Custom Web Applications', 'CMS & Headless Integrations', 'Performance & SEO'],
    tools: ['React', 'Next.js', 'Node'],
    accent: 'dark',
  },
  {
    id: '03',
    title: 'App Development',
    description:
      'Scalable mobile and web applications designed for reliability, growth, and great user experience.',
    services: ['iOS & Android Apps', 'Cross-Platform (Flutter)', 'ERP & CRM Systems', 'API & Backend Engineering'],
    tools: ['Flutter', 'Swift', 'Kotlin'],
    accent: 'dark',
  },
  {
    id: '04',
    title: 'AI Development',
    description:
      'Integrate intelligence into your product with custom ML models, LLM APIs, and data pipelines.',
    services: ['Machine Learning Models', 'LLM & Prompt Engineering', 'Data Pipelines', 'Process Automation'],
    tools: ['Python', 'OpenAI', 'TF'],
    accent: 'dark',
  },
]

function ToolBadge({ label }) {
  const colorMap = {
    Figma: 'bg-pink-600',
    Xd: 'bg-red-500',
    Ai: 'bg-orange-500',
    Blender: 'bg-orange-600',
    React: 'bg-blue-500',
    'Next.js': 'bg-black border border-white/20',
    Node: 'bg-green-600',
    Flutter: 'bg-blue-400',
    Swift: 'bg-orange-400',
    Kotlin: 'bg-purple-500',
    Python: 'bg-yellow-500',
    OpenAI: 'bg-teal-600',
    TF: 'bg-yellow-600',
  }
  return (
    <span
      className={`inline-flex items-center justify-center text-white text-[10px] font-bold px-2 py-1 rounded ${
        colorMap[label] || 'bg-gray-600'
      }`}
    >
      {label}
    </span>
  )
}

function ServiceCard({ service, style }) {
  const isPurple = service.accent === 'purple'

  return (
    <div
      style={style}
      className={`relative shrink-0 w-64 xl:w-72 rounded-3xl p-6 flex flex-col gap-4 snap-start transition-transform duration-300 hover:-translate-y-2 cursor-pointer ${
        isPurple
          ? 'bg-[#B09EFF] text-black'
          : 'bg-[#1C1C1E] text-white'
      }`}
    >
      {/* Number + Arrow */}
      <div className="flex items-start justify-between">
        <span className={`text-xs font-semibold ${isPurple ? 'text-black/60' : 'text-white/40'}`}>
          {service.id}
        </span>
        <span className={`text-lg ${isPurple ? 'text-black' : 'text-white'}`}>↗</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-black leading-tight">{service.title}</h3>

      {/* Description */}
      <p className={`text-sm leading-relaxed ${isPurple ? 'text-black/70' : 'text-white/60'}`}>
        {service.description}
      </p>

      {/* Services list */}
      <div className="mt-auto">
        <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${isPurple ? 'text-black/50' : 'text-white/30'}`}>
          Services
        </p>
        <ul className="space-y-1">
          {service.services.map((s) => (
            <li key={s} className={`text-xs ${isPurple ? 'text-black/80' : 'text-white/70'}`}>
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div>
        <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${isPurple ? 'text-black/50' : 'text-white/30'}`}>
          Tools
        </p>
        <div className="flex flex-wrap gap-1.5">
          {service.tools.map((t) => (
            <ToolBadge key={t} label={t} />
          ))}
        </div>
      </div>

      {/* Dotted bottom-right pattern for dark cards */}
      {!isPurple && (
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20 overflow-hidden rounded-br-3xl">
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <span
                key={`${row}-${col}`}
                className="w-1 h-1 rounded-full bg-white inline-block m-[3px]"
              />
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default function ServicesSection() {
  const [particleStyles, setParticleStyles] = useState([])

  useEffect(() => {
    const styles = Array.from({ length: 80 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.8 + 0.2,
      width: `${Math.random() * 4 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${Math.random() * 4 + 3}s`,
    }))
    setParticleStyles(styles)
  }, [])

  return (
    <section id="services" className="py-20 lg:py-32 overflow-hidden bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center lg:text-left flex justify-center text-xl">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-widest pl-[10%]">
            Our Services
          </h2>
        </div>

        {/* Content: Particle blob + horizontal scrolling cards */}
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center mt-10">
          {/* Particle blob */}
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 shrink-0 mx-auto lg:mx-0">
            {/* The underlying dark globe effect matching the design */}
            <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full" />
            <div className="absolute inset-x-10 inset-y-10 bg-brand-purple/20 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 particle-blob rounded-full mix-blend-screen opacity-80" />
            <div className="absolute inset-0">
              {particleStyles.map((style, i) => (
                <span
                  key={i}
                  className="absolute rounded-full bg-blue-400 animate-float shadow-[0_0_10px_rgba(123,92,245,0.8)]"
                  style={style}
                />
              ))}
            </div>
          </div>

          {/* Cards — horizontally scrollable */}
          <div className="flex-1 min-w-0 -mr-6 lg:-mr-8">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pr-6 lg:pr-8">
              {services.map((svc, i) => (
                <ServiceCard
                  key={svc.id}
                  service={svc}
                  style={{}}
                />
              ))}
            </div>
            {/* Scroll hint */}
            <p className="mt-4 text-xs text-gray-500 flex items-center gap-2 lg:hidden">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Swipe to see more
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
