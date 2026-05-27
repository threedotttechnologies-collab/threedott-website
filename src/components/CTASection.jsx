import PlanetBlob from "./PlanetBlob"

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[520px] items-center overflow-hidden border-t border-white/5 bg-black text-white lg:min-h-[560px]"
    >
      {/* BLUE WAVY BACKGROUND */}
      <img
        src="/bluebg.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-90"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* PLANET BLOB */}
      <div
        className="
          pointer-events-none
          absolute
          right-[2%]
          top-1/2
          z-[1]
          flex
          h-[260px]
          w-[260px]
          -translate-y-1/2
          items-center
          justify-center
          overflow-hidden
          rounded-full
          opacity-90

          sm:h-[320px]
          sm:w-[320px]

          md:right-[4%]
          md:h-[360px]
          md:w-[360px]

          lg:right-[6%]
          lg:h-[420px]
          lg:w-[420px]
        "
      >
        <div className="scale-[0.82] sm:scale-[0.88] lg:scale-[0.92]">
          <PlanetBlob />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-6 lg:px-8">
        <div className="max-w-[850px] pl-2 pt-6 sm:pl-6 md:pl-10 md:pt-10 lg:pl-16 lg:pt-12">
          {/* HEADING */}
          <h2 className="font-['Inter'] text-[34px] font-medium leading-[1.08] tracking-[-1px] text-white sm:text-[44px] md:text-[54px] md:leading-[62px] md:tracking-[-1.1px] lg:text-[60px] lg:leading-[68px]">
            Let&apos;s Build Something
            <br />

            <span className="font-normal italic leading-none tracking-normal">
              That Matters
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-[410px] font-['Inter'] text-[13px] font-normal leading-[21px] text-white/65 sm:ml-2 sm:text-right md:text-[14px] md:leading-[21px]">
            We&apos;ve built systems for growth and for the
            <br className="hidden sm:block" />
            greater impact. What will we build with you?
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <a
              href="/contact"
              className="
                inline-flex
                h-[52px]
                min-w-[210px]
                items-center
                justify-center
                rounded-full
                bg-[#4F8BFF]
                px-8
                font-['Inter']
                text-[17px]
                font-normal
                text-white
                shadow-[0_0_22px_rgba(79,139,255,0.75)]
                transition-all
                duration-300

                hover:scale-105
                hover:bg-[#3f7fff]
              "
            >
              Start a Project
            </a>

            <a
              href="/work"
              className="
                group
                inline-flex
                items-center
                gap-2
                border-b
                border-white
                pb-2
                font-['Inter']
                text-[17px]
                font-medium
                text-white
                transition-colors

                hover:text-white/75
              "
            >
              Explore Our Work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}