import React from "react";

const Input = ({ name, label, onChange, value, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
        id={name}
        name={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
