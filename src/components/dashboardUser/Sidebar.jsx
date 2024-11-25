// import React, { useState } from "react";
// import { FaUser, FaShoppingCart, FaCog, FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./Sidebar.css"; // ملف الـ CSS لتنسيق الشريط الجانبي

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false); // للتحكم في إظهار وإخفاء الشريط الجانبي

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen); // تغيير الحالة لإظهار أو إخفاء الشريط الجانبي
//   };

//   return (
//     <div>
//       {/* أيقونة الـ Hamburger */}
//       <button className="hamburger-btn" onClick={toggleSidebar}>
//         <FaBars style={{ fontSize: "30px", color: "#fff" }} />
//       </button>

//       {/* الشريط الجانبي */}
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <h3>User Dashboard</h3>
//         <ul>
//           <li>
//             <Link to="/user/profile" className="sidebar-link">
//               <FaUser /> Profile
//             </Link>
//           </li>
//           <li>
//             <Link to="/user/orders" className="sidebar-link">
//               <FaShoppingCart /> Orders
//             </Link>
//           </li>
//           <li>
//             <Link to="/user/settings" className="sidebar-link">
//               <FaCog /> Settings
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLinkClick = () => {
    setSidebarVisible(false); // إغلاق الشريط الجانبي عند النقر على الرابط
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          cursor: "pointer",
        }}
        onClick={toggleSidebar}
      >
        <FaBars style={{ fontSize: "30px", color: "#000" }} />
      </div>

      <div className={`sidebar ${sidebarVisible ? "open" : ""}`}>
        <Link
          to="/user/dashboard"
          className="sidebar-link"
          onClick={handleLinkClick}
        >
          Dashboard
        </Link>
        <Link
          to="/user/profile"
          className="sidebar-link"
          onClick={handleLinkClick}
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
