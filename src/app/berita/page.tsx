import React from 'react';
import { news } from '@/data/dummy';
import { Card } from '@/components/Card';
import Button from '@/components/Button';

export const metadata = {
  title: "Berita & Artikel | IPMMO Korwil Semarang–Salatiga",
};

const Berita = () => {
  return (
    <div className="pt-24">
      <section className="bg-primary py-20 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Berita & Artikel</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Dapatkan informasi terbaru mengenai kegiatan, prestasi, dan pemikiran dari keluarga besar IPMMO Korwil Semarang-Salatiga.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card 
                key={item.id}
                title={item.title}
                description={item.excerpt}
                image={item.image}
                className="h-full flex flex-col"
                footer={
                  <div className="flex justify-between items-center text-sm">
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-bold">{item.category}</span>
                    <span className="text-muted-foreground">{item.date}</span>
                  </div>
                }
              >
                <div className="mt-4">
                  <Button variant="ghost" size="sm" className="px-0 text-primary font-bold">
                    Baca Selengkapnya →
                  </Button>
                </div>
              </Card>
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
