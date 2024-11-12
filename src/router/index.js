import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import PostDetail from "../components/PostDetail.vue";
import SearchResults from "../views/SearchResults.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/post/:id", name: "PostDetail", component: PostDetail, props: true },
  { path: "/search", name: "SearchResults", component: SearchResults },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
