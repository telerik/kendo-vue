import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import Profile from "./components/Profile.vue";
import Team from "./components/Team.vue";
import Info from "./components/Info.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory("/kendo-vue/coffee-warehouse/"),
  routes: [
    { path: "/", alias: "/team", name: "team-members", component: Team },
    { path: "/dashboard", name: "dashboard", component: Dashboard },
    { path: "/profile", name: "profile", component: Profile },
    { path: "/info", name: "info", component: Info },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});
export default router;
