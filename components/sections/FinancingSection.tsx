import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FinancingSection() {
  return (
    <section className="rounded-2xl border border-border bg-surface p-8 shadow-sm md:p-10">
      <SectionHeading
        eyebrow="Budget-Friendly Options"
        title="Financing that keeps your home running"
        description="From emergency repairs to full replacements, ask about flexible monthly payment options so you can fix the problem now without delaying comfort."
      />
      <div className="mt-6">
        <CTAButton href="/contact">Ask About Financing</CTAButton>
      </div>
    </section>
  );
}
