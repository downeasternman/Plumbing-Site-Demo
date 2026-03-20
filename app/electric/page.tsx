import type { Metadata } from "next";
import FinancingSection from "@/components/sections/FinancingSection";
import ServiceCard from "@/components/sections/ServiceCard";
import TestimonialCard from "@/components/sections/TestimonialCard";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Same-Day Electrician",
  description:
    "Emergency electrical repairs, panel upgrades, EV chargers, and generator hookups in Washington County Maine.",
};

const BASE = "/electric";

const services = [
  {
    title: "Same-Day Repair",
    description:
      "Dead circuits, flickering lights, failed GFCIs—we troubleshoot quickly and repair to code.",
    serviceSlug: "same-day-repair",
  },
  {
    title: "Panel Upgrade / Safety",
    description:
      "Modernize overloaded panels, add capacity for heat pumps and EVs, and tighten up grounding.",
    serviceSlug: "panel-upgrade",
  },
  {
    title: "EV Charger Install",
    description:
      "Level 2 chargers wired right the first time with load planning for your service size.",
    serviceSlug: "ev-charger",
  },
  {
    title: "Lighting & Fixtures",
    description:
      "Recessed LED upgrades, exterior security lighting, and smart switch compatibility.",
    serviceSlug: "lighting",
  },
  {
    title: "Generator Hookup",
    description:
      "Transfer switches interlocked correctly—safe backfeed protection for storm season.",
    serviceSlug: "generator",
  },
  {
    title: "Emergency Electrical",
    description:
      "Burning smell, sparking devices, or partial power—call now for triage and safe shutdown steps.",
    serviceSlug: "emergency-electrical",
  },
];

const testimonials = [
  {
    quote: "Showed up same day, found the bad breaker fast, and explained it without jargon.",
    name: "Jordan L.",
    location: "Machias",
  },
  {
    quote: "Panel upgrade quote matched what we saw online—no mystery fees.",
    name: "Rita S.",
    location: "Calais",
  },
  {
    quote: "EV charger install looks clean. Inspector had zero punch list items.",
    name: "Tom G.",
    location: "Eastport",
  },
];

export default function ElectricHomePage() {
  return (
    <div>
      <section className="relative border-b border-yellow-500/30 py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/15 via-transparent to-transparent" />
        <div className="site-container relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300">
            Licensed • Insured • Same-day when available
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Power problems do not wait. Neither do we.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            Washington County electricians focused on safe repairs, panel upgrades you can trust, and
            installs that pass inspection the first time.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={`${BASE}/contact`} className="bg-yellow-400 text-zinc-950 hover:bg-yellow-300">
              Request Service
            </CTAButton>
            <CTAButton href="tel:207-555-0177" variant="secondary" className="border-yellow-500/50 bg-zinc-900 text-white hover:bg-zinc-800">
              Emergency Call
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-16 text-zinc-900">
        <div className="site-container">
          <SectionHeading
            eyebrow="Electrical services"
            title="From quick fixes to heavy-upgrades"
            description="Every truck is stocked for common failures. Bigger jobs get a written plan before we cut power."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.serviceSlug} {...s} basePath={BASE} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="site-container">
          <SectionHeading
            eyebrow="Proof"
            title="Homeowners mention speed and clarity"
            align="center"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-16 text-zinc-900">
        <div className="site-container">
          <FinancingSection contactHref={`${BASE}/contact`} />
        </div>
      </section>

      <section className="border-t border-yellow-500/40 py-14">
        <div className="site-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">Panel upgrades</p>
            <p className="mt-2 text-2xl font-bold text-white">Planning heat pumps or EV charging? Start with the service.</p>
          </div>
          <CTAButton href={`${BASE}/contact`} className="bg-yellow-400 text-zinc-950 hover:bg-yellow-300">
            Book assessment
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
