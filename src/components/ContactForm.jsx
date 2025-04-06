import React, { useState } from "react";
import emailjs from "emailjs-com";
import "@styles/ContactForm.css";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ✅ You can either pass these via .env or hardcode for testing
  const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID || "your_service_id";
  const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID || "your_template_id";
  const userID = process.env.REACT_APP_EMAIL_USER_ID || "your_user_id";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        userID
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setTimeout(() => {
            setStatus("");
            setFormData({ name: "", email: "", subject: "", message: "" });
            onClose();
          }, 1500);
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-form-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <form onSubmit={handleSubmit} className="contact-form">
          <h3>Let's Connect!</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
