import React from "react";
import { FormLabel } from "react-bootstrap";
import FormInput from "./FormInput";
import FormError from "./FormError";

const FormGroup = ({
  id,
  label,
  name,
  type,
  value,
  onChange,
  required,
  accept,
  error,
}) => {
  return (
    <div className=" Forms-Group">
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <FormInput
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        accept={accept}
      />
      {error && <FormError message={error} />}
    </div>
  );
};

FormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  accept: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
};

export default FormGroup;
