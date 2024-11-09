import React from "react";

import PropTypes from "prop-types";

const FormError = ({ message }) => {
  return <p>{message}</p>;
};
FormButton.propTypes = {
  type: PropTypes.string,
};

export default FormError;
