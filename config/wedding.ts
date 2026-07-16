export type WeddingPhoto = {
  id?: string;
  src?: string;
  thumbnail?: string;
  title: string;
  width?: number;
  height?: number;
};

export type WeddingEvent = {
  eyebrow: string;
  title: string;
  date: string;
  receptionTime: string;
  ceremonyTime: string;
  venue: string;
  address: string;
  mapsUrl: string;
};

export const weddingConfig = {
  couple: {
    bride: {
      name: "Minh Anh",
      photo:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=82",
      description:
        "Một cô gái yêu những điều bình dị, những buổi chiều có nắng và căn bếp đầy tiếng cười.",
    },
    groom: {
      name: "Hoàng Nam",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=82",
      description:
        "Một chàng trai điềm tĩnh, chân thành và luôn tin rằng gia đình là hành trình đẹp nhất.",
    },
  },
  weddingDate: "2026-12-20T11:00:00+07:00",
  displayDate: "20 · 12 · 2026",
  invitationMessage:
    "Trân trọng kính mời bạn đến chung vui trong ngày lễ thành hôn của chúng tôi. Sự hiện diện của bạn là niềm vinh hạnh và là món quà ý nghĩa đối với gia đình chúng tôi.",
  hero: {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=88",
    imageAlt: "Cô dâu chú rể trong ngày cưới",
  },
  events: [
    {
      eyebrow: "Lễ vu quy",
      title: "Nhà gái",
      date: "Chủ Nhật, 20 tháng 12 năm 2026",
      receptionTime: "09:00 · Đón khách",
      ceremonyTime: "09:30 · Làm lễ",
      venue: "Tư gia nhà gái",
      address: "123 Đường Hoa Hồng, Quận 3, TP. Hồ Chí Minh",
      mapsUrl: "https://maps.google.com/?q=Ho+Chi+Minh+City",
    },
    {
      eyebrow: "Tiệc thành hôn",
      title: "Nhà trai",
      date: "Chủ Nhật, 20 tháng 12 năm 2026",
      receptionTime: "10:30 · Đón khách",
      ceremonyTime: "11:00 · Khai tiệc",
      venue: "The Garden Wedding",
      address: "456 Đại lộ Tình Yêu, Quận 1, TP. Hồ Chí Minh",
      mapsUrl: "https://maps.google.com/?q=District+1+Ho+Chi+Minh+City",
    },
  ] satisfies WeddingEvent[],
  invitationCards: [
    {
      title: "Mặt trước thiệp cưới",
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=88",
      downloadEnabled: true,
    },
    {
      title: "Mặt sau thiệp cưới",
      src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1200&q=88",
      downloadEnabled: true,
    },
  ],
  gallery: [
    { title: "Bên nhau", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=84", width: 1200, height: 1600 },
    { title: "Ngày mình chung đôi", src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=84", width: 1600, height: 1067 },
    { title: "Nụ cười của em", src: "https://images.unsplash.com/photo-1519741347686-c1e0a0dfc0f9?auto=format&fit=crop&w=1400&q=84", width: 1200, height: 1500 },
    { title: "Một đời thương nhau", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=84", width: 1600, height: 1067 },
    { title: "Lời hẹn ước", src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=84", width: 1200, height: 1600 },
    { title: "Mùa yêu", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=84", width: 1600, height: 1067 },
    { title: "Dịu dàng", src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1400&q=84", width: 1200, height: 1500 },
    { title: "Ngày hạnh phúc", src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=84", width: 1600, height: 1067 },
    { title: "Nắm tay nhau", src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=84", width: 1200, height: 1600 },
  ] satisfies WeddingPhoto[],
  gallerySource: "config" as "config" | "drive-api",
  bankAccounts: [
    {
      label: "Cô dâu",
      bankName: "Vietcombank",
      accountName: "NGUYEN MINH ANH",
      accountNumber: "0123456789",
      qrImage: "https://img.vietqr.io/image/VCB-0123456789-compact2.png?accountName=NGUYEN%20MINH%20ANH",
    },
    {
      label: "Chú rể",
      bankName: "Techcombank",
      accountName: "TRAN HOANG NAM",
      accountNumber: "19001234567890",
      qrImage: "https://img.vietqr.io/image/TCB-19001234567890-compact2.png?accountName=TRAN%20HOANG%20NAM",
    },
  ],
  showGiftSection: true,
  showRSVP: true,
  backgroundMusic: "",
  rsvp: {
    deadline: "Vui lòng phản hồi trước ngày 10 · 12 · 2026",
    googleFormUrl: "",
    fields: {
      name: "entry.111111111",
      phone: "entry.222222222",
      attendance: "entry.333333333",
      guests: "entry.444444444",
      message: "entry.555555555",
    },
  },
  wishes: [
    { author: "Gia đình cô Mai", message: "Chúc hai con trăm năm hạnh phúc, mãi luôn yêu thương và đồng hành cùng nhau." },
    { author: "Nhóm bạn Đại học", message: "Mong hành trình mới của hai bạn luôn đầy ắp tiếng cười và những chuyến đi thật đẹp." },
    { author: "Anh chị Minh", message: "Chúc tổ ấm nhỏ của hai em luôn bình yên, ấm áp và ngập tràn yêu thương." },
  ],
  seo: {
    public: false,
    title: "Minh Anh & Hoàng Nam · 20.12.2026",
    description: "Trân trọng mời bạn đến chung vui trong ngày thành hôn của Minh Anh và Hoàng Nam.",
  },
} as const;

export const coupleNames = `${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`;
