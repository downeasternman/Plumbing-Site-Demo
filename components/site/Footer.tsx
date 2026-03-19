import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-primary text-white">
      <div className="site-container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">Downeast Plumbing Pros</p>
          <p className="mt-3 max-w-xs text-sm text-blue-100">
            Trusted plumbing repairs, installations, and emergency response for
            homes across Washington County, Maine.
          </p>
          <p className="mt-4 text-xs text-blue-200">
            If this demo helped you, you can donate (optional):
            {" "}
            <a
              className="underline hover:text-blue-100"
              href="https://github.com/sponsors/downeasternman"
              target="_blank"
              rel="noreferrer"
            >
              github sponsors
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-100">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-100">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-100">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-100">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            Service Area
          </p>
          <p className="mt-3 text-sm text-blue-100">
            Machias, Calais, Eastport, Milbridge, and nearby Washington County
            communities.
          </p>
          <p className="mt-4 text-sm font-semibold">Licensed & insured.</p>
          <p className="text-sm text-blue-100">Call 207-555-0147</p>
        </div>
      </div>
    </footer>
  );
}
