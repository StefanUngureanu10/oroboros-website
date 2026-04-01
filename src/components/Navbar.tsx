import { FadeInOnScroll } from "./FadeInOnScroll";
import { useEffect, useState } from "react";
import logo from "../assets/oroboros_logo.png"

export function Navbar() {
  const sections = [
    { id: "band-photo", label: "Home" },
    { id: "about", label: "About" },
    { id: "music", label: "Music" },
    { id: "shows", label: "Shows" },
    { id: "merch", label: "Merch" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
];

  const [activeSection, setActiveSection] = useState<string>(""); // <- start with nothing highlighted

  // Track which section is in view
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#111",
      }}
    >
      <FadeInOnScroll>
        <img
          src={logo}
          alt="Oroboros Logo"
          style={{
            height: "250px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
      </FadeInOnScroll>

      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#fff",
          marginBottom: "20px",
        }}
      />

      <div style={{ display: "flex", gap: "20px" }}>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            style={{
              background: "none",
              border: "2px solid #fff",
              color: "#fff",
              fontWeight: activeSection === section.id ? "bold" : "normal",
              cursor: "pointer",
              transition: "all 0.5s",
              fontSize: "16px",
              padding: "6px 12px",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget;
              btn.style.backgroundColor = "#fff";
              btn.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget;
              btn.style.backgroundColor = "transparent";
              btn.style.color =
                activeSection === section.id ? "#fff" : "#fff";
            }}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}