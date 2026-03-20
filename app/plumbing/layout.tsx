import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import UrgentBanner from "@/components/site/UrgentBanner";

export default function PlumbingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const phone = "207-555-0147";
  return (
    <>
      <UrgentBanner
        message="24/7 Emergency Plumbing in Washington County — dispatch in minutes."
        phone={phone}
      />
      <SiteHeader basePath="/plumbing" brand="Downeast Plumbing Pros" phone={phone} />
      <main className="flex-1">{children}</main>
      <SiteFooter
        basePath="/plumbing"
        brand="Downeast Plumbing Pros"
        tagline="Trusted plumbing repairs, installations, and emergency response for homes across Washington County, Maine."
        serviceArea="Machias, Calais, Eastport, Milbridge, and nearby Washington County communities."
        phone={phone}
      />
    </>
  );
}
