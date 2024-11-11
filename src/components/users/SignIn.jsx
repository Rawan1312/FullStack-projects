// import React, { useState } from "react";
// import { getUsers } from "../../services/UserService"; // استيراد دالة الحصول على المستخدمين

// const SignIn = () => {
//   const [user, setUser] = useState({
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
//       // الحصول على جميع المستخدمين لمطابقة بيانات تسجيل الدخول
//       const users = await getUsers(1); // يمكنك استخدام التصفح (pagination) إذا كنت بحاجة إلى ذلك
//       const foundUser = users.find(
//         (user) => user.email === user.email && user.password === user.password
//       );

//       if (foundUser) {
//         console.log("User logged in:", foundUser);
//         // يمكنك تخزين بيانات المستخدم في localStorage أو استخدام Context
//         // ثم توجيه المستخدم إلى صفحة أخرى مثل صفحة الملف الشخصي
//       } else {
//         console.error("Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
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
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// // export default SignIn;
// import React, { useState } from "react";
// import { getUsers } from "../../services/UserService"; // استيراد دالة الحصول على المستخدمين

// const SignIn = () => {
//   const [user, setUser] = useState({
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
//       // الحصول على جميع المستخدمين
//       const response = await getUsers(1);
//       console.log("Response data:", response); // قم بفحص هذه البيانات

//       const users = response.users; // الوصول إلى المصفوفة الموجودة في "users"

//       if (Array.isArray(users)) {
//         const foundUser = users.find(
//           (user) => user.email === user.email && user.password === user.password
//         );

//         if (foundUser) {
//           console.log("User logged in:", foundUser);
//           // يمكنك تخزين بيانات المستخدم في localStorage أو استخدام Context
//           // توجيه المستخدم إلى صفحة أخرى مثل صفحة الملف الشخصي
//         } else {
//           console.error("Invalid credentials");
//         }
//       } else {
//         console.error("Expected an array of users, but got:", users);
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
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
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// // export default SignIn;
// import React, { useState } from "react";
// import { getUsers } from "../../services/UserService"; // استيراد دالة الحصول على المستخدمين
// import { useNavigate } from "react-router-dom"; // استيراد useNavigate من react-router-dom

// const SignIn = () => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const [errorMessage, setErrorMessage] = useState(""); // حالة لرسالة الخطأ
//   const navigate = useNavigate(); // استخدام useNavigate

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prevUser) => {
//       return { ...prevUser, [name]: value };
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // الحصول على جميع المستخدمين
//       const response = await getUsers(1);
//       console.log("Response data:", response); // قم بفحص هذه البيانات

//       const users = response.users; // الوصول إلى المصفوفة الموجودة في "users"

//       if (Array.isArray(users)) {
//         const foundUser = users.find(
//           (u) => u.email === user.email && u.password === user.password
//         );

//         if (foundUser) {
//           console.log("User logged in:", foundUser);
//           // تخزين بيانات المستخدم في localStorage أو Context (إذا كنت ترغب في ذلك)
//           localStorage.setItem("user", JSON.stringify(foundUser)); // تخزين بيانات المستخدم

//           // توجيه المستخدم إلى صفحة الهوم (التي تحتوي على الكتب)
//           navigate("/"); // تأكد من أن المسار هو الصفحة الرئيسية التي تحتوي على الكتب
//         } else {
//           setErrorMessage("Invalid credentials"); // تعيين رسالة الخطأ عند عدم وجود مستخدم
//         }
//       } else {
//         console.error("Expected an array of users, but got:", users);
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       setErrorMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
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
//         <button type="submit">Sign In</button>
//       </form>

//       {/* عرض رسالة الخطأ إذا لم يتم التحقق من صحة بيانات المستخدم */}
//       {errorMessage && <p>{errorMessage}</p>}

//       {/* عرض خيار للتسجيل إذا لم يكن المستخدم مسجلاً */}
//       <div>
//         <button onClick={() => navigate("/signup")}>سجل حساب جديد</button>
//       </div>
//     </div>
//   );
// };

// export default SignIn;import React, { useState } from "react";
import { getUsers } from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import "./SignIn.css";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  // دالة لتحديث حقول البريد الإلكتروني وكلمة المرور
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // دالة لفتح نافذة "نسيت كلمة المرور"
  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  // دالة لإغلاق نافذة "نسيت كلمة المرور"
  const handleCloseForgotPassword = () => {
    setShowForgotPassword(false);
  };

  // دالة تسجيل الدخول
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await getUsers(1);
      const users = response.users;

      if (Array.isArray(users)) {
        const foundUser = users.find((u) => u.email === user.email);
        if (!foundUser) {
          setErrorMessage(
            "The email is not registered. Please create a new account."
          );
        } else if (foundUser.password !== user.password) {
          setErrorMessage("Incorrect password. Please try again.");
        } else {
          localStorage.setItem("user", JSON.stringify(foundUser));
          navigate("/");
        }
      } else {
        console.error("Error:", users);
        setErrorMessage(
          "An error occurred while fetching data. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="signin-container d-flex justify-content-center align-items-center">
      <Card className="signin-card shadow-lg">
        <Card.Body>
          <h2 className="text-center mb-4"> SignIn </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="  Enter Your Email:"
                required
                className="input-style"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label> Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="  Enter Password:"
                required
                className="input-style"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
            ></Button>

            <Button
              variant="link"
              onClick={handleForgotPassword}
              className="forgot-password-link text-center w-100"
            ></Button>

            {errorMessage && (
              <Alert variant="danger" className="mt-3">
                {errorMessage}
              </Alert>
            )}

            {errorMessage.includes("not registered") && (
              <Button
                variant="link"
                onClick={() => navigate("/signup")}
                className="mt-2"
              ></Button>
            )}
          </Form>
        </Card.Body>

        <Modal show={showForgotPassword} onHide={handleCloseForgotPassword}>
          <ForgotPassword
            open={showForgotPassword}
            handleClose={handleCloseForgotPassword}
          />
        </Modal>
      </Card>
    </div>
  );
};

export default SignIn;
//<div className="text-center mt-3">
// <Button
//     variant="outline-secondary"
//     onClick={() => navigate("/signup")}
//   >
//   </Button>
// </div>
