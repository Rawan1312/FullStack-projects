// import { TextField } from "@mui/material";

// import React, { useContext } from "react";
// import { ProductContext } from "../../context/ProduuctsContext";

// const SearchInput = () => {
//   const { setSearchValue } = useContext(ProductContext);
//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };
//   return (
//     <TextField
//       label="Search Products"
//       variant="outlined"
//       fullWidth
//       onChange={handleSearchChange}
//       margin="normal"
//     />
//   );
// };

// export default SearchInput;
import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { ProductContext } from "../../context/ProductsContext";

const SearchInput = () => {
  const { searchValue, setSearchValue } = useContext(ProductContext);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <TextField
      label="Search for products"
      variant="outlined"
      fullWidth
      value={searchValue}
      onChange={handleSearchChange}
    />
  );
};

export default SearchInput;
