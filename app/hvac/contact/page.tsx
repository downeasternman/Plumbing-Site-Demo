import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/forms/ContactForm";
import CTAButton from "@/components/ui/CTAButton";
import { hvacContactConfig } from "@/lib/contactFormConfigs";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request HVAC service, tune-ups, or emergency comfort help in Downeast Maine.",
};

export default function HvacContactPage() {
  return (
    <div className="site-container py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-black text-slate-900">Request service</h1>
        <p className="mt-3 text-slate-600">
          Urgent no-heat or no-AC? Call now. Otherwise send details and we will confirm by phone.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <aside className="rounded-2xl border border-cyan-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-sky-900">Contact</h2>
          <p className="mt-3 text-sm text-slate-600">Phone: 207-555-0199</p>
          <p className="text-sm text-slate-600">Email: comfort@peninsulahvac-demo.com</p>
          <CTAButton href="tel:207-555-0199" className="mt-4">
            Call 207-555-0199
          </CTAButton>
        </aside>
        <Suspense fallback={null}>
          <ContactForm config={hvacContactConfig} />
        </Suspense>
      </div>
    </div>
  );
}
