"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import type { ContactFormConfig } from "@/lib/contactFormConfigs";

type FormData = {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  systemDetails: string;
  propertyType: string;
  preferredContactMethod: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialState: FormData = {
  name: "",
  phone: "",
  email: "",
  serviceType: "",
  message: "",
  systemDetails: "",
  propertyType: "",
  preferredContactMethod: "",
};

type Props = {
  config: ContactFormConfig;
};

export default function ContactForm({ config }: Props) {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service")?.trim() || "";

  const serviceLabelForParam = useMemo(() => {
    if (!serviceParam || !Object.prototype.hasOwnProperty.call(config.serviceMap, serviceParam)) {
      return null;
    }
    return config.serviceMap[serviceParam] ?? null;
  }, [config.serviceMap, serviceParam]);

  const isServiceSpecific = Boolean(serviceLabelForParam);
  const didTemplateRef = useRef(false);

  const [formData, setFormData] = useState<FormData>(() => {
    const presetServiceType = isServiceSpecific ? serviceLabelForParam ?? "" : "";
    return { ...initialState, serviceType: presetServiceType };
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = useMemo(() => Object.values(config.serviceMap), [config.serviceMap]);

  const messageTemplateForSlug = (slug: string, label: string) => {
    const t = config.templatesBySlug[slug];
    if (t) return t;
    return `Hi, I'm interested in ${label}. Please share any timing preferences and details I should know.`;
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!formData.message.trim()) nextErrors.message = "Message is required.";
    if (!isServiceSpecific && !formData.serviceType.trim()) {
      nextErrors.serviceType = "Service Type is required.";
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSubmitted(false);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
    setFormData((prev) => {
      const presetServiceType =
        isServiceSpecific && serviceLabelForParam ? serviceLabelForParam : prev.serviceType;
      return { ...initialState, serviceType: presetServiceType };
    });
  };

  useEffect(() => {
    didTemplateRef.current = false;
    if (!isServiceSpecific) return;

    setFormData((prev) => {
      const shouldTemplate = !didTemplateRef.current && !prev.message.trim();
      if (shouldTemplate) didTemplateRef.current = true;
      const label = serviceLabelForParam ?? prev.serviceType;
      const slug = serviceParam || "";
      return {
        ...prev,
        serviceType: label,
        message: shouldTemplate ? messageTemplateForSlug(slug, label) : prev.message,
      };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps -- config is stable per page mount
  }, [isServiceSpecific, serviceLabelForParam, serviceParam]);

  const isEmergency =
    Boolean(config.emergencySlug) &&
    serviceParam === config.emergencySlug &&
    isServiceSpecific;

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-white p-6 shadow-sm"
      noValidate
    >
      <h2 className="text-2xl font-bold text-primary">
        {isServiceSpecific && serviceLabelForParam
          ? `Request ${serviceLabelForParam}`
          : "Request Service"}
      </h2>

      <p className="mt-2 text-sm text-muted">
        {isServiceSpecific && serviceLabelForParam
          ? `We're ready to help with ${serviceLabelForParam} in ${config.regionLine}. Share a few details and we'll follow up quickly.`
          : "Tell us what is happening and our team will follow up promptly."}
      </p>

      <p className="mt-4 text-xs font-semibold text-muted">Fields marked with * are required.</p>

      {isEmergency ? (
        <div className="mt-4 rounded-lg bg-warning p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">
            Need Immediate Help?
          </p>
          <p className="mt-2 text-sm font-bold">Call {config.phone} now.</p>
          <a
            href={`tel:${config.phone}`}
            className="mt-3 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100"
          >
            Call Now
          </a>
        </div>
      ) : null}

      {submitted ? (
        <p className="mt-4 rounded-md bg-emerald-50 p-3 text-sm font-medium text-emerald-700">
          Thanks! Your request was received on-screen. We will connect a real submission in the next
          phase.
        </p>
      ) : null}

      <div className="mt-5 grid gap-4">
        <label className="text-sm font-medium text-primary" htmlFor="name">
          Name *
        </label>
        <input
          id="name"
          className="rounded-md border border-border px-3 py-2 text-sm"
          value={formData.name}
          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
        />
        {errors.name ? <p className="text-xs text-red-600">{errors.name}</p> : null}

        <label className="text-sm font-medium text-primary" htmlFor="phone">
          Phone *
        </label>
        <input
          id="phone"
          className="rounded-md border border-border px-3 py-2 text-sm"
          value={formData.phone}
          onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
        />
        {errors.phone ? <p className="text-xs text-red-600">{errors.phone}</p> : null}

        <label className="text-sm font-medium text-primary" htmlFor="email">
          Email (optional)
        </label>
        <input
          id="email"
          type="email"
          className="rounded-md border border-border px-3 py-2 text-sm"
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
        />

        <label className="text-sm font-medium text-primary" htmlFor="serviceType">
          {isServiceSpecific ? "Service Type (pre-filled)" : "Service Type *"}
        </label>
        <select
          id="serviceType"
          className="rounded-md border border-border px-3 py-2 text-sm"
          value={formData.serviceType}
          onChange={(e) => setFormData((p) => ({ ...p, serviceType: e.target.value }))}
          disabled={isServiceSpecific}
        >
          <option value="">{isServiceSpecific ? "Selected" : "Select a service"}</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.serviceType ? <p className="text-xs text-red-600">{errors.serviceType}</p> : null}

        <label className="text-sm font-medium text-primary" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          className="rounded-md border border-border px-3 py-2 text-sm"
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
        />
        {errors.message ? <p className="text-xs text-red-600">{errors.message}</p> : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-primary" htmlFor="systemDetails">
              System / property details (optional)
            </label>
            <textarea
              id="systemDetails"
              rows={4}
              className="mt-2 rounded-md border border-border px-3 py-2 text-sm"
              value={formData.systemDetails}
              onChange={(e) => setFormData((p) => ({ ...p, systemDetails: e.target.value }))}
              placeholder="Model, age, access, anything that helps us prepare."
            />
          </div>
          <div>
            <label className="text-sm font-medium text-primary" htmlFor="propertyType">
              Property Type (optional)
            </label>
            <select
              id="propertyType"
              className="mt-2 rounded-md border border-border px-3 py-2 text-sm"
              value={formData.propertyType}
              onChange={(e) => setFormData((p) => ({ ...p, propertyType: e.target.value }))}
            >
              <option value="">Select</option>
              <option value="house">House</option>
              <option value="mobile-home">Mobile Home</option>
              <option value="apartment">Apartment</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-primary" htmlFor="preferredContactMethod">
              Preferred Contact (optional)
            </label>
            <select
              id="preferredContactMethod"
              className="mt-2 rounded-md border border-border px-3 py-2 text-sm"
              value={formData.preferredContactMethod}
              onChange={(e) =>
                setFormData((p) => ({ ...p, preferredContactMethod: e.target.value }))
              }
            >
              <option value="">Select</option>
              <option value="phone">Phone</option>
              <option value="text">Text</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
      >
        Send Request
      </button>
    </form>
  );
}
