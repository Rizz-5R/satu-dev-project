# PRD — Quran & Hadith Learning Hub
**Versi:** 1.0.0  
**Tanggal:** 24 Juni 2026  
**Deadline Proyek:** 30 Juni 2026  
**Status:** Draft untuk Review Tim  
**Penulis:** Senior Product Manager & Lead Software Engineer

---

## ⚠️ Analisis Pre-PRD: Potensi Bottleneck & Rekomendasi UI

> *Bagian ini ditulis sebagai briefing manajemen risiko sebelum eksekusi. Wajib dibaca tim sebelum sprint dimulai.*

### 1. Analisis Potensi Bottleneck (Timeline 1 Minggu)

#### 🔴 Risiko Tinggi

| # | Bottleneck | Dampak | Mitigasi |
|---|------------|--------|----------|
| 1 | **Desain & populasi data JSON secara bersamaan** | Tim dev tidak bisa coding UI jika data belum ada; menunggu = buang waktu | Tetapkan 1 orang sebagai *Data Owner* yang menyiapkan semua JSON di hari pertama (H1). Gunakan dummy data dulu agar UI bisa jalan paralel. |
| 2 | **Scope creep konten (materi terlalu banyak)** | Konten Ulumul Qur'an & Hadis sangat luas; jika tidak dibatasi, pengisian data tidak akan selesai | Tentukan batas tegas: **maks. 5 materi per sub-modul**, **maks. 10 tokoh**, **maks. 10 kitab**. Kualitas > kuantitas untuk lomba. |
| 3 | **Routing & navigasi SPA yang tidak terencana** | Nested route yang salah struktur akan menyebabkan refactor besar di tengah sprint | Finalisasi struktur route di H1 sebelum mulai coding. Gunakan `react-router-dom v6` dengan layout component. |

#### 🟡 Risiko Sedang

| # | Bottleneck | Dampak | Mitigasi |
|---|------------|--------|----------|
| 4 | **Tidak ada desain sistem (Design System)** | Tiap halaman tampak tidak konsisten; refactor styling memakan waktu | Buat 1 file `tailwind.config.js` dengan color palette & font kustom di H1. Sepakati komponen reusable (Card, Badge, Button) sebelum coding. |
| 5 | **Ketergantungan antar fitur** | Halaman detail materi bergantung pada data JSON yang sama dengan halaman tokoh & kitab | Buat kontrak data (JSON schema) dan `data-loader` utility function lebih dulu agar modul bisa dikerjakan paralel. |
| 6 | **Testing & polish di akhir** | H6-H7 adalah fase paling rawan; bug UI pada mobile sering ditemukan terlambat | Lakukan *mobile viewport check* di setiap akhir hari kerja, bukan hanya di hari terakhir. |

#### 🟢 Catatan Positif
- Stack (React + Tailwind + JSON) adalah kombinasi yang sangat ringan, tidak ada setup backend = hemat 1-2 hari.
- Tidak ada fitur auth/login menyederhanakan alur navigasi secara signifikan.
- JSON lokal berarti zero latency fetching = performa baik secara default.

---

### 2. Rekomendasi Komponen UI Wajib — Halaman Detail Materi

Halaman detail materi adalah *core experience* platform ini. Berikut komponen yang **wajib ada** untuk kenyamanan membaca teks panjang kajian Islam:

#### A. Header Materi
- **Breadcrumb navigasi** (mis: `Beranda > Ulumul Qur'an > Pengertian`) — membantu orientasi pengguna.
- **Judul materi** — font besar, tebal, kontras tinggi.
- **Badge metadata** — kategori, level (Pemula/Menengah), estimasi waktu baca.

#### B. Konten Utama
- **Tipografi nyaman baca**: `font-size: 16–18px`, `line-height: 1.7–1.9`, font serif atau sans-serif yang bersih (misalnya *Noto Sans* atau *Merriweather*).
- **Lebar konten dibatasi** (`max-w-prose` atau `max-w-2xl`) — baris teks yang terlalu panjang melelahkan mata.
- **Heading hierarkis** (H2, H3) dengan warna pembeda agar pembaca bisa *scan* struktur.
- **Blockquote styling khusus** untuk ayat Al-Qur'an dan hadis — border kiri berwarna, background sedikit berbeda, dukungan teks Arab (RTL).

