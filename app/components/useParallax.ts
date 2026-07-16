"use client";

import { useEffect, useState } from "react";

export function useParallax(elementRef: React.RefObject<HTMLElement | null>) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = elementRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = elementCenter - viewportCenter;
      const maxOffset = 15;
      const normalized = Math.max(
        -maxOffset,
        Math.min(maxOffset, (distance / viewportCenter) * maxOffset)
      );
      setOffset(normalized);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementRef]);

  return offset;
}
