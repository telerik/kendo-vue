import { createWebHistory, createRouter } from "vue-router";
import Team from "./components/Team.vue";
import Profile from "./components/Profile.vue";
import Dashboard from "./components/Dashboard.vue";
import Info from "./components/Info.vue";

const routes = [
  {
    path: "/",
    name: "Team",
    component: Team,
    props: true
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/Info",
    name: "Info",
    component: Info
  }
];

const router = createRouter({
    history: createWebHistory("/kendo-vue/vite-coffee-warehouse/"),
  routes,
});

export default router;
