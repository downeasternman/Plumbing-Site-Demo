import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import UrgentBanner from "@/components/site/UrgentBanner";

export default function ElectricLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const phone = "207-555-0177";
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <UrgentBanner
        className="bg-yellow-500"
        messageClassName="text-zinc-950"
        message="Sparking outlet, partial power loss, or burning smell? Emergency electricians on call."
        phone={phone}
      />
      <SiteHeader
        basePath="/electric"
        brand="BrightWire Electric"
        phone={phone}
        className="border-b-4 border-yellow-400 bg-zinc-900"
        brandClassName="text-yellow-300"
        navClassName="text-zinc-300"
      />
      <main>{children}</main>
      <SiteFooter
        basePath="/electric"
        brand="BrightWire Electric"
        tagline="Same-day electrical repairs, panel upgrades, and installs done to code—with clear upfront pricing."
        serviceArea="Machias, Calais, Eastport, and emergency coverage in Washington County."
        phone={phone}
        className="mt-16 border-t-4 border-yellow-500 bg-black text-zinc-100"
        linkClassName="hover:text-yellow-300"
      />
    </div>
  );
}
