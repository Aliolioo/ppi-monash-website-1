import { useState, useEffect, useRef, useMemo, useCallback } from "react";

// ============================================================================
// 📝 SITE CONFIG — Mirror of src/config/siteConfig.js
// ============================================================================
const SITE_INFO = {
  name: "PPI Monash Malaysia",
  tagline: "Eunoia",
  foundedYear: 2017,
  currentYear: 2026,
  description: "Perhimpunan Pelajar Indonesia (PPI) Monash Malaysia — building a close-knit community where long-lasting friendships are forged through fun and valuable experiences.",
  vision: "To increase the welfare and develop the potential of Indonesian community in Monash University Malaysia",
};

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ppimonash_my/",
  tiktok: "https://www.tiktok.com/@ppi.eunoia/",
  youtube: "https://www.youtube.com/@ppimonashmalaysia9894",
  whatsapp: "https://chat.whatsapp.com/B8gnqaNtpdiD5M69XW02Mj",
  email: "ppimonashmalaysia@gmail.com",
  website: "https://ppimonashmalaysia.com/",
};

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Team", id: "team" },
  { label: "Events", id: "events" },
  { label: "Articles", id: "articles" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

const STATS = [
  { number: 9, suffix: "+", label: "Years of Community" },
  { number: 6, suffix: "", label: "Departments" },
  { number: 50, suffix: "+", label: "Events Organized" },
  { number: 300, suffix: "+", label: "Members Connected" },
];

const DEPARTMENTS = [
  { name: "Executive", emoji: "👔", desc: "Leadership & coordination" },
  { name: "Documentation", emoji: "📸", desc: "Photography & videography" },
  { name: "Media & Creative", emoji: "🎨", desc: "Design & social media" },
  { name: "Welfare", emoji: "💛", desc: "Student wellbeing & support" },
  { name: "Events", emoji: "🎉", desc: "Planning & execution" },
  { name: "External Relations", emoji: "🤝", desc: "Partnerships & outreach" },
];

const COMMITTEE = [
  {
    dept: "Executive",
    members: [
      { name: "Radhitya Hendra Putra", role: "President", photo: null },
      { name: "Nevan Elkana Hulu", role: "Vice President", photo: null },
      { name: "TBD", role: "Secretary", photo: null },
      { name: "TBD", role: "Treasurer", photo: null },
    ],
  },
  { dept: "Documentation", members: [{ name: "TBD", role: "Head of Documentation", photo: null }, { name: "TBD", role: "Member", photo: null }] },
  { dept: "Media & Creative", members: [{ name: "TBD", role: "Head of Media & Creative", photo: null }, { name: "TBD", role: "Member", photo: null }] },
  { dept: "Welfare", members: [{ name: "TBD", role: "Head of Welfare", photo: null }, { name: "TBD", role: "Member", photo: null }] },
  { dept: "Events", members: [{ name: "TBD", role: "Head of Events", photo: null }, { name: "TBD", role: "Member", photo: null }] },
  { dept: "External Relations", members: [{ name: "TBD", role: "Head of External Relations", photo: null }, { name: "TBD", role: "Member", photo: null }] },
];

const EVENTS = [
  { title: "Rantau Heist", date: "14 Mar 2026", category: "Welcome", desc: "A thrilling welcome event where new intakes embark on a dangerous mission to retrieve fortune through teamwork, resilience, and a willingness to betray even their closest teammates.", photos: "https://drive.google.com/drive/folders/1qN7mzfjQQK42_1FI1HDEgt2S9R0cQd_L" },
  { title: "Survival Night: Game Over", date: "1 Nov 2025", category: "Welfare", desc: "The ultimate test of courage, strategy, and endurance. In a secret location cloaked in mystery, alliances form, tensions rise, and only the sharpest outlast the game.", photos: "https://drive.google.com/drive/folders/1ZN06XnGKbzB72ouGJ42sQMj7jKx6fX9e" },
  { title: "Independence Day 2025", date: "Aug 2025", category: "Cultural", desc: "Celebrating Indonesia's independence with cultural performances, traditional games, and a community gathering that brings everyone together." },
  { title: "One World: Indonesia Hand in Hand", date: "May 2026", category: "Sports", desc: "MUISS OneWorld brought students together representing their country in four different sports — a wonderful celebration of unity through competition." },
];

const ARTICLES = [
  { title: "One World: Indonesia Hand in Hand", excerpt: "MUISS OneWorld has once again delivered a wonderful event with students representing their country in four different sports!", tag: "Sports", url: "https://ppimonashmalaysia.com/articles/one-world-2026/" },
  { title: "Study Tips from PPI", excerpt: "PPI is here to help by sharing five tips on how to balance your academics and social life as an international student.", tag: "Academic", url: "https://ppimonashmalaysia.com/articles/study-tips-2026/" },
  { title: "Ramadhan Away From Home", excerpt: "Navigating the holy month as an Indonesian student abroad — finding community, iftar gatherings, and keeping traditions alive.", tag: "Culture", url: "https://ppimonashmalaysia.com/articles/" },
];

const FAQS = [
  { q: "What documents do I need to open a bank account?", a: "You'll need your original passport, a bank account opening form, a copy of your offer letter, a copy of your visa approval letter, and a Student Verification Letter (request from Monash student portal)." },
  { q: "What are recommended accommodations around Monash?", a: "Popular options include Nadayu28 Residences, Sunway Geo Residence, and Sunway Waterfront Residence. You can also check PropertyGuru, iProperty, or UrbanRoomy for more listings." },
  { q: "How much does it cost to live in Malaysia?", a: "Approximate monthly costs: Accommodation ~RM 1,100, Living expenses ~RM 1,000, Transportation ~RM 150. Total around RM 2,350/month, though this varies per person." },
  { q: "Can I do an internship while studying at Monash?", a: "Yes! You can take an internship within the duration of your course." },
  { q: "What should I do if I want to work in Malaysia after graduating?", a: "Find an employer willing to sponsor your work visa permit so you can work legally in the country." },
  { q: "Does student insurance cover hospitalization?", a: "Yes, international student insurance should cover medical expenses. Check your policy details through the Micare Portal for specifics." },
];

const TAG_ICONS = { Sports: "⚽", Academic: "📚", Culture: "🌙", Lifestyle: "🌴" };

// ============================================================================
// 🎨 STYLES
// ============================================================================
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

:root {
  --red-deep: #B22234;
  --red-bright: #DC3545;
  --red-soft: #E8566A;
  --red-muted: rgba(178,34,52,0.08);
  --cream: #FFF8F0;
  --cream-dark: #F5EDE0;
  --gold: #D4A843;
  --gold-soft: #F0D78C;
  --charcoal: #1A1A1A;
  --slate: #4A4A4A;
  --white: #FFFFFF;
  --font-display: 'Bricolage Grotesque', Georgia, serif;
  --font-body: 'DM Sans', -apple-system, sans-serif;
  --radius: 18px;
  --radius-sm: 12px;
  --radius-pill: 999px;
  --shadow-card: 0 2px 24px rgba(0,0,0,0.05);
  --shadow-hover: 0 12px 40px rgba(178,34,52,0.12);
  --ease: cubic-bezier(0.4,0,0.2,1);
  --transition: all 0.35s var(--ease);
}

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
body{font-family:var(--font-body);background:var(--cream);color:var(--charcoal);overflow-x:hidden;line-height:1.6}

/* ─── Grain overlay for texture ─── */
.grain-overlay {
  position:fixed;inset:0;z-index:9999;pointer-events:none;opacity:0.025;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ═══ NAVBAR ═══ */
.navbar {
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 48px;height:72px;
  background:rgba(255,248,240,0.7);
  backdrop-filter:blur(24px) saturate(1.5);
  -webkit-backdrop-filter:blur(24px) saturate(1.5);
  border-bottom:1px solid rgba(178,34,52,0.06);
  transition:var(--transition);
}
.navbar.scrolled{background:rgba(255,248,240,0.92);box-shadow:0 1px 32px rgba(0,0,0,0.06)}

.nav-brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:var(--red-deep)}
.logo-circle{
  width:42px;height:42px;border-radius:50%;
  background:var(--red-deep);color:var(--white);
  display:flex;align-items:center;justify-content:center;
  font-size:0.8rem;font-weight:800;font-family:var(--font-body);
  transition:var(--transition);
}
.nav-brand:hover .logo-circle{transform:rotate(-8deg) scale(1.05)}
.brand-text{font-family:var(--font-display);font-weight:700;font-size:1.1rem}

.nav-links{display:flex;gap:6px;list-style:none}
.nav-links a{
  text-decoration:none;color:var(--slate);font-size:0.88rem;font-weight:500;
  padding:8px 18px;border-radius:var(--radius-pill);transition:var(--transition);position:relative;
}
.nav-links a::after{
  content:'';position:absolute;bottom:4px;left:50%;width:0;height:2px;
  background:var(--red-deep);border-radius:1px;transition:all 0.3s var(--ease);transform:translateX(-50%);
}
.nav-links a:hover::after,.nav-links a.active::after{width:60%}
.nav-links a:hover{color:var(--red-deep)}
.nav-links a.active{background:var(--red-deep);color:var(--white)}
.nav-links a.active::after{width:0}

.hamburger{
  display:none;background:none;border:none;cursor:pointer;
  width:40px;height:40px;position:relative;border-radius:10px;transition:var(--transition);
}
.hamburger:hover{background:var(--red-muted)}
.hamburger span{
  display:block;width:20px;height:2px;background:var(--charcoal);
  border-radius:2px;position:absolute;left:10px;transition:var(--transition);
}
.hamburger span:nth-child(1){top:12px}
.hamburger span:nth-child(2){top:19px}
.hamburger span:nth-child(3){top:26px}
.hamburger.open span:nth-child(1){top:19px;transform:rotate(45deg)}
.hamburger.open span:nth-child(2){opacity:0}
.hamburger.open span:nth-child(3){top:19px;transform:rotate(-45deg)}

.mobile-menu{
  display:none;position:fixed;top:72px;left:0;right:0;bottom:0;
  background:rgba(255,248,240,0.97);backdrop-filter:blur(32px);
  z-index:99;padding:32px 24px;flex-direction:column;align-items:center;gap:6px;
}
.mobile-menu.show{display:flex}
.mobile-menu a{
  text-decoration:none;font-size:1.4rem;font-weight:700;font-family:var(--font-display);
  color:var(--charcoal);padding:16px 32px;border-radius:var(--radius);
  transition:var(--transition);width:100%;text-align:center;
  opacity:0;animation:slideIn 0.4s var(--ease) forwards;
}
@keyframes slideIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.mobile-menu a:hover{background:var(--red-deep);color:var(--white)}

/* ═══ HERO ═══ */
.hero{
  min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;
  padding:120px 24px 80px;position:relative;overflow:hidden;
  background:
    radial-gradient(ellipse at 25% 45%, rgba(178,34,52,0.05) 0%, transparent 55%),
    radial-gradient(ellipse at 75% 25%, rgba(212,168,67,0.05) 0%, transparent 50%),
    radial-gradient(circle at 50% 90%, rgba(178,34,52,0.03) 0%, transparent 40%),
    var(--cream);
}
.hero-canvas{position:absolute;inset:0;z-index:1;pointer-events:none}
.hero-bg-pattern{
  position:absolute;inset:0;opacity:0.02;z-index:0;
  background-image:
    repeating-linear-gradient(0deg,var(--red-deep) 0px,transparent 1px,transparent 80px),
    repeating-linear-gradient(90deg,var(--red-deep) 0px,transparent 1px,transparent 80px);
}
.hero-float{position:absolute;border-radius:50%;pointer-events:none;opacity:0.06}
.hero-float-1{width:400px;height:400px;background:var(--red-deep);top:-100px;right:-100px;animation:floatA 18s ease-in-out infinite}
.hero-float-2{width:250px;height:250px;background:var(--gold);bottom:10%;left:-60px;animation:floatB 22s ease-in-out infinite}
.hero-float-3{width:180px;height:180px;background:var(--red-bright);top:35%;right:15%;animation:floatC 15s ease-in-out infinite}
@keyframes floatA{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(-30px,40px) scale(1.05)}66%{transform:translate(20px,-20px) scale(0.95)}}
@keyframes floatB{0%,100%{transform:translate(0,0)}50%{transform:translate(40px,-30px)}}
@keyframes floatC{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-25px,25px) scale(1.08)}}

