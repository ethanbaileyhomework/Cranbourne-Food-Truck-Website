import Image from "next/image";

export default function Hero({
  headline,
  subhead,
  image,
  ctaFindId,
  ctaVolunteerHref
}: {
  headline: string;
  subhead: string;
  image: string;
  ctaFindId: string;
  ctaVolunteerHref: string;
}) {
  return (
    <section className="w-full bg-[#F9F6F3] pb-10">
      <div className="relative w-full h-[350px] md:h-[450px]">
        <Image
          src={image || "/placeholder-hero.jpg"}
          alt="Cranbourne Food Truck community gathering"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow mb-4">{headline}</h1>
          <p className="text-white text-lg md:text-xl drop-shadow mb-6 max-w-xl">{subhead}</p>
          <div className="flex gap-3 justify-center">
            <a href={`#${ctaFindId}`} className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-subtle hover:bg-[#a9302e] focus:outline focus:outline-2 focus:outline-primary transition">Need a meal? Find us</a>
            <a href={ctaVolunteerHref} className="bg-white text-primary px-6 py-3 rounded-xl font-semibold shadow-subtle hover:bg-neutral-100 focus:outline focus:outline-2 focus:outline-primary transition">Volunteer</a>
          </div>
        </div>
      </div>
    </section>
  );
}