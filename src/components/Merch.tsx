import { merchItems } from "../data/merch";

export function Merch() {
  return (
    <section
      id="merch"
      style={{
        padding: "60px 20px",
        backgroundColor: "#111",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "40px" }}>Merch</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {merchItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #222",
              padding: "15px",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* SOLD OUT overlay */}
            {item.soldOut && (
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#fff",
                  color: "#000",
                  padding: "5px 10px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                SOLD OUT
              </div>
            )}

            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                marginBottom: "15px",
                borderRadius: "4px",
                transition: "transform 0.3s ease",
              }}
            />

            {/* Name */}
            <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
              {item.name}
            </div>

            {/* Price */}
            {!item.soldOut && (
                <div style={{ marginBottom: "15px", opacity: 0.7 }}>
                    {item.price}
                </div>
            )}

            {/* Button */}
            {!item.soldOut && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 15px",
                  border: "1px solid #fff",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                Buy Now
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}