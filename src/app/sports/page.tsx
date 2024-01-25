import { getNewsSearch } from "@/api";
import { removeDuplicatedData } from "@/utils";
import Article from "../components/Article";
import styles from "../components/TopHeadliners.module.css";

const Sports = async () => {
  const newsSports = await getNewsSearch("sports");
  const filterArticles = removeDuplicatedData(newsSports);
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

export default Sports;
