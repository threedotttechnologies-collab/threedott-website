import { CONTACT_FIELD_CLASS } from "../../constants/contactForm";

export default function ContactFormField({
  id,
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
  className = "",
  autoComplete,
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium tracking-wide">
        {label} <span className="text-[#4F8BFF]">*</span>
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={CONTACT_FIELD_CLASS}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
}
