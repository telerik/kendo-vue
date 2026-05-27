import { createWebHistory, createRouter } from "vue-router";
import Inbox from "./Inbox";
import Notifications from "./Notifications";
import Attachments from "./Attachments";
import Favourites from "./Favourites";
import Calendar from "./Calendar";

const routes = [
    {
        path: "/layout/drawer/templates/header-footer/inbox",
        name: "Inbox",
        component: Inbox
    },
    {
        path: "/layout/drawer/templates/header-footer/notifications",
        name: "Notifications",
        component: Notifications
    },
    {
        path: "/layout/drawer/templates/header-footer/attachments",
        name: "Attachments",
        component: Attachments
    },
    {
        path: "/layout/drawer/templates/header-footer/favourites",
        name: "Favourites",
        component: Favourites
    },
    {
        path: "/layout/drawer/templates/header-footer/calendar",
        name: "Calendar",
        component: Calendar
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
