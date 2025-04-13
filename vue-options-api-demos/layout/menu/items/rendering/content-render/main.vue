<template>
  <div>
    <div>
      <kendo-menu :items="items">
        <template v-slot:contentRender="{ props }">
          <div
            :style="{ padding: '10px' }"
          >
            Custom content for itemId: {{props.itemId}}, text: {{props.item.text}}
          </div>
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
          contentRender: "contentRender",
        },
        {
          text: "Item2",
          svgIcon: heartIcon,
          items: [{ text: 'Item2.1' },{ text: 'Item2.2'}]
        },
      ],
    };
  },
};
</script>
