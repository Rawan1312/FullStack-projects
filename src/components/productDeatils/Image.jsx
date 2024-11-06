import React from "react";

const Image = ({ Image, title }) => {
  return (
    <div>
      <img src={Image} alt={title} />
    </div>
  );
};

export default Image;
