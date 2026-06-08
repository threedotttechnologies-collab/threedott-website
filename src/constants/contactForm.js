export const CONTACT_EMAIL = "contact@threedott.com";

export const SERVICE_OPTIONS = [
  { value: "ui_ux", label: "UI/UX Design" },
  { value: "web_dev", label: "Web Development" },
  { value: "web_apps", label: "Web Applications" },
  { value: "mobile_apps", label: "Mobile App Development" },
  { value: "ai_solutions", label: "AI Solutions" },
  { value: "gis_mapping", label: "GIS & Geospatial" },
  { value: "erp_crm", label: "ERP / CRM" },
  { value: "digital_strategy", label: "Digital Strategy & Marketing" },
  { value: "other", label: "Other" },
];

export const SERVICE_LABELS = Object.fromEntries(
  SERVICE_OPTIONS.map(({ value, label }) => [value, label]),
);

export const INITIAL_CONTACT_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export const CONTACT_FIELD_CLASS =
  "border-0 border-b border-white/20 bg-transparent pb-3 text-sm text-white transition-colors placeholder:text-gray-600 focus:border-[#4F8BFF] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#4F8BFF]/40";
