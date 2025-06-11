// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      padding: isMobile ? "20px" : "40px",
      textAlign: "center",
    },
    profileImage: {
      width: isMobile ? "120px" : "150px",
      height: isMobile ? "120px" : "150px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "20px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    },
    heading: {
      fontSize: isMobile ? "24px" : "32px",
    },
    spanHighlight: {
      color: "#00bcd4",
    },
    paragraph: {
      maxWidth: "600px",
      margin: "20px auto",
      fontSize: isMobile ? "16px" : "18px",
      padding: isMobile ? "0 10px" : "0",
    },
    buttonGroup: {
      marginTop: "30px",
    },
    button: {
      margin: isMobile ? "10px 0" : "0 10px",
      padding: "12px 24px",
      display: "inline-block",
      textDecoration: "none",
      borderRadius: "6px",
      fontWeight: "bold",
    },
    viewProjects: {
      backgroundColor: "#00bcd4",
      color: "white",
    },
    downloadResume: {
      backgroundColor: "#444",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <img
        src="/harsh-profile.jpg"
        alt="Harsh Verma"
        style={styles.profileImage}
      />

      <h1 style={styles.heading}>
        Hello, I'm <span style={styles.spanHighlight}>Harsh Verma</span>
      </h1>
      <p style={styles.paragraph}>
        A passionate full-stack developer skilled in the MERN stack. I love
        building clean, modern web apps and solving real-world problems through
        code.
      </p>

      <div style={styles.buttonGroup}>
        <Link to="/projects" style={{ ...styles.button, ...styles.viewProjects }}>
          View Projects
        </Link>
        <a
          href="/Harsh_Verma_Resume.pdf"
          download
          style={{ ...styles.button, ...styles.downloadResume }}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Home;
