import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Product = ({ product }) => {
//   const { addItemToCart } = useCart();

//   // Handle adding the product to the cart
//   const handleAddToCart = () => {
//     addItemToCart(product);
//   };

//   return (
//     <div>
//       <img
//         src={product.imageUrl || "https://via.placeholder.com/150"}
//         alt={product.name}
//         style={{
//           objectFit: "contain",
//           width: "100%",
//           height: "auto",
//           borderRadius: "4px",
//         }}
//       />
//       <div style={{ paddingTop: "16px" }}>
//         <h3 style={{ color: "#1976d2", fontWeight: "bold" }}>{product.name}</h3>
//         <p style={{ fontWeight: "medium" }}>
//           Price: ${product.price.toFixed(2)}
//         </p>

//         <button
//           style={{
//             backgroundColor: "#f50057",
//             color: "#fff",
//             padding: "10px",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//             width: "100%",
//             marginTop: "8px",
//           }}
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button>

//         {/* Show Details Button */}
//         <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
//           <button
//             style={{
//               backgroundColor: "#1976d2",
//               color: "#fff",
//               padding: "10px",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//               width: "100%",
//               marginTop: "8px",
//             }}
//           >
//             Show Details
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// Product.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     imageUrl: PropTypes.string,
//   }).isRequired,
// };

// export default Product;
const Product = ({ product }) => {
  const { addItemToCart } = useCart();

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    addItemToCart(product);
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "center",
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src={product.imageUrl || "https://via.placeholder.com/150"}
        alt={product.name}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "200px", // تحديد ارتفاع الصورة
          borderRadius: "8px",
        }}
      />
      <div style={{ paddingTop: "16px" }}>
        <h3 style={{ color: "#1976d2", fontWeight: "bold" }}>{product.name}</h3>
        <p style={{ fontWeight: "medium", color: "#555" }}>
          Price: ${product.price.toFixed(2)}
        </p>

        <button
          style={{
            backgroundColor: "#f50057",
            color: "#fff",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            marginTop: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        {/* Show Details Button */}
        <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: "#1976d2",
              color: "#fff",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
              marginTop: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "background-color 0.3s ease",
            }}
          >
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default Product;
