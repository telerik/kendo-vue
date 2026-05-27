<template>
  <div>
    <div>
      <kendo-menu :items="items" :item-render="itemRender">
        <template #myTemplate>
          `itemId: ${props.itemId}, text: ${props.item.text}`;
        </template>
      </kendo-menu>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Menu as KendoMenu } from "@progress/kendo-vue-layout";
import { heartIcon } from "@progress/kendo-svg-icons";

const itemRender = "myTemplate";

const items = ref([
    {
        text: "Item1",
    },
    {
        text: "Item2",
        svgIcon: heartIcon,
        items: ["Item2.1", "Item2.2"],
    },
]);
</script>
