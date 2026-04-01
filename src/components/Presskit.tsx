export function PressKit() {
  const files = [
    {
      name: "Electronic Press Kit (EPK)",
      url: "https://drive.google.com/drive/folders/1QfzhZN4MabmkbWinsHggbMEYG1sw92MJ?usp=drive_link",
    },
    {
      name: "Technical Rider",
      url: "https://drive.google.com/drive/folders/1u8th8G9f-mQZ-HaoWs9VhF_77Vh-n5ao?usp=drive_link",
    },
    {
      name: "Media Folder (Photos, Logos, etc.)",
      url: "https://drive.google.com/drive/folders/1rxZJSQt90dVyyd6Z_1cLggrFpsnexEL9?usp=drive_link",
    },
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#111",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "40px" }}>Infos / Downloads</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {files.map((file, idx) => (
          <a
            key={idx}
            href={file.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "15px 25px",
              border: "1px solid #fff",
              borderRadius: "6px",
              color: "#fff",
              textDecoration: "none",
              fontSize: "16px",
              transition: "all 0.3s ease",
              minWidth: "260px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.color = "#000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
          >
            {file.name}
          </a>
        ))}
      </div>
    </section>
  );
}