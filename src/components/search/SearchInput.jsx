import React, { useContext } from "react";

import { Input } from "@mui/material";
import { ProductContext } from "../../context/ProductsContext";

const SearchInput = () => {
  const { setSearchValue } = useContext(ProductContext);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Input
      action="Search"
      placeholder="Search for products..."
      fluid
      onChange={handleSearchChange}
      style={{ marginTop: "16px" }}
      size="small"
    />
  );
};

export default SearchInput;
// import React, { useContext } from "react";

// import { ProductContext } from "../../context/ProductsContext";

// const SearchInput = () => {
//   const { setSearchValue } = useContext(ProductContext);

//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   return (
//     <Input
//       placeholder="Search for products..."
//       fullWidth // Use fullWidth to make it expand to fit its container
//       onChange={handleSearchChange}
//       style={{ marginTop: "16px" }}
//       size="small"
//     />
//   );
// };

// export default SearchInput;

// import React, { useContext } from "react";
// import { ProductContext } from "../../context/ProductsContext";
// import "./searchstyle.css"; // Import the CSS for custom styles

// const SearchInput = () => {
//   const { setSearchValue } = useContext(ProductContext);

//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   return (
//     <div className="form">
//       <input
//         className="input"
//         type="text"
//         placeholder="Search for products..."
//         onChange={handleSearchChange}
//       />
//       <span className="input-border"></span>
//     </div>
//   );
// };

// // export default SearchInput;import React, { useState, useContext } from "react";
// import { useContext, useState } from "react";
// import { ProductContext } from "../../context/ProductsContext";

// const SearchInput = () => {
//   const { setSearchValue } = useContext(ProductContext); // من السياق setSearchValue

//   const [searchQuery, setSearchQuery] = useState(""); // استخدام حالة محلية للتحديث الفوري

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value); // تحديث الحالة المحلية فقط عند التغيير
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     setSearchValue(searchQuery); // تحديث السياق فقط عند تقديم النموذج
//     console.log("Searching for:", searchQuery);
//   };

//   return (
//     <form onSubmit={handleSearchSubmit}>
//       <div className="form">
//         <input
//           type="text"
//           className="input"
//           value={searchQuery} // استخدام الحالة المحلية للتحديث الفوري
//           onChange={handleSearchChange}
//           placeholder="Search for products..."
//         />
//         <div className="input-border"></div>
//       </div>
//     </form>
//   );
// };

// // export default SearchInput;
// import React, { useState, useContext } from "react";
// import { ProductContext } from "../../context/ProductsContext";

// const SearchInput = () => {
//   const { setSearchValue } = useContext(ProductContext); // From context
//   const [searchQuery, setSearchQuery] = useState(""); // Local state for immediate update

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     setSearchValue(searchQuery); // Update context value on submit
//     console.log("Searching for:", searchQuery);
//   };

//   return (
//     <form onSubmit={handleSearchSubmit} className="search">
//       <input
//         type="text"
//         className="search__input"
//         value={searchQuery}
//         onChange={handleSearchChange}
//         placeholder="Search for products..."
//       />
//       <button type="submit" className="search__button">
//         <svg
//           className="search__icon"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M23 21l-6.51-6.51A9.31 9.31 0 1019 12a9.26 9.26 0 00-2.11 5.49L21 23l2-2zm-14 0a7 7 0 117-7 7 7 0 01-7 7z" />
//         </svg>
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
