<template>
  <div class="example">
    <FloatingActionButton :items="items" :svg-icon="shareIcon" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import { shareIcon, userIcon } from "@progress/kendo-svg-icons";

const items = ref([
    { svgIcon: userIcon, text: "Adam" },
    { svgIcon: userIcon, text: "Ellie", disabled: true },
    { svgIcon: userIcon, text: "Paul" },
]);
</script>
