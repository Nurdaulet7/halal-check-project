import { ProductCard } from "./ProductCard";
import styles from "./ProductList.module.css";

export const ProductsList = () => {
  return (
    <div className={styles.mainContainer}>
      <h2>Confectionery / «Chocolate bars»</h2>
      <hr />
      <div className={styles.container}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
