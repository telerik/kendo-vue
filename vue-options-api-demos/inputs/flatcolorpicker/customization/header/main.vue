<template>
  <div>
    <FlatColorPicker :show-clear-button="false" :show-preview="false" />
  </div>
</template>
<script>
import { FlatColorPicker } from "@progress/kendo-vue-inputs";

export default {
  components: {
    FlatColorPicker,
  },
};
</script>
