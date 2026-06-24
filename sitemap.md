# Sitemap — (Nama web)
### *Smart Encyclopedia for Qur'an & Hadith Studies*

**Versi:** 1.0.0  
**Tanggal:** 24 Juni 2026  
**Tech Stack:** React (SPA) + React Router v6 + Tailwind CSS  
**Tipe Routing:** Client-side routing (semua path di-serve ke `index.html`)  
**Audience Dokumen:** Frontend Engineering Team

---

## Daftar Isi

1. [Konvensi Dokumen](#konvensi)
2. [Komponen Global](#komponen-global)
3. [Pohon Sitemap Lengkap](#pohon-sitemap)
4. [Definisi Route & Halaman](#definisi-route)
5. [Diagram Alur Navigasi Antar Halaman](#diagram-alur)
6. [Catatan Implementasi Frontend](#catatan-implementasi)

---

## 1. Konvensi Dokumen <a name="konvensi"></a>

| Simbol / Notasi | Makna |
|----------------|-------|
| `[ ]` | Route URL / path |
| `( )` | Nama komponen React / file `.jsx` |
| `🌐` | Komponen global — tersedia di semua halaman |
| `⚡` | Route dinamis — menggunakan parameter URL |
| `🔗` | Halaman memiliki cross-link ke halaman lain |
| `📦` | Data bersumber dari Local JSON |
| `🔍` | Terintegrasi dengan Global Search |
| `lazy` | Komponen di-load dengan `React.lazy()` untuk code-splitting |

**Konvensi Penamaan Slug:**
- Semua huruf kecil (*lowercase*)
- Kata dipisah dengan tanda hubung (`-`)
- Tidak menggunakan karakter khusus selain `-`
- Contoh: `pengertian-ulumul-quran`, `imam-al-bukhari`

---

## 2. Komponen Global <a name="komponen-global"></a>

Komponen berikut di-render di **setiap halaman** melalui `<RootLayout>` dan tidak bergantung pada route aktif.

```
🌐 KOMPONEN GLOBAL
│
├── 🌐 Navbar                          (components/layout/Navbar.jsx)
│   ├── Logo & Brand "Suqura"          → navigasi ke [/]
│   ├── Link Navigasi Utama
│   │   ├── Beranda                    → [/]
│   │   ├── Ulumul Qur'an              → [/quran]
│   │   ├── Studi Hadis                → [/hadith]
│   │   └── Ensiklopedia               → [/encyclopedia]
│   ├── 🔍 Global Search Bar           (components/search/GlobalSearchBar.jsx)
│   │   ├── Input field — placeholder: "Cari materi, tokoh, atau kitab..."
│   │   ├── Pencarian real-time        → memfilter materi.json + tokoh.json + kitab.json
│   │   ├── Dropdown hasil instan      (components/search/SearchDropdown.jsx)
│   │   │   ├── Seksi "Materi"         → klik → [/quran/:slug] atau [/hadith/:slug]
│   │   │   ├── Seksi "Tokoh"          → klik → [/tokoh/:slug]
│   │   │   └── Seksi "Kitab"          → klik → [/kitab/:slug]
│   │   └── Halaman hasil penuh        → [/search?q=...]  (opsional, jika waktu memungkinkan)
│   └── Hamburger Menu                 (mobile only, < 768px)
│
└── 🌐 Footer                          (components/layout/Footer.jsx)
    ├── Brand tagline Suqura
    ├── Link cepat ke modul utama
    └── Keterangan hak cipta & lomba
```

> **Catatan Implementasi — Global Search:**  
> Implementasi menggunakan pencarian berbasis string sederhana (`.includes()` atau `fuse.js` untuk fuzzy search) langsung di sisi klien terhadap data JSON yang sudah di-import. Tidak memerlukan API endpoint. Pertimbangkan `useDeferredValue()` dari React untuk menghindari lag saat mengetik cepat.

---

## 3. Pohon Sitemap Lengkap <a name="pohon-sitemap"></a>

```
SUQURA — Smart Encyclopedia for Qur'an & Hadith Studies
│
├── [/]  ─────────────────────────────────────────────────── BERANDA (DASHBOARD)
│   └── (pages/HomePage.jsx)
│
├── [/quran]  ────────────────────────────────────────────── MODUL ULUMUL QUR'AN
│   ├── (pages/quran/QuranListPage.jsx)
│   │
│   └── [/quran/:slug]  ─────────────────────────────────── DETAIL MATERI QUR'AN  ⚡
│       └── (pages/quran/QuranDetailPage.jsx)
│           │
│           ├── Slug: pengertian-ulumul-quran
│           ├── Slug: sejarah-ulumul-quran
│           ├── Slug: metode-tafsir-tahlili
│           ├── Slug: metode-tafsir-ijmali
│           ├── Slug: metode-tafsir-muqaran
│           └── Slug: metode-tafsir-maudhui
│
├── [/hadith]  ───────────────────────────────────────────── MODUL STUDI HADIS
│   ├── (pages/hadith/HadithListPage.jsx)
│   │
│   └── [/hadith/:slug]  ────────────────────────────────── DETAIL MATERI HADIS  ⚡
│       └── (pages/hadith/HadithDetailPage.jsx)
│           │
│           ├── Slug: pengertian-hadis
│           ├── Slug: sejarah-ilmu-hadis
│           ├── Slug: kritik-sanad-hadis
│           └── Slug: kritik-matan-hadis
│
├── [/encyclopedia]  ─────────────────────────────────────── ENSIKLOPEDIA TOKOH & KITAB
│   ├── (pages/encyclopedia/EncyclopediaIndexPage.jsx)
│   │
│   ├── [/tokoh/:slug]  ─────────────────────────────────── DETAIL TOKOH  ⚡
│   │   └── (pages/encyclopedia/TokohDetailPage.jsx)
│   │       │
│   │       ├── Slug: imam-al-suyuthi
│   │       ├── Slug: imam-al-zarkasyi
│   │       ├── Slug: imam-al-bukhari
│   │       ├── Slug: imam-muslim
│   │       └── Slug: ibn-hajar-al-asqalani
│   │
│   └── [/kitab/:slug]  ─────────────────────────────────── DETAIL KITAB  ⚡
│       └── (pages/encyclopedia/KitabDetailPage.jsx)
│           │
│           ├── Slug: al-itqan-fi-ulumil-quran
│           ├── Slug: al-burhan-fi-ulumil-quran
│           ├── Slug: shahih-al-bukhari
│           ├── Slug: shahih-muslim
│           └── Slug: muqaddimah-ibn-al-shalah
│
└── [/*]  ────────────────────────────────────────────────── HALAMAN 404
    └── (pages/NotFoundPage.jsx)
```

---

## 4. Definisi Route & Halaman <a name="definisi-route"></a>

---

### 4.1 Beranda — Dashboard

| Atribut | Detail |
|---------|--------|
| **Route** | `/` |
| **Komponen** | `pages/HomePage.jsx` |
| **Sumber Data** | `materi.json`, `tokoh.json`, `kitab.json` 📦 |
| **Code Split** | Tidak (initial bundle — dimuat pertama) |

**Konten & Elemen Halaman:**

```
[/]  HomePage
│
├── Hero Section
│   ├── Nama platform "Suqura" + tagline
│   └── CTA Primer: "Mulai Belajar"  → [/quran]
│
├── Kartu Ringkasan Modul  (2 kolom)
│   ├── Kartu Ulumul Qur'an
│   │   ├── Jumlah materi tersedia
│   │   ├── Sub-topik: Pengertian, Sejarah, Metode Tafsir
│   │   └── Tombol "Jelajahi"  → [/quran]
│   └── Kartu Studi Hadis
│       ├── Jumlah materi tersedia
│       ├── Sub-topik: Pengertian, Sejarah, Kritik Hadis
│       └── Tombol "Jelajahi"  → [/hadith]
│
├── Sorotan Materi Terbaru  (Featured Materials)
│   ├── 3–4 kartu materi pilihan (hardcoded atau sorted by id terbaru)
│   └── Setiap kartu  → [/quran/:slug] atau [/hadith/:slug]
│
├── Akses Cepat Ensiklopedia
│   ├── Thumbnail grid: 3 Tokoh + 3 Kitab
│   ├── Tokoh card  → [/tokoh/:slug]
│   ├── Kitab card  → [/kitab/:slug]
│   └── Tombol "Lihat Semua"  → [/encyclopedia]
│
└── Statistik Platform  (statis / hardcoded untuk lomba)
    ├── "X Materi tersedia"
    ├── "Y Tokoh terabadikan"
    └── "Z Kitab direferensikan"
```

---

### 4.2 Modul Ulumul Qur'an — Halaman Daftar

| Atribut | Detail |
|---------|--------|
| **Route** | `/quran` |
| **Komponen** | `pages/quran/QuranListPage.jsx` |
| **Sumber Data** | `materi.json` (filter: `category === "ulumul-quran"`) 📦 |
| **Code Split** | `lazy` — dimuat saat pertama kali mengunjungi `/quran` |

**Konten & Elemen Halaman:**

```
[/quran]  QuranListPage
│
├── Header Halaman
│   ├── Judul: "Ulumul Qur'an"
│   └── Deskripsi singkat modul
│
├── Panel Filter Kategori  (Tab / Pill Button)
│   ├── [Semua]          → tampilkan semua materi ulumul-quran
│   ├── [Pengertian]     → filter tag: "pengertian"
│   ├── [Sejarah]        → filter tag: "sejarah"
│   └── [Metode Tafsir]  → filter tag: "metode-tafsir"
│
└── Grid Kartu Materi
    ├── MateriCard (reusable)  → [/quran/:slug]
    │   ├── Judul materi
    │   ├── Deskripsi singkat (truncate 2 baris)
    │   ├── Badge kategori + Badge level
    │   └── Estimasi waktu baca
    └── State kosong: ilustrasi + teks "Tidak ada materi ditemukan"
```

**Slug Materi yang Tersedia (`/quran/:slug`):**

| Slug | Judul | Tag Kategori |
|------|-------|--------------|
| `pengertian-ulumul-quran` | Pengertian Ulumul Qur'an | `pengertian` |
| `sejarah-ulumul-quran` | Sejarah Perkembangan Ulumul Qur'an | `sejarah` |
| `metode-tafsir-tahlili` | Metode Tafsir Tahlili | `metode-tafsir` |
| `metode-tafsir-ijmali` | Metode Tafsir Ijmali | `metode-tafsir` |
| `metode-tafsir-muqaran` | Metode Tafsir Muqaran | `metode-tafsir` |
| `metode-tafsir-maudhui` | Metode Tafsir Maudhu'i | `metode-tafsir` |

---

### 4.3 Modul Ulumul Qur'an — Halaman Detail

| Atribut | Detail |
|---------|--------|
| **Route** | `/quran/:slug` |
| **Komponen** | `pages/quran/QuranDetailPage.jsx` |
| **Sumber Data** | `materi.json` (lookup: `slug === params.slug`) 📦 |
| **Cross-link** | → `tokoh.json`, `kitab.json` 🔗 |
| **Code Split** | `lazy` |

**Konten & Elemen Halaman:**

```
[/quran/:slug]  QuranDetailPage
│
├── Breadcrumb
│   └── Beranda  [/]  →  Ulumul Qur'an  [/quran]  →  {Judul Materi}
│
├── Header Materi
│   ├── Judul (H1)
│   ├── Badge: Kategori + Level + Estimasi Baca
│   └── Divider dekoratif
│
├── Layout Dua Kolom  (desktop: 70%/30% | mobile: stack)
│   │
│   ├── Kolom Kiri — Konten Utama
│   │   ├── Daftar Isi (Table of Contents)
│   │   │   └── Auto-generate dari heading dalam content.sections
│   │   ├── Seksi-seksi konten dari content.sections[]
│   │   │   ├── Heading H2 per seksi
│   │   │   ├── Body text (render dari string, dukung HTML sederhana)
│   │   │   └── Blockquote Arab (jika ada quoteArabic)
│   │   │       ├── Teks Arab  (RTL, font Noto Naskh Arabic)
│   │   │       └── Terjemahan teks (LTR)
│   │   └── Progress Bar Baca  (sticky di atas viewport)
│   │
│   └── Kolom Kanan — Panel Referensi  (sticky di desktop)
│       ├── 🔗 Kartu Tokoh Terkait
│       │   ├── Judul seksi: "Tokoh Terkait"
│       │   ├── Data dari: getTokohByIds(content.relatedTokohIds)
│       │   └── Setiap kartu  → [/tokoh/:slug]
│       └── 🔗 Kartu Kitab Terkait
│           ├── Judul seksi: "Kitab Rujukan"
│           ├── Data dari: getKitabByIds(content.relatedKitabIds)
│           └── Setiap kartu  → [/kitab/:slug]
│
└── Footer Materi
    ├── Navigasi Prev / Next materi dalam modul yang sama
    └── Tombol "Kembali ke Daftar Materi"  → [/quran]
```

---

### 4.4 Modul Studi Hadis — Halaman Daftar

| Atribut | Detail |
|---------|--------|
| **Route** | `/hadith` |
| **Komponen** | `pages/hadith/HadithListPage.jsx` |
| **Sumber Data** | `materi.json` (filter: `category === "studi-hadis"`) 📦 |
| **Code Split** | `lazy` |

**Konten & Elemen Halaman:**

```
[/hadith]  HadithListPage
│
├── Header Halaman
│   ├── Judul: "Studi Hadis"
│   └── Deskripsi singkat modul
│
├── Panel Filter Kategori  (Tab / Pill Button)
│   ├── [Semua]         → tampilkan semua materi studi-hadis
│   ├── [Pengertian]    → filter tag: "pengertian"
│   ├── [Sejarah]       → filter tag: "sejarah"
│   └── [Kritik Hadis]  → filter tag: "kritik-hadis"
│
└── Grid Kartu Materi
    └── MateriCard (komponen yang sama dengan QuranListPage)  → [/hadith/:slug]
```

**Slug Materi yang Tersedia (`/hadith/:slug`):**

| Slug | Judul | Tag Kategori |
|------|-------|--------------|
| `pengertian-hadis` | Pengertian Hadis, Sunnah, dan Atsar | `pengertian` |
| `sejarah-ilmu-hadis` | Sejarah Perkembangan Ilmu Hadis | `sejarah` |
| `kritik-sanad-hadis` | Kritik Sanad dalam Ilmu Hadis | `kritik-hadis` |
| `kritik-matan-hadis` | Kritik Matan dalam Ilmu Hadis | `kritik-hadis` |

---

### 4.5 Modul Studi Hadis — Halaman Detail

| Atribut | Detail |
|---------|--------|
| **Route** | `/hadith/:slug` |
| **Komponen** | `pages/hadith/HadithDetailPage.jsx` |
| **Sumber Data** | `materi.json` (lookup: `slug === params.slug`) 📦 |
| **Cross-link** | → `tokoh.json`, `kitab.json` 🔗 |
| **Code Split** | `lazy` |

> **Catatan:** Struktur layout `HadithDetailPage` identik dengan `QuranDetailPage`. Pertimbangkan untuk mengekstrak keduanya menjadi satu komponen generik `MateriDetailLayout.jsx` yang menerima `category` sebagai prop, untuk menghindari duplikasi kode.

```
[/hadith/:slug]  HadithDetailPage
│
├── Breadcrumb
│   └── Beranda  [/]  →  Studi Hadis  [/hadith]  →  {Judul Materi}
│
├── [Struktur identik dengan QuranDetailPage — lihat 4.3]
│   └── Perbedaan: Breadcrumb mengarah ke [/hadith]
│       dan tombol "Kembali" mengarah ke [/hadith]
│
└── Footer Materi
    ├── Navigasi Prev / Next materi dalam modul Studi Hadis
    └── Tombol "Kembali ke Daftar Materi"  → [/hadith]
```

---

### 4.6 Ensiklopedia — Halaman Indeks Terpadu

| Atribut | Detail |
|---------|--------|
| **Route** | `/encyclopedia` |
| **Komponen** | `pages/encyclopedia/EncyclopediaIndexPage.jsx` |
| **Sumber Data** | `tokoh.json` + `kitab.json` 📦 |
| **Code Split** | `lazy` |

**Konten & Elemen Halaman:**

```
[/encyclopedia]  EncyclopediaIndexPage
│
├── Header Halaman
│   ├── Judul: "Ensiklopedia Tokoh & Kitab"
│   └── Deskripsi: indeks terpadu ulama dan karya rujukan
│
├── Filter Cepat (Quick Filter Buttons)  ← FITUR UTAMA
│   ├── [Semua]              → tampilkan tokoh + kitab tanpa filter
│   ├── [Studi Qur'an]       → tokoh/kitab dengan field/category: "Tafsir"
│   └── [Studi Hadis]        → tokoh/kitab dengan field/category: "Hadis"
│
├── Seksi Tokoh (Figures)
│   ├── Sub-judul: "Tokoh & Ulama"
│   ├── Grid kartu TokohCard
│   │   ├── Avatar / foto (placeholder jika tidak ada)
│   │   ├── Nama tokoh
│   │   ├── Periode hidup
│   │   ├── Badge bidang (Tafsir / Hadis)
│   │   └── Klik → [/tokoh/:slug]
│   └── State kosong jika filter tidak menghasilkan hasil
│
└── Seksi Kitab (Books)
    ├── Sub-judul: "Kitab & Karya"
    ├── Grid kartu KitabCard
    │   ├── Ikon/ilustrasi kitab (generik)
    │   ├── Judul kitab
    │   ├── Nama pengarang
    │   ├── Badge kategori (Tafsir / Hadis / Ushul)
    │   └── Klik → [/kitab/:slug]
    └── State kosong jika filter tidak menghasilkan hasil
```

---

### 4.7 Ensiklopedia — Halaman Detail Tokoh

| Atribut | Detail |
|---------|--------|
| **Route** | `/tokoh/:slug` |
| **Komponen** | `pages/encyclopedia/TokohDetailPage.jsx` |
| **Sumber Data** | `tokoh.json` (lookup: `slug === params.slug`) 📦 |
| **Cross-link** | → `materi.json`, `kitab.json` 🔗 |
| **Code Split** | `lazy` |

**Slug Tokoh yang Tersedia:**

| Slug | Nama Tokoh | Bidang |
|------|-----------|--------|
| `imam-al-suyuthi` | Imam Jalaluddin Al-Suyuthi | Tafsir |
| `imam-al-zarkasyi` | Imam Badruddin Al-Zarkasyi | Tafsir |
| `imam-al-bukhari` | Imam Muhammad bin Ismail Al-Bukhari | Hadis |
| `imam-muslim` | Imam Muslim bin Al-Hajjaj | Hadis |
| `ibn-hajar-al-asqalani` | Ibnu Hajar Al-Asqalani | Hadis |

**Konten & Elemen Halaman:**

```
[/tokoh/:slug]  TokohDetailPage
│
├── Breadcrumb
│   └── Beranda [/]  →  Ensiklopedia [/encyclopedia]  →  {Nama Tokoh}
│
├── Header Profil Tokoh
│   ├── Avatar / Foto tokoh
│   ├── Nama lengkap (H1)
│   ├── Badge bidang keahlian
│   └── Periode hidup (Hijriah & Masehi)
│
├── Biografi Lengkap
│   └── Teks dari tokoh.biography (render paragraf)
│
├── Karya Utama
│   └── Daftar dari tokoh.majorWorks[]
│       └── Setiap karya yang ada di kitab.json → [/kitab/:slug]
│
├── 🔗 Materi Terkait
│   ├── Judul seksi: "Pelajari Materi Terkait"
│   ├── Data dari: getMateriByIds(tokoh.relatedMateriIds)
│   └── Setiap kartu → [/quran/:slug] atau [/hadith/:slug]
│
└── Footer
    └── Tombol "Kembali ke Ensiklopedia"  → [/encyclopedia]
```

---

### 4.8 Ensiklopedia — Halaman Detail Kitab

| Atribut | Detail |
|---------|--------|
| **Route** | `/kitab/:slug` |
| **Komponen** | `pages/encyclopedia/KitabDetailPage.jsx` |
| **Sumber Data** | `kitab.json` (lookup: `slug === params.slug`) 📦 |
| **Cross-link** | → `tokoh.json`, `materi.json` 🔗 |
| **Code Split** | `lazy` |

**Slug Kitab yang Tersedia:**

| Slug | Judul Kitab | Pengarang | Kategori |
|------|-------------|-----------|----------|
| `al-itqan-fi-ulumil-quran` | Al-Itqan fi Ulumil Qur'an | Imam Al-Suyuthi | Tafsir |
| `al-burhan-fi-ulumil-quran` | Al-Burhan fi Ulumil Qur'an | Imam Al-Zarkasyi | Tafsir |
| `shahih-al-bukhari` | Shahih Al-Bukhari | Imam Al-Bukhari | Hadis |
| `shahih-muslim` | Shahih Muslim | Imam Muslim | Hadis |
| `muqaddimah-ibn-al-shalah` | Muqaddimah Ibnu Al-Shalah | Ibnu Al-Shalah | Hadis |

**Konten & Elemen Halaman:**

```
[/kitab/:slug]  KitabDetailPage
│
├── Breadcrumb
│   └── Beranda [/]  →  Ensiklopedia [/encyclopedia]  →  {Judul Kitab}
│
├── Header Kitab
│   ├── Ikon kitab (generik / ilustrasi)
│   ├── Judul kitab lengkap (H1)
│   ├── Badge kategori (Tafsir / Hadis / Ushul)
│   └── Tahun penulisan
│
├── Informasi Pengarang
│   ├── Nama pengarang (teks)
│   └── Jika kitab.authorId ada → Kartu mini tokoh  → [/tokoh/:slug]
│
├── Deskripsi & Metodologi Kitab
│   └── Teks dari kitab.description
│
├── 🔗 Materi Terkait
│   ├── Judul seksi: "Dibahas Dalam Materi"
│   ├── Data dari: getMateriByIds(kitab.relatedMateriIds)
│   └── Setiap kartu → [/quran/:slug] atau [/hadith/:slug]
│
└── Footer
    └── Tombol "Kembali ke Ensiklopedia"  → [/encyclopedia]
```

---

### 4.9 Halaman 404 — Not Found

| Atribut | Detail |
|---------|--------|
| **Route** | `*` (catch-all) |
| **Komponen** | `pages/NotFoundPage.jsx` |
| **Sumber Data** | — |

```
[/*]  NotFoundPage
│
├── Ilustrasi / ikon "404"
├── Pesan: "Halaman tidak ditemukan"
├── Deskripsi singkat yang membantu pengguna
└── Tombol "Kembali ke Beranda"  → [/]
```

---

## 5. Diagram Alur Navigasi Antar Halaman <a name="diagram-alur"></a>

Diagram berikut menggambarkan seluruh jalur navigasi yang bisa ditempuh pengguna dari setiap titik dalam aplikasi.

```
                          ┌─────────────────────────┐
                          │     🌐 NAVBAR GLOBAL     │
                          │  [/] [/quran] [/hadith]  │
                          │  [/encyclopedia] [Search] │
                          └────────────┬────────────┘
                                       │ (tersedia di semua halaman)
                                       │
          ┌────────────────────────────▼────────────────────────────┐
          │                     [/]  BERANDA                        │
          │                                                         │
          │   [/quran] ────────┐     ┌──────────── [/hadith]       │
          │   [/encyclopedia] ─┼─────┼──────────── [/tokoh/:slug]   │
          │   [/kitab/:slug] ──┘     └──────────── [/kitab/:slug]   │
          └───────┬───────────────────────────────────┬────────────┘
                  │                                   │
    ┌─────────────▼──────────┐         ┌─────────────▼──────────┐
    │   [/quran]             │         │   [/hadith]             │
    │   QuranListPage        │         │   HadithListPage        │
    │                        │         │                         │
    │  Filter: Semua /       │         │  Filter: Semua /        │
    │  Pengertian / Sejarah  │         │  Pengertian / Sejarah   │
    │  / Metode Tafsir       │         │  / Kritik Hadis         │
    └──────────┬─────────────┘         └──────────┬──────────────┘
               │ klik MateriCard                  │ klik MateriCard
    ┌──────────▼─────────────┐         ┌──────────▼──────────────┐
    │  [/quran/:slug]        │         │  [/hadith/:slug]         │
    │  QuranDetailPage       │         │  HadithDetailPage        │
    │                        │         │                          │
    │  ┌─ Panel Referensi ─┐ │         │  ┌─ Panel Referensi ──┐  │
    │  │  Tokoh Terkait    │ │         │  │  Tokoh Terkait     │  │
    │  │  → [/tokoh/:slug] │ │         │  │  → [/tokoh/:slug]  │  │
    │  │                   │ │         │  │                    │  │
    │  │  Kitab Terkait    │ │         │  │  Kitab Terkait     │  │
    │  │  → [/kitab/:slug] │ │         │  │  → [/kitab/:slug]  │  │
    │  └───────────────────┘ │         │  └────────────────────┘  │
    │                        │         │                          │
    │  ◀ Prev | Next ▶       │         │  ◀ Prev | Next ▶        │
    └────────────────────────┘         └──────────────────────────┘
               │  cross-link                     │  cross-link
               └────────────┬────────────────────┘
                            │
          ┌─────────────────▼──────────────────────┐
          │   [/encyclopedia]                       │
          │   EncyclopediaIndexPage                 │
          │                                         │
          │  Filter: [Semua] [Studi Qur'an]         │
          │          [Studi Hadis]                  │
          │                                         │
          │  ┌── Seksi Tokoh ──┐  ┌─ Seksi Kitab ─┐│
          │  │  TokohCard grid │  │ KitabCard grid ││
          │  └───────┬─────────┘  └──────┬─────────┘│
          └──────────┼───────────────────┼───────────┘
                     │                  │
       ┌─────────────▼──────┐  ┌────────▼───────────┐
       │  [/tokoh/:slug]    │  │  [/kitab/:slug]    │
       │  TokohDetailPage   │  │  KitabDetailPage   │
       │                    │  │                    │
       │  Biografi Lengkap  │  │  Deskripsi Kitab   │
       │  Karya Utama       │  │  Metodologi        │
       │  → [/kitab/:slug]  │  │  Pengarang         │
       │                    │  │  → [/tokoh/:slug]  │
       │  Materi Terkait    │  │                    │
       │  → [/quran/:slug]  │  │  Materi Terkait    │
       │  → [/hadith/:slug] │  │  → [/quran/:slug]  │
       └────────────────────┘  │  → [/hadith/:slug] │
                               └────────────────────┘
```

---

## 6. Catatan Implementasi Frontend <a name="catatan-implementasi"></a>

### 6.1 Setup Routing di `App.jsx`

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import RootLayout from './components/layout/RootLayout';
import SkeletonLoader from './components/ui/SkeletonLoader';

// Eager load — halaman utama, dimuat langsung
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// Lazy load — dimuat hanya saat route dikunjungi
const QuranListPage       = lazy(() => import('./pages/quran/QuranListPage'));
const QuranDetailPage     = lazy(() => import('./pages/quran/QuranDetailPage'));
const HadithListPage      = lazy(() => import('./pages/hadith/HadithListPage'));
const HadithDetailPage    = lazy(() => import('./pages/hadith/HadithDetailPage'));
const EncyclopediaPage    = lazy(() => import('./pages/encyclopedia/EncyclopediaIndexPage'));
const TokohDetailPage     = lazy(() => import('./pages/encyclopedia/TokohDetailPage'));
const KitabDetailPage     = lazy(() => import('./pages/encyclopedia/KitabDetailPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SkeletonLoader />}>
        <Routes>
          <Route element={<RootLayout />}>  {/* Navbar + Footer */}
            <Route index element={<HomePage />} />
            <Route path="quran" element={<QuranListPage />} />
            <Route path="quran/:slug" element={<QuranDetailPage />} />
            <Route path="hadith" element={<HadithListPage />} />
            <Route path="hadith/:slug" element={<HadithDetailPage />} />
            <Route path="encyclopedia" element={<EncyclopediaPage />} />
            <Route path="tokoh/:slug" element={<TokohDetailPage />} />
            <Route path="kitab/:slug" element={<KitabDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

---

### 6.2 Struktur Folder Komponen

```
/src
├── components/
│   ├── layout/
│   │   ├── RootLayout.jsx          ← Outlet wrapper: Navbar + <Outlet/> + Footer
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── search/
│   │   ├── GlobalSearchBar.jsx     ← Input + logika pencarian
│   │   └── SearchDropdown.jsx      ← Dropdown hasil real-time
│   ├── ui/
│   │   ├── Card.jsx                ← Base card container
│   │   ├── MateriCard.jsx          ← Extends Card — untuk materi
│   │   ├── TokohCard.jsx           ← Extends Card — untuk tokoh
│   │   ├── KitabCard.jsx           ← Extends Card — untuk kitab
│   │   ├── Badge.jsx               ← Label kategori/level
│   │   ├── Button.jsx
│   │   ├── Breadcrumb.jsx
│   │   ├── FilterPill.jsx          ← Tombol filter (All/Tafsir/Hadis)
│   │   ├── SkeletonLoader.jsx      ← Placeholder saat Suspense loading
│   │   └── ScrollToTop.jsx         ← Tombol kembali ke atas
│   └── content/
│       ├── TableOfContents.jsx     ← Auto-generate dari sections heading
│       ├── ReadingProgressBar.jsx  ← Progress baca sticky di atas
│       ├── ArabicQuote.jsx         ← Blockquote RTL + terjemahan
│       ├── RelatedTokohPanel.jsx   ← Panel referensi tokoh terkait
│       ├── RelatedKitabPanel.jsx   ← Panel referensi kitab terkait
│       └── MateriNavigation.jsx    ← Prev / Next materi
├── pages/
│   ├── HomePage.jsx
│   ├── NotFoundPage.jsx
│   ├── quran/
│   │   ├── QuranListPage.jsx
│   │   └── QuranDetailPage.jsx
│   ├── hadith/
│   │   ├── HadithListPage.jsx
│   │   └── HadithDetailPage.jsx
│   └── encyclopedia/
│       ├── EncyclopediaIndexPage.jsx
│       ├── TokohDetailPage.jsx
│       └── KitabDetailPage.jsx
├── data/
│   ├── materi.json
│   ├── tokoh.json
│   └── kitab.json
├── utils/
│   ├── dataLoader.js               ← Semua fungsi helper filter/lookup
│   └── searchUtils.js              ← Logika pencarian global
├── App.jsx
└── main.jsx
```

---

### 6.3 Strategi Penanganan Slug Tidak Valid

Ketika pengguna mengakses route dinamis dengan slug yang tidak ada di JSON (mis: `/quran/tidak-ada`), komponen detail harus menanganinya dengan elegan:

```jsx
// Contoh pola di QuranDetailPage.jsx
const { slug } = useParams();
const materi = getMateriBySlug(slug);

if (!materi) {
  return <Navigate to="/404" replace />;
  // ATAU render komponen inline:
  // return <NotFoundInline message="Materi tidak ditemukan" backTo="/quran" />;
}
```

**Rekomendasi:** Gunakan `<Navigate replace />` agar URL `/quran/slug-salah` tidak tersimpan di browser history.

---

### 6.4 Konfigurasi Deployment SPA

Karena ini adalah React SPA dengan client-side routing, semua request URL harus diarahkan ke `index.html`. Konfigurasikan sesuai platform hosting:

**Vercel** — otomatis ditangani, tidak perlu konfigurasi tambahan.

**Netlify** — buat file `public/_redirects`:
```
/*    /index.html    200
```

**GitHub Pages** — buat file `public/404.html` yang menyalin isi `index.html`, atau gunakan `HashRouter` sebagai alternatif (tidak direkomendasikan untuk tampilan URL yang bersih).

---

### 6.5 Ringkasan Semua Route

| Route | Komponen | Tipe | Data Source |
|-------|----------|------|-------------|
| `/` | `HomePage` | Statis | Semua JSON |
| `/quran` | `QuranListPage` | Statis | `materi.json` |
| `/quran/:slug` | `QuranDetailPage` | Dinamis ⚡ | `materi.json` + ref |
| `/hadith` | `HadithListPage` | Statis | `materi.json` |
| `/hadith/:slug` | `HadithDetailPage` | Dinamis ⚡ | `materi.json` + ref |
| `/encyclopedia` | `EncyclopediaIndexPage` | Statis | `tokoh.json` + `kitab.json` |
| `/tokoh/:slug` | `TokohDetailPage` | Dinamis ⚡ | `tokoh.json` + ref |
| `/kitab/:slug` | `KitabDetailPage` | Dinamis ⚡ | `kitab.json` + ref |
| `/*` | `NotFoundPage` | Catch-all | — |

**Total Route:** 9 route (5 statis + 4 dinamis)  
**Total Halaman Unik:** 9 tipe halaman  
**Total Komponen UI:** ~18 komponen reusable

---

*Dokumen ini adalah acuan tunggal (*single source of truth*) untuk struktur navigasi Suqura.*  
*Setiap perubahan route atau komponen harus diperbarui di sini sebelum diimplementasikan.*  
*Versi: 1.0.0 — 24 Juni 2026*
