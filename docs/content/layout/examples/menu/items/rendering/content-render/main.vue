<template>
  <div>
    <div>
      <kendo-menu :items="items">
        <template #contentRender="{ props }">
          <div :style="{ padding: '10px' }">
            Custom content for itemId: {{ props.itemId }}, text: {{ props.item.text }}
          </div>
        </template>
      </kendo-menu>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Menu as KendoMenu } from "@progress/kendo-vue-layout";
import { heartIcon } from "@progress/kendo-svg-icons";

const items = ref([
    {
        text: "Item1",
        contentRender: "contentRender",
    },
    {
        text: "Item2",
        svgIcon: heartIcon,
        items: [{ text: "Item2.1" }, { text: "Item2.2" }],
    },
]);
</script>
