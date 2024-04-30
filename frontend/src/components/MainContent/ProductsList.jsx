import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import MyLoader from "../../utils/MyLoader";
import { ProductCard } from "./ProductCard";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { TbZoomReset } from "react-icons/tb";
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
import { clearError, selectErrorMessage } from "../../redux/slices/errorSlice";
import { useMediaQuery } from "react-responsive";
import TruncatedText from "../../utils/TruncatedText";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);
  const productNameFilter = useSelector(selectProductNameFilter);
  const categoryFilter = useSelector(selectCategoryFilter);
  const onlyCertifiedFilter = useSelector(selectOnlyCertifiedFilter);
  const isLoading = useSelector(selectIsLoadingViaAPI);
  const products = useSelector(selectProducts);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const mobileCategoryText = useMediaQuery({ maxWidth: 500 });

  useEffect(() => {
    // Загрузка данных о продуктах, только если массив продуктов пуст
    if (products.length === 0) {
      handleFetchData();
    }
  }, [dispatch, products.length]);

  const handleFetchData = () => {
    dispatch(fetchProduct("http://localhost:8080/product/getAll"));
    dispatch(clearError());
  };

  const handleResetFilter = () => {
    dispatch(resetFilters());
  };

  const isAnyFilterActive = () => {
    return (
      productNameFilter !== "" || categoryFilter !== "" || onlyCertifiedFilter
    );
  };

  const filteredProducts = products.filter((product) => {
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

  let loaders = [];
  if (isLoading) {
    for (let i = 0; i < 3; i++) {
      loaders.push(<MyLoader className={styles.loaders} key={i} />); // Используйте индекс i в качестве ключа
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.listTop}>
        <h2>
          {categoryFilter === "" ? (
            "Products"
          ) : mobileCategoryText ? (
            <TruncatedText
              text={capitalizeFirstLetter(categoryFilter)}
              maxLength={15}
            />
          ) : (
            capitalizeFirstLetter(categoryFilter)
          )}
        </h2>
        {isAnyFilterActive() && (
          <p onClick={handleResetFilter}>
            {isMobile ? "" : "Reset filters"}
            <TbZoomReset id={styles.resetIcon} />
          </p>
        )}
      </div>

      <hr />

      <div className={styles.viewContent}>
        <div className={styles.container}>
          {isLoading ? (
            loaders
          ) : errorMessage && products.length === 0 ? (
            <EmptyPage
              isError={true}
              errorMessage={errorMessage}
              fetch={handleFetchData}
            />
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              return <ProductCard {...product} key={uuidv4()} />;
            })
          ) : (
            <EmptyPage
              isError={false}
              reset={handleResetFilter}
              title={"products"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
