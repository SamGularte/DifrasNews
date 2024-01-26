import React from "react";
import styles from "./loading.module.css";

const Loader = () => {
  return (
    <div className={styles.LoadingContainer}>
      <p>loading...</p>
    </div>
  );
};

export default Loader;
