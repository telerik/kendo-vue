import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Grid from "@/components/Grid.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Grid",
        name: "Grid",
        component: Grid,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;