.hero-content{position:relative;z-index:2;max-width:820px}
.hero-badge{
  display:inline-flex;align-items:center;gap:10px;
  background:var(--white);border:1px solid rgba(178,34,52,0.1);
  padding:10px 22px;border-radius:var(--radius-pill);
  font-size:0.88rem;font-weight:600;color:var(--red-deep);margin-bottom:36px;
  box-shadow:0 4px 20px rgba(178,34,52,0.06);
}
.dot{width:8px;height:8px;border-radius:50%;background:var(--red-bright);animation:pulseDot 2s ease-in-out infinite}
@keyframes pulseDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(1.5)}}

.hero h1{
  font-family:var(--font-display);font-size:clamp(2.6rem,5.5vw,4.2rem);
  font-weight:800;line-height:1.08;color:var(--charcoal);margin-bottom:28px;letter-spacing:-0.02em;
}
.highlight{color:var(--red-deep);position:relative;display:inline-block}
.highlight::after{
  content:'';position:absolute;bottom:2px;left:-4px;right:-4px;
  height:8px;background:var(--gold-soft);border-radius:4px;z-index:-1;opacity:0.7;transform:skewX(-2deg);
}
.hero-desc{font-size:1.15rem;color:var(--slate);line-height:1.75;margin-bottom:44px;max-width:600px;margin-inline:auto}
.hero-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}

