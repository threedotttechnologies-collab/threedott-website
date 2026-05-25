import { useState } from 'react'

const projects = [
  { id: '01', name: 'CropGen Platform', tags: ['Web Design', 'App Design', 'AI Development'], active: true },
  { id: '02', name: 'GIS & Mapping Suite', tags: ['Web Design', 'App Design', 'AI Development'] },
  { id: '03', name: 'Analytics Dashboard', tags: ['Web Design', 'App Design', 'AI Development'] },
  { id: '04', name: 'AI Dev Pipeline', tags: ['Web Design', 'App Design', 'AI Development'] },
  { id: '05', name: 'Strategy Toolkit', tags: ['Web Design', 'App Design', 'AI Development'] },
]

const tagIcons = {
  'Web Design': (
    <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none">
      <path d="M2 2h10v10H2z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 2v10M9 2v10M2 5h10M2 9h10" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  'App Design': (
    <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none">
      <rect x="3" y="1" width="8" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="7" cy="11" r="0.8" fill="currentColor" />
    </svg>
  ),
  'AI Development': (
    <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none">
      <path d="M7 1L7 4M7 10L7 13M1 7h3M10 7h3M3 3l2 2M9 9l2 2M3 11l2-2M9 5l2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
}

export default function WorkSection() {
  const [hovered, setHovered] = useState('01')

  return (
    <section id="work" className="bg-black py-20 lg:py-28 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 pt-10">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-widest text-white">
            Featured Work
          </h2>
          <p className="text-xs text-gray-400 max-w-sm md:text-right leading-relaxed tracking-wider">
            Multi-disciplinary team of professionals to give cohesive works, under one modern ecosystem.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Project list */}
          <div className="flex-1 min-w-0">
            <div className="border-t border-white/10">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHovered(project.id)}
                  className={`group flex flex-wrap sm:flex-nowrap items-center gap-4 py-5 border-b border-white/10 cursor-pointer transition-all duration-300 ${
                    hovered === project.id || project.active
                      ? '-mx-4 bg-white/5 px-4 rounded-xl'
                      : ''
                  }`}
                >
                  {/* Number */}
                  <span
                    className={`text-sm font-bold w-8 shrink-0 transition-colors ${
                      hovered === project.id || project.active
                        ? 'text-white'
                        : 'text-gray-500'
                    }`}
                  >
                    {project.id}
                  </span>

                  {/* Name */}
                  <span
                    className={`text-base lg:text-lg font-bold flex-1 min-w-[120px] transition-colors ${
                      hovered === project.id || project.active
                        ? 'text-white'
                        : 'text-gray-400 group-hover:text-gray-300'
                    }`}
                  >
                    {project.name}
                  </span>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center gap-1.5 text-[10px] font-medium px-3 py-1.5 rounded-full border transition-all ${
                          hovered === project.id || project.active
                            ? 'border-white/20 text-white bg-white/10'
                            : 'border-white/10 text-gray-500 bg-transparent'
                        }`}
                      >
                        {tagIcons[tag]}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Laptop mockup */}
          <div className="lg:w-1/2 xl:w-[500px] shrink-0 flex items-center justify-center">
            <div className="relative w-full aspect-video lg:aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-500">
              <img
                src={`/mockup_${hovered === '01' ? '1' : hovered === '02' ? '2' : '3'}.png`}
                alt="Selected Project"
                className="w-full h-full object-cover transition-opacity duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback pattern */}
              <div className="hidden absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] w-full h-full flex-col items-center justify-center gap-4">
                <div className="w-48 h-32 bg-slate-800 rounded-lg shadow-xl border border-slate-700 flex flex-col items-center p-3">
                  <div className="w-full h-24 bg-slate-900 rounded border border-slate-800 p-2">
                     <div className="w-full h-2 bg-slate-700/50 mb-1 rounded-sm"/>
                     <div className="w-3/4 h-2 bg-slate-700/50 mb-1 rounded-sm"/>
                     <div className="w-1/2 h-2 bg-slate-700/50 rounded-sm"/>
                  </div>
                </div>
                <span className="text-slate-500 text-xs tracking-widest font-mono">PROJECT PREVIEW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
