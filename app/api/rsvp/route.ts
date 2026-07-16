import { weddingConfig } from "@/config/wedding";

const recentRequests = new Map<string, number>();

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().replace(/[<>]/g, "").slice(0, max) : "";
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "anonymous";
  const lastRequest = recentRequests.get(ip) ?? 0;
  if (Date.now() - lastRequest < 10_000) return Response.json({ message: "Vui lòng chờ một chút trước khi gửi lại." }, { status: 429 });
  recentRequests.set(ip, Date.now());
  try {
    const input = (await request.json()) as Record<string, unknown>;
    if (clean(input.company, 100)) return Response.json({ message: "Đã nhận phản hồi." });
    const data = { name: clean(input.name, 80), phone: clean(input.phone, 20), attendance: clean(input.attendance, 3), guests: clean(input.guests, 2), message: clean(input.message, 500) };
    if (data.name.length < 2 || !["yes", "no"].includes(data.attendance)) return Response.json({ message: "Vui lòng điền họ tên và lựa chọn tham dự." }, { status: 400 });
    if (data.phone && !/^[0-9+ ()-]{8,20}$/.test(data.phone)) return Response.json({ message: "Số điện thoại chưa đúng định dạng." }, { status: 400 });
    const { googleFormUrl, fields } = weddingConfig.rsvp;
    if (!googleFormUrl) return Response.json({ message: "Đã ghi nhận bản xem thử. Hãy cấu hình Google Form trước khi xuất bản." });
    const formData = new URLSearchParams({ [fields.name]: data.name, [fields.phone]: data.phone, [fields.attendance]: data.attendance, [fields.guests]: data.guests, [fields.message]: data.message });
    const formResponse = await fetch(googleFormUrl, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: formData, redirect: "follow" });
    if (!formResponse.ok) throw new Error("Google Form rejected the request.");
    return Response.json({ message: "Cảm ơn bạn! Chúng mình đã nhận được lời hồi đáp." });
  } catch {
    return Response.json({ message: "Không thể gửi xác nhận lúc này. Vui lòng thử lại sau." }, { status: 500 });
  }
}
