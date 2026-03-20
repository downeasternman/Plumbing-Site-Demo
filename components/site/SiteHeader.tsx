import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

type SiteHeaderProps = {
  basePath: string;
  brand: string;
  phone: string;
  className?: string;
  brandClassName?: string;
  navClassName?: string;
};

export default function SiteHeader({
  basePath,
  brand,
  phone,
  className = "",
  brandClassName = "text-primary",
  navClassName = "text-muted",
}: SiteHeaderProps) {
  const nav = [
    { href: basePath, label: "Home" },
    { href: `${basePath}/services`, label: "Services" },
    { href: `${basePath}/about`, label: "About" },
    { href: `${basePath}/contact`, label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-20 border-b border-border bg-white/95 backdrop-blur ${className}`}
    >
      <div className="site-container flex items-center justify-between gap-4 py-4">
        <Link
          href={basePath}
          className={`text-lg font-extrabold tracking-tight ${brandClassName}`}
        >
          {brand}
        </Link>
        <nav className={`hidden items-center gap-6 text-sm font-semibold md:flex ${navClassName}`}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="opacity-90 hover:opacity-100">
              {item.label}
            </Link>
          ))}
        </nav>
        <CTAButton href={`tel:${phone}`} className="shrink-0">
          Call Now
        </CTAButton>
      </div>
    </header>
  );
}
