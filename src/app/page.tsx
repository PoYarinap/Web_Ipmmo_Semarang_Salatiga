import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Features from "@/sections/Features";
import { news } from "@/data/dummy";
import { Card } from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <Features />
      
      {/* Latest News Highlight */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">Warta Organisasi</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Berita Terkini</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ikuti perkembangan terbaru mengenai kegiatan, prestasi, dan pengumuman resmi dari IPMMO Korwil Semarang-Salatiga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {news.slice(0, 2).map((item) => (
              <Card 
                key={item.id}
                title={item.title}
                description={item.excerpt}
                image={item.image}
                footer={
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{item.date}</span>
                    <Button variant="ghost" size="sm" href={`/berita#${item.id}`}>Baca Selengkapnya →</Button>
                  </div>
                }
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" href="/berita">Lihat Semua Berita</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-white rounded-full" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
            Siap Menjadi Bagian dari <br /> Keluarga Besar IPMMO?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Mari bergabung dan berkontribusi bersama kami untuk membangun masa depan Mimika yang lebih baik melalui pengembangan potensi mahasiswa.
          </p>
          <Button variant="secondary" size="lg" href="/kontak">Hubungi Kami Sekarang</Button>
        </div>
      </section>
    </div>
  );
}
