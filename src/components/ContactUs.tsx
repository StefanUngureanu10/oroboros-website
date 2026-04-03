import { useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    topic: false,
    message: false,
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    setErrors({
      ...errors,
      [name]:
        name === "email" ? !isValidEmail(value) : value.trim() === "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
      email: !isValidEmail(formData.email),
      topic: formData.topic.trim() === "",
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      setStatusMessage("Please fix the highlighted fields.");
      return;
    }

    setLoading(true);
    setStatusMessage("");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    emailjs
      .send(serviceID, templateID, {
        name: formData.name,
        email: formData.email,
        topic: formData.topic,
        message: formData.message,
      })
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", topic: "", message: "" });
        setErrors({ name: false, email: false, topic: false, message: false });
      })
      .catch((error) => {
        console.error(error); // 🔥 keep this for debugging
        setStatusMessage("Failed to send message. Try again later.");
      })
      .finally(() => setLoading(false));
  };

  const StyledLink = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#a108a1ff",
        textDecoration: "none",
        transition: "all 0.3s",
        marginLeft: "10px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#000";
        e.currentTarget.style.backgroundColor = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#a108a1ff";
        e.currentTarget.style.backgroundColor = "transparent";
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
        color: "#fff",
        minHeight: "60vh",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Contact Us
      </h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p>
          For booking and other inquiries, email us at:
          <StyledLink
            href="mailto:oroboros.crew@gmail.com"
            label="oroboros.crew@gmail.com"
          />
        </p>
        <p>Or use the contact form below:</p>
      </div>

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
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: errors.name ? "1px solid red" : "1px solid #fff",
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
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: errors.email ? "1px solid red" : "1px solid #fff",
            backgroundColor: "#222",
            color: "white",
          }}
        />

        <input
          type="text"
          name="topic"
          placeholder="Topic"
          value={formData.topic}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: errors.topic ? "1px solid red" : "1px solid #fff",
            backgroundColor: "#222",
            color: "white",
          }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: errors.message ? "1px solid red" : "1px solid #fff",
            backgroundColor: "#222",
            color: "white",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#a108a1ff",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {statusMessage && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          {statusMessage}
        </p>
      )}
    </section>
  );
}