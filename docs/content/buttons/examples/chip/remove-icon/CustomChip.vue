<template>
  <chip
    :rounded="'full'"
    :removable="dataItem.removable"
    :remove-svg-icon="dataItem.removeIcon"
    :text="text"
    :value="value"
  />
</template>

<script setup>
import { Chip as chip } from "@progress/kendo-vue-buttons";

defineProps({
    dataItem: Object,
    value: String,
    text: String,
});
</script>
