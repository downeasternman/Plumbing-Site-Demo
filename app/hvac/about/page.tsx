import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Peninsula Comfort HVAC: local technicians focused on heat pumps, honest recommendations, and long-term comfort.",
};

const BASE = "/hvac";

export default function HvacAboutPage() {
  return (
    <div className="site-container py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Our team</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
          Built for Maine weather, not upsells.
        </h1>
        <p className="mt-5 text-lg text-slate-600">
          We are a small crew focused on tune-ups, repairs, and clean installs. You get straight talk,
          photos when helpful, and pricing before work starts.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { t: "Cold-climate experience", d: "Heat pumps sized and serviced for real winter loads." },
          { t: "Clear options", d: "Repair vs replace decisions with written notes you can keep." },
          { t: "Respect for your home", d: "Boot covers, tidy workspaces, and careful finish work." },
        ].map((x) => (
          <div
            key={x.t}
            className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-bold text-sky-800">{x.t}</h2>
            <p className="mt-2 text-sm text-slate-600">{x.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-600 p-8 text-white md:p-10">
        <h2 className="text-2xl font-bold">Ready when you are</h2>
        <p className="mt-2 max-w-xl text-cyan-50">
          Book online or call—we will confirm timing and what to expect on arrival.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CTAButton href={`${BASE}/contact`} variant="secondary">
            Book Online
          </CTAButton>
          <CTAButton href="tel:207-555-0199" className="bg-white text-sky-800 hover:bg-cyan-50">
            Call Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
