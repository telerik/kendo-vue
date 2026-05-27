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
        cssClass: "active",
    },
    {
        text: "Item2",
        cssStyle: {
            backgroundColor: "#d3d3d3",
        },
    },
]);
</script>
