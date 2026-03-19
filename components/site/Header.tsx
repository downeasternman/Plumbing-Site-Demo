import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-white/95 backdrop-blur">
      <div className="site-container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-primary">
          Downeast Plumbing Pros
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <CTAButton href="tel:207-555-0147" className="shrink-0">
          Call Now
        </CTAButton>
      </div>
    </header>
  );
}
