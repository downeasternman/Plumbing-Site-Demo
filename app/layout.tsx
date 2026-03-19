import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EmergencyBanner from "@/components/site/EmergencyBanner";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Downeast Plumbing Pros | Washington County, Maine",
    template: "%s | Downeast Plumbing Pros",
  },
  description:
    "Trusted residential plumbing service in Washington County, Maine. Call for fast repairs, honest pricing, and 24/7 emergency response.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <EmergencyBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
