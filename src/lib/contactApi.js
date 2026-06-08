import { SERVICE_LABELS } from "../constants/contactForm";

const REQUEST_TIMEOUT_MS = 15000;

function getApiBaseUrl() {
  const base = import.meta.env.VITE_API_BASE_URL;
  if (!base) {
    throw new Error(
      "Contact form is not configured. Please try again later or email us directly.",
    );
  }
  return base.replace(/\/$/, "");
}

export function validateContactForm(formData) {
  const firstName = formData.firstName.trim();
  const lastName = formData.lastName.trim();
  const email = formData.email.trim();
  const phone = formData.phone.trim();
  const message = formData.message.trim();
  const budget = formData.budget.trim();

  if (!firstName || !lastName) {
    return "Please enter your first and last name.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address.";
  }

  if (!phone || phone.replace(/\D/g, "").length < 8) {
    return "Please enter a valid phone number.";
  }

  if (!formData.service) {
    return "Please select a service.";
  }

  if (!budget || budget.length < 2) {
    return "Please enter your project budget.";
  }

  if (!message || message.length < 10) {
    return "Please enter a message of at least 10 characters.";
  }

  return null;
}

export async function submitContactForm(formData) {
  const validationError = validateContactForm(formData);
  if (validationError) {
    throw new Error(validationError);
  }

  const serviceLabel =
    SERVICE_LABELS[formData.service] || formData.service;
  const budget = formData.budget.trim();

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(
      `${getApiBaseUrl()}/v1/api/common/threedot/contact-us`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          topic: serviceLabel,
          message: `Budget: ${budget}\n\n${formData.message.trim()}`,
        }),
      },
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to send message. Please try again.",
      );
    }

    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Request timed out. Please check your connection and try again.");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