#### C. Sidebar / Panel Navigasi Konten
- **Daftar Isi (Table of Contents)** — auto-generate dari heading dalam konten; sticky di desktop, collapsible di mobile.
- **Progress indikator** — progress bar halus di atas halaman menunjukkan seberapa jauh konten sudah dibaca.

#### D. Referensi Kontekstual
- **Kartu Tokoh Terkait** — mini-card di samping atau bawah konten yang menampilkan tokoh yang disebut dalam materi; klik → halaman biografi.
- **Kartu Kitab Terkait** — serupa dengan Tokoh Terkait; memperkuat koneksi antar konten.

#### E. Navigasi Antar Materi
- **Tombol Prev / Next** di bagian bawah halaman — memudahkan pengguna menelusuri materi secara berurutan tanpa kembali ke daftar.

#### F. Elemen Pendukung
- **Tombol kembali ke atas** (scroll-to-top) — penting untuk materi panjang di mobile.
- **Skeleton loader** — tampil saat data sedang dimuat dari JSON, mencegah halaman terlihat kosong/error.

---
---

## Bagian I — Ikhtisar Proyek

### 1.1 Identitas Proyek

| Atribut | Detail |
|---------|--------|
| **Nama Proyek** | Quran & Hadith Learning Hub |
| **Tipe Aplikasi** | Web App — Single Page Application (SPA) |
| **Tech Stack** | React, Tailwind CSS, Local JSON |
| **Deadline** | 30 Juni 2026 |
| **Konteks** | Proyek Kompetisi (Lomba) |

### 1.2 Visi

> *Menjadi platform belajar digital yang ringkas, responsif, dan mudah diakses untuk materi Ulumul Qur'an dan Studi Hadis — menghadirkan pengalaman belajar yang terstruktur dan interaktif bagi mahasiswa, santri, dan masyarakat umum.*

### 1.3 Tujuan Produk (Goals)

1. **Menyajikan konten** Ulumul Qur'an dan Studi Hadis secara terstruktur dan mudah dinavigasi.
2. **Menghubungkan konten** materi dengan data tokoh dan kitab secara interaktif.
3. **Mendukung pengalaman belajar mandiri** tanpa membutuhkan akun/login.
4. **Memenuhi standar kompetisi** dengan tampilan profesional, responsif, dan performa optimal sebelum 30 Juni 2026.

### 1.4 Target Pengguna

| Segmen | Karakteristik | Kebutuhan Utama |
|--------|--------------|-----------------|
| **Mahasiswa (Islamic Studies)** | Terbiasa dengan sumber akademis, butuh referensi terstruktur | Konten mendalam, navigasi hierarkis, referensi kitab & tokoh |
| **Santri** | Latar belakang pesantren, familiar dengan terminologi Arabic | Kemudahan membaca teks Arab (RTL), penjelasan istilah |
| **Masyarakat Umum** | Pengetahuan dasar Islam, ingin belajar lebih | Bahasa yang mudah dipahami, tampilan yang tidak overwhelming |

---

## Bagian II — Lingkup Fitur (Scope)

### 2.1 OUT OF SCOPE (Tidak Dikerjakan)

Fitur-fitur berikut secara tegas **tidak termasuk** dalam MVP ini dan **tidak boleh dikerjakan** selama sprint:

- ❌ Sistem autentikasi / login / register pengguna
- ❌ Komentar, diskusi, atau forum
- ❌ Sistem bookmark / favorit
- ❌ Backend server atau database (PostgreSQL, MySQL, dll.)
- ❌ API eksternal (kecuali CDN untuk font/icon)
- ❌ Fitur pencarian full-text dengan indexing
- ❌ Sistem notifikasi
- ❌ Upload/edit konten oleh pengguna

### 2.2 IN SCOPE — Fitur Inti (MVP)

#### F-01: Beranda / Dashboard

**Deskripsi:** Halaman utama yang berfungsi sebagai *landing page* dan *navigation hub*.

**Komponen yang diperlukan:**
- Hero section dengan nama platform, tagline, dan CTA utama.
- *Summary cards* yang menampilkan ringkasan setiap modul (jumlah materi, deskripsi singkat).
- *Shortcut navigation* langsung ke sub-modul Ulumul Qur'an dan Studi Hadis.
- *Featured section* untuk satu materi/tokoh/kitab yang disorot.
- Footer dengan informasi proyek.

