import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors whitespace-nowrap";
  const variantClasses =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-strong"
      : "border border-border bg-white text-slate-950 hover:bg-slate-100";

  const classes = `${baseClasses} ${variantClasses} ${className}`;
  const isExternalAction =
    href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");

  if (isExternalAction) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
