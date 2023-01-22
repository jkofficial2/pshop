import React, { FC, PropsWithChildren } from "react";

const Button: FC<PropsWithChildren<ButtonConfig>> = ({
  children,
  className,
  id,
  disable,
  onClick,
}) => {
  return (
    <button
      className={className}
      id={id}
      onClick={onClick}
      key={id}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
