import { useNavigate, useParams } from "react-router-dom";

import { Typography, Container, Button } from "@mui/material";
import { getProductById } from "../services/productService";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleNavigateToHomepage = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await getProductById(id);
        setProduct(response);
      } catch (error) {
        setError("Failed to load product details.");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <Typography variant="h4" style={{ textAlign: "center" }}>
        Loading product details...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="h4" style={{ textAlign: "center", color: "red" }}>
        {error}
      </Typography>
    );
  }

  if (!product) return null;

  const { name, author, publicationYear, description, price, genre, imageUrl } =
    product;

  return (
    <Container
      style={{
        padding: "40px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: "40%",
            height: "auto",
            borderRadius: "8px",
            marginRight: "20px",
          }}
        />
        <div style={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Author: <span style={{ fontWeight: "normal" }}>{author}</span>
          </Typography>
          <Typography variant="h6" gutterBottom>
            Publication Year:{" "}
            <span style={{ fontWeight: "normal" }}>{publicationYear}</span>
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ fontStyle: "italic" }}
          >
            Description:{" "}
            <span style={{ fontWeight: "normal" }}>{description}</span>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Price:{" "}
            <span style={{ fontWeight: "bold", color: "#f50057" }}>
              ${price}
            </span>
          </Typography>
          <Typography variant="h6" gutterBottom>
            Genre: <span style={{ fontWeight: "normal" }}>{genre}</span>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "#A04B3B",
              color: "white",
              padding: "10px 20px",
              marginTop: "20px",
            }}
            onClick={handleNavigateToHomepage}
          >
            Back
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
