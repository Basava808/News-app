import { NEWS_API_KEY } from "./config";

export const getArticles = async url => {
    const response = await fetch(
      `${url}&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    return json;
  };

  export const searchArticles = async(val) => {
    const response = await fetch(
        `https://newsapi.org/v2/everything?q=${val}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
      );
    const json = await response.json();
    return json;
  };