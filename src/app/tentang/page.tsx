import React from 'react';
import Image from 'next/image';
import { members } from '@/data/dummy';
import { MemberCard } from '@/components/Card';

import Link from 'next/link';

export const metadata = {
  title: "Tentang Kami | IPMMO Korwil Semarang–Salatiga",
};

const TentangKami = () => {
  return (
    <div className="pt-24">
      {/* Header */}
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
            Profil Organisasi
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md tracking-tight">
            Tentang <span className="text-[#00c8ff]">IPMMO</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-3 text-sm font-medium text-gray-300 bg-white/5 inline-flex px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <Link href="/" className="hover:text-[#00c8ff] transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">Tentang Kami</span>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&fit=crop" 
                alt="Sejarah IPMMO" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">Sejarah Singkat</span>
              <h2 className="text-3xl font-extrabold text-primary mb-6">Jejak Langkah IPMMO Semarang-Salatiga</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  IPMMO Korwil Semarang-Salatiga didirikan sebagai bentuk kerinduan mahasiswa asal Mimika yang sedang menempuh studi di wilayah Jawa Tengah untuk memiliki wadah silaturahmi dan saling membantu.
                </p>
                <p>
                  Berawal dari perkumpulan kecil di kos-kosan, kini IPMMO telah berkembang menjadi organisasi daerah yang diakui dan memiliki ratusan anggota aktif dari berbagai perguruan tinggi negeri maupun swasta di Semarang dan Salatiga.
                </p>
                <p>
                  Kami terus bertransformasi untuk menjawab tantangan zaman tanpa melupakan akar budaya dan kecintaan kami pada tanah kelahiran, Mimika.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-4">Visi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadikan IPMMO Korwil Semarang-Salatiga sebagai organisasi daerah yang unggul, mandiri, dan berintegritas dalam mewujudkan kesejahteraan serta pengembangan intelektual mahasiswa Mimika.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-4">Misi</h3>
              <ul className="space-y-4 text-muted-foreground leading-relaxed">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                  <span>Meningkatkan kualitas akademik dan non-akademik anggota melalui program kerja yang kreatif dan inovatif.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                  <span>Menjalin kerjasama yang harmonis dengan pemerintah daerah, alumni, dan organisasi lainnya.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                  <span>Menumbuhkan jiwa kepemimpinan dan rasa kekeluargaan yang erat antar anggota.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">Kepengurusan</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Struktur Organisasi 2024-2025</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member) => (
              <MemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
