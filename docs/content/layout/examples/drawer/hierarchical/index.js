import { createWebHistory, createRouter } from "vue-router";
import Education from "./Education.vue";
import Food from "./Food.vue";
import JapaneseFood from "./JapaneseFood.vue";
import ItalianFood from "./ItalianFood.vue";
import Travel from "./Travel.vue";
import Europe from "./Europe.vue";
import NorthAmerica from "./NorthAmerica.vue";

const routes = [
    {
        icon: "pencil",
        id: 1,
        path: "/layout/drawer/hierarchical/education",
        name: "Education",
        component: Education
    },
    {
        separator: true
    },
    {
        text: "Food",
        id: 2,
        path: "/layout/drawer/hierarchical/food",
        ["data-expanded"]: true,
        component: Food
    },
    {
        text: "Japanese Food",
        id: 4,
        parentId: 2,
        path: "/layout/drawer/hierarchical/food/japanese",
        component: JapaneseFood
    },
    {
        text: "Italian Food",
        id: 5,
        parentId: 2,
        path: "/layout/drawer/hierarchical/food/italian",
        component: ItalianFood
    },
    {
        separator: true
    },
    {
        text: "Travel",
        ["data-expanded"]: true,
        id: 3,
        path: "/layout/drawer/hierarchical/travel",
        component: Travel
    },
    {
        text: "Europe",
        id: 6,
        parentId: 3,
        path: "/layout/drawer/hierarchical/travel/europe",
        component: Europe
    },
    {
        text: "North America",
        id: 7,
        parentId: 3,
        path: "/layout/drawer/hierarchical/travel/america",
        component: NorthAmerica
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
