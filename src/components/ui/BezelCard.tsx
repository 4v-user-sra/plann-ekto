import React from 'react';

interface BezelCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function BezelCard({ children, className = '', innerClassName = '' }: BezelCardProps) {
  return (
    <div
      className={`relative bg-brand-panel border border-brand-border p-8 rounded-none transition-all duration-300 ${className} ${innerClassName}`}
    >
      {children}
    </div>
  );
}
