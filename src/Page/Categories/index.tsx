import { ReactNode, memo } from "react";
import { Card } from "features/categories/components/Card";
import FilterBar from "../../features/categories/components/FilterBar";

interface Props {
  users: any;
}

const Categories = () => {
  return (
    <main className="px-[2vw] grid grid-cols-[1fr_5fr]">
      <FilterBar />
      <main className="w-full pl-4">
        <header className="flex justify-end">
          <select defaultValue={"DEFAULT"}>
            <option value="DEFAULT">Сначала с высоким рейтингом</option>
            <option value="1">Сначала дешевле</option>
            <option value="2">Сначала дороже</option>
          </select>
        </header>
        <h1 className="mb-10">Categories</h1>
        <Card></Card>
      </main>
    </main>
  );
};

export default Categories;
