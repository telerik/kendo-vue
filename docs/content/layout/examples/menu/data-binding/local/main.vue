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
    },
    {
        text: "Second item",
        items: [
            {
                text: "Second item child item",
            },
        ],
    },
]);
</script>
