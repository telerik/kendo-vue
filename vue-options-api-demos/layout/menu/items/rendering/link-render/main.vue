<template>
  <div>
    <div>
      <kendo-menu :items="items">
        <template v-slot:linkRender="{ props }">
            <MenuItemLink :url="props.item.url" :opened="props.opened">
        
          <span v-if="props.item.icon"
            :class="`k-icon k-i-${props.item.icon}`"
            role="presentation"
            key="0"
          />
            {{ props.item.text }}
          <MenuItemArrow v-if="props.item.items && props.item.items.length > 0"
            :itemId="props.itemId"
            :vertical-menu="false"
            :dir="props.dir"
            key="1"
          />
          </MenuItemLink>
        </template>
      </kendo-menu>
    </div>
  </div>
</template>

<script>
import { Menu, MenuItemLink, MenuItemArrow } from "@progress/kendo-vue-layout";
import {
  heartIcon
} from "@progress/kendo-svg-icons";

export default {
  components: {
    "kendo-menu": Menu,
    MenuItemLink,
    MenuItemArrow
  },
  data: function () {
    return {
      items: [
        { text: "Item1" },
        {
          text: "Item2",
          linkRender: 'linkRender',
          svgIcon: heartIcon,
          items: [{ text: "Item2.1" }, { text: "Item2.2" }],
        },
      ],
    };
  },
};
</script>
