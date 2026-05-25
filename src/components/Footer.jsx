import Logo from './Logo'

const footerLinks = {
  Services: ['UI/UX Design', 'Web Development', 'App Development', 'Digital Agency', 'ERP & CRM', 'AI Solutions'],
  'Quick Links': ['Work', 'About', 'Pricing', 'Contact Us'],
}

export default function Footer() {
  return (
    <footer className="bg-[#050510] text-white border-t border-white/5 relative z-10 pt-20 pb-10">
      
      {/* Background soft glow for footer */}
      <div className="absolute top-0 right-[20%] w-[300px] h-[300px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-6">
             <div className="flex flex-col gap-1 w-fit">
                <a href="/" className="hover:opacity-90 transition-opacity">
                  <Logo />
                </a>
                <span className="text-[10px] text-gray-400 tracking-widest uppercase ml-16 mt-2">Technology</span>
             </div>
             
             <div className="mt-4 flex items-center gap-3">
               <span className="text-[#B09EFF] w-5 h-5 flex items-center justify-center">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
               </span>
               <p className="text-gray-300 font-semibold text-sm">+91 97987 84550</p>
             </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-5">
                {heading}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[11px] font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Connect */}
          <div>
             <h4 className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-5">
                Connect
              </h4>
              <div className="flex gap-4 items-center">
                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                 </a>
                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                 </a>
                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                 </a>
                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                 </a>
              </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[10px] text-gray-600 tracking-widest uppercase">
            ThreeDott Technology, © {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Terms & Condition', 'Privacy Policy', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] text-gray-600 hover:text-gray-400 transition-colors tracking-widest uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