.hero-scroll-hint{
  margin-top:56px;display:flex;flex-direction:column;align-items:center;gap:12px;
  color:var(--slate);font-size:0.78rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;opacity:0.5;
}
.scroll-line{width:1px;height:40px;background:linear-gradient(to bottom,var(--red-deep),transparent);animation:scrollPulse 2s ease-in-out infinite}
@keyframes scrollPulse{0%,100%{opacity:0.3;height:40px}50%{opacity:0.8;height:56px}}

/* ═══ BUTTONS ═══ */
.btn-primary{
  background:var(--red-deep);color:var(--white);padding:16px 36px;border-radius:var(--radius-pill);
  font-size:1rem;font-weight:600;font-family:var(--font-body);text-decoration:none;border:none;cursor:pointer;
  transition:var(--transition);display:inline-flex;align-items:center;gap:8px;position:relative;overflow:hidden;
}
.btn-primary::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.15),transparent);opacity:0;transition:opacity 0.3s ease}
.btn-primary:hover::before{opacity:1}
.btn-primary:hover{transform:translateY(-3px);box-shadow:0 8px 32px rgba(178,34,52,0.25)}
.btn-primary:active{transform:translateY(-1px)}
.btn-arrow{transition:transform 0.3s ease}
.btn-primary:hover .btn-arrow{transform:translateX(4px)}
.btn-secondary{
  background:var(--white);color:var(--charcoal);padding:16px 36px;border-radius:var(--radius-pill);
  font-size:1rem;font-weight:600;font-family:var(--font-body);text-decoration:none;border:1.5px solid rgba(0,0,0,0.1);cursor:pointer;transition:var(--transition);
}
.btn-secondary:hover{border-color:var(--red-deep);color:var(--red-deep);transform:translateY(-3px);box-shadow:var(--shadow-card)}
.btn-large{padding:20px 44px;font-size:1.05rem}

