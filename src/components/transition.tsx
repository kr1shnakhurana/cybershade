import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CircuitBackground } from './about/CircuitBackground';

gsap.registerPlugin(ScrollTrigger);

const TransitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const objectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const objects = objectsRef.current;
    if (!section || !objects) return;

    // Responsive animation values based on screen size
    const yOffset = window.innerWidth < 768 ? -50 : -100;
    const scaleValue = window.innerWidth < 768 ? 1.1 : 1.2;

    gsap.to(objects.children, {
      y: yOffset,
      scale: scaleValue,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (

    <div 
   
      ref={sectionRef} 
      className="relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black"
      style={{ height: 'min(50vh, 500px)' }}
    >
      {/* Floating objects container with responsive positioning */}
      <div ref={objectsRef} className="absolute inset-0">
        {/* Holographic city - responsive sizing and positioning */}
        <div className="absolute opacity-100
          sm:top-1.5/4 sm:left-4/2
          top-1/3 left-[35%]
          sm:w-100 sm:h-64
          w-100 h-40"
        >
          
<CircuitBackground  />
          <img
            src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/ss_526123764d1c628caa1eb62c596f1b732f416c8c.1920x1080.jpg?t=1734434803"
            alt="Cyberpunk City"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>

        

       
      </div>

      {/* Responsive gradients and effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-300/50 to-transparent" />
      </div>
    </div>
  );
};

export default TransitionSection;
