"use client";

import { news } from "@/types";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Article from "../components/Article";
import styles from "../components/TopHeadliners.module.css";

const Search = () => {
  const [newsData, setNewsData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.get("q") : null;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/everything?apiKey=ebef6040e2b04c249aba291f8842a368&q=${search}&pageSize=10`,
          { cache: "no-store" }
        );
        const responseToJson = await response.json();
        const randomArticle: news[] = responseToJson?.articles;
        const filterArticles = randomArticle.filter(
          (article) => article?.source.id !== null
        );
        setLoading(false);
        setNewsData(filterArticles);
      } catch (error) {
        if (typeof error === "object" && error !== null) {
          console.log(error.toString());
        } else {
          console.log("Unexpected error", error);
        }
      }
    };
    getNews();

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div className={styles.TopHeadlinersContainer}>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          {newsData.map((article: news, idx: number) => (
            <div
              key={`${article?.title}-${idx}`}
              className={styles.HeadlinerContainer}
            >
              <Article data={article} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Search;
