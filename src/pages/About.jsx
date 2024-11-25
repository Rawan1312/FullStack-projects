// import React from "react";

// const About = () => {
//   return (
//     <div
//       style={{
//         padding: "2px",
//         // backgroundColor: "",
//         color: "#32474C",
//         height: "60vh",
//         width: "100vh",
//       }}
//     >
//       <h2>About Us</h2>
//       <p>
//         Welcome to The Book Nook, your go-to bookstore for all kinds of books!
//       </p>
//     </div>
//   );
// };

// export default About;
import React, { useEffect, useState } from "react";

const AboutUs = () => {
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
    <div
      style={{
        backgroundColor: "#DDD0C8", // Light beige background
        color: "#32474C", // Dark gray-blue for text
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        maxWidth: "600px",
        margin: "40px auto",
        textAlign: "center",
      }}
      className={`section ${visible ? "visible" : ""}`}
    >
      <h2 style={{ color: "#597386", marginBottom: "15px" }}>About Us</h2>
      <p>
        At NovelLand, we believe in providing a wide range of books for all
        readers. Whether you're into fiction, non-fiction, or academic
        literature, we've got something for you.
      </p>
    </div>
  );
};

export default AboutUs;
