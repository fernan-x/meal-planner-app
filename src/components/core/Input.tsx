import React from "react";

interface InputProps {
  label: string;
  type?: "text" | "password";
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  focus?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  type = "text",
  value = "",
  placeholder = "",
  focus = false,
  disabled = false,
}: InputProps) => {
  return (
    <div className="input">
      <label className="input__label small-text-regular">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        autoFocus={focus}
        onChange={onChange}
        className="input__field"
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
