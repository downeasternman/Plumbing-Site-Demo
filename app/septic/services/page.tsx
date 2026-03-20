import type { Metadata } from "next";
import ServiceCard from "@/components/sections/ServiceCard";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Septic Services",
  description: "Septic pumping, inspections, repairs, real estate documentation, and grease trap service.",
};

const BASE = "/septic";

const services = [
  {
    title: "Septic Tank Pumping",
    description: "Routine pump-outs sized to your household usage and tank capacity.",
    serviceSlug: "tank-pumping",
  },
  {
    title: "Septic Inspection",
    description: "Condition assessment with notes you can share with buyers or agents.",
    serviceSlug: "inspection",
  },
  {
    title: "Repair / Baffle / Risers",
    description: "Targeted repairs to extend system life and improve safe access.",
    serviceSlug: "repair-replace",
  },
  {
    title: "Real Estate / Inspection Letter",
    description: "Closing-friendly timelines and documentation packages.",
    serviceSlug: "real-estate",
  },
  {
    title: "Grease Trap Pumping",
    description: "Commercial and camp kitchens—scheduled or on-call pumping.",
    serviceSlug: "grease-trap",
  },
  {
    title: "Backup / Emergency",
    description: "Fast response when alarms trip or drains fail across the system.",
    serviceSlug: "septic-emergency",
  },
];

export default function SepticServicesPage() {
  return (
    <div className="site-container py-16">
      <header className="rounded-xl border-2 border-emerald-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-emerald-950 md:text-4xl">Septic services menu</h1>
        <p className="mt-3 max-w-2xl text-stone-600">
          Rural driveways, tight camps, and full-time homes—we plan access and leave the work area tidy.
        </p>
        <div className="mt-6">
          <CTAButton href={`${BASE}/contact`} className="bg-emerald-700 hover:bg-emerald-600">
            Request service
          </CTAButton>
        </div>
      </header>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.serviceSlug} {...s} basePath={BASE} />
        ))}
      </div>
    </div>
  );
}
