# Thiệp cưới trực tuyến

Website thiệp cưới một trang xây bằng Next.js 16, TypeScript, Tailwind CSS 4 và React 19. Giao diện ưu tiên điện thoại, có thiệp phóng to, gallery masonry/lightbox, Google Drive, QR ngân hàng, RSVP, SEO và hỗ trợ giảm chuyển động.

## Kiến trúc

```text
app/
  api/drive-image/route.ts   Proxy ảnh Drive API an toàn phía server
  api/drive-photos/route.ts  Đọc tối đa 200 ảnh trong một thư mục Drive
  api/rsvp/route.ts          Kiểm tra, làm sạch và chuyển RSVP sang Google Form
  layout.tsx                 Font, SEO, Open Graph
  page.tsx                   Ghép toàn bộ trang cưới
  robots.ts                  Cấu hình index/noindex
  sitemap.ts                 Sitemap
components/
  Countdown.tsx              Đồng hồ đếm ngược
  CoupleIntro.tsx            Thẻ cô dâu/chú rể
  EventSchedule.tsx          Hai sự kiện và bản đồ
  GiftSection.tsx            QR, tài khoản, sao chép
  ImageLightbox.tsx          Xem ảnh lớn, phím và vuốt
  InvitationCard.tsx         Hai mặt thiệp
  Navigation.tsx             Menu cố định và nhạc tùy chọn
  RSVPForm.tsx               Biểu mẫu xác nhận
  Reveal.tsx                 Hiệu ứng xuất hiện nhẹ
  WeddingGallery.tsx         Gallery responsive/lazy loading
config/wedding.ts            Toàn bộ nội dung có thể chỉnh sửa
lib/googleDrive.ts           Nhận ID/link Drive và tạo URL ảnh
lib/googleDriveServer.ts     Xác thực Service Account phía server
public/og.png                Ảnh chia sẻ mạng xã hội
```

## Chạy dự án

Yêu cầu Node.js 22.13 trở lên.

```bash
pnpm install
pnpm dev
```

Mở `http://localhost:3000`. Kiểm tra bản phát hành bằng:

```bash
pnpm build
```

Các package chính: `next`, `react`, `react-dom`, `tailwindcss`, `typescript` và `vinext`. Lightbox, vuốt ảnh và hiệu ứng được viết gọn trong dự án nên không cần thêm thư viện phía client.

## Thay nội dung và hình ảnh

Chỉ cần chỉnh `config/wedding.ts`:

- `couple`: tên, ảnh và phần giới thiệu cô dâu/chú rể.
- `weddingDate`: thời gian ISO có múi giờ, ví dụ `2026-12-20T11:00:00+07:00`.
- `events`: thêm, bớt hoặc chỉnh hai sự kiện; mỗi mục có link Google Maps riêng.
- `invitationCards`: URL/file hai mặt thiệp; đặt `downloadEnabled: false` để ẩn nút tải.
- `gallery`: dùng URL ảnh thông thường, ID Drive hoặc link Drive công khai.
- `bankAccounts`: ngân hàng, chủ tài khoản, số tài khoản và ảnh QR.
- `showGiftSection`, `showRSVP`: bật/tắt từng phần.
- `backgroundMusic`: URL nhạc; để rỗng sẽ ẩn nút nhạc. Trình duyệt chỉ phát sau khi khách bấm.
- `seo.public`: đổi thành `true` khi muốn công cụ tìm kiếm lập chỉ mục.

Ảnh trong `public/images` có thể dùng bằng đường dẫn `/images/ten-file.jpg`. Nên xuất ảnh gallery rộng 1600–2000 px, WebP/AVIF hoặc JPEG chất lượng khoảng 80%; thumbnail rộng 600–800 px.

## Google Drive — cách A: link công khai

Trong Google Drive, chọn ảnh → **Chia sẻ** → quyền truy cập chung **Bất kỳ ai có đường liên kết** → **Người xem**. Sau đó thêm ID hoặc link vào `gallery`:

```ts
{ id: "GOOGLE_DRIVE_FILE_ID", title: "Ảnh cưới 01" }
// hoặc
{ src: "https://drive.google.com/file/d/FILE_ID/view", title: "Ảnh cưới 02" }
```

