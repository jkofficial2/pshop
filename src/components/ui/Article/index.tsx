import React, { FC, PropsWithChildren } from "react";

const Atricle: FC<PropsWithChildren<ArticleConfig>> = ({
  id,
  children,
  title,
  className,
  classNameH4
}) => {
  return (
    <article id={id} key={id} className={className}>
      <h4 className={classNameH4}>{title}</h4>
      {children}
    </article>
  );
};

export default Atricle;
