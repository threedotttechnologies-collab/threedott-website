import { useEffect } from "react"
import { LEGAL_LAST_UPDATED } from "../constants/legalContent"

export default function LegalPageLayout({ title, sections }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${title} — ThreeDott`
  }, [title])

  return (
    <section className="relative min-h-screen bg-black px-6 pb-24 pt-28 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-gradient-to-b from-[#1f63ff]/10 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="font-['Poppins'] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 font-['Poppins'] text-sm text-white/50">
            Last updated: {LEGAL_LAST_UPDATED}
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <article key={section.id} id={section.id}>
              <h2 className="mb-4 font-['Poppins'] text-lg font-medium text-white sm:text-xl">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-['Inter'] text-[15px] leading-relaxed text-white/70"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
