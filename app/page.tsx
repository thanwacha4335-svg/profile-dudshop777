
const links = [
  { name: "ร้านค้า DUDSHOP777", url: "https://dudshop777.web2u.xyz/home" },
  { name: "Discord", url: "#" },
  { name: "Facebook", url: "#" },
  { name: "Instagram", url: "#" },
];

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#08090b",
      color: "white",
      fontFamily: "monospace",
      padding: "60px 20px",
      textAlign: "center"
    }}>
      <p style={{ color: "#ed2638" }}>WELCOME TO MY PROFILE</p>
      <h1 style={{ fontSize: "48px" }}>
        DUDSHOP<span style={{ color: "#ed2638" }}>777</span>
      </h1>
      <p>OFFICIAL PROFILE</p>
      <p>ยินดีต้อนรับสู่โปรไฟล์ DUDSHOP777</p>

      <section style={{ maxWidth: "500px", margin: "40px auto" }}>
        <h2>ABOUT ME</h2>
        <p>พื้นที่แนะนำตัวและช่องทางติดต่อของ DUDSHOP777</p>
        <h2>CONTACT</h2>
        {links.map((link) => (
          <a key={link.name} href={link.url}
            style={{
              display: "block",
              padding: "16px",
              margin: "12px",
              border: "1px solid #ed2638",
              color: "white",
              textDecoration: "none"
            }}>
            {link.name} ↗
          </a>
        ))}
      </section>
      <footer>© 2026 DUDSHOP777</footer>
    </main>
  );
}
