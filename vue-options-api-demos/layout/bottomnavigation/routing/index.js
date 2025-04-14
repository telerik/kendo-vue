import { createWebHistory, createRouter } from "vue-router";
import Home from "./Home";
import Bills from "./Bills";
import Payments from "./Payments";
import Services from "./Services";
import More from "./More";

const routes = [
    {
        path: "/layout/bottomnavigation/routing/home",
        name: "Home",
        component: Home
    },
    {
        path: "/layout/bottomnavigation/routing/bills",
        name: "Bills",
        component: Bills
    },
    {
        path: "/layout/bottomnavigation/routing/payments",
        name: "Payments",
        component: Payments
    },
    {
        path: "/layout/bottomnavigation/routing/services",
        name: "Services",
        component: Services
    },
    {
        path: "/layout/bottomnavigation/routing/more",
        name: "More",
        component: More
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
