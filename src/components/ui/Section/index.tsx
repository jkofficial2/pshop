import React, { FC, PropsWithChildren } from "react";

const Section: FC<PropsWithChildren<SectionConfig>> = ({
  id,
  children,
  title,
  className,
  classNameH2,
}) => {
  return (
    <section id={id} key={id} className={className}>
      {title ? <h2 className={classNameH2}>{title}</h2> : <></>}
      {children}
    </section>
  );
};

export default Section;
