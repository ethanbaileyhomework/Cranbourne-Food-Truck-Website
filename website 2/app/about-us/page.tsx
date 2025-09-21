import { getAboutPageContent } from "@/lib/cms";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import TeamGrid from "../../components/TeamGrid";
import LogoGrid from "../../components/LogoGrid";

export default async function AboutUsPage() {
  const about = await getAboutPageContent();
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <MarkdownRenderer content={about.story} />
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Mission & Vision</h2>
        <MarkdownRenderer content={about.mission_vision} />
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
        <TeamGrid team={about.team} />
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Partners</h2>
        <LogoGrid partners={about.partners} />
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Future Plans</h2>
        <MarkdownRenderer content={about.future_plans} />
      </section>
    </div>
  );
}