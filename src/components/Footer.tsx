import { FaInstagram, FaFacebookF, FaYoutube, FaSpotify, FaBandcamp, FaTiktok } from "react-icons/fa";

export function Footer() {
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com/oroboros.crew/", color: "#E1306C" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/channel/UCgaqHRmlut16IW-h9OZrM3g", color: "#FF0000" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com/people/OROBOROS/100063581351214/?mibextid=LQQJ4d&rdid=tVOAHj0pKxNOgkS7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FjQpJL8EqE5sg2SKu%2F%3Fmibextid%3DLQQJ4d", color: "#1877F2" },
    { icon: <FaSpotify />, url: "https://open.spotify.com/intl-de/artist/6xhSHxNQrZjyRjYDS81Gz8?si=EqROejXgRcOFjCUY-i3rZg&app_destination=copy-link&nd=1&dlsi=f65bfd0926b3428a", color: "#56f218" },
    { icon: <FaBandcamp />, url: "https://oroboros-crew.bandcamp.com/community", color: "#0a52b1" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com/@oroboros.crew?_t=zn-90nkv0tblum&_r=1", color: "#707174" },
  ];

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