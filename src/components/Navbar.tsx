import { FadeInOnScroll } from "./FadeInOnScroll";
import { useEffect, useState } from "react";
import logo from "../assets/oroboros_logo.png";

export function Navbar() {
  const sections = [
    { id: "band-photo", label: "Home" },
    { id: "about", label: "About" },
    { id: "music", label: "Music" },
    { id: "shows", label: "Shows" },
    { id: "merch", label: "Merch" },
    { id: "gallery", label: "Gallery" },
    { id: "infos-downloads", label: "Infos / Downloads" }, 
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
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
        padding: isMobile ? "12px" : "20px",
        backgroundColor: "#111",
      }}
    >
      {/* Logo */}
      <FadeInOnScroll>
        <img
          src={logo}
          alt="Oroboros Logo"
          style={{
            height: isMobile ? "100px" : "220px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
      </FadeInOnScroll>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#fff",
          marginBottom: isMobile ? "12px" : "20px",
        }}
      />

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isMobile ? "10px" : "18px",
          maxWidth: "900px",
        }}
      >
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              style={{
                background: isActive ? "#fff" : "transparent",
                border: "1px solid #fff",
                color: isActive ? "#000" : "#fff",
                fontWeight: isActive ? "bold" : "normal",
                cursor: "pointer",
                transition: "all 0.25s ease",
                fontSize: isMobile ? "14px" : "16px",
                padding: isMobile ? "5px 10px" : "6px 14px",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = "#000";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.backgroundColor = isActive
                    ? "#fff"
                    : "transparent";
                  e.currentTarget.style.color = isActive ? "#000" : "#fff";
                }
              }}
            >
              {section.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}