const links = [
  { label: "ร้านค้า DUDSHOP777", detail: "เว็บไซต์ร้านค้าแยกต่างหาก", href: "https://dudshop777.web2u.xyz/home" },
  { label: "Discord", detail: "เพิ่มลิงก์ Discord ของคุณ", href: "#" },
  { label: "Facebook", detail: "เพิ่มลิงก์ Facebook ของคุณ", href: "#" },
  { label: "Instagram", detail: "เพิ่มลิงก์ Instagram ของคุณ", href: "#" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="scanlines" aria-hidden="true" />
      <nav className="topbar">
        <a className="brand" href="/">DUD<span>SHOP</span>777<span className="cursor">_</span></a>
        <span className="status"><i /> SYSTEM ONLINE</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">WELCOME TO MY PROFILE</p>
        <div className="avatar">D<span>7</span></div>
        <h1>DUDSHOP<span>777</span></h1>
        <p className="role">DIGITAL CREATOR <b>/</b> SHOP OWNER</p>
        <p className="intro">ยินดีต้อนรับสู่พื้นที่แนะนำตัวและช่องทางติดต่ออย่างเป็นทางการ</p>
        <div className="hero-tags"><span>THAILAND</span><span>ONLINE</span><span>EST. 2026</span></div>
      </section>

      <section className="content-grid">
        <article className="panel about">
          <div className="panel-head"><span>01 / ABOUT</span><span className="red-dot" /></div>
          <h2>เกี่ยวกับ <em>ฉัน</em></h2>
          <p>เว็บไซต์โปรไฟล์ของ DUDSHOP777 สำหรับแนะนำตัว แสดงผลงาน และรวมช่องทางติดต่อไว้ในที่เดียว</p>
          <p className="muted">หน้านี้เป็นเว็บไซต์โปรไฟล์แยกจากเว็บไซต์ร้านค้าโดยเฉพาะ</p>
        </article>

        <article className="panel links">
          <div className="panel-head"><span>02 / CONNECT</span><span>LINKS</span></div>
          <h2>ช่องทาง <em>ติดต่อ</em></h2>
          <div className="link-list">
            {links.map((link) => (
              <a className="link-item" href={link.href} key={link.label}
                 target={link.href.startsWith("http") ? "_blank" : undefined}
                 rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                <span><strong>{link.label}</strong><small>{link.detail}</small></span>
                <b>↗</b>
              </a>
            ))}
          </div>
        </article>
      </section>

      <footer><span>© 2026 DUDSHOP777</span><span>BUILT WITH NEXT.JS <b>●</b></span></footer>
    </main>
  );
}
