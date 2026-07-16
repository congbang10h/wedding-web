"use client";

import { useEffect, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function calculate(target: string): TimeLeft {
  const distance = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState<TimeLeft>(() => calculate(target));
  useEffect(() => {
    const timer = window.setInterval(() => setTime(calculate(target)), 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const units = [
    [time.days, "Ngày"],
    [time.hours, "Giờ"],
    [time.minutes, "Phút"],
    [time.seconds, "Giây"],
  ];
  return (
    <div className="countdown" aria-label="Đếm ngược đến ngày cưới">
      {units.map(([value, label]) => (
        <div key={label} className="countdown-unit"><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>
      ))}
    </div>
  );
}
