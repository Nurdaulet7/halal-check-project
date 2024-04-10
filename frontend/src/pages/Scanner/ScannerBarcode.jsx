import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";
import styles from "./Scanner.module.css";

import React from "react";
const ScannerBarcode = () => {
  return (
    <>
      <HeaderComponent hasFilter={false} />
      <div className={styles.mainContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default ScannerBarcode;
