import React from 'react';
import Image from 'next/image';
import { gallery } from '@/data/dummy';

export const metadata = {
  title: "Galeri | IPMMO Korwil Semarang–Salatiga",
};

const Galeri = () => {
  return (
    <div className="pt-24">
      <section className="bg-primary py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Galeri Foto</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Momen-momen berharga dalam perjalanan IPMMO Korwil Semarang–Salatiga yang terekam dalam lensa.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div key={item.id} className="group relative aspect-square overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-secondary text-xs font-bold uppercase mb-1">{item.category}</span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Ingin melihat lebih banyak momen kami?</p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary font-bold hover:text-secondary transition-colors"
            >
              <span>Follow Instagram Kami</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.62.074-3.15.422-4.243 1.515-1.093 1.093-1.44 2.622-1.515 4.242-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.074 1.62.422 3.15 1.515 4.243 1.093 1.093 2.622 1.44 4.242 1.515 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.62-.074 3.15-.422 4.243-1.515 1.093-1.093 1.44-2.622 1.515-4.242.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.62-.422-3.15-1.515-4.243-1.093-1.093-2.623-1.44-4.243-1.515-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galeri;
