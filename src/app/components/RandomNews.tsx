import { getNewsSearch } from "@/api";
import { removeDuplicatedData } from "@/utils";
import RandomArticle from "./RandomArticle";
import styles from "./RandomNews.module.css";

const RandomNews = async () => {
  const randomNews = await getNewsSearch("economy");
  const filterArticles = removeDuplicatedData(randomNews);
  return (
    <div className={styles.randomNewsContainer}>
      <h1 className={styles.randomNewsContainerTitle}>Economy</h1>
      <hr />
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <RandomArticle data={article} />
        </div>
      ))}
    </div>
  );
};

export default RandomNews;
