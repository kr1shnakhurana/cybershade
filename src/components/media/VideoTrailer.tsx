import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Maximize2, Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const VideoTrailer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Create zoom animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          video.play();
          setIsPlaying(true);
        },
        onLeave: () => {
          video.pause();
          setIsPlaying(false);
        },
        onEnterBack: () => {
          video.play();
          setIsPlaying(true);
        },
        onLeaveBack: () => {
          video.pause();
          setIsPlaying(false);
        }
      }
    });

    // Add zoom animation
    tl.fromTo(container,
      { 
        scale: 0.8,
        opacity: 0,
        y: 50
      },
      { 
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }
    );

    // Cleanup
    return () => {
      video.pause();
      tl.kill();
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePiP = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (videoRef.current) {
        await videoRef.current.requestPictureInPicture();
      }
    } catch (error) {
      console.error('PiP failed:', error);
    }
  };

  return (
    <div ref={containerRef} className="relative group rounded-lg overflow-hidden bg-black/50 backdrop-blur will-change-transform">
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        src="https://video.cloudflare.steamstatic.com/store_trailers/256983891/movie480_vp9.webm?t=1700653184"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-pink-400/20 hover:bg-pink-400/40 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-pink-400/20 hover:bg-pink-400/40 transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <button
            onClick={togglePiP}
            className="p-2 rounded-full bg-pink-400/20 hover:bg-pink-400/40 transition-colors"
          >
            <Maximize2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};