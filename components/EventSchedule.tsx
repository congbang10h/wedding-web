import type { WeddingEvent } from "@/config/wedding";
import { Countdown } from "./Countdown";
import { Reveal } from "./Reveal";

export function EventSchedule({ events, weddingDate }: { events: readonly WeddingEvent[]; weddingDate: string }) {
  return (
    <section id="lich-trinh" className="section schedule-section">
      <Reveal className="section-heading centered">
        <p className="eyebrow">Hẹn gặp bạn tại</p>
        <h2>Ngày chúng mình <span>về chung một nhà</span></h2>
      </Reveal>
      <Countdown target={weddingDate} />
      <div className="event-grid">
        {events.map((event, index) => (
          <Reveal key={`${event.title}-${event.venue}`} className="event-card">
            <div className="event-number">0{index + 1}</div>
            <p className="eyebrow">{event.eyebrow}</p>
            <h3>{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <div className="event-times"><span>{event.receptionTime}</span><span>{event.ceremonyTime}</span></div>
            <div className="hairline" />
            <strong>{event.venue}</strong>
            <p className="event-address">{event.address}</p>
            <a className="text-link" href={event.mapsUrl} target="_blank" rel="noreferrer">Xem bản đồ <span aria-hidden>↗</span></a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
