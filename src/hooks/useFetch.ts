import { Dispatch, SetStateAction, useEffect } from "react";

//!Demo version

const useFetch = (
  option: string,
  api: string,
  setProducts: Dispatch<SetStateAction<never[]>>
) => {
  useEffect(() => {
    if (!option) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`${api}${option}`);
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [api, option, setProducts]);
};

export default useFetch;
