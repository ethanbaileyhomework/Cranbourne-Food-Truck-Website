import type { SiteSettings } from "@/lib/cms";

export default function SiteFooter({ siteSettings }: { siteSettings: SiteSettings }) {
  return (
    <footer className="bg-[#F9F6F3] py-8 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-bold">{siteSettings.site_name || "Cranbourne Food Truck"}</span>
          <span>{siteSettings.contact_email || "hello@example.com"}</span>
          <span>{siteSettings.contact_phone || "0000 000 000"}</span>
          <span>{siteSettings.contact_address || "123 Your Street, Cranbourne VIC"}</span>
          <span>ABN: {siteSettings.abn || "00 000 000 000"}</span>
        </div>
        <div className="flex gap-3 text-lg">
          {/* Replace # with your actual social links */}
          <a href="#" aria-label="Facebook" className="hover:text-primary">FB</a>
          <a href="#" aria-label="Instagram" className="hover:text-primary">IG</a>
          <a href="#" aria-label="X / Twitter" className="hover:text-primary">X</a>
        </div>
        <div className="text-xs text-neutral-500 mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} {siteSettings.site_name || "Cranbourne Food Truck"}
        </div>
      </div>
    </footer>
  );
}