**Kriteria Selesai (Done):**
- [ ] Halaman ter-render sempurna di mobile (360px) dan desktop (1280px).
- [ ] Semua shortcut mengarah ke halaman yang benar.
- [ ] Tidak ada broken link.

---

#### F-02: Modul Ulumul Qur'an

**Deskripsi:** Modul pembelajaran komprehensif yang mencakup empat sub-topik utama ilmu Al-Qur'an.

**Sub-modul:**

| Sub-Modul | Slug | Konten Minimum |
|-----------|------|----------------|
| Pengertian Ulumul Qur'an | `pengertian` | Definisi, ruang lingkup, objek kajian |
| Sejarah Ulumul Qur'an | `sejarah` | Periodesasi, perkembangan kodifikasi |
| Studi Kitab & Tokoh | `kitab-tokoh` | Daftar kitab tafsir utama & biografi tokoh |
| Metode Tafsir | `metode-tafsir` | Tahlili, Ijmali, Muqaran, Maudhu'i |

**Alur Pengguna:**
```
Beranda → Halaman Daftar Materi (Ulumul Qur'an) → Halaman Detail Materi
                                                  ↓
                                        Kartu Tokoh Terkait → Halaman Detail Tokoh
                                        Kartu Kitab Terkait → Halaman Detail Kitab
```

**Kriteria Selesai:**
- [ ] Semua 4 sub-modul memiliki halaman daftar materi.
- [ ] Setiap materi memiliki halaman detail yang lengkap.
- [ ] Koneksi ke halaman tokoh dan kitab terkait berfungsi.

---

#### F-03: Modul Studi Hadis

**Deskripsi:** Modul pembelajaran ilmu hadis yang mencakup aspek teoritis dan metodologis.

**Sub-modul:**

| Sub-Modul | Slug | Konten Minimum |
|-----------|------|----------------|
| Pengertian Hadis | `pengertian-hadis` | Definisi hadis, sunnah, atsar; unsur-unsur hadis |
| Sejarah Ilmu Hadis | `sejarah-hadis` | Periodesasi, tokoh penggerak, kitab induk |
| Studi Kitab & Tokoh Hadis | `kitab-tokoh-hadis` | Kutub al-Sittah, biografi muhadditsin |
| Kritik Hadis | `kritik-hadis` | Kritik sanad, kritik matan, jarh wa ta'dil |

**Kriteria Selesai:** (sama dengan F-02, diberlakukan untuk modul Hadis)

---

#### F-04: Eksplorasi Tokoh (Figure Explorer)

**Deskripsi:** Halaman khusus yang menampilkan daftar dan detail biografi tokoh ulama yang terkait dengan materi.

**Komponen:**
- Grid/list kartu tokoh dengan foto/avatar placeholder, nama, periode hidup, dan bidang keahlian.
- Halaman detail tokoh dengan biografi lengkap, karya-karya, dan materi terkait.
- Filter berdasarkan bidang (Tafsir / Hadis).

**Kriteria Selesai:**
- [ ] Semua tokoh dalam JSON ditampilkan di halaman eksplorasi.
- [ ] Halaman detail tokoh menampilkan semua field dari JSON.
- [ ] Tautan balik ke materi terkait berfungsi.

---

#### F-05: Eksplorasi Kitab (Book Explorer)

**Deskripsi:** Halaman khusus yang menampilkan daftar dan detail kitab-kitab rujukan.

**Komponen:**
- Grid/list kartu kitab dengan judul, pengarang, dan kategori.
- Halaman detail kitab dengan deskripsi lengkap.
- Filter berdasarkan kategori (Tafsir / Hadis / Ushul).

**Kriteria Selesai:**
- [ ] Semua kitab dalam JSON ditampilkan di halaman eksplorasi.
- [ ] Filter kategori berfungsi dengan benar.
- [ ] Halaman detail kitab menampilkan semua field dari JSON.

---

## Bagian III — Struktur Data (Local JSON Schema)

Semua data disimpan dalam folder `/src/data/` dan diimpor langsung oleh komponen React.

### 3.1 Skema: `materi.json`

