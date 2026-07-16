import { Reveal } from "./Reveal";

type Person = { name: string; photo: string; description: string };

export function CoupleIntro({ bride, groom }: { bride: Person; groom: Person }) {
  return (
    <section className="section couple-section" aria-label="Cô dâu và chú rể">
      <Reveal className="section-heading centered">
        <p className="eyebrow">The bride & the groom</p>
        <h2>Hai trái tim, một hành trình</h2>
      </Reveal>
      <div className="couple-grid">
        {[{ ...bride, role: "Cô dâu" }, { ...groom, role: "Chú rể" }].map((person, index) => (
          <Reveal className={`person-card person-${index + 1}`} key={person.role}>
            <div className="person-photo-wrap"><img src={person.photo} alt={`${person.role} ${person.name}`} loading="lazy" /></div>
            <div className="person-copy"><p className="eyebrow">{person.role}</p><h3>{person.name}</h3><p>{person.description}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
