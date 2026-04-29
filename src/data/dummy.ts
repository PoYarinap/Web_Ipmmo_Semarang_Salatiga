import { Member, Program, Activity, News, GalleryItem, Stat, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Program', href: '/program' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Berita', href: '/berita' },
  { label: 'Kontak', href: '/kontak' },
];

export const members: Member[] = [
  {
    id: '1',
    name: 'Andi Pratama',
    role: 'Ketua Umum',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    period: '2024 - 2025',
  },
  {
    id: '2',
    name: 'Siti Aminah',
    role: 'Sekretaris Umum',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    period: '2024 - 2025',
  },
  {
    id: '3',
    name: 'Budi Santoso',
    role: 'Bendahara Umum',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    period: '2024 - 2025',
  },
  {
    id: '4',
    name: 'Rina Wijaya',
    role: 'Kabid Kaderisasi',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    period: '2024 - 2025',
  },
];

export const programs: Program[] = [
  {
    id: '1',
    title: 'Latihan Kepemimpinan Dasar',
    description: 'Pelatihan dasar bagi anggota baru untuk menumbuhkan jiwa kepemimpinan dan organisatoris.',
    status: 'Selesai',
  },
  {
    id: '2',
    title: 'Bakti Sosial Ramadhan',
    description: 'Kegiatan berbagi sembako dan buka puasa bersama di panti asuhan wilayah Semarang.',
    status: 'Aktif',
  },
  {
    id: '3',
    title: 'IPMMO Goes to School',
    description: 'Sosialisasi pendidikan tinggi dan organisasi ke sekolah-sekolah di daerah asal.',
    status: 'Mendatang',
  },
];

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Makrab IPMMO 2024',
    date: '15 Maret 2024',
    location: 'Bandungan, Kabupaten Semarang',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=500&fit=crop',
    description: 'Malam keakraban untuk mempererat tali silaturahmi antar anggota IPMMO Korwil Semarang-Salatiga.',
  },
  {
    id: '2',
    title: 'Diskusi Publik Mahasiswa',
    date: '20 April 2024',
    location: 'Auditorium UKSW, Salatiga',
    image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=800&h=500&fit=crop',
    description: 'Diskusi mengenai peran mahasiswa dalam pembangunan daerah di era digital.',
  },
];

export const news: News[] = [
  {
    id: '1',
    title: 'Pelantikan Pengurus Baru IPMMO Periode 2024-2025',
    date: '10 Januari 2024',
    excerpt: 'IPMMO Korwil Semarang-Salatiga resmi melantik jajaran pengurus baru untuk masa bakti satu tahun ke depan.',
    content: 'Pelantikan dilaksanakan dengan khidmat di Aula Balai Kota Semarang...',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop',
    author: 'Admin',
    category: 'Organisasi',
  },
  {
    id: '2',
    title: 'Prestasi Mahasiswa IPMMO di Ajang Nasional',
    date: '5 Februari 2024',
    excerpt: 'Salah satu anggota IPMMO berhasil meraih juara dalam kompetisi debat tingkat nasional.',
    content: 'Selamat kepada perwakilan IPMMO yang telah mengharumkan nama organisasi...',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop',
    author: 'Humas',
    category: 'Prestasi',
  },
];

export const gallery: GalleryItem[] = [
  { id: '1', title: 'Kegiatan A', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&fit=crop', category: 'Kegiatan' },
  { id: '2', title: 'Kegiatan B', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&fit=crop', category: 'Rapat' },
  { id: '3', title: 'Kegiatan C', image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&fit=crop', category: 'Sosial' },
  { id: '4', title: 'Kegiatan D', image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&fit=crop', category: 'Kegiatan' },
  { id: '5', title: 'Kegiatan E', image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&fit=crop', category: 'Rapat' },
  { id: '6', title: 'Kegiatan F', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&fit=crop', category: 'Sosial' },
];

export const stats: Stat[] = [
  { label: 'Anggota Aktif', value: '500+', icon: 'users' },
  { label: 'Program Kerja', value: '24', icon: 'briefcase' },
  { label: 'Kegiatan Selesai', value: '150+', icon: 'calendar' },
  { label: 'Prestasi', value: '12', icon: 'award' },
];
