import { createWebHistory, createRouter } from "vue-router";
import Inbox from "./Inbox";
import Notifications from "./Notifications";
import Attachments from "./Attachments";
import Favourites from "./Favourites";
import Calendar from "./Calendar";

const routes = [
    {
        path: "/layout/drawer/overview/inbox",
        name: "Inbox",
        component: Inbox
    },
    {
        path: "/layout/drawer/overview/notifications",
        name: "Notifications",
        component: Notifications
    },
    {
        path: "/layout/drawer/overview/attachments",
        name: "Attachments",
        component: Attachments
    },
    {
        path: "/layout/drawer/overview/favourites",
        name: "Favourites",
        component: Favourites
    },
    {
        path: "/layout/drawer/overview/calendar",
        name: "Calendar",
        component: Calendar
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
