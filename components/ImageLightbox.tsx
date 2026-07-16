"use client";

import { useEffect, useRef } from "react";

export type LightboxImage = { src: string; title: string };

export function ImageLightbox({ images, index, onChange, onClose }: { images: LightboxImage[]; index: number; onChange: (index: number) => void; onClose: () => void }) {
  const touchStart = useRef(0);
  const previous = () => onChange((index - 1 + images.length) % images.length);
  const next = () => onChange((index + 1) % images.length);

  useEffect(() => {
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = priorOverflow;
      window.removeEventListener("keydown", keydown);
    };
  });

  const image = images[index];
  if (!image) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Xem ảnh ${image.title}`} onClick={onClose}>
      <div className="lightbox-top"><span>{index + 1} / {images.length}</span><button onClick={onClose} aria-label="Đóng ảnh" type="button">×</button></div>
      {images.length > 1 ? <button className="lightbox-arrow previous" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Ảnh trước" type="button"><span className="lightbox-arrow-icon" aria-hidden="true" /></button> : null}
      <figure onClick={(event) => event.stopPropagation()} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { const delta = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(delta) > 50) delta > 0 ? previous() : next(); }}>
        <img src={image.src} alt={image.title} />
        <figcaption>{image.title}</figcaption>
      </figure>
      {images.length > 1 ? <button className="lightbox-arrow next" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Ảnh sau" type="button"><span className="lightbox-arrow-icon" aria-hidden="true" /></button> : null}
    </div>
  );
}
