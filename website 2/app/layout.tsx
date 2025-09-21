import "./globals.css";
import { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { getSiteSettings } from "../lib/cms";

export const metadata: Metadata = {
  title: "Cranbourne Food Truck",
  description: "Warm meals, groceries, and care for our Cranbourne community.",
  metadataBase: new URL("https://cranbournefoodtruck.com"),
  openGraph: {
    title: "Cranbourne Food Truck",
    description: "Serving our Cranbourne community with hot meals, groceries, and care.",
    url: "https://cranbournefoodtruck.com",
    siteName: "Cranbourne Food Truck",
    images: [
      {
        url: "/placeholder-og.jpg",
        width: 1200,
        height: 630,
        alt: "Cranbourne Food Truck hero banner"
      }
    ],
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@cranbournefoodtruck"
  }
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings();
  return (
    <html lang="en">
      <body className="bg-neutralBg font-sans text-charcoal min-h-screen flex flex-col">
        <SiteHeader siteSettings={siteSettings} />
        <main className="flex-1">{children}</main>
        <SiteFooter siteSettings={siteSettings} />
      </body>
    </html>
  );
}