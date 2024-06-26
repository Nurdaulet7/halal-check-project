import React from "react";
import { IoMdClose } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import {
  selectScannedProduct,
  selectScannedProductIsLoading,
  selectError,
} from "../../redux/slices/barcodeSlice";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Scanner.module.css";
// import { setError } from "../../redux/slices/errorSlice";
// import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { TbFaceIdError } from "react-icons/tb";
import { MagnifyingGlass } from "react-loader-spinner";

export const ScannedProductDetails = () => {
  const product = useSelector(selectScannedProduct);
  const isLoading = useSelector(selectScannedProductIsLoading);
  const error = useSelector(selectError);
  // const { scannedProductSlug } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/scanner");
  };

  if (isLoading)
    return (
      <div className={styles.loader}>
        <MagnifyingGlass
          visible={true}
          height="100"
          width="100"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
        <p>Searching.....</p>
      </div>
    );
  if (error)
    return (
      <div className={styles.productDetail}>
        <div className={styles.header}>
          <div className={styles.productName}>
            <h1>{error}</h1>
            <span className={styles.barcode}>
              Sorry, we couldn't find the product
            </span>
          </div>
          <button onClick={handleBack}>
            <IoMdClose />
          </button>
        </div>
        <div className={`${styles.status} ${styles.haram}`} />
        <div className={styles.error}>
          <TbFaceIdError />
        </div>
      </div>
    );
  if (!product || product.length === 0)
    return (
      <div className={styles.productDetail}>
        <div className={styles.header}>
          <div className={styles.productName}>
            <h1>Not Found</h1>
            <span className={styles.barcode}>
              Sorry, we couldn't find the product you're looking for in our
              database.
            </span>
          </div>
          <button onClick={handleBack}>
            <IoMdClose />
          </button>
        </div>

        <div className={`${styles.status} ${styles.doubtful}`} />
      </div>
    );
  return (
    <div className={styles.productDetail}>
      <div className={styles.header}>
        <div className={styles.productName}>
          <h1>{product[0].name}</h1>
          <span
            className={styles.barcode}
          >{`Barcode: ${product[0].barcode}`}</span>
        </div>
        <button onClick={handleBack}>
          <IoMdClose />
        </button>
      </div>

      <div
        className={`${styles.status} ${
          product[0].status.toLowerCase() === "halal"
            ? styles.halal
            : product[0].status.toLowerCase() === "haram"
            ? styles.haram
            : styles.doubtful
        }`}
      >
        {`This product is ${product[0].status}`}
      </div>

      <div className={styles.productPage}>
        <div className={styles.productPageTop}>
          <div className={styles.productImage}>
            <img src={product[0].imageUrl} alt="product" />
          </div>
          <div className={styles.productDetails}>
            <div className={styles.content}>
              <div className={styles.additives}>
                <h3>Additivies:</h3>
                <ul>
                  {product[0].additives.map((additive) => {
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
                {/* <p>{product.ingredients.description}</p> */}
                <p>{product[0].ingredients[0].description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.information}>
            <div className={styles.countryOfOrigin}>
              <h3>Country of origin:</h3>
              <p>{`${product[0].originCountry.name}, ${product[0].originCountry.code}`}</p>
            </div>
            <div className={styles.storage}>
              <h3>Storage:</h3>
              <p>{product[0].storage}</p>
            </div>
            <div className={styles.company}>
              <h3>Companies:</h3>
              <p>{product[0].company}</p>
            </div>
          </div>
          {product[0].certified && (
            <div className={styles.certifiedDoc}>
              <FiCheckCircle id={styles.iconCertified} />
              <p>
                Certified by:{" "}
                <a
                  href={product[0].certificate.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product[0].certificate.name}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
