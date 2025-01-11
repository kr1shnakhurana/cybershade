import React, { useEffect, useState } from 'react';

const Preloader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;
    let currentProgress = 0;

    const timer = setInterval(() => {
      if (!mounted) return;
      
      currentProgress += Math.random() * 2;
      
      if (currentProgress <= 100) {
        setProgress(Math.min(Math.round(currentProgress), 100));
      }
      
      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(onLoadComplete, 10);
      }
    }, 10);

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm mx-auto">
        {/* Responsive glowing background */}
        <div className="absolute -z-10 w-full aspect-square max-w-[24rem] bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        
        {/* Main content with responsive spacing */}
        <div className="space-y-6 sm:space-y-8">
          {/* Logo/Title with responsive text sizes */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-300 bg-clip-text text-transparent animate-pulse">
              CYBERSHADE
            </h1>
            <p className="text-xs sm:text-sm text-gray-400">Loading Night City...</p>
          </div>

          {/* Loading indicator with responsive sizing */}
          <div className="relative px-4 sm:px-0">
            <div className="h-1 sm:h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-400 to-red-300 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="mt-2 text-xs sm:text-sm text-gray-400 text-center">
              {progress}%
            </div>
          </div>

          {/* Responsive decorative elements */}
          <div className="flex justify-center gap-1.5 sm:gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-400 animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;