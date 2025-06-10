// src/pages/Resume.js
import React from "react";

const Resume = () => {
  const resumeURL = "https://portfolio-backend-faa0.onrender.com/uploads/Harsh_Verma_Resume.pdf";

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>📄 My Resume</h2>
      <iframe
        src={resumeURL}
        width="80%"
        height="600px"
        title="Harsh Verma Resume"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      />
      <br />
      <a
        href={resumeURL}
        download="Harsh_Verma_Resume.pdf"
        style={{
          marginTop: "1rem",
          display: "inline-block",
          background: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        ⬇️ Download Resume
      </a>
    </div>
  );
};

export default Resume;
