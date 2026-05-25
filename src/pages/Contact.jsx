import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ChevronDown } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic here to process the form
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 lg:px-12 flex flex-col md:flex-row relative">
      <div className="w-full md:w-5/12 flex flex-col pt-4 md:pl-8 z-10">
        <h1 className="text-5xl md:text-[80px] lg:text-[100px] font-black leading-[0.9] tracking-tight uppercase mb-8 md:mb-0">
          Let's<br />
          Connect
        </h1>
      </div>

      <div className="w-full md:w-7/12 max-w-2xl z-10 mt-12 md:mt-4 md:pl-12 lg:pl-24">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-12 max-w-md">
          Let's talk about your next big idea. Use the form to tell us more, or simply drop us an email at connect@Threedott
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {/* First Name */}
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
                className="bg-transparent border-0 border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#4F8BFF] transition-colors placeholder:text-gray-600"
                required
              />
            </div>

            {/* Last Name */}
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
                className="bg-transparent border-0 border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#4F8BFF] transition-colors placeholder:text-gray-600"
                required
              />
            </div>

            {/* Email */}
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
                className="bg-transparent border-0 border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#4F8BFF] transition-colors placeholder:text-gray-600"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-3 md:col-span-2 relative contact-phone-wrapper">
              <label className="text-sm font-medium tracking-wide">
                Phone Number <span className="text-[#4F8BFF]">*</span>
              </label>
              <PhoneInput
                country={'us'}
                value={formData.phone}
                onChange={handlePhoneChange}
                enableSearch={true}
                placeholder="(555) 123-4567"
              />
              <div className="absolute left-9 bottom-[14px] pointer-events-none">
                <ChevronDown className="w-4 h-4 text-[#4F8BFF]" />
              </div>
            </div>

            {/* Service Interested In */}
            <div className="flex flex-col gap-3 relative">
              <label className="text-sm font-medium tracking-wide">
                Service Interested In <span className="text-[#4F8BFF]">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="appearance-none bg-transparent border-0 border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#4F8BFF] transition-colors text-gray-600 cursor-pointer"
                required
              >
                <option value="" disabled className="text-gray-600">Select Service...</option>
                <option value="ui_ux" className="text-black">UI/UX Design</option>
                <option value="web_dev" className="text-black">Web Development</option>
                <option value="app_dev" className="text-black">App Development</option>
              </select>
              <ChevronDown className="absolute right-0 bottom-3 w-4 h-4 text-[#4F8BFF] pointer-events-none" />
            </div>

            {/* Project Budget */}
            <div className="flex flex-col gap-3 relative">
              <label className="text-sm font-medium tracking-wide">
                Project Budget <span className="text-[#4F8BFF]">*</span>
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="appearance-none bg-transparent border-0 border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#4F8BFF] transition-colors text-gray-600 cursor-pointer"
                required
              >
                <option value="" disabled className="text-gray-600">Select Budget...</option>
                <option value="lt_5k" className="text-black">&lt; $5,000</option>
                <option value="5k_10k" className="text-black">$5,000 - $10,000</option>
                <option value="gt_10k" className="text-black">&gt; $10,000</option>
              </select>
              <ChevronDown className="absolute right-0 bottom-3 w-4 h-4 text-[#4F8BFF] pointer-events-none" />
            </div>
          </div>

          {/* Message */}
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
              className="bg-transparent border-0 border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#4F8BFF] transition-colors placeholder:text-gray-600 resize-none overflow-hidden min-h-[40px] mt-2 mb-[80px]"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#4F8BFF] hover:bg-[#3d6ecc] text-white font-medium py-3 px-10 rounded-full transition-colors text-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
