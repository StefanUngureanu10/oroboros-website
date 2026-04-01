import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaSpotify, FaBandcamp, FaTiktok } from "react-icons/fa";

export function Footer() {
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://instagram.com/yourprofile", color: "#E1306C" },
    { icon: <FaYoutube />, url: "https://youtube.com/yourprofile", color: "#FF0000" },
    { icon: <FaFacebookF />, url: "https://facebook.com/yourprofile", color: "#1877F2" },
    { icon: <FaSpotify />, url: "https://facebook.com/yourprofile", color: "#56f218" },
    { icon: <FaBandcamp />, url: "https://facebook.com/yourprofile", color: "#0a52b1" },
    { icon: <FaTiktok />, url: "https://facebook.com/yourprofile", color: "#707174" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#111",
        color: "#fff",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Social Icons */}
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
          listStyle: "none",
          padding: 0,
          margin: "0 0 20px 0",
        }}
      >
        {socialLinks.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "#222",
                color: "#fff",
                fontSize: "20px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = link.color;
                (e.currentTarget as HTMLAnchorElement).style.color = "#111";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#222";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>

      

      {/* Copyright */}
      <div style={{ fontSize: "14px", opacity: 0.6 }}>
        © {new Date().getFullYear()} Association OROBOROS
      </div>
    </footer>
  );
}