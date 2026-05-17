import React, { useState, useEffect } from 'react';

// ─── DANE DO EDYCJI ────────────────────────────────────────────────────────────
// Tutaj możesz zmieniać treści strony bez znajomości programowania

const KONTAKT = {
  telefon: '512 384 325',
  email: 'fizjoterapia.jo@gmail.com',
  adres: ['Active Clinic', 'ul. Pokorna 2 lokal U19', '00-199 Warszawa'],
  booksy: 'https://booksy.com/pl-pl/97951_active-clinic_fizjoterapia_3_warszawa#ba_s=sh_1',
};

const GODZINY = [
  { dzien: 'Poniedziałek', godziny: '7:00–14:00' },
  { dzien: 'Wtorek',       godziny: '7:00–19:00' },
  { dzien: 'Czwartek',     godziny: '7:00–19:00' },
  { dzien: 'Piątek',       godziny: '7:00–13:00' },
];

const SPECJALIZACJE = [
  { title: 'Fizjoterapia sportowa',      icon: '🏋️' },
  { title: 'Terapia manualna',           icon: '🖐️' },
  { title: 'Rehabilitacja ortopedyczna', icon: '🦴' },
  { title: 'Fizjoterapia stomatologiczna', icon: '🦷' },
];

const BLOG = [
  {
    title: 'Jak wygląda pierwsza wizyta u fizjoterapeuty?',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Ból kręgosłupa — najczęstsze przyczyny',
    image: 'https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Kiedy warto udać się do fizjoterapeuty sportowego?',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
  },
];

// ─── LOGO SVG ─────────────────────────────────────────────────────────────────

function LogoHeader() {
  return (
    <svg viewBox="0 0 340 70" xmlns="http://www.w3.org/2000/svg" style={{ height: 52, width: 'auto' }}>
      {/* Koło */}
      <circle cx="35" cy="35" r="33" fill="#0b2c5f" />
      <path d="M35 35 L35 2 A33 33 0 0 1 68 35 Z" fill="#d71920" />
      <path d="M35 35 L68 35 A33 33 0 0 1 35 68 Z" fill="#d71920" opacity="0.25" />
      {/* Sylwetka */}
      <circle cx="46" cy="16" r="5" fill="white" />
      <line x1="44" y1="21" x2="38" y2="38" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="41" y1="28" x2="29" y2="35" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="41" y1="28" x2="52" y2="33" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="38" x2="27" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="27" y1="50" x2="21" y2="62" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="38" x2="50" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2="58" y2="42" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Punkty stawowe */}
      <circle cx="29" cy="35" r="2.5" fill="#d71920" />
      <circle cx="52" cy="33" r="2.5" fill="#d71920" />
      <circle cx="27" cy="50" r="2.5" fill="#d71920" />
      <circle cx="50" cy="50" r="2.5" fill="#d71920" />
      <circle cx="21" cy="62" r="2" fill="#d71920" />
      {/* Tekst */}
      <text x="78" y="32" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="#0b2c5f">fiz</text>
      <text x="108" y="32" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="#d71920">JO</text>
      <text x="134" y="32" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="#0b2c5f">terapia</text>
      <line x1="78" y1="42" x2="108" y2="42" stroke="#d71920" strokeWidth="1" />
      <text x="193" y="50" fontFamily="Georgia, serif" fontSize="8.5" fill="#0b2c5f" letterSpacing="2.5" textAnchor="middle">JOANNA OLENDEREK</text>
      <line x1="110" y1="42" x2="310" y2="42" stroke="#d71920" strokeWidth="1" />
    </svg>
  );
}

