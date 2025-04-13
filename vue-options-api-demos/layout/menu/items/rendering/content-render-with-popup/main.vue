<template>
  <div>
    <div>
      <kendo-menu :items="items" :item-render="itemRender">
        <template v-slot:myTemplate="{ props }">
          `itemId: ${props.itemId}, text: ${props.item.text}`;
        </template>
      </kendo-menu>
    </div>
  </div>
</template>

<script>
import { Menu } from "@progress/kendo-vue-layout";
import {
  heartIcon
} from "@progress/kendo-svg-icons";

export default {
  components: {
    "kendo-menu": Menu,
  },
  data: function () {
    return {
      itemRender: "myTemplate",
      items: [
        {
          text: "Item1",
        },
        {
          text: "Item2",
          svgIcon: heartIcon,
          items: ["Item2.1", "Item2.2"],
        },
      ],
    };
  },
  methods: {
    resetMenu () {
      this.$refs.menu.reset();
    },
    clearFilter() {
      setChosenFilter("");
    }
  }
};
</script>
