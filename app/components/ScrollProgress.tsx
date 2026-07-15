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
          className="car-emoji"
          aria-hidden="true"
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="8" width="28" height="8" rx="3" fill="#ef4444" />
          <rect x="6" y="4" width="16" height="6" rx="2" fill="#ef4444" />
          <rect x="7" y="5" width="6" height="4" rx="1" fill="#bfdbfe" opacity="0.9" />
          <rect x="14" y="5" width="7" height="4" rx="1" fill="#bfdbfe" opacity="0.9" />
          <rect x="22" y="8" width="6" height="3" rx="1" fill="#fbbf24" />
          <circle cx="9" cy="17" r="3" fill="#1f2937" />
          <circle cx="9" cy="17" r="1.5" fill="#6b7280" />
          <circle cx="23" cy="17" r="3" fill="#1f2937" />
          <circle cx="23" cy="17" r="1.5" fill="#6b7280" />
          <rect x="0" y="11" width="3" height="2" rx="1" fill="#f97316" />
        </svg>
      </div>
    </div>
  );
}
