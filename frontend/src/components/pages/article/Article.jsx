import { Sidebar } from "../../layout/Sidebar";
import "../../../styles/article.css";
import { useContext } from "react";
import { GlobalStateContext } from "../../../context";
import { global } from "../../../helpers/global";

export const Article = () => {
  const context = useContext(GlobalStateContext);
  return (
    <div className="article-container">
      <Sidebar />
      <article className="article">
        <section className="article-header">
          <h1>{context.viewArticle?.title}</h1>
          <h2>{context.viewArticle?.description}</h2>
          <h3>{context.viewArticle?.date?.split("T")[0]}</h3>
        </section>
        <div className="article-separator"></div>
        <section className="article-body">
          <img
            src={
              !context.viewArticle?.image
                ? "https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg"
                : `${global.url}image/${context.viewArticle?.image}`
            }
            alt=""
          />
          <p>{context.viewArticle.content}</p>
        </section>
      </article>
    </div>
  );
};
