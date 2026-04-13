import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DemoChatWidget from "@/components/demos/DemoChatWidget";
import DemoOwnerStrip from "@/components/demos/DemoOwnerStrip";

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
    default: "Trade Site Demo Suite",
    template: "%s | Trade Site Demos",
  },
  description:
    "Demo websites for trades. Pick a vertical, view the live demo, and contact the builder to make it yours.",
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
      <body className="flex min-h-full flex-col pb-14">
        {children}
        <DemoChatWidget />
        <DemoOwnerStrip />
      </body>
    </html>
  );
}
