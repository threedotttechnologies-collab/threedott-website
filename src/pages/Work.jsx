import { useState, useMemo, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProjects, gridProjects, allFilters } from '../constants/workData';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFeatured = useMemo(() => {
    if (activeFilter === 'All') return featuredProjects;
    return featuredProjects.filter(p => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const filteredGrid = useMemo(() => {
    if (activeFilter === 'All') return gridProjects;
    return gridProjects.filter(p => p.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center text-center px-6 lg:px-8 max-w-4xl mx-auto mb-20 z-10">
        
        {/* Subtle extra glow over global bg */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none -z-10">
          <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-6 mt-10">
          Our Work
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto tracking-wide">
          We build scalable technology solutions across AI, GIS, software, and intelligent systems.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
          {allFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs md:text-[13px] font-medium px-6 py-2 rounded-full transition-all duration-300 border ${
                activeFilter === filter 
                  ? 'bg-white text-black border-white' 
                  : 'bg-[#111] text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col gap-8 md:gap-16">
        
        {/* Featured Case Studies */}
        {filteredFeatured.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col lg:flex-row bg-[#08080a] border border-white/5 rounded-[2rem] overflow-hidden group hover:border-white/10 transition-colors"
          >
            {project.layout === 'image-left' ? (
              <>
                <div className="w-full lg:w-3/5 h-[300px] md:h-[400px] lg:h-auto overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                </div>
                <div className="w-full lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{project.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-10">{project.description}</p>
                  <a href={project.link} className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-white hover:text-brand-blue transition-colors w-fit">
                    <ArrowRight className="w-4 h-4" /> View Case Study
                  </a>
                </div>
              </>
            ) : (
              <>
                {/* Mobile: Image goes top. Desktop: Image goes right. */}
                <div className="w-full h-[300px] md:h-[400px] lg:hidden overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{project.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-10">{project.description}</p>
                  <a href={project.link} className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-white hover:text-brand-blue transition-colors w-fit">
                    <ArrowRight className="w-4 h-4" /> View Case Study
                  </a>
                </div>
                <div className="hidden lg:block w-full lg:w-3/5 h-auto overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
                </div>
              </>
            )}
          </div>
        ))}

        {/* All Projects Sub-headline */}
        {filteredGrid.length > 0 && (
          <div className="pt-20 pb-4 border-b border-white/10 mb-8 mt-10">
             <h3 className="text-xl md:text-2xl font-semibold text-white">All Projects</h3>
          </div>
        )}

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGrid.map((project) => (
            <div key={project.id} className="bg-[#08080a] border border-white/5 rounded-2xl overflow-hidden group hover:border-white/10 transition-colors flex flex-col p-4 pb-8">
               <div className="w-full h-48 sm:h-56 overflow-hidden rounded-xl bg-[#111] mb-6 relative">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
               <div className="px-2">
                 <div className="inline-flex mb-4">
                    {project.tags.slice(0,1).map(tag => (
                      <span key={tag} className="text-[10px] font-medium tracking-wider px-3 py-1 bg-[#151515] text-gray-400 rounded border border-white/5 uppercase">
                        {tag}
                      </span>
                    ))}
                 </div>
                 <h4 className="text-white font-semibold text-lg mb-2">{project.title}</h4>
                 <p className="text-gray-500 text-xs leading-relaxed max-w-sm">{project.description}</p>
               </div>
            </div>
          ))}
        </div>

        {filteredFeatured.length === 0 && filteredGrid.length === 0 && (
          <div className="py-32 text-center flex flex-col items-center justify-center">
             <p className="text-gray-500">No projects found for this category.</p>
             <button onClick={() => setActiveFilter('All')} className="mt-4 text-[#4F8BFF] text-sm hover:underline">Clear Filter</button>
          </div>
        )}

        {/* Custom Centralized CTA Block */}
        <div className="mt-32 w-full bg-gradient-to-br from-[#0c1328] to-[#040814] rounded-3xl p-12 md:p-20 flex flex-col items-center text-center border border-[#4F8BFF]/20 relative overflow-hidden shadow-[0_0_50px_rgba(79,139,255,0.05)]">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4F8BFF]/10 via-transparent to-transparent pointer-events-none" />
           
           <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-10 relative z-10 max-w-2xl leading-tight">
             Let's Build Something That Matters
           </h3>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
             <Link 
               to="/contact" 
               className="inline-flex justify-center items-center bg-[#4F8BFF] text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-blue-600 transition-colors w-full sm:w-auto shadow-[0_4px_20px_rgba(79,139,255,0.4)]"
             >
               Start Your Project
             </Link>
             <Link 
               to="/#services" 
               className="inline-flex justify-center items-center text-gray-300 font-medium text-sm px-6 py-3.5 rounded-full hover:text-white hover:bg-white/5 transition-colors w-full sm:w-auto"
             >
               Explore Services
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
}
