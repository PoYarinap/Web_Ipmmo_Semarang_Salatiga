'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-[#0f1525] text-white pt-16 pb-8 font-sans mt-auto">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-5">
                        <Link
                            href="/"
                            className="flex items-center space-x-3 mb-6"
                        >
                            <div className="relative w-16 h-16 bg-white rounded-md p-1">
                                <Image
                                    src="/img/logo.jpeg"
                                    alt="Logo IPMMO"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-extrabold text-2xl tracking-tight text-white italic">
                                    IPMMO<span className="text-[#00c8ff]">SEMARANG-SALATIGA</span>
                                </span>
                            </div>
                        </Link>
                        <div className="text-gray-400 text-sm leading-relaxed italic border-l-2 border-gray-700 pl-4 mt-4">
                            "Membangun Sinergi, Wujudkan Prestasi. <br />
                            Ikatan Pelajar Mahasiswa Mimika (IPMMO) Korwil Semarang–Salatiga. Wadah pemersatu dan pengembangan potensi mahasiswa daerah Mimika di Jawa Tengah."
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="md:col-span-4">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-8 h-1 bg-[#00c8ff]"></div>
                            <h4 className="text-xl font-bold text-white">
                                Hubungi Kami
                            </h4>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-[#00c8ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[#00c8ff] text-xs font-bold uppercase tracking-wider mb-1">Sekretariat</p>
                                    <p className="text-gray-300 text-sm">
                                        Semarang & Salatiga,<br/>Jawa Tengah, Indonesia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-[#00c8ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[#00c8ff] text-xs font-bold uppercase tracking-wider mb-1">Email Resmi</p>
                                    <p className="text-gray-300 text-sm font-medium">
                                        ipmmo.semarang.salatiga<br/>@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="md:col-span-3">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-8 h-1 bg-[#ff2a40]"></div>
                            <h4 className="text-xl font-bold text-white">
                                Media Sosial
                            </h4>
                        </div>
                        
                        <div className="flex space-x-3 mb-6">
                            <a href="#" className="w-12 h-12 rounded-xl bg-[#1e2536] flex items-center justify-center hover:bg-[#2a344a] transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                            </a>
                            <a href="#" className="w-12 h-12 rounded-xl bg-[#1e2536] flex items-center justify-center hover:bg-[#2a344a] transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.62.074-3.15.422-4.243 1.515-1.093 1.093-1.44 2.622-1.515 4.242-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.074 1.62.422 3.15 1.515 4.243 1.093 1.093 2.622 1.44 4.242 1.515 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.62-.074 3.15-.422 4.243-1.515 1.093-1.093 1.44-2.622 1.515-4.242.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.62-.422-3.15-1.515-4.243-1.093-1.093-2.623-1.44-4.243-1.515-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="#" className="w-12 h-12 rounded-xl bg-[#1e2536] flex items-center justify-center hover:bg-[#2a344a] transition-colors">
                                <span className="sr-only">YouTube</span>
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                            </a>
                        </div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-6">
                            Connect & Evolve with us.
                        </p>
                    </div>
                </div>

                {/* Bottom Footer Section */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center relative">
                    <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} <span className="text-white font-bold">IPMMO KORWIL SEMARANG-SALATIGA</span>. Excellence in Organization.
                    </p>
                    
                    <div className="flex items-center space-x-6 mr-16">
                        <Link href="/privacy" className="text-gray-400 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Terms</Link>
                        <Link href="/policy" className="text-gray-400 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">Policy</Link>
                    </div>

                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#ff2a40] hover:bg-red-600 rounded-xl flex items-center justify-center transition-colors shadow-lg"
                        aria-label="Scroll to top"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
