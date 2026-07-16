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
          width="32"
          height="28"
          viewBox="0 0 32 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C16 2 22 8 22 16C22 20 19.5 23 16 24C12.5 23 10 20 10 16C10 8 16 2 16 2Z" fill="#e5e7eb" />
          <path d="M16 4C16 4 20 9 20 15C20 18 18.5 20.5 16 21.5C13.5 20.5 12 18 12 15C12 9 16 4 16 4Z" fill="#9ca3af" />
          <path d="M16 1C16 1 17.5 5 17.5 8C17.5 9.5 17 10.5 16 11C15 10.5 14.5 9.5 14.5 8C14.5 5 16 1 16 1Z" fill="#ef4444" />
          <ellipse cx="16" cy="14" rx="2" ry="2.5" fill="#3b82f6" />
          <path d="M10 18L7 22L10 20Z" fill="#f97316" />
          <path d="M22 18L25 22L22 20Z" fill="#f97316" />
          <path d="M13 24L12 28L14 26L16 28L18 26L20 28L19 24" fill="#f97316" opacity="0.9" />
          <path d="M14.5 24L14 27L16 25.5L18 27L17.5 24" fill="#fbbf24" />
        </svg>
      </div>
    </div>
  );
}
