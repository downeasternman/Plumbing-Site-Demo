type TestimonialCardProps = {
  quote: string;
  name: string;
  location: string;
};

export default function TestimonialCard({
  quote,
  name,
  location,
}: TestimonialCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 shadow-sm">
      <p className="text-sm leading-7 text-muted">&ldquo;{quote}&rdquo;</p>
      <p className="mt-4 text-sm font-semibold text-primary">{name}</p>
      <p className="text-xs uppercase tracking-wide text-muted">{location}</p>
    </article>
  );
}
