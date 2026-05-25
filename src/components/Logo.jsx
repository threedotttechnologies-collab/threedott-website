export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Group */}
      <div className="relative flex items-center justify-center w-[54px] h-[32px] shrink-0">
        {/* Light Blue Horizontal Pill */}
        <div className="absolute left-0 top-[6px] w-[24px] h-[20px] bg-[#8baaf3] rounded-l-full rounded-r-md opacity-90" />
        {/* Deep Blue Vertical Pill */}
        <div className="absolute left-[12px] top-0 w-[18px] h-[32px] bg-[#2563eb] rounded-full z-10" />
        {/* Purple Circle */}
        <div className="absolute left-[34px] top-[6px] w-[20px] h-[20px] bg-[#7c3aed] rounded-full" />
      </div>

      {/* Typography */}
      <div className="text-xl md:text-2xl font-bold tracking-tight flex items-baseline text-white">
        <span>three</span>
        <span className="text-[#2563eb] ml-1 flex items-center">
          D
          <span className="inline-flex items-center justify-center mx-[2px]">
            <span className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] bg-[#7c3aed] rounded-full" />
          </span>
          tt
        </span>
      </div>
    </div>
  );
}
