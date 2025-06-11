// src/pages/Admin.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    github: "",
    demo: "",
    tech:"",
  });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== "secure_token") {
    window.location.href = "/login";
    }
  }, []);


  // Fetch projects on mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  // Handle resume upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setMessage("Please select a file!");

    const formData = new FormData();
    formData.append("Harsh_Verma_Resume", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload response:", res.data);
      setMessage("Resume uploaded successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Upload failed!");
    }
  };

  // Handle new project submit
  const handleAddProject = async (e) => {
    e.preventDefault();
    if (!newProject.title || !newProject.github || !newProject.tech) {
      return alert("Title, GitHub and Tech are required");
    }

    try {
      const res = await axios.post("http://localhost:5000/api/projects", newProject);
      console.log(res.data);
      setProjects([...projects, newProject]); // Update local state
      setNewProject({ title: "", description: "", github: "", demo: "" });
    } catch (err) {
      console.error("Error adding project:", err);
      alert(err.response?.data?.message || "Failed to add project");
    }
  };

  // Handle project delete
  const handleDelete = async (index) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${index}`);
      const updated = projects.filter((_, i) => i !== index);
      setProjects(updated);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📄 Upload Resume</h2>
      <form onSubmit={handleUpload}>
        <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
      <p>{message}</p>

      <hr />

      <h2>➕ Add New Project</h2>
      <form onSubmit={handleAddProject} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Technologies Used"
          value={newProject.tech}
          onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
        />
        <input
          type="text"
          placeholder="GitHub Link"
          value={newProject.github}
          onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
        />
        <input
          type="text"
          placeholder="Live Demo Link (optional)"
          value={newProject.demo}
          onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })}
        />
        <button type="submit">Add Project</button>
      </form>

      <hr />

      <h2>🗂 Existing Projects</h2>
      {projects.map((proj, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <strong>{proj.title}</strong>
          <p>{proj.description}</p>
          <strong>{proj.tech}</strong> <br/>
          <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a> <br />
          {proj.demo && (
            <a href={proj.demo} target="_blank" rel="noopener noreferrer">Demo</a>
          )}
          <br />
          <button onClick={() => handleDelete(index)} style={{ marginTop: "5px" }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Admin;