import { getGoogleAccessToken } from "@/lib/googleDriveServer";

export const runtime = "edge";

export async function GET() {
  try {
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) return Response.json({ message: "GOOGLE_DRIVE_FOLDER_ID chưa được cấu hình." }, { status: 503 });
    const accessToken = await getGoogleAccessToken();
    const params = new URLSearchParams({
      q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
      fields: "files(id,name,imageMediaMetadata(width,height),createdTime)",
      orderBy: "name",
      pageSize: "200",
    });
    const response = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`, { headers: { Authorization: `Bearer ${accessToken}` } });
    if (!response.ok) return Response.json({ message: "Không thể đọc thư mục Google Drive. Hãy kiểm tra ID và quyền chia sẻ." }, { status: response.status });
    const data = (await response.json()) as { files?: Array<{ id: string; name: string; imageMediaMetadata?: { width?: number; height?: number } }> };
    const photos = (data.files ?? []).map((file) => ({ id: file.id, title: file.name.replace(/\.[^.]+$/, ""), src: `/api/drive-image?id=${file.id}`, thumbnail: `/api/drive-image?id=${file.id}&thumbnail=1`, width: file.imageMediaMetadata?.width, height: file.imageMediaMetadata?.height }));
    return Response.json({ photos }, { headers: { "Cache-Control": "public, max-age=300, s-maxage=3600" } });
  } catch {
    return Response.json({ message: "Kết nối Google Drive thất bại. Hãy kiểm tra biến môi trường." }, { status: 500 });
  }
}
