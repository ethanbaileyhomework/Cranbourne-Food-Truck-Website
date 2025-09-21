import Image from "next/image";

export default function TeamGrid({ team }: { team: { name: string; role: string; headshot: string; bio: string; email?: string }[] }) {
  if (!team?.length) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {team.map((t, i) => (
        <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow-subtle p-6">
          <Image src={t.headshot || "/placeholder-headshot.png"} alt={t.name} width={90} height={90} className="rounded-full mb-3 object-cover bg-neutral-100" />
          <div className="font-bold text-primary text-lg">{t.name}</div>
          <div className="text-sm mb-2">{t.role}</div>
          <p className="text-neutral-700 text-sm text-center">{t.bio}</p>
          {t.email && (
            <a href={`mailto:${t.email}`} className="mt-2 text-primary underline text-sm">Email</a>
          )}
        </div>
      ))}
    </div>
  );
}