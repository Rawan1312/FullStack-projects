// import React, { useState } from "react";
// import { Button } from "@mui/material";
// import useCart from "../../hooks/useCart"; // نفترض أن هناك hook لإدارة العربة

// const Product = ({ product }) => {
//   const { addToCart } = useCart();
//   const [rating, setRating] = useState(0); // التقييم يبدأ من 0
//   const [likeCount, setLikeCount] = useState(68);

//   const handleRating = (newRating) => {
//     setRating(newRating); // تعيين التقييم الجديد بناءً على النجم الذي يتم النقر عليه
//   };

//   return (
//     <div>
//       <img src={product.imageUrl} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>{product.price}</p>

//       <div className="rating">
//         {[5, 4, 3, 2, 1].map((star) => (
//           <span
//             key={star}
//             onClick={() => handleRating(star)}
//             style={{
//               cursor: "pointer",
//               color: rating >= star ? "#FFD700" : "#ccc",
//             }}
//           >
//             ★
//           </span>
//         ))}
//       </div>

//       <div>
//         <span>{likeCount}</span> Likes
//       </div>

//       <Button
//         variant="contained"
//         color="secondary"
//         fullWidth
//         onClick={() => addToCart(product)}
//       >
//         Add To Cart
//       </Button>
//     </div>
//   );
// };

// export default Product;isRequired,
// import React from "react";
// import {
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
// } from "@mui/material";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import useCart from "../../hooks/useCart";

// const Product = ({ product }) => {
//   const { addToCart } = useCart();

//   return (
//     <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
//       {/* Product Image */}
//       <CardMedia
//         component="img"
//         height="180"
//         image={product.imageUrl || "https://via.placeholder.com/150"} // تأكد من أن الصورة تظهر
//         alt={product.name}
//         sx={{ objectFit: "cover" }}
//       />

//       <CardContent
//         sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
//       >
//         {/* Product Name */}
//         <Typography
//           variant="h6"
//           component="div"
//           gutterBottom
//           color="primary"
//           fontWeight="bold"
//         >
//           {product.name}
//         </Typography>

//         {/* Product Price */}
//         <Typography
//           variant="subtitle1"
//           color="text.primary"
//           fontWeight="medium"
//         >
//           Price: ${product.price.toFixed(2)}
//         </Typography>

//         {/* Show Details Button */}
//         <Button
//           component={Link}
//           to={`/products/:id/${product.productId}`}
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ marginTop: "auto" }} // Push the button to the bottom
//         >
//           Show Details
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           fullWidth
//           sx={{ marginTop: "16px" }}
//           onClick={() => addToCart(product)}
//         >
//           Add To Cart
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// Product.propTypes = {
//   product: PropTypes.shape({
//     productId: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,

//     price: PropTypes.number.isRequired,
//     imageUrl: PropTypes.string,
//   }).isRequired,
// };

// export default Product;
import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Product = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "auto",
        margin: "20px auto", // إضافة هامش للتوسيط
        boxShadow: 3, // إضافة ظلال لتحديد الكارد بشكل أفضل
        padding: "16px", // إضافة padding داخلي لتحديد المسافات
        borderRadius: "8px", // إضفاء شكل أكثر نعومة
        maxWidth: 350, // تحديد الحد الأقصى لعرض الكارد
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        image={product.imageUrl || "https://via.placeholder.com/150"} // تأكد من أن الصورة تظهر
        alt={product.name}
        sx={{
          objectFit: "contain",
          width: "100%",
          height: "auto", // تأكيد أن الصورة تكون بالحجم الطبيعي
          borderRadius: "4px", // إضافة زوايا منحنية للصورة
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          paddingTop: "16px", // إضافة مسافة بين المحتوى والصورة
        }}
      >
        {/* Product Name */}
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          color="primary"
          fontWeight="bold"
        >
          {product.name}
        </Typography>

        {/* Product Price */}
        <Typography
          variant="subtitle1"
          color="text.primary"
          fontWeight="medium"
        >
          Price: ${product.price.toFixed(2)}
        </Typography>

        {/* Show Details Button */}
        <Button
          component={Link}
          to={`/products/${product.productId}`}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "auto" }}
        >
          Show Details
        </Button>

        {/* Add To Cart Button */}
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ marginTop: "16px" }}
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default Product;
