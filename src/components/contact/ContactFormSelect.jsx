import { ChevronDown } from "lucide-react";
import { CONTACT_FIELD_CLASS } from "../../constants/contactForm";

export default function ContactFormSelect({
  id,
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}) {
  return (
    <div className="relative flex flex-col gap-3">
      <label htmlFor={id} className="text-sm font-medium tracking-wide">
        {label} <span className="text-[#4F8BFF]">*</span>
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${CONTACT_FIELD_CLASS} cursor-pointer appearance-none ${
          value ? "text-white" : "text-gray-600"
        }`}
        required
      >
        <option value="" disabled className="text-gray-600">
          {placeholder}
        </option>
        {options.map(({ value: optionValue, label: optionLabel }) => (
          <option key={optionValue} value={optionValue} className="text-black">
            {optionLabel}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute bottom-3 right-0 h-4 w-4 text-[#4F8BFF]"
        aria-hidden="true"
      />
    </div>
  );
}
