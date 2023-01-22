import React, { FC, PropsWithChildren } from "react";

const Tile: FC<PropsWithChildren<TileConfig>> = ({
  children,
  className,
  id,
}) => {
  return (
    <div id={id} key={id} className={"tile px-4 py-2 w-full" + className}>
      {children}
    </div>
  );
};

export default Tile;
