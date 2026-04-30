import React from 'react';
import { news } from '@/data/dummy';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = news.find((item) => item.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Get recent news for sidebar
  const recentNews = news.filter(n => n.id !== article.id).slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 text-center overflow-hidden bg-[#0f1525]">
        {/* Background Texture with Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-80" 
          style={{ backgroundImage: "url('/img/baner.png')", backgroundRepeat: 'repeat', backgroundSize: '400px' }}
        ></div>
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f1525]/50 to-[#0f1525]/90"></div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
            {article.title}
          </h1>
          <div className="flex items-center justify-center space-x-3 text-sm font-medium text-gray-300 bg-white/5 inline-flex px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <Link href="/" className="hover:text-[#00c8ff] transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <Link href="/berita" className="hover:text-[#00c8ff] transition-colors">Berita</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400 max-w-[150px] md:max-w-xs truncate">{article.title}</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column - Main Article (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-[300px] md:h-[450px] w-full">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-widest uppercase mb-8 pb-6 border-b border-gray-100">
                  <span className="bg-[#00c8ff] text-white px-3 py-1 rounded-full shadow-sm">
                    {article.category}
                  </span>
                  
                  <div className="flex items-center text-gray-500">
                    <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {article.author}
                  </div>

                  <div className="flex items-center text-gray-500">
                    <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {article.date}
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12">
                  <p className="text-xl text-gray-800 font-medium mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <p>{article.content}</p>
                </div>

                {/* Article Footer (Back Button & Socials) */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                  <Link href="/berita" className="inline-flex items-center px-5 py-2.5 bg-[#00c8ff] hover:bg-[#00a3cc] text-white text-sm font-bold rounded-full transition-colors shadow-md shadow-[#00c8ff]/20">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Kembali ke Berita
                  </Link>
                  
                  <div className="flex items-center space-x-3">
                    <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1e2536] hover:text-white transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1e2536] hover:text-white transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Category Widget */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-1 h-6 bg-[#00c8ff] rounded-full"></div>
                  <h3 className="text-lg font-bold text-[#0f1525]">Kategori</h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link href="/berita" className="flex items-center justify-between text-gray-500 hover:text-[#00c8ff] transition-colors py-2 border-b border-gray-50 text-sm font-medium">
                      <span>Berita</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/berita" className="flex items-center justify-between text-gray-500 hover:text-[#00c8ff] transition-colors py-2 border-b border-gray-50 text-sm font-medium">
                      <span>Artikel</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/berita" className="flex items-center justify-between text-gray-500 hover:text-[#00c8ff] transition-colors py-2 text-sm font-medium">
                      <span>Kegiatan</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Recent News Widget */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-1 h-6 bg-[#ff2a40] rounded-full"></div>
                  <h3 className="text-lg font-bold text-[#0f1525]">Berita Terbaru</h3>
                </div>
                <div className="space-y-6">
                  {recentNews.length > 0 ? recentNews.map((item) => (
                    <Link key={item.id} href={`/berita/${item.slug}`} className="group flex items-start space-x-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#00c8ff] uppercase tracking-wider block mb-1">
                          {item.category}
                        </span>
                        <h4 className="text-sm font-bold text-[#0f1525] group-hover:text-[#00c8ff] transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </Link>
                  )) : (
                    <p className="text-sm text-gray-500 italic">Belum ada berita lainnya.</p>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
