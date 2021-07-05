import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import KendoGrid from "../components/KendoGrid.vue";
import DropDowns from "../components/DropDowns.vue";
import Dialogs from "../components/Dialogs.vue";
import DateInputs from "../components/DateInputs.vue";
import Inputs from "../components/Inputs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Grid",
    name: "Grid",
    component: KendoGrid
  },
  {
    path: "/DropDowns",
    name: "DropDowns",
    component: DropDowns
  },
  {
    path: "/Dialogs",
    name: "Dialogs",
    component: Dialogs
  },
  {
    path: "/DateInputs",
    name: "DateInputs",
    component: DateInputs
  },
  {
    path: "/Inputs",
    name: "Inputs",
    component: Inputs
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;