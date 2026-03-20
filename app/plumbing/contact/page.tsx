import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/forms/ContactForm";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { plumbingContactConfig } from "@/lib/contactFormConfigs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Downeast Plumbing Pros for service requests and 24/7 emergency plumbing in Washington County, Maine.",
};

export default function PlumbingContactPage() {
  return (
    <div className="site-container py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch with our local plumbing team"
        description="For urgent plumbing issues, call now. For non-emergency projects, use the form and we will follow up quickly."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <aside className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-primary">Contact Details</h2>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p>
              <span className="font-semibold text-primary">Phone:</span> 207-555-0147
            </p>
            <p>
              <span className="font-semibold text-primary">Email:</span> service@downeastplumbingpros.com
            </p>
            <p>
              <span className="font-semibold text-primary">Hours:</span> 24/7 Emergency Service, Mon-Sat
              Regular Scheduling
            </p>
            <p>
              <span className="font-semibold text-primary">Service Area:</span> Washington County including
              Machias, Calais, Eastport, and Milbridge.
            </p>
          </div>

          <div className="mt-6 rounded-lg bg-warning p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">
              Need Immediate Help?
            </p>
            <p className="mt-2 text-lg font-bold">Call our 24/7 emergency line now.</p>
            <CTAButton href="tel:207-555-0147" variant="secondary" className="mt-4">
              Call 207-555-0147
            </CTAButton>
          </div>
        </aside>

        <Suspense fallback={null}>
          <ContactForm config={plumbingContactConfig} />
        </Suspense>
      </div>
    </div>
  );
}
