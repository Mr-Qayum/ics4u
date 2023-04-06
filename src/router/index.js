import { createRouter, createWebHistory } from "vue-router";
import BlogView from "../views/BlogView.vue"
import FunView from "../views/FunView.vue"
import InfoView from "../views/InfoView.vue"
import RootView from "../views/RootView.vue"

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
  ],
});

export default router;
