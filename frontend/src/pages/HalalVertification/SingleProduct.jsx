import { IoMdClose } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectProducts } from "../../redux/slices/productSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/SingleProduct.module.css";

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
        <div className={styles.header}>
          <h1 className={styles.productName}>
            {product.name}
            <span className={styles.barcode}>{product.barcode}</span>
          </h1>
          {product.certified && (
            <div className={styles.certified}>
              <FiCheckCircle id={styles.iconCertified} />
              <p>Certified</p>
            </div>
          )}
        </div>

        <button onClick={handleBack}>
          <IoMdClose />
        </button>
      </div>
      <div
        className={`${styles.status} ${
          product.status === "halal"
            ? styles.halal
            : product.status === "haram"
            ? styles.haram
            : styles.doubtful
        }`}
      >
        {`This product is ${product.status}`}
      </div>
      <div className={styles.productPage}>
        <div className={styles.productPageTop}>
          <div className={styles.productImage}>
            <img src={product.img} alt="product" />
            <div className={styles.information}>
              <div className={styles.countryOfOrigin}>
                <h3>Country of origin:</h3>
                <p>{product.ingredients.origin}</p>
              </div>
              <div className={styles.storage}>
                <h3>Storage:</h3>
                <p>{product.ingredients.storage}</p>
              </div>
              <div className={styles.company}>
                <h3>HelfLife:</h3>
                <p>{product.ingredients.helfLife}</p>
              </div>
            </div>
          </div>
          <div className={styles.productDetails}>
            <div className={styles.nutritionTableWrapper}>
              <h2>Nutrition Facts</h2>
              <table>
                <thead>
                  <tr>
                    <th>Weight</th>
                    <th>100 g</th>
                    <th>100 g*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Protein</td>
                    <td>6.3 g</td>
                    <td>6.3 g</td>
                  </tr>
                  <tr>
                    <td>Fat</td>
                    <td>29 g</td>
                    <td>29 g</td>
                  </tr>
                  <tr>
                    <td>Carb</td>
                    <td>51.3 g</td>
                    <td>51.3 g</td>
                  </tr>
                  <tr>
                    <td>Calories</td>
                    <td>482 kcal</td>
                    <td>482 kcal</td>
                  </tr>
                </tbody>
              </table>
              <p>* - Weight of 1 unit of the product</p>
            </div>
            <div className={styles.content}>
              <div className={styles.additives}>
                <h3>Additivies:</h3>
                <ul>
                  {product.additives.map((additive) => {
                    return (
                      <li key={uuidv4()}>
                        <span className={styles.code}>{additive}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={styles.ingredients}>
                <h3>Ingredients:</h3>
                <p>{product.ingredients.description}</p>
              </div>
            </div>
          </div>
        </div>
        {product.certified && (
          <div className={styles.productPageBottom}>
            <div className={styles.certifiedDoc}>
              <FiCheckCircle id={styles.iconCertified} />
              <p>{`Certified by: ${product.certifiacates.name}`}</p>
            </div>
            <div className={styles.certificate}>
              <img src={product.certifiacates.certificate} alt="certificate" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
// <>
//   <div>{product.status}</div>
//   <button onClick={handleBack}>Назад к списку продуктов</button>
// </>
