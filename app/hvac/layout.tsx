import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import UrgentBanner from "@/components/site/UrgentBanner";

export default function HvacLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const phone = "207-555-0199";
  return (
    <div className="bg-slate-50 text-slate-900">
      <UrgentBanner
        className="bg-sky-600"
        message="No heat or no AC? Same-day comfort calls across Downeast Maine."
        phone={phone}
      />
      <SiteHeader
        basePath="/hvac"
        brand="Peninsula Comfort HVAC"
        phone={phone}
        className="border-b-4 border-cyan-400 bg-white shadow-sm"
        brandClassName="bg-gradient-to-r from-sky-700 to-cyan-600 bg-clip-text text-transparent"
      />
      <main className="flex-1">{children}</main>
      <SiteFooter
        basePath="/hvac"
        brand="Peninsula Comfort HVAC"
        tagline="Heat pumps, AC, and honest tune-ups for coastal Maine homes. Efficiency-first recommendations."
        serviceArea="Bar Harbor, Ellsworth, Bucksport, and surrounding Hancock & Washington counties."
        phone={phone}
        className="mt-16 border-t border-cyan-900 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
        linkClassName="hover:text-cyan-200"
      />
    </div>
  );
}
