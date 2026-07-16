"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

type Status = { type: "idle" | "loading" | "success" | "error"; message: string };

export function RSVPForm({ deadline }: { deadline: string }) {
  const [attendance, setAttendance] = useState("yes");
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus({ type: "loading", message: "Đang gửi lời hồi đáp…" });
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/rsvp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message ?? "Không thể gửi xác nhận.");
      setStatus({ type: "success", message: data.message ?? "Cảm ơn bạn! Chúng mình đã nhận được lời hồi đáp." });
      form.reset();
      setAttendance("yes");
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Đã có lỗi xảy ra, vui lòng thử lại." });
    }
  }

  return (
    <section id="xac-nhan" className="section rsvp-section">
      <Reveal className="rsvp-intro"><p className="eyebrow">R.S.V.P</p><h2>Bạn sẽ đến chung vui cùng chúng mình chứ?</h2><p>Niềm vui sẽ trọn vẹn hơn khi có bạn ở bên. Hãy để lại lời hồi đáp để chúng mình chuẩn bị đón tiếp thật chu đáo.</p><span>{deadline}</span></Reveal>
      <Reveal className="rsvp-form-wrap">
        <form onSubmit={submit} className="rsvp-form" noValidate>
          <input className="honeypot" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label>Họ và tên <span>*</span><input name="name" required maxLength={80} placeholder="Tên của bạn" /></label>
          <label>Số điện thoại<input name="phone" type="tel" maxLength={20} pattern="[0-9+ ()-]{8,20}" placeholder="Không bắt buộc" /></label>
          <fieldset><legend>Bạn sẽ tham dự? <span>*</span></legend><div className="radio-row"><label><input type="radio" name="attendance" value="yes" checked={attendance === "yes"} onChange={() => setAttendance("yes")} />Có, tôi sẽ đến</label><label><input type="radio" name="attendance" value="no" checked={attendance === "no"} onChange={() => setAttendance("no")} />Rất tiếc, tôi bận</label></div></fieldset>
          {attendance === "yes" ? <label>Số người tham dự<select name="guests" defaultValue="1"><option value="1">1 người</option><option value="2">2 người</option><option value="3">3 người</option><option value="4">4 người</option><option value="5">5 người</option></select></label> : <input type="hidden" name="guests" value="0" />}
          <label>Lời nhắn<textarea name="message" maxLength={500} rows={4} placeholder="Gửi một lời chúc nhỏ đến cô dâu chú rể…" /></label>
          <button className="primary-button full" type="submit" disabled={status.type === "loading"}>{status.type === "loading" ? "Đang gửi…" : "Gửi xác nhận"}</button>
          {status.message ? <p className={`form-status ${status.type}`} role="status">{status.message}</p> : null}
        </form>
      </Reveal>
    </section>
  );
}