function LogoHero() {
  return (
    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" style={{ width: 200, height: 200 }}>
      <circle cx="110" cy="88" r="74" fill="white" opacity="0.06" />
      <circle cx="110" cy="88" r="68" fill="#0b2c5f" />
      <path d="M110 88 L110 20 A68 68 0 0 1 178 88 Z" fill="#d71920" />
      <path d="M110 88 L178 88 A68 68 0 0 1 110 156 Z" fill="#d71920" opacity="0.2" />
      {/* Sylwetka powiększona */}
      <circle cx="128" cy="40" r="9.5" fill="white" />
      <line x1="125" y1="50" x2="118" y2="78" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <line x1="121" y1="62" x2="98" y2="74" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <line x1="121" y1="62" x2="142" y2="70" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <line x1="118" y1="78" x2="96" y2="100" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <line x1="96" y1="100" x2="85" y2="124" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <line x1="118" y1="78" x2="140" y2="102" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <line x1="140" y1="102" x2="154" y2="88" stroke="white" strokeWidth="4" strokeLinecap="round" />
      {/* Punkty stawowe */}
      <circle cx="98" cy="74" r="5" fill="#d71920" />
      <circle cx="142" cy="70" r="5" fill="#d71920" />
      <circle cx="96" cy="100" r="5" fill="#d71920" />
      <circle cx="140" cy="102" r="5" fill="#d71920" />
      <circle cx="85" cy="124" r="4" fill="#d71920" />
      {/* Tekst */}
      <text x="110" y="178" fontFamily="Georgia, serif" fontSize="17" fontWeight="700" fill="white" textAnchor="middle">
        fiz<tspan fill="#d71920">JO</tspan>terapia
      </text>
      <line x1="25" y1="190" x2="68" y2="190" stroke="#d71920" strokeWidth="1.2" />
      <text x="110" y="200" fontFamily="Georgia, serif" fontSize="7.5" fill="white" opacity="0.65" letterSpacing="3.5" textAnchor="middle">JOANNA OLENDEREK</text>
      <line x1="152" y1="190" x2="195" y2="190" stroke="#d71920" strokeWidth="1.2" />
    </svg>
  );
}

