import { getNewsTopHeadlines } from "@/api";
import { removeDuplicatedData } from "@/utils";
import styles from "./TopHeadliners.module.css";
import Article from "./Article";

const TopHeadlines = async () => {
  const newsTop = await getNewsTopHeadlines();
  const filterArticles = removeDuplicatedData(newsTop);
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

export default TopHeadlines;
