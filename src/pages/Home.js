import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      {/* Profile Image */}
      <img
        src="/harsh-profile.jpg"
        alt="Harsh Verma"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
        }}
      />

      {/* Name and Intro */}
      <h1>Hello, I'm <span style={{ color: "#00bcd4" }}>Harsh Verma</span></h1>
      <p style={{ maxWidth: "600px", margin: "20px auto", fontSize: "18px" }}>
        A passionate full-stack developer skilled in the MERN stack. I love building clean, modern web apps and solving real-world problems through code.
      </p>

      {/* Buttons */}
      <div style={{ marginTop: "30px" }}>
        <Link
          to="/projects"
          style={{
            marginRight: "20px",
            padding: "12px 24px",
            backgroundColor: "#00bcd4",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold"
          }}
        >
          View Projects
        </Link>

        <a
          href="/Harsh_Verma_Resume.pdf"
          download
          style={{
            padding: "12px 24px",
            backgroundColor: "#444",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold"
          }}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Home;
