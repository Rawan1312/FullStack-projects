// import React from "react";
// import {
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Box,
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
//             key={item.productId}
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

// export default Cart;import React from "react";
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  TextField,
} from '@mui/material';

import useCart from '../../hooks/useCart';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        cart.map((item) => (
          <Card
            sx={{ display: 'flex', marginBottom: 2, padding: 2 }}
            key={`${item.productId}-${item.quantity}`} // Use unique key
          >
            {/* Product Image */}
            <CardMedia
              component="img"
              sx={{
                width: 120,
                height: 120,
                objectFit: 'cover',
                borderRadius: 1,
              }}
              image={item.image} // assuming `item.image` contains the image URL
              alt={item.name}
            />
            {/* Product Details */}
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingLeft: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {item.name}
              </Typography>
              <Typography variant="body2">
                Price: ${item.price.toFixed(2)}
              </Typography>
              <Typography variant="body2">Quantity: {item.quantity}</Typography>
              <Box sx={{ marginTop: 'auto' }}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeFromCart(item.productId)}
                  sx={{ marginTop: 1 }}
                >
                  Remove
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))
      )}

      {/* Total Price */}
      {cart.length > 0 && (
        <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>
      )}

      {/* Clear Cart Button */}
      {cart.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={clearCart}
          sx={{ marginTop: 2 }}
        >
          Clear Cart
        </Button>
      )}

      {/* Payment Option Button */}
      {cart.length > 0 && (
        <Button variant="contained" color="success" sx={{ marginTop: 2 }}>
          Proceed to Payment
        </Button>
      )}
    </Box>
  );
};

export default Cart;