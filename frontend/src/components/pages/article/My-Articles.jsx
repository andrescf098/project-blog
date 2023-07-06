import { useEffect, useState } from "react";
import { global } from "../../../helpers/global";
import { fetchHelper } from "../../../helpers/fetchHelper";
import ListArticle from "./ListArticle";
import { getIdFromToken } from "../../../helpers/sessionUtils";

const MyArticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const id = getIdFromToken();
    console.log(id);
    const URI = global.url + "articles/article/" + id;
    console.log(URI);
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

export default MyArticles;
