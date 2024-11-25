// import React from "react";

// import "./Homestyle.css";

// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleNavigateToProducts = () => {
//     navigate("/products");
//   };
//   return (
//     <div className="hero-container">
//       <div className="hero-content">
//         <h1>Welcome to Bookstore</h1>
//         <p>Your one-stop shop for all the books you love!</p>
//         <button className="shop-now-btn" onClick={handleNavigateToProducts}>
//           Shop Now
//         </button>
//       </div>
//     </div>
//   );
// };

// // export default Home;

import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid2,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import { Book, EmojiPeople, School, GitHub } from "@mui/icons-material";
import "./Homestyle.css";

const HomePage = () => {
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box className="hero-container">
        {/* تراكب التدرج الشفاف فوق الخلفية */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))",
            zIndex: 1,
          }}
        />

        {/* المحتوى */}
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            position: "relative", // السماح بالمحتوى فوق التدرج
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "40px 20px",
              borderRadius: "16px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                mb: 2,
              }}
            >
              Welcome to NovelLand
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                mb: 4,
                color: "#f0f0f0",
              }}
            >
              Your one-stop shop for books of all genres
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundImage: "linear-gradient(to bottom, #A33D51, #CB6854)", // تدرج لوني بين اللونين
                color: "#fff",
                padding: "10px 20px",
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "30px",
                "&:hover": {
                  backgroundImage:
                    "linear-gradient(to bottom, #A33D51, #CB6854)", // نفس التدرج عند التمرير
                },
              }}
              href="/products"
            >
              Shop Now
            </Button>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          padding: "40px",
          backgroundColor: "#f9f9f9",
          marginY: "40px", // زيادة المسافة بين Hero و About Us
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease-in",
        }}
        ref={aboutUsRef}
        id="about-us"
      >
        <Container>
          <Typography
            variant="h4"
            sx={{ color: "#32474c", mb: 4, textAlign: "center" }}
          >
            About Us
          </Typography>
          <Grid2 container spacing={4}>
            <Grid2 item xs={12} sm={4}>
              <Card sx={{ textAlign: "center", padding: "20px", boxShadow: 3 }}>
                <Book sx={{ fontSize: "50px", color: "#ff5733" }} />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  Wide Range of Books
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#666" }}>
                  We offer books of all genres, from fiction to academic
                  literature.
                </Typography>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Card sx={{ textAlign: "center", padding: "20px", boxShadow: 3 }}>
                <EmojiPeople sx={{ fontSize: "50px", color: "#ff5733" }} />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  Friendly Community
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#666" }}>
                  Join a community of passionate readers and book lovers.
                </Typography>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Card sx={{ textAlign: "center", padding: "20px", boxShadow: 3 }}>
                <School sx={{ fontSize: "50px", color: "#ff5733" }} />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  Learning Opportunities
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#666" }}>
                  Discover books that expand your knowledge and inspire
                  creativity.
                </Typography>
              </Card>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      {/* Contact Us Section */}
      <Box
        sx={{
          padding: "40px",
          backgroundColor: "#f9f9f9",
          marginY: "20px",
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease-in",
        }}
        ref={contactRef}
        id="contact"
      >
        <Container>
          <Card sx={{ boxShadow: 3, borderRadius: "8px" }}>
            <CardContent>
              <Typography variant="h4" sx={{ color: "#32474c", mb: 2 }}>
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem", color: "#666", mb: 2 }}
              >
                Reach out to us for any queries, feedback, or book suggestions.
              </Typography>
              <Link
                href="https://github.com/Rawan1312?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <GitHub sx={{ fontSize: "30px", color: "#000" }} />
              </Link>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
