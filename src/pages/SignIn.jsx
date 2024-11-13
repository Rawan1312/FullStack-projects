import { useState } from "react";

import { SignInUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { TokenDecode } from "../utility/TokenDecode";
import "./siginstyle.css"; 

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await SignInUser(formData.email, formData.password);
      console.log("Respone of login:", response);
      if (response.token && response.token !== "Email/Password is incorrect") {
        const decodeUser = TokenDecode(response.token);
        console.log("Decoder Data:", decodeUser);
        localStorage.setItem("token", response.token);
        localStorage.setItem("isSigned", true);
        localStorage.setItem("role", decodeUser.role);
        console.log("role", decodeUser.role);
        localStorage.setItem("userID", decodeUser.id);
        localStorage.setItem("userName", decodeUser.username);
        setError("Login successful!");

        if (decodeUser.role === "User") {
          navigate("/");
        } else if (decodeUser.role === "Admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="form-box">
      <div className="form">
        <h1 className="title">Sign In</h1>
        {error && <div className="error-alert">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="email" className="subtitle">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-container">
            <label htmlFor="password" className="subtitle">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="input"
            />
          </div>
          <button type="submit" className="form-button">
            Sign In
          </button>
        </form>
        <div className="form-section">
          <span>Don't have an account? </span>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
