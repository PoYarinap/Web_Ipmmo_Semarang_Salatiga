import React from 'react';
import { Card } from '../components/Card';
import { programs } from '@/data/dummy';
import Button from '../components/Button';

const Features = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">Program Unggulan</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Fokus Kami Untuk Kemajuan Bersama</h2>
          </div>
          <Button variant="outline" href="/program">Lihat Semua Program</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card 
              key={program.id}
              title={program.title}
              description={program.description}
              footer={
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    program.status === 'Aktif' ? 'bg-green-100 text-green-600' : 
                    program.status === 'Selesai' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {program.status}
                  </span>
                  <Link href={`/program#${program.id}`} className="text-primary text-sm font-bold hover:underline">
                    Detail →
                  </Link>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Internal link fix
import Link from 'next/link';

export default Features;
