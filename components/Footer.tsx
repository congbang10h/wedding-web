export function Footer({ names, date }: { names: string; date: string }) {
  return (
    <footer className="site-footer">
      <a className="back-to-top" href="#top" aria-label="Quay lên đầu trang">↑</a>
      <p className="eyebrow">Thank you for celebrating with us</p>
      <h2>{names}</h2><span>{date}</span>
      <small>Made with love · © 2026</small>
    </footer>
  );
}
