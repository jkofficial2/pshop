import Image from "next/image";
import React, { FC } from "react";

const Images: FC<Images> = ({
  src,
  alt,
  className,
  layout,
  priority,
  // placeholder,
  width,
  height,
  fill,
  sizes
}) => {
  return (
    //!TODO layout add option
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      width={width}
      height={height}
      fill={true}
      // layout=""
      // placeholder={placeholder}
      sizes={sizes}
    />
  );
};

export default Images;
