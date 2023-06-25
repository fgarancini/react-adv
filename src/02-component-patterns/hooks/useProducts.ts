import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

const useProducts = ({ product, onChange, value = 0 }: useProductsArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    if (isControlled.current && onChange) {
      return onChange({ count: value, product: product });
    }
    console.log("isControlled", isControlled.current);

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  return { counter, increaseBy };
};

export default useProducts;
