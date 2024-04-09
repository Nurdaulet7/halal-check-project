import { NavLink } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";
import styles from "./Main.module.css";
import { Footer } from "../../components/Footer/Footer";

const Main = () => {
  return (
    <>
      <HeaderComponent hasFilter={false} />
      <div className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <h1>HalalCheck</h1>
          <hr />
          <p className={styles.contentText}>
            <span>HalalCheck</span> is an informative resource for determining
            the halal nature of food. It includes a database of food additives
            indicating their status and the ability to search by E-supplement
            number.
          </p>
          <p className={styles.contentText}>
            Trust us and be sure of the composition of the products that you
            choose for yourself and your loved ones!
          </p>
          <p className={styles.contentText}>
            Let's try to check the products and start acting
          </p>

          <div>
            <button className={styles.btn} href="#">
              <NavLink id={styles.link} to={"/vertification"}>
                Halal Verification
              </NavLink>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
