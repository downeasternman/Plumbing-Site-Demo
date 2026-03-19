import CTAButton from "@/components/ui/CTAButton";

const COMPANY_PHONE = "207-555-0147";

export default function EmergencyBanner() {
  return (
    <div className="bg-warning">
      <div className="site-container flex flex-col items-start gap-2 py-3 text-sm md:flex-row md:items-center md:justify-between">
        <p className="font-semibold text-white">
          24/7 Emergency Plumbing in Washington County - Dispatch in minutes.
        </p>
        <CTAButton
          href={`tel:${COMPANY_PHONE}`}
          variant="secondary"
          className="shrink-0 whitespace-nowrap"
        >
          Call {COMPANY_PHONE}
        </CTAButton>
      </div>
    </div>
  );
}
