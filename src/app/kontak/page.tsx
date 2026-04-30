import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata = {
  title: "Kontak Kami | IPMMO Korwil Semarang–Salatiga",
};

const Kontak = () => {
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
            Hubungan Masyarakat
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md tracking-tight">
            Hubungi <span className="text-[#00c8ff]">Kami</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-3 text-sm font-medium text-gray-300 bg-white/5 inline-flex px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <Link href="/" className="hover:text-[#00c8ff] transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">Kontak</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-primary">Lokasi</p>
                      <p className="text-muted-foreground">Semarang & Salatiga, Jawa Tengah</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-primary">Email</p>
                      <p className="text-muted-foreground">ipmmo.semarang.salatiga@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Media Sosial</h3>
                <div className="flex space-x-4">
                  {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                    <a key={social} href="#" className="px-4 py-2 bg-muted rounded-lg font-bold text-primary hover:bg-primary hover:text-white transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-muted/30 p-8 md:p-12 rounded-3xl border border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Nama Lengkap</label>
                    <input 
                      type="text" 
                      placeholder="Masukkan nama Anda" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Email</label>
                    <input 
                      type="email" 
                      placeholder="email@contoh.com" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Subjek</label>
                  <input 
                    type="text" 
                    placeholder="Apa yang ingin Anda bicarakan?" 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Pesan</label>
                  <textarea 
                    rows={6} 
                    placeholder="Tuliskan pesan Anda di sini..." 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  ></textarea>
                </div>
                <Button className="w-full py-4 text-lg">Kirim Pesan Sekarang</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
