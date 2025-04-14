<template>
  <div>
    <Menu :items="items" :item-render="itemRender">
      <template v-slot:itemRender="{ props }">
        <div>itemId: {{ props.itemId }}, Custom text</div>
      </template>
    </Menu>
  </div>
</template>

<script>
import { Menu } from "@progress/kendo-vue-layout";
import {
  filterSmallIcon,
  sortAscSmallIcon,
  sortDescSmallIcon,
} from "@progress/kendo-svg-icons";
export default {
  components: {
    Menu,
  },
  data: function () {
    return {
      itemRender: "itemRender",
      items: [
        {
          text: "Order ID",
          items: [
            { text: "Filter", svgIcon: filterSmallIcon },
            { text: "Sort Ascending", svgIcon: sortAscSmallIcon },
            { text: "Sort Descending", svgIcon: sortDescSmallIcon },
          ],
        },
        {
          text: "Ship Country",
          items: [
            { text: "Filter", svgIcon: filterSmallIcon },
            { text: "Sort Ascending", svgIcon: sortAscSmallIcon },
            { text: "Sort Descending", svgIcon: sortDescSmallIcon },
          ],
        },
        {
          text: "Ship Address",
          items: [
            { text: "Filter", svgIcon: filterSmallIcon },
            { text: "Sort Ascending", svgIcon: sortAscSmallIcon },
            { text: "Sort Descending", svgIcon: sortDescSmallIcon },
          ],
        },
      ],
    };
  },
};
</script>
