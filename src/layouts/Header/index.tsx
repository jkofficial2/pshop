import Link from "components/ui/Link";
import useToggle from "hooks/useToggle";
import React, { memo, useEffect, useState } from "react";
import { navbarLinks } from "../../data/headerLinks";
import ModalConfig from "components/ui/Modal/components";
import Button from "components/ui/Button";
import useWindowSize from "hooks/useWindowSize";
import { useScroll } from "hooks/useScroll";

const Header = () => {
  const [isOpen, setIsOpen] = useToggle();

  return (
    <header className="flex justify-between flex-col pt-8 mt-0 mx-auto mb-8 w-full px-[2vw] z-10 bg-white">
      <div className="flex justify-between items-center mb-10">
        <div className="flex justify-center items-center">
          <p className="pr-10">
            <Link to={"/"}>Logo</Link>
          </p>
          <ul className="flex justify-between items-center">
            {navbarLinks.map((link) => {
              return (
                <li key={link.id} className="mr-8">
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right">
          <p>Регестрация или Логин</p>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
