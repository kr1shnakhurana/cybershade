interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

export const ImageModal = ({ imageUrl, onClose }: ImageModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={onClose}>
    <div className="relative max-w-7xl w-full">
      <button
        onClick={onClose}
        className="absolute -top-12 right-0 text-white hover:text-[#3BF4FB] transition-colors"
      >
        <X size={24} />
      </button>
      <img
        src={imageUrl}
        alt="Enlarged view"
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
);