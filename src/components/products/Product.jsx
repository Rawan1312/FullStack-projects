// import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { Button } from "@mui/material";
// import useCart from "../../hooks/useCart"; // نفترض أن هناك hook لإدارة العربة
// import "./ProductCard.css";

// const Product = ({ product }) => {
//   const { addToCart } = useCart(); // إضافة العربة
//   const [liked, setLiked] = useState(false);
//   const [rating, setRating] = useState(4.5);
//   const [likeCount, setLikeCount] = useState(68);

//   const handleLike = () => {
//     setLiked(!liked);
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//   };

//   const handleRating = (newRating) => {
//     setRating(newRating);
//   };

//   return (
//     <div className={`styled-card ${liked ? "liked" : ""}`}>
//       <img src={product.imageUrl} alt={product.name} className="card-img" />
//       <div className="card-body">
//         <h3 className="card-title">{product.name}</h3>
//         <p className="card-price">${product.price}</p>
//         <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
//           <button className="card-button">Show Details</button>
//         </Link>
//         <div className="rating">
//           {[5, 4, 3, 2, 1].map((star) => (
//             <FaStar
//               key={star}
//               onClick={() => handleRating(star)}
//               style={{
//                 cursor: "pointer",
//                 color: rating >= star ? "#FFD700" : "#ccc",
//               }}
//             />
//           ))}
//           <span>{rating}</span>
//         </div>
//         <div className="like-button" onClick={handleLike}>
//           <label className="like">
//             <svg
//               className="like-icon"
//               fillRule="nonzero"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
//             </svg>
//             <span className="like-text">Likes</span>
//           </label>
//           <span className={`like-count one ${liked ? "liked" : ""}`}>
//             {likeCount}
//           </span>
//           <span className={`like-count two ${liked ? "liked" : ""}`}>
//             {likeCount + 1}
//           </span>
//         </div>
//         <Button
//           variant="contained"
//           color="secondary"
//           fullWidth
//           sx={{ marginTop: "16px" }}
//           onClick={() => addToCart(product)}
//         >
//           Add To Cart
//         </Button>
//       </div>
//     </div>
//   );
// };

// // export default Product;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { Button } from "@mui/material";
// import useCart from "../../hooks/useCart"; // نفترض أن هناك hook لإدارة العربة
// import { Card, ListGroup } from "react-bootstrap"; // استيراد الكارد و ListGroup من react-bootstrap
// import "./ProductCard.css";

// const Product = ({ product }) => {
//   const { addToCart } = useCart(); // إضافة العربة
//   const [liked, setLiked] = useState(false);
//   const [rating, setRating] = useState(4.5);
//   const [likeCount, setLikeCount] = useState(68);

//   const handleLike = () => {
//     setLiked(!liked);
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//   };

//   const handleRating = (newRating) => {
//     setRating(newRating);
//   };

//   return (
//     <Card
//       style={{ width: "22rem" }}
//       className={`styled-card ${liked ? "liked" : ""}`}
//     >
//       <Card.Img
//         variant="top"
//         src={product.imageUrl}
//         alt={product.name}
//         className="card-img"
//       />
//       <Card.Body>
//         <Card.Title>{product.name}</Card.Title>
//         <Card.Text className="card-price">${product.price}</Card.Text>
//         <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
//           <Button variant="outline-primary" fullWidth className="card-button">
//             Show Details
//           </Button>
//         </Link>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>Rating: {rating}</ListGroup.Item>
//         <ListGroup.Item>Likes: {likeCount}</ListGroup.Item>
//       </ListGroup>
//       <Card.Body>
//         <div className="rating">
//           {[5, 4, 3, 2, 1].map((star) => (
//             <FaStar
//               key={star}
//               onClick={() => handleRating(star)}
//               style={{
//                 cursor: "pointer",
//                 color: rating >= star ? "#FFD700" : "#ccc",
//               }}
//             />
//           ))}
//         </div>
//         <div className="like-button" onClick={handleLike}>
//           <span className={`like-count ${liked ? "liked" : ""}`}>
//             {likeCount}
//           </span>
//         </div>
//         {/* زر "إضافة إلى العربة" بعد زر "Likes" */}
//         <Button
//           variant="contained"
//           color="secondary"
//           fullWidth
//           sx={{ marginTop: "16px" }}
//           onClick={() => addToCart(product)}
//         >
//           Add To Cart
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// // export default Product;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { Button } from "@mui/material";
// import useCart from "../../hooks/useCart"; // نفترض أن هناك hook لإدارة العربة
// import { Card, ListGroup } from "react-bootstrap"; // استيراد الكارد و ListGroup من react-bootstrap
// import "./ProductCard.css";