/* ═══ SHARED SECTIONS ═══ */
.section{padding:100px 24px;max-width:1200px;margin:0 auto}
.section-label{
  display:inline-flex;align-items:center;gap:10px;
  font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;color:var(--red-deep);margin-bottom:16px;
}
.section-label::before{content:'';width:28px;height:2.5px;background:var(--red-deep);border-radius:2px}
.section-title{font-family:var(--font-display);font-size:clamp(2rem,4vw,3rem);font-weight:800;color:var(--charcoal);margin-bottom:16px;line-height:1.15;letter-spacing:-0.015em}
.section-subtitle{font-size:1.05rem;color:var(--slate);line-height:1.75;max-width:580px;margin-bottom:48px}

/* ═══ ABOUT ═══ */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}
.about-body{font-size:0.95rem;color:var(--slate);line-height:1.75}
.about-stats{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:40px}
.stat-card{background:var(--white);padding:24px;border-radius:var(--radius);box-shadow:var(--shadow-card);border:1px solid rgba(0,0,0,0.03);transition:var(--transition)}
.stat-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-hover)}
.stat-number{font-family:var(--font-display);font-size:2.4rem;font-weight:800;color:var(--red-deep);line-height:1}
.stat-label{font-size:0.82rem;color:var(--slate);margin-top:6px;font-weight:500}

.about-image-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.about-img-card{
  aspect-ratio:1;border-radius:var(--radius);display:flex;flex-direction:column;
  align-items:center;justify-content:center;gap:8px;overflow:hidden;
  border:1px solid rgba(0,0,0,0.03);transition:var(--transition);cursor:default;
}
.about-img-card:hover{transform:scale(1.04)}
.about-img-card.offset{transform:translateY(28px)}
.about-img-card.offset:hover{transform:translateY(28px) scale(1.04)}
.card-icon{font-size:2.2rem}
.card-word{font-size:1rem;font-weight:700}

.vision-quote{
  margin-top:24px;padding:24px;background:var(--white);border-left:4px solid var(--gold);
  border-radius:0 var(--radius) var(--radius) 0;font-size:0.92rem;color:var(--slate);
  line-height:1.65;font-style:italic;box-shadow:var(--shadow-card);position:relative;
}
.quote-mark{font-family:var(--font-display);font-size:3rem;font-weight:800;color:var(--gold);line-height:0.5;position:absolute;top:16px;left:16px;opacity:0.3}

/* ═══ DEPARTMENTS ═══ */
.dept-section{background:var(--white);border-radius:32px;padding:80px 48px;margin:0 24px;box-shadow:0 0 0 1px rgba(0,0,0,0.03)}
.dept-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.dept-card{
  padding:32px;border-radius:var(--radius);background:var(--cream);border:1px solid rgba(0,0,0,0.03);
  transition:var(--transition);cursor:default;position:relative;overflow:hidden;
}
.dept-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  background:linear-gradient(90deg,var(--red-deep),var(--gold));
  transform:scaleX(0);transform-origin:left;transition:transform 0.5s var(--ease);
}
.dept-card:hover::before{transform:scaleX(1)}
.dept-card:hover{box-shadow:var(--shadow-hover);transform:translateY(-5px)}
.dept-emoji{font-size:2.2rem;margin-bottom:16px;transition:transform 0.4s var(--ease)}
.dept-card:hover .dept-emoji{transform:scale(1.2) rotate(-8deg)}
.dept-card h3{font-weight:700;font-size:1.05rem;margin-bottom:6px}
.dept-card p{font-size:0.88rem;color:var(--slate);line-height:1.5}

