---

# 📋 RENCANA TAHAPAN IMPLEMENTASI
## Portfolio Website – Bana Budhiana (Phase 1: Frontend)

---

## **TAHAP 0 — Inisialisasi Proyek & Infrastruktur**
Tujuan: Menyiapkan pondasi teknis proyek Laravel + React + Tailwind 4 dari nol.
- Membuat proyek Laravel 13.x baru di dalam folder `myporto_claude/`
- Menginstal dependensi frontend: `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `tailwindcss@4`, `@tailwindcss/vite`
- Konfigurasi `vite.config.js` agar port dev server = **8089** dan HMR aktif
- Konfigurasi `.env` untuk environment lokal (APP_NAME, APP_URL)
- Menyiapkan struktur folder: `resources/js/portfolio/{components,data,hooks,utils}`
- Membuat entry point `resources/js/app.jsx` + root Blade `resources/views/portfolio.blade.php` yang memuat `<div id="app"></div>`
- Menambahkan route `/` di `routes/web.php` yang me-return view `portfolio`
- Verifikasi: `php artisan serve` di port 8089 menampilkan halaman kosong React "Hello Bana"

---

## **TAHAP 1 — Design System & Data Layer (Dummy)**
Tujuan: Mendefinisikan bahasa visual dan sumber data sesuai PRD section 3 & 6.
- Konfigurasi **TailwindCSS 4** dengan `@theme` CSS-native (dark mode otomatis via `prefers-color-scheme` + class)
- Mendefinisikan token warna di `app.css`:
  - Background: `slate-950`, `zinc-950`
  - Accent vibrant: `electric-violet (#7C3AED)`, `neon-cyan (#22D3EE)`, `emerald-400 (#34D399)`
  - Glass overlay: `rgba(255,255,255,0.05)` + `backdrop-blur`
- Mendefinisikan tipografi: font display bold (mis. `Inter` + `Space Grotesk`) via `@font-face` atau Google Fonts
- Membuat `resources/js/portfolio/data/profile.js` (profile, email, yearsOfExperience, title)
- Membuat `resources/js/portfolio/data/skills.js` (10 skills sesuai PRD: PHP, Laravel, ReactJs, NextJs, TailwindCSS, TypeScript, Vanilla JS, Linux, MariaDB, MySQL)
- Membuat `resources/js/portfolio/data/projects.js` (≥ 6 proyek dengan kategori Full-Stack / Frontend / DevOps)
- Membuat `resources/js/portfolio/data/services.js` (3 layanan: Enterprise Web Dev, API/Backend Architecture, Linux Server Optimization)
- Membuat `resources/js/portfolio/data/experience.js` (timeline 20+ tahun)
- Membuat UI primitives reusable di `components/ui/`:
  - `Button.jsx` (variant: primary, secondary, ghost — dengan gradient glow effect)
  - `Badge.jsx` (untuk tech stack tags)
  - `SectionHeader.jsx` (judul section + subjudul + garis aksen)
  - `GlassCard.jsx` (container glassmorphism reusable)
- Build utility hooks: `useScrollReveal`, `useActiveSection` (untuk highlight nav link aktif)

---

## **TAHAP 2 — Layout Shell (Header + Footer)**
Tujuan: Kerangka SPA dengan navigasi sticky dan footer.
- `components/Header.jsx`:
  - Logo "Bana.B" di kiri
  - Menu links (Home, About, Skills, Portfolio, Services, Contact) — center
  - CTA "Hire Me" — kanan
  - Sticky behavior + `backdrop-blur` saat scroll > 50px (Glassmorphism)
  - Hamburger menu untuk mobile dengan animasi slide-out
  - Smooth scroll ke anchor section saat menu diklik
- `components/Footer.jsx`:
  - Copyright, social links (GitHub, LinkedIn, Email)
  - Back-to-top button
- Integrasi di `PortfolioApp.jsx` sebagai layout root
- **Verifikasi**: Header sticky berfungsi, mobile menu animasi smooth

---

## **TAHAP 3 — Hero Section (First Impression)**
Tujuan: Hook 3 detik pertama sesuai PRD 4.2.
- `components/Hero.jsx`:
  - Headline bombastis: *"Crafting High-Performance Web Ecosystems for 2+ Decades"*
  - Sub-headline: rangkuman Full-Stack + Linux Infrastructure
  - Primary CTA: "Discuss Project" → `mailto:bana.budhiana@gmail.com` + fallback link WhatsApp
  - Secondary CTA: "View Work" → smooth scroll ke #portfolio
  - Badge kecil: "Available for freelance & contract"
- Visual: SVG/CSS abstract geometric shapes (blob, grid pattern) dengan animasi slow-float + grid background subtle
- Typing effect atau kata yang berganti (Full-Stack Developer / Server Administrator / Problem Solver)
- **Verifikasi**: Animasi 60fps, CTA berfungsi, responsif di mobile

---

## **TAHAP 4 — Tech Stack & Expertise (Bento Grid)**
Tujuan: Pamerkan keahlian sesuai PRD 4.3 dengan layout Bento modern.
- `components/Skills.jsx`:
  - Container grid dengan `grid-cols-4` (desktop), `grid-cols-2` (mobile)
  - Bento box variasi ukuran: 1 besar (highlight), 2 sedang, dan box kecil untuk tiap skill
  - Setiap box: icon (SVG inline atau react-icons) + nama skill + kategori badge
  - Hover effect: border glow + slight scale + gradient overlay
  - Background subtle grid pattern
- Pengelompokan: Backend (PHP, Laravel, MariaDB, MySQL), Frontend (ReactJs, NextJs, TailwindCSS, TypeScript, Vanilla JS), Infrastructure (Linux)
- Box "highlight" menampilkan yearsOfExperience atau sertifikasi
- **Verifikasi**: Bento grid responsif, hover smooth, kontras warna WCAG compliant

---

## **TAHAP 5 — Portfolio / Selected Works**
Tujuan: Pamerkan karya + filter sesuai PRD 4.4.
- `components/Portfolio.jsx`:
  - Filter bar: All | Full-Stack | Frontend | DevOps/Linux (pill button dengan active state glowing)
  - State management via `useState` untuk filter aktif
  - Grid kartu responsif: 3 kolom (desktop), 2 kolom (tablet), 1 kolom (mobile)
- `components/ProjectCard.jsx`:
  - Image mockup (menggunakan placeholder Unsplash/Picsum agar lebih estetik dari via.placeholder)
  - Title, description, tech badges, "View Case Study" button (modal dummy)
  - Hover effect: image zoom + overlay gradient
- Modal `ProjectModal.jsx` untuk "View Case Study" — menampilkan detail lebih lengkap dengan animasi fade-in + scale
- **Verifikasi**: Filter berfungsi, modal smooth, image lazy-loaded

---

## **TAHAP 6 — About Me & Experience Timeline**
Tujuan: Bangun trust via rekam jejak sesuai PRD 4.5.
- `components/About.jsx`:
  - 2 kolom: kiri = foto placeholder / avatar SVG + bio ringkas, kanan = deskripsi profesional
  - Highlight stats: "20+ Years", "100+ Projects", "50+ Clients" (counter animation saat masuk viewport)
- `components/ExperienceTimeline.jsx` (atau digabung di About):
  - Vertical timeline dengan dot indicator glowing
  - Item: tahun, posisi, perusahaan, deskripsi singkat
  - Scroll-triggered animation (muncul satu per satu saat scroll)
- **Verifikasi**: Timeline animasi smooth, stats counter berhenti di angka benar

---

## **TAHAP 7 — Service Offerings**
Tujuan: Lead generation sesuai PRD 4.6.
- `components/Services.jsx`:
  - 3 kartu layanan dari data `services.js`:
    1. **Enterprise Web Development** (Laravel + React/NextJs)
    2. **High-Performance API & Backend Architecture**
    3. **Linux Server Optimization & Infrastructure Setup**
  - Setiap kartu: icon, judul, deskripsi benefit, daftar fitur (✓ bullet), CTA "Get Started"
  - Hover: card terangkat + shadow glow
  - Layout: 3 kolom desktop, stack di mobile
- **Verifikasi**: CTA mengarah ke #contact dengan subject pre-filled

---

## **TAHAP 8 — Contact & Lead Capture Form**
Tujuan: Konversi pengunjung jadi klien sesuai PRD 4.7.
- `components/Contact.jsx`:
  - 2 kolom: kiri = form, kanan = info kontak
  - Form fields: Nama, Email, Subject, Pesan — dengan HTML5 + JS validation
  - Real-time validation: error message merah, success state hijau
  - Saat submit: muncul toast/modal estetik:
    - *"Thank you! Your message has been sent successfully."*
    - Animasi check icon + auto-close 4 detik
  - Info: email `bana.budhiana@gmail.com`, link GitHub, LinkedIn
  - Social icon dengan hover glow
- **Verifikasi**: Validasi client-side jalan, toast muncul, form reset setelah submit

---

## **TAHAP 9 — Polish: Animations, A11y, SEO, Performance**
Tujuan: Standar profesional sesuai PRD section 5.
- **Micro-interactions**: hover, focus ring, button press, scroll-reveal (Intersection Observer)
- **Aksesibilitas**:
  - Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<nav>`)
  - `aria-label` pada icon button, `alt` pada gambar
  - Focus visible untuk keyboard navigation
  - Skip-to-content link
  - Kontras WCAG AA
- **SEO**:
  - Meta tags di Blade: title, description, og:image, twitter:card
  - JSON-LD schema Person
  - `lang="id"` atau `lang="en"` di `<html>`
  - Favicon + apple-touch-icon
- **Performance**:
  - Image lazy loading (`loading="lazy"`)
  - Font preconnect
  - Vite build optimization
  - Lighthouse score target: Performance > 90, A11y > 95
- **Responsive QA**: cek di breakpoint 320px, 768px, 1024px, 1440px, 2560px

---

## **TAHAP 10 — Build, Deploy & Final QA**
Tujuan: Website live dan stabil di http://192.168.18.30:8089.
- Production build: `npm run build`
- Jalankan server: `php artisan serve --host=0.0.0.0 --port=8089`
- Verifikasi semua section tampil dengan benar
- Smoke test: smooth scroll antar section, filter portfolio, submit form, mobile menu, hover effects
- Final Lighthouse audit
- **Dokumentasi singkat README.md**: cara jalankan, struktur folder, dummy data

---

# 📊 RINGKASAN TIMELINE ESTIMASI

| Tahap | Nama | Estimasi |
|---|---|---|
| 0 | Inisialisasi Proyek | Fondasi |
| 1 | Design System & Data Layer | Fondasi |
| 2 | Layout Shell | Fondasi |
| 3 | Hero Section | Konten |
| 4 | Tech Stack Bento Grid | Konten |
| 5 | Portfolio | Konten |
| 6 | About & Timeline | Konten |
| 7 | Services | Konten |
| 8 | Contact Form | Konten |
| 9 | Polish (A11y/SEO/Perf) | Polish |
| 10 | Build & Deploy | Selesai |

---

**Prinsip utama**: Setiap tahap akan saya kerjakan secara incremental dengan commit-able state — artinya setiap selesai satu tahap, website tetap berjalan normal di http://192.168.18.30:8089 dan bisa di-preview.

Apakah rencana ini sudah sesuai dengan ekspektasi Anda? Jika ya, saya akan mulai eksekusi dari **TAHAP 0 → 1 → 2** (pondasi), atau langsung ke section tertentu yang Anda prioritaskan. Mohon konfirmasi atau berikan arahan tambahan (misalnya pilihan accent color favorit, urutan section, atau stack alternatif).