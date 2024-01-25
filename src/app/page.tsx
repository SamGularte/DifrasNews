import TopHeadlines from "./components/TopHeadlines";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={styles.headlinersTitle}>Highlights</h1>
      <hr />
      <TopHeadlines />
    </main>
  );
}
