import Image from "next/image";

export default function InfoCards({ cards }: { cards: { title: string; body: string; icon?: string; image?: string }[] }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      {cards.map((card, i) => (
        <div key={i} className="flex-1 bg-white rounded-xl shadow-subtle p-6 flex flex-col items-center text-center">
          {card.image && (
            <Image src={card.image} alt={card.title} width={64} height={64} className="mb-2 rounded-xl" />
          )}
          {/* Placeholder for icon, e.g. Heroicons */}
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p className="text-neutral-700">{card.body}</p>
        </div>
      ))}
    </div>
  );
}