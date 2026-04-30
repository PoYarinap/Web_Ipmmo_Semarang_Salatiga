# 🌐 Website IPMMO Semarang – Salatiga

Website resmi organisasi **Ikatan Pelajar Mahasiswa Moni (IPMMO) Korwil Semarang–Salatiga**.

## 🚀 Deskripsi

Website ini dibuat untuk menampilkan informasi kegiatan, program, dan profil organisasi IPMMO Semarang–Salatiga secara online.

Fitur utama:
- 🏠 Halaman Home (Landing Page)
- 📖 Tentang Organisasi
- 📌 Program Kerja
- 📅 Kegiatan
- 🖼️ Galeri
- 📰 Berita
- 📞 Kontak
- 🔗 Tombol Gabung

---

## 🛠️ Tech Stack

Project ini dibangun menggunakan:

- ⚛️ **Next.js**
- 🔷 **TypeScript**
- 🎨 **Tailwind CSS**

---

## 📂 Struktur Folder
Web_Ipmmo_Semarang_Salatiga/
├── public/ # Asset statis (logo, gambar, dll)
├── src/
│ ├── app/ # Routing utama (Next.js App Router)
│ │ ├── berita/
│ │ │ └── [slug]/ # Dynamic route untuk detail berita
│ │ ├── galeri/
│ │ ├── kegiatan/
│ │ ├── kontak/
│ │ ├── program/
│ │ ├── tentang/
│ │ ├── layout.tsx # Layout utama
│ │ ├── page.tsx # Halaman Home
│ │ └── globals.css # Styling global
│ │
│ ├── components/ # Komponen reusable
│ │ ├── Navbar.tsx
│ │ ├── Footer.tsx
│ │ ├── Button.tsx
│ │ └── Card.tsx
│ │
│ ├── sections/ # Section landing page
│ │ ├── Hero.tsx
│ │ ├── Features.tsx
│ │ └── Stats.tsx
│ │
│ ├── data/ # Data dummy / statis
│ │ └── dummy.ts
│ │
│ └── types/ # TypeScript types
│
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
