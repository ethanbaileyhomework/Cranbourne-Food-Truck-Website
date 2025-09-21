import { getPartners } from "@/lib/cms";
import LogoGrid from "../../components/LogoGrid";

export default async function SponsorsPartnersPage() {
  const partners = await getPartners();
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Sponsors & Partners</h1>
      <LogoGrid partners={partners} />
    </div>
  );
}