```json
[
  {
    "id": "uq-001",
    "slug": "pengertian-ulumul-quran",
    "title": "Pengertian Ulumul Qur'an",
    "description": "Pembahasan mendalam mengenai definisi, objek kajian, dan ruang lingkup ilmu Al-Qur'an.",
    "duration": 15,
    "level": "Pemula",
    "category": "ulumul-quran",
    "content": {
      "sections": [
        {
          "heading": "Definisi Ulumul Qur'an",
          "body": "Ulumul Qur'an (علوم القرآن) secara harfiah berarti 'ilmu-ilmu Al-Qur'an'...",
          "quoteArabic": "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
          "quoteTranslation": "Sesungguhnya Kami-lah yang menurunkan Al-Qur'an, dan pasti Kami pula yang memeliharanya. (QS. Al-Hijr: 9)"
        }
      ],
      "relatedTokohIds": ["t-001", "t-002"],
      "relatedKitabIds": ["k-001"]
    }
  }
]
```

**Keterangan Field:**

| Field | Tipe | Keterangan |
|-------|------|------------|
| `id` | `string` | ID unik, format: `[kategori]-[nomor]` (mis: `uq-001`, `hadis-001`) |
| `slug` | `string` | URL-friendly identifier, digunakan sebagai parameter route |
| `title` | `string` | Judul materi yang ditampilkan |
| `description` | `string` | Deskripsi singkat (maks. 200 karakter) untuk card/preview |
| `duration` | `number` | Estimasi waktu baca dalam menit |
| `level` | `string` | Enum: `"Pemula"` \| `"Menengah"` \| `"Lanjutan"` |
| `category` | `string` | Enum: `"ulumul-quran"` \| `"studi-hadis"` |
| `content.sections` | `array` | Array seksi konten dengan heading dan body (mendukung HTML string) |
| `content.relatedTokohIds` | `array<string>` | Referensi silang ke `tokoh.json` |
| `content.relatedKitabIds` | `array<string>` | Referensi silang ke `kitab.json` |

---

### 3.2 Skema: `tokoh.json`

```json
[
  {
    "id": "t-001",
    "slug": "imam-al-suyuti",
    "name": "Imam Jalaluddin Al-Suyuthi",
    "period": "849 H – 911 H / 1445 M – 1505 M",
    "field": "Tafsir",
    "image": "/assets/images/tokoh/al-suyuti.jpg",
    "biography": "Jalaluddin Abdurrahman bin Abi Bakr Al-Suyuthi adalah seorang ulama besar...",
    "majorWorks": ["Al-Itqan fi Ulumil Qur'an", "Tafsir Al-Jalalain"],
    "relatedMateriIds": ["uq-001", "uq-003"]
  }
]
```

**Keterangan Field:**

| Field | Tipe | Keterangan |
|-------|------|------------|
| `id` | `string` | ID unik, format: `t-[nomor]` |
| `slug` | `string` | URL-friendly identifier untuk routing |
| `name` | `string` | Nama lengkap tokoh |
| `period` | `string` | Periode hidup (Hijriah dan/atau Masehi) |
| `field` | `string` | Bidang keahlian: `"Tafsir"` \| `"Hadis"` \| `"Ushul Fiqh"` |
| `image` | `string` | Path ke file gambar (gunakan avatar placeholder jika tidak ada foto) |
| `biography` | `string` | Biografi lengkap dalam format teks |
| `majorWorks` | `array<string>` | Daftar karya utama tokoh |
| `relatedMateriIds` | `array<string>` | Referensi silang ke `materi.json` |

---

### 3.3 Skema: `kitab.json`

```json
[
  {
    "id": "k-001",
    "slug": "al-itqan-fi-ulumil-quran",
    "title": "Al-Itqan fi Ulumil Qur'an",
    "author": "Imam Jalaluddin Al-Suyuthi",
    "authorId": "t-001",
    "category": "Tafsir",
    "year": "911 H",
    "description": "Kitab ensiklopedik yang membahas 80 lebih disiplin ilmu Al-Qur'an secara komprehensif...",
    "relatedMateriIds": ["uq-001", "uq-004"]
  }
]
```

**Keterangan Field:**

