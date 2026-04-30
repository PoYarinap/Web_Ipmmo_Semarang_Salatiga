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

```text
Web_Ipmmo_Semarang_Salatiga/
├── public/                 # Asset statis (logo, gambar, dll)
├── src/
│   ├── app/                # Routing utama (Next.js App Router)
│   │   ├── berita/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── galeri/
│   │   │   └── page.tsx
│   │   ├── kegiatan/
│   │   │   └── page.tsx
│   │   ├── kontak/
│   │   │   └── page.tsx
│   │   ├── program/
│   │   │   └── page.tsx
│   │   ├── tentang/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── data/
│   │   └── dummy.ts
│   ├── sections/
│   │   ├── Features.tsx
│   │   ├── Hero.tsx
│   │   └── Stats.tsx
│   └── types/
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```
