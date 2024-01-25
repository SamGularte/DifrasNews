import { news } from "@/types";

export const removeDuplicatedData = (articles: any) => {
  const randomArticle: news[] = articles?.articles;
  const filterArticles = randomArticle
    ? randomArticle.filter((article) => article?.source.id !== null)
    : [];
  return filterArticles;
};
