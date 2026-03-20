import type { Metadata } from "next";
import ServiceCard from "@/components/sections/ServiceCard";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Electrical Services",
  description: "Emergency electrical, panel upgrades, EV chargers, lighting, generators, and repairs.",
};

const BASE = "/electric";

const services = [
  {
    title: "Emergency Electrical",
    description: "Unsafe conditions, partial outages, and burning smells—priority response.",
    serviceSlug: "emergency-electrical",
  },
  {
    title: "Same-Day Repair",
    description: "Tripped AFCI/GFCI mysteries, dead outlets, buzzing panels, and more.",
    serviceSlug: "same-day-repair",
  },
  {
    title: "Panel Upgrade / Safety",
    description: "Service upgrades, breaker replacements, and grounding improvements.",
    serviceSlug: "panel-upgrade",
  },
  {
    title: "EV Charger Install",
    description: "Wall connectors and hardwired units with compliant overcurrent protection.",
    serviceSlug: "ev-charger",
  },
  {
    title: "Lighting & Fixtures",
    description: "Upgrades that cut demand and improve visibility indoors and out.",
    serviceSlug: "lighting",
  },
  {
    title: "Generator Hookup",
    description: "Transfer equipment installed with clear labeling and safe sequencing.",
    serviceSlug: "generator",
  },
];

export default function ElectricServicesPage() {
  return (
    <div className="bg-zinc-100 py-16 text-zinc-900">
      <div className="site-container">
        <h1 className="text-4xl font-black">Electrical service menu</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Tell us what is going on—we will confirm scope and pricing before work begins.
        </p>
        <div className="mt-6">
          <CTAButton href={`${BASE}/contact`} className="bg-yellow-500 text-zinc-950 hover:bg-yellow-400">
            Request service
          </CTAButton>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.serviceSlug} {...s} basePath={BASE} />
          ))}
        </div>
      </div>
    </div>
  );
}
