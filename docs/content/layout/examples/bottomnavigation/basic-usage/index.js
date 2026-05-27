import { createWebHistory, createRouter } from "vue-router";
import Inbox from "./Inbox";
import Calendar from "./Calendar";
import Profile from "./Profile";

const routes = [
    {
        path: "/layout/bottomnavigation/overview/inbox",
        name: "Inbox",
        component: Inbox
    },
    {
        path: "/layout/bottomnavigation/overview/calendar",
        name: "Calendar",
        component: Calendar
    },
    {
        path: "/layout/bottomnavigation/overview/profile",
        name: "Profile",
        component: Profile
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
