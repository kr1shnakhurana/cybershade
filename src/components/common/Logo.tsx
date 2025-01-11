import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => (
  <div className={`font-cyberpunk text-3xl tracking-wider ${className}`}>
    <span className="bg-gradient-to-r from-pink-400 to-red-300 bg-clip-text text-transparent hover:from-red-300 hover:to-pink-400 transition-all duration-300">
      CYBERSHADE
    </span>
  </div>
);