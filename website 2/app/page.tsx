import { getHomeContent, getServiceStats, getSiteSettings } from "../lib/cms";
import Hero from "../components/Hero";
import InfoCards from "../components/InfoCards";
import MapEmbed from "../components/MapEmbed";
import KPICounterRow from "../components/KPICounterRow";
import Carousel from "../components/Carousel";
import ServiceInfo from "../components/ServiceInfo";

export default async function HomePage() {
  const home = await getHomeContent();
  const stats = await getServiceStats();
  const siteSettings = await getSiteSettings();

  return (
    <div>
      <Hero
        headline={home.hero_headline}
        subhead={home.hero_subhead}
        image={home.hero_image}
        ctaFindId="service-info"
        ctaVolunteerHref="/volunteer"
      />
      <section id="service-info" className="py-10">
        <ServiceInfo
          days={home.service_days}
          times={home.service_times}
          location={home.service_location}
          whatToExpect={home.service_what}
          phone={siteSettings.contact_phone}
          email={siteSettings.contact_email}
        />
        <MapEmbed url={siteSettings.map_embed_url} />
      </section>
      <section className="py-12">
        <InfoCards cards={home.what_we_do_cards} />
      </section>
      <section className="py-8">
        <KPICounterRow stats={stats} />
      </section>
      <section className="py-12">
        <Carousel items={home.testimonials} />
      </section>
    </div>
  );
}