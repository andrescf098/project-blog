import { Sidebar } from "../../layout/Sidebar";
import "../../../styles/article.css";
import { useContext } from "react";
import { GlobalStateContext } from "../../../context";

export const Article = () => {
  const context = useContext(GlobalStateContext);
  return (
    <div className="article-container">
      <Sidebar />
      <article className="article">
        <section className="article-header">
          <h1>{context.viewArticle.title}</h1>
          <h2>{context.viewArticle.description}</h2>
          <h3>{context.viewArticle.date}</h3>
        </section>
        <div className="article-separator"></div>
        <section className="article-body">
          <p>{context.viewArticle.content}</p>
        </section>
      </article>
    </div>
  );
};
