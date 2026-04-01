import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function FadeInOnScroll({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Stops observing after trigger
        }
      },
      {
        threshold: 0.2, // triggers when 20% visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)",
        transition: "opacity 1.5s ease, transform 1.5s ease",
        position: "relative",
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}