import { Link } from "react-router-dom";
import Logo from "./Logo";

const legalLinks = [
  { label: "Terms & Condition", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
];

const footerLinks = {
  Services: [
    "UI/UX Design",
    "Web Development",
    "Web Applications",
    "Mobile Apps",
    "ERP / CRM",
    "AI Solutions",
  ],
  "Quick links": ["Work", "About", "Pricing", "Contact Us"],
};

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.2a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-5 text-white">
      <a
        href="https://www.linkedin.com/in/threedott-technologies-8523693b7"
        target="blank"
        className="transition hover:scale-110 hover:text-[#4F8BFF]"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      <a
        href="https://www.instagram.com/threedott01/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:scale-110 hover:text-[#4F8BFF]"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
        </svg>
      </a>

      <a
        href="https://www.instagram.com/threedott01/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[24px] leading-none transition hover:scale-110 hover:text-[#4F8BFF]"
      >
        𝕏
      </a>

      <a
        href="https://www.instagram.com/threedott01/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[24px] leading-none transition hover:scale-110 hover:text-[#4F8BFF]"
      >
        f
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* LEFT BLUE BEAM */}
      <div className="pointer-events-none absolute bottom-[-170px] left-[-120px] h-[300px] w-[700px] rounded-full bg-[#1f63ff]/40 blur-[95px]" />

      <div className="pointer-events-none absolute bottom-[-85px] left-[-80px] h-[180px] w-[520px] rotate-[8deg] rounded-full bg-[#2f7cff]/30 blur-[70px]" />

      {/* RIGHT BLUE BEAM */}
      <div className="pointer-events-none absolute bottom-[-165px] right-[-140px] h-[300px] w-[760px] rounded-full bg-[#1f63ff]/45 blur-[95px]" />

      <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] h-[180px] w-[560px] -rotate-[8deg] rounded-full bg-[#2f7cff]/30 blur-[70px]" />

      {/* TOP FADE */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-black via-black/95 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1650px] px-6 pb-8 pt-20 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_0.8fr_0.7fr] lg:gap-16">
          {/* BRAND */}
          <div>
            <a href="/" className="inline-block transition hover:opacity-90">
              <div className="origin-left scale-[1.05] sm:scale-[1.15] lg:scale-[1.25]">
                <Logo />
              </div>
            </a>

            <h3 className=" pl-[95px] font-['Poppins'] text-[22px] tracking-[0.02em] text-white sm:pl-[110px] lg:text-[26px]">
              Technology
            </h3>

            <div className="mt-12 flex flex-col gap-3 pl-8 text-white">
              <a
                href="tel:+917083197907"
                className="inline-flex items-center gap-4 whitespace-nowrap font-['Poppins'] text-[16px] font-normal tracking-[0.03em] text-white transition hover:text-[#8ab0ff]"
              >
                <PhoneIcon />
                +91 7083197907
              </a>
              <p className="max-w-[360px] font-['Poppins'] text-[16px] font-normal leading-relaxed tracking-[0.03em] text-white/90">
                Address: 87/3b/1c, Shree Colony, Azad Nagar, Kothrud, Pune,
                Maharashtra 411038
              </p>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-5 font-['Poppins'] text-[16px] font-normal tracking-[0.05em] text-white/60">
              Services
            </h4>

            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[15px] font-normal tracking-[0.04em] text-white/55 transition hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-5 font-['Poppins'] text-[16px] font-normal tracking-[0.05em] text-white/60">
              Quick links
            </h4>

            <ul className="space-y-3">
              {footerLinks["Quick links"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-['Poppins'] text-[15px] font-normal tracking-[0.04em] text-white/55 transition hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="mb-5 font-['Poppins'] text-[16px] font-normal tracking-[0.05em] text-white/60">
              Connect
            </h4>

            <SocialIcons />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex flex-col gap-5 border-t border-white/5 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-['Poppins'] text-[13px] font-normal tracking-[0.03em] text-white/75">
            Three Dott Technologies, © {new Date().getFullYear()}. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="font-['Poppins'] text-[13px] font-normal tracking-[0.03em] text-white/75 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
