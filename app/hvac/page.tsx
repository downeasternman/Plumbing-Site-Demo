import type { Metadata } from "next";
import FinancingSection from "@/components/sections/FinancingSection";
import ServiceCard from "@/components/sections/ServiceCard";
import TestimonialCard from "@/components/sections/TestimonialCard";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Heat Pump Tune-Up & HVAC",
  description:
    "Heat pump tune-ups, AC repair, and furnace service in Downeast Maine. Book comfort service and ask about financing.",
};

const BASE = "/hvac";

const services = [
  {
    title: "Heat Pump Tune-Up",
    description:
      "Precision cleaning, refrigerant check, and defrost cycle verification so your heat pump keeps efficiency in Maine winters.",
    serviceSlug: "heat-pump-tune-up",
  },
  {
    title: "AC Repair",
    description:
      "Fast diagnosis for weak cooling, frozen lines, and airflow problems—with clear repair vs replace guidance.",
    serviceSlug: "ac-repair",
  },
  {
    title: "Furnace Service",
    description:
      "Safety inspections, burner cleaning, and heat exchanger checks for dependable heat when it counts.",
    serviceSlug: "furnace-service",
  },
  {
    title: "Ductless / Mini-Split",
    description:
      "Zoned comfort without ductwork—great for additions, sunrooms, and tight coastal builds.",
    serviceSlug: "ductless-mini-split",
  },
  {
    title: "Indoor Air Quality",
    description:
      "Filtration upgrades, humidity balance, and recommendations that pair with your existing system.",
    serviceSlug: "air-quality",
  },
  {
    title: "Maintenance Plans",
    description:
      "Seasonal reminders, priority scheduling, and predictable budgeting for yearly tune-ups.",
    serviceSlug: "maintenance-plan",
  },
];

const testimonials = [
  {
    quote: "Heat pump tune-up was thorough. Bills stayed lower than neighbors last winter.",
    name: "Chris M.",
    location: "Ellsworth",
  },
  {
    quote: "They explained the repair clearly and did not push a full replacement.",
    name: "Laura P.",
    location: "Bar Harbor",
  },
  {
    quote: "Same-week service for AC during a humid stretch. House felt livable again fast.",
    name: "Dan R.",
    location: "Blue Hill",
  },
];

export default function HvacHomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-700 py-16 text-white md:py-20">
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="site-container relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
              Heat pumps • AC • Furnaces
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              Comfort that holds up in Maine weather.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-cyan-50">
              Book a heat pump tune-up, fix an AC issue fast, and get straight answers about efficiency
              and financing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={`${BASE}/contact`} className="bg-white text-sky-800 hover:bg-cyan-50">
                Book Tune-Up
              </CTAButton>
              <CTAButton href={`tel:207-555-0199`} variant="secondary">
                Call 207-555-0199
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur">
              <p className="text-4xl font-black">24/7</p>
              <p className="mt-1 text-sm text-cyan-100">Emergency comfort dispatch</p>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur">
              <p className="text-4xl font-black">NEEP</p>
              <p className="mt-1 text-sm text-cyan-100">Cold-climate heat pump aware</p>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur sm:col-span-2">
              <p className="text-sm font-semibold text-cyan-100">Included on tune-ups</p>
              <ul className="mt-2 list-inside list-disc text-sm text-white/90">
                <li>Coil & drain attention</li>
                <li>Electrical & safety checks</li>
                <li>Performance + defrost verification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <SectionHeading
          eyebrow="HVAC Services"
          title="Tune-ups today, fewer surprises tomorrow"
          description="We prioritize efficiency, clear pricing, and repairs that last through salt air, humidity, and cold snaps."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} basePath={BASE} />
          ))}
        </div>
      </section>

      <section className="border-y border-cyan-100 bg-white py-16">
        <div className="site-container">
          <SectionHeading
            eyebrow="Reviews"
            title="Neighbors trust us with comfort decisions"
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

      <section className="bg-sky-900 py-14 text-white">
        <div className="site-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Efficiency</p>
            <p className="mt-2 text-2xl font-bold">Ask about rebates and monthly payment options.</p>
          </div>
          <CTAButton href={`${BASE}/contact`} className="bg-cyan-400 text-sky-950 hover:bg-cyan-300">
            Get Options
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
