<template>
  <div class="example">
    <FloatingActionButton :items="items" :svg-icon="gearIcon" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import {
    gearIcon,
    plusIcon,
    pencilIcon,
    trashIcon,
} from "@progress/kendo-svg-icons";

const items = ref([
    { svgIcon: plusIcon, text: "Create" },
    { svgIcon: pencilIcon, text: "Edit" },
    { svgIcon: trashIcon, text: "Delete" },
]);

</script>
