import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description: "BrightWire Electric: code-first workmanship and honest electrical assessments.",
};

const BASE = "/electric";

export default function ElectricAboutPage() {
  return (
    <div className="site-container py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black text-white">We like boring panels</h1>
        <p className="mt-4 text-lg text-zinc-400">
          Safe splices, correct torque, and neat labeling—that is what prevents callbacks. We train on
          updated NEC practices and photograph major steps when helpful for your records.
        </p>
        <ul className="mt-8 list-inside list-disc space-y-3 text-zinc-300">
          <li>No scare tactics on minor findings</li>
          <li>Written options when a repair vs replacement decision matters</li>
          <li>Same-day availability when scheduling allows</li>
        </ul>
        <div className="mt-10">
          <CTAButton href={`${BASE}/contact`} className="bg-yellow-400 text-zinc-950 hover:bg-yellow-300">
            Contact
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
