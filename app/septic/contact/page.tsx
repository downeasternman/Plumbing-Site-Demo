import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/forms/ContactForm";
import CTAButton from "@/components/ui/CTAButton";
import { septicContactConfig } from "@/lib/contactFormConfigs";

export const metadata: Metadata = {
  title: "Contact",
  description: "Schedule septic pumping, inspections, or emergency backup response.",
};

export default function SepticContactPage() {
  return (
    <div className="site-container py-16">
      <h1 className="text-3xl font-bold text-emerald-950">Request septic service</h1>
      <p className="mt-2 text-stone-600">
        Active backup? Call <span className="font-semibold">207-555-0188</span> now. Otherwise use the
        form.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <aside className="rounded-xl border-2 border-emerald-200 bg-white p-6">
          <CTAButton href="tel:207-555-0188" className="bg-emerald-700 hover:bg-emerald-600">
            Call 207-555-0188
          </CTAButton>
          <p className="mt-4 text-sm text-stone-600">Email: pumping@downeastseptic-demo.com</p>
        </aside>
        <Suspense fallback={null}>
          <ContactForm config={septicContactConfig} />
        </Suspense>
      </div>
    </div>
  );
}
