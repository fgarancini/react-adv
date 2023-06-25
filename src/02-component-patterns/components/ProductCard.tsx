import { ReactElement, createContext } from "react";
import useProducts from "../hooks/useProducts";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  onChange,
}: Props) => {
  const { counter, increaseBy } = useProducts({ onChange, product, value });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div
        className={`${styles.productCard} ${className}`}
        key={product.id}
        style={style}
      >
        {children}
      </div>
    </Provider>
  );
};
