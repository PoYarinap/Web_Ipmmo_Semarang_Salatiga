import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navItems } from '@/data/dummy'

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link
                            href="/"
                            className="flex items-center space-x-3 mb-6"
                        >
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/img/logo.jpeg"
                                    alt="Logo IPMMO"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-bold text-xl tracking-tight">
                                IPMMO{' '}
                                <span className="text-secondary">S-S</span>
                            </span>
                        </Link>
                        <p className="text-blue-100 text-sm leading-relaxed">
                            Ikatan Pelajar Mahasiswa Mimika (IPMMO) Korwil
                            Semarang–Salatiga. Wadah pemersatu dan pengembangan
                            potensi mahasiswa daerah Mimika di Jawa Tengah.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">
                            Navigasi
                        </h4>
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-blue-100 hover:text-secondary text-sm transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">
                            Hubungi Kami
                        </h4>
                        <ul className="space-y-4 text-sm text-blue-100">
                            <li className="flex items-start space-x-3">
                                <svg
                                    className="w-5 h-5 text-secondary shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>
                                    Semarang & Salatiga, Jawa Tengah, Indonesia
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="w-5 h-5 text-secondary shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>ipmmo.semarang.salatiga@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">
                            Media Sosial
                        </h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.62.074-3.15.422-4.243 1.515-1.093 1.093-1.44 2.622-1.515 4.242-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.074 1.62.422 3.15 1.515 4.243 1.093 1.093 2.622 1.44 4.242 1.515 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.62-.074 3.15-.422 4.243-1.515 1.093-1.093 1.44-2.622 1.515-4.242.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.62-.422-3.15-1.515-4.243-1.093-1.093-2.623-1.44-4.243-1.515-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-blue-200 text-xs">
                        © {new Date().getFullYear()} IPMMO Korwil
                        Semarang–Salatiga. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
