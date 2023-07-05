import { useRoutes, BrowserRouter, Outlet } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Article } from "../components/pages/article/Article";
import { Create } from "../components/pages/article/Create-article";
import { Edit } from "../components/pages/article/Edit-article";
import { Nav } from "../components/layout/Nav";
import { NotFound } from "../components/pages/NotFound";
import { Footer } from "../components/layout/Footer";
import { Login } from "../components/pages/login/Login";
import { Register } from "../components/pages/login/Register";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/article",
      element: (
        <>
          <Article /> <Outlet />
        </>
      ),
      children: [
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "edit",
          element: <Edit />,
        },
      ],
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

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
