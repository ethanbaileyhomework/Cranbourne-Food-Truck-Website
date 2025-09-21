import Image from "next/image";

export default function LogoGrid({ partners }: { partners: { name: string; logo: string; url: string; blurb: string }[] }) {
  if (!partners?.length) return null;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {partners.map((p, i) => (
        <a key={i} href={p.url} target="_blank" rel="noopener" className="flex flex-col items-center gap-2 bg-white rounded-xl shadow-subtle p-4 hover:shadow-lg transition">
          <Image src={p.logo || "/placeholder-logo.png"} alt={p.name} width={80} height={80} className="rounded-xl object-contain bg-neutral-100" />
          <div className="font-semibold text-primary">{p.name}</div>
          <p className="text-neutral-700 text-sm text-center">{p.blurb}</p>
        </a>
      ))}
    </div>
  );
}