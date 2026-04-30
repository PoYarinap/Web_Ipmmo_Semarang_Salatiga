import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Features from "@/sections/Features";
import { news } from "@/data/dummy";
import { Card, NewsCard } from "@/components/Card";
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {news.slice(0, 3).map((item) => (
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

          <div className="text-center">
            <Button variant="outline" size="lg" href="/berita">Lihat Semua Berita</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container-custom relative">
          <div className="bg-gradient-to-r from-primary via-[#1e40af] to-[#0f1525] rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00c8ff]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Siap Menjadi Bagian dari <br className="hidden md:block" /> Keluarga Besar IPMMO?
              </h2>
              <p className="text-blue-100/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Mari bergabung dan berkontribusi bersama kami untuk membangun masa depan Mimika yang lebih baik melalui pengembangan potensi mahasiswa.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" href="/kontak" className="bg-[#00c8ff] hover:bg-[#00a3cc] text-[#0f1525] font-bold border-none shadow-lg shadow-[#00c8ff]/30">
                  Hubungi Kami Sekarang
                </Button>
                <Button variant="outline" size="lg" href="/tentang" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
