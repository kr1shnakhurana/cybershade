import React, { useState, useEffect, useRef } from 'react';
import { galleryImages } from './galleryData';
import { GalleryImage } from './GalleryImage';
import { ImageModal } from './ImageModal';
import { VideoTrailer } from '../media/VideoTrailer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const gallery = galleryRef.current;
    if (!section || !gallery) return;

    // Section entrance animation
    gsap.fromTo(section,
      { 
        opacity: 0,
        y: 30 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Gallery images staggered animation
    const images = gallery.querySelectorAll('.gallery-image');
    gsap.fromTo(images,
      { 
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gallery,
          start: "top 70%",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="py-16 px-4" ref={sectionRef}>
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-red-300 bg-clip-text text-transparent">
        Night City Gallery
      </h2>

      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4 text-white">Official Trailer</h3>
        <VideoTrailer />
      </div>

      <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-image">
            <GalleryImage
              {...image}
              onClick={() => setSelectedImage(image.url)}
            />
            <div className="mt-4 opacity-0">
              <h4 className="text-lg font-semibold text-white">{image.title}</h4>
              <p className="text-gray-400">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};