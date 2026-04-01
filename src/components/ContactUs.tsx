import { useState } from "react";
import emailjs from "emailjs-com";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "your_service_id";   // Replace with your EmailJS service ID
    const templateID = "your_template_id"; // Replace with your EmailJS template ID
    const userID = "your_public_key";      // Replace with your EmailJS public key

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", topic: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setStatusMessage("Failed to send message. Try again later.");
      });
  };

  // Helper function to generate styled links with hover
  const StyledLink = ({
    href,
    label,
  }: {
    href: string;
    label: string;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#a108a1ff",
        textDecoration: "none",
        /*padding: "2px 2px",*/
        transition: "all 0.3s",
        marginLeft: "10px",
      }}
      onMouseEnter={(e) => {
        const link = e.currentTarget;
        link.style.color = "#000";
        link.style.backgroundColor = "#fff";
      }}
      onMouseLeave={(e) => {
        const link = e.currentTarget;
        link.style.color = "#a108a1ff";
        link.style.backgroundColor = "transparent";
      }}
    >
      {label}
    </a>
  );

  return (
    <section
      id="contact"
      style={{
        padding: "60px 40px",
        backgroundColor: "#111",
        color: "white",
        minHeight: "60vh",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Contact Us</h2>

      {/* Contact Info */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p>
          For booking and other inquiries, please email us at:{" "}
          <StyledLink href="mailto:oroboros.crew@gmail.com" label="oroboros.crew@gmail.com" />
        </p>
        <p>
            Or use the contact form below:
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #fff",
            backgroundColor: "#222",
            color: "white",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #fff",
            backgroundColor: "#222",
            color: "white",
          }}
        />
        <input
          type="topic"
          name="topic"
          placeholder="Topic"
          value={formData.topic}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #fff",
            backgroundColor: "#222",
            color: "white",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #fff",
            backgroundColor: "#222",
            color: "white",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#a108a1ff",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            const btn = e.currentTarget;
            btn.style.backgroundColor = "#fff";
            btn.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget;
            btn.style.backgroundColor = "#a108a1ff";
            btn.style.color = "#000";
          }}
        >
          Send Message
        </button>
      </form>

      {statusMessage && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>{statusMessage}</p>
      )}
    </section>
  );
}