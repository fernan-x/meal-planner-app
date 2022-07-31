import React from "react";

interface ButtonProps {
  variant?: "big" | "medium" | "small";
  disabled?: boolean;
  children?: React.ReactNode;
  onClick: React.MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({
  variant = "medium",
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${variant}${disabled ? " disabled" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
