import React from 'react';
import Image from 'next/image';
import { activities } from '@/data/dummy';
import Button from '@/components/Button';

import Link from 'next/link';

export const metadata = {
  title: "Kegiatan | IPMMO Korwil Semarang–Salatiga",
};

const Kegiatan = () => {
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
            Agenda Organisasi
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md tracking-tight">
            Agenda & <span className="text-[#00c8ff]">Kegiatan</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-3 text-sm font-medium text-gray-300 bg-white/5 inline-flex px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <Link href="/" className="hover:text-[#00c8ff] transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">Kegiatan</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {activities.map((activity, index) => (
              <div key={activity.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <Image src={activity.image} alt={activity.title} fill className="object-cover" />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-sm font-bold text-secondary uppercase tracking-widest">
                    <span>{activity.date}</span>
                    <span className="w-2 h-2 bg-border rounded-full"></span>
                    <span>{activity.location}</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-primary">{activity.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{activity.description}</p>
                  <Button variant="outline">Lihat Dokumentasi</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kegiatan;
