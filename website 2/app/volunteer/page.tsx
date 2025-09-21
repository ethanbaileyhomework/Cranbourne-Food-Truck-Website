import { getSiteSettings } from "@/lib/cms";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import TallyEmbed from "../../components/TallyEmbed";

export default async function VolunteerPage() {
  const siteSettings = await getSiteSettings();
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Volunteer with Us</h1>
      <MarkdownRenderer content={siteSettings.volunteer_intro} />
      <div className="my-8">
        <TallyEmbed url={siteSettings.tally_form_url} />
      </div>
      {/* Optional: Netlify Forms fallback for accessibility */}
    </div>
  );
}