import type { Metadata } from "next";
import FinancingSection from "@/components/sections/FinancingSection";
import ServiceCard from "@/components/sections/ServiceCard";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Plumbing Services",
  description:
    "Emergency plumbing, water heater service, drain cleaning, leak repairs, and more in Washington County, Maine.",
};

const BASE = "/plumbing";

const services = [
  {
    title: "Emergency Plumbing",
    description:
      "Rapid dispatch for burst pipes, active leaks, no-water issues, and urgent plumbing failures.",
    serviceSlug: "emergency-plumbing",
  },
  {
    title: "Water Heater Repair & Replacement",
    description:
      "Diagnostic repairs and high-efficiency replacements for tank and tankless water heaters.",
    serviceSlug: "water-heater-repair-replacement",
  },
  {
    title: "Drain Cleaning & Clog Removal",
    description:
      "Professional cleaning for kitchen, bathroom, and main line drains to restore proper flow.",
    serviceSlug: "drain-cleaning",
  },
  {
    title: "Pipe Leak Repair",
    description:
      "Fast leak detection and targeted repairs to stop water damage and reduce waste.",
    serviceSlug: "leak-repair",
  },
  {
    title: "Fixture Installations",
    description:
      "Code-compliant installation of toilets, faucets, showers, disposals, and laundry hookups.",
    serviceSlug: "fixture-installations",
  },
  {
    title: "Well Pump & Pressure Support",
    description:
      "Rural water system troubleshooting for low pressure, intermittent flow, and equipment wear.",
    serviceSlug: "well-pump-pressure",
  },
];

export default function PlumbingServicesPage() {
  return (
    <div className="site-container py-16">
      <section className="rounded-2xl bg-primary p-8 text-white md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
          Full-Service Plumbing
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Plumbing solutions built for Maine homes</h1>
        <p className="mt-4 max-w-2xl text-blue-100">
          We combine fast response and durable workmanship so repairs hold up in every season.
        </p>
        <div className="mt-6">
          <CTAButton href={`${BASE}/contact`}>Schedule Service</CTAButton>
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="Our Services"
          title="What we handle every day"
          description="If your plumbing issue is disrupting your routine, we can diagnose it quickly and recommend the best path forward."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} basePath={BASE} />
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-border bg-white p-8">
        <SectionHeading eyebrow="How It Works" title="A simple 3-step process" />
        <ol className="mt-6 grid gap-4 text-sm text-muted md:grid-cols-3">
          <li className="rounded-lg border border-border p-4">1) Call or request service online.</li>
          <li className="rounded-lg border border-border p-4">
            2) We diagnose and explain options with clear pricing.
          </li>
          <li className="rounded-lg border border-border p-4">
            3) We complete the repair and confirm everything works properly.
          </li>
        </ol>
      </section>

      <section className="mt-14">
        <FinancingSection contactHref={`${BASE}/contact`} />
      </section>

      <section className="mt-14 rounded-2xl bg-slate-100 p-8">
        <h2 className="text-3xl font-bold text-primary">Need help choosing the right repair?</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Talk with our team for honest guidance and next-step recommendations.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CTAButton href={`${BASE}/contact`}>Contact Us</CTAButton>
          <CTAButton href="tel:207-555-0147" variant="secondary">
            Call 207-555-0147
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
