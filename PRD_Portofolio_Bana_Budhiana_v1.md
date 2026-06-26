# Product Requirement Document (PRD)
## Project: Professional Portfolio Website - Bana Budhiana

---

## 1. Overview & Project Background
* **Developer Name:** Bana Budhiana
* **Email:** bana.budhiana@gmail.com
* **Core Value Proposition:** 20+ years of expert experience in Software Development, specializing in both Full-Stack Development and Robust Infrastructure.
* **Primary Goal:** Attract potential clients, businesses, and partners to hire/commission web development services.
* **Phase:** Phase 1 - Frontend Implementation (Using **Dummy Data** / Hardcoded JSON config).

---

## 2. Technical Stack (Target Architecture)
Meskipun fase ini berfokus pada Frontend, arsitektur komponen harus siap dan selaras dengan tech stack utama:
* **Backend Framework:** Laravel 13.x (Sebagai API provider di masa depan)
* **Frontend Framework:** ReactJS (Hydrated/Rendered via Laravel Blade/Inertia.js atau SPA setup)
* **Styling Engine:** TailwindCSS 4.x (Memanfaatkan fitur performa terbaru dan CSS-native configuration)
* **Database:** MariaDB (Untuk fase berikutnya)

---

## 3. Design Principles & UX Requirements
* **Modern Design Trend (2026):** Menggunakan pendekatan *Bento Grid Layout*, efek *Glassmorphism/Frosty Overlays*, tipografi yang berani (Bold Typography), minimalis kontemporer, dan *Smooth Micro-interactions*.
* **Color Palette:** Dark Mode yang elegan (Slate/Zinc dark backgrounds) dikombinasikan dengan warna aksen yang vibrant (seperti Electric Violet, Neon Cyan, atau Emerald Green) untuk memberikan impresi tech-savvy dan profesional.
* **Ultra-Responsive:** Wajib responsif sempurna di semua resolusi layar:
    * Mobile (Smartphone)
    * Tablet (Portrait/Landscape)
    * Laptop & Desktop Retina Display
* **High Performance:** Ringan, optimasi aset gambar/svg, dan interaksi tanpa *jank* (60fps animation).

---

## 4. Frontend Scope & Page Structure (Phase 1)
Website dirancang sebagai **Single Page Application (SPA)** atau **Multi-page dengan Smooth Scrolling** yang mencakup section/halaman berikut:

### 4.1. Navigation Bar (Header)
* **Komponen:** Logo/Nama ("Bana.B"), Menu Links (Home, About, Skills, Portfolio, Contact), dan CTA Button ("Hire Me").
* **Behavior:** Sticky on scroll dengan efek *blur background* (Glassmorphism). Mobile menu menggunakan hamburger icon dengan slide-out/fade animation.

### 4.2. Hero Section (First Impression)
* **Tujuan:** Menampilkan *Hook* utama dalam 3 detik pertama.
* **Konten:**
    * Headline bombastis tentang pengalaman 20+ tahun (e.g., *"Crafting High-Performance Web Ecosystems for 2+ Decades"*).
    * Sub-headline yang merangkum keahlian Full-Stack & Linux Infrastructure.
    * Primary CTA: Tombol "Discuss Project" (mengarahkan ke WhatsApp/Contact Form).
    * Secondary CTA: Tombol "View Work".
* **Visual:** Elemen interaktif modern (e.g., abstract geometric shapes atau subtle grid background animation).

### 4.3. Tech Stack & Expertise Section (Bento Grid Style)
* **Tujuan:** Menunjukkan penguasaan teknologi secara visual dan modern.
* **Layout:** Menggunakan *Bento Grid layout* dengan ukuran box yang bervariasi.
* **Data Tech Stack (Wajib Ditampilkan):**
    * *Backend:* PHP, Laravel, MariaDB, MySQL
    * *Frontend:* ReactJs, NextJs, TailwindCSS, TypeScript, Vanilla Javascript
    * *Infrastructure:* Linux Server Management

