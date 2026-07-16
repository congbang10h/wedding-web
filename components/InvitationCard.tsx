"use client";

import { useMemo, useState } from "react";
import { ImageLightbox } from "./ImageLightbox";
import { Reveal } from "./Reveal";

type Card = { title: string; src: string; downloadEnabled: boolean };

export function InvitationCard({ cards }: { cards: readonly Card[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const images = useMemo(() => cards.map(({ src, title }) => ({ src, title })), [cards]);
  return (
    <section id="thiep-cuoi" className="section invitation-card-section">
      <Reveal className="section-heading centered">
        <p className="eyebrow">Wedding invitation</p>
        <h2>Thiệp mời của chúng mình</h2>
        <p>Chạm vào từng mặt thiệp để xem trọn vẹn lời mời.</p>
      </Reveal>
      <div className="invitation-card-grid">
        {cards.map((card, index) => (
          <Reveal className="invitation-card-item" key={card.title}>
            <button type="button" onClick={() => setSelected(index)} aria-label={`Phóng to ${card.title}`}>
              <img src={card.src} alt={card.title} loading="lazy" />
              <span className="zoom-hint">Xem toàn màn hình</span>
            </button>
            <div className="invitation-card-meta"><span>{card.title}</span>{card.downloadEnabled ? <a href={card.src} download target="_blank" rel="noreferrer">Tải thiệp ↓</a> : null}</div>
          </Reveal>
        ))}
      </div>
      {selected !== null ? <ImageLightbox images={images} index={selected} onChange={setSelected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}