// const Product = ({ product }) => {
//   const { addToCart } = useCart(); // إضافة العربة
//   const [liked, setLiked] = useState(false);
//   const [rating, setRating] = useState(0); // التقييم يبدأ من 0
//   const [likeCount, setLikeCount] = useState(68);

//   const handleLike = () => {
//     setLiked(!liked);
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//   };

//   const handleRating = (newRating) => {
//     setRating(newRating); // تعيين التقييم الجديد بناءً على النجم الذي يتم النقر عليه
//   };

//   return (
//     <Card style={{ width: "22rem" }} className={`styled-card ${liked ? "liked" : ""}`}>
//       <Card.Img variant="top" src={product.imageUrl} alt={product.name} className="card-img" />
//       <Card.Body>
//         <Card.Title>{product.name}</Card.Title>
//         <Card.Text className="card-price">${product.price}</Card.Text>
//         <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
//           <Button variant="outline-primary" fullWidth className="card-button">
//             Show Details
//           </Button>
//         </Link>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>Likes: {likeCount}</ListGroup.Item>
//       </ListGroup>
//       <Card.Body>
//         {/* التقييم */}
//         <div className="rating">
//           {[5, 4, 3, 2, 1].map((star) => (
//             <FaStar
//               key={star}
//               onClick={() => handleRating(star)} // عند النقر على النجمة، نغير التقييم
//               style={{
//                 cursor: "pointer",
//                 color: rating >= star ? "#FFD700" : "#ccc", // النجمة تضيء إذا كان التقييم أعلى من أو يساوي الرقم
//               }}
//             />
//           ))}
//         </div>
//         {/* إعجاب - تغيير اللون عند النقر */}
//         <div className="like-button" onClick={handleLike}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill={liked ? "red" : "none"} // تغير اللون إلى أحمر عند الإعجاب
//             viewBox="0 0 24 24"
//             width="24"
//             height="24"
//           >
//             <path
//               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//             />
//           </svg>
//           <span className="like-text">Likes</span>
//         </div>
//         <span className={`like-count ${liked ? "liked" : ""}`}>{likeCount}</span>

//         {/* زر "إضافة إلى العربة" بعد زر "Likes" */}
//         <Button
//           variant="contained"
//           color="secondary"
//           fullWidth
//           sx={{ marginTop: "16px" }}
//           onClick={() => addToCart(product)}
//         >
//           Add To Cart
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Product;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Button } from "@mui/material";
import useCart from "../../hooks/useCart"; // نفترض أن هناك hook لإدارة العربة
import { Card, ListGroup } from "react-bootstrap"; // استيراد الكارد و ListGroup من react-bootstrap
import "./ProductCard.css";

const Product = ({ product }) => {
  const { addToCart } = useCart(); // إضافة العربة
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0); // التقييم يبدأ من 0
  const [likeCount, setLikeCount] = useState(68);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleRating = (newRating) => {
    setRating(newRating); // تعيين التقييم الجديد بناءً على النجم الذي يتم النقر عليه
  };

  return (
    <Card
      style={{ width: "22rem" }}
      className={`styled-card ${liked ? "liked" : ""}`}
    >
      <Card.Img
        variant="top"
        src={product.imageUrl}
        alt={product.name}
        className="card-img"
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="card-price">${product.price}</Card.Text>
        <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
          <Button variant="outline-primary" fullWidth className="card-button">
            Show Details
          </Button>
        </Link>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Likes: {likeCount}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {/* التقييم */}
        <div className="rating">
          {[5, 4, 3, 2, 1].map((star) => (
            <FaStar
              key={star}
              onClick={() => handleRating(star)} // عند النقر على النجمة، نغير التقييم
              style={{
                cursor: "pointer",
                color: rating >= star ? "#FFD700" : "#ccc", // النجمة تضيء إذا كان التقييم أعلى من أو يساوي الرقم
              }}
            />
          ))}
        </div>
        {/* إعجاب - تغيير اللون عند النقر */}
        <div className="like-button" onClick={handleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "red" : "none"} // تغير اللون إلى أحمر عند الإعجاب
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="like-text">Likes</span>
        </div>
        <span className={`like-count ${liked ? "liked" : ""}`}>
          {likeCount}
        </span>

        {/* زر "إضافة إلى العربة" بعد زر "Likes" */}
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ marginTop: "16px" }}
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
