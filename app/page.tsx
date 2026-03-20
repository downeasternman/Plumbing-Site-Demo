import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo Suite",
  description:
    "Live demo websites for trades: plumbing, HVAC, septic, electrical. Contact the builder to customize for your business.",
};

const demos = [
  {
    href: "/plumbing",
    title: "Plumbing",
    subtitle: "Washington County, Maine",
    tone: "from-primary to-primary-strong",
    blurb: "Emergency strip, service cards, financing, conversion CTAs.",
  },
  {
    href: "/hvac",
    title: "HVAC & Heat Pumps",
    subtitle: "Coastal Maine comfort",
    tone: "from-sky-600 to-cyan-700",
    blurb: "Cool cyan palette, tune-up focus, efficiency messaging.",
  },
  {
    href: "/septic",
    title: "Septic & Pumping",
    subtitle: "Rural & coastal properties",
    tone: "from-stone-700 to-emerald-900",
    blurb: "Earthy slate + green, inspection and pumping trust cues.",
  },
  {
    href: "/electric",
    title: "Electrician",
    subtitle: "Same-day service",
    tone: "from-zinc-900 to-zinc-800",
    blurb: "High-contrast charcoal + safety yellow accents.",
  },
];

export default function SuiteHomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="site-container py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Trade site demo suite
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Live demos you can sell
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Pick a vertical. Each route is a full mini-site (Home, Services, About, Contact) with
            different layout and styling so prospects see real variety—not the same template recolored.
          </p>
        </div>
      </header>

      <div className="site-container grid gap-6 py-12 md:grid-cols-2">
        {demos.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-slate-300 hover:shadow-md"
          >
            <div
              className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${d.tone}`}
              aria-hidden
            />
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{d.subtitle}</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 group-hover:text-accent">
              {d.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{d.blurb}</p>
            <p className="mt-6 text-sm font-semibold text-accent">Open demo →</p>
          </Link>
        ))}
      </div>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <p>
          Source and license:{" "}
          <a
            href="https://github.com/downeasternman/Plumbing-Site-Demo"
            className="font-medium text-accent underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repository
          </a>
        </p>
      </footer>
    </div>
  );
}
