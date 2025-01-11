import React from 'react';
import { Play, Download } from 'lucide-react';
import { BackgroundVideo } from './hero/BackgroundVideo';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundVideo />
      
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
          Night City Awaits
        </h1>
        
        <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto animate-fade-in">
          Become a cyber-enhanced mercenary and forge your legend on the streets of Night City.
          Your choices shape the future in this open-world action-adventure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-4 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-300" />
            <div className="absolute inset-0 bg-white/20 transform translate-y-full transition-transform group-hover:translate-y-0" />
            <span className="relative flex items-center justify-center gap-2 text-white font-bold">
              <Play size={20} />
              Play Now
            </span>
          </button>
          <button className="group relative px-8 py-4 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-red-300/20 transform translate-y-full transition-transform group-hover:translate-y-0" />
            <span className="relative flex items-center justify-center gap-2 text-white font-bold">
              <Download size={20} />
              Download Demo
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </div>
  );
};

export default Hero;