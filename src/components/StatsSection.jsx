const stats = [
  { value: '50+', label: 'Projects Delivered', symbol: '+' },
  { value: '100', label: 'Client Satisfaction', symbol: '%' },
  { value: '5+', label: 'Years of Experience', symbol: '/' },
]

export default function StatsSection() {
  return (
    <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-gray-200">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center sm:items-start sm:px-12 first:pl-0 last:pr-0 gap-1"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-4xl lg:text-5xl font-black text-black">{stat.value}</span>
                <span className="text-2xl font-black text-brand-purple">{stat.symbol}</span>
              </div>
              <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
