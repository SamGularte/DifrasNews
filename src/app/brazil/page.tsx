import { getNewsSearch } from "@/api";
import { removeDuplicatedData } from "@/utils";
import Article from "../components/Article";
import styles from "../components/TopHeadliners.module.css";

const Brazil = async () => {
  const newsBrazil = await getNewsSearch("brazil");
  const filterArticles = removeDuplicatedData(newsBrazil);
  return (
    <div className={styles.TopHeadlinersContainer}>
      {filterArticles.map((article, idx) => (
        <div
          key={`${article?.title}-${idx}`}
          className={styles.HeadlinerContainer}
        >
          <Article data={article} />
        </div>
      ))}
    </div>
  );
};

export default Brazil;
