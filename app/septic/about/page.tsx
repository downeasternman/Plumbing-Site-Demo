import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description: "Local septic pumping crew focused on clear communication and responsible disposal.",
};

const BASE = "/septic";

export default function SepticAboutPage() {
  return (
    <div className="site-container max-w-3xl py-16">
      <h1 className="text-4xl font-bold text-emerald-950">Grounded work, plain language</h1>
      <p className="mt-4 text-lg text-stone-700">
        We started as a two-truck operation serving Washington County lots and camps. Today we still
        answer the phone ourselves and explain what your system needs—without ringing alarm bells for
        easy upsells.
      </p>
      <div className="mt-10 space-y-6 text-stone-600">
        <p>
          Our techs note access constraints (steep drives, soft lawns) and communicate if a second
          truck day makes more sense than forcing a pump in bad conditions.
        </p>
        <p>
          Inspections include what we can see safely—if cameras or dig work are needed, you get options
          before we proceed.
        </p>
      </div>
      <div className="mt-10">
        <CTAButton href={`${BASE}/contact`} className="bg-emerald-700 hover:bg-emerald-600">
          Talk with us
        </CTAButton>
      </div>
    </div>
  );
}