/* ═══ COMMITTEE ═══ */
.committee-section{padding:80px 24px;max-width:1200px;margin:0 auto}
.committee-dept{margin-bottom:48px}
.committee-dept:last-child{margin-bottom:0}
.committee-dept-title{
  font-family:var(--font-display);font-size:1.15rem;font-weight:700;color:var(--charcoal);
  margin-bottom:20px;padding-bottom:14px;border-bottom:2px solid var(--red-muted);
  display:flex;align-items:center;gap:10px;
}
.committee-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:20px}
.member-card{
  text-align:center;padding:28px 16px;background:var(--white);border-radius:var(--radius);
  border:1px solid rgba(0,0,0,0.03);box-shadow:var(--shadow-card);transition:var(--transition);
}
.member-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-hover)}
.member-avatar{
  width:80px;height:80px;border-radius:50%;margin:0 auto 14px;overflow:hidden;
  background:linear-gradient(135deg,var(--cream-dark),var(--cream));
  border:3px solid var(--red-muted);display:flex;align-items:center;justify-content:center;
  font-size:1.5rem;font-weight:800;color:var(--red-deep);font-family:var(--font-display);transition:var(--transition);
}
.member-card:hover .member-avatar{border-color:var(--red-deep);transform:scale(1.06)}
.member-avatar img{width:100%;height:100%;object-fit:cover}
.member-name{font-size:0.88rem;font-weight:700;color:var(--charcoal);margin-bottom:4px}
.member-role{font-size:0.72rem;font-weight:600;color:var(--red-deep);text-transform:uppercase;letter-spacing:0.06em}

/* ═══ EVENTS ═══ */
.event-filters{display:flex;gap:8px;margin-bottom:40px;flex-wrap:wrap}
.filter-btn{
  padding:10px 24px;border-radius:var(--radius-pill);font-size:0.88rem;font-weight:600;
  font-family:var(--font-body);border:1.5px solid rgba(0,0,0,0.08);
  background:var(--white);color:var(--slate);cursor:pointer;transition:var(--transition);
}
.filter-btn:hover{border-color:var(--red-deep);color:var(--red-deep)}
.filter-btn.active{background:var(--red-deep);color:var(--white);border-color:var(--red-deep)}
.events-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
.event-card{
  background:var(--white);border-radius:var(--radius);padding:32px;border:1px solid rgba(0,0,0,0.03);
  box-shadow:var(--shadow-card);transition:var(--transition);display:flex;flex-direction:column;
}
.event-card:hover{box-shadow:var(--shadow-hover);transform:translateY(-4px)}
.event-meta{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.event-date{font-size:0.8rem;font-weight:600;color:var(--red-deep);background:var(--red-muted);padding:5px 14px;border-radius:var(--radius-pill)}
.event-cat{font-size:0.72rem;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:0.1em}
.event-card h3{font-family:var(--font-display);font-size:1.25rem;font-weight:700;margin-bottom:12px}
.event-card p{font-size:0.92rem;color:var(--slate);line-height:1.65;flex:1}
.event-link{
  margin-top:20px;display:inline-flex;align-items:center;gap:6px;
  color:var(--red-deep);font-weight:600;font-size:0.88rem;text-decoration:none;transition:var(--transition);
}
.event-link:hover{gap:10px}
.link-arrow{transition:transform 0.3s ease}
.event-link:hover .link-arrow{transform:translateX(4px)}
.empty-state{text-align:center;padding:48px;font-size:1.05rem;color:var(--slate);background:var(--white);border-radius:var(--radius);border:2px dashed rgba(0,0,0,0.08)}

/* ═══ ARTICLES ═══ */
.articles-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.article-card{
  background:var(--white);border-radius:var(--radius);overflow:hidden;border:1px solid rgba(0,0,0,0.03);
  box-shadow:var(--shadow-card);transition:var(--transition);text-decoration:none;color:inherit;display:block;
}
.article-card:hover{box-shadow:var(--shadow-hover);transform:translateY(-5px)}
.article-thumb{height:180px;background:var(--cream-dark);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.thumb-pattern{
  position:absolute;inset:0;opacity:0.04;
  background:repeating-linear-gradient(45deg,var(--red-deep) 0px,transparent 1px,transparent 20px);
}
.thumb-icon{font-size:3.2rem;z-index:1;transition:transform 0.5s var(--ease)}
.article-card:hover .thumb-icon{transform:scale(1.15) rotate(-5deg)}
.article-body{padding:24px}
.article-tag{font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--red-deep);margin-bottom:10px;display:block}
.article-body h3{font-family:var(--font-display);font-size:1.1rem;font-weight:700;margin-bottom:10px;line-height:1.35}
.article-body p{font-size:0.88rem;color:var(--slate);line-height:1.6}
.read-more{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-size:0.85rem;font-weight:600;color:var(--red-deep);transition:var(--transition)}
.article-card:hover .read-more{gap:10px}

/* ═══ FAQ ═══ */
.faq-section{
  background:var(--charcoal);color:var(--white);border-radius:32px;padding:80px 48px;margin:0 24px;
  position:relative;overflow:hidden;
}
.faq-section::before{
  content:'';position:absolute;top:-50%;right:-20%;width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(178,34,52,0.08),transparent 70%);pointer-events:none;
}
.faq-section .section-label{color:var(--gold)}
.faq-section .section-label::before{background:var(--gold)}
.faq-section .section-title{color:var(--white)}
.faq-section .section-subtitle{color:rgba(255,255,255,0.55)}
.faq-list{max-width:720px;position:relative;z-index:1}
.faq-item{border-bottom:1px solid rgba(255,255,255,0.08)}
.faq-question{
  display:flex;align-items:center;justify-content:space-between;padding:24px 0;cursor:pointer;width:100%;
  background:none;border:none;color:var(--white);font-size:1.02rem;font-weight:600;text-align:left;
  font-family:var(--font-body);transition:var(--transition);
}
.faq-question:hover{color:var(--gold-soft)}
.faq-q-text{flex:1}
.faq-chevron{font-size:1.3rem;transition:transform 0.35s var(--ease);flex-shrink:0;margin-left:20px;opacity:0.5}
.faq-chevron.open{transform:rotate(180deg);opacity:1;color:var(--gold)}
.faq-answer{overflow:hidden;transition:max-height 0.45s var(--ease),opacity 0.35s ease;max-height:0;opacity:0}
.faq-answer.open{max-height:300px;opacity:1}
.faq-answer-inner{padding:0 0 24px;font-size:0.95rem;line-height:1.75;color:rgba(255,255,255,0.65)}

