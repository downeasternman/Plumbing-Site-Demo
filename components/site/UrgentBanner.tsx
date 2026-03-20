import CTAButton from "@/components/ui/CTAButton";

type UrgentBannerProps = {
  message: string;
  phone: string;
  className?: string;
  messageClassName?: string;
};

export default function UrgentBanner({
  message,
  phone,
  className = "bg-warning",
  messageClassName = "text-white",
}: UrgentBannerProps) {
  return (
    <div className={className}>
      <div className="site-container flex flex-col items-start gap-2 py-3 text-sm md:flex-row md:items-center md:justify-between">
        <p className={`font-semibold ${messageClassName}`}>{message}</p>
        <CTAButton href={`tel:${phone}`} variant="secondary" className="shrink-0 whitespace-nowrap">
          Call {phone}
        </CTAButton>
      </div>
    </div>
  );
}
