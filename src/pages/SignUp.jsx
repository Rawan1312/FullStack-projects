// import React, { useState } from "react";
// import { createUser } from "../services/UserService";

// const SignUp = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prevUser) => {
//       return { ...prevUser, [name]: value };
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // استدعاء API لإنشاء مستخدم جديد
//       const newUser = await createUser(user);
//       console.log("User created:", newUser);
//       // بعد التسجيل، يمكنك توجيه المستخدم إلى صفحة أخرى (مثلاً صفحة تسجيل الدخول)
//     } catch (error) {
//       console.error("Error creating user:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name: </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={user.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email: </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
// import React, { useState } from "react";
// import { registerUser } from "../services/UserService"; // استيراد دالة التسجيل
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, Typography, Alert } from "@mui/material";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await registerUser(formData); // استدعاء دالة التسجيل
//       navigate("/signin"); // التوجيه إلى صفحة تسجيل الدخول بعد التسجيل بنجاح
//     } catch (err) {
//       setError("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <Typography variant="h4" component="h1">
//         Sign Up
//       </Typography>
//       {error && <Alert severity="error">{error}</Alert>}
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Password"
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           fullWidth
//         />
//         <Button type="submit" variant="contained" fullWidth>
//           Sign Up
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
// import React, { useState } from "react";

// import { registerUser } from "../services/UserService";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, Typography, Alert } from "@mui/material";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await registerUser(formData);
//       navigate("/signin");
//     } catch (err) {
//       setError("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <Typography variant="h4" component="h1">
//         Sign Up
//       </Typography>
//       {error && <Alert severity="error">{error}</Alert>}
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Password"
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           fullWidth
//         />
//         <Button type="submit" variant="contained" fullWidth>
//           Sign Up
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
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
