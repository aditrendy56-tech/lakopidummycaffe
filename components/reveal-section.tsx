"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function RevealSection({ children, className = "", id }: RevealSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`reveal ${visible ? "show" : ""} ${className}`.trim()}>
      {children}
    </section>
  );
}