/* ═══ CTA / CONTACT ═══ */
.cta-section{text-align:center;padding:120px 24px 100px;position:relative}
.cta-bg{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse at 50% 100%,rgba(178,34,52,0.06) 0%,transparent 50%),var(--cream)}
.cta-content{position:relative;z-index:1}
.cta-title{font-family:var(--font-display);font-size:clamp(2.2rem,4.5vw,3.2rem);font-weight:800;margin-bottom:20px;letter-spacing:-0.015em;line-height:1.15}
.cta-desc{font-size:1.1rem;color:var(--slate);margin-bottom:40px;max-width:480px;margin-inline:auto;line-height:1.7}
.social-links{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:36px}
.social-link{
  display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:var(--radius-pill);
  background:var(--white);border:1px solid rgba(0,0,0,0.06);text-decoration:none;color:var(--charcoal);
  font-size:0.88rem;font-weight:600;transition:var(--transition);box-shadow:0 1px 8px rgba(0,0,0,0.03);
}
.social-link:hover{border-color:var(--red-deep);color:var(--red-deep);transform:translateY(-3px);box-shadow:var(--shadow-hover)}

/* ═══ FOOTER ═══ */
.footer{text-align:center;padding:40px 24px;border-top:1px solid rgba(0,0,0,0.05);font-size:0.82rem;color:var(--slate)}
.footer a{color:var(--red-deep);text-decoration:none;font-weight:600}
.footer a:hover{text-decoration:underline}

/* ═══ RESPONSIVE ═══ */
@media(max-width:900px){
  .navbar{padding:0 20px}
  .nav-links{display:none}
  .hamburger{display:block}
  .about-grid{grid-template-columns:1fr;gap:48px}
  .dept-grid{grid-template-columns:1fr 1fr}
  .events-grid{grid-template-columns:1fr}
  .articles-grid{grid-template-columns:1fr}
  .dept-section,.faq-section{margin:0 12px;padding:48px 24px;border-radius:24px}
}
@media(max-width:600px){
  .dept-grid{grid-template-columns:1fr}
  .about-stats{grid-template-columns:1fr}
  .about-image-grid{grid-template-columns:1fr 1fr;gap:12px}
  .hero-buttons{flex-direction:column;align-items:center}
  .committee-grid{grid-template-columns:repeat(2,1fr);gap:14px}
  .section{padding:64px 16px}
  .committee-section{padding:64px 16px}
}
`;

// ============================================================================
// 🪝 HOOKS
// ============================================================================
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] || "");
  useEffect(() => {
    const onScroll = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 160) { setActive(ids[i]); return; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}

// Animated counter hook
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView(0.3);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target, duration]);

  return [ref, count];
}

// ============================================================================
// 🧱 COMPONENTS
// ============================================================================
function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

// ─── Hero Particle Canvas ───
function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, particles, animId;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      particles = Array.from({ length: 35 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.5 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.15 + 0.05,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(178, 34, 52, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(178, 34, 52, ${0.04 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

// ─── Navbar ───
function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="nav-brand" onClick={(e) => scrollTo(e, "home")}>
          <span className="logo-circle">PPI</span>
          <span className="brand-text">{SITE_INFO.name}</span>
        </a>
        <ul className="nav-links">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <a href={`#${id}`} className={activeSection === id ? "active" : ""} onClick={(e) => scrollTo(e, id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {NAV_ITEMS.map(({ label, id }, i) => (
          <a key={id} href={`#${id}`} onClick={(e) => scrollTo(e, id)} style={{ animationDelay: `${i * 0.05}s` }}>{label}</a>
        ))}
      </div>
    </>
  );
}

