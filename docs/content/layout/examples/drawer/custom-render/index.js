import { createWebHistory, createRouter } from "vue-router";
import Paris from "./Paris";
import Rome from "./Rome";
import Berlin from "./Berlin";
import Madrid from "./Madrid";

const routes = [
    {
        path: "/layout/drawer/custom-render",
        name: "Paris",
        component: Paris
    },
    {
        path: "/layout/drawer/custom-render/rome",
        name: "Rome",
        component: Rome
    },
    {
        path: "/layout/drawer/custom-render/berlin",
        name: "Berlin",
        component: Berlin
    },
    {
        path: "/layout/drawer/custom-render/madrid",
        name: "Madrid",
        component: Madrid
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
