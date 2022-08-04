import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
