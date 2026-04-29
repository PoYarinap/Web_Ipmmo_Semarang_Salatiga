export interface NavItem {
  label: string;
  href: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  image: string;
  period: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  status: 'Aktif' | 'Selesai' | 'Mendatang';
  icon?: string;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

export interface News {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}
