import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PenLine, Code, TrendingUp, BrainCircuit, Map as MapIcon } from 'lucide-react'
import Logo from './Logo'
const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activeDropdown
          ? 'bg-black/80 backdrop-blur-xl shadow-sm border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20 relative">
        {/* Logo */}
        <Link
          to="/"
          className="hover:opacity-90 transition-opacity"
        >
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <li 
              key={link.label}
              className="py-6"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 uppercase tracking-widest px-4 py-2 rounded-full ${
                  activeDropdown === link.label 
                    ? 'bg-white/10 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Enhanced Mega Menu for Services */}
        {activeDropdown === 'Services' && (
          <div 
            className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[95vw] lg:w-[960px] xl:w-[1100px] bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl cursor-default flex flex-col lg:flex-row gap-8 lg:gap-12 transition-all opacity-100 z-50 hidden md:flex"
            onMouseEnter={() => setActiveDropdown('Services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            
            {/* Left Column - Featured Image */}
            <div className="w-full lg:w-[30%] flex flex-col gap-4">
              <div className="w-full h-40 bg-gray-800 rounded-xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300" 
                  alt="Smart Farm AI"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div>
                <h4 className="text-[10px] uppercase font-bold text-[#4F8BFF] tracking-widest mb-1">Our Latest Work</h4>
                <h3 className="text-white font-semibold text-lg leading-tight mb-2">AI-powered Crop Monitoring & Advisory</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Real-time insights for precision agriculture</p>
              </div>
            </div>

            {/* Right Column - Service Grids */}
            <div className="w-full lg:w-[70%] grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
              
              {/* Product Design */}
              <Link to="/services/product-design" onClick={() => setActiveDropdown(null)} className="block bg-[#0a101d] border border-[#4F8BFF]/20 rounded-2xl p-4 lg:p-5 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <PenLine className="w-5 h-5 text-white group-hover:text-[#4F8BFF] transition-colors" />
                  <h4 className="text-white font-medium text-[15px]">Product Design</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="text-[#a0b3cc] group-hover:text-white text-xs transition-colors">User Research & Strategy</li>
                  <li className="text-[#a0b3cc] group-hover:text-white text-xs transition-colors">UX Flows & Wireframes</li>
                  <li className="text-[#a0b3cc] group-hover:text-white text-xs transition-colors">UI Systems & Prototypes</li>
                  <li className="text-[#a0b3cc] group-hover:text-white text-xs transition-colors">Design Handoff</li>
                </ul>
              </Link>

              {/* Development */}
              <Link to="/services/development" onClick={() => setActiveDropdown(null)} className="block bg-transparent border border-transparent rounded-2xl p-4 lg:p-5 hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-5 h-5 text-white group-hover:text-[#4F8BFF] transition-colors" />
                  <h4 className="text-white font-medium text-[15px]">Development</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Frontend (React / Next.js)</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Backend APIs & Microservices</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Mobile Apps (Flutter)</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Cloud & DevOps</li>
                </ul>
              </Link>

              {/* Strategy */}
              <Link to="/services/strategy" onClick={() => setActiveDropdown(null)} className="block bg-transparent border border-transparent rounded-2xl p-4 lg:p-5 hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-white group-hover:text-[#4F8BFF] transition-colors" />
                  <h4 className="text-white font-medium text-[15px]">Strategy</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Market Research</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Product Positioning</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Go-to-Market Planning</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Growth Strategy</li>
                </ul>
              </Link>

              {/* AI Development */}
              <Link to="/services/ai-development" onClick={() => setActiveDropdown(null)} className="block bg-transparent border border-transparent rounded-2xl p-4 lg:p-5 hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <BrainCircuit className="w-5 h-5 text-white group-hover:text-[#4F8BFF] transition-colors" />
                  <h4 className="text-white font-medium text-[15px]">AI Development</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">LLM Apps & AI Agents</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Prompt Engineering</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Model Optimization</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Computer Vision & NLP</li>
                </ul>
              </Link>

              {/* GIS & Mapping */}
              <Link to="/services/gis-mapping" onClick={() => setActiveDropdown(null)} className="block bg-transparent border border-transparent rounded-2xl p-4 lg:p-5 hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <MapIcon className="w-5 h-5 text-white group-hover:text-[#4F8BFF] transition-colors" />
                  <h4 className="text-white font-medium text-[15px]">GIS & Mapping</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Geospatial Platforms</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Satellite Data Processing</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Field Mapping Systems</li>
                  <li className="text-gray-400 group-hover:text-white text-xs transition-colors">Location Intelligence APIs</li>
                </ul>
              </Link>

            </div>
          </div>
        )}

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="group flex items-center gap-3 bg-transparent border border-white/20 text-white text-xs font-medium pl-5 pr-1.5 py-1.5 rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            Let's Connect
            <span className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full group-hover:scale-105 transition-transform">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-0.5 bg-white mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-white mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-white transition-all" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 absolute w-full left-0 top-full shadow-2xl">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-white block uppercase tracking-widest"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4">
            <Link
              to="/contact"
              className="flex items-center justify-between gap-3 border border-white/20 text-white text-sm font-medium pl-6 pr-2 py-2 rounded-full hover:bg-white/5 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Let's Connect
              <span className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
