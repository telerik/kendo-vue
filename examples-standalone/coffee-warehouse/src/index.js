import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import ResourcePage from "./components/ResourcePage.vue";
import AccountPage from "./components/AccountPage.vue";
import NotFound from "./components/NotFound.vue";
import Login from "./components/Login.vue";

const resource = (path, module) => ({ path, component: ResourcePage, props: { module } });
const account = (path, kind) => ({ path, component: AccountPage, props: { kind } });
const router = createRouter({
  history: createWebHistory("/kendo-vue/coffee-warehouse/"),
  routes: [
    { path: "/login", component: Login },
    { path: "/", component: Dashboard },
    resource("/inventory", "inventory"), resource("/purchase-orders", "purchase-orders"), resource("/sales-orders", "sales-orders"), resource("/suppliers", "suppliers"),
    resource("/planning", "planning"), resource("/operations", "operations"), resource("/assets", "assets"), resource("/manufacturing", "manufacturing"), resource("/finance", "finance"),
    account("/profile", "profile"), account("/settings", "settings"), account("/help", "help"), account("/notifications", "notifications"),
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});
export default router;