// ─── Hero ───
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-pattern" />
      <HeroCanvas />
      <div className="hero-float hero-float-1" />
      <div className="hero-float hero-float-2" />
      <div className="hero-float hero-float-3" />
      <div className="hero-content">
        <FadeIn>
          <div className="hero-badge"><span className="dot" />{SITE_INFO.tagline} · Est. {SITE_INFO.foundedYear}</div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1>Your Indonesian <span className="highlight">Community</span><br />at Monash Malaysia</h1>
        </FadeIn>
        <FadeIn delay={0.2}><p className="hero-desc">{SITE_INFO.description}</p></FadeIn>
        <FadeIn delay={0.3}>
          <div className="hero-buttons">
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span>💬</span>Join Our Community<span className="btn-arrow">→</span>
            </a>
            <a href="#about" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}>
              Learn More
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.45}>
          <div className="hero-scroll-hint"><div className="scroll-line" /><span>Scroll to explore</span></div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Animated Stat Card ───
function StatCard({ stat, delay }) {
  const [ref, count] = useCountUp(stat.number, 1800);
  return (
    <FadeIn delay={delay}>
      <div className="stat-card" ref={ref}>
        <div className="stat-number">{count}{stat.suffix}</div>
        <div className="stat-label">{stat.label}</div>
      </div>
    </FadeIn>
  );
}

