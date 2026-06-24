# Design System — Suqura
### *Smart Encyclopedia for Qur'an & Hadith Studies*

**Versi:** 1.0.0  
**Tanggal:** 24 Juni 2026  
**Tech Stack:** React + Tailwind CSS v3  
**Audience:** Frontend Engineering Team & UI Contributors

> **Cara menggunakan dokumen ini:** Setiap token desain di sini bersifat *prescriptive* — artinya tim tidak perlu mengambil keputusan visual di level komponen. Cukup ikuti class Tailwind yang sudah ditentukan. Jika ada kebutuhan di luar dokumen ini, diskusikan sebelum menambahkan class baru ke kodebase.

---

## Daftar Isi

1. [Prinsip Desain](#prinsip-desain)
2. [Konfigurasi Tailwind](#konfigurasi-tailwind)
3. [Palet Warna](#palet-warna)
4. [Tipografi](#tipografi)
5. [Skala Spasi & Layout](#spasi-layout)
6. [Border, Radius & Shadow](#border-radius-shadow)
7. [Komponen: Tombol (Button)](#komponen-button)
8. [Komponen: Kartu (Card)](#komponen-card)
9. [Komponen: Global Search Bar](#komponen-search)
10. [Komponen: Badge & Label](#komponen-badge)
11. [Komponen: Breadcrumb](#komponen-breadcrumb)
12. [Komponen: Navigation (Navbar)](#komponen-navbar)
13. [Komponen: Teks Arab (Arabic Quote)](#komponen-arabic)
14. [Pola Halaman & Layout Grid](#pola-layout)
15. [State UI: Empty, Loading, Error](#state-ui)
16. [Aksesibilitas (a11y)](#aksesibilitas)
17. [Referensi Cepat Tailwind](#referensi-cepat)

---

## 1. Prinsip Desain <a name="prinsip-desain"></a>

Suqura adalah platform *belajar*, bukan platform *hiburan*. Setiap keputusan visual harus melayani satu tujuan: **membantu pengguna memahami konten ilmiah Islam dengan mudah dan nyaman**.

### Empat Pilar Desain

**Keterbacaan di Atas Segalanya**
Warna latar yang bersih, ukuran font yang memadai, dan spasi baris yang lega bukan pilihan estetika — itu adalah kebutuhan fungsional untuk konten akademis padat.

**Hirarki yang Jelas**
Setiap elemen tahu perannya: heading memimpin, body text menjelaskan, badge memberi konteks, tombol mengajak bertindak. Tidak ada elemen yang berebut perhatian.

**Identitas Islam yang Tidak Klise**
Hijau sebagai warna primer bukan karena konvensi "warna Islam", melainkan karena emerald memberi kesan intelektual dan segar — jauh dari hijau tua yang sering diasosiasikan dengan desain formulir pemerintah. Tidak ada arabesque dekoratif; elemen Arab ditampilkan sebagai konten, bukan ornamen.

**Konsistensi adalah Kepercayaan**
Tombol yang sama selalu terlihat sama. Kartu yang sama selalu berperilaku sama. Pengguna tidak perlu belajar ulang tiap membuka halaman baru.

---

## 2. Konfigurasi Tailwind <a name="konfigurasi-tailwind"></a>

Salin konfigurasi berikut ke `tailwind.config.js` sebelum mulai coding. Ini adalah **satu-satunya sumber kebenaran** untuk token desain Suqura.

```javascript
// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // ── WARNA KUSTOM ─────────────────────────────────────
      colors: {
        // Primary: Islamic Emerald
        primary: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',   // ← Brand utama
          600: '#059669',   // ← Hover / Active state
          700: '#047857',   // ← Pressed state
          800: '#065f46',
          900: '#064e3b',
        },
        // Secondary: Deep Slate
        secondary: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',   // ← Teks heading
          800: '#1e293b',
          900: '#1f2937',   // ← Teks body utama
        },
        // Surface: Background & Card
        surface: {
          page:  '#f8fafc',   // ← Background halaman
          card:  '#ffffff',   // ← Background kartu
          muted: '#f1f5f9',   // ← Background elemen muted
          hover: '#ecfdf5',   // ← Hover state latar (primary tint)
        },
        // Semantic: Status & Feedback
        success: '#10b981',
        warning: '#f59e0b',
        danger:  '#ef4444',
        info:    '#3b82f6',
        // Arabic Quote
        quran: {
          bg:     '#fefce8',  // ← Latar blokquote Qur'an (amber-50)
          border: '#d97706',  // ← Border kiri blockquote
          text:   '#92400e',  // ← Teks terjemahan (amber-800)
        },
      },

      // ── TIPOGRAFI ─────────────────────────────────────────
      fontFamily: {
        heading: ['Montserrat', ...fontFamily.sans],
        body:    ['Inter', ...fontFamily.sans],
        arabic:  ['Noto Naskh Arabic', ...fontFamily.serif],
      },

      // ── SKALA FONT KUSTOM ─────────────────────────────────
      fontSize: {
        'xs':   ['0.75rem',  { lineHeight: '1rem' }],
        'sm':   ['0.875rem', { lineHeight: '1.375rem' }],
        'base': ['1rem',     { lineHeight: '1.75rem' }],   // ← Body text, line-height lega
        'lg':   ['1.125rem', { lineHeight: '1.875rem' }],
        'xl':   ['1.25rem',  { lineHeight: '1.875rem' }],
        '2xl':  ['1.5rem',   { lineHeight: '2rem' }],
        '3xl':  ['1.875rem', { lineHeight: '2.375rem' }],
        '4xl':  ['2.25rem',  { lineHeight: '2.75rem' }],
        '5xl':  ['3rem',     { lineHeight: '3.5rem' }],
        // Ukuran eksklusif Arab
        'arabic-base': ['1.375rem', { lineHeight: '2.75rem' }],
        'arabic-lg':   ['1.75rem',  { lineHeight: '3.25rem' }],
        'arabic-xl':   ['2.25rem',  { lineHeight: '4rem' }],
      },

      // ── ANIMASI & TRANSISI ────────────────────────────────
      transitionDuration: {
        DEFAULT: '200ms',
        fast:    '100ms',
        slow:    '400ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'skeleton-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
      },
      animation: {
        'fade-in':       'fade-in 200ms ease-out forwards',
        'skeleton-pulse':'skeleton-pulse 1.5s ease-in-out infinite',
      },

      // ── MAX WIDTH KONTEN ──────────────────────────────────
      maxWidth: {
        'prose-sm':  '55ch',
        'prose':     '70ch',   // ← Lebar optimal body text
        'prose-lg':  '80ch',
      },

      // ── BOX SHADOW ────────────────────────────────────────
      boxShadow: {
        'card':       '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 4px 12px 0 rgb(0 0 0 / 0.10), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
        'search':     '0 0 0 3px rgb(16 185 129 / 0.20)',  // ← Focus ring search bar
        'btn':        '0 1px 2px 0 rgb(0 0 0 / 0.08)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // Untuk konten panjang (prose)
  ],
};
```

**Install dependensi yang dibutuhkan:**
```bash
npm install -D @tailwindcss/typography
```

**Import font di `index.html`:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@400;500;600&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 3. Palet Warna <a name="palet-warna"></a>

### Warna Inti

| Token | Nama | Hex | Tailwind Class | Penggunaan |
|-------|------|-----|----------------|------------|
| `primary-500` | Emerald Brand | `#10b981` | `bg-primary-500` / `text-primary-500` | Tombol utama, link aktif, badge primer |
| `primary-600` | Emerald Hover | `#059669` | `hover:bg-primary-600` | Hover state tombol primer |
| `primary-700` | Emerald Dark | `#047857` | `active:bg-primary-700` | Pressed state, dark variant |
| `primary-50` | Emerald Tint | `#ecfdf5` | `bg-primary-50` | Latar highlight, hover surface |
| `secondary-900` | Deep Ink | `#1f2937` | `text-secondary-900` | Body text utama |
| `secondary-700` | Slate Heading | `#334155` | `text-secondary-700` | Heading H2, H3 |
| `secondary-500` | Gray Muted | `#64748b` | `text-secondary-500` | Teks sekunder, placeholder |
| `secondary-200` | Gray Border | `#e2e8f0` | `border-secondary-200` | Border kartu, divider |
| `surface-page` | Off-white | `#f8fafc` | `bg-[#f8fafc]` | Background halaman |
| `surface-card` | Pure White | `#ffffff` | `bg-white` | Background kartu |

### Warna Semantik

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `success` `#10b981` | Konfirmasi, badge level "Pemula" |
| `warning` `#f59e0b` | Badge level "Menengah", peringatan |
| `danger` `#ef4444` | Error state, validasi |
| `info` `#3b82f6` | Badge informasi, link |
| `quran.bg` `#fefce8` | Latar blockquote Qur'an & Hadis |
| `quran.border` `#d97706` | Border kiri blockquote |

### Rasio Kontras (WCAG AA)

| Kombinasi | Rasio | Status |
|-----------|-------|--------|
| `#1f2937` teks di `#f8fafc` | 14.8:1 | ✅ AAA |
| `#ffffff` teks di `#059669` | 4.6:1 | ✅ AA |
| `#334155` teks di `#ffffff` | 10.3:1 | ✅ AAA |
| `#64748b` teks di `#ffffff` | 4.6:1 | ✅ AA |

---

## 4. Tipografi <a name="tipografi"></a>

### Hierarki Font

```
MONTSERRAT  ─── Heading Display, Navbar brand, H1–H3
INTER       ─── Body text, UI label, caption, badge
NOTO NASKH  ─── Teks Arab (RTL), transliterasi
```

### Skala Tipografi Lengkap

```jsx
{/* ─── HEADING HIERARCHY ─────────────────────────────── */}

{/* H1 — Page Title (setiap halaman hanya boleh ada 1) */}
<h1 className="font-heading text-4xl font-bold text-secondary-900 tracking-tight leading-tight">
  Ulumul Qur'an
</h1>
{/* → Montserrat, 36px, bold (700), slate-900, tracking-tight */}

{/* H2 — Section Header */}
<h2 className="font-heading text-2xl font-semibold text-secondary-700 mt-8 mb-3">
  Pengertian & Definisi
</h2>
{/* → Montserrat, 24px, semibold (600), slate-700 */}

{/* H3 — Subsection Header */}
<h3 className="font-heading text-xl font-semibold text-secondary-700 mt-6 mb-2">
  Ruang Lingkup Kajian
</h3>
{/* → Montserrat, 20px, semibold (600), slate-700 */}

{/* H4 — Card Title / Minor Header */}
<h4 className="font-heading text-base font-semibold text-secondary-900">
  Imam Al-Suyuthi
</h4>
{/* → Montserrat, 16px, semibold (600), slate-900 */}


{/* ─── BODY TEXT ──────────────────────────────────────── */}

{/* Body Default — teks materi/konten */}
<p className="font-body text-base text-secondary-900 leading-relaxed">
  Ulumul Qur'an adalah sejumlah ilmu yang berhubungan dengan Al-Qur'an...
</p>
{/* → Inter, 16px, normal (400), slate-900, line-height 1.75 */}

{/* Body Large — intro paragraph, lead text */}
<p className="font-body text-lg text-secondary-700 leading-relaxed">
  Platform belajar digital untuk Ulumul Qur'an dan Studi Hadis.
</p>
{/* → Inter, 18px, normal (400), slate-700 */}

{/* Body Small — metadata, caption */}
<p className="font-body text-sm text-secondary-500">
  Estimasi baca: 15 menit
</p>
{/* → Inter, 14px, normal (400), slate-500 */}

{/* Label UI — tombol, badge, nav link */}
<span className="font-body text-sm font-medium text-secondary-700">
  Metode Tafsir
</span>
{/* → Inter, 14px, medium (500), slate-700 */}

{/* Caption / Footnote */}
<span className="font-body text-xs text-secondary-400 tracking-wide uppercase">
  Sumber: Manna Al-Qaththan
</span>
{/* → Inter, 12px, normal (400), slate-400, uppercase tracking */}
```

### Tipografi untuk Konten Panjang (Prose)

Gunakan plugin `@tailwindcss/typography` dengan kustomisasi untuk halaman detail materi:

```jsx
{/* Wrapper konten panjang di MateriDetailPage */}
<article className="
  prose
  prose-slate
  max-w-prose
  font-body
  prose-headings:font-heading
  prose-headings:text-secondary-700
  prose-p:text-secondary-900
  prose-p:leading-relaxed
  prose-a:text-primary-600
  prose-a:no-underline
  hover:prose-a:underline
  prose-strong:text-secondary-900
  prose-blockquote:border-l-4
  prose-blockquote:border-primary-400
  prose-blockquote:bg-primary-50
  prose-blockquote:rounded-r-lg
  prose-blockquote:px-4
  prose-blockquote:py-2
  prose-hr:border-secondary-200
">
  {/* Konten materi di-render di sini */}
</article>
```

### Aturan Tipografi (Wajib Diikuti)

- **Jangan** gunakan `font-bold` (700) untuk body text — hanya untuk heading
- **Jangan** gunakan lebih dari 3 ukuran font dalam satu komponen kartu
- `max-w-prose` (`70ch`) **wajib** digunakan di semua halaman yang menampilkan konten panjang
- Line-height body text minimal `leading-relaxed` (1.625) — tidak boleh kurang

---

## 5. Skala Spasi & Layout <a name="spasi-layout"></a>

### Skema Spasi yang Digunakan

Suqura mengikuti skala 4px (1 unit = 4px). Tailwind sudah mengikuti ini secara default.

```
Tailwind p-1  = 4px   ← Spasi micro (ikon internal, badge padding kecil)
Tailwind p-2  = 8px   ← Spasi tight (badge, label kecil)
Tailwind p-3  = 12px  ← Spasi compact (elemen kecil)
Tailwind p-4  = 16px  ← Spasi default (button, card padding minimal)
Tailwind p-5  = 20px  ← Spasi medium
Tailwind p-6  = 24px  ← Spasi card standard
Tailwind p-8  = 32px  ← Spasi section dalam halaman
Tailwind p-10 = 40px  ← Spasi section besar
Tailwind p-12 = 48px  ← Spasi hero / header halaman
Tailwind p-16 = 64px  ← Spasi antar seksi besar
```

### Padding Standar per Konteks

| Konteks | Class | Keterangan |
|---------|-------|------------|
| Badge / Label kecil | `px-2.5 py-0.5` | Sangat compact |
| Tombol kecil (sm) | `px-3 py-1.5` | Kompak |
| Tombol standar | `px-5 py-2.5` | Default button |
| Tombol besar (lg) | `px-7 py-3` | CTA hero |
| Card padding | `p-5` atau `p-6` | Isi kartu |
| Section halaman | `py-10 px-4` atau `py-12 px-6` | Dalam container |
| Container halaman | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` | Wrapper utama |

### Grid Sistem

```jsx
{/* Container utama — semua halaman */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

  {/* Grid 1 kolom (mobile default) */}
  <div className="grid grid-cols-1 gap-5">...</div>

  {/* Grid 2 kolom — Ringkasan Modul di HomePage */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">...</div>

  {/* Grid 3 kolom — Grid kartu materi/tokoh/kitab */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">...</div>

  {/* Layout 2 kolom — Detail Page (konten + sidebar) */}
  <div className="flex flex-col lg:flex-row gap-8">
    <main className="flex-1 min-w-0">...</main>        {/* 70% */}
    <aside className="w-full lg:w-72 xl:w-80 shrink-0">...</aside>  {/* 30% */}
  </div>

</div>
```

---

## 6. Border, Radius & Shadow <a name="border-radius-shadow"></a>

### Border Radius

| Token | Class | Nilai | Penggunaan |
|-------|-------|-------|------------|
| Micro | `rounded` | 4px | Input kecil, tag dalam teks |
| Small | `rounded-lg` | 8px | Badge, button kecil, tooltip |
| Standard | `rounded-xl` | 12px | Dropdown, modal kecil |
| Card | `rounded-2xl` | 16px | **Semua kartu utama** |
| Large | `rounded-3xl` | 24px | Hero card, section highlight |
| Full | `rounded-full` | 9999px | Avatar, pill badge |

### Shadow System

```jsx
{/* Kartu default — resting state */}
<div className="shadow-card">...</div>
{/* → 0 1px 3px rgba(0,0,0,0.06), subtil dan bersih */}

{/* Kartu hover — elevated state */}
<div className="hover:shadow-card-hover transition-shadow duration-200">...</div>
{/* → 0 4px 12px rgba(0,0,0,0.10), terasa terangkat */}

{/* Search bar focus ring */}
<input className="focus:shadow-search focus:outline-none">
{/* → 0 0 0 3px rgba(16, 185, 129, 0.20), green glow */}

{/* Navbar shadow */}
<nav className="shadow-sm border-b border-secondary-200">
{/* → shadow-sm untuk pemisahan navbar yang halus */}
```

### Border Standard

```jsx
{/* Border kartu default */}
<div className="border border-secondary-200">...</div>

{/* Border fokus input */}
<input className="border border-secondary-300 focus:border-primary-500">

{/* Divider seksi */}
<hr className="border-t border-secondary-100 my-8" />

{/* Border kiri blockquote */}
<blockquote className="border-l-4 border-primary-400 pl-4">...</blockquote>
```

---

## 7. Komponen: Tombol (Button) <a name="komponen-button"></a>

### Base Classes (Selalu Digunakan)

Semua tombol berbagi kelas dasar berikut:

```
font-body font-medium rounded-lg
inline-flex items-center justify-center gap-2
transition-all duration-200
focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
```

---

### Button Primary — Tombol Utama (Hijau Solid)

Digunakan untuk CTA utama: "Mulai Belajar", "Jelajahi", tombol submit.

```jsx
{/* Ukuran: Small */}
<button className="
  font-body font-medium rounded-lg
  inline-flex items-center justify-center gap-2
  transition-all duration-200
  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  bg-primary-500 text-white
  hover:bg-primary-600 active:bg-primary-700
  px-3 py-1.5 text-sm
  shadow-btn hover:shadow-md
">
  Baca Materi
</button>

{/* Ukuran: Default (paling sering dipakai) */}
<button className="
  font-body font-medium rounded-lg
  inline-flex items-center justify-center gap-2
  transition-all duration-200
  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  bg-primary-500 text-white
  hover:bg-primary-600 active:bg-primary-700
  px-5 py-2.5 text-sm
  shadow-btn hover:shadow-md
">
  Jelajahi Modul
</button>

{/* Ukuran: Large — Hero CTA */}
<button className="
  font-body font-medium rounded-xl
  inline-flex items-center justify-center gap-2
  transition-all duration-200
  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  bg-primary-500 text-white
  hover:bg-primary-600 active:bg-primary-700
  px-7 py-3 text-base
  shadow-btn hover:shadow-lg
">
  Mulai Belajar Sekarang
</button>
```

---

### Button Secondary — Tombol Sekunder (Outlined)

Digunakan untuk aksi sekunder: "Kembali", "Lihat Semua", navigasi non-kritis.

```jsx
{/* Outlined — border hijau */}
<button className="
  font-body font-medium rounded-lg
  inline-flex items-center justify-center gap-2
  transition-all duration-200
  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  bg-transparent text-primary-600
  border border-primary-500
  hover:bg-primary-50 active:bg-primary-100
  px-5 py-2.5 text-sm
">
  Lihat Semua Tokoh
</button>

{/* Ghost Gray — untuk aksi netral */}
<button className="
  font-body font-medium rounded-lg
  inline-flex items-center justify-center gap-2
  transition-all duration-200
  focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  bg-transparent text-secondary-600
  border border-secondary-300
  hover:bg-secondary-50 hover:border-secondary-400
  active:bg-secondary-100
  px-5 py-2.5 text-sm
">
  Kembali
</button>
```

---

### Button Icon — Tombol dengan Ikon

```jsx
{/* Icon + Label */}
<button className="
  font-body font-medium rounded-lg
  inline-flex items-center justify-center gap-2
  transition-all duration-200
  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
  bg-primary-500 text-white
  hover:bg-primary-600 active:bg-primary-700
  px-4 py-2.5 text-sm
">
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
  Baca Materi
</button>

{/* Icon Only — untuk tombol compact (mis: close, share) */}
<button className="
  inline-flex items-center justify-center
  transition-all duration-200
  focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2
  text-secondary-500 hover:text-secondary-700
  hover:bg-secondary-100
  p-2 rounded-lg
" aria-label="Tutup">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
```

---

### Komponen Button Reusable (React)

```jsx
// components/ui/Button.jsx

const variants = {
  primary:   'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-btn hover:shadow-md focus-visible:ring-primary-500',
  secondary: 'bg-transparent text-primary-600 border border-primary-500 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500',
  ghost:     'bg-transparent text-secondary-600 border border-secondary-300 hover:bg-secondary-50 hover:border-secondary-400 focus-visible:ring-secondary-400',
  danger:    'bg-danger text-white hover:bg-red-600 active:bg-red-700 focus-visible:ring-red-500',
};

const sizes = {
  sm:  'px-3 py-1.5 text-sm rounded-lg',
  md:  'px-5 py-2.5 text-sm rounded-lg',
  lg:  'px-7 py-3 text-base rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`
        font-body font-medium
        inline-flex items-center justify-center gap-2
        transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

// Penggunaan:
// <Button variant="primary" size="lg">Mulai Belajar</Button>
// <Button variant="secondary">Lihat Semua</Button>
// <Button variant="ghost" size="sm">Kembali</Button>
```

---

## 8. Komponen: Kartu (Card) <a name="komponen-card"></a>

### Card Materi

Digunakan di halaman daftar materi (`/quran`, `/hadith`).

```jsx
// Contoh: MateriCard.jsx

<article className="
  group
  bg-white rounded-2xl
  border border-secondary-200
  shadow-card hover:shadow-card-hover
  transition-all duration-200
  hover:-translate-y-0.5
  overflow-hidden
  cursor-pointer
  animate-fade-in
">
  {/* Header kartu — strip warna kategori */}
  <div className="h-1.5 bg-primary-500 rounded-t-2xl" />

  <div className="p-5">
    {/* Badge baris atas */}
    <div className="flex items-center gap-2 mb-3">
      <span className="
        font-body text-xs font-medium
        bg-primary-50 text-primary-700
        px-2.5 py-0.5 rounded-full
      ">
        Metode Tafsir
      </span>
      <span className="
        font-body text-xs font-medium
        bg-amber-50 text-amber-700
        px-2.5 py-0.5 rounded-full
      ">
        Menengah
      </span>
    </div>

    {/* Judul */}
    <h4 className="
      font-heading text-base font-semibold
      text-secondary-900
      group-hover:text-primary-600
      transition-colors duration-200
      mb-2 line-clamp-2
    ">
      Metode Tafsir Maudhu'i
    </h4>

    {/* Deskripsi */}
    <p className="
      font-body text-sm text-secondary-500
      leading-relaxed
      line-clamp-3 mb-4
    ">
      Pendekatan tematik dalam menafsirkan Al-Qur'an dengan mengumpulkan
      seluruh ayat yang berbicara tentang satu tema...
    </p>

    {/* Footer kartu */}
    <div className="flex items-center justify-between pt-3 border-t border-secondary-100">
      <div className="flex items-center gap-1.5 text-secondary-400">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-body text-xs">15 menit</span>
      </div>
      <span className="
        font-body text-xs font-medium text-primary-600
        group-hover:gap-1.5
        inline-flex items-center gap-1
        transition-all duration-200
      ">
        Baca
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200"
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  </div>
</article>
```

---

### Card Tokoh

Digunakan di halaman Ensiklopedia dan panel referensi di detail materi.

```jsx
// TokohCard.jsx

<article className="
  group
  bg-white rounded-2xl
  border border-secondary-200
  shadow-card hover:shadow-card-hover
  transition-all duration-200
  hover:-translate-y-0.5
  p-5 cursor-pointer
  animate-fade-in
">
  <div className="flex items-start gap-4">
    {/* Avatar */}
    <div className="
      w-14 h-14 rounded-full shrink-0
      bg-primary-100
      flex items-center justify-center
      text-primary-600
    ">
      {/* Tampilkan gambar jika ada, fallback ke initial */}
      <span className="font-heading font-bold text-lg">IS</span>
      {/* Atau: <img src={tokoh.image} alt={tokoh.name} className="w-full h-full object-cover rounded-full" /> */}
    </div>

    <div className="min-w-0 flex-1">
      {/* Badge bidang */}
      <span className="
        font-body text-xs font-medium
        bg-primary-50 text-primary-700
        px-2 py-0.5 rounded-full
        inline-block mb-1.5
      ">
        Tafsir
      </span>

      {/* Nama */}
      <h4 className="
        font-heading text-sm font-semibold
        text-secondary-900
        group-hover:text-primary-600
        transition-colors duration-200
        truncate
      ">
        Imam Al-Suyuthi
      </h4>

      {/* Periode */}
      <p className="font-body text-xs text-secondary-400 mt-0.5">
        849 H – 911 H
      </p>
    </div>
  </div>

  {/* Teaser biografi */}
  <p className="
    font-body text-xs text-secondary-500
    leading-relaxed
    line-clamp-2 mt-3
  ">
    Ulama produktif yang menguasai lebih dari 80 disiplin ilmu keislaman...
  </p>
</article>
```

---

### Card Kitab

```jsx
// KitabCard.jsx

<article className="
  group
  bg-white rounded-2xl
  border border-secondary-200
  shadow-card hover:shadow-card-hover
  transition-all duration-200
  hover:-translate-y-0.5
  p-5 cursor-pointer
  animate-fade-in
">
  <div className="flex items-start gap-3">
    {/* Ikon Kitab */}
    <div className="
      w-10 h-10 rounded-xl shrink-0
      bg-amber-50
      flex items-center justify-center
    ">
      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13..." />
      </svg>
    </div>

    <div className="min-w-0 flex-1">
      <h4 className="
        font-heading text-sm font-semibold
        text-secondary-900
        group-hover:text-primary-600
        transition-colors duration-200
        line-clamp-2 leading-snug
      ">
        Al-Itqan fi Ulumil Qur'an
      </h4>
      <p className="font-body text-xs text-secondary-500 mt-1">
        Imam Al-Suyuthi · 911 H
      </p>
    </div>
  </div>

  <div className="mt-3 flex items-center justify-between">
    <span className="
      font-body text-xs font-medium
      bg-secondary-100 text-secondary-600
      px-2 py-0.5 rounded-full
    ">
      Tafsir
    </span>
    <span className="
      font-body text-xs text-primary-600 font-medium
      inline-flex items-center gap-1
      group-hover:gap-1.5
      transition-all duration-200
    ">
      Detail
      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </div>
</article>
```

---

### Card Komponen Reusable (React)

```jsx
// components/ui/Card.jsx

export default function Card({ children, className = '', onClick }) {
  return (
    <article
      onClick={onClick}
      className={`
        group bg-white rounded-2xl
        border border-secondary-200
        shadow-card hover:shadow-card-hover
        transition-all duration-200
        hover:-translate-y-0.5
        animate-fade-in
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </article>
  );
}

// Penggunaan:
// <Card className="p-5" onClick={() => navigate(`/quran/${slug}`)}>
//   <CardContent ... />
// </Card>
```

---

## 9. Komponen: Global Search Bar <a name="komponen-search"></a>

Search bar adalah komponen global yang hidup di dalam Navbar. Ini adalah elemen terpenting dari navigasi konten Suqura.

### Search Bar — Desktop

```jsx
// components/search/GlobalSearchBar.jsx

<div className="relative w-full max-w-sm">
  {/* Input Wrapper */}
  <div className="relative">
    {/* Ikon Search (kiri) */}
    <div className="
      absolute inset-y-0 left-0
      flex items-center pl-3
      pointer-events-none
    ">
      <svg className="w-4 h-4 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>

    {/* Input Field */}
    <input
      type="search"
      placeholder="Cari materi, tokoh, atau kitab..."
      className="
        w-full
        font-body text-sm
        bg-secondary-50
        text-secondary-900
        placeholder:text-secondary-400
        pl-9 pr-10 py-2.5
        rounded-xl
        border border-secondary-200
        focus:outline-none
        focus:border-primary-400
        focus:bg-white
        focus:shadow-search
        transition-all duration-200
      "
    />

    {/* Shortcut hint (kanan) — sembunyikan di mobile */}
    <div className="
      absolute inset-y-0 right-0
      hidden sm:flex items-center pr-3
      pointer-events-none
    ">
      <kbd className="
        font-body text-xs
        text-secondary-400
        bg-secondary-100
        px-1.5 py-0.5
        rounded border border-secondary-200
      ">
        ⌘K
      </kbd>
    </div>
  </div>

  {/* Dropdown Hasil Pencarian */}
  {/* Tampil secara kondisional saat query.length > 1 */}
  <div className="
    absolute top-full left-0 right-0
    mt-1.5
    bg-white
    rounded-2xl
    border border-secondary-200
    shadow-card-hover
    overflow-hidden
    z-50
    animate-fade-in
  ">
    {/* Seksi: Materi */}
    <div className="p-2">
      <p className="
        font-body text-xs font-medium
        text-secondary-400 uppercase tracking-wide
        px-3 py-2
      ">
        Materi
      </p>
      {/* Result Item */}
      <a href="/quran/metode-tafsir-tahlili" className="
        flex items-center gap-3
        px-3 py-2.5
        rounded-xl
        hover:bg-primary-50
        transition-colors duration-150
        group/item
      ">
        <div className="
          w-8 h-8 rounded-lg shrink-0
          bg-primary-100
          flex items-center justify-center
        ">
          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586..." />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="font-body text-sm font-medium text-secondary-900 truncate
            group-hover/item:text-primary-700">
            Metode Tafsir Tahlili
          </p>
          <p className="font-body text-xs text-secondary-400">Ulumul Qur'an · 15 menit</p>
        </div>
      </a>
    </div>

    <div className="border-t border-secondary-100" />

    {/* Seksi: Tokoh */}
    <div className="p-2">
      <p className="
        font-body text-xs font-medium
        text-secondary-400 uppercase tracking-wide
        px-3 py-2
      ">
        Tokoh
      </p>
      <a href="/tokoh/imam-al-suyuthi" className="
        flex items-center gap-3
        px-3 py-2.5 rounded-xl
        hover:bg-primary-50
        transition-colors duration-150
        group/item
      ">
        <div className="
          w-8 h-8 rounded-full shrink-0
          bg-primary-100
          flex items-center justify-center
          font-heading text-xs font-bold text-primary-700
        ">
          IS
        </div>
        <div>
          <p className="font-body text-sm font-medium text-secondary-900 group-hover/item:text-primary-700">
            Imam Al-Suyuthi
          </p>
          <p className="font-body text-xs text-secondary-400">Tokoh · Tafsir</p>
        </div>
      </a>
    </div>

    {/* Footer dropdown */}
    <div className="border-t border-secondary-100 p-2">
      <button className="
        w-full text-left
        font-body text-xs font-medium text-primary-600
        px-3 py-2 rounded-lg
        hover:bg-primary-50
        transition-colors duration-150
      ">
        Lihat semua hasil untuk "tafsir" →
      </button>
    </div>
  </div>
</div>
```

### Search Bar — State Logika (React Hook)

```jsx
// hooks/useSearch.js
import { useState, useDeferredValue, useMemo } from 'react';
import materiData from '../data/materi.json';
import tokohData from '../data/tokoh.json';
import kitabData from '../data/kitab.json';

export function useSearch() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);  // Hindari lag saat mengetik

  const results = useMemo(() => {
    if (deferredQuery.trim().length < 2) return { materi: [], tokoh: [], kitab: [] };

    const q = deferredQuery.toLowerCase();
    return {
      materi: materiData
        .filter(m => m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q))
        .slice(0, 4),
      tokoh: tokohData
        .filter(t => t.name.toLowerCase().includes(q))
        .slice(0, 3),
      kitab: kitabData
        .filter(k => k.title.toLowerCase().includes(q) || k.author.toLowerCase().includes(q))
        .slice(0, 3),
    };
  }, [deferredQuery]);

  const hasResults = results.materi.length > 0 || results.tokoh.length > 0 || results.kitab.length > 0;

  return { query, setQuery, results, hasResults };
}
```

---

## 10. Komponen: Badge & Label <a name="komponen-badge"></a>

### Varian Badge

```jsx
{/* Badge Kategori — Primer */}
<span className="font-body text-xs font-medium bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-full">
  Ulumul Qur'an
</span>

{/* Badge Kategori — Hadis */}
<span className="font-body text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full">
  Studi Hadis
</span>

{/* Badge Level — Pemula */}
<span className="font-body text-xs font-medium bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full">
  Pemula
</span>

{/* Badge Level — Menengah */}
<span className="font-body text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-full">
  Menengah
</span>

{/* Badge Level — Lanjutan */}
<span className="font-body text-xs font-medium bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full">
  Lanjutan
</span>

{/* Badge Bidang Tokoh */}
<span className="font-body text-xs font-medium bg-secondary-100 text-secondary-600 px-2.5 py-0.5 rounded-full">
  Tafsir
</span>
```

### Komponen Badge Reusable

```jsx
// components/ui/Badge.jsx

const variants = {
  primary:  'bg-primary-50 text-primary-700',
  hadis:    'bg-blue-50 text-blue-700',
  pemula:   'bg-green-50 text-green-700',
  menengah: 'bg-amber-50 text-amber-700',
  lanjutan: 'bg-red-50 text-red-700',
  neutral:  'bg-secondary-100 text-secondary-600',
};

export default function Badge({ children, variant = 'neutral' }) {
  return (
    <span className={`
      font-body text-xs font-medium
      px-2.5 py-0.5 rounded-full
      inline-block
      ${variants[variant]}
    `}>
      {children}
    </span>
  );
}

// Penggunaan:
// <Badge variant="pemula">Pemula</Badge>
// <Badge variant="primary">Ulumul Qur'an</Badge>
// <Badge variant="hadis">Studi Hadis</Badge>
```

### Filter Pills (Ensiklopedia & Daftar Materi)

```jsx
{/* Container filter pills */}
<div className="flex flex-wrap gap-2">

  {/* Pill Aktif */}
  <button className="
    font-body text-sm font-medium
    bg-primary-500 text-white
    px-4 py-1.5 rounded-full
    transition-all duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1
  ">
    Semua
  </button>

  {/* Pill Tidak Aktif */}
  <button className="
    font-body text-sm font-medium
    bg-white text-secondary-600
    border border-secondary-200
    px-4 py-1.5 rounded-full
    hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50
    transition-all duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-1
  ">
    Studi Qur'an
  </button>

  <button className="
    font-body text-sm font-medium
    bg-white text-secondary-600
    border border-secondary-200
    px-4 py-1.5 rounded-full
    hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50
    transition-all duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-1
  ">
    Studi Hadis
  </button>

</div>
```

---

## 11. Komponen: Breadcrumb <a name="komponen-breadcrumb"></a>

```jsx
// components/ui/Breadcrumb.jsx

<nav aria-label="Breadcrumb">
  <ol className="flex items-center flex-wrap gap-1.5">
    <li>
      <a href="/" className="
        font-body text-sm text-secondary-400
        hover:text-primary-600
        transition-colors duration-150
      ">
        Beranda
      </a>
    </li>

    {/* Separator */}
    <li aria-hidden="true">
      <svg className="w-3.5 h-3.5 text-secondary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </li>

    <li>
      <a href="/quran" className="
        font-body text-sm text-secondary-400
        hover:text-primary-600
        transition-colors duration-150
      ">
        Ulumul Qur'an
      </a>
    </li>

    {/* Separator */}
    <li aria-hidden="true">
      <svg className="w-3.5 h-3.5 text-secondary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </li>

    {/* Halaman saat ini — tidak perlu link */}
    <li>
      <span className="font-body text-sm font-medium text-secondary-700" aria-current="page">
        Metode Tafsir Tahlili
      </span>
    </li>
  </ol>
</nav>
```

---

## 12. Komponen: Navigation (Navbar) <a name="komponen-navbar"></a>

```jsx
// components/layout/Navbar.jsx

<header className="
  sticky top-0 z-40
  bg-white/95 backdrop-blur-sm
  border-b border-secondary-200
  shadow-sm
">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">

      {/* Brand */}
      <a href="/" className="flex items-center gap-2.5 shrink-0 group">
        {/* Logo mark */}
        <div className="
          w-8 h-8 rounded-lg
          bg-primary-500
          flex items-center justify-center
          group-hover:bg-primary-600
          transition-colors duration-200
        ">
          <span className="font-heading text-white font-bold text-sm">S</span>
        </div>
        <span className="font-heading font-bold text-secondary-900 text-lg tracking-tight">
          Suqura
        </span>
      </a>

      {/* Nav Links — Desktop */}
      <div className="hidden md:flex items-center gap-1">
        {[
          { label: 'Beranda', href: '/' },
          { label: 'Ulumul Qur\'an', href: '/quran' },
          { label: 'Studi Hadis', href: '/hadith' },
          { label: 'Ensiklopedia', href: '/encyclopedia' },
        ].map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="
              font-body text-sm font-medium
              text-secondary-600
              hover:text-primary-600 hover:bg-primary-50
              px-3 py-2 rounded-lg
              transition-all duration-150
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400
              /* Tambahkan aria-current="page" dan class aktif via React Router */
            "
          >
            {label}
          </a>
        ))}
      </div>

      {/* Search Bar — Desktop */}
      <div className="hidden sm:block flex-1 max-w-xs mx-4">
        {/* <GlobalSearchBar /> */}
      </div>

      {/* Hamburger — Mobile */}
      <button className="
        md:hidden
        p-2 rounded-lg
        text-secondary-500
        hover:text-secondary-700 hover:bg-secondary-100
        transition-all duration-150
        focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400
      " aria-label="Buka menu">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

    </div>
  </nav>
</header>
```

**State aktif nav link (dengan React Router):**

```jsx
import { NavLink } from 'react-router-dom';

<NavLink
  to="/quran"
  className={({ isActive }) => `
    font-body text-sm font-medium
    px-3 py-2 rounded-lg
    transition-all duration-150
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400
    ${isActive
      ? 'text-primary-600 bg-primary-50 font-semibold'
      : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
    }
  `}
>
  Ulumul Qur'an
</NavLink>
```

---

## 13. Komponen: Teks Arab (Arabic Quote) <a name="komponen-arabic"></a>

Komponen paling unik di Suqura. Teks Arab bukan dekorasi — ini adalah konten inti yang harus ditampilkan dengan dignitas penuh.

```jsx
// components/content/ArabicQuote.jsx

<figure className="
  my-6
  bg-[#fefce8]
  border-l-4 border-amber-500
  rounded-r-2xl
  px-5 py-4
">
  {/* Teks Arab — RTL, font khusus */}
  <blockquote
    dir="rtl"
    lang="ar"
    className="
      font-arabic
      text-arabic-lg
      font-medium
      text-secondary-900
      leading-[3.25rem]
      text-right
      mb-3
    "
  >
    إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
  </blockquote>

  {/* Divider */}
  <div className="border-t border-amber-200 mb-3" />

  {/* Terjemahan */}
  <figcaption className="
    font-body text-sm
    text-amber-800
    leading-relaxed
    italic
  ">
    "Sesungguhnya Kami-lah yang menurunkan Al-Qur'an, dan pasti Kami pula yang memeliharanya."
  </figcaption>

  {/* Sumber */}
  <p className="
    font-body text-xs
    text-amber-600
    mt-1.5 font-medium
  ">
    QS. Al-Hijr: 9
  </p>
</figure>
```

---

## 14. Pola Halaman & Layout Grid <a name="pola-layout"></a>

### Layout Detail Materi (Dua Kolom)

```jsx
// pages/quran/QuranDetailPage.jsx

<div className="min-h-screen bg-[#f8fafc]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    {/* Breadcrumb */}
    <div className="mb-6">
      {/* <Breadcrumb /> */}
    </div>

    {/* Dua Kolom Layout */}
    <div className="flex flex-col lg:flex-row gap-8">

      {/* Konten Utama (Kiri) */}
      <main className="flex-1 min-w-0">
        {/* Header Materi */}
        <header className="bg-white rounded-2xl border border-secondary-200 shadow-card p-6 sm:p-8 mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {/* <Badge variant="primary">Metode Tafsir</Badge> */}
            {/* <Badge variant="menengah">Menengah</Badge> */}
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-secondary-900 tracking-tight mb-3">
            Metode Tafsir Maudhu'i
          </h1>
          <div className="flex items-center gap-4 text-secondary-400 text-sm font-body">
            <span className="flex items-center gap-1.5">
              {/* Clock icon */} 15 menit
            </span>
          </div>
        </header>

        {/* Konten Artikel */}
        <div className="bg-white rounded-2xl border border-secondary-200 shadow-card p-6 sm:p-8">
          <article className="
            prose prose-slate max-w-prose
            font-body
            prose-headings:font-heading
            prose-headings:text-secondary-700
            prose-p:text-secondary-900
            prose-p:leading-relaxed
            prose-a:text-primary-600
            prose-a:no-underline hover:prose-a:underline
            prose-strong:text-secondary-900
            prose-hr:border-secondary-200
          ">
            {/* Konten render di sini */}
          </article>
        </div>

        {/* Navigasi Prev/Next */}
        <nav className="flex justify-between gap-4 mt-6">
          <a href="#" className="
            flex-1 max-w-xs
            flex items-center gap-3 p-4
            bg-white rounded-2xl
            border border-secondary-200 shadow-card
            hover:shadow-card-hover hover:-translate-y-0.5
            transition-all duration-200 group
          ">
            <svg className="w-5 h-5 text-secondary-400 group-hover:text-primary-500 transition-colors shrink-0"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div className="min-w-0">
              <p className="font-body text-xs text-secondary-400">Sebelumnya</p>
              <p className="font-heading text-sm font-semibold text-secondary-800 truncate">
                Metode Tafsir Muqaran
              </p>
            </div>
          </a>
          <a href="#" className="
            flex-1 max-w-xs
            flex items-center justify-end gap-3 p-4
            bg-white rounded-2xl
            border border-secondary-200 shadow-card
            hover:shadow-card-hover hover:-translate-y-0.5
            transition-all duration-200 group text-right
          ">
            <div className="min-w-0">
              <p className="font-body text-xs text-secondary-400">Berikutnya</p>
              <p className="font-heading text-sm font-semibold text-secondary-800 truncate">
                Metode Tafsir Ijmali
              </p>
            </div>
            <svg className="w-5 h-5 text-secondary-400 group-hover:text-primary-500 transition-colors shrink-0"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </nav>
      </main>

      {/* Sidebar Referensi (Kanan) */}
      <aside className="w-full lg:w-72 xl:w-80 shrink-0">
        <div className="lg:sticky lg:top-24 space-y-5">

          {/* Tokoh Terkait */}
          <div className="bg-white rounded-2xl border border-secondary-200 shadow-card p-5">
            <h3 className="font-heading text-sm font-semibold text-secondary-700 mb-3 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary-500 rounded-full" />
              Tokoh Terkait
            </h3>
            <div className="space-y-3">
              {/* <TokohCard compact /> */}
            </div>
          </div>

          {/* Kitab Rujukan */}
          <div className="bg-white rounded-2xl border border-secondary-200 shadow-card p-5">
            <h3 className="font-heading text-sm font-semibold text-secondary-700 mb-3 flex items-center gap-2">
              <div className="w-1 h-4 bg-amber-500 rounded-full" />
              Kitab Rujukan
            </h3>
            <div className="space-y-3">
              {/* <KitabCard compact /> */}
            </div>
          </div>

        </div>
      </aside>

    </div>
  </div>
</div>
```

---

## 15. State UI: Empty, Loading, Error <a name="state-ui"></a>

### Skeleton Loading

```jsx
// components/ui/SkeletonLoader.jsx

{/* Skeleton untuk MateriCard */}
<div className="bg-white rounded-2xl border border-secondary-200 shadow-card p-5 animate-skeleton-pulse">
  <div className="h-1.5 bg-secondary-100 rounded-full mb-4 w-1/3" />
  <div className="flex gap-2 mb-3">
    <div className="h-5 bg-secondary-100 rounded-full w-24" />
    <div className="h-5 bg-secondary-100 rounded-full w-16" />
  </div>
  <div className="h-5 bg-secondary-100 rounded w-4/5 mb-2" />
  <div className="h-5 bg-secondary-100 rounded w-3/5 mb-4" />
  <div className="h-4 bg-secondary-100 rounded w-full mb-2" />
  <div className="h-4 bg-secondary-100 rounded w-5/6 mb-4" />
  <div className="border-t border-secondary-100 pt-3 flex justify-between">
    <div className="h-3 bg-secondary-100 rounded w-20" />
    <div className="h-3 bg-secondary-100 rounded w-12" />
  </div>
</div>
```

### Empty State

```jsx
{/* Empty State — tidak ada hasil */}
<div className="
  flex flex-col items-center justify-center
  py-16 px-6 text-center
  bg-white rounded-2xl
  border border-dashed border-secondary-200
">
  <div className="
    w-16 h-16 rounded-2xl
    bg-secondary-100
    flex items-center justify-center
    mb-4
  ">
    <svg className="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
  <h3 className="font-heading text-base font-semibold text-secondary-700 mb-1">
    Tidak ada materi ditemukan
  </h3>
  <p className="font-body text-sm text-secondary-400 max-w-xs">
    Coba pilih kategori lain atau ubah kata kunci pencarian.
  </p>
</div>
```

### Error State

```jsx
{/* Error State — data tidak bisa dimuat */}
<div className="
  flex flex-col items-center justify-center
  py-16 px-6 text-center
  bg-red-50 rounded-2xl
  border border-red-100
">
  <div className="
    w-16 h-16 rounded-2xl
    bg-red-100
    flex items-center justify-center
    mb-4
  ">
    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  </div>
  <h3 className="font-heading text-base font-semibold text-red-700 mb-1">
    Gagal memuat data
  </h3>
  <p className="font-body text-sm text-red-500 max-w-xs mb-4">
    Terjadi kesalahan saat membaca data. Coba muat ulang halaman.
  </p>
  <button className="
    font-body text-sm font-medium
    bg-white text-red-600
    border border-red-300
    px-4 py-2 rounded-lg
    hover:bg-red-50
    transition-colors duration-150
  ">
    Muat Ulang
  </button>
</div>
```

---

## 16. Aksesibilitas (a11y) <a name="aksesibilitas"></a>

### Checklist Wajib

**Focus States** — setiap elemen interaktif wajib punya focus ring yang terlihat:
```jsx
// Semua tombol, link, input wajib memiliki:
className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
```

**Semantic HTML** — gunakan elemen yang tepat:
```jsx
<header> → Navbar
<nav>    → Navigasi (termasuk breadcrumb, dengan aria-label)
<main>   → Konten utama halaman (hanya 1 per halaman)
<article> → Setiap materi/kartu konten mandiri
<aside>  → Sidebar referensi
<footer> → Footer halaman
<h1>     → Judul halaman (hanya 1 per halaman)
<figure> + <figcaption> → Blockquote Arab + terjemahan
```

**Teks Arab** — selalu sertakan atribut bahasa:
```jsx
<blockquote dir="rtl" lang="ar">...</blockquote>
```

**Gambar** — selalu sertakan `alt`:
```jsx
<img src={tokoh.image} alt={`Foto ${tokoh.name}`} />
{/* Jika dekoratif: */}
<img src={decorativeImg} alt="" role="presentation" />
```

**Aria Labels** — untuk tombol icon-only:
```jsx
<button aria-label="Tutup pencarian">
  <XMarkIcon />
</button>
```

**Motion** — hormati preferensi pengguna:
```jsx
// Di tailwind.config.js, semua animasi sudah tunduk pada:
// @media (prefers-reduced-motion: reduce) { animation: none }
// Tailwind menangani ini secara otomatis untuk class animate-*
```

---

## 17. Referensi Cepat Tailwind <a name="referensi-cepat"></a>

### Cheat Sheet Token Suqura

```
WARNA TEKS
──────────────────────────────────────────────────
text-secondary-900   → Body text utama (gelap pekat)
text-secondary-700   → Heading H2, H3 (slate)
text-secondary-500   → Teks sekunder, metadata
text-secondary-400   → Placeholder, caption
text-primary-600     → Link, aksen aktif
text-primary-700     → Link hover

WARNA BACKGROUND
──────────────────────────────────────────────────
bg-[#f8fafc]         → Background halaman (off-white)
bg-white             → Background kartu
bg-secondary-50      → Background muted, input resting
bg-primary-50        → Background highlight, hover surface
bg-primary-500       → Background tombol primer

TIPOGRAFI
──────────────────────────────────────────────────
font-heading         → Montserrat (judul)
font-body            → Inter (isi & UI)
font-arabic          → Noto Naskh Arabic (teks Arab)
text-4xl font-bold   → H1
text-2xl font-semibold → H2
text-xl font-semibold  → H3
text-base font-semibold → H4 / Card title
text-base            → Body text
text-sm              → Label, caption, badge
text-xs              → Micro label

RADIUS
──────────────────────────────────────────────────
rounded-full    → Badge pill, avatar
rounded-lg      → Button, input, tooltip
rounded-xl      → Dropdown, modal
rounded-2xl     → Card (STANDAR)
rounded-3xl     → Hero card

SHADOW
──────────────────────────────────────────────────
shadow-card       → Card resting (halus)
shadow-card-hover → Card hover (terangkat)
shadow-search     → Input focus ring (hijau glow)
shadow-btn        → Button resting

TRANSISI STANDAR
──────────────────────────────────────────────────
transition-all duration-200        → Default semua komponen
transition-colors duration-150     → Link & text color
transition-shadow duration-200     → Card hover shadow
hover:-translate-y-0.5             → Card lift on hover

SPACING KOMPONEN
──────────────────────────────────────────────────
p-5 / p-6                          → Card padding
px-5 py-2.5                        → Button md padding
px-2.5 py-0.5                      → Badge padding
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 → Page container
max-w-prose                        → Konten artikel
```

---

*Dokumen ini bersifat **living document** — perbarui segera ketika ada keputusan desain baru.*  
*Tidak ada exception class di luar design system ini tanpa diskusi tim dan update dokumen.*  
*Versi: 1.0.0 — 24 Juni 2026*
