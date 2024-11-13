// import React, { useState } from "react";
// import { getUsers } from "../services/UserService";
// import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";
// import Card from "react-bootstrap/Card";

// const SignIn = () => {
//   const [user, setUser] = useState({ email: "", password: "" });
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   // دالة لتحديث قيم الحقول
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   // دالة للتسجيل
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // الحصول على بيانات المستخدمين
//       const response = await getUsers(1);
//       const users = response.users;

//       if (Array.isArray(users)) {
//         // البحث عن المستخدم الذي قام بتسجيل الدخول
//         const foundUser = users.find((u) => u.email === user.email);

//         if (!foundUser) {
//           setErrorMessage("البريد الإلكتروني غير مسجل. يرجى إنشاء حساب جديد.");
//         } else if (foundUser.password !== user.password) {
//           setErrorMessage("كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.");
//         } else {
//           // تخزين بيانات المستخدم في localStorage
//           localStorage.setItem("user", JSON.stringify(foundUser));
//           // التوجيه إلى الصفحة الرئيسية
//           navigate("/");
//         }
//       } else {
//         console.error("خطأ:", users);
//         setErrorMessage("حدث خطأ أثناء جلب البيانات. يرجى المحاولة لاحقاً.");
//       }
//     } catch (error) {
//       console.error("خطأ أثناء تسجيل الدخول:", error);
//       setErrorMessage("حدث خطأ غير متوقع. يرجى المحاولة لاحقاً.");
//     }
//   };

//   return (
//     <div className="signin-container d-flex justify-content-center align-items-center">
//       <Card className="signin-card shadow-lg">
//         <Card.Body>
//           <h2 className="text-center mb-4">تسجيل الدخول</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="email">
//               <Form.Label>البريد الإلكتروني</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//                 placeholder="أدخل بريدك الإلكتروني"
//                 required
//                 className="input-style"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="password">
//               <Form.Label>كلمة المرور</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//                 placeholder="أدخل كلمة المرور"
//                 required
//                 className="input-style"
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100 mb-3">
//               تسجيل الدخول
//             </Button>

//             {errorMessage && (
//               <Alert variant="danger" className="mt-3">
//                 {errorMessage}
//               </Alert>
//             )}

//             {errorMessage.includes("غير مسجل") && (
//               <Button
//                 variant="link"
//                 onClick={() => navigate("/signup")}
//                 className="mt-2"
//               >
//                 أنشئ حساباً جديداً
//               </Button>
//             )}
//           </Form>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default SignIn;
// import React, { useState } from "react";
// import { loginUser } from "../services/UserService";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, Typography, Alert } from "@mui/material";

// const SignIn = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const response = await loginUser(formData);
//       localStorage.setItem("token", response.token);
//       setMessage("Login successful");
//       navigate("/dashboard");
//     } catch (err) {
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <div>
//       <Typography variant="h4" component="h1">
//         Sign In
//       </Typography>
//       {error && <Alert severity="error">{error}</Alert>}
//       {message && <Alert severity="success">{message}</Alert>}
//       <form onSubmit={handleSubmit}>
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
//           Sign In
//         </Button>
//       </form>
//     </div>
//   );
// };

// // export default SignIn;import React, { useState } from "react";
// import { useState } from "react";
// import { SignInUser } from "../services/UserService";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, Typography, Alert } from "@mui/material";
// import { TokenDecode } from "../utility/TokenDecode";
// import "./siginstyle.css";

// const SignIn = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => {
//       return { ...prevState, [name]: value };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const response = await SignInUser(formData.email, formData.password);
//       console.log("Respone of login:", response);
//       if (response.token && response.token != "Email/Password is incorrect") {
//         const decodeUser = TokenDecode(response.token);
//         console.log("Decoder Data:", decodeUser);
//         localStorage.setItem("token", response.token);
//         localStorage.setItem("isSigned", true);
//         localStorage.setItem("role", decodeUser.role);
//         localStorage.setItem("userID", decodeUser.id);
//         localStorage.setItem("userName", decodeUser.username);
//         // localStorage.setItem("user", JSON.stringify(response.user));
//         setError("Login successful!");

//         //const getRole = localStorage.getItem("role");
//         if (decodeUser.role === "User") {
//           navigate("/dashboard/user/profile");
//         } else if (decodeUser.role === "Admin") {
//           navigate("/dashboard/admin"); // Navigate to admin dashboard if role is Admin
//         } else {
//           navigate("/");
//         }
//       }
//     } catch (err) {
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <div>
//       <Typography variant="h4" component="h1">
//         Sign In
//       </Typography>
//       {error && <Alert severity="error">{error}</Alert>}
//       <form onSubmit={handleSubmit}>
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
//           Sign In
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
import { useState } from "react";
import { SignInUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { TokenDecode } from "../utility/TokenDecode";
import "./siginstyle.css"; // تأكد من تضمين ملف CSS الذي يحتوي على التصميمات المذكورة

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
        console.log("role",decodeUser.role);
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
