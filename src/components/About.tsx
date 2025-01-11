import React, { useEffect, useRef } from 'react';
import { Shield, Gamepad, Sparkles } from 'lucide-react';
import { CircuitBackground } from './about/CircuitBackground';
import { StatisticsBanner } from './about/StatisticsBanner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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

    // Animate content sections
    const elements = content.children;
    Array.from(elements).forEach((element, index) => {
      gsap.fromTo(element,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="about" ref={sectionRef} className="relative bg-gradient-to-b from-pink-400/10 via-red-300/5 to-black text-white py-24 overflow-hidden">
      <CircuitBackground />
      
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-300 bg-clip-text text-transparent">
            Welcome to Night City
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Step into a world where neon dreams meet dark reality. Experience the future 
            of gaming in a dystopian cyberpunk world where technology and humanity collide.
          </p>
        </div>

        <StatisticsBanner />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <FeatureCard
              icon={<Shield className="text-pink-400" size={24} />}
              title="Advanced Combat System"
              description="Master a deep combat system combining traditional weapons with cybernetic enhancements."
            />
            <FeatureCard
              icon={<Gamepad className="text-red-300" size={24} />}
              title="Dynamic World"
              description="Explore a living, breathing city that reacts to your choices."
            />
            <FeatureCard
              icon={<Sparkles className="text-pink-400" size={24} />}
              title="Next-Gen Graphics"
              description="Experience stunning ray-traced visuals and cutting-edge graphics."
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-red-300 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2138330/ss_7bbae8adf0c05471dfea2ebb1dc2611ee0f72835.1920x1080.jpg?t=1730212614"
                alt="Night City Combat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

     
        
      </div>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="feature-card group flex gap-4 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
    </div>
  </div>
);

export default About;