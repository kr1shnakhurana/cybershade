export const BackgroundVideo = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="https://cdn.pixabay.com/video/2024/02/27/202179-917223905_large.mp4" type="video/mp4" />
    </video>
  </div>
);