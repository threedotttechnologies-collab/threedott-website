import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicePageTemplate({ data }) {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.id]);

  if (!data) return null;

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 overflow-x-hidden relative">
      
      {/* Background glow specific to the page theme or generic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4F8BFF]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-purple/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Hero Section */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-16 lg:gap-8 mb-40">
          
          {/* Main Headline */}
          <div className="w-full lg:w-7/12 flex flex-col items-start gap-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] uppercase">
              {data.title}
            </h1>
            <Link 
              to="/contact" 
              className="mt-2 inline-flex items-center justify-center bg-[#4F8BFF] text-white font-medium text-xs px-8 py-3 rounded-full hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(79,139,255,0.4)]"
            >
              {data.buttonText}
            </Link>
          </div>

          {/* Description Paragraph */}
          <div className="w-full lg:w-4/12 pt-4">
            <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
              {data.description}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full flex flex-col mt-20">
          
          {/* Overlines / Sub-metrics header */}
          <div className="w-full border-b border-white/20 pb-4 flex items-center justify-between gap-4 mb-10 overflow-x-auto scrollbar-hide flex-nowrap">
            {data.overlines.split('·').map((item, index) => (
              <span key={index} className="text-[10px] md:text-xs text-gray-500 font-medium tracking-widest uppercase whitespace-nowrap">
                {item.trim()}
              </span>
            ))}
          </div>

          {/* Interactive Feature Accordion/List */}
          <div className="flex flex-col">
            {data.features.map((feature, idx) => {
              const isActive = activeFeature === idx;
              return (
                <div 
                  key={idx} 
                  className={`border-b border-white/10 transition-all duration-300 cursor-pointer group flex items-center justify-between ${
                    isActive ? 'py-12' : 'py-8'
                  }`}
                  onMouseEnter={() => setActiveFeature(idx)}
                  onClick={() => setActiveFeature(idx)}
                >
                  <h3 className={`text-xl md:text-2xl lg:text-4xl font-bold uppercase tracking-wide transition-colors duration-300 flex items-center gap-4 ${
                    isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'
                  }`}>
                    <span className="text-[14px] md:text-base font-normal -mt-3">°</span>
                    {feature}
                  </h3>
                  
                  {/* Subtle chevron to imply clickability/expansion */}
                  <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                     <ChevronRight className="w-6 h-6 text-[#4F8BFF]" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
