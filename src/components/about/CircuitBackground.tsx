export const CircuitBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%">
        <pattern
          id="circuit-pattern"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          className="text-pink-400"
        >
          <path
            d="M10 10h30v30h-30z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle cx="25" cy="25" r="3" fill="currentColor" />
          <path
            d="M25 10v12M10 25h12"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  </div>
);