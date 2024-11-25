// import React from "react";

// import { AppBar, Button, Toolbar, Typography } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import NavBaruser from "./NavBaruser";

// const NavBar = () => {
//   const isSignedIn = localStorage.getItem("isSigned") === "true";
//   const navigate = useNavigate();
//   const getRole = localStorage.getItem("role");

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     localStorage.removeItem("isSigned");
//     navigate("/");
//   };
//   return (
//     <AppBar position="fixed" style={{ backgroundColor: "#A33D51" }}>
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1, color: "#FFFFFF" }}>
//           NovelLand
//         </Typography>
//         <Button
//           color="inherit"
//           component={Link}
//           to="/"
//           style={{ color: "#FFFFFF" }}
//         >
//           Home
//         </Button>
//         {!isSignedIn && (
//           <Button
//             color="inherit"
//             component={Link}
//             to="/signin"
//             style={{ color: "#FFFFFF" }}
//           >
//             SignIn
//           </Button>
//         )}
//         {!isSignedIn && (
//           <Button
//             color="inherit"
//             component={Link}
//             to="/signup"
//             style={{ color: "#FFFFFF" }}
//           >
//             SignUp
//           </Button>
//         )}
//         {isSignedIn && getRole === "Admin" && (
//           <Link to="/admin/dashboard">Admin Dashboard</Link>
//         )}
//         {isSignedIn && getRole === "User" && <NavBaruser />}

//        <Button
//   to="/"
//   onClick={handleSignOut}
//   style={{ color: "#FFFFFF" }} // تحديد اللون الأبيض للنص
// >
//   SignOut
// </Button>

//       </Toolbar>
//     </AppBar>
//   );
// };

// // export default NavBar;
// import React from "react";
// import { AppBar, Button, Toolbar, Typography } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import NavBaruser from "./NavBaruser";

// const NavBar = () => {
//   const isSignedIn = localStorage.getItem("isSigned") === "true";
//   const navigate = useNavigate();
//   const getRole = localStorage.getItem("role");

//   return (
//     <AppBar
//       position="fixed"
//       style={{ backgroundColor: "#A33D51", height: "90px" }}
//     >
//       <Toolbar
//         style={{
//           height: "100%",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         {/* القسم الأيسر: اسم الموقع */}
//         <Typography
//           variant="h6"
//           style={{
//             color: "#FFFFFF",
//             fontSize: "24px",
//           }}
//         >
//           NovelLand
//         </Typography>

//         {/* القسم الأوسط: الكتب والهوم */}
//         {!isSignedIn && (
//           <div
//             style={{
//               display: "flex",
//               gap: "15px",
//               justifyContent: "center",
//               flex: 1,
//             }}
//           >
//             <Button
//               color="inherit"
//               component={Link}
//               to="/products"
//               style={{ color: "#FFFFFF", fontSize: "18px" }}
//             >
//               Books
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/"
//               style={{ color: "#FFFFFF", fontSize: "18px" }}
//             >
//               Home
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/about"
//               style={{ color: "#FFFFFF", fontSize: "18px" }}
//             >
//               AboutUs
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/contact"
//               style={{ color: "#FFFFFF", fontSize: "18px" }}
//             >
//               Contact
//             </Button>
//           </div>
//         )}

//         {/* القسم الأيمن: تسجيل الدخول والتسجيل */}
//         <div style={{ display: "flex", gap: "10px" }}>
//           {!isSignedIn && (
//             <>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/signin"
//                 style={{ color: "#FFFFFF", fontSize: "18px" }}
//               >
//                 SignIn
//               </Button>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/signup"
//                 style={{ color: "#FFFFFF", fontSize: "18px" }}
//               >
//                 SignUp
//               </Button>
//             </>
//           )}
//           {/* روابط إضافية بناءً على حالة المستخدم */}
//           {isSignedIn && getRole === "Admin" && (
//             <Button
//               color="inherit"
//               component={Link}
//               to="/admin/dashboard"
//               style={{ color: "#FFFFFF", fontSize: "18px" }}
//             >
//               Admin Dashboard
//             </Button>
//           )}
//           {isSignedIn && getRole === "User" && <NavBaruser />}
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

// import React from "react";
// import { AppBar, Button, Toolbar, Typography } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import NavBaruser from "./NavBaruser";

// const NavBar = () => {
//   const isSignedIn = localStorage.getItem("isSigned") === "true";
//   const navigate = useNavigate();
//   const getRole = localStorage.getItem("role");

//   return (
//     <AppBar
//       position="fixed" // جعل الـ NavBar ثابت في الأعلى
//       style={{
//         backgroundColor: "#A33D51",
//         height: "60px", // تقليص حجم الشريط
//         boxShadow: "none", // إزالة الظل
//         top: 0, // تحديد مكانه في الأعلى
//         left: 0,
//         right: 0,
//         zIndex: 1000, // التأكد من أنه فوق العناصر الأخرى
//       }}
//     >
//       <Toolbar
//         style={{
//           height: "100%",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <Typography
//           variant="h6"
//           style={{
//             color: "#FFFFFF",
//             fontSize: "18px",
//           }}
//         >
//           NovelLand
//         </Typography>

//         {!isSignedIn && (
//           <div
//             style={{
//               display: "flex",
//               gap: "15px",
//               justifyContent: "center",
//               flex: 1,
//             }}
//           >
//             <Button
//               color="inherit"
//               component={Link}
//               to="/products"
//               style={{ color: "#FFFFFF", fontSize: "16px" }}
//             >
//               Books
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/"
//               style={{ color: "#FFFFFF", fontSize: "16px" }}
//             >
//               Home
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/about"
//               style={{ color: "#FFFFFF", fontSize: "16px" }}
//             >
//               AboutUs
//             </Button>
//           </div>
//         )}

