import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import ContactFormField from "../components/contact/ContactFormField";
import ContactFormSelect from "../components/contact/ContactFormSelect";
import {
  CONTACT_EMAIL,
  CONTACT_FIELD_CLASS,
  INITIAL_CONTACT_FORM,
  SERVICE_OPTIONS,
} from "../constants/contactForm";
import { useAutoResizeTextarea } from "../hooks/useAutoResizeTextarea";
import { useContactBubbles } from "../hooks/useContactBubbles";
import { submitContactForm } from "../lib/contactApi";

import "react-phone-input-2/lib/style.css";

const PhoneInput = lazy(() => import("react-phone-input-2"));

function PhoneFieldSkeleton() {
  return (
    <div
      className={`${CONTACT_FIELD_CLASS} h-[34px] animate-pulse border-white/10 bg-white/5`}
      aria-hidden="true"
    />
  );
}

export default function Contact() {
  const pageRef = useRef(null);
  const bubbleLayerRef = useRef(null);
  const formRef = useRef(null);
  const statusRef = useRef(null);
  const messageRef = useRef(null);

  const [formData, setFormData] = useState(INITIAL_CONTACT_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const resizeMessageField = useAutoResizeTextarea();

  useContactBubbles(pageRef, bubbleLayerRef, formRef);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (submitStatus === "idle") return;
    statusRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "message") {
      resizeMessageField(e.target);
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      await submitContactForm(formData);
      setSubmitStatus("success");
      setFormData(INITIAL_CONTACT_FORM);
      if (messageRef.current) {
        messageRef.current.style.height = "auto";
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={pageRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-black px-6 pb-24 pt-32 text-white md:flex-row lg:px-12"
    >
      <div
        ref={bubbleLayerRef}
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      />

      <div className="z-10 flex w-full flex-col pt-4 md:w-5/12 md:pl-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#4F8BFF]/80">
          Get in touch
        </p>
        <h1 className="font-['Plus_Jakarta_Sans'] text-[40px] font-semibold uppercase leading-[1.15] tracking-normal text-white sm:text-[52px] sm:leading-[72px]">
          Let&apos;s
          <br />
          Connect
        </h1>
        <p className="mt-6 hidden max-w-sm text-sm leading-relaxed text-gray-400 md:block">
          Tell us about your project and we&apos;ll get back to you within 1–2
          business days.
        </p>
      </div>

      <div
        ref={formRef}
        className="z-10 mt-10 w-full max-w-2xl md:mt-4 md:w-7/12 md:pl-12 lg:pl-24"
      >
        <p className="mb-10 max-w-md text-sm leading-relaxed text-gray-400 md:mb-12 md:text-base">
          Let&apos;s talk about your next big idea. Use the form below, or email
          us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-white/80 underline decoration-white/30 underline-offset-2 transition hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-10"
          noValidate
          aria-busy={isSubmitting}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 md:gap-y-10">
            <ContactFormField
              id="contact-first-name"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              autoComplete="given-name"
            />

            <ContactFormField
              id="contact-last-name"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              autoComplete="family-name"
            />

            <ContactFormField
              id="contact-email"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="md:col-span-2"
              autoComplete="email"
            />

            <div className="contact-phone-wrapper relative flex flex-col gap-3 md:col-span-2">
              <label
                htmlFor="contact-phone"
                className="text-sm font-medium tracking-wide"
              >
                Phone Number <span className="text-[#4F8BFF]">*</span>
              </label>
              <Suspense fallback={<PhoneFieldSkeleton />}>
                <PhoneInput
                  inputProps={{
                    id: "contact-phone",
                    name: "phone",
                    required: true,
                    autoComplete: "tel",
                  }}
                  country="us"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  enableSearch
                  placeholder="(555) 123-4567"
                />
              </Suspense>
              <div className="pointer-events-none absolute bottom-[14px] left-9">
                <ChevronDown
                  className="h-4 w-4 text-[#4F8BFF]"
                  aria-hidden="true"
                />
              </div>
            </div>

            <ContactFormSelect
              id="contact-service"
              label="Service Interested In"
              name="service"
              value={formData.service}
              onChange={handleChange}
              options={SERVICE_OPTIONS}
              placeholder="Select Service..."
            />

            <ContactFormField
              id="contact-budget"
              label="Project Budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g. $10,000, ₹5L, or flexible"
            />
          </div>

          <div className="flex flex-col gap-3 md:mt-2">
            <label
              htmlFor="contact-message"
              className="text-sm font-medium tracking-wide"
            >
              Message <span className="text-[#4F8BFF]">*</span>
            </label>
            <textarea
              ref={messageRef}
              id="contact-message"
              name="message"
              placeholder="Tell us more about your project..."
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className={`${CONTACT_FIELD_CLASS} mt-2 min-h-[88px] resize-none overflow-hidden`}
              required
            />
          </div>

          <div ref={statusRef} className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4F8BFF] px-10 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3d6ecc] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            <div aria-live="polite" aria-atomic="true">
              {submitStatus === "success" && (
                <p className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-400" role="alert">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
