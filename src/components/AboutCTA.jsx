import PlanetBlob from "./PlanetBlob"

export default function AboutCTA() {
    return (
        <section className="relative flex min-h-[430px] items-center overflow-hidden bg-black text-white">
            <img
                src="/bluebg.png"
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="pointer-events-none absolute right-[4%] top-1/2 z-[1] flex h-[310px] w-[310px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-full opacity-90 md:h-[380px] md:w-[380px] lg:right-[8%] lg:h-[430px] lg:w-[430px]">
                <div className="scale-[0.9]">
                    <PlanetBlob />
                </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 lg:px-10">
                <div className="max-w-[720px] pl-2 sm:pl-8 lg:pl-14">
                    <h2 className="font-['Inter'] text-[34px] font-normal leading-[1.25] tracking-[-0.6px] text-white sm:text-[42px] md:text-[48px] lg:text-[52px]">
                        We turn bold ideas into
                        <br />
                        <span className="font-semibold">
                            Powerful digital realities.
                        </span>
                    </h2>

                    <a
                        href="/contact"
                        className="mt-12 inline-flex h-[58px] min-w-[340px] items-center justify-between rounded-full bg-[#4F8BFF] px-12 font-['Inter'] text-[20px] font-normal tracking-[0.04em] text-white shadow-[0_0_28px_rgba(79,139,255,0.85)] transition-all duration-300 hover:scale-105 hover:bg-[#3f7fff]"
                    >
                        Start Your Project
                        <span className="text-[34px] leading-none">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}