| Field | Tipe | Keterangan |
|-------|------|------------|
| `id` | `string` | ID unik, format: `k-[nomor]` |
| `slug` | `string` | URL-friendly identifier untuk routing |
| `title` | `string` | Judul kitab (bisa dalam bahasa Arab atau transliterasi) |
| `author` | `string` | Nama pengarang (teks) |
| `authorId` | `string` | Referensi silang ke `id` di `tokoh.json` (opsional, jika tokoh ada) |
| `category` | `string` | Enum: `"Tafsir"` \| `"Hadis"` \| `"Ushul"` \| `"Lainnya"` |
| `year` | `string` | Tahun penulisan/penyusunan (Hijriah atau Masehi) |
| `description` | `string` | Deskripsi isi dan signifikansi kitab |
| `relatedMateriIds` | `array<string>` | Referensi silang ke `materi.json` |

---

### 3.4 Struktur Folder Data

```
/src
├── data/
│   ├── materi.json         ← Semua materi (Ulumul Qur'an + Hadis)
│   ├── tokoh.json          ← Semua biografi tokoh
│   └── kitab.json          ← Semua data kitab
├── utils/
│   └── dataLoader.js       ← Helper functions untuk filter & lookup data
```

**Contoh `dataLoader.js`:**

```javascript
import materiData from '../data/materi.json';
import tokohData from '../data/tokoh.json';
import kitabData from '../data/kitab.json';

export const getMateriBySlug = (slug) =>
  materiData.find((m) => m.slug === slug) || null;

export const getMateriByCategory = (category) =>
  materiData.filter((m) => m.category === category);

export const getTokohByIds = (ids) =>
  tokohData.filter((t) => ids.includes(t.id));

export const getKitabByIds = (ids) =>
  kitabData.filter((k) => ids.includes(k.id));

export const getTokohBySlug = (slug) =>
  tokohData.find((t) => t.slug === slug) || null;

export const getKitabBySlug = (slug) =>
  kitabData.find((k) => k.slug === slug) || null;
```

---

## Bagian IV — Arsitektur Teknis

### 4.1 Struktur Proyek React

```
/quran-hadith-hub
├── public/
│   └── assets/
│       └── images/
│           └── tokoh/          ← Gambar tokoh
├── src/
│   ├── components/             ← Komponen reusable
│   │   ├── ui/
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── SkeletonLoader.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PageLayout.jsx
│   │   └── content/
│   │       ├── MateriCard.jsx
│   │       ├── TokohCard.jsx
│   │       ├── KitabCard.jsx
│   │       ├── TableOfContents.jsx
│   │       ├── RelatedTokoh.jsx
│   │       └── RelatedKitab.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ulumul-quran/
│   │   │   ├── UlumulQuranPage.jsx      ← Daftar materi
│   │   │   └── MateriDetailPage.jsx     ← Detail materi (shared dengan hadis)
│   │   ├── studi-hadis/
│   │   │   └── StudiHadisPage.jsx       ← Daftar materi
│   │   ├── tokoh/
│   │   │   ├── TokohListPage.jsx
│   │   │   └── TokohDetailPage.jsx
│   │   └── kitab/
│   │       ├── KitabListPage.jsx
│   │       └── KitabDetailPage.jsx
│   ├── data/                    ← JSON files
│   ├── utils/
│   │   └── dataLoader.js
│   ├── App.jsx                  ← Root component + Router
│   └── main.jsx
├── tailwind.config.js
└── package.json
```

### 4.2 Struktur Routing (React Router v6)

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<HomePage />} />
  
  {/* Ulumul Qur'an */}
  <Route path="/ulumul-quran" element={<UlumulQuranPage />} />
  <Route path="/ulumul-quran/:slug" element={<MateriDetailPage />} />
  
  {/* Studi Hadis */}
  <Route path="/studi-hadis" element={<StudiHadisPage />} />
  <Route path="/studi-hadis/:slug" element={<MateriDetailPage />} />
  
  {/* Tokoh & Kitab */}
  <Route path="/tokoh" element={<TokohListPage />} />
  <Route path="/tokoh/:slug" element={<TokohDetailPage />} />
  <Route path="/kitab" element={<KitabListPage />} />
  <Route path="/kitab/:slug" element={<KitabDetailPage />} />
  
  {/* Fallback */}
  <Route path="*" element={<NotFoundPage />} />
