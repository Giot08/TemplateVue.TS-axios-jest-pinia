import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    // component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "About",
    // component: () => import("../views/GetUsersView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
