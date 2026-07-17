import { driveGalleryPhotos } from "./gallery";

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
      name: "Diễm My",
      photo:
        "https://lh3.googleusercontent.com/d/1l_bw8Rn_kQ-KGyahHvJ1YVAgaSQzaAT1=w1600",
      description:
        "Một cô gái yêu những điều bình dị, những buổi chiều có nắng và căn bếp đầy tiếng cười.",
    },
    groom: {
      name: "Công Bằng",
      photo:
        "https://lh3.googleusercontent.com/d/1nK1yON1lw7GsN-cSSD8jKXiYZPPIJx5j=w1600",
      description:
        "Một chàng trai điềm tĩnh, chân thành và luôn tin rằng gia đình là hành trình đẹp nhất.",
    },
  },
  weddingDate: "2027-05-08T09:30:00+07:00",
  displayDate: "08 · 05 · 2027",
  invitationMessage:
    "Trân trọng kính mời bạn đến chung vui trong ngày lễ thành hôn của chúng tôi. Sự hiện diện của bạn là niềm vinh hạnh và là món quà ý nghĩa đối với gia đình chúng tôi.",
  hero: {
    image:
      "https://lh3.googleusercontent.com/d/1ti4Jpw3Cy51zPwveyyx2K3yXeQCaxM68=w2400",
    imageAlt: "Ảnh bìa cưới của Diễm My và Công Bằng",
  },
  events: [
    {
      eyebrow: "Lễ vu quy",
      title: "Nhà gái",
      date: "Thứ Bảy, 08 tháng 05 năm 2027",
      receptionTime: "09:00 · Đón khách",
      ceremonyTime: "09:30 · Làm lễ",
      venue: "Tư gia nhà gái",
      address: "90 Nguyễn Háo Vĩnh, Tân Phú, TP. Hồ Chí Minh",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=90%20Nguy%E1%BB%85n%20H%C3%A1o%20V%C4%A9nh%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20H%E1%BB%93%20Ch%C3%AD%20Minh",
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
      src: "/invitations/thiep-cuoi-mat-truoc.png",
      downloadEnabled: true,
    },
    {
      title: "Mặt sau thiệp cưới",
      src: "/invitations/thiep-cuoi-mat-sau.png",
      downloadEnabled: true,
    },
  ],
  galleryLegacy: [
    { id: "179fk1R94vjMcOzfl2CYIFAk7kXQPv3ps", title: "Ảnh cưới TT0408" },
    { id: "1qtBqN6p7FFgeYfIw5wjUm3XnDVbPL0SO", title: "Ảnh cưới TT0409" },
    { id: "1QqMGDjUgZsIQ6nePONZF0V5WQcT7ASte", title: "Ảnh cưới TT0410" },
    { id: "1Z3AaDbqUTdAlJBRAoiZkbyfFs-qwIaMw", title: "Ảnh cưới TT0411" },
    { id: "1Qcz2S-pOv22VnakLFNy0OD5hRELGv6R3", title: "Ảnh cưới TT0412" },
    { id: "1MD7mYmCfp7FLpRYrSDa_txjFV4JQ0QIX", title: "Ảnh cưới TT0413" },
    { id: "11q1451l167IjnEtHDlYVzO-QKg1rBc-K", title: "Ảnh cưới TT0414" },
    { id: "1U_zZYVKaVV5buEIRVe0h3ibPDiEBcllD", title: "Ảnh cưới TT0415" },
    { id: "1v9WJoO-XWf0MuEism0Plfw4ddTTLZeFn", title: "Ảnh cưới TT0416" },
    { id: "1lcDgO977MTCy10-yVBBmYwP2mmRLKRpM", title: "Ảnh cưới TT0417" },
    { id: "1YKX4MO-sPExW25nzY5CSwixq-S5NpRwc", title: "Ảnh cưới TT0418" },
    { id: "1YGeur4yf5TcGYtWfTclqE8ZkEeRr99je", title: "Ảnh cưới TT0419" },
    { id: "1dfzBzxi8WS4MCgtT3I0mXG6_dQP4EFih", title: "Ảnh cưới TT0420" },
    { id: "1twGNa_AszkXuanMXP7WO3VExZyVr5pAG", title: "Ảnh cưới TT0421" },
    { id: "11Yr9FIaF6JNn93M8ae1Q3iQ1UwIOISvH", title: "Ảnh cưới TT0422" },
    { id: "17viUgPSx1U2KKjJmLxBs_nSWe1ZSKcKU", title: "Ảnh cưới TT0423" },
    { id: "1rHCUd9VQbhfrnOQcUOjFCXlHPpfO-Hr3", title: "Ảnh cưới TT0424" },
    { id: "1_OpxWhaVu9zEkIQsDd1waStLPT1CVqiQ", title: "Ảnh cưới TT0425" },
    { id: "1Lo1GYs9VYWGAW0sbhwAxWgwfJY-Vl25w", title: "Ảnh cưới TT0426" },
    { id: "1ks3eHL87UvkGfRvypmzpZFHGO1zmxEqW", title: "Ảnh cưới TT0427" },
    { id: "1fc8x52zjyCWEMkAamr3rgRGu9xQLh4px", title: "Ảnh cưới TT0428" },
    { id: "1XskE_AoPcf6U6YNUq4qRkREKRg1GsZwo", title: "Ảnh cưới TT0429" },
    { id: "1SJODQtze0XpEjqPjhhkjUymtPs27j5jR", title: "Ảnh cưới TT0430" },
    { id: "1EwThMoCVX6fU_NasVjUPQ8SSv8jLg7LW", title: "Ảnh cưới TT0431" },
    { id: "1V5mc78rHasFgqErvB0XAuPsCLW1HeAdY", title: "Ảnh cưới TT0432" },
    { id: "1qYl3wykX3mUnl1H4DdAfxPOzxUZxl0RP", title: "Ảnh cưới TT0433" },
    { id: "1iRj4eLnfdvfDl7g0fwQGAjNX5_JJ9ZNY", title: "Ảnh cưới TT0434" },
    { id: "1dOyp9yOusHrZMAYdyAzpKM7NUzyPyp4S", title: "Ảnh cưới TT0435" },
    { id: "1tMSWBtD0zlymXZI5eHqz_q7_AUGH7zKr", title: "Ảnh cưới TT0436" },
    { id: "1ZDL4uOJJjBmpweSIQ116PUsEzzsN70wU", title: "Ảnh cưới TT0437" },
    { id: "1nZ03q-Ts8F3QW-KayDlg7O6D3ToXe-N8", title: "Ảnh cưới TT0438" },
    { id: "1D8Nm2Eq3Vbd8-_7AL8tbtUo1Y9TALjN5", title: "Ảnh cưới TT0439" },
    { id: "1zZrzipqcCssUnTukb5Rocp5h8jjg518-", title: "Ảnh cưới TT0440" },
    { id: "1f2rmngkS2nA8jm5uy7ar3KTvxn02yo-J", title: "Ảnh cưới TT0441" },
    { id: "19bju7LiE2wLMhQX9ioII3-ekIFs09pVK", title: "Ảnh cưới TT0442" },
    { id: "14MFxgKQSDrvz-dXRJormj3KIEqsn-lzG", title: "Ảnh cưới TT0443" },
    { id: "1qZssxw7w-7YQ27Me45UO-Qy7fs9zKT_l", title: "Ảnh cưới TT0444" },
    { id: "18LyTD0Fa5iMOojwAsvvDSPQgd-5r0C--", title: "Ảnh cưới TT0445" },
    { id: "1kd0pdobgf7uf0raTqtmu2cTVr7tVWP1p", title: "Ảnh cưới TT0446" },
    { id: "1OjdFZxE7RiUh7GAWFWSfCexd_zaaYfs9", title: "Ảnh cưới TT0447" },
    { id: "1DzXc_UekrNpF_4F9IC1gLdougcyEMkdR", title: "Ảnh cưới TT0448" },
    { id: "1ZVYUoaFr0nb48JO2IyC7dc70LxlotuVl", title: "Ảnh cưới TT0449" },
    { id: "1D0DeCkqoFP1MnV2dWcA8ArccLVRTpELy", title: "Ảnh cưới TT0450" },
    { id: "1PdoPwI_2RFulqAdQgleKdGOVbax561cQ", title: "Ảnh cưới TT0451" },
    { id: "1ezI__dVUociue1rgeUBsugdZwseqwybe", title: "Ảnh cưới TT0452" },
    { id: "1kSHJpLzcgOvVn_ZpsCjNwE7Pl-DwGYq3", title: "Ảnh cưới TT0453" },
    { id: "1TjMSkeVXWCgpuW8HPaGG0-25WKhe-U8x", title: "Ảnh cưới TT0454" },
    { id: "1Aj_YjQHEUdynfn4MoboYGpZsyHwzJ7J6", title: "Ảnh cưới TT0455" },
    { id: "1m5xSs6tnA9Q5RAWqd4xF3gb_IV7qdacO", title: "Ảnh cưới TT0456" },
    { id: "1Ohgx3-2878VSLeyWU6eMjp7h8bqDIK4f", title: "Ảnh cưới TT0457" },
    { id: "1PAndrPnHAAMrzpKjmlpegWzxihmKg7gi", title: "Ảnh cưới TT0458" },
    { id: "197-pGuenVXK090XOQ76IbRGu4RfHVn4u", title: "Ảnh cưới TT0459" },
    { id: "1Z0A2Vra9xRmAbXv7B-sdSCXgwAQBiqnl", title: "Ảnh cưới TT0460" },
    { id: "1ZBqxJccHTUIO1995rhEkIw-C_FVu6Lsw", title: "Ảnh cưới TT0461" },
    { id: "1wNtCb2R-_QOSsiewhr61t6Fj0ptJb_qy", title: "Ảnh cưới TT0462" },
    { id: "1sFbSGypbMjpTR9qomU6jFLKAMNnUYygc", title: "Ảnh cưới TT0463" },
    { id: "1auWK4hUDsUYNmucND6fI4qglzuI8XzJY", title: "Ảnh cưới TT0464" },
    { id: "1UG1RSQSn0tOuA3BcLcWy56aEmoC8OGJH", title: "Ảnh cưới TT0465" },
    { id: "1aAbTlto5gKfRFO03SgIvEZ3353uCNgm1", title: "Ảnh cưới TT0466" },
    { id: "1f6eEw51pUDErazG2qcHebkmbdj1QR3-a", title: "Ảnh cưới TT0467" },
    { id: "1n2SnrA1XSUZwZP_hYI00e8A15bPb3b39", title: "Ảnh cưới TT0468" },
    { id: "14Np5lzTYrLqmaR5-hvfJV8BfP6FgmRBp", title: "Ảnh cưới TT0469" },
    { id: "18zfkY3YSDs9TJx6ZY498AEq6wSYYydGF", title: "Ảnh cưới TT0470" },
    { id: "1eyej9zLFGO5oz9FZhEc6KLkPwqOaZ9iX", title: "Ảnh cưới TT0471" },
    { id: "1vAjMzpLgd0AMAamc0SiovUu9AY6Jj6rG", title: "Ảnh cưới TT0472" },
    { id: "1RlFQsKPg0sVTzO_lKTQAAkROEc8kZLwK", title: "Ảnh cưới TT0473" },
    { id: "1oqMWOUl-_JYlbSDGubsCVlutjXmsz3o_", title: "Ảnh cưới TT0474" },
    { id: "1Xd8eF0qr0hjh3wB1PI3e_rDHe4AZbvkT", title: "Ảnh cưới TT0475" },
    { id: "1BjZBmNV47J4Ht_aO5qK7MxwCJZuRDHp9", title: "Ảnh cưới TT0476" },
    { id: "1HJvoSBiMaXsx-FXfQN6amaBqbp3p4Eyu", title: "Ảnh cưới TT0477" },
    { id: "1nn5ITSceZiMAEwL8C6EqqM6MyEjmpuVe", title: "Ảnh cưới TT0478" },
    { id: "1l1ftOilqG72_cY6d14xgYTkTDcwRIeKW", title: "Ảnh cưới TT0479" },
    { id: "1sDTMKQ8vfIaiSOauQJF7YD3DUKQqJNiS", title: "Ảnh cưới TT0480" },
    { id: "1YOBPdDs_34PNfuzv4pLTZTzQZ-Px6Co3", title: "Ảnh cưới TT0481" },
    { id: "1GahBXkbq3Pgl70kfb1TqHgySLqM5h2sy", title: "Ảnh cưới TT0482" },
    { id: "1j4OyJcIOdG8Ph3oZaofwM84ilM259LyE", title: "Ảnh cưới TT0483" },
    { id: "1i9Z_y0S7poN8chxgW-G5u_miSCkQ0gWr", title: "Ảnh cưới TT0484" },
    { id: "1-Sw_84vucmU0S9fe2yOdMtaUqPtCCIJS", title: "Ảnh cưới TT0485" },
    { id: "1T7YyDEPL990YD8jlz5iIiFO7aEXAikeP", title: "Ảnh cưới TT0486" },
    { id: "1tPmr2VFHYv-pJyXfZ-CADaD9mmhuQbsS", title: "Ảnh cưới TT0487" },
    { id: "1FpeSyXV969jtu2TByjlSoCC27r3xhMhH", title: "Ảnh cưới TT0488" },
    { id: "1GEeX7lyMb88Eu--0m4BmHoBAHRaRfvJJ", title: "Ảnh cưới TT0489" },
    { id: "1I6eIvFdgV6Jfo0xCXTqQuH0fLt1UJsCD", title: "Ảnh cưới TT0490" },
    { id: "1SFHwhuQRCxgbvVNigst2PWNCcl_YNQ3Y", title: "Ảnh cưới TT0491" },
    { id: "1wnUgCdFXhF6isaqId34LTfNOMShGFK-r", title: "Ảnh cưới TT0492" },
    { id: "160glR5PJBVmx7Bedq3LArFiaS4rP1JLM", title: "Ảnh cưới TT0493" },
    { id: "1_2GRUcNtB9NGlh2Gw3210dlVcMfuo_-X", title: "Ảnh cưới TT0494" },
    { id: "1RbF1FKxDW0ww91pLe5TXtAAnYEE-evmM", title: "Ảnh cưới TT0495" },
    { id: "1593iwl471xeGruSRyHksJVK5r7wdZ62_", title: "Ảnh cưới TT0496" },
    { id: "1dSUsp1Yt6X7cK1R322JAm8Rkz1YQoJ1f", title: "Ảnh cưới TT0497" },
    { id: "1MO6zdRq-pTI_FVHrQMm2FIxbjQjcJOhb", title: "Ảnh cưới TT0498" },
    { id: "1rwmA77wVPQNUHPRZeTSMw063ZYox_Ia4", title: "Ảnh cưới TT0499" },
    { id: "1GNvavcPNa80OK710Z3H3_o43j0l6eTvz", title: "Ảnh cưới TT0500" },
    { id: "1TnZRJCtQZL8o9rsdRoqcTR_43fCI4nsc", title: "Ảnh cưới TT0501" },
    { id: "1iWElkAvt2x-3JtBsXvG1G8lxFAARFh8b", title: "Ảnh cưới TT0502" },
    { id: "1NEfuRyWbzVCiCQPGr3FIyTDytCrKaHmr", title: "Ảnh cưới TT0503" },
    { id: "1bV9SCxpXuSdIzyKcxvxEjQqMCsV0NTiN", title: "Ảnh cưới TT0504" },
    { id: "1gPNXx3O9_UiYkvSBqg0hdSkt_JeejXo6", title: "Ảnh cưới TT0505" },
    { id: "1SyVqSxhfhv_Mb0JLSqn04kB_CTheL4D1", title: "Ảnh cưới TT0506" },
    { id: "1QiqZAtxxa5I4dl3yQstoCBTPwtDfo_i-", title: "Ảnh cưới TT0507" },
  ] satisfies WeddingPhoto[],
  gallery: driveGalleryPhotos,
  gallerySource: "config" as "config" | "drive-api",
  galleryFolderUrl: "https://drive.google.com/drive/folders/1BmvUXa5b5tLehNfPhtl4BWTU8Twsqg8T",
  bankAccounts: [
    {
      label: "Cô dâu",
      bankName: "Vietcombank",
      accountName: "DIEM MY",
      accountNumber: "0123456789",
      qrImage: "https://img.vietqr.io/image/VCB-0123456789-compact2.png?accountName=DIEM%20MY",
    },
    {
      label: "Chú rể",
      bankName: "Techcombank",
      accountName: "CONG BANG",
      accountNumber: "19001234567890",
      qrImage: "https://img.vietqr.io/image/TCB-19001234567890-compact2.png?accountName=CONG%20BANG",
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
    title: "Diễm My & Công Bằng · 20.12.2026",
    description: "Trân trọng mời bạn đến chung vui trong ngày thành hôn của Diễm My và Công Bằng.",
  },
} as const;

export const coupleNames = `${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`;