### 4.4. Portfolio / Selected Works Section
* **Tujuan:** Memamerkan hasil kerja untuk meyakinkan calon klien.
* **Fitur Frontend:** Filter berdasarkan kategori (All, Full-Stack, Frontend, DevOps/Linux).
* **Komponen Card Portfolio:**
    * Mockup/Gambar Proyek (menggunakan placeholder berkualitas tinggi).
    * Judul Proyek & Deskripsi Singkat.
    * Tech stack badges (misal: `Laravel`, `React`, `TailwindCSS`).
    * Tombol "View Project" / "Case Study".
* *Note: Data bersumber dari file mock JSON lokal.*

### 4.5. About Me & Experience Timeline
* **Tujuan:** Membangun *trust* lewat rekam jejak yang panjang.
* **Konten:** Deskripsi profesional tentang perjalanan karir >20 tahun, fokus pada *problem-solving*, performa server, dan skalabilitas aplikasi.
* **Visual:** Clean timeline indicator.

### 4.6. Service Offerings (Lead Generation)
* **Tujuan:** Menjelaskan jasa apa saja yang ditawarkan secara spesifik agar pengunjung tertarik memesan.
* **Paket/Jenis Jasa:**
    1.  *Enterprise Web Development* (Laravel + React/NextJs)
    2.  *High-Performance API & Backend Architecture*
    3.  *Linux Server Optimization & Infrastructure Setup*

### 4.7. Contact & Lead Capture Form (Footer)
* **Tujuan:** Mempermudah konversi pengunjung menjadi klien.
* **Komponen Form:** Input Nama, Email, Subjek, dan Pesan/Detail Proyek.
* **Informasi Tambahan:** Email tertera (`bana.budhiana@gmail.com`) dan tautan ke jejaring profesional (GitHub, LinkedIn).
* **Fase 1 Behavior:** Form memiliki validasi frontend (HTML5 & JavaScript validation). Saat disubmit, memunculkan modal/toast success dummy yang estetik (*"Thank you! Your message has been sent successfully."*).

---

## 5. Non-Functional Requirements
* **Accessibility (a11y):** Kontras warna yang baik antara teks dan background sesuai standar WCAG.
* **SEO Friendly:** Menggunakan tag semantik HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h6>`).
* **Code Quality:** Struktur komponen React harus modular, reusable, dan clean (clean code principles).

---

## 6. Dummy Data Specification (JSON Mockup Structure)
Gunakan struktur data berikut di dalam project frontend untuk mengisi konten secara dinamis:

```json
{
  "profile": {
    "name": "Bana Budhiana",
    "email": "bana.budhiana@gmail.com",
    "yearsOfExperience": "20+",
    "title": "Senior Full-Stack Developer & Server Administrator"
  },
  "skills": [
    {"name": "PHP", "category": "Backend"},
    {"name": "Laravel", "category": "Backend"},
    {"name": "ReactJs", "category": "Frontend"},
    {"name": "NextJs", "category": "Frontend"},
    {"name": "TailwindCSS", "category": "Frontend"},
    {"name": "TypeScript", "category": "Frontend"},
    {"name": "Vanilla Javascript", "category": "Frontend"},
    {"name": "Linux", "category": "Infrastructure"},
    {"name": "MariaDB", "category": "Database"},
    {"name": "MySQL", "category": "Database"}
  ],
  "projects": [
    {
      "id": 1,
      "title": "Enterprise E-Commerce Platform",
      "category": "Full-Stack",
      "description": "High-performance e-commerce engine built for scale.",
      "technologies": ["Laravel", "ReactJS", "TailwindCSS", "MariaDB"],
      "image": "[https://via.placeholder.com/600x400](https://via.placeholder.com/600x400)"
    },
    {
      "id": 2,
      "title": "Secure Cloud Infrastructure Automation",
      "category": "DevOps",
      "description": "Hardened Linux server clustering with optimized database routing.",
      "technologies": ["Linux", "MySQL", "Bash"],
      "image": "[https://via.placeholder.com/600x400](https://via.placeholder.com/600x400)"
    }
  ]
}