</Routes>
```

---

## Bagian V — Persyaratan UI/UX & Non-Fungsional

### 5.1 Desain Sistem (Design System)

#### Palet Warna (Tailwind Config)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0fdf4',
          500: '#16a34a',   // Hijau Islam — warna utama
          700: '#15803d',
          900: '#14532d',
        },
        accent: {
          500: '#d97706',   // Emas — highlight & badge
          700: '#b45309',
        },
        quran: {
          bg:   '#fefce8',  // Latar belakang kutipan Quran (kuning muda)
          border: '#ca8a04',
        }
      },
      fontFamily: {
        sans:  ['Noto Sans', 'sans-serif'],
        arabic: ['Noto Naskh Arabic', 'serif'],
      },
    }
  }
}
```

#### Tipografi — Halaman Detail Materi

```css
/* Tubuh teks konten */
.prose-materi {
  font-size: 1.0625rem;   /* 17px */
  line-height: 1.85;
  max-width: 70ch;        /* Batas lebar baris optimal */
  color: #1c1917;         /* stone-900 */
}

/* Teks Arab */
.arabic-text {
  font-family: 'Noto Naskh Arabic', serif;
  font-size: 1.5rem;
  line-height: 2.5;
  direction: rtl;
  text-align: right;
}
```

### 5.2 Persyaratan Responsivitas

| Breakpoint | Lebar | Perilaku Layout |
|------------|-------|-----------------|
| Mobile | `< 640px` | Stack vertikal, sidebar tersembunyi, navbar hamburger |
| Tablet | `640px – 1024px` | 2-column grid untuk card, sidebar collapsible |
| Desktop | `> 1024px` | 3-column grid untuk card, sidebar TOC sticky |

**Wajib diuji pada:**
- [ ] iPhone SE (375px) — viewport terkecil yang umum
- [ ] Samsung Galaxy S (360px) — populer di Indonesia
- [ ] iPad (768px)
- [ ] Laptop 1280px

### 5.3 Persyaratan Performa

| Metrik | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.5 detik |
| Time to Interactive (TTI) | < 2.5 detik |
| Ukuran bundle JS (gzip) | < 200 KB |
| JSON data per file | < 500 KB |

**Strategi optimasi:**
- Gunakan `React.lazy()` dan `Suspense` untuk code-splitting per halaman.
- Lazy-load gambar tokoh dengan atribut `loading="lazy"`.
- Import JSON hanya di komponen yang membutuhkan (hindari import global semua data).

### 5.4 Aksesibilitas (a11y)

- Semua gambar harus memiliki atribut `alt` yang deskriptif.
- Kontras warna teks minimal 4.5:1 (WCAG AA).
- Navigasi keyboard harus berfungsi (tab order logis).
- Gunakan elemen semantik HTML: `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`.

---

## Bagian VI — Timeline Pengerjaan (1 Minggu)

### Sprint Overview

| Hari | Tanggal | Fokus Utama | Target Output |
|------|---------|-------------|---------------|
| H1 | 24 Jun | Foundation & Data | Setup proyek, routing, JSON selesai |
| H2 | 25 Jun | Halaman Beranda & Layout | HomePage + Navbar + Footer live |
| H3 | 26 Jun | Modul Ulumul Qur'an | List + Detail page Ulumul Qur'an |
| H4 | 27 Jun | Modul Studi Hadis | List + Detail page Studi Hadis |
| H5 | 28 Jun | Eksplorasi Tokoh & Kitab | TokohListPage + KitabListPage + detail |
| H6 | 29 Jun | Polish, Responsif & Bug Fix | Mobile testing, animasi, konsistensi UI |
| H7 | 30 Jun | Final Review & Submission | Deploy/export, dokumentasi, submit |

---

### H1 — 24 Juni: Foundation & Data

**Tasks:**
- [ ] Inisiasi proyek: `npm create vite@latest` dengan template React.
- [ ] Install dependensi: `react-router-dom`, `tailwindcss`, `@tailwindcss/typography`.
- [ ] Konfigurasi `tailwind.config.js` (palet warna, font custom).
- [ ] Buat struktur folder sesuai arsitektur di Bagian IV.
- [ ] **[PRIORITAS TINGGI]** Populasi `materi.json` (min. 3 materi per modul).
- [ ] **[PRIORITAS TINGGI]** Populasi `tokoh.json` (min. 5 tokoh).
- [ ] **[PRIORITAS TINGGI]** Populasi `kitab.json` (min. 5 kitab).
- [ ] Buat `dataLoader.js` dengan semua helper functions.
- [ ] Setup routing dasar di `App.jsx`.
- [ ] Buat komponen `Navbar`, `Footer`, `PageLayout`.

