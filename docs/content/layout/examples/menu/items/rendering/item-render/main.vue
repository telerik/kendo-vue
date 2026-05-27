<template>
  <div>
    <div>
      <kendo-menu :items="items">
        <template #itemRender="{ props }">
          <div>itemId: {{ props.itemId }}, Custom text</div>
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
        render: "itemRender",
    },
    {
        text: "Item2",
        svgIcon: heartIcon,
        items: [{ text: "Item2.1" }, { text: "Item2.2" }],
    },
]);
</script>
