import { Reveal } from "./Reveal";

export function Wishes({ wishes }: { wishes: readonly { author: string; message: string }[] }) {
  return (
    <section className="section wishes-section">
      <Reveal className="section-heading centered"><p className="eyebrow">Warm wishes</p><h2>Những lời thương gửi đến chúng mình</h2></Reveal>
      <div className="wishes-grid">{wishes.map((wish, index) => <Reveal className="wish-card" key={`${wish.author}-${index}`}><span>“</span><p>{wish.message}</p><strong>— {wish.author}</strong></Reveal>)}</div>
    </section>
  );
}
