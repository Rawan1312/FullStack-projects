import React, { useState } from "react";

import { registerUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import "./signupstyle.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await registerUser(formData);
      navigate("/");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="title">Sign Up</h1>
        <p className="subtitle">Create a new account</p>
        {error && <p className="form-section">{error}</p>}

        <div className="form-container">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="form-button">
          Sign Up
        </button>

        <div className="form-section">
          <p>
            Already have an account? <a href="/signin">Sign in</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
