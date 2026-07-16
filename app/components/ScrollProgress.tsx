"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress-bar">
      <div
        className="scroll-progress-fill"
        style={{ width: `${progress}%` }}
      />
      <div
        className="scroll-progress-car"
        style={{ left: `calc(${Math.min(progress, 97)}% - 14px)` }}
      >
        <svg
          className="rocket-emoji"
          aria-hidden="true"
          width="36"
          height="20"
          viewBox="0 0 36 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 10C32 10 26 4 18 4C10 4 5 7 4 10C5 13 10 16 18 16C26 16 32 10 32 10Z" fill="#e5e7eb" />
          <path d="M30 10C30 10 25 5.5 18 5.5C11 5.5 7 8 6 10C7 12 11 14.5 18 14.5C25 14.5 30 10 30 10Z" fill="#9ca3af" />
          <path d="M33 10C33 10 29 7 26 7C23 7 21 8.5 20 10C21 11.5 23 13 26 13C29 13 33 10 33 10Z" fill="#ef4444" />
          <ellipse cx="22" cy="10" rx="2.5" ry="2" fill="#3b82f6" />
          <path d="M8 6L4 3L6 6Z" fill="#f97316" />
          <path d="M8 14L4 17L6 14Z" fill="#f97316" />
          <path d="M4 10L0 8L2 10L0 12Z" fill="#f97316" opacity="0.9" />
          <path d="M4 10L1 9L2 10L1 11Z" fill="#fbbf24" />
        </svg>
      </div>
    </div>
  );
}
