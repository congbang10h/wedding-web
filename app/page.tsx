import { CoupleIntro } from "@/components/CoupleIntro";
import { EventSchedule } from "@/components/EventSchedule";
import { Footer } from "@/components/Footer";
import { GiftSection } from "@/components/GiftSection";
import { InvitationCard } from "@/components/InvitationCard";
import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { RSVPForm } from "@/components/RSVPForm";
import { WeddingGallery } from "@/components/WeddingGallery";
import { Wishes } from "@/components/Wishes";
import { coupleNames, weddingConfig } from "@/config/wedding";

export default function Home() {
  const { couple, hero } = weddingConfig;
  return (
    <main id="top">
      <Navigation musicUrl={weddingConfig.backgroundMusic} names={coupleNames} />
      <section className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(31,39,31,.16), rgba(22,29,24,.58)), url(${hero.image})` }} aria-label="Thiệp cưới trực tuyến">
        <div className="hero-topline"><span>We are getting married</span><span>Ho Chi Minh City · Vietnam</span></div>
        <div className="hero-content">
          <p className="hero-kicker">Save the date</p>
          <h1><span>{couple.bride.name}</span><i>&</i><span>{couple.groom.name}</span></h1>
          <div className="hero-date"><span />{weddingConfig.displayDate}<span /></div>
          <a className="hero-button" href="#thiep-cuoi" aria-label="Xem phần thiệp cưới">Xem thiệp cưới <b aria-hidden>↓</b></a>
        </div>
        <p className="hero-side-text">Together is a beautiful place to be</p>
      </section>

      <section id="loi-moi" className="section invitation-message-section">
        <Reveal className="invitation-message">
          <div className="botanical-mark" aria-hidden>❦</div>
          <p className="eyebrow">Trân trọng kính mời</p>
          <h2>Ngày vui của chúng mình sẽ ý nghĩa hơn khi có bạn</h2>
          <blockquote>“{weddingConfig.invitationMessage}”</blockquote>
          <p className="signature">{couple.bride.name} <i>&</i> {couple.groom.name}</p>
        </Reveal>
      </section>

      <CoupleIntro bride={couple.bride} groom={couple.groom} />
      <EventSchedule events={weddingConfig.events} weddingDate={weddingConfig.weddingDate} />
      <InvitationCard cards={weddingConfig.invitationCards} />
      <WeddingGallery initialPhotos={weddingConfig.gallery} source={weddingConfig.gallerySource} folderUrl={weddingConfig.galleryFolderUrl} />
      {weddingConfig.showGiftSection ? <GiftSection accounts={weddingConfig.bankAccounts} /> : null}
      {weddingConfig.showRSVP ? <RSVPForm deadline={weddingConfig.rsvp.deadline} /> : null}
      <Wishes wishes={weddingConfig.wishes} />
      <Footer names={coupleNames} date={weddingConfig.displayDate} />
    </main>
  );
}
