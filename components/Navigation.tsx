"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  ["Lời mời", "#loi-moi"],
  ["Lịch trình", "#lich-trinh"],
  ["Thiệp cưới", "#thiep-cuoi"],
  ["Album", "#album"],
  ["Xác nhận", "#xac-nhan"],
  ["Quà mừng", "#qua-mung"],
];

export function Navigation({ musicUrl, names }: { musicUrl: string; names: string }) {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  async function toggleMusic() {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      await audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  }

  return (
    <header className="site-nav" aria-label="Điều hướng chính">
      <a className="nav-monogram" href="#top" aria-label="Về đầu trang">{names}</a>
      <nav className={open ? "nav-links is-open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        {musicUrl ? (
          <>
            <audio ref={audioRef} src={musicUrl} loop preload="none" />
            <button className="icon-button" type="button" onClick={toggleMusic} aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}>
              {playing ? "♪" : "♩"}
            </button>
          </>
        ) : null}
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Mở menu">
          <span /><span />
        </button>
      </div>
    </header>
  );
}
