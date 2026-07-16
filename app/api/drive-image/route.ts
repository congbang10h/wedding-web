import { getGoogleAccessToken } from "@/lib/googleDriveServer";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") ?? "";
  if (!/^[\w-]{20,}$/.test(id)) return new Response("Invalid image id", { status: 400 });
  try {
    const accessToken = await getGoogleAccessToken();
    const response = await fetch(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(id)}?alt=media`, { headers: { Authorization: `Bearer ${accessToken}` } });
    if (!response.ok || !response.body) return new Response("Image not found", { status: response.status });
    return new Response(response.body, { headers: { "Content-Type": response.headers.get("Content-Type") ?? "image/jpeg", "Cache-Control": "public, max-age=86400, s-maxage=604800" } });
  } catch {
    return new Response("Could not load image", { status: 500 });
  }
}
