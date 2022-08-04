import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
}: ContainerProps) => {
  return (
    <div className={`container${className ? " " + className : ""}`}>
      {children}
    </div>
  );
};

export default Container;
