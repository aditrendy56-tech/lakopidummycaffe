import Image from "next/image";
import { RevealSection } from "@/components/reveal-section";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  badge?: string;
};

const menuItems: readonly MenuItem[] = [
  {
    name: "Es Kopi Susu Lakopi",
    description: "Racikan house blend, gula aren, susu segar.",
    price: "Rp 18.000",
    badge: "FAVORIT"
  },
  {
    name: "Butterscotch Latte",
    description: "Manis karamel, favorit yang disebut di ulasan.",
    price: "Rp 20.000",
    badge: "TERLARIS"
  },
  {
    name: "Lychee Tea",
    description: "Segar, cocok buat yang gak minum kopi.",
    price: "Rp 15.000"
  },
  {
    name: "Americano",
    description: "Espresso murni, untuk yang suka pahit tegas.",
    price: "Rp 15.000"
  },
  {
    name: "Kopi Susu Gula Aren",
    description: "Klasik, manis pas, tanpa basa-basi.",
    price: "Rp 17.000"
  },
  {
    name: "Camilan Ringan",
    description: "Teman ngopi, tanya kru untuk pilihan hari ini.",
    price: "Rp 10.000"
  }
] as const;

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80&auto=format",
    alt: "Interior kedai"
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&q=80&auto=format",
    alt: "Kopi close up"
  },
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80&auto=format",
    alt: "Kopi dari atas"
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80&auto=format",
    alt: "Biji kopi"
  }
] as const;

