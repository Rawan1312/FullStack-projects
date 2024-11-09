import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await getProductById(id);
        setProduct(response.data);
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
    return <Typography variant="h4">Loading product details...</Typography>;
  }

  if (error) {
    return <Typography variant="h4">{error}</Typography>;
  }

  if (!product) return null;

  const { author, publicationYear, description, price, genre, imageUrl } =
    product;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Author: {author}
      </Typography>
      <Typography variant="h4" gutterBottom>
        Publication Year: {publicationYear}
      </Typography>
      <Typography variant="h3" gutterBottom>
        Description: {description}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Price: ${price}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Genre: {genre}
      </Typography>
      <img src={imageUrl} alt={product.name} style={{ width: "100%" }} />
    </Container>
  );
};

export default ProductDetails;
