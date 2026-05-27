<template>
  <div>
    <div>
      <kendo-menu :items="items" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Menu as KendoMenu } from "@progress/kendo-vue-layout";

const items = ref([
    {
        text: "Item1",
        disabled: true,
        items: [{ text: "Item1.1" }],
    },
    {
        text: "Item2",
        disabled: true,
    },
]);
</script>