export default function HomePage() {
  return (
    <main>
      <div className="blob" style={{ width: 420, height: 420, background: "rgba(31,167,154,0.12)", top: -120, right: -140 }} />
      <div className="blob" style={{ width: 320, height: 320, background: "rgba(255,200,87,0.18)", top: 640, left: -120 }} />

      <header>
        <nav className="wrap" aria-label="Navigasi utama">
          <a className="logo" href="#top" aria-label="Lakopi ke atas halaman">
            <span className="logo-mark">☕</span>
            Lakopi
          </a>
          <div className="nav-links">
            <a href="#tentang">Tentang</a>
            <a href="#menu">Menu</a>
            <a href="#galeri">Galeri</a>
            <a href="#ulasan">Ulasan</a>
            <a href="#lokasi">Lokasi</a>
          </div>
          <a className="btn btn-primary" href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
            Pesan via WA
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">📍 Rw. Laut, Bandar Lampung</span>
            <h1>
              Ngopi santai,
              <br />
              tetap <span className="hl">bersahabat</span>
              <br />
              di kantong.
            </h1>
            <p className="lead">Kedai kopi kecil di Jl. Hos Cokroaminoto yang jadi tempat nongkrong favorit, mulai dari Rp1.000 sampai Rp25.000 per gelas.</p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#menu">
                Lihat Menu
              </a>
              <a className="btn btn-ghost" href="#lokasi">
                Cek Lokasi
              </a>
            </div>
            <div className="stat-row">
              <div className="stamp">
                <span className="big">4,4★</span>
                <span>
                  <small>RATING</small>
                  29 ulasan
                </span>
              </div>
              <div className="stamp">
                <span className="big">Rp1–25rb</span>
                <span>
                  <small>HARGA</small>
                  per orang
                </span>
              </div>
            </div>
          </div>

          <div className="hero-photos">
            <div className="tape" />
            <div className="poly poly-1">
              <Image src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&q=80&auto=format" alt="Latte art" fill sizes="(max-width: 820px) 60vw, 230px" priority />
            </div>
            <div className="poly poly-2">
              <Image src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500&q=80&auto=format" alt="Biji kopi" fill sizes="(max-width: 820px) 50vw, 200px" />
            </div>
            <div className="poly poly-3">
              <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80&auto=format" alt="Kopi susu" fill sizes="(max-width: 820px) 40vw, 150px" />
            </div>
          </div>
        </div>
      </section>

      <RevealSection id="tentang" className="section">
        <div className="wrap about-grid">
          <div className="about-photo">
            <Image src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80&auto=format" alt="Suasana kedai kopi" width={700} height={525} />
          </div>
          <div>
            <span className="section-tag">Tentang Lakopi</span>
            <h2>Kedai kecil, cerita panjang.</h2>
            <p className="desc">Lakopi adalah tempat ngopi santai buat yang cari suasana nyaman tanpa bikin dompet nangis. Kru ramah, siap kasih rekomendasi menu buat kamu yang bingung mau pesan apa. Cocok buat nugas, ngobrol bareng teman, atau sekadar rehat sore.</p>
            <div className="chip-row">
              <div className="chip">⭐ 4,4 / 5</div>
              <div className="chip">💬 29 Ulasan</div>
              <div className="chip">💸 Mulai Rp1.000</div>
              <div className="chip">🛵 Bawa Pulang</div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="menu" className="section panel">
        <div className="wrap">
          <span className="section-tag">Menu Favorit</span>
          <h2>Yang paling sering dipesan</h2>
          <p className="desc">Menu contoh di bawah bisa disesuaikan lagi sama pemilik. Untuk landing page awal, ini sudah cukup untuk menampilkan karakter brand.</p>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <article className="menu-card" key={item.name}>
                {item.badge ? <div className="menu-badge">{item.badge}</div> : null}
                <h3>{item.name}</h3>
                <p className="desc-small">{item.description}</p>
                <span className="price-tag mono">{item.price}</span>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="galeri" className="section">
        <div className="wrap">
          <span className="section-tag">Galeri</span>
          <h2>Suasana di Lakopi</h2>
          <p className="desc">Contoh foto suasana, nanti tinggal diganti pakai foto asli kedai.</p>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <div className="g-item" key={item.alt}>
                <Image src={item.src} alt={item.alt} width={400} height={400} />
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="ulasan" className="section panel">
        <div className="wrap">
          <span className="section-tag">Kata Pelanggan</span>
          <h2>Ulasan asli dari Google Maps</h2>
          <div className="review-grid">
            <article className="review-card">
              <div className="stars">★★★★★</div>
              <p>Pengunjung menilai tempatnya nyaman dengan minuman yang enak dan harga terjangkau. Pelayanan disebut ramah, terutama kru yang aktif memberi rekomendasi menu.</p>
              <div className="reviewer">
                <div className="avatar">SD</div>
                Selamat Datang · sebulan lalu
              </div>
            </article>
            <article className="review-card">
              <div className="stars">★★★★★</div>
              <p>Local Guide dengan puluhan ulasan menyebut sering kembali karena suasananya nyaman dan buka 24 jam, dengan butterscotch dan lychee jadi menu andalan.</p>
              <div className="reviewer">
                <div className="avatar">DC</div>
                Dwi Cahya · 5 bulan lalu
              </div>
            </article>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="lokasi" className="section">
        <div className="wrap">
          <div className="location-card">
            <div>
              <span className="section-tag" style={{ color: "var(--yellow)" }}>
                Kunjungi Kami
              </span>
              <h2>Lokasi & Jam Buka</h2>
              <div style={{ marginTop: 26 }}>
                <div className="info-row">
                  <div className="ic">📍</div>
                  <div>
                    <div className="lbl">Alamat</div>
                    <div className="val">Jl. Hos Cokroaminoto No.84, Rw. Laut, Kota Bandar Lampung, Lampung 35213</div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="ic">🕒</div>
                  <div>
                    <div className="lbl">Jam Buka</div>
                    <div className="val">Setiap hari, 09.00 – 22.00 <span style={{ opacity: 0.6 }}>(sesuaikan dengan jam asli)</span></div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="ic">💬</div>
                  <div>
                    <div className="lbl">Kontak</div>
                    <div className="val">
                      wa.me/6281234567890 <span style={{ opacity: 0.6 }}>(placeholder)</span>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary" style={{ marginTop: 10 }} href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                Chat via WhatsApp
              </a>
            </div>
            <div className="map-frame">
              <iframe title="Peta Lokasi Lakopi" src="https://www.google.com/maps?q=Jl.+Hos+Cokroaminoto+No.84+Bandar+Lampung&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </RevealSection>

      <footer>
        <div className="wrap">
          <div className="foot-social">
            <a href="#" aria-label="Instagram">
              📷
            </a>
            <a href="https://wa.me/6281234567890" aria-label="WhatsApp">
              💬
            </a>
            <a href="#lokasi" aria-label="Maps">
              📍
            </a>
          </div>
          <p className="foot-note">© 2026 Lakopi — Website demo, dibuat untuk contoh presentasi.</p>
        </div>
      </footer>

      <a className="wa-float" href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp">
        💬
      </a>
    </main>
  );
}