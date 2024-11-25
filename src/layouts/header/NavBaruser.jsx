// import React from "react";

// import { Link } from "react-router-dom";

// const NavBaruser = () => {
//   const isSignedIn = localStorage.getItem("isSigned") === "true";
//   return (
//     <ul
//       style={{
//         display: "flex",
//         gap: "15px",
//         listStyleType: "none",
//         margin: 0,
//         padding: 0,
//       }}
//     >
//       {/* <li>
//         <Link to="/" style={{ textDecoration: "none", color: "#323232" }}>
//           Home
//         </Link>
//       </li> */}
//       <li>
//         <Link to="/about" style={{ textDecoration: "none", color: "#323232" }}>
//           About
//         </Link>
//       </li>
//       <li>
//         <Link to="/cart" style={{ textDecoration: "none", color: "#323232" }}>
//           Cart
//         </Link>
//       </li>
//       {isSignedIn && (
//         <li>
//           <Link
//             to="/user/profile"
//             style={{ textDecoration: "none", color: "#323232" }}
//           >
//             Profile
//           </Link>
//         </li>
//       )}
//     </ul>
//   );
// };

// export default NavBaruser;

// import { Link } from "react-router-dom";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import Button from "@mui/material/Button"; // استيراد Button من Material-UI
// import { useNavigate } from "react-router-dom"; // استيراد navigate من React Router

// const NavBaruser = () => {
//   const navigate = useNavigate();
//   const isSignedIn = localStorage.getItem("isSigned") === "true";

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     localStorage.removeItem("isSigned");
//     navigate("/"); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الخروج
//   };

//   return (
//     <ul
//       style={{
//         display: "flex",
//         gap: "15px",
//         listStyleType: "none",
//         margin: 0,
//         padding: 0,
//         alignItems: "center",
//         width: "100%",
//         justifyContent: "space-between",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           gap: "15px",
//           justifyContent: "center",
//           flexGrow: 1,
//         }}
//       >
//         <li>
//           <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/about"
//             style={{ textDecoration: "none", color: "#FFFFFF" }}
//           >
//             About Us
//           </Link>
//         </li>
//         {isSignedIn && (
//           <li>
//             <Link
//               to="/user"
//               style={{ textDecoration: "none", color: "#FFFFFF" }}
//             >
//               Dashboard
//             </Link>
//           </li>
//         )}
//         {isSignedIn && (
//           <li>
//             <Link
//               to="/user/profile"
//               style={{ textDecoration: "none", color: "#FFFFFF" }}
//             >
//               Profile
//             </Link>
//           </li>
//         )}
//       </div>
//       <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//         <li>
//           <Link
//             to="/cart"
//             style={{
//               textDecoration: "none",
//               color: "#FFFFFF",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <ShoppingBagOutlinedIcon
//               style={{ fontSize: "24px", marginRight: "5px" }}
//             />
//             Cart
//           </Link>
//         </li>
//         {isSignedIn && (
//           <Button
//             onClick={handleSignOut}
//             style={{ color: "#FFFFFF", marginRight: "15px" }}
//           >
//             SignOut
//           </Button>
//         )}
//       </div>
//     </ul>
//   );
// };

// export default NavBaruser;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const NavBarUser = () => {
  const navigate = useNavigate();
  const isSignedIn = localStorage.getItem("isSigned") === "true";
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isSigned");
    navigate("/"); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الخروج
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // التبديل بين إظهار واخفاء الـ Sidebar
  };

  const closeSidebar = () => {
    setSidebarVisible(false); // إغلاق الشريط الجانبي عند الضغط على الزر
  };

  return (
    <ul
      style={{
        display: "flex",
        gap: "15px",
        listStyleType: "none",
        margin: 0,
        padding: 0,
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
            Home
          </Link>
        </li>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <li>
          <Link
            to="/cart"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ShoppingBagOutlinedIcon
              style={{ fontSize: "24px", marginRight: "5px" }}
            />
            Cart
          </Link>
        </li>
        {isSignedIn && (
          <Button
            onClick={handleSignOut}
            style={{ color: "#FFFFFF", marginRight: "15px" }}
          >
            SignOut
          </Button>
        )}
      </div>

      {/* Hamburger icon */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          cursor: "pointer",
        }}
        onClick={toggleSidebar}
      >
        <FaBars style={{ fontSize: "30px", color: "#FFFFFF" }} />
      </div>

      {/* Sidebar visibility toggle */}
      {sidebarVisible && (
        <div
          style={{
            position: "absolute",
            top: "60px", // هنا تم تعديل الـ top ليظهر الشريط تحت الـ Navbar (يمكنك تعديل هذا الرقم حسب ارتفاع الـ Navbar)
            right: "0", // تغيير من `left` إلى `right` لكي يظهر الشريط الجانبي في الجهة اليمنى
            backgroundColor: "#AF8F6F", // تم تعديل اللون إلى #DC7A56 (المزيج بين الألوان الأربعة)
            height: "calc(100vh - 60px)", // جعل الشريط الجانبي يغطي المساحة المتبقية بعد الـ Navbar
            width: "250px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            zIndex: "1000",
          }}
        >
          {/* رابط البروفايل */}
          <Link
            to="/user/profile"
            style={{
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
            }}
            onClick={closeSidebar} // عند الضغط على الرابط، يتم إغلاق الشريط الجانبي
          >
            Profile
          </Link>
        </div>
      )}
    </ul>
  );
};

export default NavBarUser;
