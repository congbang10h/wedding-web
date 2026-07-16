"use client";

import { useEffect, useMemo, useState } from "react";
import type { WeddingPhoto } from "@/config/wedding";
import { normalizeWeddingPhoto } from "@/lib/googleDrive";
import { ImageLightbox } from "./ImageLightbox";
import { Reveal } from "./Reveal";

export function WeddingGallery({ initialPhotos, source, folderUrl }: { initialPhotos: readonly WeddingPhoto[]; source: "config" | "drive-api"; folderUrl?: string }) {
  const [photos, setPhotos] = useState<WeddingPhoto[]>(() => initialPhotos.map(normalizeWeddingPhoto));
  const [selected, setSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(source === "drive-api");
  const [loadError, setLoadError] = useState("");
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (source !== "drive-api") return;
    fetch("/api/drive-photos")
      .then(async (response) => {
        if (!response.ok) throw new Error("Không thể tải album từ Google Drive.");
        const data = (await response.json()) as { photos: WeddingPhoto[] };
        setPhotos(data.photos);
      })
      .catch((error: Error) => setLoadError(error.message))
      .finally(() => setLoading(false));
  }, [source]);

  const images = useMemo(
    () => photos.filter((photo) => photo.src).map((photo) => ({ src: photo.src as string, title: photo.title })),
    [photos],
  );

  return (
    <section id="album" className="section gallery-section">
      <Reveal className="section-heading split-heading">
        <div><p className="eyebrow">Our moments</p><h2>Chuyện tình qua những khung hình</h2></div>
        <div className="gallery-intro-copy">
          <p>Những khoảnh khắc bình yên, rực rỡ và rất đỗi riêng tư trên hành trình về chung một nhà.</p>
          {folderUrl ? <a className="text-link gallery-drive-link" href={folderUrl} target="_blank" rel="noreferrer">Mở album gốc trên Drive <span aria-hidden>↗</span></a> : null}
        </div>
      </Reveal>
      {loading ? <div className="gallery-loading"><span /><span /><span /></div> : null}
      {loadError ? <p className="status-message error">{loadError} Vui lòng kiểm tra cấu hình chia sẻ thư mục.</p> : null}
      {!loading && !loadError ? (
        <div className="masonry-gallery">
          {photos.map((photo, index) => (
            <button className="gallery-item" type="button" key={`${photo.title}-${index}`} onClick={() => setSelected(index)} aria-label={`Xem ảnh lớn: ${photo.title}`} style={{ aspectRatio: `${photo.width ?? 4} / ${photo.height ?? 5}` }}>
              {failed[index] ? <span className="image-error">Không tải được ảnh<br /><small>Kiểm tra quyền chia sẻ</small></span> : <img src={photo.thumbnail ?? photo.src} alt={photo.title} loading="lazy" decoding="async" onError={() => setFailed((current) => ({ ...current, [index]: true }))} />}
              <span className="gallery-caption"><span>{String(index + 1).padStart(2, "0")}</span>{photo.title}</span>
            </button>
          ))}
        </div>
      ) : null}
      {selected !== null ? <ImageLightbox images={images} index={selected} onChange={setSelected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}
