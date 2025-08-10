// components/ui/Select.jsx
import React from "react";
import { selectBox, selectLabel, selectWrapper } from "../style/select-css";


const ISelect = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  className = "",
  ...props
}) => {
  return (
    <div className={selectWrapper}>
      {label && <label className={selectLabel}>{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className={selectBox}
        {...props}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
                {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ISelect;
