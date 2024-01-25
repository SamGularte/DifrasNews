import { getNewsSearch } from "@/api";
import { removeDuplicatedData } from "@/utils";
import Article from "../components/Article";
import styles from "../components/TopHeadliners.module.css";

const Science = async () => {
  const newsScience = await getNewsSearch("science");
  const filterArticles = removeDuplicatedData(newsScience);
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

export default Science;
