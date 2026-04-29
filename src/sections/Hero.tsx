import React from 'react'
import Button from '../components/Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="fade-in">
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
                            Selamat Datang di IPMMO
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
                            Membangun Sinergi, <br />
                            <span className="text-secondary">
                                Wujudkan Prestasi.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                            Ikatan Pelajar Mahasiswa Mimika (IPMMO) Korwil
                            Semarang–Salatiga berkomitmen untuk menjadi wadah
                            aspirasi, pengembangan diri, dan pemersatu bagi
                            mahasiswa Mimika di tanah perantauan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" href="/tentang">
                                Kenali Kami
                            </Button>
                            <Button size="lg" variant="outline" href="/program">
                                Program Kerja
                            </Button>
                        </div>
                    </div>

                    <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl fade-in animation-delay-300">
                        <Image
                            src="/images/ipmmo.jpeg"
                            alt="IPMMO Members"
                            fill
                            className="object-cover object-bottom"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6 glass-morphism p-6 rounded-2xl">
                            <div className="flex items-center space-x-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-white bg-blue-200 overflow-hidden"
                                        >
                                            <Image
                                                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                                alt="Member"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-primary">
                                        500+ Anggota
                                    </p>
                                    <p className="text-muted-foreground">
                                        Bergabung bersama kami
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
