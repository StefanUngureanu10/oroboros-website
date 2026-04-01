import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",

        width: "50px",
        height: "50px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        fontSize: "20px",
        lineHeight: "1",

        backgroundColor: hovered ? "#fff" : "#111",
        color: hovered ? "#000" : "#fff",

        border: "1px solid #fff",
        borderRadius: "6px", // 👈 slight rounding (can be 0 if you want sharp)

        cursor: "pointer",

        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",

        transform: visible
          ? hovered
            ? "scale(1.1)"
            : "scale(1)"
          : "translateY(20px)",

        transition: "all 0.3s ease",

        zIndex: 1000,
      }}
    >
      <span
        style={{
          display: "block",
          transform: "translateY(-1px)", // 👈 tiny optical correction
        }}
      >
        ▲
      </span>
    </button>
  );
}