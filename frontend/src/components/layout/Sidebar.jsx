import "../../styles/sidebar.css";
import { useContext, useEffect, useState } from "react";
import { global } from "../../helpers/global";
import { fetchHelper } from "../../helpers/fetchHelper";
import { GlobalStateContext } from "../../context";

export const Sidebar = () => {
  const context = useContext(GlobalStateContext);
  const [user, setUser] = useState();

  const userInfo = async () => {
    try {
      console.log(context.viewArticle);
      const URI = global.url + "user/" + context.viewArticle.userId;
      const { data } = await fetchHelper(URI, "GET");
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    userInfo();
  }, [context.viewArticle]);

  return (
    <div>
      <section className="sidebar-user">
        <div className="sidebar-user">
          <img
            className="logo-user"
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg?w=136&h=136"
            alt=""
          />
          <div>
            <h1>
              {user?.name} {user?.lastname}
            </h1>
            <h2>{user?.role === "default" ? "User" : "Admin"}</h2>
          </div>
        </div>
      </section>
      <div className="sidebar-separator"></div>
      <section className="sidebar-cards">
        {user?.articles?.map((article, index) => {
          return (
            <div key={index} className="card-container">
              <img
                className="card-img"
                src="https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg"
                alt=""
              />
              <div className="card-content">
                <div className="card-info">
                  <h2>{article.title}</h2>
                  <h3>{article.createAt}</h3>
                </div>
                <img
                  className="logo-user"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg?w=136&h=136"
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
