import React from 'react';
import Link from 'next/link';
import { news } from '@/data/dummy';
import { Card, NewsCard } from '@/components/Card';
import Button from '@/components/Button';
import Image from 'next/image';

export const metadata = {
  title: "Berita & Artikel | IPMMO Korwil Semarang–Salatiga",
};

const Berita = () => {
  return (
    <div className="pt-24">
      <section className="relative py-20 md:py-28 text-center overflow-hidden">
        {/* Background Texture with Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-90" 
          style={{ backgroundImage: "url('/img/baner.png')", backgroundRepeat: 'repeat', backgroundSize: '400px' }}
        ></div>
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f1525]/70 to-[#0f1525]/85"></div>

        <div className="container-custom relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#00c8ff]/20 text-[#00c8ff] font-bold rounded-full mb-4 text-sm tracking-widest uppercase border border-[#00c8ff]/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,200,255,0.3)]">
            Informasi Terkini
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md tracking-tight">
            Berita & <span className="text-[#00c8ff]">Artikel</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-3 text-sm font-medium text-gray-300 bg-white/5 inline-flex px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <Link href="/" className="hover:text-[#00c8ff] transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">Berita</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <NewsCard 
                key={item.id}
                title={item.title}
                description={item.excerpt}
                image={item.image}
                category={item.category}
                date={item.date}
                href={`/berita/${item.slug}`}
              />
            ))}
          </div>

          {/* Pagination Dummy */}
          <div className="mt-16 flex justify-center space-x-2">
            <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-lg bg-muted text-muted-foreground font-bold hover:bg-border transition-colors">2</button>
            <button className="w-10 h-10 rounded-lg bg-muted text-muted-foreground font-bold hover:bg-border transition-colors">
              <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Berita;
