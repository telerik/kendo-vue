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
        text: "First item",
        items: [{ text: "Child item 1.1" }, { text: "Child item 1.2" }],
    },
    {
        text: "Second item",
    },
]);
</script>
