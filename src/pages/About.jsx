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
import React from "react";

const About = () => {
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
    >
      <h2 style={{ color: "#597386", marginBottom: "15px" }}>About Us</h2>
      <p style={{ lineHeight: "1.6", fontSize: "1.1em" }}>
        Welcome to <strong>The Book Nook</strong>, your go-to bookstore for all
        kinds of books! Whether you're looking for the latest bestsellers or
        timeless classics, we've got something for every reader.
      </p>
    </div>
  );
};

export default About;
