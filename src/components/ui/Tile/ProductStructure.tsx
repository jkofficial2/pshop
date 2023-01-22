import React, { FC, memo, useEffect, useMemo, useState } from "react";
import Images from "components/ui/Image";
import Modal from "components/ui/Modal/index";
import ModalConfig from "components/ui/Modal/components";
import Tile from ".";
import Button from "components/ui/Button";
import useToggle from "hooks/useToggle";

const ProductStructure: FC<PizzaStructure> = ({ pizza }) => {
  const [isOpen, setIsOpen] = useToggle();
  const [pizzaItem, setPizzaItem] = useState(pizza);

  useEffect(() => setPizzaItem(() => pizzaItem), [pizzaItem]);

  return (
    <>
      <Tile
        className="tile-products px-4 py-2"
        id={pizzaItem.id}
        key={pizzaItem.id}
      >
        <div
          onClick={setIsOpen}
          className="flex flex-col justify-between h-full"
        >
          <div className="relative w-full h-80">
            <Images
              src={pizzaItem.src}
              layout={"fill"}
              placeholder="blur"
              priority={false}
              alt={pizzaItem.alt}
              height={undefined}
              width={undefined}
              sizes={""}
            />
          </div>
          <h3 className="mb-3">{pizzaItem.name}</h3>
          <p className="mb-3">{pizzaItem.description}</p>
          <ModalConfig
            handleClose={setIsOpen}
            isOpen={isOpen}
            product={pizza}
          />
          <div className="flex justify-between items-end pb-3">
            <p>от {pizzaItem.price} р</p>
            <Button
              disable={false}
              className="rounded-2xl bg-[#f2d688] bg-opacity-50 px-4 py-3"
            >
              <p>выбрать</p>
            </Button>
          </div>
        </div>
      </Tile>
    </>
  );
};

export default memo(ProductStructure);
