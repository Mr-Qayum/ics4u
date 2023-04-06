import { createRouter, createWebHistory } from "vue-router";
import BlogView from "../views/BlogView.vue"
import FunView from "../views/FunView.vue"
import InfoView from "../views/InfoView.vue"
import RootView from "../views/RootView.vue"
import ErrorView from "../views/ErrorView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: RootView,
    },
    {
      path: "/blog",
      component: BlogView,
    },
    {
      path: "/fun",
      component: FunView,
    },
    {
      path: "/info",
      component: InfoView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: ErrorView,
    },
  ],
});

export default router;
