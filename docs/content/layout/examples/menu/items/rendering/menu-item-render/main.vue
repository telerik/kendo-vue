<template>
  <div>
    <Menu :items="items">
      <template #itemRender="{ props }">
        <div>itemId: {{ props.itemId }}, Custom text</div>
      </template>
    </Menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Menu } from "@progress/kendo-vue-layout";
import {
    menuFilterIcon,
    sortAscSmallIcon,
    sortDescSmallIcon,
} from "@progress/kendo-svg-icons";

const items = ref([
    {
        text: "Order ID",
        items: [
            { text: "Filter", svgIcon: menuFilterIcon },
            { text: "Sort Ascending", svgIcon: sortAscSmallIcon },
            { text: "Sort Descending", svgIcon: sortDescSmallIcon },
        ],
    },
    {
        text: "Ship Country",
        items: [
            { text: "Filter", svgIcon: menuFilterIcon },
            { text: "Sort Ascending", svgIcon: sortAscSmallIcon },
            { text: "Sort Descending", svgIcon: sortDescSmallIcon },
        ],
    },
    {
        text: "Ship Address",
        items: [
            { text: "Filter", svgIcon: menuFilterIcon },
            { text: "Sort Ascending", svgIcon: sortAscSmallIcon },
            { text: "Sort Descending", svgIcon: sortDescSmallIcon },
        ],
    },
]);
</script>
