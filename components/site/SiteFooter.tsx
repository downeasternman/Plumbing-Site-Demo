import Link from "next/link";
import { DEMO_OWNER_CTA_LABEL, DEMO_OWNER_MAILTO } from "@/lib/demoOwner";

type SiteFooterProps = {
  basePath: string;
  brand: string;
  tagline: string;
  serviceArea: string;
  phone: string;
  /** Tailwind classes for footer background/text */
  className?: string;
  linkClassName?: string;
};

export default function SiteFooter({
  basePath,
  brand,
  tagline,
  serviceArea,
  phone,
  className = "mt-16 border-t border-border bg-primary text-white",
  linkClassName = "hover:text-blue-100",
}: SiteFooterProps) {
  const links = [
    { href: basePath, label: "Home" },
    { href: `${basePath}/services`, label: "Services" },
    { href: `${basePath}/about`, label: "About" },
    { href: `${basePath}/contact`, label: "Contact" },
  ];

  return (
    <footer className={className}>
      <div className="site-container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{brand}</p>
          <p className="mt-3 max-w-xs text-sm opacity-90">{tagline}</p>
          <p className="mt-4 text-xs opacity-80">
            <a className="underline" href={DEMO_OWNER_MAILTO}>
              {DEMO_OWNER_CTA_LABEL}
            </a>
          </p>
          <p className="mt-4 text-xs opacity-80">
            Optional:{" "}
            <a
              className="underline"
              href="https://github.com/sponsors/downeasternman"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Sponsors
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide opacity-80">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClassName}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide opacity-80">Service Area</p>
          <p className="mt-3 text-sm opacity-90">{serviceArea}</p>
          <p className="mt-4 text-sm font-semibold">Licensed & insured.</p>
          <p className="text-sm opacity-90">{phone}</p>
        </div>
      </div>
    </footer>
  );
}
