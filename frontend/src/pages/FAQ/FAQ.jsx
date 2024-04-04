import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";
import styles from "./FAQ.module.css";
import Accordion from "./AccordionItem";

export const FAQ = () => {
  return (
    <>
      <HeaderComponent hasFilter={false} />
      <div className={styles.mainContainer}>
        <h3>Frequently Asked questions and answers</h3>
        <Accordion />
      </div>
    </>
  );
};
