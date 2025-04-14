<template>
    <chip
      :rounded="'full'"
      :removable="dataItem.removable"
      :remove-svg-icon="dataItem.removeIcon"
      :text="text"
      :value="value"
    />
  </template>
  <script>
  import { Chip } from "@progress/kendo-vue-buttons";
  
  export default {
    name: "CustomChip",
    components: {
      chip: Chip,
    },
    props: {
      dataItem: Object,
      value: String,
      text: String,
    },
  };
  </script>
  