import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/forms/ContactForm";
import CTAButton from "@/components/ui/CTAButton";
import { electricContactConfig } from "@/lib/contactFormConfigs";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request electrical service or emergency help in Washington County.",
};

export default function ElectricContactPage() {
  return (
    <div className="site-container py-16">
      <h1 className="text-3xl font-black text-white">Contact BrightWire</h1>
      <p className="mt-2 text-zinc-400">Emergency? Call now. Otherwise use the form.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <aside className="rounded-xl border border-yellow-500/40 bg-zinc-900 p-6">
          <CTAButton href="tel:207-555-0177" className="bg-yellow-400 text-zinc-950 hover:bg-yellow-300">
            Call 207-555-0177
          </CTAButton>
          <p className="mt-4 text-sm text-zinc-400">Email: service@brightwire-demo.com</p>
        </aside>
        <Suspense fallback={null}>
          <ContactForm config={electricContactConfig} />
        </Suspense>
      </div>
    </div>
  );
}
