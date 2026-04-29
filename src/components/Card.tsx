import React from 'react';
import Image from 'next/image';

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
