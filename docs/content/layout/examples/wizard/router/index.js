import { createWebHistory, createRouter } from "vue-router";
import Overview from "./Overview";
import UserDetails from "./UserDetails";
import Register from "./Register";

const routes = [
    {
        path: "/layout/wizard/routing/overview",
        name: "Overview",
        component: Overview
    },
    {
        path: "/layout/wizard/routing/user-details",
        name: "UserDetails",
        component: UserDetails
    },
    {
        path: "/layout/wizard/routing/register",
        name: "Register",
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
