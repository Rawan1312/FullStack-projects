// import React, { useState } from "react";
// import {
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Box,
//   TextField,
// } from "@mui/material";

// import useCart from "../../hooks/useCart";

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   // Calculate total price
//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <Box padding={3}>
//       <Typography variant="h4" gutterBottom>
//         Your Cart
//       </Typography>
//       {cart.length === 0 ? (
//         <Typography variant="h6">Your cart is empty</Typography>
//       ) : (
//         cart.map((item) => (
//           <Card
//             sx={{ display: "flex", marginBottom: 2, padding: 2 }}
//             key={`${item.productId}-${item.quantity}`} // Use unique key
//           >
//             {/* Product Image */}
//             <CardMedia
//               component="img"
//               sx={{
//                 width: 120,
//                 height: 120,
//                 objectFit: "cover",
//                 borderRadius: 1,
//               }}
//               image={item.image} // assuming `item.image` contains the image URL
//               alt={item.name}
//             />
//             {/* Product Details */}
//             <CardContent
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 paddingLeft: 2,
//               }}
//             >
//               <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                 {item.name}
//               </Typography>
//               <Typography variant="body2">
//                 Price: ${item.price.toFixed(2)}
//               </Typography>
//               <Typography variant="body2">Quantity: {item.quantity}</Typography>
//               <Box sx={{ marginTop: "auto" }}>
//                 <Button
//                   variant="contained"
//                   color="error"
//                   onClick={() => removeFromCart(item.productId)}
//                   sx={{ marginTop: 1 }}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </CardContent>
//           </Card>
//         ))
//       )}

//       {/* Total Price */}
//       {cart.length > 0 && (
//         <Typography variant="h6" sx={{ marginTop: 2, fontWeight: "bold" }}>
//           Total Price: ${totalPrice.toFixed(2)}
//         </Typography>
//       )}

//       {/* Clear Cart Button */}
//       {cart.length > 0 && (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={clearCart}
//           sx={{ marginTop: 2 }}
//         >
//           Clear Cart
//         </Button>
//       )}

//       {/* Payment Option Button */}
//       {cart.length > 0 && (
//         <Button variant="contained" color="success" sx={{ marginTop: 2 }}>
//           Proceed to Payment
//         </Button>
//       )}
//     </Box>
//   );
// };

// export default Cart;
// import React from "react";
// import {
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Box,
//   TextField,
//   IconButton,
//   Divider,
// } from "@mui/material";
// import { Add, Remove, Delete } from "@mui/icons-material";

// import Grid from "@mui/material/Grid";

// import useCart from "../../hooks/useCart";

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const increaseQuantity = (productId) => {
//     const item = cart.find((item) => item.productId === productId);
//     if (item) {
//       updateQuantity(productId, item.quantity + 1);
//     }
//   };

//   const decreaseQuantity = (productId) => {
//     const item = cart.find((item) => item.productId === productId);
//     if (item && item.quantity > 1) {
//       updateQuantity(productId, item.quantity - 1);
//     }
//   };

//   return (
//     <Box padding={3}>
//       <Typography variant="h4" gutterBottom>
//         Your Cart
//       </Typography>

//       <Grid container spacing={4}>
//         {/* Left Column: Cart Items */}
//         <Grid size={{ xs: 12, md: 8 }}>
//           {cart.length === 0 ? (
//             <Typography variant="h6">Your cart is empty</Typography>
//           ) : (
//             <>
//               {/* Clear Cart Button at the top */}
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={clearCart}
//                 sx={{ marginBottom: 2 }}
//               >
//                 Clear Cart
//               </Button>

//               {cart.map((item) => (
//                 <Card
//                   sx={{ display: "flex", marginBottom: 2, padding: 2 }}
//                   key={item.productId}
//                 >
//                   <CardMedia
//                     component="img"
//                     sx={{
//                       width: 120,
//                       height: 120,
//                       objectFit: "cover",
//                       borderRadius: 1,
//                     }}
//                     image={item.image} // assuming `item.image` contains the image URL
//                     alt={item.name}
//                   />
//                   <CardContent
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "space-between",
//                       paddingLeft: 2,
//                       flex: 1,
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                       {item.name}
//                     </Typography>
//                     <Typography variant="body2">
//                       Price: ${item.price.toFixed(2)}
//                     </Typography>
//                     {/* Quantity Control */}
//                     <Box
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         marginTop: 1,
//                       }}
//                     >
//                       <IconButton
//                         onClick={() => decreaseQuantity(item.productId)}
//                         color="primary"
//                         size="small"
//                       >
//                         <Remove />
//                       </IconButton>
//                       <Typography variant="body2" sx={{ margin: "0 8px" }}>
//                         Quantity: {item.quantity}
//                       </Typography>
//                       <IconButton
//                         onClick={() => increaseQuantity(item.productId)}
//                         color="primary"
//                         size="small"
//                       >
//                         <Add />
//                       </IconButton>
//                     </Box>
//                     {/* Remove Button with Icon */}
//                     <IconButton
//                       variant="contained"
//                       color="error"
//                       onClick={() => removeFromCart(item.productId)}
//                       sx={{ marginTop: 2, alignSelf: "flex-start" }}
//                     >
//                       <Delete />
//                     </IconButton>
//                   </CardContent>
//                 </Card>
//               ))}
//             </>
//           )}
//         </Grid>

//               <Divider sx={{ mb: 2 }} />
//               <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                 Total Price: ${totalPrice.toFixed(2)}
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="success"
//                 fullWidth
//                 sx={{ marginTop: 2 }}
//               >
//                 Proceed to Payment
//               </Button>
//               </Box>
//             </Box>
//   );
// };

// export default Cart;
// Cart.import React from "react";
import React from "react";
import { Box, Typography, Grid2, Button } from "@mui/material";
import useCart from "../../hooks/useCart"; // Make sure the path is correct

const Cart = () => {
  const { cart, clearCart } = useCart();
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      <Grid2 container spacing={4}>
        {/* Left Column: Cart Items */}
        <Grid item xs={12} md={8}>
          {cart.length === 0 ? (
            <Typography variant="h6">Your cart is empty</Typography>
          ) : (
            <>
              {/* Clear Cart Button */}
              <Button
                variant="contained"
                color="secondary"
                onClick={clearCart}
                sx={{ marginBottom: 2 }}
              >
                Clear All Items
              </Button>

              {/* Render Cart Items */}
              {cart.map((item) => (
                <Box key={item.productId} sx={{ marginBottom: 2 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography variant="body2">Price: ${item.price}</Typography>
                </Box>
              ))}
            </>
          )}
        </Grid>

        {/* Right Column: Summary */}
        <Grid2 item xs={12} md={4}>
          {cart.length > 0 && (
            <Box sx={{ padding: 2, border: "1px solid #ddd", borderRadius: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Order Summary
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Total Price: ${totalPrice.toFixed(2)}
              </Typography>
            </Box>
          )}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Cart;
