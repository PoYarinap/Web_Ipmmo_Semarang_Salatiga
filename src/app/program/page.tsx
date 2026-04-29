import React from 'react';
import { programs } from '@/data/dummy';
import { Card } from '@/components/Card';
import Button from '@/components/Button';

export const metadata = {
  title: "Program Kerja | IPMMO Korwil Semarang–Salatiga",
};

const ProgramKerja = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Program Kerja</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Rencana kegiatan strategis yang dirancang untuk mendukung pengembangan potensi dan kesejahteraan seluruh anggota IPMMO.
          </p>
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
