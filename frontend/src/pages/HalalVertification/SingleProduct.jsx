import { IoMdClose } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectProducts } from "../../redux/slices/productSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/SingleProduct.module.css";
import { ThreeDots } from "react-loader-spinner";
import createSlug from "../../utils/сreateSlug";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.slug;
  const products = useSelector(selectProducts);
  const product = products.find((product) => createSlug(product.name) === slug);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    // Загрузка данных о продуктах, только если массив продуктов пуст
    if (products.length === 0) {
      dispatch(fetchProduct("http://localhost:8080/product/getAll"));
    }
  }, [dispatch, products.length]);

  if (!product) {
    return (
      <div className={`${styles.productContent} ${styles.loader}`}>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  return (
    <div className={styles.productContent}>
      <div className={styles.contentTitle}>
        <div className={styles.header}>
          <h1 className={styles.productName}>
            {product.name}
            <span className={styles.barcode}>{product.barcode}</span>
          </h1>
        </div>

        <button onClick={handleBack}>
          <IoMdClose />
        </button>
      </div>
      <div
        className={`${styles.status} ${
          product.status.toLowerCase() === "halal"
            ? styles.halal
            : product.status.toLowerCase() === "haram"
            ? styles.haram
            : styles.doubtful
        }`}
      >
        {`This product is ${product.status}`}
      </div>
      <div className={styles.productPage}>
        <div className={styles.productPageTop}>
          <div className={styles.productImage}>
            <img src={product.imageUrl} alt="product" />
          </div>
          <div className={styles.productDetails}>
            <div className={styles.content}>
              <div className={styles.additives}>
                <h3>Additivies:</h3>
                <ul>
                  {product.additives.length === 0 && (
                    <p id={styles.additiveEmpty}>
                      Not contain any food additives.
                    </p>
                  )}
                  {product.additives.map((additive) => {
                    return (
                      <li key={uuidv4()}>
                        <span
                          className={`${styles.code} ${
                            additive.status.toLowerCase() === "halal"
                              ? styles.halal
                              : additive.status.toLowerCase() === "haram"
                              ? styles.haram
                              : styles.doubtful
                          }`}
                        >
                          {
                            <Link to={`/additives/${additive.code}`}>
                              {additive.code}
                            </Link>
                          }
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={styles.ingredients}>
                <h3>Ingredients:</h3>
                <p>
                  {!product.ingredients[0]
                    ? ""
                    : product.ingredients[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.information}>
            {/* <div className={styles.countryOfOrigin}>
              <h3>Country of origin:</h3>
              <p>{`${product.originCountry.name}, ${product.originCountry.code}`}</p>
            </div> */}
            <div className={styles.company}>
              <h3>Companies:</h3>
              <p>{product.company}</p>
            </div>
            <div className={styles.storage}>
              <h3>Storage:</h3>
              <p>{product.storage}</p>
            </div>
          </div>
          {product.certified && (
            <div className={styles.certifiedDoc}>
              <FiCheckCircle id={styles.iconCertified} />
              <p>
                Certified by:{" "}
                <a
                  href={product.certificate.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.certificate.name}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
