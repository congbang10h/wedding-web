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
  // Keep the server render and the client's first render identical. The real
  // time is calculated only after hydration, avoiding a one-second mismatch.
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => setTime(calculate(target));
    update();
    const timer = window.setInterval(update, 1000);
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
