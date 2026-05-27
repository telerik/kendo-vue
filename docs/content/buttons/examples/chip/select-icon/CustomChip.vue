<template>
  <Chip
    :rounded="'full'"
    :selected-svg-icon="dataItem.selectedIcon"
    :text="text"
    :value="value"
  />
</template>

<script setup>
import { Chip } from "@progress/kendo-vue-buttons";

defineProps({
    dataItem: Object,
    value: String,
    text: String,
});
</script>
