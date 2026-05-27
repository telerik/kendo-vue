<template>
  <ProgressBar :value="value" />
</template>

<script setup>
import { ref } from "vue";
import { ProgressBar } from "@progress/kendo-vue-progressbars";

const value = ref(55);
</script>
