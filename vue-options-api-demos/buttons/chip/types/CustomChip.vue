<template>
  <Chip
    :rounded="'full'"
    :data-item="dataItem"
    :theme-color="dataItem.type"
    :text="text"
    :value="value"
    :removable="true"
    :class="dataItem.type === null ? 'custom-color' : undefined"
  />
</template>
<script>
import { Chip } from "@progress/kendo-vue-buttons";

export default {
  name: "CustomChip",
  components: {
    Chip,
  },
  props: {
    dataItem: Object,
    value: String,
    text: String,
  },
};
</script>
<style>
.custom-color {
  background-color: green;
  color: orange;
}
</style>
