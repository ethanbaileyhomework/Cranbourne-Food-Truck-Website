"use client";
import { useState } from "react";
import Image from "next/image";

export default function Carousel({ items }: { items: { image: string; quote: string; name?: string }[] }) {
  const [idx, setIdx] = useState(0);
  if (!items || items.length < 1) return null;

  const prev = () => setIdx(i => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIdx(i => (i === items.length - 1 ? 0 : i + 1));
  const item = items[idx];

  return (
    <div className="relative max-w-xl mx-auto bg-white rounded-xl shadow-subtle p-8 flex flex-col items-center">
      {item.image && (
        <Image src={item.image} alt={item.name || "Testimonial"} width={80} height={80} className="mb-4 rounded-full object-cover" />
      )}
      <blockquote className="text-lg italic mb-2">&ldquo;{item.quote}&rdquo;</blockquote>
      {item.name && <div className="font-semibold text-primary">{item.name}</div>}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-200 rounded-full p-2 hover:bg-primary hover:text-white focus:outline focus:outline-2"
        aria-label="Previous testimonial"
      >&larr;</button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-200 rounded-full p-2 hover:bg-primary hover:text-white focus:outline focus:outline-2"
        aria-label="Next testimonial"
      >&rarr;</button>
    </div>
  );
}