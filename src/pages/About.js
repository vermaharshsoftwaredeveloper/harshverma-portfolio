// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h1 style={styles.title}>About Me</h1>
        <p style={styles.text}>
          Hi, I'm <strong>Harsh Verma</strong>, a passionate Software Developer from Indore.
          I hold a B.Tech degree in Information Technology from{" "}
          <strong>Shri Vaishnav Vidyapeeth Vishwavidyalaya</strong> (2019–2025).
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Skills</h2>
        <ul style={styles.list}>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Postman</li>
          <li><strong>Cloud:</strong> Vercel, Render</li>
          <li><strong>Soft Skills:</strong> Teamwork, Communication, Adaptability</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Certifications</h2>
        <ul style={styles.list}>
          <li>Deloitte Technology Virtual Internship (May 2025)</li>
          <li>Internship at NullClass Edtech Pvt Ltd</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Resume</h2>
        <a
          href="http://localhost:5000/uploads/Harsh_verma_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          style={styles.button}
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#222",
    lineHeight: 1.7,
  },
  section: {
    marginBottom: "40px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
  },
  list: {
    fontSize: "17px",
    paddingLeft: "20px",
    marginTop: "10px",
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#00bcd4",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};

export default About;