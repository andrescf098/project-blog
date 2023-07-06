import { Login } from "../components/pages/login/Login";
import { Home } from "../components/pages/Home";
import { Article } from "../components/pages/article/Article";
import { useRoutes } from "react-router-dom";
import { Create } from "../components/pages/article/Create-article";
import { Edit } from "../components/pages/article/Edit-article";
import { Register } from "../components/pages/login/Register";
import { NotFound } from "../components/pages/NotFound";
import MyArticles from "../components/pages/article/My-Articles";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/article",
      element: <Article />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/edit",
      element: <Edit />,
    },
    {
      path: "/my-articles",
      element: <MyArticles />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <Register />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
};
export default AppRoutes;
