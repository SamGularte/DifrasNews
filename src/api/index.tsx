const apikey = "ebef6040e2b04c249aba291f8842a368";

export const getNewsTopHeadlines = async () => {
  const newsData = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`,
    { cache: "no-store" }
  );
  return newsData.json();
};

export const getNewsSearch = async (keyword: string) => {
  const newsData = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${apikey}&q=${keyword}&pageSize=10`,
    { cache: "no-store" }
  );
  return newsData.json();
};
