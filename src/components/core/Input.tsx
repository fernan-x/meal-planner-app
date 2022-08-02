import React from "react";

interface InputProps {
  label: string;
  onChange: React.ChangeEventHandler;
  placeholder?: string;
  value?: string;
  focus?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  value = "",
  placeholder = "",
  focus = false,
}: InputProps) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        autoFocus={focus}
        onChange={onChange}
        className="input__field"
      />
    </div>
  );
};

export default Input;
