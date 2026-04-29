'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navItems } from '@/data/dummy'
import Button from './Button'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="container-custom flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3">
                    <div className="relative w-12 h-12">
                        <Image
                            src="/img/logo.jpeg"
                            alt="Logo IPMMO"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span
                        className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-primary'}`}
                    >
                        IPMMO{' '}
                        <span className="text-secondary font-medium">S-S</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium transition-colors hover:text-secondary ${
                                pathname === item.href
                                    ? 'text-secondary'
                                    : 'text-primary'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button size="sm" href="/kontak">
                        Gabung
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-primary focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 transform ${
                    isOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
            >
                <div className="p-4 space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block text-base font-medium text-primary hover:text-secondary py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button className="w-full" href="/kontak">
                        Gabung Sekarang
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
