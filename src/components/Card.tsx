import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface CardProps {
  title: string;
  description?: string;
  image?: string;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const Card = ({ title, description, image, footer, className = '', children }: CardProps) => {
  return (
    <div className={`bg-card text-card-foreground rounded-2xl shadow-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
      {image && (
        <div className="relative h-48 w-full">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {description && <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>}
        {children}
      </div>
      {footer && <div className="px-6 py-4 bg-muted/50 border-t border-border">{footer}</div>}
    </div>
  );
};

export const MemberCard = ({ name, role, image, period }: { name: string, role: string, image: string, period: string }) => {
  return (
    <div className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border border-border hover:shadow-lg transition-all">
      <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-primary/10 group-hover:border-primary/30 transition-all">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <h4 className="text-lg font-bold text-center">{name}</h4>
      <p className="text-secondary font-semibold text-sm">{role}</p>
      <p className="text-muted-foreground text-xs mt-1">{period}</p>
    </div>
  );
};

export const NewsCard = ({ 
  title, 
  description, 
  image, 
  category, 
  date, 
  author = 'ADMIN_IPMMO',
  href = '#' 
}: { 
  title: string, 
  description: string, 
  image: string, 
  category: string, 
  date: string, 
  author?: string,
  href?: string 
}) => {
  return (
    <Link href={href} className="group flex flex-col bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
      <div className="relative h-56 w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-4 left-0">
          <span className="bg-[#00c8ff] text-white text-xs font-bold px-4 py-2 rounded-r-full uppercase tracking-wider shadow-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase mb-4">
          <span className="text-[#00c8ff]">{date}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-400">{author}</span>
        </div>
        <h3 className="text-xl font-extrabold text-[#0f1525] mb-3 leading-snug group-hover:text-[#00c8ff] transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[#0f1525] font-extrabold text-sm tracking-widest uppercase">
            Baca Selengkapnya
          </span>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#00c8ff] transition-colors">
            <svg className="w-5 h-5 text-[#0f1525] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

