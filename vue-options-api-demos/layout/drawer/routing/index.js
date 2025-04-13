import { createWebHistory, createRouter } from "vue-router";
import Home from "./Home";
import About from "./About";
import Products from "./Products";

const routes = [
    {
        path: "/layout/drawer/routing/home",
        name: "Home",
        component: Home
    },
    {
        path: "/layout/drawer/routing/about",
        name: "About",
        component: About
    },
    {
        path: "/layout/drawer/routing/products",
        name: "Products",
        component: Products
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
