type Props = {
  image: string;
  alt?: string;
};

export function BandPhoto({ image, alt = "OROBOROS" }: Props) {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        backgroundColor: "#111",
      }}
    >
      <img
        src={image}
        alt={alt}
        style={{
          width: "80%",
          maxWidth: "800px",
          objectFit: "cover",
          borderRadius: "40px",              // more rounded
          filter: "blur(0.3px)",             // subtle softness
          boxShadow: "0 0 40px rgba(0,0,0,0.6)",
            transform: "rotate(-0.5deg)",      // slight imperfection
        }}
      />
    </section>
  );
}