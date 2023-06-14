import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FaqPage from "../pages/FaqPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage
  },
  {
    path: "/faq",
    name: "Faq",
    component: FaqPage
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage
  }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

export default router;
