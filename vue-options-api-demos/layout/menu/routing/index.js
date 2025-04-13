import { createWebHistory, createRouter } from "vue-router";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Team from "./Team";

const routes = [
    {
        path: "/layout/menu/routing/home",
        name: "Home",
        component: Home
    },
    {
        path: "/layout/menu/routing/about",
        name: "About",
        component: About
    },
    {
        path: "/layout/menu/routing/products",
        name: "Products",
        component: Products
    },
    {
        path: "/layout/menu/routing/about/team",
        name: "Team",
        component: Team
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
