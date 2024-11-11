import React, { useState } from "react";
import { TextField, Button, Box, Typography, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateProductForm() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // إرسال البيانات إلى الخادم
      const response = await axios.post("/api/products", product); // استخدم المسار الصحيح لـ API
      if (response.status === 201) {
        setMessage("Product created successfully!");
        setOpenSnackbar(true);
        navigate("/admin/products"); // توجيه المسؤول إلى صفحة المنتجات
      }
    } catch (error) {
      setMessage("Error creating product!");
      setOpenSnackbar(true);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Create New Product
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />

        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />

        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          margin="normal"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          type="number"
        />

        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          margin="normal"
          name="image"
          value={product.image}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Create Product
        </Button>
      </form>

      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message={message}
        autoHideDuration={3000}
      />
    </Box>
  );
}

export default CreateProductForm;
