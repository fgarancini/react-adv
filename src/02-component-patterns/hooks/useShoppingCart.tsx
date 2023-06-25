import { Product, ProductInCard } from "../interfaces/interfaces";
import { useState } from "react";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCard;
  }>({});

  const onProductCardChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShopingCart) => {

      const newCart = {
        ...oldShopingCart,
        [product.id]: { ...product, count },
      };

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShopingCart;
      //   return rest;
      // }

      if (count === 0) {
        delete newCart[product.id];
      }
      return newCart;
    });
  };

  return {
    shoppingCart,
    onProductCardChange,
  };
};

export default useShoppingCart;
