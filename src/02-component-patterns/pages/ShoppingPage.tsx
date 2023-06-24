import {
  ProductButtons,
  ProductImage,
  ProductTitle,
  ProductCard,
} from "../components";
import '../styles/custom-styles.css'
const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title title={"Hola mundo"}  className="text-bold"/>
          <ProductButtons className="dark-buttons"/>
        </ProductCard>
        <ProductCard 
        product={product}
        className="bg-dark text-white"
        >
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons"/>
        </ProductCard>

        <ProductCard 
        product={product}
        >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
