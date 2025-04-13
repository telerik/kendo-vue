<template>
  <div>
    <div>
      <kendo-menu :items="items">
        <template v-slot:itemRender="{ props }">
          <div>itemId: {{ props.itemId }}, Custom text</div>
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
      items: [
        {
          text: "Item1",
          render: "itemRender",
        },
        {
          text: "Item2",
          svgIcon: heartIcon,
          items: [{ text: 'Item2.1' }, { text: 'Item2.2' }],
        },
      ],
    };
  },
};
</script>
