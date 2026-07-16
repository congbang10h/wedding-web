import type { WeddingPhoto } from "@/config/wedding";

const DRIVE_ID_PATTERN = /[-\w]{25,}/;

export function extractGoogleDriveFileId(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    const pathMatch = url.pathname.match(/\/file\/d\/([^/]+)/);
    const queryId = url.searchParams.get("id");
    const candidate = pathMatch?.[1] ?? queryId;
    return candidate && DRIVE_ID_PATTERN.test(candidate) ? candidate : null;
  } catch {
    return DRIVE_ID_PATTERN.test(trimmed) ? trimmed.match(DRIVE_ID_PATTERN)?.[0] ?? null : null;
  }
}

export function googleDriveImageUrl(idOrUrl: string, width = 1600): string {
  const id = extractGoogleDriveFileId(idOrUrl);
  if (!id) return idOrUrl;
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w${width}`;
}

export function normalizeWeddingPhoto(photo: WeddingPhoto): WeddingPhoto {
  const source = photo.id ?? photo.src ?? "";
  return {
    ...photo,
    src: googleDriveImageUrl(source, 1800),
    thumbnail: photo.thumbnail
      ? googleDriveImageUrl(photo.thumbnail, 720)
      : googleDriveImageUrl(source, 720),
  };
}
