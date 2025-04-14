<template>
    <chip
      :rounded="'full'"
      :selected-svg-icon="dataItem.selectedIcon"
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
  