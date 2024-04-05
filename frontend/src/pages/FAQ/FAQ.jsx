import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";
import styles from "./FAQ.module.css";
import Accordion from "./AccordionItem";

export const FAQ = () => {
  return (
    <>
      <HeaderComponent hasFilter={false} />
      <div className={styles.mainContainer}>
        <h2>Frequently Asked questions and answers</h2>
        <hr />
        <Accordion />
      </div>
    </>
  );
};
