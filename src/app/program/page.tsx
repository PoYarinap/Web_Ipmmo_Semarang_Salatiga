import React from 'react';
import { programs } from '@/data/dummy';
import { Card } from '@/components/Card';
import Button from '@/components/Button';

import Link from 'next/link';

export const metadata = {
  title: "Program Kerja | IPMMO Korwil Semarang–Salatiga",
};

const ProgramKerja = () => {
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
            Program Unggulan
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md tracking-tight">
            Program <span className="text-[#00c8ff]">Kerja</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-3 text-sm font-medium text-gray-300 bg-white/5 inline-flex px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <Link href="/" className="hover:text-[#00c8ff] transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">Program Kerja</span>
          </div>
        </div>
      </section>

      {/* Program List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card 
                key={program.id}
                title={program.title}
                description={program.description}
                className="h-full flex flex-col"
                footer={
                  <div className="flex justify-between items-center">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                      program.status === 'Aktif' ? 'bg-green-100 text-green-600' : 
                      program.status === 'Selesai' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {program.status}
                    </span>
                    <span className="text-primary text-sm font-semibold">Tahun 2024</span>
                  </div>
                }
              />
            ))}
          </div>

          <div className="mt-20 p-10 bg-muted/50 rounded-3xl border border-dashed border-primary/20 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Punya Ide Program Kerja Baru?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Kami selalu terbuka untuk aspirasi dan masukan dari seluruh anggota demi kemajuan organisasi kita bersama.
            </p>
            <Button size="lg" href="/kontak">Kirim Aspirasi</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramKerja;
