import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Our Team",
  description:
    "Learn about Downeast Plumbing Pros, a Washington County focused plumbing company committed to dependable service and quality workmanship.",
};

const BASE = "/plumbing";

export default function PlumbingAboutPage() {
  return (
    <div className="site-container py-16">
      <section>
        <SectionHeading
          eyebrow="About Downeast Plumbing Pros"
          title="A local team focused on reliable service and honest work"
          description="We are built around one promise: when a plumbing issue affects your home, you get fast communication, skilled repairs, and respectful service."
        />
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-primary">Our Story</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Founded to serve homeowners across Washington County, our team grew from local referrals
            and repeat customers who value dependable workmanship. We understand the plumbing
            challenges Maine homes face, from winter freeze risks to aging piping systems.
          </p>
        </article>
        <article className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-primary">Why Homeowners Choose Us</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>- Fast response and clear arrival windows.</li>
            <li>- Friendly, professional technicians.</li>
            <li>- Upfront recommendations with transparent pricing.</li>
            <li>- Respect for your home and cleanup after work.</li>
          </ul>
        </article>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-primary">Our Standards</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          We hold every job to the same standard: safe repairs, code-compliant workmanship, and
          communication you can trust. We are proud to support communities in Machias, Calais,
          Eastport, Milbridge, and beyond.
        </p>
      </section>

      <section className="mt-12 rounded-2xl bg-primary p-8 text-white md:p-10">
        <h2 className="text-3xl font-bold">Work with a plumber you can count on</h2>
        <p className="mt-3 max-w-2xl text-blue-100">
          Reach out for scheduling, emergency help, or a no-pressure conversation about your plumbing
          options.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CTAButton href={`${BASE}/contact`}>Book Service</CTAButton>
          <CTAButton href="tel:207-555-0147" variant="secondary">
            Call 207-555-0147
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