// ─── About ───
function About() {
  const cards = [
    { bg: "linear-gradient(135deg, #B22234, #DC3545)", color: "#fff", icon: "🇮🇩", word: "Unity" },
    { bg: "linear-gradient(135deg, #D4A843, #F0D78C)", color: "#1A1A1A", icon: "🎓", word: "Growth" },
    { bg: "linear-gradient(135deg, #F5EDE0, #FFF8F0)", color: "#1A1A1A", icon: "🤝", word: "Friendship" },
    { bg: "linear-gradient(135deg, #1A1A1A, #4A4A4A)", color: "#fff", icon: "✨", word: "Eunoia" },
  ];
  return (
    <section className="section" id="about">
      <div className="about-grid">
        <div>
          <FadeIn>
            <div className="section-label">About Us</div>
            <h2 className="section-title">A Home Away From Home Since {SITE_INFO.foundedYear}</h2>
            <p className="section-subtitle" style={{ marginBottom: 20 }}>
              Established in August {SITE_INFO.foundedYear}, PPI Monash Malaysia — {SITE_INFO.tagline} is a non-profit student association and a branch of Perhimpunan Pelajar Indonesia se-Malaysia (PPIM).
            </p>
            <p className="about-body">
              We collaborate closely with the Embassy of the Republic of Indonesia in Kuala Lumpur, as well as various ministries and state institutions. Our mission is to promote inclusivity, provide platforms for fun-filled experiences, and support social growth for Indonesian students at Monash.
            </p>
          </FadeIn>
          <div className="about-stats">
            {STATS.map((s, i) => <StatCard key={i} stat={s} delay={0.15 + i * 0.06} />)}
          </div>
        </div>
        <FadeIn delay={0.2}>
          <div className="about-visual">
            <div className="about-image-grid">
              {cards.map((c, i) => (
                <div className={`about-img-card ${i === 1 ? "offset" : ""}`} key={i} style={{ background: c.bg, color: c.color }}>
                  <span className="card-icon">{c.icon}</span>
                  <span className="card-word">{c.word}</span>
                </div>
              ))}
            </div>
            <div className="vision-quote">
              <span className="quote-mark">"</span>
              {SITE_INFO.vision}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Team: Departments + Committee ───
function getInitials(name) {
  if (!name || name === "TBD") return "?";
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

function Team() {
  return (
    <>
      <div className="dept-section" id="team">
        <FadeIn>
          <div className="section-label">Our Team</div>
          <h2 className="section-title">Departments</h2>
          <p className="section-subtitle">
            Led by President {COMMITTEE[0]?.members[0]?.name || "TBD"} and Vice President{" "}
            {COMMITTEE[0]?.members[1]?.name || "TBD"} for {SITE_INFO.currentYear}, our six departments work together to serve the community.
          </p>
        </FadeIn>
        <div className="dept-grid">
          {DEPARTMENTS.map((d, i) => (
            <FadeIn key={d.name} delay={i * 0.06}>
              <div className="dept-card">
                <div className="dept-emoji">{d.emoji}</div>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <section className="committee-section" id="committee">
        <FadeIn>
          <div className="section-label">Committee {SITE_INFO.currentYear}</div>
          <h2 className="section-title">Meet the People Behind PPI</h2>
          <p className="section-subtitle">Our dedicated committee members who make everything happen.</p>
        </FadeIn>
        {COMMITTEE.map((dept, di) => {
          const info = DEPARTMENTS.find(d => d.name === dept.dept);
          return (
            <FadeIn key={dept.dept} delay={di * 0.05}>
              <div className="committee-dept">
                <div className="committee-dept-title">{info?.emoji} {dept.dept}</div>
                <div className="committee-grid">
                  {dept.members.map((m, mi) => (
                    <FadeIn key={mi} delay={mi * 0.03}>
                      <div className="member-card">
                        <div className="member-avatar">{getInitials(m.name)}</div>
                        <div className="member-name">{m.name}</div>
                        <div className="member-role">{m.role}</div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </section>
    </>
  );
}

// ─── Events ───
function Events() {
  const [filter, setFilter] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(EVENTS.map(e => e.category))], []);
  const filtered = filter === "All" ? EVENTS : EVENTS.filter(e => e.category === filter);

  return (
    <section className="section" id="events">
      <FadeIn>
        <div className="section-label">Events</div>
        <h2 className="section-title">What We've Been Up To</h2>
        <p className="section-subtitle">From thrilling welcome events to cultural celebrations — there's always something happening.</p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="event-filters">
          {categories.map(cat => (
            <button key={cat} className={`filter-btn ${filter === cat ? "active" : ""}`} onClick={() => setFilter(cat)}>{cat}</button>
          ))}
        </div>
      </FadeIn>
      <div className="events-grid">
        {filtered.map((ev, i) => (
          <FadeIn key={ev.title + ev.date} delay={i * 0.07}>
            <div className="event-card">
              <div className="event-meta">
                <span className="event-date">📅 {ev.date}</span>
                <span className="event-cat">{ev.category}</span>
              </div>
              <h3>{ev.title}</h3>
              <p>{ev.desc}</p>
              {ev.photos && (
                <a href={ev.photos} target="_blank" rel="noopener noreferrer" className="event-link">
                  View Photos <span className="link-arrow">→</span>
                </a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
      {filtered.length === 0 && <div className="empty-state">No events in this category yet — stay tuned! 🎉</div>}
    </section>
  );
}

// ─── Articles ───
function Articles() {
  return (
    <section className="section" id="articles">
      <FadeIn>
        <div className="section-label">Articles</div>
        <h2 className="section-title">Stories & Insights</h2>
        <p className="section-subtitle">Read about life as an Indonesian student at Monash Malaysia.</p>
      </FadeIn>
      <div className="articles-grid">
        {ARTICLES.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.08}>
            <a href={a.url || "#"} target="_blank" rel="noopener noreferrer" className="article-card">
              <div className="article-thumb">
                <div className="thumb-pattern" />
                <span className="thumb-icon">{TAG_ICONS[a.tag] || "📝"}</span>
              </div>
              <div className="article-body">
                <span className="article-tag">{a.tag}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="read-more">Read article <span className="link-arrow">→</span></span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ───
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="faq-section" id="faq">
      <FadeIn>
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything you need to know about studying at Monash Malaysia as an Indonesian student.</p>
      </FadeIn>
      <div className="faq-list">
        {FAQS.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.04}>
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)} aria-expanded={openIdx === i}>
                <span className="faq-q-text">{faq.q}</span>
                <span className={`faq-chevron ${openIdx === i ? "open" : ""}`}>▾</span>
              </button>
              <div className={`faq-answer ${openIdx === i ? "open" : ""}`}><div className="faq-answer-inner">{faq.a}</div></div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

// ─── Contact + Footer ───
const SOCIALS = [
  { name: "Instagram", url: SOCIAL_LINKS.instagram, icon: "📷" },
  { name: "TikTok", url: SOCIAL_LINKS.tiktok, icon: "🎵" },
  { name: "YouTube", url: SOCIAL_LINKS.youtube, icon: "▶️" },
  { name: "WhatsApp", url: SOCIAL_LINKS.whatsapp, icon: "💬" },
];

function Contact() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg" />
      <div className="cta-content">
        <FadeIn>
          <div className="section-label" style={{ justifyContent: "center" }}>Join Us</div>
          <h2 className="cta-title">Ready to Be Part of<br />the Community?</h2>
          <p className="cta-desc">Whether you're a new student, current member, or just curious — we'd love to connect with you.</p>
          <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
            <span>💬</span>Join WhatsApp Group<span className="btn-arrow">→</span>
          </a>
          <div className="social-links">
            {SOCIALS.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">
                <span>{s.icon}</span> {s.name}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {SITE_INFO.currentYear} {SITE_INFO.name} · {SITE_INFO.tagline} — A branch of{" "}
        <a href={SOCIAL_LINKS.website} target="_blank" rel="noopener noreferrer">PPIM</a>
      </p>
    </footer>
  );
}

// ============================================================================
// 🏠 MAIN APP
// ============================================================================
export default function PPIMonashMalaysia() {
  const sectionIds = useMemo(() => NAV_ITEMS.map(n => n.id), []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <style>{CSS}</style>
      <div className="grain-overlay" />
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Team />
      <Events />
      <Articles />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