Hàm `extractGoogleDriveFileId` hỗ trợ link `/file/d/FILE_ID/view`, `open?id=FILE_ID` và ID thuần. Ảnh không phụ thuộc cookie đăng nhập.

Nếu ảnh không hiện: mở link trong cửa sổ ẩn danh; kiểm tra quyền **Bất kỳ ai có đường liên kết**; xác nhận đó là file ảnh, không phải link thư mục; thử copy lại ID; chờ vài phút nếu vừa đổi quyền; tránh ảnh vượt giới hạn tải xuống của Google. Với album lớn hoặc riêng tư, dùng cách B.

## Google Drive — cách B: Drive API

1. Tạo project tại Google Cloud Console và bật **Google Drive API**.
2. Tạo Service Account; chỉ tải private key dùng cho biến môi trường, không chép JSON vào mã nguồn.
3. Chia sẻ đúng thư mục ảnh cho email Service Account với quyền **Viewer**. Không cần cấp quyền toàn bộ Drive.
4. Copy `.env.example` thành `.env.local`, điền ba biến `GOOGLE_*`.
5. Đổi `gallerySource` trong `config/wedding.ts` thành `"drive-api"`.

API chỉ truy vấn file có MIME type bắt đầu bằng `image/`, không lấy file đã xóa, sắp theo tên và giới hạn 200 ảnh. Ảnh được proxy qua server nên khóa không xuất hiện ở trình duyệt.

## Kết nối RSVP với Google Forms

1. Tạo Google Form với các trường tương ứng, chọn **Nhận đường liên kết điền sẵn**, nhập dữ liệu mẫu và lấy các mã `entry.123...` trong URL.
2. Trong `config/wedding.ts`, đặt `rsvp.googleFormUrl` thành URL kết thúc bằng `/formResponse` và thay các mã trong `rsvp.fields`.
3. Khi URL để rỗng, form chạy ở chế độ xem thử và báo rõ chưa lưu dữ liệu thật.

Route RSVP kiểm tra dữ liệu, loại ký tự HTML, có honeypot và giới hạn gửi lại 10 giây. Google Forms không cần secret phía trình duyệt.

## Triển khai Vercel

1. Đưa dự án lên GitHub/GitLab/Bitbucket.
2. Vào Vercel → **Add New Project** → import repository.
3. Framework preset: Next.js; build command `pnpm build`.
4. Thêm `NEXT_PUBLIC_SITE_URL` và các biến `GOOGLE_*` nếu dùng Drive API.
5. Deploy, sau đó cập nhật `NEXT_PUBLIC_SITE_URL` bằng tên miền thật và deploy lại.

Nếu triển khai Next.js chuẩn thay vì Sites/Vinext, có thể đổi scripts `vinext` sang `next` mà không cần thay component hay API route.

## Checklist trước khi xuất bản

- [ ] Thay tên, ảnh và phần giới thiệu cô dâu/chú rể.
- [ ] Thay ngày ISO, ngày hiển thị và lời mời.
- [ ] Kiểm tra giờ đón khách, giờ làm lễ, địa điểm, địa chỉ.
- [ ] Mở thử từng link Google Maps trên điện thoại.
- [ ] Thay cả hai mặt thiệp và kiểm tra đúng tỷ lệ.
- [ ] Thay toàn bộ ảnh mẫu; kiểm tra alt/title có ý nghĩa.
- [ ] Kiểm tra từng link Drive trong cửa sổ ẩn danh.
- [ ] Thay QR, tên ngân hàng, chủ tài khoản và số tài khoản; thử quét QR.
- [ ] Tắt `showGiftSection` nếu không dùng hoặc sau ngày cưới.
- [ ] Kết nối Google Form và gửi một RSVP thử.
- [ ] Thay lời chúc mẫu.
- [ ] Thêm nhạc hợp pháp hoặc để trống.
- [ ] Đặt URL thật trong `NEXT_PUBLIC_SITE_URL`.
- [ ] Đổi `seo.public` thành `true` khi sẵn sàng công khai.
- [ ] Thay ảnh `public/og.png` nếu đổi tên, ngày hoặc phong cách.
- [ ] Chạy `pnpm build` và kiểm tra trang trên điện thoại, tablet, máy tính.
- [ ] Kiểm tra chính tả tiếng Việt và quyền riêng tư trước khi gửi link.
