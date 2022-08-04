import React from "react";

interface ButtonProps {
  variant?: "big" | "medium" | "small";
  disabled?: boolean;
  children?: React.ReactNode;
  onClick: React.MouseEventHandler;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "medium",
  disabled = false,
  children,
  onClick,
  fullWidth = false,
}: ButtonProps) => {
  return (
    <button
      className={`${variant}${disabled ? " disabled" : ""}${
        fullWidth ? " fullwidth" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
