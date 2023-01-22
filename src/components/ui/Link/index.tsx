import { PropsWithChildren } from "react";
import NextLink from "next/link";

interface I {
  to: string;
  classNames?: string;
}

const CustomLink: React.FC<PropsWithChildren<I>> = ({
  to,
  classNames,
  children,
}) => {
  return (
    <NextLink href={to} className={classNames}>
      {children}
    </NextLink>
  );
};

export default CustomLink;
