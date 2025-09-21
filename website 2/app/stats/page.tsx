import { getStatsSettings, getServiceStats } from "@/lib/cms";
import LookerEmbed from "../../components/LookerEmbed";
import KPICounterRow from "../../components/KPICounterRow";

export default async function StatsPage() {
  const statsSettings = await getStatsSettings();
  const stats = await getServiceStats();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Our Impact</h1>
      <KPICounterRow stats={stats} />
      <div className="mt-8">
        <LookerEmbed url={statsSettings.looker_url} />
      </div>
    </div>
  );
}