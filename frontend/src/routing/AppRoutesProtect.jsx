import { Home } from "../components/pages/Home";
import AdminArticles from "../components/pages/article/Admin-Articles";
import { Create } from "../components/pages/article/Create-article";
import { Edit } from "../components/pages/article/Edit-article";
import MyArticles from "../components/pages/article/My-Articles";
import AdminUsers from "../components/pages/login/AdminUsers";
import { ChangePassword } from "../components/pages/login/Change-password";
import { Login } from "../components/pages/login/Login";
import { PasswordRecovery } from "../components/pages/login/Password-recovery";
import { Register } from "../components/pages/login/Register";

class AppRoutesProtect {
  #response(condition, route1, route2) {
    if (condition) {
      return route1;
    } else {
      return route2;
    }
  }

  login(context) {
    return this.#response(context.login, <Home />, <Login />);
  }
  register(context) {
    return this.#response(context.login, <Home />, <Register />);
  }
  myArticle(context) {
    return this.#response(context.login, <MyArticles />, <Home />);
  }
  createArticle(context) {
    return this.#response(context.login, <Create />, <Home />);
  }
  editArticle(context) {
    return this.#response(context.login, <Edit />, <Home />);
  }
  recoveryPassword(context) {
    return this.#response(context.login, <Home />, <PasswordRecovery />);
  }
  changePassword(context) {
    return this.#response(context.login, <Home />, <ChangePassword />);
  }
  adminUsers(context) {
    console.log("admin", context.admin);
    return this.#response(
      context.login && context.admin,
      <AdminUsers />,
      <Home />
    );
  }
  adminArticles(context) {
    return this.#response(
      context.login && context.admin,
      <AdminArticles />,
      <Home />
    );
  }
}

export default AppRoutesProtect;