//         <div style={{ display: "flex", gap: "10px" }}>
//           {!isSignedIn && (
//             <>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/signin"
//                 style={{ color: "#FFFFFF", fontSize: "16px" }}
//               >
//                 SignIn
//               </Button>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/signup"
//                 style={{ color: "#FFFFFF", fontSize: "16px" }}
//               >
//                 SignUp
//               </Button>
//             </>
//           )}
//           {isSignedIn && getRole === "Admin" && (
//             <Button
//               color="inherit"
//               component={Link}
//               to="/admin/dashboard"
//               style={{ color: "#FFFFFF", fontSize: "16px" }}
//             >
//               Admin Dashboard
//             </Button>
//           )}
//           {isSignedIn && getRole === "User" && <NavBaruser />}
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

// import React from "react";
// import { AppBar, Button, Toolbar, Typography } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import NavBaruser from "./NavBaruser";

// const NavBar = () => {
//   const isSignedIn = localStorage.getItem("isSigned") === "true";
//   const navigate = useNavigate();
//   const getRole = localStorage.getItem("role");

//   // دالة تسجيل الخروج
//   const handleLogout = () => {
//     localStorage.removeItem("isSigned"); // إزالة حالة تسجيل الدخول
//     localStorage.removeItem("role"); // إزالة الدور (Admin أو User)
//     navigate("/"); // إعادة التوجيه للصفحة الرئيسية
//   };

//   return (
//     <AppBar
//       position="fixed"
//       style={{
//         backgroundColor: "#A33D51",
//         height: "60px",
//         boxShadow: "none",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//       }}
//     >
//       <Toolbar
//         style={{
//           height: "100%",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <Typography
//           variant="h6"
//           style={{
//             color: "#FFFFFF",
//             fontSize: "18px",
//           }}
//         >
//           NovelLand
//         </Typography>

//         {/* الروابط للمستخدم غير المسجل */}
//         {!isSignedIn && (
//           <div
//             style={{
//               display: "flex",
//               gap: "15px",
//               justifyContent: "center",
//               flex: 1,
//             }}
//           >
//             <Button
//               color="inherit"
//               component={Link}
//               to="/products"
//               style={{ color: "#FFFFFF", fontSize: "16px" }}
//             >
//               Books
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/"
//               style={{ color: "#FFFFFF", fontSize: "16px" }}
//             >
//               Home
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/about"
//               style={{ color: "#FFFFFF", fontSize: "16px" }}
//             >
//               AboutUs
//             </Button>
//           </div>
//         )}

//         {/* الروابط للمستخدم المسجل */}
//         <div style={{ display: "flex", gap: "10px" }}>
//           {!isSignedIn && (
//             <>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/signin"
//                 style={{ color: "#FFFFFF", fontSize: "16px" }}
//               >
//                 SignIn
//               </Button>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/signup"
//                 style={{ color: "#FFFFFF", fontSize: "16px" }}
//               >
//                 SignUp
//               </Button>
//             </>
//           )}
//           {isSignedIn && getRole === "Admin" && (
//             <>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/admin/dashboard"
//                 style={{ color: "#FFFFFF", fontSize: "16px" }}
//               >
//                 Admin Dashboard
//               </Button>
//               <Button
//                 color="inherit"
//                 onClick={handleLogout}
//                 style={{ color: "#FFFFFF", fontSize: "16px" }}
//               >
//                 Logout
//               </Button>
//             </>
//           )}
//           {isSignedIn && getRole === "User" && <NavBaruser />}
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavBaruser from "./NavBaruser";

const NavBar = () => {
  const isSignedIn = localStorage.getItem("isSigned") === "true";
  const navigate = useNavigate();
  const getRole = localStorage.getItem("role");

  // دالة تسجيل الخروج
  const handleLogout = () => {
    localStorage.removeItem("isSigned"); // إزالة حالة تسجيل الدخول
    localStorage.removeItem("role"); // إزالة الدور (Admin أو User)
    navigate("/"); // إعادة التوجيه للصفحة الرئيسية
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#AF8F6F",
        height: "60px",
        boxShadow: "none",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Toolbar
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          style={{
            color: "#FFFFFF",
            fontSize: "18px",
          }}
        >
          NovelLand
        </Typography>

        {/* الروابط للمستخدم غير المسجل */}
        {!isSignedIn && (
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/products"
              style={{ color: "#FFFFFF", fontSize: "16px" }}
            >
              Books
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/"
              style={{ color: "#FFFFFF", fontSize: "16px" }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("about-us").offsetTop,
                  behavior: "smooth",
                })
              }
              style={{ color: "#FFFFFF", fontSize: "16px" }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("contact").offsetTop,
                  behavior: "smooth",
                })
              }
              style={{ color: "#FFFFFF", fontSize: "16px" }}
            >
              Contact Us
            </Button>
          </div>
        )}

        {/* الروابط للمستخدم المسجل */}
        <div style={{ display: "flex", gap: "10px" }}>
          {!isSignedIn && (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/signin"
                style={{ color: "#FFFFFF", fontSize: "16px" }}
              >
                SignIn
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/signup"
                style={{ color: "#FFFFFF", fontSize: "16px" }}
              >
                SignUp
              </Button>
            </>
          )}
          {isSignedIn && getRole === "Admin" && (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/admin/dashboard"
                style={{ color: "#FFFFFF", fontSize: "16px" }}
              >
                Admin Dashboard
              </Button>
              <Button
                color="inherit"
                onClick={handleLogout}
                style={{ color: "#FFFFFF", fontSize: "16px" }}
              >
                Logout
              </Button>
            </>
          )}
          {isSignedIn && getRole === "User" && <NavBaruser />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
