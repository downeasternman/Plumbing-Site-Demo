"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { useSearchParams } from "next/navigation";

const COMPANY_PHONE = "207-555-0147";

const SERVICE_MAP = {
  "emergency-plumbing": "Emergency Plumbing",
  "water-heater-repair-replacement": "Water Heater",
  "drain-cleaning": "Drain Cleaning",
  "leak-repair": "Leak Repair",
  "fixture-installations": "Fixture Installation",
  "well-pump-pressure": "Well Pump & Pressure Support",
} as const;

type ServiceSlug = keyof typeof SERVICE_MAP;

type FormData = {
  name: string;
  phone: string;
  email: string;
  serviceType: string; // stored as label (easier to render in select)
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

export default function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service")?.trim() || "";

  const serviceLabelForParam = (serviceParam &&
    Object.prototype.hasOwnProperty.call(SERVICE_MAP, serviceParam)
    ? (SERVICE_MAP[serviceParam as ServiceSlug] as string)
    : null) as string | null;

  const isServiceSpecific = Boolean(serviceLabelForParam);
  const didTemplateRef = useRef(false);

  const [formData, setFormData] = useState<FormData>(() => {
    const presetServiceType = isServiceSpecific ? serviceLabelForParam ?? "" : "";
    return { ...initialState, serviceType: presetServiceType };
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = useMemo(() => Object.values(SERVICE_MAP), []);

  const messageTemplateByLabel = (label: string) => {
    if (label === SERVICE_MAP["emergency-plumbing"]) {
      return "Hi, I'm dealing with an active plumbing emergency. The issue started (today/yesterday), and the location is (kitchen/bath/basement).";
    }
    if (label === SERVICE_MAP["water-heater-repair-replacement"]) {
      return "Hi, my water heater has an issue. I'm noticing (no hot water/low hot water/leaking), and the problem started (date).";
    }
    if (label === SERVICE_MAP["drain-cleaning"]) {
      return "Hi, I need drain cleaning. The clog is in (kitchen/bath/main line), and water drains slowly or backs up (when).";
    }
    if (label === SERVICE_MAP["leak-repair"]) {
      return "Hi, I need a leak repair. I've noticed moisture/dripping near (location), and it seems to happen (constantly/after use).";
    }
    if (label === SERVICE_MAP["fixture-installations"]) {
      return "Hi, I need a fixture installation. I'd like help with (toilet/faucet/shower/disposal), and I can share measurements if needed.";
    }
    if (label === SERVICE_MAP["well-pump-pressure"]) {
      return "Hi, my well pump / water pressure is acting up. I'm seeing (low pressure/irregular flow), and it started around (date).";
    }
    return "";
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!formData.message.trim()) nextErrors.message = "Message is required.";

    // In generic mode (no query param), user must choose a service.
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
      const presetServiceType = isServiceSpecific && serviceLabelForParam ? serviceLabelForParam : prev.serviceType;
      return {
        ...initialState,
        // Keep the pre-selected service label after success, so users can submit again with one click.
        serviceType: presetServiceType,
      };
    });
  };

  useEffect(() => {
    // Reset templating when query changes.
    didTemplateRef.current = false;

    if (!isServiceSpecific) return;

    setFormData((prev) => {
      const shouldTemplate = !didTemplateRef.current && !prev.message.trim();
      if (shouldTemplate) didTemplateRef.current = true;

      return {
        ...prev,
        serviceType: serviceLabelForParam ?? prev.serviceType,
        message: shouldTemplate
          ? messageTemplateByLabel(serviceLabelForParam ?? prev.serviceType)
          : prev.message,
      };
    });
  }, [isServiceSpecific, serviceLabelForParam]);

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-white p-6 shadow-sm"
      noValidate
    >
      <h2 className="text-2xl font-bold text-primary">
        {isServiceSpecific && serviceLabelForParam ? `Request ${serviceLabelForParam}` : "Request Service"}
      </h2>

      <p className="mt-2 text-sm text-muted">
        {isServiceSpecific && serviceLabelForParam
          ? `We're ready to help with ${serviceLabelForParam} in Washington County. Share a few details and we'll follow up quickly.`
          : "Tell us what is happening and our team will follow up promptly."}
      </p>

      <p className="mt-4 text-xs font-semibold text-muted">
        Fields marked with * are required.
      </p>

      {isServiceSpecific && serviceLabelForParam === SERVICE_MAP["emergency-plumbing"] ? (
        <div className="mt-4 rounded-lg bg-warning p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">
            Need Immediate Help?
          </p>
          <p className="mt-2 text-sm font-bold">Call {COMPANY_PHONE} now.</p>
          <a
            href={`tel:${COMPANY_PHONE}`}
            className="mt-3 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100"
          >
            Call Now
          </a>
        </div>
      ) : null}

      {submitted ? (
        <p className="mt-4 rounded-md bg-emerald-50 p-3 text-sm font-medium text-emerald-700">
          Thanks! Your request was received on-screen. We will connect a real
          submission in the next phase.
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
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        {errors.name ? <p className="text-xs text-red-600">{errors.name}</p> : null}

        <label className="text-sm font-medium text-primary" htmlFor="phone">
          Phone *
        </label>
        <input
          id="phone"
          className="rounded-md border border-border px-3 py-2 text-sm"
          value={formData.phone}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, phone: event.target.value }))
          }
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
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
        />

        <label className="text-sm font-medium text-primary" htmlFor="serviceType">
          {isServiceSpecific ? "Service Type (pre-filled)" : "Service Type *"}
        </label>
        <select
          id="serviceType"
          className="rounded-md border border-border px-3 py-2 text-sm"
          value={formData.serviceType}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, serviceType: event.target.value }))
          }
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
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, message: event.target.value }))
          }
        />
        {errors.message ? <p className="text-xs text-red-600">{errors.message}</p> : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-primary" htmlFor="systemDetails">
              System Details (optional)
            </label>
            <textarea
              id="systemDetails"
              rows={4}
              className="mt-2 rounded-md border border-border px-3 py-2 text-sm"
              value={formData.systemDetails}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  systemDetails: event.target.value,
                }))
              }
              placeholder="Example: model/age, fuel type, etc. Anything else you think is relevant."
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
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  propertyType: event.target.value,
                }))
              }
            >
              <option value="">Select</option>
              <option value="house">House</option>
              <option value="mobile-home">Mobile Home</option>
              <option value="apartment">Apartment</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div>
            <label
              className="text-sm font-medium text-primary"
              htmlFor="preferredContactMethod"
            >
              Preferred Contact Method (optional)
            </label>
            <select
              id="preferredContactMethod"
              className="mt-2 rounded-md border border-border px-3 py-2 text-sm"
              value={formData.preferredContactMethod}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  preferredContactMethod: event.target.value,
                }))
              }
            >
              <option value="">Select</option>
              <option value="phone">Phone call</option>
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

