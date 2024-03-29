import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import MyLoader from "../../utils/MyLoader";
import { ProductCard } from "./ProductCard";
import styles from "./ProductList.module.css";
import {
  fetchProduct,
  selectIsLoadingViaAPI,
  selectProducts,
} from "../../redux/slices/productSlice";

export const ProductsList = () => {
  const dispatch = useDispatch();
  // Получаем данные о загрузке и продукты из состояния
  const isLoading = useSelector(selectIsLoadingViaAPI);
  const products = useSelector(selectProducts);

  let loaders = [];
  if (isLoading) {
    for (let i = 0; i < 3; i++) {
      loaders.push(<MyLoader className={styles.loaders} key={i} />); // Используйте индекс i в качестве ключа
    }
  }

  useEffect(() => {
    // Загрузка данных о продуктах, только если массив продуктов пуст
    if (products.length === 0) {
      dispatch(fetchProduct("http://localhost:4000/product-list-delayed"));
    }
  }, [dispatch, products.length]);

  return (
    <div className={styles.mainContainer}>
      <h2>Confectionery / «Chocolate bars»</h2>
      <hr />

      <div className={styles.viewContent}>
        <div className={styles.container}>
          {isLoading && loaders}
          {products.map((product) => {
            return <ProductCard {...product} key={uuidv4()} />;
          })}
        </div>
      </div>
    </div>
  );
};
