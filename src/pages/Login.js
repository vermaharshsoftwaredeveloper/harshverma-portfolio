// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = form;
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("token", "secure_token");
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🔐 Admin Login</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
