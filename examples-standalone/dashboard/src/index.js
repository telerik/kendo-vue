import { createWebHistory, createRouter } from "vue-router";
import Issues from "./components/IssuesComponent.vue";
import Dashboard from "./components/DashboardComponent.vue";
import Profile from "./components/ProfileComponent.vue";
import SignIn from "./components/SignInComponent.vue";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/issues",
        name: "Issues",
        component: Issues
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    },
    {
        path: "/signin",
        name: "SignIn",
        component: SignIn
    }
];

const router = createRouter({
    history: createWebHistory("/kendo-vue/dashboard/"),
    routes
});

export default router;
