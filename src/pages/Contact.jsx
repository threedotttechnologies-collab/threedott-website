import { useState, useEffect, useRef } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { ChevronDown } from "lucide-react"
import gsap from "gsap"

export default function Contact() {
  const pageRef = useRef(null)
  const bubbleLayerRef = useRef(null)
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const page = pageRef.current
    const layer = bubbleLayerRef.current
    const form = formRef.current

    if (!page || !layer) return

    let lastTime = 0

    const createBubble = (e) => {
      if (form && form.contains(e.target)) return

      const now = Date.now()
      if (now - lastTime < 28) return
      lastTime = now

      const rect = page.getBoundingClientRect()
      const size = Math.random() * 15 + 7

      const bubble = document.createElement("span")
      bubble.className = "pointer-events-none absolute rounded-full"
      bubble.style.left = `${e.clientX - rect.left}px`
      bubble.style.top = `${e.clientY - rect.top}px`
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`
      bubble.style.background =
        "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(105,132,255,0.62) 35%, rgba(73,80,255,0.16) 72%)"
      bubble.style.border = "1px solid rgba(150,175,255,0.38)"
      bubble.style.boxShadow =
        "0 0 22px rgba(90,130,255,0.75), 0 0 42px rgba(105,90,255,0.35)"
      bubble.style.transform = "translate(-50%, -50%)"
      bubble.style.willChange = "transform, opacity"

      layer.appendChild(bubble)

      gsap.to(bubble, {
        x: (Math.random() - 0.5) * 70,
        y: -55 - Math.random() * 45,
        scale: 0,
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
        force3D: true,
        onComplete: () => bubble.remove(),
      })
    }

    page.addEventListener("mousemove", createBubble)
    return () => page.removeEventListener("mousemove", createBubble)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div
      ref={pageRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-black px-6 pb-24 pt-32 text-white md:flex-row lg:px-12"
    >
      <div
        ref={bubbleLayerRef}
        className="pointer-events-none absolute inset-0 z-[1]"
      />

      <div className="z-10 flex w-full flex-col pt-4 md:w-5/12 md:pl-8">
        <h1
          className="
            font-['Plus_Jakarta_Sans']
            text-[52px]
            font-semibold
            uppercase
            leading-[72px]
            tracking-[0px]
            text-white
          "
        >
          Let's
          <br />
          Connect
        </h1>
      </div>

      <div
        ref={formRef}
        className="z-10 mt-12 w-full max-w-2xl md:mt-4 md:w-7/12 md:pl-12 lg:pl-24"
      >
        <p className="mb-12 max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
          Let's talk about your next big idea. Use the form to tell us more, or
          simply drop us an email at{" "}
          <a
            href="mailto:connect@threedott.com"
            className="text-white/80 underline decoration-white/30 underline-offset-2 transition hover:text-white"
          >
            connect@threedott.com
          </a>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium tracking-wide">
                First Name <span className="text-[#4F8BFF]">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                className="border-0 border-b border-white/20 bg-transparent pb-3 text-sm transition-colors placeholder:text-gray-600 focus:border-[#4F8BFF] focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium tracking-wide">
                Last Name <span className="text-[#4F8BFF]">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className="border-0 border-b border-white/20 bg-transparent pb-3 text-sm transition-colors placeholder:text-gray-600 focus:border-[#4F8BFF] focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-3 md:col-span-2">
              <label className="text-sm font-medium tracking-wide">
                Email <span className="text-[#4F8BFF]">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                className="border-0 border-b border-white/20 bg-transparent pb-3 text-sm transition-colors placeholder:text-gray-600 focus:border-[#4F8BFF] focus:outline-none"
                required
              />
            </div>

            <div className="contact-phone-wrapper relative flex flex-col gap-3 md:col-span-2">
              <label className="text-sm font-medium tracking-wide">
                Phone Number <span className="text-[#4F8BFF]">*</span>
              </label>
              <PhoneInput
                country="us"
                value={formData.phone}
                onChange={handlePhoneChange}
                enableSearch={true}
                placeholder="(555) 123-4567"
              />
              <div className="pointer-events-none absolute bottom-[14px] left-9">
                <ChevronDown className="h-4 w-4 text-[#4F8BFF]" />
              </div>
            </div>

            <div className="relative flex flex-col gap-3">
              <label className="text-sm font-medium tracking-wide">
                Service Interested In <span className="text-[#4F8BFF]">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="cursor-pointer appearance-none border-0 border-b border-white/20 bg-transparent pb-3 text-sm text-gray-600 transition-colors focus:border-[#4F8BFF] focus:outline-none"
                required
              >
                <option value="" disabled className="text-gray-600">
                  Select Service...
                </option>
                <option value="ui_ux" className="text-black">
                  UI/UX Design
                </option>
                <option value="web_dev" className="text-black">
                  Web Development
                </option>
                <option value="app_dev" className="text-black">
                  App Development
                </option>
              </select>
              <ChevronDown className="pointer-events-none absolute bottom-3 right-0 h-4 w-4 text-[#4F8BFF]" />
            </div>

            <div className="relative flex flex-col gap-3">
              <label className="text-sm font-medium tracking-wide">
                Project Budget <span className="text-[#4F8BFF]">*</span>
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="cursor-pointer appearance-none border-0 border-b border-white/20 bg-transparent pb-3 text-sm text-gray-600 transition-colors focus:border-[#4F8BFF] focus:outline-none"
                required
              >
                <option value="" disabled className="text-gray-600">
                  Select Budget...
                </option>
                <option value="lt_5k" className="text-black">
                  &lt; $5,000
                </option>
                <option value="5k_10k" className="text-black">
                  $5,000 - $10,000
                </option>
                <option value="gt_10k" className="text-black">
                  &gt; $10,000
                </option>
              </select>
              <ChevronDown className="pointer-events-none absolute bottom-3 right-0 h-4 w-4 text-[#4F8BFF]" />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:mt-2">
            <label className="text-sm font-medium tracking-wide">
              Message <span className="text-[#4F8BFF]">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Tell us more about your project..."
              value={formData.message}
              onChange={handleChange}
              rows="1"
              className="mb-[80px] mt-2 min-h-[40px] resize-none overflow-hidden border-0 border-b border-white/20 bg-transparent pb-3 text-sm transition-colors placeholder:text-gray-600 focus:border-[#4F8BFF] focus:outline-none"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="rounded-full bg-[#4F8BFF] px-10 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3d6ecc]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}