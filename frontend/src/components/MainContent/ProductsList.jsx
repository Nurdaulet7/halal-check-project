import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import MyLoader from "../../utils/MyLoader";
import { ProductCard } from "./ProductCard";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import {
  fetchProduct,
  selectIsLoadingViaAPI,
  selectProducts,
} from "../../redux/slices/productSlice";
import {
  selectProductNameFilter,
  selectCategoryFilter,
  selectOnlyCertifiedFilter,
  resetFilters,
} from "../../redux/slices/filterProductsSlice";
import styles from "./ProductList.module.css";
import { EmptyPage } from "../../utils/EmptyPage";

export const ProductsList = () => {
  const dispatch = useDispatch();

  const productNameFilter = useSelector(selectProductNameFilter);
  const categoryFilter = useSelector(selectCategoryFilter);
  const onlyCertifiedFilter = useSelector(selectOnlyCertifiedFilter);
  // Получаем данные о загрузке и продукты из состояния
  const isLoading = useSelector(selectIsLoadingViaAPI);
  const products = useSelector(selectProducts);

  useEffect(() => {
    // Загрузка данных о продуктах, только если массив продуктов пуст
    if (products.length === 0) {
      dispatch(fetchProduct("http://localhost:8080/product/getAll"));
    }
  }, [dispatch, products.length]);

  const filteredProducts = products.filter((product) => {
    console.log(product);
    const matchesName = product.name
      .toLowerCase()
      .includes(productNameFilter.toLowerCase());
    // const matchesCategory = product.subCategory.name
    //   .toLowerCase()
    //   .includes(categoryFilter.toLowerCase());
    const matchesCategory =
      categoryFilter === "" ||
      product.category.name.toLowerCase() === categoryFilter.toLowerCase() ||
      (product.subCategory &&
        product.subCategory.name.toLowerCase() ===
          categoryFilter.toLowerCase());
    const matchesCertified = onlyCertifiedFilter ? product.certified : true;
    return matchesName && matchesCertified && matchesCategory;
    // return matchesName;
  });

  const handleResetFilter = () => {
    dispatch(resetFilters());
  };

  let loaders = [];
  if (isLoading) {
    for (let i = 0; i < 3; i++) {
      loaders.push(<MyLoader className={styles.loaders} key={i} />); // Используйте индекс i в качестве ключа
    }
  }

  return (
    <div className={styles.mainContainer}>
      <h2>
        {categoryFilter === ""
          ? "Products"
          : capitalizeFirstLetter(categoryFilter)}
      </h2>
      <hr />

      <div className={styles.viewContent}>
        <div className={styles.container}>
          {isLoading && loaders}
          {!isLoading && filteredProducts.length === 0 && (
            <EmptyPage reset={handleResetFilter} />
          )}
          {filteredProducts.map((product) => {
            return <ProductCard {...product} key={uuidv4()} />;
          })}
        </div>
      </div>
    </div>
  );
};
