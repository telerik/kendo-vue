<template>
  <div>
    <SplitButton :items="items" :text="'Save'" />
  </div>
</template>

<script setup>
import { SplitButton } from "@progress/kendo-vue-buttons";
import { ref } from "vue";

const items = ref(["Save as", "Upload to drive"]);
</script>
