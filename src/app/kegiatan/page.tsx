import React from 'react';
import Image from 'next/image';
import { activities } from '@/data/dummy';
import Button from '@/components/Button';

export const metadata = {
  title: "Kegiatan | IPMMO Korwil Semarang–Salatiga",
};

const Kegiatan = () => {
  return (
    <div className="pt-24">
      <section className="bg-primary py-20 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Agenda & Kegiatan</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Dokumentasi dan informasi mengenai berbagai kegiatan yang telah dan akan dilaksanakan oleh IPMMO.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {activities.map((activity, index) => (
              <div key={activity.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <Image src={activity.image} alt={activity.title} fill className="object-cover" />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-sm font-bold text-secondary uppercase tracking-widest">
                    <span>{activity.date}</span>
                    <span className="w-2 h-2 bg-border rounded-full"></span>
                    <span>{activity.location}</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-primary">{activity.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{activity.description}</p>
                  <Button variant="outline">Lihat Dokumentasi</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kegiatan;
