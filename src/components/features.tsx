import React, { useEffect, useRef } from 'react';
import { Shield, Gamepad, Sparkles } from 'lucide-react';
import { CircuitBackground } from './about/CircuitBackground';
import { ImageGallery } from './gallery/ImageGallery';
import { FeatureGrid } from './about/FeatureGrid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Features = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

 // Create zoom animation for the entire section
    gsap.fromTo(section,
      {
        scale: 0.85,
        opacity: 0,
        y: 100
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );
    
   return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return(
    <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <CircuitBackground /> 
        <div ref={sectionRef} className="space-y-16">
          <FeatureGrid
            features={[
              { icon: Shield, title: "Secure", description: "Top-notch security for your data." },
              { icon: Gamepad, title: "Engaging", description: "Interactive and fun to use." },
              { icon: Sparkles, title: "Innovative", description: "Packed with cutting-edge technology." },
            ]}
          />
        <ImageGallery />
        </div>
       
    </div>
  );
};

export default Features;
