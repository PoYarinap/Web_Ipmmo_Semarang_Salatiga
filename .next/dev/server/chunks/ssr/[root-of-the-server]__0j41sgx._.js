module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/app/favicon.ico.mjs { IMAGE => \"[project]/Web_Ipmmo_Semarang_Salatiga/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/data/dummy.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activities",
    ()=>activities,
    "gallery",
    ()=>gallery,
    "members",
    ()=>members,
    "navItems",
    ()=>navItems,
    "news",
    ()=>news,
    "programs",
    ()=>programs,
    "stats",
    ()=>stats
]);
const navItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Tentang',
        href: '/tentang'
    },
    {
        label: 'Program',
        href: '/program'
    },
    {
        label: 'Kegiatan',
        href: '/kegiatan'
    },
    {
        label: 'Galeri',
        href: '/galeri'
    },
    {
        label: 'Berita',
        href: '/berita'
    },
    {
        label: 'Kontak',
        href: '/kontak'
    }
];
const members = [
    {
        id: '1',
        name: 'Andi Pratama',
        role: 'Ketua Umum',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        period: '2024 - 2025'
    },
    {
        id: '2',
        name: 'Siti Aminah',
        role: 'Sekretaris Umum',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        period: '2024 - 2025'
    },
    {
        id: '3',
        name: 'Budi Santoso',
        role: 'Bendahara Umum',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        period: '2024 - 2025'
    },
    {
        id: '4',
        name: 'Rina Wijaya',
        role: 'Kabid Kaderisasi',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        period: '2024 - 2025'
    }
];
const programs = [
    {
        id: '1',
        title: 'Latihan Kepemimpinan Dasar',
        description: 'Pelatihan dasar bagi anggota baru untuk menumbuhkan jiwa kepemimpinan dan organisatoris.',
        status: 'Selesai'
    },
    {
        id: '2',
        title: 'Bakti Sosial Ramadhan',
        description: 'Kegiatan berbagi sembako dan buka puasa bersama di panti asuhan wilayah Semarang.',
        status: 'Aktif'
    },
    {
        id: '3',
        title: 'IPMMO Goes to School',
        description: 'Sosialisasi pendidikan tinggi dan organisasi ke sekolah-sekolah di daerah asal.',
        status: 'Mendatang'
    }
];
const activities = [
    {
        id: '1',
        title: 'Makrab IPMMO 2024',
        date: '15 Maret 2024',
        location: 'Bandungan, Kabupaten Semarang',
        image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=500&fit=crop',
        description: 'Malam keakraban untuk mempererat tali silaturahmi antar anggota IPMMO Korwil Semarang-Salatiga.'
    },
    {
        id: '2',
        title: 'Diskusi Publik Mahasiswa',
        date: '20 April 2024',
        location: 'Auditorium UKSW, Salatiga',
        image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=800&h=500&fit=crop',
        description: 'Diskusi mengenai peran mahasiswa dalam pembangunan daerah di era digital.'
    }
];
const news = [
    {
        id: '1',
        slug: 'pelantikan-pengurus-baru-2024',
        title: 'Pelantikan Pengurus Baru IPMMO Periode 2024-2025',
        date: '10 Januari 2024',
        excerpt: 'IPMMO Korwil Semarang-Salatiga resmi melantik jajaran pengurus baru untuk masa bakti satu tahun ke depan.',
        content: 'Pelantikan dilaksanakan dengan khidmat di Aula Balai Kota Semarang. Dihadiri oleh ratusan mahasiswa Mimika dan tamu undangan dari berbagai organisasi mahasiswa daerah lainnya di Jawa Tengah. Ketua Umum terpilih, Andi Pratama, dalam sambutannya menekankan pentingnya sinergi dan kolaborasi antar anggota untuk memajukan IPMMO serta berkontribusi nyata bagi daerah asal Mimika.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop',
        author: 'Admin',
        category: 'Organisasi'
    },
    {
        id: '2',
        slug: 'prestasi-mahasiswa-ipmmo-nasional',
        title: 'Prestasi Mahasiswa IPMMO di Ajang Nasional',
        date: '5 Februari 2024',
        excerpt: 'Salah satu anggota IPMMO berhasil meraih juara dalam kompetisi debat tingkat nasional.',
        content: 'Selamat kepada perwakilan IPMMO yang telah mengharumkan nama organisasi dan daerah di kancah nasional. Prestasi ini membuktikan bahwa mahasiswa Mimika memiliki potensi besar yang mampu bersaing dengan mahasiswa dari seluruh Indonesia. Kompetisi yang berlangsung selama tiga hari di Jakarta ini menguji kemampuan analitis dan komunikasi para peserta.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop',
        author: 'Humas',
        category: 'Prestasi'
    },
    {
        id: '3',
        slug: 'diskusi-publik-peran-mahasiswa',
        title: 'Diskusi Publik: Peran Mahasiswa dalam Pembangunan',
        date: '20 April 2024',
        excerpt: 'IPMMO menyelenggarakan diskusi publik yang dihadiri oleh narasumber ahli dan ratusan mahasiswa.',
        content: 'Kegiatan diskusi publik ini bertujuan untuk membuka wawasan mahasiswa mengenai isu-isu terkini dan bagaimana mahasiswa dapat mengambil peran strategis dalam pembangunan daerah. Acara berjalan interaktif dengan antusiasme peserta yang tinggi dalam sesi tanya jawab.',
        image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=800&h=500&fit=crop',
        author: 'Admin',
        category: 'Kegiatan'
    },
    {
        id: '4',
        slug: 'kerjasama-dengan-pemerintah-daerah',
        title: 'Penandatanganan MoU dengan Pemerintah Daerah',
        date: '12 Mei 2024',
        excerpt: 'Langkah strategis IPMMO dalam menjalin kemitraan resmi dengan Pemerintah Daerah untuk program beasiswa.',
        content: 'Kerja sama ini diharapkan dapat memberikan dampak positif jangka panjang bagi anggota IPMMO, khususnya dalam hal kemudahan akses beasiswa dan fasilitas penunjang pendidikan lainnya. Pemerintah daerah menyambut baik inisiatif dari pengurus IPMMO.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&h=500&fit=crop',
        author: 'Humas',
        category: 'Kerjasama'
    }
];
const gallery = [
    {
        id: '1',
        title: 'Kegiatan A',
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&fit=crop',
        category: 'Kegiatan'
    },
    {
        id: '2',
        title: 'Kegiatan B',
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&fit=crop',
        category: 'Rapat'
    },
    {
        id: '3',
        title: 'Kegiatan C',
        image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&fit=crop',
        category: 'Sosial'
    },
    {
        id: '4',
        title: 'Kegiatan D',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&fit=crop',
        category: 'Kegiatan'
    },
    {
        id: '5',
        title: 'Kegiatan E',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&fit=crop',
        category: 'Rapat'
    },
    {
        id: '6',
        title: 'Kegiatan F',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&fit=crop',
        category: 'Sosial'
    }
];
const stats = [
    {
        label: 'Anggota Aktif',
        value: '500+',
        icon: 'users'
    },
    {
        label: 'Program Kerja',
        value: '24',
        icon: 'briefcase'
    },
    {
        label: 'Kegiatan Selesai',
        value: '150+',
        icon: 'calendar'
    },
    {
        label: 'Prestasi',
        value: '12',
        icon: 'award'
    }
];
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsDetail,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$data$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/data/dummy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$data$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["news"].map((item)=>({
            slug: item.slug
        }));
}
async function NewsDetail({ params }) {
    const resolvedParams = await params;
    const article = __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$data$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["news"].find((item)=>item.slug === resolvedParams.slug);
    if (!article) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // Get recent news for sidebar
    const recentNews = __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$data$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["news"].filter((n)=>n.id !== article.id).slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 min-h-screen pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-16 md:py-24 text-center overflow-hidden bg-[#0f1525]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 opacity-80",
                        style: {
                            backgroundImage: "url('/img/baner.png')",
                            backgroundRepeat: 'repeat',
                            backgroundSize: '400px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 bg-gradient-to-b from-[#0f1525]/50 to-[#0f1525]/90"
                    }, void 0, false, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container-custom relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg",
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center space-x-3 text-sm font-medium text-gray-300 bg-white/5 inline-flex px-6 py-2 rounded-full border border-white/10 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "hover:text-[#00c8ff] transition-colors",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/berita",
                                        className: "hover:text-[#00c8ff] transition-colors",
                                        children: "Berita"
                                    }, void 0, false, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 max-w-[150px] md:max-w-xs truncate",
                                        children: article.title
                                    }, void 0, false, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 md:py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-[300px] md:h-[450px] w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: article.image,
                                            alt: article.title,
                                            fill: true,
                                            className: "object-cover",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 md:p-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-4 text-xs font-bold tracking-widest uppercase mb-8 pb-6 border-b border-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-[#00c8ff] text-white px-3 py-1 rounded-full shadow-sm",
                                                        children: article.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 mr-1.5 text-gray-400",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 21
                                                            }, this),
                                                            article.author
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 mr-1.5 text-gray-400",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 21
                                                            }, this),
                                                            article.date
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl text-gray-800 font-medium mb-6 leading-relaxed",
                                                        children: article.excerpt
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: article.content
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between pt-8 border-t border-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/berita",
                                                        className: "inline-flex items-center px-5 py-2.5 bg-[#00c8ff] hover:bg-[#00a3cc] text-white text-sm font-bold rounded-full transition-colors shadow-md shadow-[#00c8ff]/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 mr-2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Kembali ke Berita"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1e2536] hover:text-white transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "sr-only",
                                                                        children: "Facebook"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                            lineNumber: 107,
                                                                            columnNumber: 88
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                        lineNumber: 107,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1e2536] hover:text-white transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "sr-only",
                                                                        children: "Twitter"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                        lineNumber: 110,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                            lineNumber: 111,
                                                                            columnNumber: 88
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-6 bg-[#00c8ff] rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-[#0f1525]",
                                                        children: "Kategori"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/berita",
                                                            className: "flex items-center justify-between text-gray-500 hover:text-[#00c8ff] transition-colors py-2 border-b border-gray-50 text-sm font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Berita"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 5l7 7-7 7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 102
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/berita",
                                                            className: "flex items-center justify-between text-gray-500 hover:text-[#00c8ff] transition-colors py-2 border-b border-gray-50 text-sm font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Artikel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 5l7 7-7 7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 102
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/berita",
                                                            className: "flex items-center justify-between text-gray-500 hover:text-[#00c8ff] transition-colors py-2 text-sm font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Kegiatan"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 5l7 7-7 7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 102
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-6 bg-[#ff2a40] rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-[#0f1525]",
                                                        children: "Berita Terbaru"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: recentNews.length > 0 ? recentNews.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/berita/${item.slug}`,
                                                        className: "group flex items-start space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative w-20 h-20 rounded-lg overflow-hidden shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: item.image,
                                                                    alt: item.title,
                                                                    fill: true,
                                                                    className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold text-[#00c8ff] uppercase tracking-wider block mb-1",
                                                                        children: item.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                        lineNumber: 161,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "text-sm font-bold text-[#0f1525] group-hover:text-[#00c8ff] transition-colors line-clamp-2 leading-snug",
                                                                        children: item.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                        lineNumber: 164,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500 italic",
                                                    children: "Belum ada berita lainnya."
                                                }, void 0, false, {
                                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/app/berita/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0j41sgx._.js.map