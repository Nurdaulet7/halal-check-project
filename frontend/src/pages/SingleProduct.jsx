import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectProducts } from "../redux/slices/productSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SingleProduct.module.css";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.slug;
  const products = useSelector(selectProducts);
  const product = products.find((product) => product.slug === slug);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/vertification");
  };
  useEffect(() => {
    // Загрузка данных о продуктах, только если массив продуктов пуст
    if (products.length === 0) {
      dispatch(fetchProduct("http://localhost:4000/product-list-delayed"));
    }
  }, [dispatch, products.length]);

  if (!product) {
    return <div>Loading product details...</div>;
  }
  return (
    <div className={styles.productContent}>
      <div className={styles.contentTitle}>
        <h1 className={styles.productName}>
          {product.name}
          <span className={styles.barcode}>{product.barcode}</span>
        </h1>
      </div>
      <div className={styles.status}>{product.status}</div>
      <div className={styles.productPage}></div>
    </div>
  );
};

export default SingleProduct;
// <>
//   <div>{product.status}</div>
//   <button onClick={handleBack}>Назад к списку продуктов</button>
// </>
