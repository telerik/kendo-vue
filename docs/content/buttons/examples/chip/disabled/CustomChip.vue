<template>
    <Chip
      :rounded="'full'"
      :data-item="dataItem"
      :disabled="dataItem.disabled"
      :text="text"
      :value="value"
      :removable="true"/>
  </template>

<script setup>
import { Chip } from '@progress/kendo-vue-buttons';

defineProps({
    dataItem: Object,
    value: String,
    text: String
});
</script>
