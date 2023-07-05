import { fetchHelper } from "../../helpers/fetchHelper";
import { global } from "../../helpers/global";
import "../../styles/home.css";
import { useEffect, useState } from "react";
import ListArticle from "./article/ListArticle";

export const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const URI = global.url + "articles";
    const { data } = await fetchHelper(URI, "GET");
    setArticles(data);
  };

  return (
    <div className="home">
      <div className="home-cards">
        {articles.length >= 1 ? (
          articles.map((article, index) => {
            return (
              <ListArticle
                key={index}
                createAt={article.createAt}
                title={article.title}
                content={article.content}
              />
            );
          })
        ) : (
          <h1>Articles not found</h1>
        )}
      </div>
    </div>
  );
};
