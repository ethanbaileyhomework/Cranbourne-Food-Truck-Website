"use client";
import { useEffect, useState } from "react";

function AnimatedNumber({ to }: { to: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = to;
    if (start === end) return;
    let increment = end / 40;
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.round(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [to]);

  return <span>{value.toLocaleString()}</span>;
}

export default function KPICounterRow({ stats }: { stats: any }) {
  if (!stats) return null;
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <div className="flex-1 text-center">
        <div className="text-3xl font-bold text-primary"><AnimatedNumber to={stats.total_meals || 0} /></div>
        <div className="text-neutral-700">Meals Served</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-3xl font-bold text-primary"><AnimatedNumber to={stats.total_guests || 0} /></div>
        <div className="text-neutral-700">Guests Supported</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-3xl font-bold text-primary"><AnimatedNumber to={stats.services_run || 0} /></div>
        <div className="text-neutral-700">Services Run</div>
      </div>
    </div>
  );
}