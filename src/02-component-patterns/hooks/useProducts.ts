import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

const useProducts = ({ product, onChange, value = 0 }: useProductsArgs) => {
  const [counter, setCounter] = useState(value);


  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  return { counter, increaseBy };
};

export default useProducts;
