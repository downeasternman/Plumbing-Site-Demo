import type { Metadata } from "next";
import FinancingSection from "@/components/sections/FinancingSection";
import ServiceCard from "@/components/sections/ServiceCard";
import TestimonialCard from "@/components/sections/TestimonialCard";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Septic Pumping & Inspections",
  description:
    "Septic tank pumping, inspections, and emergency backup response for Washington County Maine properties.",
};

const BASE = "/septic";

const services = [
  {
    title: "Tank Pumping",
    description:
      "Complete pump-out with lid access notes, level checks, and realistic next-service guidance.",
    serviceSlug: "tank-pumping",
  },
  {
    title: "Septic Inspection",
    description:
      "Real estate, system health, and preventive inspections with clear written findings.",
    serviceSlug: "inspection",
  },
  {
    title: "Repairs & Risers",
    description:
      "Baffles, risers, broken lids, and small fixes that prevent bigger problems down the road.",
    serviceSlug: "repair-replace",
  },
  {
    title: "Real Estate Letters",
    description:
      "Timelines that match closings—documentation buyers, sellers, and agents can rely on.",
    serviceSlug: "real-estate",
  },
  {
    title: "Grease Trap Pumping",
    description:
      "Small commercial and camp kitchens—keep compliance simple and odors under control.",
    serviceSlug: "grease-trap",
  },
  {
    title: "Backup / Emergency",
    description:
      "Slow drains, alarms, or surfacing effluent—fast triage to protect your property.",
    serviceSlug: "septic-emergency",
  },
];

const testimonials = [
  {
    quote: "They explained what the tank actually needed instead of pushing extras.",
    name: "Kim W.",
    location: "Jonesport",
  },
  {
    quote: "Inspection letter arrived in time for closing—no drama.",
    name: "Alex B.",
    location: "Machias",
  },
  {
    quote: "Pumping crew was careful with the lawn and left the site tidy.",
    name: "Pat N.",
    location: "Calais",
  },
];

export default function SepticHomePage() {
  return (
    <div>
      <section className="border-b-4 border-emerald-700 bg-stone-900 py-16 text-stone-50 md:py-20">
        <div className="site-container flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Septic pumping • Inspections
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Protect your property with honest septic care.
            </h1>
            <p className="mt-5 text-lg text-stone-300">
              Schedule pumping before backups happen. Need an inspection for a sale? We document clearly
              and keep timelines predictable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={`${BASE}/contact`} className="bg-emerald-600 hover:bg-emerald-500">
                Schedule Pumping
              </CTAButton>
              <CTAButton
                href={`${BASE}/contact?service=inspection`}
                variant="secondary"
                className="border-stone-500 bg-stone-800 text-white hover:bg-stone-700"
              >
                Request Inspection
              </CTAButton>
            </div>
          </div>
          <div className="w-full max-w-sm rounded-lg border border-stone-600 bg-stone-800/80 p-6">
            <p className="text-sm font-semibold text-emerald-300">Straight answers</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-300">
              <li>• Realistic pump intervals for your household</li>
              <li>• Photos when access is tricky</li>
              <li>• No scare tactics—just what the tank shows</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <SectionHeading
          eyebrow="Services"
          title="What we do on site"
          description="Choose a service—we will confirm tank location notes and truck access before we head your way."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.serviceSlug} {...s} basePath={BASE} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="site-container">
          <SectionHeading
            eyebrow="Local reputation"
            title="Neighbors recommend us for clear communication"
            align="center"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <FinancingSection contactHref={`${BASE}/contact`} />
      </section>
    </div>
  );
}
