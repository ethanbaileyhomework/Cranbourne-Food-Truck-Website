"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import type { SiteSettings } from "@/lib/cms";

const nav = [
  { href: "/", text: "Home" },
  { href: "/stats", text: "Stats" },
  { href: "/donate", text: "Donate" },
  { href: "/volunteer", text: "Volunteer" },
  { href: "/about-us", text: "About Us" },
  { href: "/sponsors-partners", text: "Sponsors & Partners" }
];

export default function SiteHeader({ siteSettings }: { siteSettings: SiteSettings }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 shadow-subtle backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={siteSettings.logo || "/placeholder-logo.png"}
            alt="Cranbourne Food Truck Logo"
            width={40}
            height={40}
            className="rounded-xl"
            priority
          />
          <span className="font-bold text-lg tracking-tight">{siteSettings.site_name || "Cranbourne Food Truck"}</span>
        </Link>
        <button className="md:hidden ml-2" aria-label="Open Menu" onClick={() => setOpen(!open)}>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#C3423F" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <ul className="hidden md:flex gap-6">
          {nav.map(item => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-primary font-medium transition-colors">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white border-b">
          <ul className="flex flex-col gap-3">
            {nav.map(item => (
              <li key={item.href}>
                <Link href={item.href} className="block py-2 text-lg" onClick={() => setOpen(false)}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}