import type { Metadata } from "next";
import FinancingSection from "@/components/sections/FinancingSection";
import ServiceCard from "@/components/sections/ServiceCard";
import TestimonialCard from "@/components/sections/TestimonialCard";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Plumber in Washington County, Maine",
  description:
    "Need a reliable local plumber? Downeast Plumbing Pros provides fast service, clear pricing, and 24/7 emergency support across Washington County.",
};

const BASE = "/plumbing";

const homeServices = [
  {
    title: "24/7 Emergency Plumbing",
    description:
      "Burst pipe or sudden leak? Our local team responds quickly to protect your home and restore service.",
    serviceSlug: "emergency-plumbing",
  },
  {
    title: "Water Heater Repair & Install",
    description:
      "From no-hot-water calls to efficient new systems, we fix and replace tank and tankless units.",
    serviceSlug: "water-heater-repair-replacement",
  },
  {
    title: "Drain Cleaning",
    description:
      "Recurring clogs and slow drains are cleared safely with tools designed for long-lasting flow.",
    serviceSlug: "drain-cleaning",
  },
  {
    title: "Leak Detection & Pipe Repair",
    description:
      "We find hidden leaks fast, repair damaged lines, and help prevent expensive water damage.",
    serviceSlug: "leak-repair",
  },
  {
    title: "Fixture Upgrades",
    description:
      "Installations for faucets, toilets, showers, and disposals with clean workmanship and code compliance.",
    serviceSlug: "fixture-installations",
  },
  {
    title: "Well Pump & Pressure Issues",
    description:
      "Rural property water pressure problems diagnosed and corrected for stable, reliable daily use.",
    serviceSlug: "well-pump-pressure",
  },
];

const testimonials = [
  {
    quote:
      "They arrived fast during a winter pipe emergency and got us back up the same day.",
    name: "Sarah T.",
    location: "Machias",
  },
  {
    quote:
      "Clear pricing, respectful technicians, and no surprises. Best plumbing service we have used.",
    name: "James R.",
    location: "Calais",
  },
  {
    quote:
      "Our water heater replacement was smooth and professional from first call to final walkthrough.",
    name: "Erin M.",
    location: "Milbridge",
  },
];

export default function PlumbingHomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-strong py-16 text-white md:py-24">
        <div className="site-container">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            Washington County Trusted Plumber
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Fast, dependable plumbing service when your home needs it most.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
            Downeast Plumbing Pros helps homeowners in Machias, Calais, Eastport, Milbridge, and
            nearby communities with honest pricing, skilled technicians, and 24/7 emergency response.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={`${BASE}/contact`}>Schedule Service</CTAButton>
            <CTAButton href="tel:207-555-0147" variant="secondary">
              Call 24/7: 207-555-0147
            </CTAButton>
          </div>
          <div className="mt-10 grid gap-4 text-sm md:grid-cols-3">
            <p className="rounded-md bg-white/10 p-4">Licensed & insured team</p>
            <p className="rounded-md bg-white/10 p-4">Clear upfront recommendations</p>
            <p className="rounded-md bg-white/10 p-4">Emergency dispatch day or night</p>
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <SectionHeading
          eyebrow="Plumbing Services"
          title="High-priority repairs and everyday plumbing done right"
          description="We focus on quick diagnosis, durable fixes, and clean workmanship so you can get back to normal fast."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service) => (
            <ServiceCard key={service.title} {...service} basePath={BASE} />
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="site-container">
          <SectionHeading
            eyebrow="Customer Results"
            title="Homeowners count on us for speed and peace of mind"
            align="center"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <FinancingSection contactHref={`${BASE}/contact`} />
      </section>

      <section className="bg-warning py-12 text-white">
        <div className="site-container flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">
              Emergency Service
            </p>
            <p className="mt-2 text-2xl font-bold">Plumbing crisis? We are on call 24/7.</p>
          </div>
          <CTAButton href="tel:207-555-0147" variant="secondary">
            Call Emergency Line
          </CTAButton>
        </div>
      </section>

      <section className="site-container py-16">
        <div className="rounded-2xl bg-primary p-8 text-white md:p-10">
          <h2 className="text-3xl font-bold">Book trusted local plumbing today</h2>
          <p className="mt-3 max-w-2xl text-blue-100">
            Tell us what is going on and we will help you schedule fast.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={`${BASE}/contact`}>Get a Free Estimate</CTAButton>
            <CTAButton href={`${BASE}/services`} variant="secondary">
              Explore Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
