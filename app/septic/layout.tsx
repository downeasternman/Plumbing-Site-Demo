import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import UrgentBanner from "@/components/site/UrgentBanner";

export default function SepticLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const phone = "207-555-0188";
  return (
    <div className="bg-[#f4f1ea] text-stone-900">
      <UrgentBanner
        className="bg-emerald-800"
        message="Backup or surfacing sewage? Call now — we route emergencies first."
        phone={phone}
      />
      <SiteHeader
        basePath="/septic"
        brand="Downeast Septic & Pumping"
        phone={phone}
        className="border-b-2 border-emerald-700 bg-[#f4f1ea]"
        brandClassName="text-emerald-900"
      />
      <main>{children}</main>
      <SiteFooter
        basePath="/septic"
        brand="Downeast Septic & Pumping"
        tagline="Pumping, inspections, and straight talk about your septic system—no scare tactics."
        serviceArea="Lubec to Milbridge and rural lots throughout Washington County."
        phone={phone}
        className="mt-16 border-t-4 border-emerald-800 bg-stone-800 text-stone-100"
        linkClassName="hover:text-emerald-200"
      />
    </div>
  );
}
