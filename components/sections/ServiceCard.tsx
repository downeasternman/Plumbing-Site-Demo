import CTAButton from "@/components/ui/CTAButton";

type ServiceCardProps = {
  title: string;
  description: string;
  serviceSlug: string;
};

export default function ServiceCard({
  title,
  description,
  serviceSlug,
}: ServiceCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      <CTAButton
        href={`/contact?service=${encodeURIComponent(serviceSlug)}`}
        className="mt-5 w-full"
        variant="secondary"
      >
        Request Service
      </CTAButton>
    </article>
  );
}
