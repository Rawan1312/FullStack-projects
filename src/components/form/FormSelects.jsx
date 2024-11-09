import React from "react";

import PropTypes from "prop-types";

const FormSelects = ({
  id,
  name,
  value,
  onChange,
  required,
  options,
  placeholder,
}) => {
  return (
    <select
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
    >
      {placeholder && <options value="">{placeholder}</options>}
      {options.map((options) => {
        return (
          <option key={options.value} value={options.value}>
            {options.lable}
          </option>
        );
      })}
    </select>
  );
};
FormSelects.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default FormSelects;