**Definisi Selesai (DoD):** Aplikasi bisa dijalankan di localhost, routing antar halaman (halaman kosong) berfungsi.

---

### H2 — 25 Juni: Halaman Beranda & Komponen UI Dasar

**Tasks:**
- [ ] Buat komponen `Card.jsx`, `Badge.jsx`, `Button.jsx` (reusable).
- [ ] Buat komponen `SkeletonLoader.jsx`.
- [ ] Kembangkan `HomePage.jsx`:
  - Hero section
  - Module summary cards (Ulumul Qur'an & Studi Hadis)
  - Featured materi/tokoh section
- [ ] Pastikan HomePage responsif di mobile & desktop.
- [ ] Buat `NotFoundPage.jsx`.

**Definisi Selesai:** HomePage ter-render dengan data nyata dari JSON, responsif, tidak ada console error.

---

### H3 — 26 Juni: Modul Ulumul Qur'an

**Tasks:**
- [ ] Kembangkan `UlumulQuranPage.jsx`:
  - Daftar semua materi berfilter `category: "ulumul-quran"`.
  - Grid card materi dengan title, badge level, durasi.
- [ ] Kembangkan `MateriDetailPage.jsx` (shared component):
  - Breadcrumb navigasi.
  - Render konten dari `content.sections`.
  - Render teks Arab (RTL) dengan styling khusus.
  - `TableOfContents.jsx` — sticky di desktop.
  - `RelatedTokoh.jsx` — mini cards tokoh terkait.
  - `RelatedKitab.jsx` — mini cards kitab terkait.
  - Tombol Prev/Next materi.
  - `ScrollToTop.jsx`.
- [ ] Test semua materi Ulumul Qur'an dapat diakses via URL.

**Definisi Selesai:** Semua materi Ulumul Qur'an dapat dijelajahi dari daftar ke detail; koneksi ke tokoh/kitab berfungsi (meski halaman detail tokoh/kitab belum ada).

---

### H4 — 27 Juni: Modul Studi Hadis

**Tasks:**
- [ ] Kembangkan `StudiHadisPage.jsx`:
  - Daftar semua materi berfilter `category: "studi-hadis"`.
  - Reuse komponen Card dari H3.
- [ ] Reuse `MateriDetailPage.jsx` untuk menampilkan detail materi Studi Hadis.
- [ ] Verifikasi `relatedTokohIds` dan `relatedKitabIds` di materi Hadis sudah terisi di JSON.
- [ ] Test semua materi Studi Hadis dapat diakses.

**Definisi Selesai:** Modul Studi Hadis sepenuhnya berfungsi seperti Modul Ulumul Qur'an.

---

### H5 — 28 Juni: Eksplorasi Tokoh & Kitab

**Tasks:**
- [ ] Kembangkan `TokohListPage.jsx`:
  - Grid kartu semua tokoh.
  - Filter berdasarkan `field` (Tafsir / Hadis).
- [ ] Kembangkan `TokohDetailPage.jsx`:
  - Gambar/avatar tokoh.
  - Biografi lengkap.
  - Daftar karya utama.
  - Materi terkait.
- [ ] Kembangkan `KitabListPage.jsx`:
  - Grid kartu semua kitab.
  - Filter berdasarkan `category`.
- [ ] Kembangkan `KitabDetailPage.jsx`:
  - Detail kitab lengkap.
  - Tautan ke halaman pengarang (TokohDetailPage).
  - Materi terkait.
- [ ] Verifikasi semua tautan dari `MateriDetailPage` ke tokoh/kitab berfungsi end-to-end.

**Definisi Selesai:** Seluruh alur navigasi `Materi → Tokoh → Materi` dan `Materi → Kitab → Materi` berfungsi penuh.

---

### H6 — 29 Juni: Polish, Responsif & Bug Fix

**Tasks:**
- [ ] Audit mobile responsif di semua halaman (375px, 360px, 768px).
- [ ] Audit konsistensi warna, spacing, dan tipografi.
- [ ] Tambahkan transisi halaman (`framer-motion` atau CSS transition sederhana).
- [ ] Tambahkan progress bar baca di `MateriDetailPage`.
- [ ] Perbaiki semua bug yang ditemukan selama H1–H5.
- [ ] Optimasi performa: lazy loading gambar, code splitting.
- [ ] Pastikan semua link tidak broken.
- [ ] Review `alt` text pada semua gambar.

**Definisi Selesai:** Tidak ada bug kritis; tampilan konsisten di semua breakpoint utama.

---

### H7 — 30 Juni: Final Review & Submission

**Tasks:**
- [ ] Demo run lengkap dari Beranda → Semua modul → Tokoh → Kitab.
- [ ] Build production: `npm run build`.
- [ ] Deploy ke platform hosting (Vercel / Netlify / GitHub Pages).
- [ ] Verifikasi semua route berfungsi di production (konfigurasi SPA redirect).
- [ ] Screenshot/rekaman layar untuk keperluan dokumentasi lomba.
- [ ] Siapkan README.md dengan instruksi instalasi dan deskripsi proyek.
- [ ] **SUBMIT** sebelum pukul 23:59 WIB.

**Definisi Selesai:** Aplikasi live di URL publik; semua fitur MVP berfungsi.

---

## Bagian VII — Risiko & Contingency Plan

| Risiko | Kemungkinan | Dampak | Rencana Mitigasi |
|--------|-------------|--------|------------------|
| Data JSON belum selesai di H1 | Tinggi | Tinggi | Gunakan dummy data generator; kerjakan konten sesungguhnya paralel |
| Bug pada routing SPA di production | Sedang | Tinggi | Test build & deploy di H5, bukan H7; konfigurasi `_redirects` di Netlify dari awal |
| Tampilan rusak di mobile | Sedang | Sedang | Daily mobile check setelah setiap halaman selesai |
| Ketidaksesuaian data relasi (ID tidak cocok) | Rendah | Sedang | Buat validasi script sederhana atau cek manual sebelum H5 |
| Scope creep konten | Tinggi | Sedang | PM harus tegas menolak penambahan materi setelah H2 |

---

## Bagian VIII — Glosarium

| Istilah | Definisi |
|---------|----------|
| **Ulumul Qur'an** | Ilmu-ilmu yang berkaitan dengan Al-Qur'an secara komprehensif |
| **Studi Hadis** | Disiplin ilmu yang mempelajari periwayatan dan otentisitas hadis |
| **Tafsir** | Ilmu penafsiran makna Al-Qur'an |
| **Jarh wa Ta'dil** | Ilmu penilaian kredibilitas perawi hadis |
| **Sanad** | Rantai perawi yang meriwayatkan hadis |
| **Matan** | Teks isi dari hadis |
| **Kutub al-Sittah** | Enam kitab hadis utama yang paling otoritatif |
| **SPA** | Single Page Application — aplikasi web dengan satu halaman HTML |
| **MVP** | Minimum Viable Product — produk dengan fitur paling esensial |
| **RTL** | Right-to-Left — arah baca teks Arab |

---

## Lampiran: Checklist Go-Live

### ✅ Technical Checklist
- [ ] Build production berhasil tanpa error/warning kritis
- [ ] Semua route berfungsi di production URL
- [ ] Tidak ada console error di browser
- [ ] Semua gambar ter-load dengan benar
- [ ] Teks Arab ter-render dengan font yang benar

### ✅ Content Checklist
- [ ] Min. 3 materi per sub-modul (total min. 12 materi)
- [ ] Min. 5 tokoh dengan biografi lengkap
- [ ] Min. 5 kitab dengan deskripsi lengkap
- [ ] Semua referensi silang (relatedTokohIds, relatedKitabIds) valid

### ✅ UX Checklist
- [ ] Navigasi breadcrumb berfungsi di semua halaman
- [ ] Prev/Next materi berfungsi
- [ ] Scroll-to-top berfungsi
- [ ] Filter tokoh & kitab berfungsi
- [ ] Tampilan responsif di mobile 375px

### ✅ Submission Checklist
- [ ] URL live (production) siap
- [ ] README.md lengkap
- [ ] Screenshot aplikasi tersedia
- [ ] Dokumen PRD ini tersimpan di repository

---

*Dokumen ini adalah living document. Update terakhir: 24 Juni 2026.*  
*Semua keputusan perubahan scope setelah H2 harus melalui persetujuan PM dan dicatat dalam dokumen ini.*
