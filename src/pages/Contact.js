// src/pages/Contact.js
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3rpbaus",   // From EmailJS dashboard
        "template_ec85iyf",  // From EmailJS dashboard
        formRef.current,
        "wKdRV1FWWgpnLHPGb"       // Public key from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage("❌ Failed to send message.");
        }
      );
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>📬 Contact Me</h2>
      <form ref={formRef} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="6" placeholder="Your Message" required />
        <button type="submit" style={{ padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>
          Send Message
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Contact;
