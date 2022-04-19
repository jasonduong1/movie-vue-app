import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MoviesNew from "../views/MoviesNew.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesEdit from "../views/MoviesEdit.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import LogOut from "../views/LogOut.vue";
import ActorsIndex from "../views/ActorsIndex.vue";
import ActorsShow from "../views/ActorsShow.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/movies",
    name: "movies",
    component: MoviesIndex,
  },
  {
    path: "/movies/new",
    name: "new movies",
    component: MoviesNew,
  },
  {
    path: "/movies/:id",
    name: "show movie",
    component: MoviesShow,
  },
  {
    path: "/movies/:id/edit",
    name: "edit movie",
    component: MoviesEdit,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogOut,
  },
  {
    path: "/actors",
    name: "actors",
    component: ActorsIndex,
  },
  {
    path: "/actors/:id",
    name: "show actor",
    component: ActorsShow,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
