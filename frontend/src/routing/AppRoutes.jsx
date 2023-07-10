import { Home } from "../components/pages/Home";
import { Article } from "../components/pages/article/Article";
import { useRoutes } from "react-router-dom";
import { NotFound } from "../components/pages/NotFound";
import useLoginVerification from "../helpers/loginVerification";
import { useContext } from "react";
import { GlobalStateContext } from "../context";
import AppRoutesProtect from "./AppRoutesProtect";
import { Search } from "../components/pages/article/Search";

const AppRoutes = () => {
  const protect = new AppRoutesProtect();
  const context = useContext(GlobalStateContext);
  useLoginVerification();

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
      element: protect.createArticle(context),
    },
    {
      path: "/edit",
      element: protect.editArticle(context),
    },
    {
      path: "/my-articles",
      element: protect.myArticle(context),
    },
    {
      path: "/login",
      element: protect.login(context),
    },
    {
      path: "/sign-up",
      element: protect.register(context),
    },
    {
      path: "/recovery-password",
      element: protect.recoveryPassword(context),
    },
    {
      path: "/change-password",
      element: protect.recoveryPassword(context),
    },
    {
      path: "/admin-users",
      element: protect.adminUsers(context),
    },
    {
      path: "/admin-articles",
      element: protect.adminArticles(context),
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
};
export default AppRoutes;
