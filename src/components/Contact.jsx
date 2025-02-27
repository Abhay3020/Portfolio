import React, { useState } from "react";
import ContactForm from "@components/ContactForm"; 
import "@styles/Contact.css";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const closeFormOnOutsideClick = (e) => {
    if (e.target.classList.contains("contact-overlay")) {
      setShowForm(false);
    }
  };

  return (
    <>
      {/* Contact element that toggles the form */}
      <span className="contact-trigger" onClick={toggleForm}>
        Contact Me
      </span>

      {/* Show the form only if showForm is true */}
      {showForm && (
        <div className="contact-overlay" onClick={closeFormOnOutsideClick}>
          <div className="contact-form-container">
            <ContactForm onSuccess={toggleForm} />
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
