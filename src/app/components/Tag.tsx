import styles from "./Tag.module.css";

const Tag = ({ data }: { data: string }) => {
  return <div className={styles.tagContainer}>{data}</div>;
};

export default Tag;
