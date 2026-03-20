import type { Metadata } from "next";
import FinancingSection from "@/components/sections/FinancingSection";
import ServiceCard from "@/components/sections/ServiceCard";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "HVAC Services",
  description:
    "Heat pump tune-ups, air conditioning repair, furnace services, ductless systems, and maintenance plans.",
};

const BASE = "/hvac";

const services = [
  {
    title: "No Heat / No AC (Urgent)",
    description:
      "Priority routing when comfort is down—diagnose fast, repair or stabilize same day when possible.",
    serviceSlug: "no-heat-no-ac",
  },
  {
    title: "Heat Pump Tune-Up",
    description:
      "Seasonal performance pass: coils, drains, electrical checks, defrost, and airflow verification.",
    serviceSlug: "heat-pump-tune-up",
  },
  {
    title: "AC Repair",
    description: "Refrigerant leaks, weak cooling, frozen lines, and indoor/outdoor unit faults.",
    serviceSlug: "ac-repair",
  },
  {
    title: "Furnace Service",
    description: "Ignition, safety, heat exchanger checks, and reliable heat restoration.",
    serviceSlug: "furnace-service",
  },
  {
    title: "Ductless / Mini-Split",
    description: "Multi-zone comfort installs and repairs for homes without ductwork.",
    serviceSlug: "ductless-mini-split",
  },
  {
    title: "Indoor Air Quality",
    description: "Filtration upgrades and humidity guidance matched to your equipment.",
    serviceSlug: "air-quality",
  },
  {
    title: "Maintenance Plans",
    description: "Seasonal scheduling and priority service for yearly tune-ups.",
    serviceSlug: "maintenance-plan",
  },
];

export default function HvacServicesPage() {
  return (
    <div className="site-container py-16">
      <section className="rounded-3xl border border-cyan-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">HVAC Services</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
          Efficiency-first comfort for coastal Maine
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          From tune-ups to urgent no-heat calls, we show options clearly and respect your budget.
        </p>
        <div className="mt-6">
          <CTAButton href={`${BASE}/contact`}>Schedule Service</CTAButton>
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="What We Do"
          title="Services homeowners request most"
          description="Pick what you need—we will confirm details before we dispatch."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.serviceSlug} {...s} basePath={BASE} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <FinancingSection contactHref={`${BASE}/contact`} />
      </section>
    </div>
  );
}
