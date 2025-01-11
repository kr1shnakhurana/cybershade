import React from 'react';

interface GalleryImageProps {
  url: string;
  alt: string;
  title: string;
  description: string;
  location?: string;
  onClick: () => void;
}

export const GalleryImage = ({ url, alt, title, description, location, onClick }: GalleryImageProps) => (
  <div
    className="relative group cursor-pointer overflow-hidden rounded-lg"
    onClick={onClick}
  >
    <div className="aspect-video">
      <img
        src={url}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        {location && (
          <p className="text-sm text-pink-400 mb-2">
            Night City - {location}
          </p>
        )}
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400 transition-colors duration-300" />
  </div>
);