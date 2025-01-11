import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = '' }: GlitchTextProps) => (
  <div className="relative">
    <h1 className={`${className} relative z-10`}>{text}</h1>
    <h1 className={`${className} absolute top-0 left-0 text-pink-400 opacity-50 animate-glitch-1`}>
      {text}
    </h1>
    <h1 className={`${className} absolute top-0 left-0 text-red-300 opacity-50 animate-glitch-2`}>
      {text}
    </h1>
  </div>
);