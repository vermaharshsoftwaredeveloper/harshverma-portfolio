// src/pages/Projects.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Projects</h1>
      <div style={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.tech && (
              <p><strong>Tech Stack:</strong> {project.tech}</p>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.link}>
              GitHub
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" style={styles.link}>
                Live Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#222",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "30px",
    textAlign: "center",
  },
  projectList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    marginRight: "10px",
    color: "#00bcd4",
    fontWeight: "bold",
    textDecoration: "none",
  }
};

export default Projects;
