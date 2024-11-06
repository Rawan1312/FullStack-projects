// import React from "react";

// import PropTypes from "prop-types";
// import { Button, Card } from "react-bootstrap";
// import Typography from "@mui/material/Typography";
// import CardContent from "@mui/material/CardContent";
// import { Grid2 } from "@mui/material";
// import { Link } from "react-router-dom";

// const Product = ({ product }) => {
//   return (
//     <Grid2 item xs={12} sm={6} md={4}>
//       <Card>
//         <CardContent>
//           <img
//             src={product.imageUrl}
//             alt={product.name}
//             style={{ width: "100%" }}
//           />
//           <Typography variant="h5">Name:{product.name}</Typography>
//           <Typography>{product.description}</Typography>
//           <Typography>Price: ${product.price}</Typography>
//           <Typography>Author: {product.author}</Typography>
//           <Typography>Genre: {product.genre}</Typography>
//           <Typography>Publication Year: {product.publicationYear}</Typography>

//           <Button>
//             <Link to={`/products/${product.id}`}>Show Details</Link>
//           </Button>
//         </CardContent>
//       </Card>
//     </Grid2>
//   );
// };

// Product.propTypes = {
//   product: PropTypes.object.isRequired,
// };

// export default Product;
// import React from "react";
// import PropTypes from "prop-types";
// import { Button, Card } from "react-bootstrap";
// import Typography from "@mui/material/Typography";
// import CardContent from "@mui/material/CardContent";
// import Grid from "@mui/material/Grid";
// import { Link } from "react-router-dom";

// const Product = ({ product }) => {
//   return (
//     <Grid item xs={12} sm={6} md={4}>
//       <Card>
//         <CardContent>
//           <img
//             src={product.imageUrl}
//             alt={product.name}
//             style={{ width: "100%" }}
//           />
//           <Typography variant="h5">Name: {product.name}</Typography>
//           <Typography>{product.description}</Typography>
//           <Typography>Price: ${product.price}</Typography>
//           <Typography>Author: {product.author}</Typography>
//           <Typography>Genre: {product.genre}</Typography>
//           <Typography>Publication Year: {product.publicationYear}</Typography>

//           <Button>
//             <Link
//               to={`/products/${product.id}`}
//               style={{ color: "inherit", textDecoration: "none" }}
//             >
//               Show Details
//             </Link>
//           </Button>
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// };

// Product.propTypes = {
//   product: PropTypes.object.isRequired,
// };

// export default Product;
// import React from "react";
// import PropTypes from "prop-types";
// import { Button, Card } from "react-bootstrap";
// import Typography from "@mui/material/Typography";
// import CardContent from "@mui/material/CardContent";
// import Grid from "@mui/material/Grid";
// import { Link } from "react-router-dom"; // استيراد الرابط للتنقل

// const Product = ({ product }) => {
//   return (
//     <Grid item xs={12} sm={6} md={4}>
//       <Card>
//         <CardContent>
//           <img
//             src={product.imageUrl}
//             alt={product.name}
//             style={{ width: "100%" }}
//           />
//           <Typography variant="h5">Name: {product.name}</Typography>
//           <Typography>{product.description}</Typography>
//           <Typography>Price: ${product.price}</Typography>
//           <Typography>Author: {product.author}</Typography>
//           <Typography>Genre: {product.genre}</Typography>
//           <Typography>Publication Year: {product.publicationYear}</Typography>

//           {/* زر التنقل لصفحة التفاصيل */}
//           <Button>
//             <Link
//               to={`/products/${product.id}`} // رابط التنقل
//               style={{ color: "inherit", textDecoration: "none" }}
//             >
//               Show Details
//             </Link>
//           </Button>
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// };

// Product.propTypes = {
//   product: PropTypes.object.isRequired,
// };

// export default Product;
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.imageUrl} alt={product.name} style={{ width: "50%" }} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>

      <Button>
        <Link
          to={`/products/${product.id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Show Details
        </Link>
      </Button>
    </div>
  );
};
export default Product;