// ─── KOMPONENT GŁÓWNY ─────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f9ff', color: '#1e293b', fontFamily: 'Inter, sans-serif' }}>

      {/* ── HEADER ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        backdropFilter: 'blur(20px)', backgroundColor: 'rgba(255,255,255,0.85)',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: scrolled ? '0 4px 24px rgba(11,44,95,0.08)' : 'none',
        transition: 'box-shadow 0.3s',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <LogoHeader />

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: 36, fontSize: 14, fontWeight: 500, color: '#475569' }} className="desktop-nav">
            {['#about', '#blog', '#contact'].map((href, i) => (
              <a key={href} href={href}
                style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#d71920'}
                onMouseLeave={e => e.target.style.color = '#475569'}
              >
                {['O mnie', 'Blog', 'Kontakt'][i]}
              </a>
            ))}
          </nav>

          <a href={KONTAKT.booksy} target="_blank" rel="noopener noreferrer" style={{
            padding: '10px 22px', borderRadius: 99, backgroundColor: '#d71920',
            color: 'white', fontWeight: 600, fontSize: 14, textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(215,25,32,0.35)', transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Umów wizytę
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 160, paddingBottom: 100, paddingLeft: 24, paddingRight: 24 }}>
        {/* Blob tła */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: 480, height: 480, background: 'rgba(215,25,32,0.10)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 380, height: 380, background: 'rgba(11,44,95,0.10)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center', position: 'relative', zIndex: 1 }}>
          {/* Lewa kolumna — tekst */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 18px', borderRadius: 99, backgroundColor: 'white', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#d71920', display: 'inline-block' }} />
              <span style={{ fontSize: 13, color: '#64748b' }}>Fizjoterapia • Warszawa</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 800, lineHeight: 1.12, color: '#0b2c5f', margin: 0, fontFamily: 'Playfair Display, serif' }}>
              Fizjoterapia sportowa i rehabilitacja premium
            </h1>

            <p style={{ marginTop: 24, fontSize: 18, color: '#64748b', lineHeight: 1.7, maxWidth: 520 }}>
              Pomagam pacjentom wrócić do sprawności po urazach, przeciążeniach i operacjach. Indywidualne podejście, nowoczesne metody.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 36 }}>
              <a href={KONTAKT.booksy} target="_blank" rel="noopener noreferrer" style={{
                padding: '16px 36px', borderRadius: 99, backgroundColor: '#d71920',
                color: 'white', fontWeight: 700, fontSize: 16, textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(215,25,32,0.35)', transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Umów wizytę
              </a>
              <a href={`tel:+48${KONTAKT.telefon.replace(/\s/g,'')}`} style={{
                padding: '16px 36px', borderRadius: 99, backgroundColor: 'white',
                border: '1px solid #e2e8f0', color: '#0b2c5f', fontWeight: 700,
                fontSize: 16, textDecoration: 'none', transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                {KONTAKT.telefon}
              </a>
            </div>
          </div>

          {/* Prawa kolumna — karta z logo */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 460 }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: -20,
                background: 'rgba(11,44,95,0.12)', borderRadius: '50%', filter: 'blur(60px)',
                animation: 'pulse 3s ease-in-out infinite',
              }} />
              <div style={{
                position: 'relative', zIndex: 1,
                width: 380, height: 420,
                borderRadius: 36,
                background: 'linear-gradient(135deg, #0b2c5f 0%, #163d75 60%, #1a1a2e 100%)',
                boxShadow: '0 32px 80px rgba(11,44,95,0.4)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: 32, gap: 20,
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <LogoHero />
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textAlign: 'center', lineHeight: 1.6, margin: 0 }}>
                  Nowoczesna fizjoterapia i rehabilitacja premium w Warszawie
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 18px', borderRadius: 99, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#d71920', display: 'inline-block' }} />
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 500 }}>Active Clinic, Warszawa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── O MNIE ── */}
      <section id="about" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', backgroundColor: 'white', borderRadius: 40, padding: 'clamp(32px, 5vw, 64px)', boxShadow: '0 8px 48px rgba(11,44,95,0.08)', border: '1px solid #f1f5f9' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'center' }}>

            {/* Zdjęcie profilowe */}
            <div style={{ position: 'relative', maxWidth: 420, margin: '0 auto' }}>
              <div style={{ borderRadius: 32, overflow: 'hidden', boxShadow: '0 16px 64px rgba(11,44,95,0.18)', position: 'relative' }}>
                <img
                  src="/Asia(2).jpg"
                  alt="Joanna Olenderek — fizjoterapeutka"
                  style={{ width: '100%', height: 500, objectFit: 'cover', display: 'block' }}
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop'; }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,44,95,0.65) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28, color: 'white' }}>
                  <p style={{ margin: 0, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>FizJOterapia</p>
                  <h3 style={{ margin: '6px 0 0', fontSize: 26, fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>Joanna Olenderek</h3>
                </div>
              </div>
            </div>

            {/* Tekst */}
            <div>
              <p style={{ margin: 0, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d71920', fontWeight: 600 }}>O mnie</p>
              <h2 style={{ margin: '16px 0 0', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#0b2c5f', lineHeight: 1.2, fontFamily: 'Playfair Display, serif' }}>
                Indywidualne podejście i nowoczesna rehabilitacja
              </h2>
              <p style={{ marginTop: 24, fontSize: 16, color: '#64748b', lineHeight: 1.8 }}>
                Nazywam się Joanna Olenderek i specjalizuję się w fizjoterapii sportowej,
                terapii manualnej oraz rehabilitacji ortopedycznej. Każdego pacjenta traktuję
                indywidualnie — dokładna diagnostyka i plan terapii dopasowany do Twoich potrzeb.
              </p>

              {/* Specjalizacje */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
                {SPECJALIZACJE.map(item => (
                  <div key={item.title} style={{
                    backgroundColor: '#f4f9ff', borderRadius: 24, padding: '22px 20px',
                    border: '1px solid #e8f0fb', transition: 'all 0.3s', cursor: 'default',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(11,44,95,0.12)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ width: 50, height: 50, borderRadius: 16, backgroundColor: '#0b2c5f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 14 }}>
                      {item.icon}
                    </div>
                    <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#0b2c5f', lineHeight: 1.4 }}>{item.title}</h3>
                    <p style={{ margin: '8px 0 0', fontSize: 12, color: '#94a3b8', lineHeight: 1.6 }}>Indywidualna terapia oraz nowoczesne podejście do rehabilitacji.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" style={{ padding: '96px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            <p style={{ margin: 0, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d71920', fontWeight: 600 }}>Blog</p>
            <h2 style={{ margin: '16px 0 0', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0b2c5f', fontFamily: 'Playfair Display, serif' }}>Wiedza dla pacjentów</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28, marginTop: 56 }}>
            {BLOG.map(article => (
              <div key={article.title} style={{
                backgroundColor: 'white', borderRadius: 28, overflow: 'hidden',
                border: '1px solid #f1f5f9', boxShadow: '0 4px 24px rgba(11,44,95,0.06)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(11,44,95,0.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(11,44,95,0.06)'; }}
              >
                <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                  <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,44,95,0.7) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 16, padding: '6px 14px', borderRadius: 99, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 500 }}>
                    Wiedza dla pacjentów
                  </div>
                </div>
                <div style={{ padding: 28 }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#0b2c5f', lineHeight: 1.4, fontFamily: 'Playfair Display, serif' }}>{article.title}</h3>
                  <button style={{ marginTop: 20, background: 'none', border: 'none', color: '#d71920', fontWeight: 600, fontSize: 14, cursor: 'pointer', padding: 0, transition: 'transform 0.2s' }}
                    onMouseEnter={e => e.target.style.transform = 'translateX(4px)'}
                    onMouseLeave={e => e.target.style.transform = 'translateX(0)'}
                  >
                    Czytaj więcej →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KONTAKT ── */}
      <section id="contact" style={{ padding: '96px 24px', backgroundColor: '#0b2c5f', color: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'start' }}>
          <div>
            <p style={{ margin: 0, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fca5a5', fontWeight: 600 }}>Kontakt</p>
            <h2 style={{ margin: '16px 0 0', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.2, fontFamily: 'Playfair Display, serif' }}>
              Umów wizytę i zadbaj o swoje zdrowie
            </h2>
            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 24, fontSize: 16, color: '#cbd5e1' }}>
              <div>
                <p style={{ margin: '0 0 6px', fontWeight: 700, color: 'white' }}>Adres</p>
                {KONTAKT.adres.map(l => <p key={l} style={{ margin: 0, lineHeight: 1.8 }}>{l}</p>)}
              </div>
              <div>
                <p style={{ margin: '0 0 6px', fontWeight: 700, color: 'white' }}>Telefon</p>
                <a href={`tel:+48${KONTAKT.telefon.replace(/\s/g,'')}`} style={{ color: '#cbd5e1', textDecoration: 'none' }}>{KONTAKT.telefon}</a>
              </div>
              <div>
                <p style={{ margin: '0 0 6px', fontWeight: 700, color: 'white' }}>Email</p>
                <a href={`mailto:${KONTAKT.email}`} style={{ color: '#cbd5e1', textDecoration: 'none' }}>{KONTAKT.email}</a>
              </div>
            </div>
            <a href={KONTAKT.booksy} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', marginTop: 36, padding: '16px 36px', borderRadius: 99,
              backgroundColor: '#d71920', color: 'white', fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(215,25,32,0.4)', transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Umów wizytę online →
            </a>
          </div>

          {/* Godziny */}
          <div style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', borderRadius: 32, padding: 40, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ margin: '0 0 32px', fontSize: 26, fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>Godziny przyjęć</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {GODZINY.map(({ dzien, godziny }) => (
                <div key={dzien} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 18, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 16 }}>
                  <span style={{ color: '#cbd5e1' }}>{dzien}</span>
                  <span style={{ fontWeight: 600, color: 'white' }}>{godziny}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#060f1e', padding: '24px', textAlign: 'center', color: '#475569', fontSize: 13 }}>
        © {new Date().getFullYear()} FizJOterapia Joanna Olenderek · Warszawa
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </div>
  );
}
