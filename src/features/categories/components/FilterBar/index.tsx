import useToggle from "hooks/useToggle";
import { useEffect } from "react";

import Atricle from "components/ui/Article";
import Section from "components/ui/Section";
import { cat } from "data/categories";
//!Todo сделать доп категории виды десертов

const FilterBar = () => {
  const [checked, setChecked] = useToggle(false);
  // console.log(checked, "ss");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    return () => setChecked(!checked);
  };

  useEffect(() => {
    setChecked();
  }, []);
  return (
    <>
      <Section id={"filter-bar"} className="border-black border-r w-full mb-6">
        <Atricle id={"categories-bar"} title="Категория">
          <ul>
            {cat.map((list: any) => {
              return (
                <li
                  key={list.name}
                  className="flex items-center"
                  // onClick={handleChange(e.)}
                >
                  <input
                    type="checkbox"
                    onChange={() => setChecked(!checked)}
                    // onClick={() => setChecked(!checked)}
                    checked={checked}
                    name=""
                    id="categories"
                    className="mr-3"
                  />
                  <label htmlFor="categories">{list.name}</label>
                </li>
              );
            })}
          </ul>
        </Atricle>
        <Atricle id={"skill"} title="Опыт" className="mb-6">
          <div className="flex items-center">
            <input type="range" name="" id="" />
          </div>
        </Atricle>
        <Atricle id={"price"} title="Стоимость" className="mb-6">
          <div className="flex items-center">
            <input type="range" name="" id="" />
          </div>
        </Atricle>
        <Atricle id={"city"} title="Город" className="mb-6">
          <div className="flex items-center">
            <input
              type="search"
              name=""
              id=""
              className="border-black border"
            />
          </div>
        </Atricle>
      </Section>
    </>
  );
};

export default FilterBar;
