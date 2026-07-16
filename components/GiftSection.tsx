"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

type Account = { label: string; bankName: string; accountName: string; accountNumber: string; qrImage: string };

export function GiftSection({ accounts }: { accounts: readonly Account[] }) {
  const [copied, setCopied] = useState("");
  async function copy(account: Account) {
    await navigator.clipboard.writeText(account.accountNumber);
    setCopied(account.label);
    window.setTimeout(() => setCopied(""), 2200);
  }
  return (
    <section id="qua-mung" className="section gift-section">
      <Reveal className="section-heading centered light">
        <p className="eyebrow">With love</p>
        <h2>Gửi quà mừng <span>đến cô dâu chú rể</span></h2>
        <p>Sự hiện diện của bạn đã là món quà quý giá nhất đối với chúng tôi.</p>
      </Reveal>
      <div className="gift-grid">
        {accounts.map((account) => (
          <Reveal className="gift-card" key={account.label}>
            <div className="gift-copy"><p className="eyebrow">{account.label}</p><h3>{account.bankName}</h3><p>{account.accountName}</p><strong>{account.accountNumber}</strong><button type="button" onClick={() => copy(account)}>{copied === account.label ? "Đã sao chép số tài khoản ✓" : "Sao chép số tài khoản"}</button></div>
            <div className="qr-frame"><img src={account.qrImage} alt={`Mã QR tài khoản ${account.label} tại ${account.bankName}`} loading="lazy" /></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
